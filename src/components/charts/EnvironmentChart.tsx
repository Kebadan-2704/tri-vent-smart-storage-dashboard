import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { time: "10:00", temp: 4.8, humidity: 90 },
  { time: "11:00", temp: 5.2, humidity: 92 },
  { time: "12:00", temp: 5.8, humidity: 94 },
  { time: "13:00", temp: 5.4, humidity: 91 },
];

export default function EnvironmentChart() {
  return (
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
        />
        <Line
          type="monotone"
          dataKey="humidity"
          stroke="#38BDF8"
          strokeWidth={3}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
