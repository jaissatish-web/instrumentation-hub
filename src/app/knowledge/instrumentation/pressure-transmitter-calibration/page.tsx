"use client";

import InstrumentArticleLayout from "@/components/InstrumentArticleLayout";
import PageMeta from "@/components/PageMeta";
import Link from "next/link";

// ─── SEO Config ─────────────────────────────────────────────────
const seo = {
  title: "Pressure Transmitter Calibration",
  description:
    "Step-by-step pressure transmitter calibration procedure — 5-point calibration, zero and span adjustment, error calculation and hysteresis checks.",
  canonical: "https://ihub-eta.vercel.app/knowledge/instrumentation/pressure-transmitter-calibration",
  keywords:
    "pressure transmitter, calibration, 5-point calibration, zero adjustment, span adjustment, hysteresis, deadweight tester",
};

const meta = {
  title: seo.title,
  description:
    "Step-by-step pressure transmitter calibration procedure — 5-point calibration, zero/span adjustment, error formula and hysteresis checks.",
  category: "Calibration Guide",
  breadcrumb: [
    { label: "Knowledge Base", href: "/knowledge" },
    { label: "Instrumentation", href: "/knowledge/instrumentation" },
    { label: "Pressure Transmitter Calibration", href: "/knowledge/instrumentation/pressure-transmitter-calibration" },
  ],
  metaTags: [
    { label: "Calibration", color: "amber" as const },
    { label: "Pressure", color: "blue" as const },
  ],
};

// ─── SVG Chart: 5-Point Calibration Curve ───────────────────────
const FivePointChart = () => (
  <div className="w-full py-4">
    <svg viewBox="0 0 420 190" className="w-full h-auto">
      <text x="210" y="16" textAnchor="middle" fill="#e8edf5" fontSize="11" fontWeight="600" style={{ fontFamily: "var(--font-display)" }}>
        5-Point Calibration — Applied vs Ideal Output
      </text>
      <g transform="translate(45, 30)">
        <line x1="0" y1="130" x2="330" y2="130" stroke="#2a3d5c" strokeWidth="1" />
        <line x1="0" y1="130" x2="0" y2="0" stroke="#2a3d5c" strokeWidth="1" />
        {/* ideal line 4-20 mA */}
        <line x1="0" y1="130" x2="330" y2="0" stroke="#00b4ff" strokeWidth="2.5" />
        {/* 5 points */}
        {[0, 25, 50, 75, 100].map((p, i) => {
          const x = (p / 100) * 330;
          const y = 130 - (p / 100) * 130;
          return (
            <g key={p}>
              <circle cx={x} cy={y} r="5" fill="#F5A800" stroke="#fff" strokeWidth="1.5" />
              <text x={x} y={y - 10} textAnchor="middle" fill="#F5A800" fontSize="8" style={{ fontFamily: "var(--font-mono)" }}>{p}%</text>
            </g>
          );
        })}
        <text x="0" y="148" textAnchor="middle" fill="#8a9bb5" fontSize="8" style={{ fontFamily: "var(--font-mono)" }}>0% · 4 mA</text>
        <text x="330" y="148" textAnchor="middle" fill="#8a9bb5" fontSize="8" style={{ fontFamily: "var(--font-mono)" }}>100% · 20 mA</text>
        <text x="165" y="168" textAnchor="middle" fill="#8a9bb5" fontSize="9" style={{ fontFamily: "var(--font-mono)" }}>Applied pressure (% of span)</text>
      </g>
    </svg>
  </div>
);

// ─── Section Content ───────────────────────────────────────────
const SectionContent = {
  hook: (
    <>
      <p>
        A pressure transmitter reading <strong>5% high</strong> during NSRP pre-commissioning. A five-point calibration revealed
        zero shift — corrected in 15 minutes.
      </p>
    </>
  ),
  core: (
    <>
      <ul className="list-disc pl-5 space-y-2">
        <li><strong>5-Point Calibration:</strong> 0%, 25%, 50%, 75%, 100% of span — applied in both rising and falling directions.</li>
        <li><strong>Zero Adjustment:</strong> Set 4 mA with no applied pressure.</li>
        <li><strong>Span Adjustment:</strong> Set 20 mA at full-scale pressure.</li>
        <li><strong>Error Formula:</strong> %error = (Actual − Expected) / Span × 100.</li>
        <li><strong>Hysteresis:</strong> Compare rising vs falling curves; the difference is hysteresis error.</li>
      </ul>
    </>
  ),
  story: (
    <>
      <p>
        At ADNOC Habshan, pressure transmitter PIC-201 showed a 5% high reading. Investigation found zero at <strong>4.2 mA</strong> instead
        of 4.0 mA. The correction prevented potential relief-valve setpoint errors downstream.
      </p>
    </>
  ),
  takeaway: (
    <>
      <p>
        Always perform a <strong>5-point calibration</strong> — zero shifts are among the most common sources of field error.
      </p>
    </>
  ),
};

export default function PressureCalibrationPage() {
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
          { id: "core", title: "Core Concept", icon: "🧠", content: SectionContent.core, chart: <FivePointChart /> },
          { id: "story", title: "Real-World Story", icon: "🏭", content: SectionContent.story },
          { id: "takeaway", title: "Takeaway", icon: "🔑", content: SectionContent.takeaway },
        ]}
        sources={[
          { label: "IEC 60770", scope: "Transmitters for use in industrial-process control systems" },
          { label: "ISO 10012", scope: "Measurement management systems" },
        ]}
        backLink={{ href: "/knowledge", label: "Knowledge Base" }}
        documentVersion="v1.0 · Jan 2025"
        footerNote={
          <span>
            Generate test points with the <Link href="/tools#pcal" className="text-[var(--color-accent-blue)] hover:underline">Pressure Calibrator</Link> tool.
          </span>
        }
      />
    </>
  );
}