"use client";

import { useState } from "react";
import Link from "next/link";
import { marked } from "marked";

const markdownContent = `# Pressure Gauges: Principles, Types, and Applications

Pressure gauges are essential instrumentation devices used to measure and display pressure of gases or liquids in industrial processes. They provide visual indication of pressure relative to atmospheric pressure (gauge pressure) or absolute zero (absolute pressure).

---

## Operating Principles

Most mechanical pressure gauges operate on the principle of **elastic deformation**. When pressure is applied to a sensing element, it deforms proportionally to the applied pressure. This mechanical movement is then amplified and displayed on a calibrated dial.

### Key Sensing Elements

| Element | Principle | Typical Range | Applications |
|---------|-----------|---------------|--------------|
| **Bourdon Tube** | C-shaped/helical tube straightens under pressure | 0–1000 bar | General purpose, process industry |
| **Diaphragm** | Flexible membrane deflects under pressure | 0–25 bar | Low pressure, corrosive media |
| **Bellows** | Accordion-like element expands/contracts | 0–40 bar | Low pressure, differential pressure |
| **Capsule** | Two diaphragms welded together | 0–600 mbar | Very low pressure, gas applications |

---

## Types of Pressure Gauges

### 1. Bourdon Tube Pressure Gauges (Most Common)

The Bourdon tube is a curved, flattened tube that tends to straighten when pressurized. The free end movement is amplified through a link-sector-gear mechanism to rotate the pointer.

#### Configurations
- **C-Type (Standard)**: 250° arc, most common for 0–1000 bar
- **Helical/Spiral**: Multiple turns for higher sensitivity, 0–60 bar
- **Coiled**: Compact design for panel mounting

#### Materials
| Material | Use Case |
|----------|----------|
| **316 SS** | General process, corrosive media |
| **Monel 400** | Seawater, marine, HF acid |
| **Inconel 625** | High temp, sour gas (H₂S) |
| **Bronze/Brass** | Water, air, non-corrosive (economical) |

### 2. Diaphragm Pressure Gauges

Used for low pressures (0–25 bar) and corrosive/viscous media. The diaphragm isolates the process media from the movement.

- **Flat Diaphragm**: For clean fluids
- **Corrugated Diaphragm**: Higher deflection, better sensitivity
- **Flush Diaphragm**: Sanitary applications (food, pharma)

### 3. Capsule Pressure Gauges

Two diaphragms welded at periphery form a capsule. Used for very low pressures (0–600 mbar). Common in:
- Gas distribution systems
- HVAC air pressure
- Clean room monitoring

### 4. Differential Pressure Gauges

Measure difference between two pressures. Used for:
- Filter monitoring (ΔP across filter)
- Level measurement (bubbler systems)
- Flow measurement (orifice plate ΔP)

---

## Accuracy Classes (per EN 837-1 / ASME B40.100)

| Class | Accuracy (±% of Span) | Typical Use |
|-------|----------------------|-------------|
| **Class 0.1** | 0.1% | Laboratory, calibration standards |
| **Class 0.25** | 0.25% | High-precision process |
| **Class 0.6** | 0.6% | Precision industrial |
| **Class 1.0** | 1.0% | General industrial (most common) |
| **Class 1.6** | 1.6% | General purpose, panel mounting |
| **Class 2.5** | 2.5% | Commercial, non-critical |

> **Field Note**: For custody transfer or safety systems, specify Class 0.6 or better. For general indication, Class 1.6 is adequate.

---

## NAMUR NE43 Compliance (4–20 mA Transmitters)

While not directly applicable to mechanical gauges, if using pressure **transmitters** with gauge displays:

| Signal Range | Status |
|--------------|--------|
| 3.8–20.5 mA | Normal operation |
| < 3.6 mA | **Low alarm (sensor fault, cable break)** |
| > 21.0 mA | **High alarm (sensor fault, overrange)** |
| 3.6–3.8 mA | Low saturation (near fault) |
| 20.5–21.0 mA | High saturation (near fault) |

---

## Selection Guide

### Process Media Compatibility

| Media | Recommended Wetted Parts |
|-------|-------------------------|
| Water, Air, Oil | Brass, Bronze, 316 SS |
| Acids (HCl, H₂SO₄) | Monel, Hastelloy C, PTFE-lined |
| Seawater, Chlorides | Monel 400, Super Duplex |
| Sour Gas (H₂S) | Inconel 625, NACE MR0175 |
| High Temperature (>200°C) | Inconel, SS with cooling element |
| Viscous/Slurry | Flush diaphragm, capillary seal |
| Sanitary (Food/Pharma) | 316L electropolished, Tri-clamp |

### Pressure Range Selection

**Rule of Thumb**: Select range so normal operating pressure is **50–75% of full scale**.

| Operating Pressure | Recommended Gauge Range |
|-------------------|------------------------|
| 10 bar | 0–16 bar or 0–25 bar |
| 50 bar | 0–60 bar or 0–100 bar |
| Vacuum | -1 to 0 bar (compound) |
| Vacuum to Pressure | -1 to +10 bar (compound) |

### Environmental Considerations

| Condition | Protection |
|-----------|------------|
| Vibration | Liquid-filled (glycerin/silicone) |
| Pulsation | Snubber, restrictor, liquid fill |
| Outdoor/Corrosive | SS case, IP65/IP66, coated movement |
| High Ambient Temp | Cooling element, capillary |
| Hazardous Area | Intrinsically safe (if transmitter), SS case |

---

## Installation Best Practices

### 1. Mounting Position
- **Vertical (standard)**: Dial face upright
- **Horizontal**: Specify "bottom connection" or "back connection"
- **Panel Mount**: Back connection with front flange or U-clamp

### 2. Process Connection
- **Thread**: 1/4" NPT (std), 1/2" NPT (high pressure)
- **Flanged**: Per ASME B16.5 / EN 1092-1
- **Sanitary**: Tri-clamp per ISO 2852 / ASME BPE

### 3. Impulse Piping
- Slope piping **≥ 1:10** toward process for gas service
- Slope **away from process** for liquid service
- Keep impulse lines **short** and **same length** (for DP)
- Use **condensate pots** for steam service

### 4. Accessories
| Accessory | Purpose |
|-----------|---------|
| **Snubber/Restrictor** | Dampen pulsation |
| **Siphon (Pigtail)** | Steam service (condensate trap) |
| **Diaphragm Seal** | Corrosive, viscous, sanitary, high temp |
| **Cooling Element** | High process temperature (>100°C) |
| **Overrange Protector** | Prevent damage from pressure spikes |

---

## Calibration & Maintenance

### Calibration Procedure (per DKD/DAkkS / ASME B40.100)

1. **Visual Inspection**: Case, window, pointer, dial
2. **Zero Check**: Verify pointer at zero with no pressure
3. **Increasing Pressure**: Apply 0%, 25%, 50%, 75%, 100% FS
4. **Decreasing Pressure**: Same points descending
5. **Record**: Hysteresis, repeatability, linearity
6. **Adjust**: If equipped with zero/span adjustment

### Acceptance Criteria (Class 1.0)
- **Linearity**: ≤ 1.0% FS
- **Hysteresis**: ≤ 1.0% FS  
- **Repeatability**: ≤ 0.5% FS

### Field Maintenance Schedule

| Frequency | Task |
|-----------|------|
| **Monthly** | Visual check: pointer at zero, no leaks, window clear |
| **Quarterly** | Tap test: lightly tap case, pointer should not stick |
| **Annually** | Full calibration against deadweight tester |
| **As Needed** | Replace if: cracked window, leaking, pointer stuck, >2× accuracy class error |

---

## Common Failure Modes

| Symptom | Probable Cause | Action |
|---------|---------------|--------|
| **Pointer stuck at zero** | Broken Bourdon tube, disconnected linkage | Replace gauge |
| **Pointer oscillates** | Pulsation, no liquid fill | Add snubber or liquid fill |
| **Reading high/low** | Calibration drift, temperature effect | Recalibrate, check temp spec |
| **Leak at connection** | Loose fitting, damaged thread | Re-tighten, replace seal |
| **Cracked window** | Impact, overpressure | Replace window/gauge |
| **Fogged window** | Seal failure, temp cycling | Replace gauge (hermetic seal lost) |
| **Pointer doesn't return to zero** | Overpressure, Bourdon tube yield | Replace gauge |

---

## Specialized Gauge Types

### Test Gauges (Calibration Grade)
- Class 0.1, 0.25, 0.6
- Mirror band parallax elimination
- Knife-edge pointer
- Used with deadweight testers

### Panel Mount Gauges
- Back connection
- Front flange or U-clamp
- Often smaller dial (40mm, 50mm, 63mm)

### Differential Pressure Gauges
- Two Bourdon tubes or diaphragm capsule
- Single pointer shows ΔP
- Used on filters, heat exchangers, level

### Sanitary Gauges
- 316L electropolished (Ra < 0.8 μm)
- Tri-clamp connection
- Fill fluid: FDA-approved (neobee, glycerin)
- No crevices, CIP/SIP compatible

### Digital Pressure Gauges
- Battery powered, 0.1–0.5% accuracy
- Data logging, min/max, backlight
- Units switching (bar, psi, kPa, kg/cm²)
- 4–20 mA output option

---

## Standards & References

| Standard | Scope |
|----------|-------|
| **EN 837-1** | Bourdon tube gauges - dimensions, metrology |
| **EN 837-2** | Selection and installation recommendations |
| **EN 837-3** | Diaphragm and capsule gauges |
| **ASME B40.100** | Pressure gauges and gauge attachments |
| **ASME B40.300** | Diaphragm/sealed gauges |
| **NAMUR NE43** | 4–20 mA signal levels (transmitters) |
| **API RP 551** | Process measurement instrumentation |
| **IEC 60770** | Transmitters for process control |

---

## Quick Reference Card

| Parameter | Recommendation |
|-----------|----------------|
| **Dial Size** | 100mm (4") field, 160mm (6") control room |
| **Case Material** | 304/316 SS for process, phenolic for panel |
| **Window** | Laminated safety glass (std), acrylic (vibration) |
| **Fill Fluid** | Glycerin 99.7% (–20 to +60°C), Silicone (–40 to +100°C) |
| **Accuracy** | Class 1.0 (field), Class 0.6 (control), Class 0.25 (lab) |
| **Range** | Normal op at 50–75% FS |
| **Connection** | 1/2" NPT male (process), 1/4" NPT (instrument) |
| **Tagging** | Stainless steel tag, laser etched |

---

## Conclusion

Pressure gauges remain the most fundamental and reliable pressure indication devices in process plants. Proper selection requires understanding:

1. **Process conditions** (pressure, temperature, media, viscosity)
2. **Accuracy requirements** (safety, control, indication only)
3. **Environment** (vibration, corrosion, temperature, hazardous area)
4. **Installation constraints** (mounting, impulse piping, accessories)
5. **Maintenance philosophy** (calibration interval, spare parts strategy)

> **Final Field Note**: A gauge that reads correctly but can't be read (fogged, wrong position, no light) is useless. Install for **readability first**, then accuracy. Use liquid fill for vibration. Specify 316 SS case for corrosive atmospheres. And always—always—verify zero before trusting the reading.

---

*Document Version 1.0 | Based on EN 837, ASME B40.100, API RP 551, and field experience from NEOM Green Hydrogen, NSRP Vietnam, ADNOC UAE projects*`;

const sections = [
  { id: "principles", title: "Operating Principles", icon: "⚙️" },
  { id: "types", title: "Types of Pressure Gauges", icon: "📐" },
  { id: "accuracy", title: "Accuracy Classes", icon: "🎯" },
  { id: "namur", title: "NAMUR NE43", icon: "📡" },
  { id: "selection", title: "Selection Guide", icon: "✅" },
  { id: "installation", title: "Installation Best Practices", icon: "🔧" },
  { id: "calibration", title: "Calibration & Maintenance", icon: "📋" },
  { id: "failures", title: "Common Failure Modes", icon: "⚠️" },
  { id: "specialized", title: "Specialized Gauge Types", icon: "🔬" },
  { id: "standards", title: "Standards & References", icon: "📚" },
  { id: "quickref", title: "Quick Reference Card", icon: "🗒️" },
  { id: "conclusion", title: "Conclusion", icon: "🏁" },
];

export default function PressureGaugesPage() {
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
          <span className="text-[var(--color-text-primary)] font-medium">Pressure Gauges</span>
        </nav>

        {/* Header */}
        <header className="mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-amber-500/20 bg-amber-500/5 mb-6">
            <span className="text-[9px] font-semibold uppercase tracking-[.12em] text-amber-500" style={{fontFamily: "var(--font-mono)"}}>
              Instrumentation Guide
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[var(--color-text-primary)] mb-4" style={{fontFamily: "var(--font-display)"}}>
            Pressure Gauges
          </h1>
          <p className="text-lg sm:text-xl text-[var(--color-text-secondary)] max-w-3xl leading-relaxed">
            Comprehensive guide covering principles, types, selection, installation, calibration, and troubleshooting of industrial pressure gauges.
          </p>
          
          {/* Meta tags */}
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-[var(--color-text-muted)]">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              <span>EN 837 / ASME B40.100</span>
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-cyan-500" />
              <span>Field-Tested (NEOM, NSRP, ADNOC)</span>
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              <span>Class 0.1 – 2.5 Coverage</span>
            </span>
          </div>
        </header>

        {/* Table of Contents Sidebar + Content */}
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

            {/* Gauge Cross-Section Image */}
            <div className="mt-10 relative aspect-[4/3] max-w-[600px] mx-auto">
              <img
                src="/pressure-gauge-diagram.png"
                alt="Cross-section of a Bourdon tube pressure gauge showing internal components: Bourdon tube, linkage, sector gear, pinion, pointer, and dial"
                className="w-full h-full object-contain rounded-xl opacity-90 hover:opacity-100 transition-opacity duration-300"
                style={{filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.3))"}}
              />
              <p className="mt-3 text-center text-sm text-[var(--color-text-muted)]">
                Internal construction of a Bourdon tube pressure gauge (cross-section view)
              </p>
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