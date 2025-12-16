import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { time: "10:00", temp: 5 },
  { time: "11:00", temp: 5.5 },
  { time: "12:00", temp: 6 },
  { time: "13:00", temp: 5.2 }
];

export default function TemperatureChart() {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <LineChart data={data}>
        <XAxis dataKey="time" />
        <YAxis unit="°C" />
        <Tooltip />
        <Line type="monotone" dataKey="temp" stroke="#0F766E" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  );
}
