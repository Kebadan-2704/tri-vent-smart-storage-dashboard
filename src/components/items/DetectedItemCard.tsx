import { Card, CardContent, Typography, Stack, Chip } from "@mui/material";
import { DetectedItem } from "../../types/item.types";

export default function DetectedItemCard({ item }: { item: DetectedItem }) {
  return (
    <Card>
      <CardContent>
        <Stack spacing={1}>
          <Typography variant="h6">
            Detected Item: {item.name}
          </Typography>

          <Typography variant="body2">
            Category: {item.category}
          </Typography>

          <Typography variant="body2">
            Detection Confidence: {item.confidence}%
          </Typography>

          <Chip
            label={`Assigned to ${item.assignedZone}`}
            color="primary"
            size="small"
          />
        </Stack>
      </CardContent>
    </Card>
  );
}
