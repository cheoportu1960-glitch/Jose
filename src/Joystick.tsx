import React, { useEffect, useRef } from "react";
import { input } from "./controls";

export function Joystick() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stickRef = useRef<HTMLDivElement>(null);
  const touchRef = useRef<{ id: number; x: number; y: number } | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const MAX_DISTANCE = 35;

    const updateStick = (x: number, y: number) => {
      const rect = container.getBoundingClientRect();
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      let dx = x - centerX;
      let dy = y - centerY;
      const distance = Math.hypot(dx, dy);

      if (distance > MAX_DISTANCE) {
        dx = (dx / distance) * MAX_DISTANCE;
        dy = (dy / distance) * MAX_DISTANCE;
      }

      if (stickRef.current) {
        stickRef.current.style.transform = `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px))`;
      }

      input.x = dx / MAX_DISTANCE;
      input.y = dy / MAX_DISTANCE;
    };

    const resetStick = () => {
      if (stickRef.current) {
        stickRef.current.style.transform = "translate(-50%, -50%)";
      }
      input.x = 0;
      input.y = 0;
      touchRef.current = null;
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (touchRef.current !== null) return;
      const touch = e.touches[0];
      if (touch) {
        touchRef.current = { id: touch.identifier, x: touch.clientX, y: touch.clientY };
        updateStick(touch.clientX, touch.clientY);
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (touchRef.current === null) return;
      const touch = Array.from(e.touches).find(
        (t) => t.identifier === touchRef.current?.id
      );
      if (touch) {
        updateStick(touch.clientX, touch.clientY);
      }
    };

    const handleTouchEnd = () => {
      resetStick();
    };

    container.addEventListener("touchstart", handleTouchStart, { passive: true });
    document.addEventListener("touchmove", handleTouchMove, { passive: true });
    document.addEventListener("touchend", handleTouchEnd);

    return () => {
      container.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-24 h-24 rounded-full border-2 border-gray-600 bg-gray-900/40"
    >
      <div
        ref={stickRef}
        className="absolute left-1/2 top-1/2 w-12 h-12 rounded-full border-2 border-blue-500 bg-blue-500/20"
        style={{ transform: "translate(-50%, -50%)" }}
      />
    </div>
  );
}