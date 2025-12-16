import { Stack } from "@mui/material";
import AIExplanationCard from "./AIExplanationCard";
import { AIExplanation } from "../../types/ai.types";

const mockTimeline: AIExplanation[] = [
  {
    title: "Item Classification",
    description:
      "Object detected as Apple using visual + shape features with 96% confidence.",
    timestamp: "T + 0s"
  },
  {
    title: "Zone Assignment",
    description:
      "Apple classified as fruit. Assigned to Zone B to minimize ethylene-induced spoilage.",
    timestamp: "T + 1s"
  },
  {
    title: "Spoilage Assessment",
    description:
      "Current temperature and humidity indicate low spoilage risk over next 5 days.",
    timestamp: "T + 3s"
  },
  {
    title: "Control Recommendation",
    description:
      "Maintaining 4 °C and 90% RH optimizes freshness and energy efficiency.",
    timestamp: "T + 5s"
  }
];

export default function DecisionTimeline() {
  return (
    <Stack spacing={2}>
      {mockTimeline.map((step, index) => (
        <AIExplanationCard key={index} explanation={step} />
      ))}
    </Stack>
  );
}
