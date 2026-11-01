"use client";

import InstrumentArticleLayout from "@/components/InstrumentArticleLayout";
import PageMeta from "@/components/PageMeta";
import Link from "next/link";

// ─── SEO Config ─────────────────────────────────────────────────
const seo = {
  title: "Loop Check Checklist",
  description:
    "Comprehensive pre-commissioning loop check verification — signal verification, alarm setpoints, valve stroke, configuration and P&ID compliance.",
  canonical: "https://ihub-eta.vercel.app/knowledge/instrumentation/loop-checklist",
  keywords:
    "loop check, loop testing, pre-commissioning, 4-20mA, alarm setpoint, valve stroke, ITR, instrumentation",
};

const meta = {
  title: seo.title,
  description:
    "Comprehensive loop check checklist for pre-commissioning verification — signal, alarms, valve stroke, configuration and P&ID compliance.",
  category: "Commissioning Guide",
  breadcrumb: [
    { label: "Knowledge Base", href: "/knowledge" },
    { label: "Instrumentation", href: "/knowledge/instrumentation" },
    { label: "Loop Check Checklist", href: "/knowledge/instrumentation/loop-checklist" },
  ],
  metaTags: [
    { label: "Commissioning", color: "green" as const },
    { label: "QA / QC", color: "blue" as const },
  ],
};

// ─── SVG Chart: Loop Check Sequence ─────────────────────────────
const LoopCheckChart = () => (
  <div className="w-full py-4">
    <svg viewBox="0 0 420 170" className="w-full h-auto">
      <text x="210" y="16" textAnchor="middle" fill="#e8edf5" fontSize="11" fontWeight="600" style={{ fontFamily: "var(--font-display)" }}>
        Loop Check Sequence
      </text>
      <g transform="translate(20, 35)">
        {[
          { n: "1", t: "Docs & P&ID", c: "#8a9bb5" },
          { n: "2", t: "Mechanical", c: "#8a9bb5" },
          { n: "3", t: "Electrical", c: "#F5A800" },
          { n: "4", t: "Signal 4-20", c: "#00b4ff" },
          { n: "5", t: "Alarms", c: "#00e676" },
          { n: "6", t: "Interlocks", c: "#ff3d5c" },
        ].map((s, i) => (
          <g key={s.n} transform={`translate(${i * 62}, 0)`}>
            <circle cx="25" cy="25" r="22" fill="#1a2744" stroke={s.c} strokeWidth="1.5" />
            <text x="25" y="30" textAnchor="middle" fill={s.c} fontSize="13" fontWeight="700" style={{ fontFamily: "var(--font-display)" }}>{s.n}</text>
            <text x="25" y="62" textAnchor="middle" fill="#8a9bb5" fontSize="8" style={{ fontFamily: "var(--font-mono)" }}>{s.t}</text>
            {i < 5 && <path d={`M47 25 H${62 * (i + 1) + 3}`} stroke="#2a3d5c" strokeWidth="1.5" />}
          </g>
        ))}
      </g>
    </svg>
  </div>
);

// ─── Section Content ───────────────────────────────────────────
const SectionContent = {
  hook: (
    <>
      <p>
        A control valve refused to respond at NSRP startup. The loop check revealed a <strong>reverse-configured AO card</strong> —
        caught on paper before energizing.
      </p>
    </>
  ),
  core: (
    <>
      <ul className="list-disc pl-5 space-y-2">
        <li><strong>Signal Verification:</strong> 4–20 mA loop check with a 250 Ω resistor or loop calibrator.</li>
        <li><strong>Alarm Check:</strong> Verify LL, L, H, HH setpoints in the DCS against the approved list.</li>
        <li><strong>Valve Stroke:</strong> Manual 0–100% stroke with feedback verification.</li>
        <li><strong>Configuration:</strong> Check tag numbers, engineering units, and action (direct/reverse).</li>
        <li><strong>P&amp;ID Compliance:</strong> Cross-verify installation against loop diagrams and hook-ups.</li>
      </ul>
    </>
  ),
  story: (
    <>
      <p>
        ADNOC fired heater lost fuel gas during commissioning. Investigation showed control valve XV-201&rsquo;s AO card was
        configured for <strong>reverse action</strong>. The configuration was corrected before automatic-mode entry — a loop check
        that paid for itself instantly.
      </p>
    </>
  ),
  takeaway: (
    <>
      <p>
        Loop checks catch <strong>configuration errors before startup</strong> — never skip the paper verification step.
      </p>
    </>
  ),
};

export default function LoopChecklistPage() {
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
          { id: "core", title: "Core Concept", icon: "🧠", content: SectionContent.core, chart: <LoopCheckChart /> },
          { id: "story", title: "Real-World Story", icon: "🏭", content: SectionContent.story },
          { id: "takeaway", title: "Takeaway", icon: "🔑", content: SectionContent.takeaway },
        ]}
        sources={[
          { label: "ISA-5.1", scope: "Instrumentation symbols and identification" },
          { label: "Project ITR / ICAPS", scope: "Inspection and test records for loop verification" },
        ]}
        backLink={{ href: "/knowledge", label: "Knowledge Base" }}
        documentVersion="v1.0 · Jan 2025"
        footerNote={
          <span>
            Use the <Link href="/tools#cl" className="text-[var(--color-accent-blue)] hover:underline">Loop Checklist</Link> tool to track a live loop check.
          </span>
        }
      />
    </>
  );
}