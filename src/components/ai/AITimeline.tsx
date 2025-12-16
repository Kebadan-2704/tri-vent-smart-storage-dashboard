import { Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";

export default function AITimeline({ steps }: any) {
  return (
    <Stack spacing={3}>
      {steps.map((s: any, i: number) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.2 }}
        >
          <Typography fontWeight={700}>{s.title}</Typography>
          <Typography color="text.secondary">{s.desc}</Typography>
        </motion.div>
      ))}
    </Stack>
  );
}
