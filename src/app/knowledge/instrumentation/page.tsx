import { MarkdownReader } from "@/components/MarkdownReader";

export const metadata = {
  title: "Pressure Gauges - Instrumentation Hub",
  description: "Comprehensive guide to pressure gauges: Bourdon tube, diaphragm, bellows types, applications, calibration, and selection criteria"
};

export default function PressureGaugePage() {
  return (
    <MarkdownReader source="instrumentation/pressure-gauges.md" />
  );
}
