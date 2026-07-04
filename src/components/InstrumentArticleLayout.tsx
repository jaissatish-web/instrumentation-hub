"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";

// ─── Types ──────────────────────────────────────────────────────
export interface Section {
  id: string;
  title: string;
  icon?: string;
  content: React.ReactNode;
  image?: React.ReactNode;
  chart?: React.ReactNode;
}

export interface MetaTag {
  label: string;
  color: "amber" | "blue" | "green" | "purple" | "red" | "cyan";
}

export interface BreadcrumbItem {
  label: string;
  href: string;
}

export interface InstrumentArticleLayoutProps {
  title: string;
  description: string;
  category: string;
  breadcrumb: BreadcrumbItem[];
  metaTags: MetaTag[];
  sections: Section[];
  sources?: { label: string; scope: string }[];
  backLink?: { href: string; label: string };
  documentVersion?: string;
  footerNote?: React.ReactNode;
}

// ─── Color map for tags ────────────────────────────────────────
const tagColorMap: Record<string, string> = {
  amber: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  blue: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  green: "bg-green-500/10 text-green-400 border-green-500/20",
  purple: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  red: "bg-red-500/10 text-red-400 border-red-500/20",
  cyan: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
};

// ─── SVG Chart: Accuracy Classes Horizontal Bar ────────────────
export const AccuracyBarChart = () => (
  <div className="w-full py-4">
    <svg viewBox="0 0 420 220" className="w-full h-auto">
      <defs>
        <linearGradient id="barGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#F5A800" />
          <stop offset="100%" stopColor="#F5A800" stopOpacity="0.4" />
        </linearGradient>
      </defs>
      <text x="210" y="20" textAnchor="middle" fill="#e8edf5" fontSize="12" fontWeight="600" style={{fontFamily: "var(--font-display)"}}>Accuracy Class Ranges (±% of Span)</text>
      <g transform="translate(10, 35)">
        <line x1="0" y1="0" x2="380" y2="0" stroke="#2a3d5c" strokeWidth="1" />
        <line x1="0" y1="30" x2="380" y2="30" stroke="#2a3d5c" strokeWidth="0.5" />
        <line x1="0" y1="60" x2="380" y2="60" stroke="#2a3d5c" strokeWidth="0.5" />
        <line x1="0" y1="90" x2="380" y2="90" stroke="#2a3d5c" strokeWidth="0.5" />
        <line x1="0" y1="120" x2="380" y2="120" stroke="#2a3d5c" strokeWidth="0.5" />
        <line x1="0" y1="150" x2="380" y2="150" stroke="#2a3d5c" strokeWidth="0.5" />
        <line x1="0" y1="180" x2="380" y2="180" stroke="#2a3d5c" strokeWidth="0.5" />

        {/* Bars */}
        <rect x="0" y="8" width="7" height="16" rx="2" fill="url(#barGrad)" />
        <text x="15" y="20" fill="#e8edf5" fontSize="10" style={{fontFamily: "var(--font-mono)"}}>Class 0.1 —  Lab/Std</text>
        <text x="200" y="20" textAnchor="end" fill="#F5A800" fontSize="9" style={{fontFamily: "var(--font-mono)"}}>0.1%</text>

        <rect x="0" y="38" width="16" height="16" rx="2" fill="url(#barGrad)" />
        <text x="25" y="50" fill="#e8edf5" fontSize="10" style={{fontFamily: "var(--font-mono)"}}>Class 0.25 — High Precision</text>
        <text x="200" y="50" textAnchor="end" fill="#F5A800" fontSize="9" style={{fontFamily: "var(--font-mono)"}}>0.25%</text>

        <rect x="0" y="68" width="24" height="16" rx="2" fill="url(#barGrad)" />
        <text x="33" y="80" fill="#e8edf5" fontSize="10" style={{fontFamily: "var(--font-mono)"}}>Class 0.6 — Precision Industrial</text>
        <text x="200" y="80" textAnchor="end" fill="#F5A800" fontSize="9" style={{fontFamily: "var(--font-mono)"}}>0.6%</text>

        <rect x="0" y="98" width="38" height="16" rx="2" fill="url(#barGrad)" />
        <text x="47" y="110" fill="#e8edf5" fontSize="10" style={{fontFamily: "var(--font-mono)"}}>Class 1.0 — General Industrial</text>
        <text x="200" y="110" textAnchor="end" fill="#F5A800" fontSize="9" style={{fontFamily: "var(--font-mono)"}}>1.0%</text>

        <rect x="0" y="128" width="46" height="16" rx="2" fill="url(#barGrad)" />
        <text x="55" y="140" fill="#e8edf5" fontSize="10" style={{fontFamily: "var(--font-mono)"}}>Class 1.6 — General Purpose</text>
        <text x="200" y="140" textAnchor="end" fill="#F5A800" fontSize="9" style={{fontFamily: "var(--font-mono)"}}>1.6%</text>

        <rect x="0" y="158" width="56" height="16" rx="2" fill="url(#barGrad)" />
        <text x="65" y="170" fill="#e8edf5" fontSize="10" style={{fontFamily: "var(--font-mono)"}}>Class 2.5 — Commercial</text>
        <text x="200" y="170" textAnchor="end" fill="#F5A800" fontSize="9" style={{fontFamily: "var(--font-mono)"}}>2.5%</text>
      </g>
    </svg>
  </div>
);

// ─── SVG Chart: NAMUR NE43 Signal Band ─────────────────────────
export const NAMURBandChart = () => (
  <div className="w-full py-4">
    <svg viewBox="0 0 420 120" className="w-full h-auto">
      <text x="210" y="16" textAnchor="middle" fill="#e8edf5" fontSize="11" fontWeight="600" style={{fontFamily: "var(--font-display)"}}>NAMUR NE43 — 4–20 mA Signal Levels</text>
      <g transform="translate(10, 30)">
        {/* Scale bar */}
        <rect x="0" y="0" width="380" height="30" rx="6" fill="#2a3d5c" />
        
        {/* Fault zones */}
        <rect x="0" y="0" width="24" height="30" rx="6" fill="#ff3d5c" fillOpacity="0.6" />
        <rect x="24" y="0" width="14" height="30" fill="#F5A800" fillOpacity="0.5" />
        <rect x="38" y="0" width="274" height="30" fill="#00e676" fillOpacity="0.3" />
        <rect x="312" y="0" width="14" height="30" fill="#F5A800" fillOpacity="0.5" />
        <rect x="326" y="0" width="54" height="30" rx="6" fill="#ff3d5c" fillOpacity="0.6" />

        {/* Labels */}
        <text x="12" y="18" textAnchor="middle" fill="#fff" fontSize="8" style={{fontFamily: "var(--font-mono)"}}>FAULT</text>
        <text x="31" y="18" textAnchor="middle" fill="#fff" fontSize="7" style={{fontFamily: "var(--font-mono)"}}>SAT</text>
        <text x="175" y="18" textAnchor="middle" fill="#e8edf5" fontSize="8" style={{fontFamily: "var(--font-mono)"}}>NORMAL OPERATION</text>
        <text x="319" y="18" textAnchor="middle" fill="#fff" fontSize="7" style={{fontFamily: "var(--font-mono)"}}>SAT</text>
        <text x="353" y="18" textAnchor="middle" fill="#fff" fontSize="8" style={{fontFamily: "var(--font-mono)"}}>FAULT</text>

        {/* Tick marks */}
        <line x1="0" y1="35" x2="0" y2="42" stroke="#8a9bb5" strokeWidth="1" />
        <text x="0" y="52" textAnchor="middle" fill="#8a9bb5" fontSize="8" style={{fontFamily: "var(--font-mono)"}}>0</text>
        <line x1="76" y1="35" x2="76" y2="42" stroke="#8a9bb5" strokeWidth="1" />
        <text x="76" y="52" textAnchor="middle" fill="#8a9bb5" fontSize="8" style={{fontFamily: "var(--font-mono)"}}>4</text>
        <line x1="190" y1="35" x2="190" y2="42" stroke="#8a9bb5" strokeWidth="1" />
        <text x="190" y="52" textAnchor="middle" fill="#8a9bb5" fontSize="8" style={{fontFamily: "var(--font-mono)"}}>12</text>
        <line x1="304" y1="35" x2="304" y2="42" stroke="#8a9bb5" strokeWidth="1" />
        <text x="304" y="52" textAnchor="middle" fill="#8a9bb5" fontSize="8" style={{fontFamily: "var(--font-mono)"}}>20</text>
        <line x1="380" y1="35" x2="380" y2="42" stroke="#8a9bb5" strokeWidth="1" />
        <text x="380" y="52" textAnchor="middle" fill="#8a9bb5" fontSize="8" style={{fontFamily: "var(--font-mono)"}}>mA</text>

        {/* Annotation */}
        <text x="12" y="70" textAnchor="middle" fill="#ff3d5c" fontSize="7" style={{fontFamily: "var(--font-mono)"}}>&lt;3.6</text>
        <text x="353" y="70" textAnchor="middle" fill="#ff3d5c" fontSize="7" style={{fontFamily: "var(--font-mono)"}}>&gt;21.0</text>
      </g>
    </svg>
  </div>
);

// ─── Tag Component ─────────────────────────────────────────────
function Tag({ label, color }: { label: string; color: string }) {
  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-[.08em] border ${tagColorMap[color] || tagColorMap.amber}`} style={{fontFamily: "var(--font-mono)"}}>
      {label}
    </span>
  );
}

// ─── Image Placeholder ─────────────────────────────────────────
export const ImagePlaceholder = ({ label = "Diagram coming soon" }: { label?: string }) => (
  <div className="relative aspect-[16/9] max-w-[600px] mx-auto rounded-xl border-2 border-dashed border-[var(--color-border)] bg-[var(--color-bg-raise)]/30 flex items-center justify-center">
    <div className="text-center">
      <div className="text-3xl mb-2">📐</div>
      <p className="text-sm text-[var(--color-text-muted)]" style={{fontFamily: "var(--font-mono)"}}>{label}</p>
    </div>
  </div>
);

// ─── MAIN LAYOUT COMPONENT ─────────────────────────────────────
export default function InstrumentArticleLayout({
  title,
  description,
  category,
  breadcrumb,
  metaTags,
  sections,
  sources,
  backLink,
  documentVersion,
  footerNote,
}: InstrumentArticleLayoutProps) {
  const [activeId, setActiveId] = useState<string>("");
  const [mobileTocOpen, setMobileTocOpen] = useState(false);
  const sectionRefs = useRef<Map<string, HTMLElement>>(new Map());
  const tocContainerRef = useRef<HTMLDivElement>(null);

  // IntersectionObserver to track which section is in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the first section that just entered the viewport
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => {
            const aEl = a.target as HTMLElement;
            const bEl = b.target as HTMLElement;
            return aEl.offsetTop - bEl.offsetTop;
          });
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-80px 0px -60% 0px",
        threshold: 0,
      }
    );

    sectionRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const setSectionRef = useCallback((id: string, el: HTMLElement | null) => {
    if (el) {
      sectionRefs.current.set(id, el);
    } else {
      sectionRefs.current.delete(id);
    }
  }, []);

  // Smooth scroll for TOC clicks
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 100;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setMobileTocOpen(false);
  };

  // Mobile select change
  const handleMobileSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    if (val) scrollToSection(val);
    e.target.value = "";
  };

  return (
    <div className="page-enter min-h-screen pb-16">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* ── Breadcrumb ── */}
        <nav className="mb-6 sm:mb-8 flex flex-wrap items-center gap-1.5 text-xs sm:text-sm text-[var(--color-text-muted)]" aria-label="Breadcrumb">
          {breadcrumb.map((item, i) => (
            <span key={item.href} className="flex items-center gap-1.5">
              {i > 0 && <span className="text-[var(--color-text-muted)]/40">/</span>}
              {i < breadcrumb.length - 1 ? (
                <Link href={item.href} className="hover:text-amber-400 transition-colors">{item.label}</Link>
              ) : (
                <span className="text-[var(--color-text-primary)] font-medium">{item.label}</span>
              )}
            </span>
          ))}
        </nav>

        {/* ── Header ── */}
        <header className="mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-amber-500/20 bg-amber-500/5 mb-4 sm:mb-6">
            <span className="text-[9px] font-semibold uppercase tracking-[.12em] text-amber-500" style={{fontFamily: "var(--font-mono)"}}>
              {category}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-[var(--color-text-primary)] mb-3 sm:mb-4 leading-tight" style={{fontFamily: "var(--font-display)"}}>
            {title}
          </h1>
          <p className="text-base sm:text-lg xl:text-xl text-[var(--color-text-secondary)] max-w-3xl leading-relaxed">
            {description}
          </p>
          
          {/* Meta tags */}
          {metaTags.length > 0 && (
            <div className="mt-4 sm:mt-6 flex flex-wrap items-center gap-3 sm:gap-4 text-sm text-[var(--color-text-muted)]">
              {metaTags.map((tag) => (
                <span key={tag.label} className="flex items-center gap-1">
                  <span className={`w-2 h-2 rounded-full ${tag.color === 'amber' ? 'bg-amber-500' : tag.color === 'blue' ? 'bg-blue-500' : tag.color === 'green' ? 'bg-green-500' : tag.color === 'cyan' ? 'bg-cyan-500' : tag.color === 'purple' ? 'bg-purple-500' : tag.color === 'red' ? 'bg-red-500' : 'bg-amber-500'}`} />
                  <span>{tag.label}</span>
                </span>
              ))}
            </div>
          )}
        </header>

        {/* ── MOBILE TOC DROPDOWN (below 900px) ── */}
        <div className="block lg:hidden mb-6">
          <button
            onClick={() => setMobileTocOpen(!mobileTocOpen)}
            className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold text-amber-400 bg-amber-500/10 border border-amber-500/20 hover:bg-amber-500/20 transition-all"
            style={{fontFamily: "var(--font-mono)"}}
          >
            <span>📑 Jump to Section</span>
            <svg className={`w-4 h-4 transition-transform ${mobileTocOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {mobileTocOpen && (
            <div className="mt-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] overflow-hidden">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left px-4 py-3 text-sm flex items-center gap-2 transition-colors border-b border-[var(--color-border)]/50 last:border-0 ${
                    activeId === section.id
                      ? "bg-amber-500/10 text-amber-400 font-semibold"
                      : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-raise)]"
                  }`}
                >
                  {section.icon && <span>{section.icon}</span>}
                  <span>{section.title}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* ── DESKTOP TWO-COLUMN LAYOUT ── */}
        <div className="flex flex-col lg:flex-row lg:gap-8">
          {/* Desktop TOC Sidebar */}
          <aside className="hidden lg:block lg:w-[240px] xl:w-[260px] flex-shrink-0">
            <div ref={tocContainerRef} className="lg:sticky lg:top-24">
              <nav className="glass-card rounded-xl p-4 sm:p-5" style={{border: "1px solid var(--color-border)", background: "var(--color-bg-card)"}}>
                <h3 className="text-[10px] font-semibold uppercase tracking-[.12em] text-amber-500 mb-3 sm:mb-4" style={{fontFamily: "var(--font-mono)"}}>
                  Contents
                </h3>
                <ul className="space-y-0.5">
                  {sections.map((section) => (
                    <li key={section.id}>
                      <button
                        onClick={() => scrollToSection(section.id)}
                        className={`w-full text-left px-3 py-2 rounded-lg text-xs sm:text-sm transition-all duration-200 flex items-center gap-2 ${
                          activeId === section.id
                            ? "bg-amber-500/10 text-amber-400 font-semibold"
                            : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-raise)]"
                        }`}
                      >
                        {section.icon && <span className="text-base flex-shrink-0">{section.icon}</span>}
                        <span>{section.title}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0 space-y-4 sm:space-y-6">
            {/* Render each section as a separate card */}
            {sections.map((section, idx) => (
              <section
                key={section.id}
                id={section.id}
                ref={(el) => setSectionRef(section.id, el)}
                className="glass-card rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 scroll-mt-24"
                style={{border: "1px solid var(--color-border)", background: "var(--color-bg-card)"}}
              >
                {/* Section header */}
                <h2 className="flex items-center gap-2 text-lg sm:text-xl lg:text-2xl font-black text-[var(--color-text-primary)] mb-4 sm:mb-5" style={{fontFamily: "var(--font-display)"}}>
                  {section.icon && <span>{section.icon}</span>}
                  <span>{section.title}</span>
                </h2>

                {/* Section content */}
                <div className="text-sm sm:text-base text-[var(--color-text-secondary)] leading-relaxed space-y-3 sm:space-y-4 prose prose-sm sm:prose-lg max-w-none prose-amber prose-img:rounded-xl prose-img:shadow-xl">
                  {section.content}
                </div>

                {/* Image / Diagram placed INSIDE the section (never at end of page) */}
                {section.image && (
                  <div className="mt-5 sm:mt-6">
                    {section.image}
                  </div>
                )}

                {/* Chart placed INSIDE the relevant section */}
                {section.chart && (
                  <div className="mt-5 sm:mt-6">
                    {section.chart}
                  </div>
                )}
              </section>
            ))}

            {/* ── Sources / Standards ── */}
            {sources && sources.length > 0 && (
              <section id="sources" className="glass-card rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 scroll-mt-24" style={{border: "1px solid var(--color-border)", background: "var(--color-bg-card)"}}>
                <h2 className="flex items-center gap-2 text-lg sm:text-xl lg:text-2xl font-black text-[var(--color-text-primary)] mb-4 sm:mb-5" style={{fontFamily: "var(--font-display)"}}>
                  <span>📚</span>
                  <span>Standards & References</span>
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-[var(--color-text-secondary)]">
                    <thead>
                      <tr className="border-b border-[var(--color-border)]">
                        <th className="text-left py-2 px-2 sm:px-4 font-semibold text-[var(--color-text-primary)]" style={{fontFamily: "var(--font-mono)"}}>Standard</th>
                        <th className="text-left py-2 px-2 sm:px-4 font-semibold text-[var(--color-text-primary)]" style={{fontFamily: "var(--font-mono)"}}>Scope</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sources.map((src) => (
                        <tr key={src.label} className="border-b border-[var(--color-border)]/50 last:border-0">
                          <td className="py-2 px-2 sm:px-4 font-medium text-[var(--color-text-primary)]" style={{fontFamily: "var(--font-mono)"}}>{src.label}</td>
                          <td className="py-2 px-2 sm:px-4">{src.scope}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {footerNote && (
                  <div className="mt-4 sm:mt-5 text-xs sm:text-sm text-[var(--color-text-muted)] italic border-t border-[var(--color-border)] pt-4">
                    {footerNote}
                  </div>
                )}
              </section>
            )}

            {/* ── Footer ── */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-[var(--color-border)]">
              {documentVersion && (
                <div className="text-[10px] sm:text-xs text-[var(--color-text-muted)]" style={{fontFamily: "var(--font-mono)"}}>
                  {documentVersion}
                </div>
              )}
              {backLink && (
                <Link
                  href={backLink.href}
                  className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-semibold uppercase tracking-[.08em] text-amber-500 bg-amber-500/10 border border-amber-500/20 hover:bg-amber-500/20 transition-all"
                  style={{fontFamily: "var(--font-mono)"}}
                >
                  ← {backLink.label}
                </Link>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}