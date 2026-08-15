// Sistema de controles - Teclado, Joystick, Eventos

export const input = { x: 0, y: 0 };
export const keys = new Set<string>();

export const settings = {
  sensitivity: 1,
  deadZone: 0.16,
};

const SETTINGS_KEY = "farm-horses-settings";

export function isTouchDevice(): boolean {
  return (
    (typeof window !== "undefined" &&
      (("ontouchstart" in window) ||
        (navigator.maxTouchPoints > 0) ||
        ((navigator as any).msMaxTouchPoints > 0))) ||
    false
  );
}

export function readKeyboardVector(): { x: number; y: number } {
  let x = 0;
  let y = 0;

  if (keys.has("KeyW") || keys.has("ArrowUp")) y += 1;
  if (keys.has("KeyS") || keys.has("ArrowDown")) y -= 1;
  if (keys.has("KeyA") || keys.has("ArrowLeft")) x -= 1;
  if (keys.has("KeyD") || keys.has("ArrowRight")) x += 1;

  const len = Math.hypot(x, y);
  if (len > 0) {
    x /= len;
    y /= len;
  }

  return { x, y };
}

export function saveSettings(newSettings: Partial<typeof settings>): void {
  Object.assign(settings, newSettings);
  if (typeof window !== "undefined") {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
  }
}

export function loadSettings(): typeof settings {
  if (typeof window === "undefined") return settings;
  try {
    const saved = localStorage.getItem(SETTINGS_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      Object.assign(settings, parsed);
    }
  } catch (e) {
    console.error("Error loading settings:", e);
  }
  return settings;
}
