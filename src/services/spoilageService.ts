import { SPOILAGE_THRESHOLDS } from "../utils/thresholds";
import { SpoilageState } from "../types/spoilage.types";

export function calculateSpoilage(daysStored: number, tempDeviation: number): SpoilageState {
  let spoilage = daysStored * 3 + tempDeviation * 4;

  spoilage = Math.min(100, Math.max(0, spoilage));

  let risk: SpoilageState["risk"] = "LOW";
  if (spoilage > SPOILAGE_THRESHOLDS.CRITICAL) risk = "CRITICAL";
  else if (spoilage > SPOILAGE_THRESHOLDS.HIGH) risk = "HIGH";
  else if (spoilage > SPOILAGE_THRESHOLDS.MEDIUM) risk = "MEDIUM";

  return {
    spoilagePercent: spoilage,
    freshnessPercent: 100 - spoilage,
    risk
  };
}
