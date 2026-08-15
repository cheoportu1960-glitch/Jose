// Constantes del juego

export const GAME_CONFIG = {
  // Precios en AMW3 tokens
  FARM_PRICES: {
    bronce: 500_000n,
    plata: 1_000_000n,
    oro: 2_000_000n,
    diamante: 5_000_000n,
  },

  // Centro comercial - 120 locales
  COMMERCIAL_LOCALS: 120,
  LOCAL_PRICES: {
    bronce: 100_000n,
    plata: 500_000n,
    oro: 1_500_000n,
    diamante: 5_000_000n,
  },

  // Tokens totales disponibles
  TOTAL_TOKENS: 50_000_000n,

  // Velocidades del juego
  WORK_SHIFT_HOURS: 12, // 2 turnos de 12 horas
  RACE_DURATION_MINUTES: 5,

  // Comisiones
  AUCTION_FEE_PERCENT: 5n, // 5% por subasta
  RACE_FEE_PERCENT: 2n, // 2% por carrera

  // Caballos
  INITIAL_HORSE_STATS: {
    speed: 60,
    stamina: 50,
    level: 1,
  },

  // IA
  AI_DIFFICULTY_LEVELS: {
    easy: 0.5,
    normal: 0.75,
    hard: 0.9,
    legendary: 1.0,
  },
};

export const RARITY_MULTIPLIERS = {
  común: 1.0,
  rara: 1.5,
  épica: 2.5,
  legendaria: 4.0,
};

export const LEVEL_REQUIREMENTS = {
  1: 0n,
  2: 10_000n,
  3: 50_000n,
  4: 150_000n,
  5: 500_000n,
  10: 5_000_000n,
};
