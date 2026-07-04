"use client";

import { useState } from "react";
import Link from "next/link";
import { marked } from "marked";

const markdownContent = `# Pressure Transmitters: Smart Measurement for Process Control

Pressure transmitters convert process pressure into standardized electrical signals for control systems. Unlike mechanical gauges, they provide remote transmission capability with digital communication protocols for integration into modern control loops.

---

## Operating Principle

Smart pressure transmitters measure pressure via **piezoresistive, capacitive, or resonant sensing elements**, converting deflection into a 4–20 mA signal or digital protocol output. The sensing element acts as a transducer, with electronics conditioning and linearizing the signal.

### Key Sensing Elements

| Element | Principle | Typical Range | Accuracy |
|---------|-----------|---------------|----------|
| **Piezoresistive** | Silicon diaphragm strain gauge | 0–1000 bar | ±0.1–0.5% |
| **Capacitive** | Diaphragm-parallel plate capacitance | 0–100 bar | ±0.075% |
| **Resonant** | Quartz crystal frequency shift | 0–400 bar | ±0.05% |
| **Piezeoelectric** | Crystal charge under pressure | Dynamic only | High frequency |

---

## Types / Variants

### Differential Pressure (DP) Transmitters
Most common for flow measurement. Two ports measure pressure difference across an orifice, nozzle, or venturi.
- *Use case: Flow measurement with DP meters (ISO 5167)*

### Absolute Pressure Transmitters
Reference to vacuum. Uses sealed reference chamber.
- *Use case: Tank vapor space, altitude compensation*

### Gauge (Relative) Transmitters
Reference to atmospheric pressure. Most common for general process.
- *Use case: Vessel, piping, pump suction/discharge*

### Multivariable Transmit
Measures DP, static pressure, and temperature simultaneously.
- *Use case: Steam flow (density compensation), gas flow*

---

## Key Specifications

| Parameter | Typical Value | Notes |
|-----------|---------------|-------|
| **Range** | 0–1000 bar (configurable) | Span selectable within sensor limits |
| **Accuracy** | ±0.05–0.5% of span | Depends on sensing element type |
| **Output** | 4–20 mA + HART | Digital: Foundation Fieldbus, PA |
| **Supply Voltage** | 12–36 VDC (loop) | 10–30 VDC typical |
| **Process Connection** | 1/2\" NPT, BSP, flanged | 1/4\" NPT for low pressure |
| **Temperature Limits** | -40 to +85°C | -20 to +60°C standard |
| **Protection Class** | IP65, IP66, IP67 | IP67 for submersion risk |
| **Hazardous Area** | ATEX, IECEx, FM, CSA | Intrinsically safe / flameproof |

---

## Performance Chart

The characteristic 4–20 mA relationship shows linear output with fault zones defined by NAMUR NE43.

---

## Applications

- **Oil & Gas** — Wellhead pressure monitoring, separator DP
- **Chemical** — Reactor pressure, scrubber DP, pump protection
- **Power** — Boiler drum level (DP), steam header pressure
- **Pharma** — Sterile tank pressure, clean steam (sanitary)
- **Water/Wastewater** — Filter DP, pump discharge pressure
- **HVAC** — Chilled water pump head, air handling unit DP

---

## Advantages vs. Limitations

| Advantages | Limitations |
|------------|-------------|
| Remote monitoring via 4–20 mA signal | Requires power supply (loop power) |
| Digital protocols (HART, FF, PA) enable diagnostics | Higher initial cost than gauges |
| High accuracy (±0.05%) available | Electronics susceptible to lightning |
| No mechanical wear on sensing element | Calibration drift over time |
| Multiple outputs (mA + digital) | Requires shielding in noisy environments |

---

## Installation, Calibration & Troubleshooting

- **Mounting**: Vertical pipe mount preferred; ensure 1/2\" NPT upstream, full port valve for isolation
- **Isolation Valves**: Always install needle valve + ball valve for service without process shutdown
- **Impulse Lines**: Keep equal length for DP; slope toward process for liquids, away for gases
- **Calibration**: Zero before span adjustment; use calibrated deadweight tester or comparator
- **NAMUR NE43 Check**: Verify 3.8–20.5 mA normal range during commissioning
- **Common Faults**: Plugged impulse lines cause reading drift; check with "span reset" and blowdown

---

## Sources

- Emerson 3051SMV Product Manual
- Endress+Hauser Cerabar M PMC25 Product Guide
- ISA-5.1-2009 Instrumentation Symbols and Identification
- NAMUR NE43 "Electrical Equipment of Field Devices"

---

*Document Version 1.0 | Based on manufacturer documentation and field experience from NEOM Green Hydrogen, NSRP Vietnam, ADNOC UAE projects*`;

const sections = [
  { id: "principles", title: "Operating Principle", icon: "⚙️" },
  { id: "types", title: "Types / Variants", icon: "📐" },
  { id: "specs", title: "Key Specifications", icon: "🎯" },
  { id: "performance", title: "Performance Chart", icon: "📊" },
  { id: "applications", title: "Applications", icon: "🏭" },
  { id: "advantages", title: "Advantages vs. Limitations", icon: "⚖️" },
  { id: "installation", title: "Installation & Calibration", icon: "🔧" },
  { id: "sources", title: "Sources", icon: "📚" },
];

// SVG Diagram - Pressure Transmitter Cross Section
const PressureTransmitterDiagram = () => (
  <svg viewBox="0 0 400 250" className="w-full h-auto rounded-xl" style={{ filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.3))" }}>
    <defs>
      <linearGradient id="diaphragmGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#312e81" />
        <stop offset="100%" stopColor="#1e1b4b" />
      </linearGradient>
      <linearGradient id="bodyGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#1a2744" />
        <stop offset="100%" stopColor="#0f1a2d" />
      </linearGradient>
    </defs>
    
    {/* Process Connection */}
    <path d="M180 20 L180 60" stroke="#00b4ff" strokeWidth="3" />
    <rect x="170" y="60" width="20" height="40" fill="#374151" rx="2" />
    
    {/* Transmitter Body */}
    <rect x="120" y="100" width="160" height="100" rx="8" fill="url(#bodyGrad)" stroke="#00b4ff" strokeWidth="2" />
    <text x="200" y="125" textAnchor="middle" fill="#e8edf5" fontSize="12" fontWeight="600" style={{fontFamily: "var(--font-display)"}}>Process Seal</text>
    <text x="200" y="155" textAnchor="middle" fill="#8a9bb5" fontSize="10" style={{fontFamily: "var(--font-mono)"}}>316 SS Wetted Parts</text>
    
    {/* Diaphragm */}
    <ellipse cx="200" cy="175" rx="40" ry="25" fill="url(#diaphragmGrad)" stroke="#00b4ff" strokeWidth="1.5" />
    <text x="200" y="180" textAnchor="middle" fill="#e8edf5" fontSize="9" style={{fontFamily: "var(--font-mono)"}}>Silicon Diaphragm</text>
    
    {/* Electronics Housing */}
    <rect x="140" y="200" width="120" height="40" rx="4" fill="#131d2e" stroke="#00b4ff" strokeWidth="1" />
    <text x="200" y="220" textAnchor="middle" fill="#00b4ff" fontSize="9" style={{fontFamily: "var(--font-mono)"}}>Electronics + 4–20 mA</text>
    
    {/* Terminal Box */}
    <rect x="200" y="250" width="80" height="30" fill="#374151" stroke="#00b4ff" strokeWidth="1" />
    <text x="240" y="268" textAnchor="middle" fill="#e8edf5" fontSize="8" style={{fontFamily: "var(--font-mono)"}}>M20 Terminal</text>
    
    {/* Sensing Element Labels */}
    <line x1="250" y1="175" x2="280" y2="175" stroke="#00b4ff" strokeWidth="1" markerEnd="url(#arrowhead)" />
    <text x="285" y="178" fill="#e8edf5" fontSize="8" style={{fontFamily: "var(--font-mono)"}}>Pressure Applied</text>
    
    <defs>
      <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
        <polygon points="0 0, 10 3.5, 0 7" fill="#00b4ff" />
      </marker>
    </defs>
    
    {/* Output Signal */}
    <line x1="280" y1="220" x2="340" y2="220" stroke="#ff6b35" strokeWidth="2" />
    <text x="345" y="224" fill="#ff6b35" fontSize="9" style={{fontFamily: "var(--font-mono)"}}>4–20 mA HART</text>
  </svg>
);

// SVG Chart - 4-20mA Linearity
const CurrentLoopChart = () => (
  <svg viewBox="0 0 400 200" className="w-full h-auto rounded-xl" style={{ background: "rgba(26,39,68,0.3)", filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.2))" }}>
    <defs>
      <linearGradient id="chartGrad" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#00b4ff" />
        <stop offset="100%" stopColor="#00f0ff" />
      </linearGradient>
    </defs>
    
    {/* Grid */}
    <g stroke="#1e2d47" strokeWidth="1">
      {[0, 50, 100, 150, 200].map(y => (
        <line key={y} x1="40" y1={y} x2="360" y2={y} />
      ))}
      {[0, 25, 50, 75, 100].map(x => (
        <line key={x} x1={40 + x * 3.2} y1="0" x2={40 + x * 3.2} y2="200" />
      ))}
    </g>
    
    {/* Axes */}
    <line x1="40" y1="10" x2="40" y2="190" stroke="#8a9bb5" strokeWidth="2" />
    <line x1="40" y1="190" x2="360" y2="190" stroke="#8a9bb5" strokeWidth="2" />
    
    {/* Axes Labels */}
    <text x="200" y="15" textAnchor="middle" fill="#e8edf5" fontSize="11" fontWeight="600" style={{fontFamily: "var(--font-display)"}}>4–20 mA vs Process Variable</text>
    <text x="20" y="100" textAnchor="middle" fill="#8a9bb5" fontSize="9" style={{fontFamily: "var(--font-mono)"}}>mA</text>
    <text x="200" y="195" textAnchor="middle" fill="#8a9bb5" fontSize="9" style={{fontFamily: "var(--font-mono)"}}>Process (% of Span)</text>
    
    {/* Linear 4-20mA Line */}
    <line x1="40" y1="190" x2="360" y2="10" stroke="url(#chartGrad)" strokeWidth="3" />
    
    {/* Axis Ticks */}
    <text x="35" y="195" textAnchor="end" fill="#e8edf5" fontSize="9" style={{fontFamily: "var(--font-mono)"}}>4</text>
    <text x="35" y="103" textAnchor="end" fill="#e8edf5" fontSize="9" style={{fontFamily: "var(--font-mono)"}}>20</text>
    <text x="40" y="205" textAnchor="middle" fill="#e8edf5" fontSize="9" style={{fontFamily: "var(--font-mono)"}}>0</text>
    <text x="200" y="205" textAnchor="middle" fill="#e8edf5" fontSize="9" style={{fontFamily: "var(--font-mono)"}}>50</text>
    <text x="360" y="205" textAnchor="middle" fill="#e8edf5" fontSize="9" style={{fontFamily: "var(--font-mono)"}}>100</text>
    
    {/* NAMUR NE43 Zones */}
    <line x1="92" y1="180" x2="92" y2="175" stroke="#ff3d5c" strokeWidth="2" />
    <text x="92" y="168" textAnchor="middle" fill="#ff3d5c" fontSize="8" style={{fontFamily: "var(--font-mono)"}}>3.6</text>
    <line x1="324" y1="22" x2="324" y2="18" stroke="#ff3d5c" strokeWidth="2" />
    <text x="324" y="30" textAnchor="middle" fill="#ff3d5c" fontSize="8" style={{fontFamily: "var(--font-mono)"}}>21.0</text>
    
    <text x="100" y="30" fill="#ff3d5c" fontSize="8" style={{fontFamily: "var(--font-mono)"}}>NAMUR NE43 Fault Zones</text>
  </svg>
);

export default function PressureTransmittersPage() {
  const [activeSection, setActiveSection] = useState(0);
  const renderedHtml = marked.parse(markdownContent);

  return (
    <div className="page-enter min-h-screen pb-16">
      <div className="max-w-6xl mx-auto px-4 py-8 sm:py-12">
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-2 text-sm text-[var(--color-text-muted)]" aria-label="Breadcrumb">
          <Link href="/knowledge" className="hover:text-amber-400 transition-colors">Knowledge Base</Link>
          <span>/</span>
          <Link href="/knowledge/instrumentation" className="hover:text-amber-400 transition-colors">Instrumentation</Link>
          <span>/</span>
          <span className="text-[var(--color-text-primary)] font-medium">Pressure Transmitters</span>
        </nav>

        {/* Hero Block */}
        <header className="mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-amber-500/20 bg-amber-500/5 mb-6">
            <span className="text-[9px] font-semibold uppercase tracking-[.12em] text-amber-500" style={{fontFamily: "var(--font-mono)"}}>
              Instrumentation Guide
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[var(--color-text-primary)] mb-4" style={{fontFamily: "var(--font-display)"}}>
            Pressure Transmitters
          </h1>
          <p className="text-lg sm:text-xl text-[var(--color-text-secondary)] max-w-3xl leading-relaxed">
            Smart measurement devices for 4–20 mA transmission with HART/Foundation Fieldbus protocols.
          </p>
          
          {/* Meta tags */}
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-[var(--color-text-muted)]">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              <span>4–20 mA + HART</span>
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-cyan-500" />
              <span>Field-Tested (NEOM, NSRP, ADNOC)</span>
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              <span>Piezoresistive · Capacitive</span>
            </span>
          </div>
        </header>

        {/* Quick Facts Card Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-10 sm:mb-14">
          <div className="glass-card rounded-xl p-4 text-center">
            <div className="text-[10px] font-semibold uppercase tracking-[.1em] text-amber-500 mb-1" style={{fontFamily: "var(--font-mono)"}}>Range</div>
            <div className="text-lg font-black text-[var(--color-text-primary)]" style={{fontFamily: "var(--font-display)"}}>0-1000 bar</div>
          </div>
          <div className="glass-card rounded-xl p-4 text-center">
            <div className="text-[10px] font-semibold uppercase tracking-[.1em] text-amber-500 mb-1" style={{fontFamily: "var(--font-mono)"}}>Accuracy</div>
            <div className="text-lg font-black text-[var(--color-text-primary)]" style={{fontFamily: "var(--font-display)"}}>±0.05%</div>
          </div>
          <div className="glass-card rounded-xl p-4 text-center">
            <div className="text-[10px] font-semibold uppercase tracking-[.1em] text-amber-500 mb-1" style={{fontFamily: "var(--font-mono)"}}>Output</div>
            <div className="text-lg font-black text-[var(--color-text-primary)]" style={{fontFamily: "var(--font-display)"}}>4–20 mA</div>
          </div>
          <div className="glass-card rounded-xl p-4 text-center">
            <div className="text-[10px] font-semibold uppercase tracking-[.1em] text-amber-500 mb-1" style={{fontFamily: "var(--font-mono)"}}>Protocol</div>
            <div className="text-lg font-black text-[var(--color-text-primary)]" style={{fontFamily: "var(--font-display)"}}>HART</div>
          </div>
          <div className="glass-card rounded-xl p-4 text-center">
            <div className="text-[10px] font-semibold uppercase tracking-[.1em] text-amber-500 mb-1" style={{fontFamily: "var(--font-mono)"}}>Temp Limit</div>
            <div className="text-lg font-black text-[var(--color-text-primary)]" style={{fontFamily: "var(--font-display)"}}>-40 to 85°C</div>
          </div>
        </div>

        {/* Main Content with Sidebar */}
        <div className="grid lg:grid-cols-[260px_1fr] gap-8">
          {/* Sidebar TOC */}
          <aside className="lg:sticky lg:top-24 hidden lg:block">
            <nav className="glass-card rounded-xl p-4 sm:p-6" style={{border: "1px solid var(--color-border)", background: "var(--color-bg-card)"}}>
              <h3 className="text-[10px] font-semibold uppercase tracking-[.12em] text-amber-500 mb-4" style={{fontFamily: "var(--font-mono)"}}>
                Contents
              </h3>
              <ul className="space-y-1" role="tablist" aria-label="Sections">
                {sections.map((section, index) => (
                  <li key={section.id} role="presentation">
                    <button
                      role="tab"
                      aria-selected={activeSection === index}
                      aria-controls={`panel-${section.id}`}
                      id={`tab-${section.id}`}
                      onClick={() => setActiveSection(index)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 flex items-center gap-2 ${
                        activeSection === index
                          ? "bg-amber-500/10 text-amber-400 font-semibold"
                          : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-raise)]"
                      }`}
                    >
                      <span className="text-lg">{section.icon}</span>
                      <span>{section.title}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* Main Content */}
          <main className="prose prose-lg max-w-none prose-amber prose-img:rounded-xl prose-img:shadow-xl" style={{ 
            color: 'var(--color-text-secondary)',
          }}>
            <div 
              id="content"
              className="glass-card rounded-2xl p-6 sm:p-8" 
              style={{border: "1px solid var(--color-border)", background: "var(--color-bg-card)"}}
              dangerouslySetInnerHTML={{ __html: renderedHtml }}
            />
            
            {/* Diagrams Section */}
            <div className="mt-10 space-y-8">
              <div className="glass-card rounded-2xl p-6 sm:p-8" style={{border: "1px solid var(--color-border)", background: "var(--color-bg-card)"}}>
                <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-4" style={{fontFamily: "var(--font-display)"}}>Working Principle Diagram</h3>
                <PressureTransmitterDiagram />
                <p className="mt-3 text-center text-sm text-[var(--color-text-muted)]">
                  Cross-section showing process seal, silicon diaphragm sensing element, and electronics housing
                </p>
              </div>
              
              <div className="glass-card rounded-2xl p-6 sm:p-8" style={{border: "1px solid var(--color-border)", background: "var(--color-bg-card)"}}>
                <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-4" style={{fontFamily: "var(--font-display)"}}>4–20 mA Performance Chart</h3>
                <CurrentLoopChart />
                <p className="mt-3 text-center text-sm text-[var(--color-text-muted)]">
                  Linear input-output curve with NAMUR NE43 fault zones marked
                </p>
              </div>
            </div>
          </main>
        </div>

        {/* Back to Top */}
        <div className="mt-12 text-center">
          <Link 
            href="/knowledge/instrumentation" 
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold uppercase tracking-[.08em] text-amber-500 bg-amber-500/10 border border-amber-500/20 hover:bg-amber-500/20 transition-all"
            style={{fontFamily: "var(--font-mono)"}}
          >
            ← Back to Instrumentation Hub
          </Link>
        </div>
      </div>
    </div>
  );
}