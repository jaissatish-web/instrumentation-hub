import Link from "next/link";

const hubs = [
  { id: "instrumentation", icon: "📡", name: "Instrumentation", desc: "Pressure, Temperature, Flow, Level, Analytical, Control Valves, Calibration, Installation & Commissioning", count: "2 articles" },
];

export default function KnowledgePage() {
  return (
    <div className="page-enter max-w-6xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--color-accent-blue)]/20 bg-[var(--color-accent-blue)]/5 mb-4">
          <span className="text-[9px] font-semibold uppercase tracking-[.12em] text-[var(--color-accent-blue)]" style={{fontFamily: "var(--font-mono)"}}>Knowledge Base</span>
        </div>
        <h1 className="text-5xl sm:text-6xl font-black text-[var(--color-text-primary)] mb-4" style={{fontFamily: "var(--font-display)"}}>
          Knowledge <span className="gradient-blue">Base</span>
        </h1>
        <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl">
          Field-proven engineering references for I&C engineers. More hubs coming as content is published.
        </p>
      </div>

      {/* Hub Grid */}
      <div className="hub-grid">
        {hubs.map((h) => (
          <Link key={h.id} href={`/knowledge/${h.id}`} className="hub-card">
            <div className="hub-icon">{h.icon}</div>
            <div className="hub-name">{h.name}</div>
            <div className="hub-count">{h.count}</div>
            <div className="hub-desc">{h.desc}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}