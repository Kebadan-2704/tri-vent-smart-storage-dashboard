import { Card, CardContent, Typography } from "@mui/material";

export default function RecommendedVsActual() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Recommended vs Actual</Typography>
        <Typography>
          Recommended Temp: 4–6 °C | Actual: 5.2 °C
        </Typography>
        <Typography>
          Recommended RH: 85–95% | Actual: 92%
        </Typography>
      </CardContent>
    </Card>
  );
}
