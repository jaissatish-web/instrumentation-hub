"use client";

import InstrumentArticleLayout, {
  NAMURBandChart,
  AccuracyBarChart,
} from "@/components/InstrumentArticleLayout";

// ─── Config ────────────────────────────────────────────────────
const meta = {
  title: "Pressure Transmitters",
  description:
    "Smart measurement devices for 4–20 mA transmission with HART/Foundation Fieldbus protocols. Covers sensing principles, calibration, NAMUR NE43 fault levels, and industrial applications.",
  category: "Instrumentation Guide",
  breadcrumb: [
    { label: "Knowledge Base", href: "/knowledge" },
    { label: "Instrumentation", href: "/knowledge/instrumentation" },
    { label: "Pressure Transmitters", href: "/knowledge/instrumentation/pressure-transmitters" },
  ],
  metaTags: [
    { label: "4–20 mA + HART", color: "amber" as const },
    { label: "Field-Tested (NEOM, NSRP, ADNOC)", color: "cyan" as const },
    { label: "Piezoresistive · Capacitive", color: "green" as const },
  ],
};

// ─── SVG Diagrams ──────────────────────────────────────────────
const TransmitterDiagram = () => (
  <div className="relative max-w-[600px] mx-auto">
    <img
      src="/pressure-transmitter-diagram.svg"
      alt="Cross-section of a smart pressure transmitter showing process seal, silicon diaphragm sensing element, and electronics housing with HART communication"
      className="w-full h-auto rounded-xl opacity-90 hover:opacity-100 transition-opacity duration-300"
      style={{filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.3))"}}
    />
    <p className="mt-3 text-center text-sm text-[var(--color-text-muted)]">
      Cross-section showing process seal, silicon diaphragm sensing element, and electronics housing with HART
    </p>
  </div>
);

// ─── Section Content ───────────────────────────────────────────
const SectionContent = {
  principles: (
    <>
      <p>
        Smart pressure transmitters measure pressure via <strong>piezoresistive, capacitive, or resonant sensing elements</strong>,
        converting deflection into a 4–20 mA signal or digital protocol output. The sensing element acts as a transducer,
        with electronics conditioning and linearizing the signal.
      </p>
      <div className="overflow-x-auto my-4">
        <table className="w-full text-sm text-[var(--color-text-secondary)]">
          <thead>
            <tr className="border-b border-[var(--color-border)]">
              <th className="text-left py-2 pr-3 font-semibold text-[var(--color-text-primary)]" style={{fontFamily: "var(--font-mono)"}}>Element</th>
              <th className="text-left py-2 px-3 font-semibold text-[var(--color-text-primary)]" style={{fontFamily: "var(--font-mono)"}}>Principle</th>
              <th className="text-left py-2 px-3 font-semibold text-[var(--color-text-primary)]" style={{fontFamily: "var(--font-mono)"}}>Typical Range</th>
              <th className="text-left py-2 pl-3 font-semibold text-[var(--color-text-primary)]" style={{fontFamily: "var(--font-mono)"}}>Accuracy</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-[var(--color-border)]/50"><td className="py-2 pr-3 font-medium text-[var(--color-text-primary)]">Piezoresistive</td><td className="py-2 px-3">Silicon diaphragm strain gauge</td><td className="py-2 px-3" style={{fontFamily: "var(--font-mono)"}}>0–1000 bar</td><td className="py-2 pl-3" style={{fontFamily: "var(--font-mono)"}}>±0.1–0.5%</td></tr>
            <tr className="border-b border-[var(--color-border)]/50"><td className="py-2 pr-3 font-medium text-[var(--color-text-primary)]">Capacitive</td><td className="py-2 px-3">Diaphragm-parallel plate capacitance</td><td className="py-2 px-3" style={{fontFamily: "var(--font-mono)"}}>0–100 bar</td><td className="py-2 pl-3" style={{fontFamily: "var(--font-mono)"}}>±0.075%</td></tr>
            <tr className="border-b border-[var(--color-border)]/50"><td className="py-2 pr-3 font-medium text-[var(--color-text-primary)]">Resonant</td><td className="py-2 px-3">Quartz crystal frequency shift</td><td className="py-2 px-3" style={{fontFamily: "var(--font-mono)"}}>0–400 bar</td><td className="py-2 pl-3" style={{fontFamily: "var(--font-mono)"}}>±0.05%</td></tr>
            <tr><td className="py-2 pr-3 font-medium text-[var(--color-text-primary)]">Piezoelectric</td><td className="py-2 px-3">Crystal charge under pressure</td><td className="py-2 px-3">Dynamic only</td><td className="py-2 pl-3">High frequency</td></tr>
          </tbody>
        </table>
      </div>
    </>
  ),

  types: (
    <>
      <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
        <div className="rounded-xl p-5" style={{background: "var(--color-bg-raise)", border: "1px solid var(--color-border)"}}>
          <h3 className="text-sm font-bold text-[var(--color-text-primary)] mb-2" style={{fontFamily: "var(--font-display)"}}>Differential Pressure (DP)</h3>
          <p className="text-sm text-[var(--color-text-secondary)] mb-2">Two ports measure ΔP across orifice, nozzle, or venturi.</p>
          <div className="text-xs text-[var(--color-text-muted)]">Use case: Flow measurement with DP meters (ISO 5167)</div>
        </div>
        <div className="rounded-xl p-5" style={{background: "var(--color-bg-raise)", border: "1px solid var(--color-border)"}}>
          <h3 className="text-sm font-bold text-[var(--color-text-primary)] mb-2" style={{fontFamily: "var(--font-display)"}}>Absolute Pressure</h3>
          <p className="text-sm text-[var(--color-text-secondary)] mb-2">Reference to vacuum via sealed reference chamber.</p>
          <div className="text-xs text-[var(--color-text-muted)]">Use case: Tank vapor space, altitude compensation</div>
        </div>
        <div className="rounded-xl p-5" style={{background: "var(--color-bg-raise)", border: "1px solid var(--color-border)"}}>
          <h3 className="text-sm font-bold text-[var(--color-text-primary)] mb-2" style={{fontFamily: "var(--font-display)"}}>Gauge (Relative) Pressure</h3>
          <p className="text-sm text-[var(--color-text-secondary)] mb-2">Reference to atmospheric pressure. Most common for general process.</p>
          <div className="text-xs text-[var(--color-text-muted)]">Use case: Vessel, piping, pump suction/discharge</div>
        </div>
        <div className="rounded-xl p-5" style={{background: "var(--color-bg-raise)", border: "1px solid var(--color-border)"}}>
          <h3 className="text-sm font-bold text-[var(--color-text-primary)] mb-2" style={{fontFamily: "var(--font-display)"}}>Multivariable</h3>
          <p className="text-sm text-[var(--color-text-secondary)] mb-2">Measures DP, static pressure, and temperature simultaneously.</p>
          <div className="text-xs text-[var(--color-text-muted)]">Use case: Steam flow (density compensation), gas flow</div>
        </div>
      </div>
    </>
  ),

  specs: (
    <>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-[var(--color-text-secondary)]">
          <thead>
            <tr className="border-b border-[var(--color-border)]">
              <th className="text-left py-2 pr-3 font-semibold text-[var(--color-text-primary)]" style={{fontFamily: "var(--font-mono)"}}>Parameter</th>
              <th className="text-left py-2 px-3 font-semibold text-[var(--color-text-primary)]" style={{fontFamily: "var(--font-mono)"}}>Typical Value</th>
              <th className="text-left py-2 pl-3 font-semibold text-[var(--color-text-primary)]" style={{fontFamily: "var(--font-mono)"}}>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-[var(--color-border)]/50"><td className="py-2 pr-3 font-medium text-[var(--color-text-primary)]">Range</td><td className="py-2 px-3" style={{fontFamily: "var(--font-mono)"}}>0–1000 bar</td><td className="py-2 pl-3">Span selectable within sensor limits</td></tr>
            <tr className="border-b border-[var(--color-border)]/50"><td className="py-2 pr-3 font-medium text-[var(--color-text-primary)]">Accuracy</td><td className="py-2 px-3" style={{fontFamily: "var(--font-mono)"}}>±0.05–0.5% span</td><td className="py-2 pl-3">Depends on sensing element type</td></tr>
            <tr className="border-b border-[var(--color-border)]/50"><td className="py-2 pr-3 font-medium text-[var(--color-text-primary)]">Output</td><td className="py-2 px-3" style={{fontFamily: "var(--font-mono)"}}>4–20 mA + HART</td><td className="py-2 pl-3">Digital: Foundation Fieldbus, PA</td></tr>
            <tr className="border-b border-[var(--color-border)]/50"><td className="py-2 pr-3 font-medium text-[var(--color-text-primary)]">Supply Voltage</td><td className="py-2 px-3" style={{fontFamily: "var(--font-mono)"}}>12–36 VDC</td><td className="py-2 pl-3">10–30 VDC typical for loop power</td></tr>
            <tr className="border-b border-[var(--color-border)]/50"><td className="py-2 pr-3 font-medium text-[var(--color-text-primary)]">Process Connection</td><td className="py-2 px-3" style={{fontFamily: "var(--font-mono)"}}>1/2" NPT, BSP, flanged</td><td className="py-2 pl-3">1/4" NPT for low pressure</td></tr>
            <tr className="border-b border-[var(--color-border)]/50"><td className="py-2 pr-3 font-medium text-[var(--color-text-primary)]">Temp Limits</td><td className="py-2 px-3" style={{fontFamily: "var(--font-mono)"}}>-40 to +85°C</td><td className="py-2 pl-3">-20 to +60°C standard</td></tr>
            <tr className="border-b border-[var(--color-border)]/50"><td className="py-2 pr-3 font-medium text-[var(--color-text-primary)]">Protection Class</td><td className="py-2 px-3" style={{fontFamily: "var(--font-mono)"}}>IP65, IP66, IP67</td><td className="py-2 pl-3">IP67 for submersion risk</td></tr>
            <tr><td className="py-2 pr-3 font-medium text-[var(--color-text-primary)]">Hazardous Area</td><td className="py-2 px-3" style={{fontFamily: "var(--font-mono)"}}>ATEX, IECEx, FM, CSA</td><td className="py-2 pl-3">Intrinsically safe / flameproof</td></tr>
          </tbody>
        </table>
      </div>
    </>
  ),

  applications: (
    <>
      <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
        <div className="flex items-start gap-3 p-4 rounded-xl" style={{background: "var(--color-bg-raise)"}}>
          <span className="text-2xl flex-shrink-0">🛢️</span>
          <div><strong className="text-[var(--color-text-primary)]">Oil & Gas</strong><p className="text-sm text-[var(--color-text-muted)]">Wellhead pressure monitoring, separator DP</p></div>
        </div>
        <div className="flex items-start gap-3 p-4 rounded-xl" style={{background: "var(--color-bg-raise)"}}>
          <span className="text-2xl flex-shrink-0">🧪</span>
          <div><strong className="text-[var(--color-text-primary)]">Chemical</strong><p className="text-sm text-[var(--color-text-muted)]">Reactor pressure, scrubber DP, pump protection</p></div>
        </div>
        <div className="flex items-start gap-3 p-4 rounded-xl" style={{background: "var(--color-bg-raise)"}}>
          <span className="text-2xl flex-shrink-0">⚡</span>
          <div><strong className="text-[var(--color-text-primary)]">Power</strong><p className="text-sm text-[var(--color-text-muted)]">Boiler drum level (DP), steam header pressure</p></div>
        </div>
        <div className="flex items-start gap-3 p-4 rounded-xl" style={{background: "var(--color-bg-raise)"}}>
          <span className="text-2xl flex-shrink-0">💊</span>
          <div><strong className="text-[var(--color-text-primary)]">Pharma</strong><p className="text-sm text-[var(--color-text-muted)]">Sterile tank pressure, clean steam (sanitary)</p></div>
        </div>
        <div className="flex items-start gap-3 p-4 rounded-xl" style={{background: "var(--color-bg-raise)"}}>
          <span className="text-2xl flex-shrink-0">💧</span>
          <div><strong className="text-[var(--color-text-primary)]">Water/WW</strong><p className="text-sm text-[var(--color-text-muted)]">Filter DP, pump discharge pressure</p></div>
        </div>
        <div className="flex items-start gap-3 p-4 rounded-xl" style={{background: "var(--color-bg-raise)"}}>
          <span className="text-2xl flex-shrink-0">🌬️</span>
          <div><strong className="text-[var(--color-text-primary)]">HVAC</strong><p className="text-sm text-[var(--color-text-muted)]">Chilled water pump head, AHU DP</p></div>
        </div>
      </div>
    </>
  ),

  advantages: (
    <>
      <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
        <div className="rounded-xl p-5" style={{background: "rgba(0,230,118,0.05)", border: "1px solid rgba(0,230,118,0.2)"}}>
          <h3 className="text-xs font-bold text-green-400 uppercase tracking-[.08em] mb-3" style={{fontFamily: "var(--font-mono)"}}>Advantages</h3>
          <ul className="text-sm space-y-2 text-[var(--color-text-secondary)]">
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-green-500 flex-shrink-0" />Remote monitoring via 4–20 mA signal</li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-green-500 flex-shrink-0" />Digital protocols (HART, FF, PA) enable diagnostics</li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-green-500 flex-shrink-0" />High accuracy (±0.05%) available</li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-green-500 flex-shrink-0" />No mechanical wear on sensing element</li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-green-500 flex-shrink-0" />Multiple outputs (mA + digital)</li>
          </ul>
        </div>
        <div className="rounded-xl p-5" style={{background: "rgba(255,61,92,0.05)", border: "1px solid rgba(255,61,92,0.2)"}}>
          <h3 className="text-xs font-bold text-red-400 uppercase tracking-[.08em] mb-3" style={{fontFamily: "var(--font-mono)"}}>Limitations</h3>
          <ul className="text-sm space-y-2 text-[var(--color-text-secondary)]">
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-red-500 flex-shrink-0" />Requires power supply (loop power)</li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-red-500 flex-shrink-0" />Higher initial cost than gauges</li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-red-500 flex-shrink-0" />Electronics susceptible to lightning</li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-red-500 flex-shrink-0" />Calibration drift over time</li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-red-500 flex-shrink-0" />Requires shielding in noisy environments</li>
          </ul>
        </div>
      </div>
    </>
  ),

  installation: (
    <>
      <ul className="text-sm space-y-3 text-[var(--color-text-secondary)]">
        <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-amber-500 flex-shrink-0" /><strong>Mounting:</strong> Vertical pipe mount preferred; ensure 1/2" NPT upstream, full port valve for isolation</li>
        <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-amber-500 flex-shrink-0" /><strong>Isolation Valves:</strong> Always install needle valve + ball valve for service without process shutdown</li>
        <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-amber-500 flex-shrink-0" /><strong>Impulse Lines:</strong> Keep equal length for DP; slope toward process for liquids, away for gases</li>
        <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-amber-500 flex-shrink-0" /><strong>Calibration:</strong> Zero before span adjustment; use calibrated deadweight tester or comparator</li>
        <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-amber-500 flex-shrink-0" /><strong>NAMUR NE43 Check:</strong> Verify 3.8–20.5 mA normal range during commissioning</li>
        <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-amber-500 flex-shrink-0" /><strong>Common Faults:</strong> Plugged impulse lines cause reading drift; check with "span reset" and blowdown</li>
      </ul>
    </>
  ),

  sources: (
    <>
      <ul className="text-sm space-y-2 text-[var(--color-text-secondary)]">
        <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-amber-500 flex-shrink-0" />Emerson 3051SMV Product Manual</li>
        <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-amber-500 flex-shrink-0" />Endress+Hauser Cerabar M PMC25 Product Guide</li>
        <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-amber-500 flex-shrink-0" />ISA-5.1-2009 Instrumentation Symbols and Identification</li>
        <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-amber-500 flex-shrink-0" />NAMUR NE43 "Electrical Equipment of Field Devices"</li>
      </ul>
    </>
  ),
};

// ─── Sections Config ──────────────────────────────────────────
const sections = [
  {
    id: "principles",
    title: "Operating Principle",
    icon: "⚙️",
    content: SectionContent.principles,
    image: <TransmitterDiagram />,
  },
  {
    id: "types",
    title: "Types / Variants",
    icon: "📐",
    content: SectionContent.types,
  },
  {
    id: "specs",
    title: "Key Specifications",
    icon: "🎯",
    content: SectionContent.specs,
    chart: <AccuracyBarChart />,
  },
  {
    id: "namur",
    title: "NAMUR NE43 & Performance",
    icon: "📡",
    content: (
      <p>The 4–20 mA linear output relationship with fault zones defined by NAMUR NE43: 4 mA = zero process value (LRV), 20 mA = full-scale (URV), &lt;3.6 mA = low alarm/fault, &gt;21 mA = high alarm/fault.</p>
    ),
    chart: <NAMURBandChart />,
  },
  {
    id: "applications",
    title: "Applications",
    icon: "🏭",
    content: SectionContent.applications,
  },
  {
    id: "advantages",
    title: "Advantages vs. Limitations",
    icon: "⚖️",
    content: SectionContent.advantages,
  },
  {
    id: "installation",
    title: "Installation & Calibration",
    icon: "🔧",
    content: SectionContent.installation,
  },
  {
    id: "sources",
    title: "Sources",
    icon: "📚",
    content: SectionContent.sources,
  },
];

// ─── Page ──────────────────────────────────────────────────────
export default function PressureTransmittersPage() {
  return (
    <InstrumentArticleLayout
      title={meta.title}
      description={meta.description}
      category={meta.category}
      breadcrumb={meta.breadcrumb}
      metaTags={meta.metaTags}
      sections={sections}
      sources={undefined}
      backLink={{ href: "/knowledge/instrumentation", label: "Back to Instrumentation Hub" }}
      documentVersion="Document Version 1.0 | Based on manufacturer documentation and field experience from NEOM Green Hydrogen, NSRP Vietnam, ADNOC UAE projects"
      footerNote={undefined}
    />
  );
}