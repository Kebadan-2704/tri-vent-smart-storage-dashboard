import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

interface Props {
  value: number;
  label: string;
  unit: string;
  color: string;
}

export default function CircularGauge({ value, label, unit, color }: Props) {
  const circumference = 2 * Math.PI * 42;
  const progress = circumference - (value / 100) * circumference;

  return (
    <Box textAlign="center">
      <svg width="110" height="110">
        <circle
          cx="55"
          cy="55"
          r="42"
          stroke="#e5e7eb"
          strokeWidth="8"
          fill="none"
        />
        <motion.circle
          cx="55"
          cy="55"
          r="42"
          stroke={color}
          strokeWidth="8"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={circumference}
          animate={{ strokeDashoffset: progress }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          strokeLinecap="round"
        />
      </svg>

      <Typography fontWeight={800}>
        {value}{unit}
      </Typography>
      <Typography fontSize={13} color="text.secondary">
        {label}
      </Typography>
    </Box>
  );
}
