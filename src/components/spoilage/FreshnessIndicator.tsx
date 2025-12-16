import { LinearProgress, Typography, Stack } from "@mui/material";

export default function FreshnessIndicator({ value }: { value: number }) {
  return (
    <Stack spacing={0.5}>
      <Typography variant="body2">
        Freshness: {value}%
      </Typography>
      <LinearProgress
        variant="determinate"
        value={value}
        sx={{ height: 10, borderRadius: 5 }}
      />
    </Stack>
  );
}
