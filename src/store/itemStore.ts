import { create } from "zustand";

interface ItemState {
  item: {
    name: string;
    category: "FRUIT" | "VEGETABLE" | "NON_VEG";
    confidence: number;
  };
}

export const useItemStore = create<ItemState>(() => ({
  item: {
    name: "Apple",
    category: "FRUIT",
    confidence: 0.96
  }
}));
