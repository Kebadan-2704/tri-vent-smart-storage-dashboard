import { Stack, Typography } from "@mui/material";
import DetectedItemCard from "./DetectedItemCard";
import { DetectedItem } from "../../types/item.types";

const mockDetectedItem: DetectedItem = {
  name: "Apple",
  category: "Fruit",
  confidence: 96,
  assignedZone: "Zone B – Fruits"
};

export default function ItemDetectionPanel() {
  return (
    <Stack spacing={2}>
      <Typography variant="h6">
        Item Detection & Classification
      </Typography>

      <DetectedItemCard item={mockDetectedItem} />
    </Stack>
  );
}
