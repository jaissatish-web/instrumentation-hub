import Link from "next/link";

const hubLinks = [
  { href: "/knowledge/instrumentation", label: "Instrumentation" },
  { href: "/knowledge/plc", label: "PLC" },
  { href: "/knowledge/scada", label: "SCADA" },
  { href: "/knowledge/dcs", label: "DCS" },
  { href: "/knowledge/process-control", label: "Process Control" },
  { href: "/knowledge/electrical", label: "Electrical" },
  { href: "/knowledge/communication", label: "Industrial Comms" },
  { href: "/knowledge/safety", label: "Functional Safety" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg-primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-md bg-[var(--color-accent-blue)]/10 border border-[var(--color-accent-blue)]/30 flex items-center justify-center text-xs font-bold text-[var(--color-accent-blue)]" style={{fontFamily: "var(--font-mono)"}}>IH</span>
              <span className="text-sm font-bold text-[var(--color-text-primary)]" style={{fontFamily: "var(--font-display)"}}>Instrumentation Hub</span>
            </div>
            <p className="text-xs text-[var(--color-text-muted)] leading-relaxed max-w-xs">
              The world&rsquo;s most comprehensive free engineering knowledge platform for instrumentation &amp; automation professionals.
            </p>
          </div>
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[.12em] text-[var(--color-accent-blue)] mb-4" style={{fontFamily: "var(--font-mono)"}}>Knowledge Hubs</h4>
            <ul className="space-y-2">
              {hubLinks.slice(0, 4).map((h) => (
                <li key={h.href}>
                  <Link href={h.href} className="text-xs text-[var(--color-text-muted)] hover:text-[var(--color-accent-blue)] transition-colors">{h.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[.12em] text-[var(--color-accent-blue)] mb-4" style={{fontFamily: "var(--font-mono)"}}>More Hubs</h4>
            <ul className="space-y-2">
              {hubLinks.slice(4).map((h) => (
                <li key={h.href}>
                  <Link href={h.href} className="text-xs text-[var(--color-text-muted)] hover:text-[var(--color-accent-blue)] transition-colors">{h.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[.12em] text-[var(--color-accent-blue)] mb-4" style={{fontFamily: "var(--font-mono)"}}>Connect</h4>
            <ul className="space-y-2">
              <li><a href="mailto:jaissatish@gmail.com" className="text-xs text-[var(--color-text-muted)] hover:text-[var(--color-accent-blue)] transition-colors">jaissatish@gmail.com</a></li>
              <li><a href="https://linkedin.com/in/satish-jaiswal-ic" target="_blank" className="text-xs text-[var(--color-text-muted)] hover:text-[var(--color-accent-blue)] transition-colors">LinkedIn</a></li>
              <li><a href="https://github.com/jaissatish-web" target="_blank" className="text-xs text-[var(--color-text-muted)] hover:text-[var(--color-accent-blue)] transition-colors">GitHub</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-[var(--color-border)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="pulse-dot"></span>
            <span className="text-[10px] text-[var(--color-accent-green)] font-semibold" style={{fontFamily: "var(--font-mono)"}}>SYSTEM ONLINE</span>
          </div>
          <p className="text-[10px] text-[var(--color-text-muted)]" style={{fontFamily: "var(--font-mono)"}}>
            &copy; {new Date().getFullYear()} Satish Kumar Jaiswal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
