import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { time: "10:00", rh: 90 },
  { time: "11:00", rh: 92 },
  { time: "12:00", rh: 93 },
  { time: "13:00", rh: 91 }
];

export default function HumidityChart() {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <LineChart data={data}>
        <XAxis dataKey="time" />
        <YAxis unit="%" />
        <Tooltip />
        <Line type="monotone" dataKey="rh" stroke="#2563EB" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  );
}
