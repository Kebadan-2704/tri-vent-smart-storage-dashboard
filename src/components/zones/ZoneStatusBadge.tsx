import StatusChip from "../common/StatusChip";

export default function ZoneStatusBadge({ status }: { status: string }) {
  return <StatusChip status={status} />;
}
