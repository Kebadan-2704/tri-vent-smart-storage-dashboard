import {
  Grid,
  Typography,
  Paper,
  LinearProgress,
  Stack,
  Chip,
} from "@mui/material";
import ZoneOverviewGrid from "../components/zones/ZoneOverviewGrid";
import { useSimulation } from "../hooks/useSimulation";

export default function Zones() {
  const { temperature, humidity, freshness } = useSimulation();

  return (
    <>
      {/* TITLE */}
      <Typography variant="h4" fontWeight={800} mb={3}>
        Storage Zones
      </Typography>

      {/* ZONES */}
      <ZoneOverviewGrid />

      {/* HEALTH METRICS */}
      <Grid container spacing={3} mt={3}>
        {[
          {
            label: "Freshness",
            value: `${freshness}%`,
            progress: freshness,
          },
          {
            label: "Avg Temperature",
            value: `${temperature} °C`,
            progress: (temperature / 10) * 100,
          },
          {
            label: "Avg Humidity",
            value: `${humidity}%`,
            progress: humidity,
          },
        ].map((m) => (
          <Grid item xs={12} md={4} key={m.label}>
            <Paper className="glass-card">
              <Typography fontWeight={700}>{m.label}</Typography>
              <Typography fontSize={26} fontWeight={800}>
                {m.value}
              </Typography>
              <LinearProgress
                value={m.progress}
                variant="determinate"
                sx={{ mt: 1, height: 8, borderRadius: 4 }}
              />
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* AI INSIGHT */}
      <Paper className="glass-card" sx={{ mt: 4 }}>
        <Typography fontWeight={700} mb={1}>
          AI Interpretation
        </Typography>

        <Stack spacing={1}>
          <Typography color="text.secondary">
            • All zones are operating within safe thresholds.
          </Typography>
          <Typography color="text.secondary">
            • Zone C humidity is elevated but acceptable.
          </Typography>
          <Typography color="text.secondary">
            • No corrective action required in the next 72 hours.
          </Typography>

          <Stack direction="row" spacing={1} mt={1}>
            <Chip label="System Stable" color="success" />
            <Chip label="Energy Optimized" color="info" />
          </Stack>
        </Stack>
      </Paper>
    </>
  );
}
