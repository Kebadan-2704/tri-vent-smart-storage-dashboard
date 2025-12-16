import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",

    primary: {
      main: "#2563EB", // Arctic Blue
    },

    background: {
      default: "#F8FAFC", // Ice white
      paper: "#FFFFFF",
    },

    text: {
      primary: "#0F172A",
      secondary: "#475569",
    },

    success: {
      main: "#16A34A",
    },

    warning: {
      main: "#EA580C",
    },

    error: {
      main: "#DC2626",
    },
  },

  shape: {
    borderRadius: 14,
  },

  typography: {
    fontFamily: `"Inter", "Segoe UI", sans-serif`,
    h4: {
      fontWeight: 800,
      letterSpacing: "-0.5px",
    },
    h5: {
      fontWeight: 700,
    },
  },

  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: "0 20px 40px rgba(15, 23, 42, 0.08)",
        },
      },
    },
  },
});

export default theme;
