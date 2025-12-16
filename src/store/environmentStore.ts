import { create } from "zustand";

export const useEnvironmentStore = create(() => ({
  temperature: 24,
  humidity: 60
}));
