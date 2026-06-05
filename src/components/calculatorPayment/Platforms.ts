export interface Platform {
  id: string;
  name: string;
  percentage: number;
  fixedFee: number;
}

export const PLATFORMS: Record<string, Platform> = {
  PAYPAL: {
    id: "paypal",
    name: "PayPal",
    percentage: 5.4,
    fixedFee: 0.3,
  },
  PAYONEER: {
    id: "payoneer",
    name: "Payoneer",
    percentage: 2.0,
    fixedFee: 0,
  },
  BINANCE: {
    id: "binance",
    name: "Binance P2P",
    percentage: 0,
    fixedFee: 0,
  },
};
