import { LinearProgress } from "@mui/material";

export default function DetectionConfidence({ value }: { value: number }) {
  return <LinearProgress value={value * 100} variant="determinate" />;
}
