import {
  Box,
  List,
  ListItemButton,
  ListItemText
} from "@mui/material";

const menu = ["Dashboard", "Zones", "Items", "Analytics"];

export default function Sidebar() {
  return (
    <Box
      sx={{
        width: 240,
        backdropFilter: "blur(18px)",
        background: "rgba(255,255,255,0.55)",
        borderRight: "1px solid rgba(0,0,0,0.05)"
      }}
    >
      <List sx={{ mt: 2 }}>
        {menu.map((item) => (
          <ListItemButton
            key={item}
            selected={item === "Dashboard"}
            sx={{
              mx: 1,
              mb: 1,
              borderRadius: 2,
              "&.Mui-selected": {
                background:
                  "linear-gradient(135deg,#0F766E,#14B8A6)",
                color: "white"
              },
              "&:hover": {
                background: "rgba(15,118,110,0.1)"
              }
            }}
          >
            <ListItemText
              primary={item}
              primaryTypographyProps={{
                fontWeight: 600
              }}
            />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
}
