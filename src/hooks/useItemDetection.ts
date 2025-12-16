import { useItemStore } from "../store/itemStore";

export const useItemDetection = () => useItemStore((s) => s.item);
