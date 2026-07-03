"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="page-enter max-w-5xl mx-auto px-4 py-16">
      {/* Header */}
      <section className="mb-16">
        <div className="flex flex-col md:flex-row gap-10 items-start">
          <div className="w-32 h-32 rounded-xl bg-[var(--color-bg-card)] border border-[var(--color-border)] flex items-center justify-center text-5xl flex-shrink-0 shadow-lg">👨‍🔧</div>
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--color-accent-blue)]/20 bg-[var(--color-accent-blue)]/5 mb-4">
              <span className="pulse-dot"></span>
              <span className="text-[9px] font-semibold uppercase tracking-[.12em] text-[var(--color-accent-blue)]" style={{fontFamily: "var(--font-mono)"}}>Open to GCC Opportunities</span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-black text-[var(--color-text-primary)] mb-4 leading-[0.9]" style={{fontFamily: "var(--font-display)"}}>
              Satish Kumar <span className="gradient-text">Jaiswal</span>
            </h1>
            <p className="text-base sm:text-lg font-semibold text-[var(--color-accent-blue)] mb-4" style={{fontFamily: "var(--font-mono)"}}>// Senior I&amp;C / Commissioning Engineer</p>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed max-w-xl">
              15+ years commissioning the world&rsquo;s most demanding industrial systems. NEOM Green Hydrogen Complex &middot; NSRP Vietnam &middot; ADNOC UAE. Every loop, every interlock, every handover &mdash; done right.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <span className="cat-badge blue">📍 KSA / GCC Ready</span>
              <span className="cat-badge cyan">🔄 Transferable Iqama</span>
              <span className="cat-badge orange">✅ Immediately Available</span>
              <span className="cat-badge green">🏆 Zero LTI &mdash; 15 Yrs</span>
            </div>
            <div className="flex gap-4 mt-8">
              <a href="mailto:jaissatish@gmail.com" className="btn-primary px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-[.08em] text-black" style={{background: "var(--color-accent-blue)", fontFamily: "var(--font-mono)", boxShadow: "0 0 20px rgba(0,180,255,0.3)"}}>Contact Me</a>
              <a href="https://linkedin.com/in/satish-jaiswal-ic" target="_blank" className="btn-ghost px-5 py-3 rounded-lg text-xs font-bold uppercase tracking-[.08em] border border-[var(--color-border)]" style={{fontFamily: "var(--font-mono)"}}>LinkedIn</a>
              <a href="/portfolio.html" className="btn-ghost px-5 py-3 rounded-lg text-xs font-bold uppercase tracking-[.08em] border border-[var(--color-border)]" style={{fontFamily: "var(--font-mono)"}}>View Full Portfolio</a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="glass-card rounded-xl p-6 text-center relative overflow-hidden">
            <div className="absolute -bottom-5 -right-5 w-16 h-16 rounded-full" style={{background: "radial-gradient(circle, rgba(0,180,255,0.07), transparent)"}}></div>
            <div className="text-3xl font-black text-[var(--color-accent-blue)]" style={{fontFamily: "var(--font-display)"}}>67K+</div>
            <div className="text-xs font-semibold text-[var(--color-text-primary)] mt-2">Total Loop Checks</div>
          </div>
          <div className="glass-card rounded-xl p-6 text-center relative overflow-hidden">
            <div className="absolute -bottom-5 -right-5 w-16 h-16 rounded-full" style={{background: "radial-gradient(circle, rgba(0,180,255,0.07), transparent)"}}></div>
            <div className="text-3xl font-black text-[var(--color-text-primary)]" style={{fontFamily: "var(--font-display)"}}>8+</div>
            <div className="text-xs font-semibold text-[var(--color-text-primary)] mt-2">Mega Projects</div>
          </div>
          <div className="glass-card rounded-xl p-6 text-center relative overflow-hidden">
            <div className="absolute -bottom-5 -right-5 w-16 h-16 rounded-full" style={{background: "radial-gradient(circle, rgba(0,180,255,0.07), transparent)"}}></div>
            <div className="text-3xl font-black text-[var(--color-accent-blue)]" style={{fontFamily: "var(--font-display)"}}>99.2%</div>
            <div className="text-xs font-semibold text-[var(--color-text-primary)] mt-2">First-Pass Rate</div>
          </div>
          <div className="glass-card rounded-xl p-6 text-center relative overflow-hidden">
            <div className="absolute -bottom-5 -right-5 w-16 h-16 rounded-full" style={{background: "radial-gradient(circle, rgba(0,224,144,0.08), transparent)"}}></div>
            <div className="text-3xl font-black text-[var(--color-accent-green)]" style={{fontFamily: "var(--font-display)"}}>Zero</div>
            <div className="text-xs font-semibold text-[var(--color-text-primary)] mt-2">LTI in 15 Years</div>
          </div>
        </div>
      </section>

      {/* Competency Grid */}
      <section className="mb-16">
        <div className="eye-badge">Core Disciplines</div>
        <h2 className="text-3xl font-black text-[var(--color-text-primary)] mb-6" style={{fontFamily: "var(--font-display)"}}>
          What I Do in the <span className="gradient-blue">Field</span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {[
            {ico:"🔁",n:"Loop Testing",d:"End-to-end I/O verification · 4-20mA signal check · HART loop · DCS readback"},
            {ico:"⚡",n:"Functional Testing",d:"Control system checks · alarm setpoints · shutdown sequence verification"},
            {ico:"🛡",n:"Interlock Testing",d:"SIS/ESD logic vs C&E matrix · trip sequence · fail-safe direction"},
            {ico:"📘",n:"Control Philosophy",d:"Validate control philosophy docs against P&IDs · DCS logic · sign-off"},
            {ico:"📄",n:"Narrative Review",d:"Operating narrative development · start-up procedure validation"},
            {ico:"🗺",n:"I/O Mapping",d:"Tag mapping · DCS point list cross-reference · cable schedule verification"},
            {ico:"🔧",n:"Troubleshooting",d:"Live fault diagnosis · HART config · field defect close-out · punch clearance"},
            {ico:"🔍",n:"Investigation",d:"Root cause analysis · near-miss · instrument deviation · corrective action"},
            {ico:"⚠️",n:"MCC Trip Testing",d:"Motor control centre trip verification · start/stop permissive logic"},
            {ico:"🚀",n:"Plant Start-Up",d:"Pre-PSSR checks · live commissioning · vendor coordination · punch close-out"},
            {ico:"📊",n:"ITR / ICAPS",d:"A/B/C tracking · ICAPS database · GOC status · completion reporting"},
            {ico:"📐",n:"Cause & Effect",d:"C&E matrix review · shutdown key · SIL sign-off · HAZOP action close-out"},
          ].map((c, i) => (
            <div key={i} className="rounded-lg p-3.5 border transition-all duration-200 hover:border-[var(--color-accent-blue)] hover:bg-white/[.03]" style={{background: "var(--color-bg-raise)", borderColor: "var(--color-border)"}}>
              <div className="text-lg mb-1.5">{c.ico}</div>
              <div className="text-[10px] font-semibold uppercase tracking-[.06em] text-[var(--color-text-primary)] mb-1" style={{fontFamily: "var(--font-mono)"}}>{c.n}</div>
              <div className="text-[10.5px] text-[var(--color-text-muted)] leading-relaxed">{c.d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Timeline */}
            <section className="mb-16 p-6 sm:p-8 rounded-xl border border-[var(--color-border)]" style={{background: "rgba(19,29,46,0.6)"}}>
        <div className="eye-badge">Career Journey</div>
        <h2 className="text-3xl font-black text-[var(--color-text-primary)] mb-10" style={{fontFamily: "var(--font-display)"}}>
          Professional <span className="gradient-blue">Experience</span>
        </h2>
        
        <div className="relative pl-8 border-l-2" style={{borderColor: "var(--color-accent-blue)"}}>
          {[
            { tag: "● Active", tagStyle: "rgb(0,180,255)", year: "Jul 2024 – Present", role: "Instrument Pre-Commissioning Engineer", org: "CCC — Air Products · NEOM Green Hydrogen Complex · $8.4B", pts: ["50,000+ loop checks ahead of schedule · 99.2% first-pass accuracy", "Functional testing of DCS/SIS — Siemens S7, ESD, F&G, SCADA", "Interlock testing against C&E matrix · trip logic and fail-safe confirmed", "Control philosophy review and narrative validation against P&IDs", "I/O mapping — DCS point list cross-referenced against final P&IDs", "MCC trip testing · start/stop permissive · overload relay verification", "Troubleshooting live commissioning defects · HART diagnostics · RCA", "ITR/ICAPS management — 50K+ tag items tracked to GOC/Released status", "Led 12+ engineers and 90+ field technicians daily", "PSSR punch-list close-out · system handover coordination to client"] },
            { tag: "↑ Promoted", tagStyle: "rgb(0,180,255)", year: "Dec 2022 – Feb 2024", role: "Assistant Superintendent — Utility Maintenance", org: "PEC Ltd · NSRP (Asia's Largest Single-Train Refinery) · Vietnam", pts: ["Full utility commissioning — GTGs, STGs, boilers, HRSGs", "Honeywell Experion PKS — 8,000+ utility instrumentation points", "Interlock and MCC trip testing for all utility circuits", "F&G integrity, SIS validation, PLC interlock verification", "Troubleshooting field defects during live plant start-up activities", "Supervised 30+ engineers and technicians · zero safety incidents"] },
            { tag: "Senior", tagStyle: "var(--color-text-muted)", year: "Dec 2020 – Nov 2022", role: "Senior Instrument Engineer", org: "PEC Ltd · NSRP Refinery · Vietnam", pts: ["12,000+ loop tests across DCS, SIS, SCADA systems", "Control narrative review and implementation vs P&IDs", "RCA investigations — reduced plant downtime by ~25%", "3,000+ instruments calibrated and performance-optimised"] },
            { tag: "", tagStyle: "", year: "2018 – 2020", role: "I&C Engineer", org: "PEC Ltd · NSRP · Vietnam", pts: ["5,000+ loops · HART/Fieldbus · mapping · troubleshooting · start-up support"] },
            { tag: "", tagStyle: "", year: "2018", role: "I&C Pre-Commissioning Engineer", org: "Bechtel · Al Taweelah Alumina · UAE", pts: ["Honeywell Experion · SILbus · C&E matrices · Bechtel standards · functional testing"] },
            { tag: "", tagStyle: "", year: "2016 – 2018", role: "I&C Commissioning Engineer", org: "JGCS JV · NSRP · Vietnam", pts: ["Plant start-up · SCADA · Allen Bradley PLC · SIS · MCC trip testing · narrative review"] },
            { tag: "", tagStyle: "", year: "2014 – 2016", role: "Instrument Commissioning Engineer", org: "Hyundai Engineering · ADNOC/TAKREER · UAE", pts: ["Foxboro DCS · Triconex ESD · BMS · ADNOC standards · interlock & functional testing"] },
          ].map((exp, i) => (
            <div key={i} className="relative mb-8 pl-4" style={{marginLeft: "-1px"}}>
              <div className="absolute -left-[33px] top-1.5 w-4 h-4 rounded-full border-2 z-10" style={{background: "var(--color-bg-primary)", borderColor: i === 0 ? "var(--color-accent-blue)" : "var(--color-border)"}}></div>
              <div className="glass-card rounded-xl p-5 sm:p-6">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  {exp.tag && <span className="text-[9px] font-semibold uppercase tracking-[.12em] px-2 py-1 rounded" style={{background: "rgba(0,180,255,0.08)", color: "var(--color-accent-blue)", border: "1px solid rgba(0,180,255,0.2)", fontFamily: "var(--font-mono)"}}>{exp.tag}</span>}
                  <span className="text-[10px] text-[var(--color-text-muted)]" style={{fontFamily: "var(--font-mono)"}}>{exp.year}</span>
                </div>
                <div className="text-lg font-black uppercase tracking-[.02em] text-[var(--color-text-primary)]" style={{fontFamily: "var(--font-display)"}}>{exp.role}</div>
                <div className="text-[11px] text-[var(--color-accent-blue)] mb-4" style={{fontFamily: "var(--font-mono)"}}>{exp.org}</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                  {exp.pts.map((pt, j) => (
                    <div key={j} className="text-xs text-[var(--color-text-secondary)] leading-relaxed pl-3 relative">
                      <span className="absolute left-0 top-0.5" style={{color: "var(--color-accent-blue)"}}>▸</span>
                      {pt}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Matrix */}
      <section className="mb-10">
        <div className="eye-badge">Technical Arsenal</div>
        <h2 className="text-3xl font-black text-[var(--color-text-primary)] mb-8" style={{fontFamily: "var(--font-display)"}}>
          Core <span className="gradient-blue">Competencies</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="glass-card rounded-xl p-6">
            <div className="flex items-center gap-2 mb-5"><span className="text-lg">🖥</span><span className="text-sm font-bold uppercase tracking-[.04em] text-[var(--color-text-primary)]" style={{fontFamily: "var(--font-display)"}}>DCS Platforms</span></div>
            {[{n:"Siemens S7 / PCS7",lv:"Expert",pct:97,c:"var(--color-accent-blue)"},{n:"Honeywell Experion PKS",lv:"Expert",pct:95,c:"var(--color-accent-blue)"},{n:"Foxboro I/A Series",lv:"Advanced",pct:88,c:"var(--color-accent-green)"},{n:"Yokogawa CENTUM VP",lv:"Proficient",pct:74,c:"var(--color-accent-orange)"}].map((s,i)=>(
              <div key={i} className="mb-3"><div className="flex justify-between text-[11px] mb-1"><span className="text-[var(--color-text-secondary)]">{s.n}</span><span className="font-semibold text-[10px]" style={{color:s.c,fontFamily:"var(--font-mono)"}}>{s.lv}</span></div><div className="h-1.5 rounded-full" style={{background:"var(--color-bg-raise)"}}><div className="h-full rounded-full transition-all" style={{width:`${s.pct}%`,background:`linear-gradient(90deg, ${s.c}, ${s.c}88)`}}></div></div></div>
            ))}
          </div>
          <div className="glass-card rounded-xl p-6">
            <div className="flex items-center gap-2 mb-5"><span className="text-lg">🛡</span><span className="text-sm font-bold uppercase tracking-[.04em] text-[var(--color-text-primary)]" style={{fontFamily: "var(--font-display)"}}>SIS / ESD Systems</span></div>
            {[{n:"Triconex TS3000",lv:"Expert",pct:93,c:"var(--color-accent-orange)"},{n:"Honeywell Safety Manager",lv:"Expert",pct:90,c:"var(--color-accent-orange)"},{n:"F&G / BMS / HIPS",lv:"Advanced",pct:87,c:"var(--color-accent-blue)"},{n:"IEC 61511 / SIL / LOPA",lv:"Advanced",pct:84,c:"var(--color-accent-blue)"}].map((s,i)=>(
              <div key={i} className="mb-3"><div className="flex justify-between text-[11px] mb-1"><span className="text-[var(--color-text-secondary)]">{s.n}</span><span className="font-semibold text-[10px]" style={{color:s.c,fontFamily:"var(--font-mono)"}}>{s.lv}</span></div><div className="h-1.5 rounded-full" style={{background:"var(--color-bg-raise)"}}><div className="h-full rounded-full transition-all" style={{width:`${s.pct}%`,background:`linear-gradient(90deg, ${s.c}, ${s.c}88)`}}></div></div></div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5">
          <div className="glass-card rounded-xl p-6">
            <div className="flex items-center gap-2 mb-5"><span className="text-lg">⚡</span><span className="text-sm font-bold uppercase tracking-[.04em] text-[var(--color-text-primary)]" style={{fontFamily: "var(--font-display)"}}>Commissioning Disciplines</span></div>
            <div className="flex flex-wrap gap-2">
              {["Loop Testing","Functional Testing","Interlock Testing","MCC Trip Testing","Control Philosophy","Narrative Review","I/O Mapping","Tag Mapping","Troubleshooting","RCA / Investigation","FAT / SAT","PSSR","System Handover","Punch-List Close","ITR / ICAPS","Pre-Commissioning","Plant Start-Up","HAZOP / C&E","Cause & Effect Matrix","GOC / Released Status"].map((t,i)=>(
                <span key={i} className="text-[9px] font-semibold uppercase tracking-[.05em] px-2 py-1 rounded border text-[var(--color-text-muted)]" style={{background:"var(--color-bg-raise)",borderColor:"var(--color-border)",fontFamily:"var(--font-mono)"}}>{t}</span>
              ))}
            </div>
          </div>
          <div className="glass-card rounded-xl p-6">
            <div className="flex items-center gap-2 mb-5"><span className="text-lg">📡</span><span className="text-sm font-bold uppercase tracking-[.04em] text-[var(--color-text-primary)]" style={{fontFamily: "var(--font-display)"}}>Field Instruments</span></div>
            <div className="flex flex-wrap gap-2">
              {["HART Protocol","Foundation Fieldbus","Control Valves","Smart Positioners","Solenoid Valves","Process Analysers","Vibration Monitoring","Coriolis / Ultrasonic","Allen Bradley PLC","SCADA / HMI","Emerson AMS / 475","SPI / INtools","ICAPS","SAP PM / CMMS"].map((t,i)=>(
                <span key={i} className="text-[9px] font-semibold uppercase tracking-[.05em] px-2 py-1 rounded border text-[var(--color-text-muted)]" style={{background:"var(--color-bg-raise)",borderColor:"var(--color-border)",fontFamily:"var(--font-mono)"}}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section>
        <div className="eye-badge">Get In Touch</div>
        <h2 className="text-3xl font-black text-[var(--color-text-primary)] mb-8" style={{fontFamily: "var(--font-display)"}}>
          Let&rsquo;s Build <span className="gradient-blue">Something Great</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-7">
              Available immediately for I&C Superintendent, Senior Commissioning Engineer, ICSS Lead and E&I Superintendent roles across the GCC. Transferable Iqama &mdash; no notice period.
            </p>
            <div className="space-y-3">
              {[{ico:"📞",l:"Phone / WhatsApp",v:"+966 554 803 735",h:"tel:+966554803735"},{ico:"✉️",l:"Email",v:"jaissatish@gmail.com",h:"mailto:jaissatish@gmail.com"},{ico:"💼",l:"LinkedIn",v:"Connect on LinkedIn →",h:"https://linkedin.com/in/satish-jaiswal-ic"}].map((c,i)=>(
                <a key={i} href={c.h} target={c.h.startsWith("http")?"_blank":"_self"} className="flex items-center gap-3 p-4 rounded-lg border transition-all hover:translate-x-1" style={{background:"var(--color-bg-card)",borderColor:"var(--color-border)"}}>
                  <div className="w-9 h-9 rounded-md border flex items-center justify-center text-sm flex-shrink-0" style={{background:"var(--color-bg-raise)",borderColor:"var(--color-border)"}}>{c.ico}</div>
                  <div>
                    <div className="text-[9px] font-semibold uppercase tracking-[.16em] text-[var(--color-text-muted)]" style={{fontFamily:"var(--font-mono)"}}>{c.l}</div>
                    <div className="text-sm font-semibold text-[var(--color-text-primary)]">{c.v}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
          <div className="rounded-xl p-6 sm:p-8" style={{background:"var(--color-bg-card)",border:"1px solid var(--color-border)"}}>
            <div className="text-xl font-black uppercase tracking-[.03em] text-[var(--color-text-primary)] mb-6" style={{fontFamily:"var(--font-display)"}}>Send a Message</div>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}

// Simple client form component
function ContactForm() {
  const [sent, setSent] = React.useState(false);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="text-[9px] font-semibold uppercase tracking-[.16em] text-[var(--color-text-muted)] block mb-1.5" style={{fontFamily:"var(--font-mono)"}}>Full Name</label>
        <input className="w-full px-3 py-2.5 rounded-md text-sm bg-[var(--color-bg-raise)] border border-[var(--color-border)] text-[var(--color-text-primary)] outline-none focus:border-[var(--color-accent-blue)]" type="text" placeholder="Your name" value={name} onChange={e => setName(e.target.value)} />
      </div>
      <div className="mb-4">
        <label className="text-[9px] font-semibold uppercase tracking-[.16em] text-[var(--color-text-muted)] block mb-1.5" style={{fontFamily:"var(--font-mono)"}}>Email</label>
        <input className="w-full px-3 py-2.5 rounded-md text-sm bg-[var(--color-bg-raise)] border border-[var(--color-border)] text-[var(--color-text-primary)] outline-none focus:border-[var(--color-accent-blue)]" type="email" placeholder="your@email.com" value={email} onChange={e => setEmail(e.target.value)} />
      </div>
      <div className="mb-5">
        <label className="text-[9px] font-semibold uppercase tracking-[.16em] text-[var(--color-text-muted)] block mb-1.5" style={{fontFamily:"var(--font-mono)"}}>Message</label>
        <textarea className="w-full px-3 py-2.5 rounded-md text-sm bg-[var(--color-bg-raise)] border border-[var(--color-border)] text-[var(--color-text-primary)] outline-none focus:border-[var(--color-accent-blue)]" rows={4} placeholder="Tell me about the role or project..."></textarea>
      </div>
      <button type="submit" className="w-full py-2.5 rounded-md text-[10px] font-bold uppercase tracking-[.09em] text-black transition-all hover:shadow-lg" style={{background:"var(--color-accent-blue)",fontFamily:"var(--font-mono)",boxShadow:"0 0 15px rgba(0,180,255,0.2)"}}>
        {sent ? "✓ Message Sent!" : "Send Message →"}
      </button>
    </form>
  );
}
