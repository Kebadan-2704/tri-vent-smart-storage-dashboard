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

/* ================= ANIMATION SYSTEM ================= */

const page = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.12,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const hoverCard = {
  hover: {
    y: -8,
    boxShadow: "0 32px 70px rgba(0,0,0,0.18)",
    transition: { duration: 0.35 },
  },
};

const pulseChip = {
  animate: {
    scale: [1, 1.06, 1],
    transition: { duration: 2.4, repeat: Infinity },
  },
};

const floatIcon = {
  animate: {
    y: [0, -5, 0],
    transition: { duration: 2.2, repeat: Infinity, ease: "easeInOut" },
  },
};

/* ================= DEMO DATA ================= */

const ZONE_ITEMS: Record<
  "A" | "B" | "C",
  { name: string; spoilage: number; icon: string }[]
> = {
  A: [
    { name: "Chicken", spoilage: 18, icon: "🍗" },
    { name: "Fish", spoilage: 25, icon: "🐟" },
  ],
  B: [
    { name: "Apple", spoilage: 12, icon: "🍎" },
    { name: "Banana", spoilage: 28, icon: "🍌" },
    { name: "Orange", spoilage: 15, icon: "🍊" },
  ],
  C: [
    { name: "Spinach", spoilage: 22, icon: "🥬" },
    { name: "Carrot", spoilage: 10, icon: "🥕" },
  ],
};

const ZONE_META = {
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

/* ================= COMPONENT ================= */

export default function ZoneDetails() {
  const { zoneId } = useParams<{ zoneId: "A" | "B" | "C" }>();
  const navigate = useNavigate();

  const zid: "A" | "B" | "C" = zoneId ?? "B";
  const { temperature, humidity, freshness } = useSimulation();

  return (
    <motion.div variants={page} initial="hidden" animate="visible">
      {/* ================= HEADER ================= */}
      <motion.div variants={fadeUp}>
        <Stack direction="row" justifyContent="space-between" mb={4}>
          <Box>
            <Typography variant="h4" fontWeight={800}>
              {ZONE_META[zid].title}
            </Typography>
            <Typography color="text.secondary">
              {ZONE_META[zid].desc}
            </Typography>
          </Box>

          <Chip
            label="← Back to Zones"
            onClick={() => navigate("/zones")}
            sx={{
              cursor: "pointer",
              fontWeight: 700,
              px: 1.2,
            }}
          />
        </Stack>
      </motion.div>

      {/* ================= MAIN GRID ================= */}
      <Grid container spacing={3} alignItems="stretch">
        {/* ===== LIVE ENVIRONMENT ===== */}
        <Grid item xs={12} md={6}>
          <motion.div variants={fadeUp} whileHover="hover">
            <Paper
              component={motion.div}
              variants={hoverCard}
              className="glass-card equal-card"
            >
              <Typography fontWeight={700}>
                Live Zone Environment
              </Typography>

              <Divider sx={{ my: 1 }} />

              <Stack spacing={1.1}>
                <Typography>
                  🌡 Temperature: <b>{temperature} °C</b>
                </Typography>

                <Typography>
                  💧 Humidity: <b>{humidity}%</b>
                </Typography>

                <Typography mt={1}>
                  Overall Freshness: <b>{freshness}%</b>
                </Typography>

                {/* Animated fill */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <LinearProgress
                    value={freshness}
                    variant="determinate"
                    sx={{
                      height: 8,
                      borderRadius: 5,
                    }}
                  />
                </motion.div>
              </Stack>
            </Paper>
          </motion.div>
        </Grid>

        {/* ===== ITEMS STORED ===== */}
        <Grid item xs={12} md={6}>
          <motion.div variants={fadeUp}>
            <Paper className="glass-card equal-card">
              <Typography fontWeight={700}>
                Items Stored in Zone {zid}
              </Typography>

              <Divider sx={{ my: 1 }} />

              <Stack spacing={2}>
                {ZONE_ITEMS[zid].map((item, index) => {
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
                    <motion.div
                      key={item.name}
                      variants={fadeUp}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Box>
                        <Stack
                          direction="row"
                          justifyContent="space-between"
                          alignItems="center"
                        >
                          <Typography fontWeight={600}>
                            <motion.span
                              variants={floatIcon}
                              animate="animate"
                              style={{ display: "inline-block" }}
                            >
                              {item.icon}
                            </motion.span>{" "}
                            {item.name}
                          </Typography>

                          <motion.div variants={pulseChip} animate="animate">
                            <Chip
                              label={`${risk} Risk`}
                              size="small"
                              color={color}
                            />
                          </motion.div>
                        </Stack>

                        <LinearProgress
                          value={100 - item.spoilage}
                          variant="determinate"
                          sx={{
                            height: 6,
                            borderRadius: 4,
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
                    </motion.div>
                  );
                })}
              </Stack>
            </Paper>
          </motion.div>
        </Grid>
      </Grid>

      {/* ================= AI SECTION ================= */}
      <motion.div variants={fadeUp}>
        <Typography variant="h5" fontWeight={800} mt={6} mb={2}>
          Explainable AI — Zone-Specific Decisions
        </Typography>
        <ExplainableAIPanel />
      </motion.div>
    </motion.div>
  );
}
