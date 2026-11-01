"use client";

import InstrumentArticleLayout from "@/components/InstrumentArticleLayout";
import PageMeta from "@/components/PageMeta";
import Link from "next/link";

// ─── SEO Config ─────────────────────────────────────────────────
const seo = {
  title: "Thermocouple Types",
  description:
    "Thermocouple types J, K, T, E, N, R, S, B — characteristics, temperature ranges and applications for industrial temperature measurement.",
  canonical: "https://ihub-eta.vercel.app/knowledge/instrumentation/thermocouple-types",
  keywords:
    "thermocouple, Type K, Type J, Type T, Type R, Type S, temperature measurement, NIST, reference junction",
};

const meta = {
  title: seo.title,
  description:
    "Thermocouple types J, K, T, E, N, R, S and B — characteristics, temperature ranges and industrial applications.",
  category: "Temperature Guide",
  breadcrumb: [
    { label: "Knowledge Base", href: "/knowledge" },
    { label: "Instrumentation", href: "/knowledge/instrumentation" },
    { label: "Thermocouple Types", href: "/knowledge/instrumentation/thermocouple-types" },
  ],
  metaTags: [
    { label: "Temperature", color: "amber" as const },
    { label: "Sensors", color: "blue" as const },
  ],
};

// ─── SVG Chart: Thermocouple Ranges ─────────────────────────────
const TcRangeChart = () => (
  <div className="w-full py-4">
    <svg viewBox="0 0 420 200" className="w-full h-auto">
      <text x="210" y="16" textAnchor="middle" fill="#e8edf5" fontSize="11" fontWeight="600" style={{ fontFamily: "var(--font-display)" }}>
        Thermocouple Temperature Ranges (°C)
      </text>
      <g transform="translate(70, 35)">
        {/* axis */}
        <line x1="0" y1="140" x2="290" y2="140" stroke="#2a3d5c" strokeWidth="1" />
        <text x="145" y="158" textAnchor="middle" fill="#8a9bb5" fontSize="8" style={{ fontFamily: "var(--font-mono)" }}>°C</text>
        {[-200, 0, 500, 1000, 1500, 1800].map((t) => (
          <g key={t}>
            <line x1={((t + 200) / 2000) * 290} y1="140" x2={((t + 200) / 2000) * 290} y2="145" stroke="#2a3d5c" />
            <text x={((t + 200) / 2000) * 290} y="155" textAnchor="middle" fill="#5a6a85" fontSize="7" style={{ fontFamily: "var(--font-mono)" }}>{t}</text>
          </g>
        ))}
        {[
          { name: "Type T", from: -200, to: 350, color: "#00e676" },
          { name: "Type J", from: -40, to: 750, color: "#00b4ff" },
          { name: "Type E", from: -200, to: 900, color: "#F5A800" },
          { name: "Type K", from: -200, to: 1260, color: "#ff6b35" },
          { name: "Type N", from: -200, to: 1300, color: "#d4af37" },
          { name: "Type R/S", from: -50, to: 1700, color: "#ff3d5c" },
          { name: "Type B", from: 0, to: 1800, color: "#c084fc" },
        ].map((tc, i) => {
          const x1 = ((tc.from + 200) / 2000) * 290;
          const x2 = ((tc.to + 200) / 2000) * 290;
          return (
            <g key={tc.name}>
              <rect x={x1} y={i * 17} width={Math.max(x2 - x1, 4)} height="10" rx="3" fill={tc.color} fillOpacity="0.5" stroke={tc.color} strokeWidth="1" />
              <text x={x2 + 6} y={i * 17 + 9} fill={tc.color} fontSize="8" style={{ fontFamily: "var(--font-mono)" }}>{tc.name}</text>
            </g>
          );
        })}
      </g>
    </svg>
  </div>
);

// ─── Section Content ───────────────────────────────────────────
const SectionContent = {
  hook: (
    <>
      <p>
        At NEOM&rsquo;s reformer, a Type K thermocouple failed after 3 months due to <strong>sulfur poisoning</strong>. Switching to
        Type R extended service life to 2+ years in the same process.
      </p>
    </>
  ),
  core: (
    <>
      <ul className="list-disc pl-5 space-y-2">
        <li><strong>Type K:</strong> Chromel-Alumel, −200 to 1260 °C, most common — but NOT for sulfur service.</li>
        <li><strong>Type J:</strong> Iron-Constantan, −40 to 750 °C; iron is susceptible to rust.</li>
        <li><strong>Type T:</strong> Copper-Constantan, −200 to 350 °C; excellent in moist environments.</li>
        <li><strong>Type E:</strong> Chromel-Constantan, −200 to 900 °C; highest sensitivity of the common types.</li>
        <li><strong>Type N:</strong> Nicrosil-Nisil, −200 to 1300 °C; a better Type K alternative for harsh service.</li>
        <li><strong>Type R/S:</strong> Platinum-Rhodium, −50 to 1700 °C; noble-metal accuracy, expensive.</li>
        <li><strong>Type B:</strong> Platinum-Rhodium, 0 to 1800 °C; for ultra-high temperature.</li>
      </ul>
    </>
  ),
  story: (
    <>
      <p>
        NEOM&rsquo;s steam methane reformer used Type K thermocouples for furnace tubes. Within 3 months, multiple sensors drifted
        low due to sulfur compounds attacking the Chromel wire. Switching to <strong>Type S</strong> for critical measurements was
        initially 5× more expensive — but eliminating unplanned maintenance justified the investment.
      </p>
    </>
  ),
  takeaway: (
    <>
      <p>
        Type K is common but <strong>fails in sulfur service</strong> — use Type N or noble metals (R/S/B) for aggressive environments.
      </p>
    </>
  ),
};

export default function ThermocoupleTypesPage() {
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
          { id: "core", title: "Core Concept", icon: "🧠", content: SectionContent.core, chart: <TcRangeChart /> },
          { id: "story", title: "Real-World Story", icon: "🏭", content: SectionContent.story },
          { id: "takeaway", title: "Takeaway", icon: "🔑", content: SectionContent.takeaway },
        ]}
        sources={[
          { label: "IEC 60584", scope: "Thermocouples — reference tables and tolerances" },
          { label: "NIST ITS-90", scope: "Temperature reference functions" },
        ]}
        backLink={{ href: "/knowledge", label: "Knowledge Base" }}
        documentVersion="v1.0 · Jan 2025"
        footerNote={
          <span>
            Convert with the <Link href="/tools#tc" className="text-[var(--color-accent-blue)] hover:underline">Thermocouple mV Calculator</Link>.
          </span>
        }
      />
    </>
  );
}