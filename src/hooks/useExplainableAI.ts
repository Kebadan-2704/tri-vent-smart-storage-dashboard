import { useItemDetection } from "./useItemDetection";

export const useExplainableAI = () => {
  const item = useItemDetection();
  return `Detected ${item.name}. Classified as ${item.category}.`;
};
