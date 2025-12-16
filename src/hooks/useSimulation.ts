import { useEffect, useState } from "react";

/**
 * Zone presets based on your patent definition
 */
const ZONE_PRESETS = {
  A: {
    name: "Non-Veg",
    tempRange: [0, 4],
    humidityRange: [85, 95],
  },
  B: {
    name: "Fruits",
    tempRange: [2, 8],
    humidityRange: [85, 95],
  },
  C: {
    name: "Vegetables",
    tempRange: [1, 7],
    humidityRange: [90, 98],
  },
};

type ZoneKey = keyof typeof ZONE_PRESETS;

/**
 * Simulation Hook
 * @param zoneId Optional zone (A, B, C). Defaults to Fruits (B)
 */
export function useSimulation(zoneId: ZoneKey = "B") {
  const preset = ZONE_PRESETS[zoneId];

  const [temperature, setTemperature] = useState<number>(
    avg(preset.tempRange)
  );
  const [humidity, setHumidity] = useState<number>(
    avg(preset.humidityRange)
  );
  const [freshness, setFreshness] = useState<number>(82);

  useEffect(() => {
    const interval = setInterval(() => {
      setTemperature((t) =>
        clamp(
          t + randomDelta(0.4),
          preset.tempRange[0],
          preset.tempRange[1]
        )
      );

      setHumidity((h) =>
        clamp(
          h + randomDelta(1.2),
          preset.humidityRange[0],
          preset.humidityRange[1]
        )
      );

      setFreshness((f) =>
        clamp(f + randomDelta(1.5), 60, 98)
      );
    }, 2500);

    return () => clearInterval(interval);
  }, [zoneId]);

  return {
    zone: preset.name,
    temperature: Number(temperature.toFixed(1)),
    humidity: Number(humidity.toFixed(1)),
    freshness: Math.round(freshness),
  };
}

/* ------------------ helpers ------------------ */

function avg([min, max]: number[]) {
  return (min + max) / 2;
}

function randomDelta(maxDelta: number) {
  return (Math.random() - 0.5) * maxDelta * 2;
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}
