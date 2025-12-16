import { Card, CardContent, Stack, Typography } from "@mui/material";
import FreshnessIndicator from "./FreshnessIndicator";
import RiskLevelBadge from "./RiskLevelBadge";
import { SpoilageStatus } from "../../types/spoilage.types";

const mockSpoilage: SpoilageStatus = {
  freshness: 82,
  riskLevel: "Low",
  estimatedSpoilTime: "5 days"
};

export default function SpoilageStatusPanel() {
  return (
    <Card>
      <CardContent>
        <Stack spacing={2}>
          <Typography variant="h6">
            Spoilage Prediction
          </Typography>

          <FreshnessIndicator value={mockSpoilage.freshness} />

          <RiskLevelBadge level={mockSpoilage.riskLevel} />

          <Typography variant="body2">
            Estimated spoilage in: {mockSpoilage.estimatedSpoilTime}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}
