import type { Metadata } from "next";
import { marked } from "marked";
import { readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

export const metadata: Metadata = {
  title: "Pressure Gauges - Instrumentation Hub",
  description:
    "Comprehensive guide to pressure gauges: Bourdon tube, diaphragm, bellows types, applications, calibration, and selection criteria",
};

export default function PressureGaugePage() {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const filePath = join(__dirname, "pressure-gauges.md");
  const fileContent = readFileSync(filePath, "utf8");

  const html = marked(fileContent);
  return (
    <article
      className="prose prose-lg max-w-none"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
