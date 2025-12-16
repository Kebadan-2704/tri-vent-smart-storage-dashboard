import { LinearProgress } from "@mui/material";

export default function SpoilageProgressBar({ value }: { value: number }) {
  return <LinearProgress value={value} variant="determinate" />;
}
