import { calculateSpoilage } from "../services/spoilageService";

export function useSpoilagePrediction() {
  return calculateSpoilage(5, 1);
}
