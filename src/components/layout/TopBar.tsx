import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { NavLink } from "react-router-dom";

const tabs = [
  { label: "Dashboard", path: "/" },
  { label: "Zones", path: "/zones" },
];

export default function TopBar() {
  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        background: "#0f172a",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography fontWeight={700} fontSize={18}>
          Tri-Vent Smart Storage Dashboard
        </Typography>

        <Box sx={{ display: "flex", gap: 1 }}>
          {tabs.map((t) => (
            <Button
              key={t.path}
              component={NavLink}
              to={t.path}
              sx={{
                color: "#e5e7eb",
                textTransform: "none",
                fontWeight: 500,
                "&.active": {
                  background: "#2563eb",
                  color: "#fff",
                },
              }}
            >
              {t.label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
