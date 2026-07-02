import HeroSection from "@/components/HeroSection";
import Link from "next/link";

const features = [
  { icon: "📚", title: "Knowledge Base", desc: "20 comprehensive engineering hubs covering Instrumentation, PLC, SCADA, DCS, Process Control & more.", href: "/knowledge" },
  { icon: "🛠️", title: "Tools Suite", desc: "Interactive calculators for PID tuning, DP flow, cable sizing, unit conversion & engineering design.", href: "/tools" },
  { icon: "❓", title: "Q&A Library", desc: "Searchable archive of real-world instrumentation & automation questions with expert answers.", href: "/qa" },
  { icon: "📝", title: "Blog & Insights", desc: "Case studies, deep dives into Green Hydrogen, industry trends & career guidance.", href: "/blog" },
  { icon: "📥", title: "Downloads", desc: "PLC programs, SCADA projects, Excel sheets, checklists, inspection forms & CAD drawings.", href: "/downloads" },
  { icon: "🧮", title: "Calculators", desc: "Pressure, temperature, flow converters, motor current, cable sizing, valve Cv & more.", href: "/tools" },
];

export default function HomePage() {
  return (
    <div className="page-enter">
      <HeroSection />

      {/* Feature Cards */}
      <section className="py-24 px-4 border-t border-[var(--color-border)]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--color-border)] mb-4">
              <span className="text-[10px] font-semibold uppercase tracking-[.12em] text-[var(--color-accent-blue)]" style={{fontFamily: "var(--font-mono)"}}>Platform Features</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-[var(--color-text-primary)] mb-4" style={{fontFamily: "var(--font-display)"}}>
              Everything You Need
            </h2>
            <p className="text-[var(--color-text-secondary)] max-w-xl mx-auto">
              A complete engineering knowledge ecosystem — from foundational theory to advanced troubleshooting.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <Link key={i} href={f.href} className="glass-card rounded-xl p-8">
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-2" style={{fontFamily: "var(--font-display)"}}>{f.title}</h3>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{f.desc}</p>
                <div className="mt-4 text-xs font-semibold uppercase tracking-[.1em] text-[var(--color-accent-blue)]" style={{fontFamily: "var(--font-mono)"}}>Explore &rarr;</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Hubs Preview */}
      <section className="py-24 px-4 border-t border-[var(--color-border)]" style={{background: "var(--color-bg-panel)"}}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-black text-[var(--color-text-primary)] mb-4" style={{fontFamily: "var(--font-display)"}}>
              20 Engineering <span className="gradient-blue">Knowledge Hubs</span>
            </h2>
            <p className="text-[var(--color-text-secondary)] max-w-xl mx-auto">
              Every hub is a comprehensive pillar page with supporting articles, calculators, MCQs, downloads &amp; interview questions.
            </p>
          </div>

          <div className="hub-grid">
            {[
              ["📡", "Instrumentation", "Pressure, Temp, Flow, Level, Valves, Calibration"],
              ["🧩", "PLC", "Ladder Logic, Structured Text, Timers, Counters, PID"],
              ["🖥️", "SCADA", "HMI, Alarm Management, Historian, Tag Management"],
              ["⚙️", "DCS", "Controllers, Graphics, Batch, Redundancy, Commissioning"],
              ["🎛️", "Process Control", "PID Tuning, Cascade, Feedforward, Loop Tuning"],
              ["⚡", "Electrical", "Motors, Transformers, Switchgear, VFD, Cable Sizing"],
              ["🌐", "Industrial Comms", "Modbus, Profibus, EtherNet/IP, OPC UA, MQTT"],
              ["🤖", "Industrial Automation", "IIoT, Edge Computing, Digital Twin, Smart Factory"],
              ["🛡️", "Functional Safety", "SIL, SIS, ESD, HAZOP, LOPA, ATEX"],
              ["🔧", "Mechanical Equipment", "Pumps, Compressors, Boilers, Turbines, Valves"],
              ["📐", "Engineering Drawings", "P&ID, Loop Diagrams, Hook-ups, Cause & Effect"],
              ["💻", "Industrial Software", "TIA Portal, Studio 5000, WinCC, Ignition"],
            ].map((h, i) => (
              <Link key={i} href={`/knowledge/${h[0].toLowerCase().replace(/[^a-z]/g,"")}`} className="hub-card">
                <div className="hub-icon">{h[0]}</div>
                <div className="hub-name">{h[1]}</div>
                <div className="hub-count">{h[2].split(", ").length}+ sub-topics</div>
                <div className="hub-desc">{h[2]}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 text-center border-t border-[var(--color-border)]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-black text-[var(--color-text-primary)] mb-6" style={{fontFamily: "var(--font-display)"}}>
            Ready to Master <span className="gradient-text">Instrumentation</span>?
          </h2>
          <p className="text-[var(--color-text-secondary)] max-w-xl mx-auto mb-8">
            Join thousands of engineers worldwide who trust this platform for their daily technical reference.
          </p>
          <Link href="/knowledge" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-sm font-bold uppercase tracking-[.08em] text-black" style={{background: "var(--color-accent-blue)", fontFamily: "var(--font-mono)", boxShadow: "0 0 30px rgba(0,180,255,0.3)"}}>
            Start Learning &rarr;
          </Link>
        </div>
      </section>
    </div>
  );
}
