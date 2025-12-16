import { useZoneStore } from "../store/zoneStore";

export const useZoneData = () => useZoneStore((s) => s.zones);
