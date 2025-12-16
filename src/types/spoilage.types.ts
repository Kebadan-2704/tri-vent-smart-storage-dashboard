export type RiskLevel = "Low" | "Medium" | "High";

export interface SpoilageStatus {
  freshness: number; // %
  riskLevel: RiskLevel;
  estimatedSpoilTime: string;
}
