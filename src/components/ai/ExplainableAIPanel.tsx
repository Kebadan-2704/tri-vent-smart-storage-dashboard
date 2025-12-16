import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Stack,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const steps = [
  {
    title: "Item Classification",
    desc:
      "Object detected as Apple using visual + shape features with 96% confidence.",
    time: "T + 0s",
  },
  {
    title: "Zone Assignment",
    desc:
      "Apple classified as fruit. Assigned to Zone B to minimize ethylene-induced spoilage.",
    time: "T + 1s",
  },
  {
    title: "Spoilage Assessment",
    desc:
      "Current temperature and humidity indicate low spoilage risk over next 5 days.",
    time: "T + 3s",
  },
  {
    title: "Control Recommendation",
    desc:
      "Maintaining 4°C and 90% RH optimizes freshness and energy efficiency.",
    time: "T + 5s",
  },
];

export default function ExplainableAIPanel() {
  return (
    <Stack spacing={2}>
      {steps.map((s) => (
        <Accordion key={s.title} sx={{ borderRadius: 3 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight={600}>
              {s.title} <Typography component="span">({s.time})</Typography>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography color="text.secondary">{s.desc}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Stack>
  );
}
