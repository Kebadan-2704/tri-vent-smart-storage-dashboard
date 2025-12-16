import { Box } from "@mui/material";
import TopBar from "./TopBar";
import { ReactNode } from "react";

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #ecfdfb 0%, #f8fafc 60%)",
      }}
    >
      <TopBar />
      <Box sx={{ paddingTop: "90px", px: 4 }}>{children}</Box>
    </Box>
  );
}
