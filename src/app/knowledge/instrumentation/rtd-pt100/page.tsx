"use client";

import InstrumentArticleLayout from "@/components/InstrumentArticleLayout";
import PageMeta from "@/components/PageMeta";
import Link from "next/link";

// ─── SEO Config ─────────────────────────────────────────────────
const seo = {
  title: "RTD Pt100 Explained",
  description:
    "RTD Pt100 temperature sensors — platinum resistance, wiring configurations, accuracy classes, self-heating and calibration procedures.",
  canonical: "https://ihub-eta.vercel.app/knowledge/instrumentation/rtd-pt100",
  keywords:
    "RTD, Pt100, platinum resistance, IEC 60751, 3-wire, 4-wire, temperature sensor, resistance thermometer",
};

const meta = {
  title: seo.title,
  description:
    "RTD Pt100 temperature sensors — platinum resistance, wiring, accuracy and calibration procedures per IEC 60751.",
  category: "Temperature Guide",
  breadcrumb: [
    { label: "Knowledge Base", href: "/knowledge" },
    { label: "Instrumentation", href: "/knowledge/instrumentation" },
    { label: "RTD Pt100", href: "/knowledge/instrumentation/rtd-pt100" },
  ],
  metaTags: [
    { label: "Temperature", color: "amber" as const },
    { label: "RTD · Pt100", color: "blue" as const },
  ],
};

// ─── SVG Chart: Pt100 Resistance Curve ──────────────────────────
const Pt100Chart = () => (
  <div className="w-full py-4">
    <svg viewBox="0 0 420 190" className="w-full h-auto">
      <text x="210" y="16" textAnchor="middle" fill="#e8edf5" fontSize="11" fontWeight="600" style={{ fontFamily: "var(--font-display)" }}>
        Pt100 Resistance vs Temperature (IEC 60751)
      </text>
      <g transform="translate(45, 30)">
        <line x1="0" y1="130" x2="330" y2="130" stroke="#2a3d5c" strokeWidth="1" />
        <line x1="0" y1="130" x2="0" y2="0" stroke="#2a3d5c" strokeWidth="1" />
        {/* curve from -200..850 */}
        <path d="M0 130 L330 0" stroke="#00b4ff" strokeWidth="0" />
        <path d="M0 130 Q 100 118 200 78 T 330 0" fill="none" stroke="#00b4ff" strokeWidth="3" />
        {/* key points */}
        {[
          { t: 0, r: 100, x: 0, y: 130 },
          { t: 100, r: 138.5, x: 110, y: 95 },
          { t: 200, r: 177.4, x: 220, y: 60 },
          { t: 300, r: 215.6, x: 330, y: 25 },
        ].map((p) => (
          <g key={p.t}>
            <circle cx={p.x} cy={p.y} r="4.5" fill="#F5A800" />
            <text x={p.x} y={p.y - 9} textAnchor="middle" fill="#F5A800" fontSize="8" style={{ fontFamily: "var(--font-mono)" }}>
              {p.t}°C · {p.r}Ω
            </text>
          </g>
        ))}
        <text x="165" y="168" textAnchor="middle" fill="#8a9bb5" fontSize="9" style={{ fontFamily: "var(--font-mono)" }}>Temperature (°C)</text>
      </g>
    </svg>
  </div>
);

// ─── Section Content ───────────────────────────────────────────
const SectionContent = {
  hook: (
    <>
      <p>
        An RTD at ADNOC showed <strong>10 Ω low</strong> resistance — suspected broken wire. The real culprit? Lead wire shorted in the
        marshaling cabinet, bypassing the sensor entirely.
      </p>
    </>
  ),
  core: (
    <>
      <ul className="list-disc pl-5 space-y-2">
        <li><strong>Resistance Formula:</strong> R = R₀(1 + αT) where α = 0.00385 for Pt100 (IEC 60751).</li>
        <li><strong>Wiring:</strong> 2-wire, 3-wire and 4-wire configurations; 3/4-wire compensate lead resistance.</li>
        <li><strong>Accuracy:</strong> ±0.1 °C typical — better than thermocouples.</li>
        <li><strong>Self-Heating:</strong> Sensor dissipates ~0.1–1 W; keep excitation current low.</li>
        <li><strong>Lead Compensation:</strong> 3-wire RTD compensates for wire resistance; 4-wire eliminates it.</li>
      </ul>
    </>
  ),
  story: (
    <>
      <p>
        A distillation column temperature measurement at ADNOC kept showing <strong>−20 °C</strong> during startup. Investigation
        revealed the RTD was reading correctly, but the 3-wire configuration had swapped wires — causing negative readings. The fix:
        remove and reinstall with proper wire identification. Always verify wiring diagrams before installation.
      </p>
    </>
  ),
  takeaway: (
    <>
      <p>
        RTD resistance changes <strong>0.385 Ω/°C</strong> — 100 Ω at 0 °C, 138.5 Ω at 100 °C — enabling precise temperature measurement.
      </p>
    </>
  ),
};

export default function RtdPt100Page() {
  return (
    <>
      <PageMeta {...seo} />
      <InstrumentArticleLayout
        title={meta.title}
        description={meta.description}
        category={meta.category}
        breadcrumb={meta.breadcrumb}
        metaTags={meta.metaTags}
        sections={[
          { id: "hook", title: "The Hook", icon: "🎣", content: SectionContent.hook },
          { id: "core", title: "Core Concept", icon: "🧠", content: SectionContent.core, chart: <Pt100Chart /> },
          { id: "story", title: "Real-World Story", icon: "🏭", content: SectionContent.story },
          { id: "takeaway", title: "Takeaway", icon: "🔑", content: SectionContent.takeaway },
        ]}
        sources={[
          { label: "IEC 60751", scope: "Industrial platinum resistance thermometers" },
          { label: "IEC 60770", scope: "Transmitters for industrial process control" },
        ]}
        backLink={{ href: "/knowledge", label: "Knowledge Base" }}
        documentVersion="v1.0 · Jan 2025"
        footerNote={
          <span>
            Calculate with the <Link href="/tools#rtd" className="text-[var(--color-accent-blue)] hover:underline">RTD Pt100 Calculator</Link>.
          </span>
        }
      />
    </>
  );
}