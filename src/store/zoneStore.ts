import { create } from "zustand";

export type ZoneType = "FRUITS" | "VEGETABLES" | "NON_VEG";

interface ZoneState {
  zones: Record<ZoneType, { temperature: number; humidity: number }>;
}

export const useZoneStore = create<ZoneState>(() => ({
  zones: {
    FRUITS: { temperature: 5, humidity: 92 },
    VEGETABLES: { temperature: 4, humidity: 95 },
    NON_VEG: { temperature: 2, humidity: 88 }
  }
}));
