import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Paper, Typography } from "@mui/material";

const data = [
  { time: "10:00", temp: 5.1, humidity: 91 },
  { time: "11:00", temp: 5.4, humidity: 92 },
  { time: "12:00", temp: 5.8, humidity: 95 },
  { time: "13:00", temp: 5.3, humidity: 93 },
];

export default function SystemTrendsChart() {
  return (
    <Paper className="glass-card">
      <Typography fontWeight={700} mb={2}>
        Environmental Trends (Simulation)
      </Typography>

      <ResponsiveContainer width="100%" height={260}>
        <LineChart data={data}>
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="temp"
            stroke="#0F766E"
            strokeWidth={3}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="humidity"
            stroke="#38BDF8"
            strokeWidth={3}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </Paper>
  );
}
