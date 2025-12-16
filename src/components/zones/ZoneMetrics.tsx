import { Typography } from "@mui/material";

export default function ZoneMetrics({
  temperature,
  humidity
}: {
  temperature: number;
  humidity: number;
}) {
  return (
    <>
      <Typography>Temp: {temperature} °C</Typography>
      <Typography>Humidity: {humidity}%</Typography>
    </>
  );
}
