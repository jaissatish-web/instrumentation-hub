"use client";

import InstrumentArticleLayout from "@/components/InstrumentArticleLayout";
import PageMeta from "@/components/PageMeta";
import Link from "next/link";

// ─── SEO Config ─────────────────────────────────────────────────
const seo = {
  title: "DP Flow Calculation",
  description:
    "Square-root extraction for DP flow meters — why doubling flow quadruples differential pressure, and how to linearize the signal.",
  canonical: "https://ihub-eta.vercel.app/knowledge/instrumentation/dp-flow-calculation",
  keywords:
    "DP flow, differential pressure, square root extraction, orifice plate, venturi, flow calculation, Reynolds number",
};

const meta = {
  title: seo.title,
  description:
    "Square-root extraction for DP flow meters. Doubling flow quadruples differential pressure — learn the relationship and avoid applying extraction twice.",
  category: "Instrumentation Guide",
  breadcrumb: [
    { label: "Knowledge Base", href: "/knowledge" },
    { label: "Instrumentation", href: "/knowledge/instrumentation" },
    { label: "DP Flow Calculation", href: "/knowledge/instrumentation/dp-flow-calculation" },
  ],
  metaTags: [
    { label: "Flow · DP", color: "blue" as const },
    { label: "Square Root", color: "green" as const },
  ],
};

// ─── SVG Chart: Square-Root Curve ───────────────────────────────
const SquareRootChart = () => (
  <div className="w-full py-4">
    <svg viewBox="0 0 420 200" className="w-full h-auto">
      <text x="210" y="16" textAnchor="middle" fill="#e8edf5" fontSize="11" fontWeight="600" style={{ fontFamily: "var(--font-display)" }}>
        DP vs Flow — Square-Law Relationship
      </text>
      <g transform="translate(40, 30)">
        <line x1="0" y1="140" x2="340" y2="140" stroke="#2a3d5c" strokeWidth="1" />
        <line x1="0" y1="140" x2="0" y2="0" stroke="#2a3d5c" strokeWidth="1" />
        {/* DP ∝ Flow² curve */}
        <path d="M0 140 L340 140" stroke="#2a3d5c" strokeWidth="0.5" />
        <path d="M0 140 Q 85 138 170 110 T 340 10" fill="none" stroke="#00b4ff" strokeWidth="3" />
        {/* annotation points */}
        <circle cx="85" cy="138" r="4" fill="#F5A800" />
        <text x="85" y="130" textAnchor="middle" fill="#F5A800" fontSize="9" style={{ fontFamily: "var(--font-mono)" }}>25% DP → 50% flow</text>
        <circle cx="170" cy="110" r="4" fill="#F5A800" />
        <text x="170" y="102" textAnchor="middle" fill="#F5A800" fontSize="9" style={{ fontFamily: "var(--font-mono)" }}>50% DP → 71% flow</text>
        <circle cx="255" cy="70" r="4" fill="#00e676" />
        <text x="255" y="62" textAnchor="middle" fill="#00e676" fontSize="9" style={{ fontFamily: "var(--font-mono)" }}>75% DP → 87% flow</text>
        <text x="170" y="168" textAnchor="middle" fill="#8a9bb5" fontSize="9" style={{ fontFamily: "var(--font-mono)" }}>Differential pressure (% of DPmax)</text>
        <text x="-90" y="70" textAnchor="middle" fill="#8a9bb5" fontSize="9" transform="rotate(-90 -90 70)" style={{ fontFamily: "var(--font-mono)" }}>Flow (% of Qmax)</text>
      </g>
    </svg>
  </div>
);

// ─── Section Content ───────────────────────────────────────────
const SectionContent = {
  hook: (
    <>
      <p>
        Doubling flow <strong>quadruples</strong> differential pressure. A missed square-root relationship caused 30% flow errors at
        NEOM&rsquo;s electrolyzer feed — a classic commissioning trap.
      </p>
    </>
  ),
  core: (
    <>
      <ul className="list-disc pl-5 space-y-2">
        <li><strong>Square Law:</strong> DP ∝ Flow² for orifice plates and venturis.</li>
        <li><strong>Root Extraction:</strong> Required to convert measured DP into actual flow.</li>
        <li><strong>Scaling:</strong> Q = Qmax × √(DP / DPmax).</li>
        <li><strong>Reynolds Number:</strong> Minimum ~10,000 for accurate DP flow measurement.</li>
        <li><strong>Linearization:</strong> Modern transmitters have built-in square-root extraction — enable it once, never twice.</li>
      </ul>
    </>
  ),
  story: (
    <>
      <p>
        NSRP feed-water flow showed 50% indicated but was actually 70% based on drum level. Root cause: the DP transmitter was
        configured for <strong>linear</strong> output instead of square-root. Fix: enabled square-root extraction in the transmitter configuration.
      </p>
    </>
  ),
  takeaway: (
    <>
      <p>
        DP flow follows <strong>Q ∝ √DP</strong> — always enable square-root extraction, and verify it is not applied twice
        (transmitter <em>and</em> DCS).
      </p>
    </>
  ),
};

export default function DpFlowPage() {
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
          { id: "core", title: "Core Concept", icon: "🧠", content: SectionContent.core, chart: <SquareRootChart /> },
          { id: "story", title: "Real-World Story", icon: "🏭", content: SectionContent.story },
          { id: "takeaway", title: "Takeaway", icon: "🔑", content: SectionContent.takeaway },
        ]}
        sources={[
          { label: "ISO 5167", scope: "Orifice plates and nozzles — flow measurement" },
          { label: "AGA Report No. 3", scope: "Orifice metering of natural gas" },
        ]}
        backLink={{ href: "/knowledge", label: "Knowledge Base" }}
        documentVersion="v1.0 · Jan 2025"
        footerNote={
          <span>
            Practice with the <Link href="/tools#dp" className="text-[var(--color-accent-blue)] hover:underline">DP Flow Calculator</Link>.
          </span>
        }
      />
    </>
  );
}