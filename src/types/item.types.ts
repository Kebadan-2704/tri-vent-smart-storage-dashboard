export type ItemCategory = "Fruit" | "Vegetable" | "Non-Veg";

export interface DetectedItem {
  name: string;
  category: ItemCategory;
  confidence: number;
  assignedZone: string;
}
