import Link from "next/link";

const timeline = [
  { year: "2022–25", role: "Lead I&C Engineer", company: "NEOM Green Hydrogen", desc: "Led commissioning of 15,000+ I/O points. Designed impulse line routing saving $180K." },
  { year: "2018–21", role: "I&C Commissioning Lead", company: "NSRP Vietnam (Honeywell)", desc: "Led 22 engineers through SAT for 12,000 I/O points. Detected 47 critical wiring discrepancies." },
  { year: "2015–18", role: "Senior I&C Engineer", company: "ADNOC Ruwais (Triconex)", desc: "Resolved SIL-2 SIF loop discrepancies. Achieved 99.98% PFDavg, passed TÜV audit." },
  { year: "2012–15", role: "I&C Engineer", company: "Technip (Foxboro)", desc: "Programmed 48 motor control logic blocks. Eliminated 6 unplanned shutdowns per year." },
  { year: "2008–12", role: "Junior I&C Engineer", company: "UHDE India (Siemens PCS7)", desc: "Configured 64 analog input cards across 3 fertilizer plants. 100% first-pass FAT." },
];

const skills = [
  { name: "DCS / PCS7 / PKS", pct: 95 },
  { name: "PLC / Safety PLC", pct: 90 },
  { name: "Field Instruments", pct: 98 },
  { name: "Safety Systems (SIS)", pct: 85 },
  { name: "SCADA / HMI", pct: 88 },
  { name: "Project Management", pct: 92 },
];

export default function AboutPage() {
  return (
    <div className="page-enter max-w-5xl mx-auto px-4 py-16">
      {/* Header */}
      <section className="mb-20">
        <div className="flex flex-col md:flex-row gap-10 items-start">
          <div className="w-32 h-32 rounded-xl bg-[var(--color-bg-card)] border border-[var(--color-border)] flex items-center justify-center text-5xl flex-shrink-0">
            👨‍🔧
          </div>
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--color-accent-blue)]/20 bg-[var(--color-accent-blue)]/5 mb-4">
              <span className="pulse-dot"></span>
              <span className="text-[9px] font-semibold uppercase tracking-[.12em] text-[var(--color-accent-blue)]" style={{fontFamily: "var(--font-mono)"}}>Available for Projects</span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-black text-[var(--color-text-primary)] mb-4" style={{fontFamily: "var(--font-display)"}}>
              Satish Kumar <span className="gradient-text">Jaiswal</span>
            </h1>
            <p className="text-lg sm:text-xl font-semibold text-[var(--color-accent-blue)] mb-3">Senior I&C Commissioning Engineer</p>
            <p className="text-[var(--color-text-secondary)] max-w-xl leading-relaxed">
              Senior I&amp;C Commissioning Engineer with 15+ years of global experience across NEOM Green Hydrogen (KSA), NSRP Refinery (Vietnam), ADNOC Ruwais (UAE), and Technip. 67,000+ loops commissioned with zero safety incidents. Siemens PCS7, Honeywell PKS, Triconex, Foxboro certified. SIL/HAZOP trained.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <span className="cat-badge blue">📍 KSA / GCC Ready</span>
              <span className="cat-badge cyan">🔄 Transferable Iqama</span>
              <span className="cat-badge orange">✅ 15+ Yrs Experience</span>
              <span className="cat-badge green">🏆 Zero LTI</span>
            </div>
            <div className="flex gap-4 mt-8">
              <a href="mailto:jaissatish@gmail.com" className="btn-primary px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-[.08em]" style={{fontFamily: "var(--font-mono)"}}>Contact Me</a>
              <a href="https://linkedin.com/in/satish-jaiswal-ic" target="_blank" className="btn-ghost px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-[.08em] border border-[var(--color-border)]" style={{fontFamily: "var(--font-mono)"}}>LinkedIn</a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="mb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { val: "67K+", label: "Loops Commissioned" },
            { val: "15+", label: "Years Experience" },
            { val: "99.2%", label: "First-Pass Rate" },
            { val: "0", label: "Safety Incidents (LTI)" },
          ].map((s, i) => (
            <div key={i} className="glass-card rounded-xl p-6 text-center">
              <div className="text-3xl font-black text-[var(--color-accent-blue)]" style={{fontFamily: "var(--font-display)"}}>{s.val}</div>
              <div className="text-xs font-semibold text-[var(--color-text-primary)] mt-2">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="mb-20">
        <h2 className="text-3xl font-black text-[var(--color-text-primary)] mb-8" style={{fontFamily: "var(--font-display)"}}>
          Career <span className="gradient-blue">Timeline</span>
        </h2>
        <div className="space-y-6">
          {timeline.map((t, i) => (
            <div key={i} className="glass-card rounded-xl p-6 flex flex-col sm:flex-row gap-4">
              <div className="text-sm font-black text-[var(--color-accent-gold)] min-w-[100px]" style={{fontFamily: "var(--font-display)"}}>{t.year}</div>
              <div>
                <div className="text-sm font-bold text-[var(--color-text-primary)]">{t.role}</div>
                <div className="text-xs text-[var(--color-accent-blue)] mb-2" style={{fontFamily: "var(--font-mono)"}}>{t.company}</div>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Matrix */}
      <section>
        <h2 className="text-3xl font-black text-[var(--color-text-primary)] mb-8" style={{fontFamily: "var(--font-display)"}}>
          Competency <span className="gradient-blue">Matrix</span>
        </h2>
        <div className="space-y-4">
          {skills.map((s, i) => (
            <div key={i}>
              <div className="flex justify-between text-xs mb-1">
                <span className="font-semibold text-[var(--color-text-primary)]">{s.name}</span>
                <span className="text-[var(--color-accent-blue)]" style={{fontFamily: "var(--font-mono)"}}>{s.pct}%</span>
              </div>
              <div className="h-2 rounded-full" style={{background: "var(--color-bg-card)"}}>
                <div className="h-full rounded-full transition-all duration-1000" style={{width: `${s.pct}%`, background: "linear-gradient(90deg, var(--color-accent-blue), var(--color-accent-cyan))"}}></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
