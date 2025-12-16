import {
  Box,
  Typography,
  Paper,
  Grid,
  LinearProgress,
  Chip,
  Stack,
  Divider,
} from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useSimulation } from "../hooks/useSimulation";
import ExplainableAIPanel from "../components/ai/ExplainableAIPanel";

/* ---------------- DEMO DATA ---------------- */

const ZONE_ITEMS: Record<
  "A" | "B" | "C",
  { name: string; spoilage: number }[]
> = {
  A: [
    { name: "Chicken", spoilage: 18 },
    { name: "Fish", spoilage: 25 },
  ],
  B: [
    { name: "Apple", spoilage: 12 },
    { name: "Banana", spoilage: 28 },
    { name: "Orange", spoilage: 15 },
  ],
  C: [
    { name: "Spinach", spoilage: 22 },
    { name: "Carrot", spoilage: 10 },
  ],
};

const ZONE_META: Record<
  "A" | "B" | "C",
  { title: string; desc: string }
> = {
  A: {
    title: "Zone A – Non-Veg",
    desc: "Low-temperature storage with odor isolation for meat and fish.",
  },
  B: {
    title: "Zone B – Fruits",
    desc:
      "Ethylene-aware fruit storage to prevent chilling injury and over-ripening.",
  },
  C: {
    title: "Zone C – Vegetables",
    desc:
      "High-humidity environment to prevent wilting and dehydration.",
  },
};

/* ---------------- COMPONENT ---------------- */

export default function ZoneDetails() {
  const { zoneId } = useParams<{ zoneId: "A" | "B" | "C" }>();
  const navigate = useNavigate();

  const zid: "A" | "B" | "C" = zoneId ?? "B";

  const { temperature, humidity, freshness } = useSimulation();

  const items = ZONE_ITEMS[zid];
  const meta = ZONE_META[zid];

  return (
    <Box>
      {/* HEADER */}
      <Stack direction="row" justifyContent="space-between" mb={3}>
        <Box>
          <Typography variant="h4" fontWeight={700}>
            {meta.title}
          </Typography>
          <Typography color="text.secondary">
            {meta.desc}
          </Typography>
        </Box>

        <Chip
          label="← Back to Zones"
          onClick={() => navigate("/zones")}
          sx={{ cursor: "pointer", fontWeight: 600 }}
        />
      </Stack>

      {/* LIVE ENVIRONMENT */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Paper className="glass-card">
              <Typography fontWeight={600}>
                Live Zone Environment
              </Typography>

              <Divider sx={{ my: 1 }} />

              <Typography>
                🌡 Temperature: <b>{temperature} °C</b>
              </Typography>

              <Typography>
                💧 Humidity: <b>{humidity.toFixed(0)}%</b>
              </Typography>

              <Typography mt={1}>
                Overall Freshness: <b>{freshness.toFixed(0)}%</b>
              </Typography>

              <LinearProgress
                value={freshness}
                variant="determinate"
                sx={{ height: 10, borderRadius: 5, mt: 1 }}
              />
            </Paper>
          </motion.div>
        </Grid>

        {/* ITEMS INSIDE ZONE */}
        <Grid item xs={12} md={6}>
          <Paper className="glass-card">
            <Typography fontWeight={600}>
              Items Stored in Zone {zid}
            </Typography>

            <Divider sx={{ my: 1 }} />

            <Stack spacing={2}>
              {items.map((item) => {
                const risk =
                  item.spoilage < 20
                    ? "Low"
                    : item.spoilage < 40
                    ? "Medium"
                    : "High";

                const color =
                  risk === "Low"
                    ? "success"
                    : risk === "Medium"
                    ? "warning"
                    : "error";

                return (
                  <Box key={item.name}>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Typography fontWeight={600}>
                        {item.name}
                      </Typography>

                      <Chip
                        label={`${risk} Risk`}
                        size="small"
                        color={color}
                      />
                    </Stack>

                    <LinearProgress
                      value={100 - item.spoilage}
                      variant="determinate"
                      sx={{
                        height: 8,
                        borderRadius: 5,
                        mt: 0.5,
                      }}
                    />

                    <Typography
                      fontSize={12}
                      color="text.secondary"
                    >
                      Spoilage probability: {item.spoilage}%
                    </Typography>
                  </Box>
                );
              })}
            </Stack>
          </Paper>
        </Grid>
      </Grid>

      {/* AI EXPLANATION */}
      <Typography variant="h5" fontWeight={700} mt={5} mb={2}>
        Explainable AI – Zone-Specific Decisions
      </Typography>

      <ExplainableAIPanel />
    </Box>
  );
}
