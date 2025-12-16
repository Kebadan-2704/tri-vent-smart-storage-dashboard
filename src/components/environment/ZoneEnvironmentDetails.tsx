import { Card, CardContent, Typography, Grid } from "@mui/material";
import TemperatureChart from "./TemperatureChart";
import HumidityChart from "./HumidityChart";

export default function ZoneEnvironmentDetails() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Zone B – Fruits: Environmental Trends
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography variant="subtitle2">Temperature Trend</Typography>
            <TemperatureChart />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle2">Humidity Trend</Typography>
            <HumidityChart />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
