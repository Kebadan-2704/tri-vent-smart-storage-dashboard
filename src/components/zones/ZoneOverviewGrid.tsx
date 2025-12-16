import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import ZoneCard from "./ZoneCard";

/* ---------------- ANIMATION VARIANTS ---------------- */

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* ---------------- COMPONENT ---------------- */

export default function ZoneOverviewGrid() {
  const navigate = useNavigate();

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <motion.div variants={itemVariants}>
            <ZoneCard
              zoneId="A"
              icon="🥩"
              name="Zone A — Protein Storage"
              range="0–4 °C (Low-Temp Control)"
              humidity="85–95% RH"
              status="Optimal"
              onClick={() => navigate("/zones/A")}
            />
          </motion.div>
        </Grid>

        <Grid item xs={12} md={4}>
          <motion.div variants={itemVariants}>
            <ZoneCard
              zoneId="B"
              icon="🍎"
              name="Zone B — Fruit Preservation"
              range="0–8 °C (Ethylene-Aware)"
              humidity="85–95% RH"
              status="Optimal"
              onClick={() => navigate("/zones/B")}
            />
          </motion.div>
        </Grid>

        <Grid item xs={12} md={4}>
          <motion.div variants={itemVariants}>
            <ZoneCard
              zoneId="C"
              icon="🥬"
              name="Zone C — Vegetable Freshness"
              range="1–7 °C (Moisture Retention)"
              humidity="90–98% RH"
              status="Warning"
              onClick={() => navigate("/zones/C")}
            />
          </motion.div>
        </Grid>
      </Grid>
    </motion.div>
  );
}
