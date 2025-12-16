import { Box } from "@mui/material";
import { motion } from "framer-motion";

export default function ZoneRiskStrip({ risk }: { risk: number }) {
  const color =
    risk < 20 ? "#16A34A" : risk < 40 ? "#F97316" : "#DC2626";

  return (
    <motion.div
      animate={{ width: `${risk}%` }}
      transition={{ duration: 1 }}
    >
      <Box
        sx={{
          height: 6,
          borderRadius: 3,
          background: `linear-gradient(90deg, ${color}, transparent)`,
        }}
      />
    </motion.div>
  );
}
