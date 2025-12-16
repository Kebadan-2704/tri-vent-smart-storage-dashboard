import {
  Card,
  CardContent,
  Typography,
  Chip,
  Stack,
  Button,
  Box,
} from "@mui/material";
import { motion } from "framer-motion";

interface ZoneCardProps {
  zoneId: "A" | "B" | "C";
  name: string;
  icon: string;
  range: string;
  humidity: string;
  status: "Optimal" | "Warning";
  onClick: () => void;
}

/* ---------------- ANIMATION VARIANTS ---------------- */

const cardHover = {
  hover: {
    y: -10,
    transition: { duration: 0.3 },
  },
};

const iconFloat = {
  animate: {
    y: [0, -6, 0],
    transition: {
      duration: 2.4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export default function ZoneCard({
  name,
  icon,
  range,
  humidity,
  status,
  onClick,
}: ZoneCardProps) {
  const isOptimal = status === "Optimal";

  const statusStyle = {
    background: isOptimal
      ? "linear-gradient(135deg,#16A34A,#22C55E)"
      : "linear-gradient(135deg,#F97316,#FB923C)",
    glow: isOptimal
      ? "rgba(34,197,94,0.35)"
      : "rgba(251,146,60,0.45)",
  };

  return (
    <motion.div
      whileHover="hover"
      variants={cardHover}
      transition={{ type: "spring", stiffness: 240 }}
    >
      <motion.div
        animate={
          status === "Warning"
            ? {
                boxShadow: [
                  `0 0 0 ${statusStyle.glow}`,
                  `0 0 26px ${statusStyle.glow}`,
                  `0 0 0 ${statusStyle.glow}`,
                ],
              }
            : {}
        }
        transition={{ duration: 2.2, repeat: Infinity }}
      >
        <Card
          sx={{
            height: "100%",
            position: "relative",
            borderRadius: 4,
            backdropFilter: "blur(16px)",
            background:
              "linear-gradient(145deg, rgba(255,255,255,0.9), rgba(248,250,252,0.95))",
            border: "1px solid rgba(255,255,255,0.5)",
            overflow: "hidden",
          }}
        >
          {/* LEFT STATUS BAR */}
          <Box
            sx={{
              position: "absolute",
              left: 0,
              top: 0,
              bottom: 0,
              width: 5,
              background: statusStyle.background,
            }}
          />

          <CardContent sx={{ pl: 3 }}>
            <Stack spacing={1.6}>
              {/* HEADER */}
              <Stack direction="row" spacing={1.2} alignItems="center">
                <motion.span
                  style={{ fontSize: 30 }}
                  variants={iconFloat}
                  animate="animate"
                >
                  {icon}
                </motion.span>

                <Typography fontWeight={800} fontSize={18}>
                  {name}
                </Typography>
              </Stack>

              {/* INFO */}
              <Typography color="text.secondary" fontSize={14}>
                🌡 Temperature: <b>{range}</b>
              </Typography>

              <Typography color="text.secondary" fontSize={14}>
                💧 Humidity: <b>{humidity}</b>
              </Typography>

              {/* STATUS CHIP */}
              <Chip
                label={status}
                sx={{
                  width: "fit-content",
                  mt: 0.5,
                  fontWeight: 700,
                  color: "#fff",
                  background: statusStyle.background,
                }}
              />

              {/* ACTION */}
              <Button
                size="small"
                onClick={onClick}
                sx={{
                  mt: 1,
                  alignSelf: "flex-start",
                  textTransform: "none",
                  fontWeight: 700,
                  borderRadius: 2,
                  background:
                    "linear-gradient(135deg,#1D4ED8,#2563EB)",
                  color: "#fff",
                  px: 2,
                  "&:hover": {
                    background:
                      "linear-gradient(135deg,#1E40AF,#1D4ED8)",
                  },
                }}
              >
                View Zone Details →
              </Button>
            </Stack>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}
