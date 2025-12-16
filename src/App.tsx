import { Box } from "@mui/material";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import AppLayout from "./components/layout/AppLayout";
import Dashboard from "./pages/Dashboard";
import Zones from "./pages/Zones";
import ZoneDetails from "./pages/ZoneDetails";

/* ---------------- PAGE TRANSITION WRAPPER ---------------- */

const PageTransition = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -18 }}
    transition={{
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1], // smooth cubic-bezier
    }}
  >
    {children}
  </motion.div>
);

export default function App() {
  const location = useLocation();

  return (
    <Box sx={{ minHeight: "100vh" }}>
      <AppLayout>
        {/* AnimatePresence enables exit animations */}
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <PageTransition>
                  <Dashboard />
                </PageTransition>
              }
            />

            <Route
              path="/zones"
              element={
                <PageTransition>
                  <Zones />
                </PageTransition>
              }
            />

            <Route
              path="/zones/:zoneId"
              element={
                <PageTransition>
                  <ZoneDetails />
                </PageTransition>
              }
            />
          </Routes>
        </AnimatePresence>
      </AppLayout>
    </Box>
  );
}
