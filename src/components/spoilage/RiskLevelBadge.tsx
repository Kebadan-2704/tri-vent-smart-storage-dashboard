import { Chip } from "@mui/material";
import { RiskLevel } from "../../types/spoilage.types";

export default function RiskLevelBadge({ level }: { level: RiskLevel }) {
  const color =
    level === "Low" ? "success" : level === "Medium" ? "warning" : "error";

  return <Chip label={`Risk: ${level}`} color={color} size="small" />;
}
