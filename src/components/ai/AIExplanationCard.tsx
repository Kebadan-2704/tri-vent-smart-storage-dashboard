import { Card, CardContent, Typography } from "@mui/material";
import { AIExplanation } from "../../types/ai.types";

export default function AIExplanationCard({
  explanation
}: {
  explanation: AIExplanation;
}) {
  return (
    <Card>
      <CardContent>
        <Typography variant="subtitle1" fontWeight={600}>
          {explanation.title}
        </Typography>

        <Typography variant="body2" sx={{ mt: 1 }}>
          {explanation.description}
        </Typography>

        <Typography
          variant="caption"
          sx={{ display: "block", mt: 1, color: "text.secondary" }}
        >
          {explanation.timestamp}
        </Typography>
      </CardContent>
    </Card>
  );
}
