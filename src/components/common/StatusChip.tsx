import { Chip } from "@mui/material";

export default function StatusChip({ status }: { status: string }) {
  const color =
    status === "OPTIMAL"
      ? "success"
      : status === "WARNING"
      ? "warning"
      : "error";

  return <Chip label={status} color={color} size="small" />;
}
