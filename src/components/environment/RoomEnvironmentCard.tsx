import { Card, CardContent, Typography } from "@mui/material";
import { useRoomEnvironment } from "../../hooks/useRoomEnvironment";

export default function RoomEnvironmentCard() {
  const env = useRoomEnvironment();

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Room Environment</Typography>
        <Typography>Temperature: {env.temperature} °C</Typography>
        <Typography>Humidity: {env.humidity} %</Typography>
      </CardContent>
    </Card>
  );
}
