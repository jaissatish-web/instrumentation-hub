"use client";

import InstrumentArticleLayout from "@/components/InstrumentArticleLayout";
import PageMeta from "@/components/PageMeta";
import Link from "next/link";

// ─── SEO Config ─────────────────────────────────────────────────
const seo = {
  title: "4-20 mA Signal Standard",
  description:
    "The industry-standard analog signal for process control — live zero, noise immunity, NAMUR NE43 fault indication, and loop power.",
  canonical: "https://ihub-eta.vercel.app/knowledge/instrumentation/4-20ma-signal",
  keywords:
    "4-20mA, analog signal, live zero, NAMUR NE43, current loop, loop power, transmitter, instrumentation",
};

const meta = {
  title: seo.title,
  description:
    "The industry-standard analog signal for process control. Live zero, noise immunity, NAMUR NE43 fault indication and loop power.",
  category: "Instrumentation Guide",
  breadcrumb: [
    { label: "Knowledge Base", href: "/knowledge" },
    { label: "Instrumentation", href: "/knowledge/instrumentation" },
    { label: "4-20 mA Signal", href: "/knowledge/instrumentation/4-20ma-signal" },
  ],
  metaTags: [
    { label: "Basics · Signals", color: "blue" as const },
    { label: "NAMUR NE43", color: "amber" as const },
  ],
};

// ─── SVG Chart: 4-20 mA Signal Band ─────────────────────────────
const SignalBandChart = () => (
  <div className="w-full py-4">
    <svg viewBox="0 0 420 140" className="w-full h-auto">
      <text x="210" y="16" textAnchor="middle" fill="#e8edf5" fontSize="11" fontWeight="600" style={{ fontFamily: "var(--font-display)" }}>
        4–20 mA Signal Levels
      </text>
      <g transform="translate(10, 30)">
        <rect x="0" y="0" width="380" height="30" rx="6" fill="#2a3d5c" />
        <rect x="0" y="0" width="24" height="30" rx="6" fill="#ff3d5c" fillOpacity="0.6" />
        <rect x="24" y="0" width="14" height="30" fill="#F5A800" fillOpacity="0.5" />
        <rect x="38" y="0" width="274" height="30" fill="#00e676" fillOpacity="0.3" />
        <rect x="312" y="0" width="14" height="30" fill="#F5A800" fillOpacity="0.5" />
        <rect x="326" y="0" width="54" height="30" rx="6" fill="#ff3d5c" fillOpacity="0.6" />
        <text x="12" y="18" textAnchor="middle" fill="#fff" fontSize="8" style={{ fontFamily: "var(--font-mono)" }}>FAULT</text>
        <text x="31" y="18" textAnchor="middle" fill="#fff" fontSize="7" style={{ fontFamily: "var(--font-mono)" }}>SAT</text>
        <text x="175" y="18" textAnchor="middle" fill="#e8edf5" fontSize="8" style={{ fontFamily: "var(--font-mono)" }}>NORMAL OPERATION</text>
        <text x="319" y="18" textAnchor="middle" fill="#fff" fontSize="7" style={{ fontFamily: "var(--font-mono)" }}>SAT</text>
        <text x="353" y="18" textAnchor="middle" fill="#fff" fontSize="8" style={{ fontFamily: "var(--font-mono)" }}>FAULT</text>
        <line x1="0" y1="35" x2="0" y2="42" stroke="#8a9bb5" strokeWidth="1" />
        <text x="0" y="52" textAnchor="middle" fill="#8a9bb5" fontSize="8" style={{ fontFamily: "var(--font-mono)" }}>0</text>
        <line x1="76" y1="35" x2="76" y2="42" stroke="#8a9bb5" strokeWidth="1" />
        <text x="76" y="52" textAnchor="middle" fill="#8a9bb5" fontSize="8" style={{ fontFamily: "var(--font-mono)" }}>4</text>
        <line x1="190" y1="35" x2="190" y2="42" stroke="#8a9bb5" strokeWidth="1" />
        <text x="190" y="52" textAnchor="middle" fill="#8a9bb5" fontSize="8" style={{ fontFamily: "var(--font-mono)" }}>12</text>
        <line x1="304" y1="35" x2="304" y2="42" stroke="#8a9bb5" strokeWidth="1" />
        <text x="304" y="52" textAnchor="middle" fill="#8a9bb5" fontSize="8" style={{ fontFamily: "var(--font-mono)" }}>20</text>
        <line x1="380" y1="35" x2="380" y2="42" stroke="#8a9bb5" strokeWidth="1" />
        <text x="380" y="52" textAnchor="middle" fill="#8a9bb5" fontSize="8" style={{ fontFamily: "var(--font-mono)" }}>mA</text>
        <text x="12" y="72" textAnchor="middle" fill="#ff3d5c" fontSize="7" style={{ fontFamily: "var(--font-mono)" }}>&lt;3.6</text>
        <text x="353" y="72" textAnchor="middle" fill="#ff3d5c" fontSize="7" style={{ fontFamily: "var(--font-mono)" }}>&gt;21.0</text>
      </g>
    </svg>
  </div>
);

// ─── Section Content ───────────────────────────────────────────
const SectionContent = {
  hook: (
    <>
      <p>
        A transmitter reading <strong>3.8 mA</strong> doesn&rsquo;t indicate zero process — it signals a fault condition. NEOM&rsquo;s
        pre-commissioning team caught a broken wire this way before startup, saving a full loop re-verification.
      </p>
    </>
  ),
  core: (
    <>
      <ul className="list-disc pl-5 space-y-2">
        <li><strong>Live Zero:</strong> 4 mA = 0% span — detects wire breaks because the signal can never legitimately reach 0 mA.</li>
        <li><strong>Noise Immunity:</strong> Current loops resist voltage drop on long cable runs — the same current flows through the whole series loop.</li>
        <li><strong>NAMUR NE43:</strong> 3.8–21.2 mA defines failure indication bands for smart transmitters.</li>
        <li><strong>Standard Range:</strong> 4 mA = minimum (live zero), 20 mA = full scale.</li>
        <li><strong>Loop Power:</strong> Devices are powered from the same 24 VDC supply through the loop.</li>
      </ul>
    </>
  ),
  story: (
    <>
      <p>
        During ADNOC hydrotesting, a pressure transmitter reading 3.5 mA was initially thought to be reading low pressure.
        Investigation revealed water ingress causing leakage current — caught via NE43 diagnostics before it masked a real process condition.
      </p>
    </>
  ),
  takeaway: (
    <>
      <p>
        A signal below 4 mA <strong>always</strong> indicates a fault — investigate immediately rather than treating it as a low reading.
      </p>
    </>
  ),
};

export default function FourToTwentyPage() {
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
          { id: "core", title: "Core Concept", icon: "🧠", content: SectionContent.core, chart: <SignalBandChart /> },
          { id: "story", title: "Real-World Story", icon: "🏭", content: SectionContent.story },
          { id: "takeaway", title: "Takeaway", icon: "🔑", content: SectionContent.takeaway },
        ]}
        sources={[
          { label: "NAMUR NE43", scope: "Failure signal levels for process transmitters" },
          { label: "IEC 60381-1", scope: "Analogue signals for process control systems" },
        ]}
        backLink={{ href: "/knowledge", label: "Knowledge Base" }}
        documentVersion="v1.0 · Jan 2025"
        footerNote={
          <span>
            Try the <Link href="/tools#ma" className="text-[var(--color-accent-blue)] hover:underline">4-20 mA Signal Converter</Link> to practice scaling.
          </span>
        }
      />
    </>
  );
}