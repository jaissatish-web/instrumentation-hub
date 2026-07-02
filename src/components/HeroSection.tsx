"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Animate elements sequentially using IntersectionObserver + CSS animations
    const els = containerRef.current.querySelectorAll(".anim-el");
    els.forEach((el, i) => {
      (el as HTMLElement).style.opacity = "0";
      (el as HTMLElement).style.transform = "translateY(30px)";
      setTimeout(() => {
        (el as HTMLElement).style.transition = "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)";
        (el as HTMLElement).style.opacity = "1";
        (el as HTMLElement).style.transform = "translateY(0)";
      }, 200 + i * 150);
    });

    // Animate SVG gauges
    const gauges = containerRef.current.querySelectorAll(".gauge-svg");
    gauges.forEach((g) => {
      const needle = g.querySelector("line");
      const arc = g.querySelector(".gauge-arc");
      const pct = parseFloat(g.getAttribute("data-pct") || "0");
      if (needle) {
        const angle = -135 + 270 * (pct / 100);
        setTimeout(() => {
          (needle as unknown as HTMLElement).style.transition = "transform 2s cubic-bezier(0.34, 1.56, 0.64, 1)";
          needle.setAttribute("transform", `rotate(${angle}, 60, 70)`);
        }, 800);
      }
      if (arc) {
        const r = 45, total = 2 * Math.PI * r;
        const totalLen = Math.PI * r;
        const offset = totalLen - (totalLen * pct / 100);
        setTimeout(() => {
          (arc as unknown as HTMLElement).style.transition = "stroke-dashoffset 2s ease-out";
          arc.setAttribute("stroke-dashoffset", String(offset));
        }, 500);
      }
    });
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Floating Orbs */}
      <div className="orb orb-blue" style={{top: "10%", left: "-10%", animation: "float 8s ease-in-out infinite"}}></div>
      <div className="orb orb-cyan" style={{bottom: "20%", right: "-5%", animation: "float 10s ease-in-out infinite reverse"}}></div>
      <div className="orb orb-orange" style={{top: "40%", right: "30%", animation: "float 12s ease-in-out infinite"}}></div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 grid-pattern pointer-events-none"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        {/* Badge */}
        <div className="anim-el inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--color-accent-blue)]/20 bg-[var(--color-accent-blue)]/5 mb-8">
          <span className="pulse-dot"></span>
          <span className="text-[10px] font-semibold uppercase tracking-[.12em] text-[var(--color-accent-blue)]" style={{fontFamily: "var(--font-mono)"}}>
            Free Engineering Knowledge Base
          </span>
        </div>

        {/* Heading */}
        <h1 className="anim-el text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.9] mb-6" style={{fontFamily: "var(--font-display)", letterSpacing: "-0.03em"}}>
          Master<br />
          <span className="gradient-text">Instrumentation</span><br />
          &amp; Automation
        </h1>

        {/* Subtitle */}
        <p className="anim-el text-lg sm:text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto mb-10 leading-relaxed">
          The world&rsquo;s most comprehensive free platform covering Instrumentation, PLC, SCADA, DCS, Process Control, Industrial Networks, Functional Safety &amp; Electrical Engineering.
        </p>

        {/* CTAs */}
        <div className="anim-el flex flex-wrap justify-center gap-4 mb-16">
          <Link href="/knowledge" className="px-8 py-4 rounded-lg text-sm font-bold uppercase tracking-[.08em] text-black" style={{background: "var(--color-accent-blue)", fontFamily: "var(--font-mono)", boxShadow: "0 0 30px rgba(0,180,255,0.3)"}}>
            Explore the Engineering Hub
          </Link>
          <Link href="/about" className="px-8 py-4 rounded-lg text-sm font-bold uppercase tracking-[.08em] text-[var(--color-text-secondary)] border border-[var(--color-border)]" style={{fontFamily: "var(--font-mono)"}}>
            About the Engineer
          </Link>
        </div>

        {/* Live Dashboard */}
        <div className="anim-el grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {[
            { val: "20", label: "Knowledge Hubs", sub: "Comprehensive coverage" },
            { val: "500+", label: "Articles & Guides", sub: "Deep technical content" },
            { val: "18", label: "Engineering Tools", sub: "Interactive calculators" },
            { val: "15+", label: "Years Experience", sub: "Zero safety incidents" },
          ].map((s, i) => (
            <div key={i} className="glass-card rounded-xl p-5 text-center">
              <div className="text-2xl sm:text-3xl font-black text-[var(--color-accent-blue)]" style={{fontFamily: "var(--font-display)"}}>{s.val}</div>
              <div className="text-xs font-bold text-[var(--color-text-primary)] mt-1">{s.label}</div>
              <div className="text-[10px] text-[var(--color-text-muted)] mt-1">{s.sub}</div>
            </div>
          ))}
        </div>

        {/* SVG Gauges Row */}
        <div className="anim-el flex justify-center gap-8 sm:gap-16 mt-12">
          {[
            { pct: 92, label: "Coverage", val: "92%", color: "#00b4ff" },
            { pct: 99, label: "Accuracy", val: "99.2%", color: "#00f0ff" },
            { pct: 100, label: "Safety", val: "Zero LTI", color: "#00e676" },
          ].map((g, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <svg viewBox="0 0 120 120" className="gauge-svg w-[100px] sm:w-[120px]" data-pct={g.pct}>
                <path d="M15 105 A45 45 0 0 1 105 105" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="5" strokeLinecap="round"/>
                <path className="gauge-arc" d="M15 105 A45 45 0 0 1 105 105" fill="none" stroke={g.color} strokeWidth="5" strokeLinecap="round"
                  strokeDasharray={`${2 * Math.PI * 45}`} strokeDashoffset={`${2 * Math.PI * 45}`}/>
                <line x1="60" y1="70" x2="60" y2="28" stroke="var(--color-text-primary)" strokeWidth="2" strokeLinecap="round" transform="rotate(-135,60,70)"/>
                <circle cx="60" cy="70" r="4" fill={g.color}/>
              </svg>
              <div className="text-sm font-black" style={{color: g.color, fontFamily: "var(--font-display)"}}>{g.val}</div>
              <div className="text-[10px] text-[var(--color-text-muted)] uppercase tracking-[.1em]" style={{fontFamily: "var(--font-mono)"}}>{g.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
