import { DetectedItem } from "../types/item.types";

export function generateAIExplanation(item: DetectedItem, spoilage: number): string {
  return `
Detected ${item.name} classified as ${item.category}.
Current spoilage estimated at ${spoilage}%.
Zone temperature adjusted to minimize further degradation.
Decision optimized based on spoilage risk and energy efficiency.
`.trim();
}
