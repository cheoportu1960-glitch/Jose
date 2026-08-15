// Definición de todas las zonas del mapa
export type ZoneId = "establos" | "hipodromo" | "banco" | "subastas" | "comercial" | "admin";

export interface Zone {
  id: ZoneId;
  name: string;
  x: number; // posición X en % del mapa
  y: number; // posición Y en % del mapa
  r: number; // radio de detección
  description: string;
  type: "farm" | "shop" | "race" | "auction" | "bank" | "admin";
}

export const ZONES: Zone[] = [
  {
    id: "establos",
    name: "GRANJAS",
    x: 20,
    y: 30,
    r: 8,
    description: "Compra y gestiona tus granjas de cría de caballos",
    type: "farm",
  },
  {
    id: "hipodromo",
    name: "HIPÓDROMO",
    x: 80,
    y: 25,
    r: 8,
    description: "Participa en carreras 24/7 y gana tokens",
    type: "race",
  },
  {
    id: "banco",
    name: "BANCO",
    x: 50,
    y: 15,
    r: 7,
    description: "Gestiona tus tokens AMW3 y finanzas",
    type: "bank",
  },
  {
    id: "subastas",
    name: "SUBASTAS",
    x: 30,
    y: 70,
    r: 8,
    description: "Compra y vende caballos en subasta 24/7",
    type: "auction",
  },
  {
    id: "comercial",
    name: "CENTRO COMERCIAL",
    x: 70,
    y: 80,
    r: 10,
    description: "120 locales disponibles - 4 niveles de inversión",
    type: "shop",
  },
  {
    id: "admin",
    name: "PANEL ADMIN",
    x: 50,
    y: 50,
    r: 5,
    description: "Control del sistema (admin only)",
    type: "admin",
  },
];
