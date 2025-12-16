import { Card, CardContent, Typography } from "@mui/material";

interface Props {
  label: string;
  value: string;
}

export default function MetricCard({ label, value }: Props) {
  return (
    <Card>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {label}
        </Typography>
        <Typography variant="h6">{value}</Typography>
      </CardContent>
    </Card>
  );
}
