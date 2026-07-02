import Link from "next/link";

const toolList = [
  { icon: "📡", name: "4-20mA Signal Converter", desc: "Convert mA to %, PV, and detect NAMUR NE43 faults", href: "/tools/ma-converter" },
  { icon: "📊", name: "PV Scaling Calculator", desc: "Scale process variable across any LRV/URV range", href: "/tools/pv-scaling" },
  { icon: "🌊", name: "DP Flow Calculator", desc: "Orifice plate sizing with SQRT extraction", href: "/tools/dp-flow" },
  { icon: "🌡️", name: "RTD Pt100 Calculator", desc: "Resistance-to-temperature and vice versa", href: "/tools/rtd" },
  { icon: "⚡", name: "Thermocouple mV Converter", desc: "mV-to-temperature for all TC types", href: "/tools/thermocouple" },
  { icon: "🚰", name: "Control Valve Cv Sizing", desc: "Cv calculator for liquid, gas & steam", href: "/tools/cv-sizing" },
  { icon: "Ω", name: "Ohm&apos;s Law Calculator", desc: "Voltage, current, resistance & power", href: "/tools/ohms-law" },
  { icon: "🎛️", name: "PID Loop Simulator", desc: "Interactive PID tuning with response curves", href: "/tools/pid-simulator" },
  { icon: "🔌", name: "Cable Sizing", desc: "Voltage drop & cable size calculation", href: "/tools/cable-sizing" },
  { icon: "📐", name: "Unit Converter", desc: "Pressure, temperature, flow & level", href: "/tools/unit-converter" },
  { icon: "🛡️", name: "2oo3 Voting Logic", desc: "Safety system fault-tolerant voting demo", href: "/tools/2oo3" },
  { icon: "🧪", name: "Loop Check List", desc: "Pre-commissioning loop check checklist", href: "/tools/loop-check" },
  { icon: "📏", name: "Tank Volume Calculator", desc: "Vertical, horizontal & spherical tank volume", href: "/tools/tank-volume" },
  { icon: "🔋", name: "Battery Sizing", desc: "UPS & battery bank capacity calculator", href: "/tools/battery-sizing" },
  { icon: "💨", name: "Air Consumption", desc: "Instrument air consumption calculator", href: "/tools/air-consumption" },
  { icon: "📋", name: "Instrument Index", desc: "Generate instrument index from tag list", href: "/tools/instrument-index" },
  { icon: "🔥", name: "Heat Trace Sizing", desc: "Heat trace cable length & power", href: "/tools/heat-trace" },
  { icon: "🔢", name: "Pressure Converter", desc: "PSI, Bar, kPa, MPa, mmH2O & more", href: "/tools/pressure-converter" },
];

export default function ToolsPage() {
  return (
    <div className="page-enter max-w-6xl mx-auto px-4 py-12">
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--color-accent-blue)]/20 bg-[var(--color-accent-blue)]/5 mb-4">
          <span className="text-[9px] font-semibold uppercase tracking-[.12em] text-[var(--color-accent-blue)]" style={{fontFamily: "var(--font-mono)"}}>Engineering Calculators</span>
        </div>
        <h1 className="text-5xl sm:text-6xl font-black text-[var(--color-text-primary)] mb-4" style={{fontFamily: "var(--font-display)"}}>
          Tools <span className="gradient-blue">Suite</span>
        </h1>
        <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl">
          Interactive engineering calculators and simulators for instrumentation, electrical, and process control professionals.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {toolList.map((t, i) => (
          <Link key={i} href={t.href} className="tool-card">
            <div className="tool-icon">{t.icon}</div>
            <div className="tool-name">{t.name}</div>
            <div className="tool-desc">{t.desc}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
