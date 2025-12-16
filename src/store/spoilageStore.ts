import { create } from "zustand";

export const useSpoilageStore = create(() => ({
  spoilage: 28,
  freshness: 72,
  risk: "MEDIUM"
}));
