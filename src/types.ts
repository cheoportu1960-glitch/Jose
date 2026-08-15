// Tipos globales del juego

export interface Player {
  id: string;
  username: string;
  avatar: string;
  level: number;
  tokens: bigint;
  farms: Farm[];
  horses: Horse[];
  createdAt: Date;
  lastActive: Date;
}

export interface Farm {
  id: string;
  playerId: string;
  name: string;
  level: "bronce" | "plata" | "oro" | "diamante";
  horses: Horse[];
  earnings: bigint;
  createdAt: Date;
}

export interface Horse {
  id: string;
  name: string;
  rarity: "común" | "rara" | "épica" | "legendaria";
  level: number;
  speed: number;
  stamina: number;
  breed: string;
  age: number;
  wins: number;
  losses: number;
  createdAt: Date;
}

export interface ShopLocal {
  id: string;
  ownerId: string | null;
  location: number; // 1-120
  level: "bronce" | "plata" | "oro" | "diamante";
  type: "tienda" | "casa de apuestas" | "veterinaria" | "equipamiento";
  income: bigint;
  createdAt: Date;
}

export interface Race {
  id: string;
  trackId: string;
  horses: Horse[];
  winners: string[];
  totalPool: bigint;
  status: "upcoming" | "running" | "finished";
  createdAt: Date;
  finishedAt?: Date;
}

export interface Auction {
  id: string;
  itemId: string;
  itemType: "horse" | "farm" | "local";
  seller: string;
  currentBid: bigint;
  highestBidder: string | null;
  status: "active" | "sold" | "cancelled";
  endsAt: Date;
  createdAt: Date;
}

export interface Transaction {
  id: string;
  type: "transfer" | "purchase" | "auction" | "race" | "income";
  from: string;
  to: string;
  amount: bigint;
  description: string;
  createdAt: Date;
  txHash?: string; // Solana transaction hash
}
