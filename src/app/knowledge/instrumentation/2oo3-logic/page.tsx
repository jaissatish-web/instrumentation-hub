"use client";

import InstrumentArticleLayout from "@/components/InstrumentArticleLayout";
import PageMeta from "@/components/PageMeta";
import Link from "next/link";

// ─── SEO Config ─────────────────────────────────────────────────
const seo = {
  title: "2oo3 Voting Logic",
  description:
    "Two-out-of-three voting logic for safety systems — fault tolerance, SIL compliance, voting architectures, and real trip-prevention lessons.",
  canonical: "https://ihub-eta.vercel.app/knowledge/instrumentation/2oo3-logic",
  keywords:
    "2oo3 voting, safety system, SIS, SIL, fault tolerance, trip logic, cause and effect, ESD",
};

const meta = {
  title: seo.title,
  description:
    "Two-out-of-three voting logic for safety systems with fault tolerance. How 2oo3 prevents false trips while maintaining SIL2/SIL3 integrity.",
  category: "Safety Guide",
  breadcrumb: [
    { label: "Knowledge Base", href: "/knowledge" },
    { label: "Instrumentation", href: "/knowledge/instrumentation" },
    { label: "2oo3 Voting Logic", href: "/knowledge/instrumentation/2oo3-logic" },
  ],
  metaTags: [
    { label: "SIS · Safety", color: "red" as const },
    { label: "SIL 2/3", color: "amber" as const },
  ],
};

// ─── SVG Chart: Voting Configurations ───────────────────────────
const VotingChart = () => (
  <div className="w-full py-4">
    <svg viewBox="0 0 420 150" className="w-full h-auto">
      <text x="210" y="16" textAnchor="middle" fill="#e8edf5" fontSize="11" fontWeight="600" style={{ fontFamily: "var(--font-display)" }}>
        Voting Architectures Compared
      </text>
      <g transform="translate(10, 30)">
        {[
          { name: "1oo1", desc: "Single sensor", trip: "1 of 1", color: "#ff3d5c", safe: "No fault tolerance" },
          { name: "1oo2", desc: "Two sensors", trip: "1 of 2", color: "#F5A800", safe: "High availability, low safety" },
          { name: "2oo3", desc: "Three sensors", trip: "2 of 3", color: "#00e676", safe: "Balanced — SIL 2/3" },
          { name: "2oo4", desc: "Four sensors", trip: "2 of 4", color: "#00b4ff", safe: "Max fault tolerance" },
        ].map((v, i) => (
          <g key={v.name} transform={`translate(${i * 100}, 0)`}>
            <rect x="0" y="0" width="90" height="80" rx="8" fill="#1a2744" stroke={v.color} strokeOpacity="0.5" />
            <text x="45" y="18" textAnchor="middle" fill="#e8edf5" fontSize="11" fontWeight="700" style={{ fontFamily: "var(--font-display)" }}>{v.name}</text>
            <text x="45" y="34" textAnchor="middle" fill="#8a9bb5" fontSize="8" style={{ fontFamily: "var(--font-mono)" }}>{v.desc}</text>
            <text x="45" y="52" textAnchor="middle" fill={v.color} fontSize="9" fontWeight="600" style={{ fontFamily: "var(--font-mono)" }}>{v.trip}</text>
            <text x="45" y="68" textAnchor="middle" fill="#5a6a85" fontSize="7" style={{ fontFamily: "var(--font-mono)" }}>{v.safe}</text>
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
        At NEOM Green Hydrogen, a single sensor failure triggered a $2M emergency shutdown. The fix? <strong>2oo3 voting</strong> —
        requiring 2 of 3 sensors to agree before tripping.
      </p>
    </>
  ),
  core: (
    <>
      <ul className="list-disc pl-5 space-y-2">
        <li><strong>Fault Tolerance:</strong> Requires 2 sensors to agree, preventing false trips from a single faulty sensor.</li>
        <li><strong>SIL Compliance:</strong> 2oo3 architectures commonly meet SIL2/SIL3 requirements.</li>
        <li><strong>Voting Types:</strong> 1oo1, 1oo2, 2oo3 and 2oo4 configurations suit different safety/availability trade-offs.</li>
        <li><strong>Diagnostics:</strong> NAMUR NE43 failure indication (3.8–21.2 mA) feeds the voting logic.</li>
        <li><strong>C&amp;E Matrix:</strong> Voting behavior must match the approved cause-and-effect matrix and shutdown key.</li>
      </ul>
    </>
  ),
  story: (
    <>
      <p>
        During NEOM reactor commissioning, temperature-sensor drift caused a false trip. Investigation revealed single-sensor voting.
        Installing 2oo3 logic prevented further unplanned shutdowns while keeping the safety function intact.
      </p>
    </>
  ),
  takeaway: (
    <>
      <p>
        2oo3 requires <strong>2 of 3 sensors to agree</strong>, providing fault-tolerant safety trips without sacrificing availability.
      </p>
    </>
  ),
};

export default function TwoOoThreePage() {
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
          { id: "core", title: "Core Concept", icon: "🧠", content: SectionContent.core, chart: <VotingChart /> },
          { id: "story", title: "Real-World Story", icon: "🏭", content: SectionContent.story },
          { id: "takeaway", title: "Takeaway", icon: "🔑", content: SectionContent.takeaway },
        ]}
        sources={[
          { label: "IEC 61508 / IEC 61511", scope: "Functional safety of safety-related systems" },
          { label: "ISA-TR84.00.02", scope: "Safety integrity level evaluation techniques" },
        ]}
        backLink={{ href: "/knowledge", label: "Knowledge Base" }}
        documentVersion="v1.0 · Jan 2025"
        footerNote={
          <span>
            Try the <Link href="/tools#2oo3" className="text-[var(--color-accent-blue)] hover:underline">2oo3 Voting Simulator</Link> to see the logic live.
          </span>
        }
      />
    </>
  );
}