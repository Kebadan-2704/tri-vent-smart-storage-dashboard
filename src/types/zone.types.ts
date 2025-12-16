export type ZoneType = "FRUITS" | "VEGETABLES" | "NON_VEG";

export interface ZoneMetrics {
  temperature: number;
  humidity: number;
  status: "OPTIMAL" | "WARNING" | "CRITICAL";
}
