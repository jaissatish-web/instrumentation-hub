"use client";

import InstrumentArticleLayout, {
  AccuracyBarChart,
  NAMURBandChart,
  PressureRangeChart,
} from "@/components/InstrumentArticleLayout";
import PageMeta from "@/components/PageMeta";

// ─── Config ────────────────────────────────────────────────────
const seo = {
  title: "Pressure Gauges",
  description:
    "Master industrial pressure gauges from Bourdon tube principles to NAMUR NE43 compliance. Covers selection criteria, accuracy classes (Class 0.1-2.5), installation, calibration, and troubleshooting.",
  canonical: "https://ihub-eta.vercel.app/knowledge/instrumentation/pressure-gauges",
  image: "/pressure-gauge-diagram.png",
  keywords: "pressure gauge, Bourdon tube, diaphragm pressure gauge, pressure gauge calibration, pressure gauge accuracy class, EN 837, ASME B40.100, industrial instrumentation",
};

const meta = {
  title: seo.title,
  description:
    "Comprehensive guide covering principles, types, selection, installation, calibration, and troubleshooting of industrial pressure gauges.",
  category: "Instrumentation Guide",
  breadcrumb: [
    { label: "Knowledge Base", href: "/knowledge" },
    { label: "Instrumentation", href: "/knowledge/instrumentation" },
    { label: "Pressure Gauges", href: "/knowledge/instrumentation/pressure-gauges" },
  ],
  metaTags: [
    { label: "EN 837 / ASME B40.100", color: "amber" as const },
    { label: "Class 0.1 – 2.5 Coverage", color: "green" as const },
  ],
};

// ─── Section Content ───────────────────────────────────────────

const SectionContent = {
  // ── Block 1: Quick Facts (5 stat cards) ──────────────────────
  quickfacts: (
    <>
      <p className="mb-5 text-[var(--color-text-secondary)]">
        Pressure gauges are the most widely used pressure indication instruments in process plants worldwide. Here are the essential facts every instrumentation engineer should know before diving deeper.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
        {/* Card 1 */}
        <div className="rounded-xl p-4 text-center" style={{background: "var(--color-bg-raise)", border: "1px solid var(--color-border)"}}>
          <div className="text-2xl sm:text-3xl font-black text-amber-400 mb-1" style={{fontFamily: "var(--font-display)"}}>1000</div>
          <div className="text-[10px] uppercase tracking-[.08em] text-[var(--color-text-muted)]" style={{fontFamily: "var(--font-mono)"}}>Max Range (bar)</div>
          <p className="text-[10px] text-[var(--color-text-muted)] mt-1">Bourdon tube, helical for higher</p>
        </div>
        {/* Card 2 */}
        <div className="rounded-xl p-4 text-center" style={{background: "var(--color-bg-raise)", border: "1px solid var(--color-border)"}}>
          <div className="text-2xl sm:text-3xl font-black text-amber-400 mb-1" style={{fontFamily: "var(--font-display)"}}>0.1–2.5</div>
          <div className="text-[10px] uppercase tracking-[.08em] text-[var(--color-text-muted)]" style={{fontFamily: "var(--font-mono)"}}>Accuracy Class (%)</div>
          <p className="text-[10px] text-[var(--color-text-muted)] mt-1">Per EN 837 / ASME B40.100</p>
        </div>
        {/* Card 3 */}
        <div className="rounded-xl p-4 text-center" style={{background: "var(--color-bg-raise)", border: "1px solid var(--color-border)"}}>
          <div className="text-2xl sm:text-3xl font-black text-amber-400 mb-1" style={{fontFamily: "var(--font-display)"}}>4</div>
          <div className="text-[10px] uppercase tracking-[.08em] text-[var(--color-text-muted)]" style={{fontFamily: "var(--font-mono)"}}>Sensing Elements</div>
          <p className="text-[10px] text-[var(--color-text-muted)] mt-1">Bourdon · Diaphragm · Bellows · Capsule</p>
        </div>
        {/* Card 4 */}
        <div className="rounded-xl p-4 text-center" style={{background: "var(--color-bg-raise)", border: "1px solid var(--color-border)"}}>
          <div className="text-2xl sm:text-3xl font-black text-amber-400 mb-1" style={{fontFamily: "var(--font-display)"}}>EN 837</div>
          <div className="text-[10px] uppercase tracking-[.08em] text-[var(--color-text-muted)]" style={{fontFamily: "var(--font-mono)"}}>Primary Standard</div>
          <p className="text-[10px] text-[var(--color-text-muted)] mt-1">Also ASME B40.100, API RP 551</p>
        </div>
        {/* Card 5 */}
        <div className="rounded-xl p-4 text-center" style={{background: "var(--color-bg-raise)", border: "1px solid var(--color-border)"}}>
          <div className="text-2xl sm:text-3xl font-black text-amber-400 mb-1" style={{fontFamily: "var(--font-display)"}}>50–75%</div>
          <div className="text-[10px] uppercase tracking-[.08em] text-[var(--color-text-muted)]" style={{fontFamily: "var(--font-mono)"}}>Ideal FS Range</div>
          <p className="text-[10px] text-[var(--color-text-muted)] mt-1">Normal op as % of full scale</p>
        </div>
      </div>
    </>
  ),

  // ── Block 2: Working Principle (with diagram) ────────────────
  workingprinciple: (
    <>
      <h3 className="text-sm font-bold text-[var(--color-text-primary)] mb-3" style={{fontFamily: "var(--font-display)"}}>The Fundamental Idea: Elastic Deformation</h3>
      <p>
        Every mechanical pressure gauge, regardless of its shape or size, relies on one simple physical principle: <strong>elastic deformation</strong>. When a fluid (liquid or gas) exerts force on a surface, that surface deforms. If the material is elastic — meaning it returns to its original shape when the force is removed — the amount of deformation is proportional to the applied pressure. Hooke&apos;s law (<em>F = kx</em>) governs this relationship: within the elastic limit of the material, strain is directly proportional to stress.
      </p>
      <p className="mt-3">
        The genius of the pressure gauge is that it takes this tiny, invisible deformation and mechanically amplifies it into a visible pointer rotation across a calibrated dial. This is achieved through a clever arrangement of levers, gears, and springs — a mechanical computer that converts pressure into position.
      </p>

      <h3 className="text-sm font-bold text-[var(--color-text-primary)] mt-5 mb-3" style={{fontFamily: "var(--font-display)"}}>The Bourdon Tube: Most Widely Used Design</h3>
      <p>
        Invented by French engineer Eugène Bourdon in 1849, the Bourdon tube remains the most common pressure-sensing element in industrial use. It is a curved or coiled tube with an <strong>elliptical cross-section</strong> — and that elliptical shape is the key to how it works.
      </p>
      <p className="mt-3">
        <strong>Why an elliptical cross-section?</strong> When internal pressure is applied, the tube tries to become circular in cross-section (a circle encloses the maximum area for a given perimeter, so the pressurized fluid pushes the flattened top and bottom outward). This cross-sectional change creates unbalanced forces along the tube&apos;s length. Because the outer radius of the curve has more surface area than the inner radius, the net force pushes the tube to <strong>straighten out</strong>. The higher the pressure, the more it straightens.
      </p>
      <ul className="text-sm space-y-2 text-[var(--color-text-secondary)] mt-3">
        <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-amber-500 flex-shrink-0" /><strong>C-Type (250° arc):</strong> Most common, covers 0–1000 bar. The free end moves approximately 5–10 mm at full scale — a tiny distance that must be amplified.</li>
        <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-amber-500 flex-shrink-0" /><strong>Helical/Spiral:</strong> Multi-turn designs for higher sensitivity (0–60 bar). More coils = more aggregate straightening motion = finer resolution.</li>
        <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-amber-500 flex-shrink-0" /><strong>Coiled:</strong> Compact form factor for panel mounting where space is tight.</li>
      </ul>

      <h3 className="text-sm font-bold text-[var(--color-text-primary)] mt-5 mb-3" style={{fontFamily: "var(--font-display)"}}>The Mechanical Amplification Train</h3>
      <p>
        The Bourdon tube&apos;s free end moves only a few millimetres. To rotate a pointer 270° around a dial, three amplification stages work together:
      </p>
      <ol className="text-sm space-y-2 text-[var(--color-text-secondary)] list-decimal list-inside mt-2">
        <li><strong>Link (connecting rod):</strong> A thin rod connects the tube&apos;s free end to the sector gear. It converts the tube&apos;s arc motion into linear motion.</li>
        <li><strong>Sector gear (quadrant):</strong> The linear pull from the link rotates a curved gear segment. The sector gear&apos;s radius determines the first stage of mechanical advantage — a longer sector arm gives more rotation for the same linear displacement.</li>
        <li><strong>Pinion gear + pointer:</strong> The sector gear meshes with a small pinion gear (typically 10–20 teeth). The gear ratio (sector teeth ÷ pinion teeth) provides the second stage of amplification. A typical ratio of 10:1 means every degree of sector rotation becomes 10° of pointer rotation.</li>
      </ol>
      <p className="mt-3">
        A <strong>hairspring</strong> (a fine coiled spring attached to the pinion) constantly takes up gear backlash, ensuring the pointer returns to the same position each cycle without hysteresis from loose gear teeth. This is why you&apos;ll sometimes see the pointer oscillate slightly when you tap a gauge — the hairspring is settling into equilibrium.
      </p>

      <h3 className="text-sm font-bold text-[var(--color-text-primary)] mt-5 mb-3" style={{fontFamily: "var(--font-display)"}}>Other Sensing Elements</h3>
      <div className="overflow-x-auto my-3">
        <table className="w-full text-sm text-[var(--color-text-secondary)]">
          <thead>
            <tr className="border-b border-[var(--color-border)]">
              <th className="text-left py-2 pr-3 font-semibold text-[var(--color-text-primary)]" style={{fontFamily: "var(--font-mono)"}}>Element</th>
              <th className="text-left py-2 px-3 font-semibold text-[var(--color-text-primary)]" style={{fontFamily: "var(--font-mono)"}}>Principle</th>
              <th className="text-left py-2 px-3 font-semibold text-[var(--color-text-primary)]" style={{fontFamily: "var(--font-mono)"}}>Typical Range</th>
              <th className="text-left py-2 pl-3 font-semibold text-[var(--color-text-primary)]" style={{fontFamily: "var(--font-mono)"}}>Applications</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-[var(--color-border)]/50"><td className="py-2 pr-3 font-medium text-[var(--color-text-primary)]">Bourdon Tube</td><td className="py-2 px-3">C-shaped/helical tube straightens under pressure; works because the elliptical cross-section tries to become circular, creating unbalanced forces that push the tube straight</td><td className="py-2 px-3" style={{fontFamily: "var(--font-mono)"}}>0–1000 bar</td><td className="py-2 pl-3">General purpose, process industry</td></tr>
            <tr className="border-b border-[var(--color-border)]/50"><td className="py-2 pr-3 font-medium text-[var(--color-text-primary)]">Diaphragm</td><td className="py-2 px-3">Flexible membrane deflects under pressure; the thin metal disc bows outward like a drumhead, with the centre displacement proportional to pressure</td><td className="py-2 px-3" style={{fontFamily: "var(--font-mono)"}}>0–25 bar</td><td className="py-2 pl-3">Low pressure, corrosive media</td></tr>
            <tr className="border-b border-[var(--color-border)]/50"><td className="py-2 pr-3 font-medium text-[var(--color-text-primary)]">Bellows</td><td className="py-2 px-3">Accordion-like element expands/contracts; multiple convolutions multiply the travel distance, making it ideal for low-pressure measurement where more stroke is needed</td><td className="py-2 px-3" style={{fontFamily: "var(--font-mono)"}}>0–40 bar</td><td className="py-2 pl-3">Low pressure, differential pressure</td></tr>
            <tr><td className="py-2 pr-3 font-medium text-[var(--color-text-primary)]">Capsule</td><td className="py-2 px-3">Two diaphragms welded at the periphery; the sealed cavity expands/contracts as a unit, doubling the deflection for the same pressure — essential for sensing millibar-level changes</td><td className="py-2 px-3" style={{fontFamily: "var(--font-mono)"}}>0–600 mbar</td><td className="py-2 pl-3">Very low pressure, gas applications</td></tr>
          </tbody>
        </table>
      </div>
      <div className="p-4 rounded-lg border-l-4 border-amber-500 bg-amber-500/5">
        <p className="text-sm text-[var(--color-text-secondary)]"><strong className="text-amber-400">Field Insight — Why It Matters:</strong> The choice of sensing element is not arbitrary. Bourdon tubes handle high pressure because the curved geometry distributes stress evenly — a straight tube of the same wall thickness would burst at a fraction of the pressure. Diaphragms handle corrosive fluids because the process medium never touches the movement — only the diaphragm face. Capsules measure draft pressures (millibars) because the dual-diaphragm design doubles the deflection signal, making tiny pressure changes readable.</p>
      </div>
    </>
  ),

  // ── Block 3: Types & Variants (4-card grid) ─────────────────
  types: (
    <>
      <p className="mb-4 text-[var(--color-text-secondary)]">
        Pressure gauges come in several design variants, each optimized for a specific range of pressures, media types, and environmental conditions. Understanding the trade-offs between them is essential for correct selection.
      </p>
      <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
        {/* 1. Bourdon Tube */}
        <div className="rounded-xl p-5" style={{background: "var(--color-bg-raise)", border: "1px solid var(--color-border)"}}>
          <h3 className="text-sm font-bold text-[var(--color-text-primary)] mb-2" style={{fontFamily: "var(--font-display)"}}>1. Bourdon Tube (Most Common)</h3>
          <p className="text-sm text-[var(--color-text-secondary)] mb-3">C-shaped, helical, or spiral tube that straightens when pressurized. The link-sector-pinion mechanism amplifies the tiny straightening motion (~5 mm at full scale) into a 270° pointer sweep. The <strong>elliptical cross-section</strong> is critical — it creates the unbalanced force that drives straightening.</p>
          <div className="text-xs space-y-1 text-[var(--color-text-muted)]">
            <div><strong className="text-[var(--color-text-primary)]">C-Type:</strong> 250° arc, 0–1000 bar — best price-to-performance for most industrial needs</div>
            <div><strong className="text-[var(--color-text-primary)]">Helical/Spiral:</strong> Multi-turn, higher sensitivity, 0–60 bar — more coils = more motion per unit pressure</div>
            <div><strong className="text-[var(--color-text-primary)]">Coiled:</strong> Compact for panel mounting where depth behind the panel is limited</div>
          </div>
        </div>

        {/* 2. Diaphragm */}
        <div className="rounded-xl p-5" style={{background: "var(--color-bg-raise)", border: "1px solid var(--color-border)"}}>
          <h3 className="text-sm font-bold text-[var(--color-text-primary)] mb-2" style={{fontFamily: "var(--font-display)"}}>2. Diaphragm Pressure Gauges</h3>
          <p className="text-sm text-[var(--color-text-secondary)] mb-3">For low pressures (0–25 bar) and corrosive/viscous media. A flexible metal membrane isolates the process media from the mechanical movement. This isolation is the key advantage: the wetted parts (diaphragm face and body) can be made of exotic alloys while the movement remains standard stainless steel.</p>
          <div className="text-xs space-y-1 text-[var(--color-text-muted)]">
            <div><strong className="text-[var(--color-text-primary)]">Flat:</strong> Clean, non-corrosive fluids</div>
            <div><strong className="text-[var(--color-text-primary)]">Corrugated:</strong> Concentric rings increase surface area and deflection range — higher sensitivity</div>
            <div><strong className="text-[var(--color-text-primary)]">Flush:</strong> No dead volume — essential for sanitary applications (food, pharma, biotech)</div>
          </div>
        </div>

        {/* 3. Capsule */}
        <div className="rounded-xl p-5" style={{background: "var(--color-bg-raise)", border: "1px solid var(--color-border)"}}>
          <h3 className="text-sm font-bold text-[var(--color-text-primary)] mb-2" style={{fontFamily: "var(--font-display)"}}>3. Capsule Pressure Gauges</h3>
          <p className="text-sm text-[var(--color-text-secondary)] mb-3">Two diaphragms welded at the periphery, forming a sealed capsule. The dual-diaphragm design <strong>doubles the effective displacement</strong> for the same pressure — each diaphragm contributes its deflection, and their combined motion is the sum. This makes capsule gauges ideal for very low pressures (0–600 mbar, i.e., 0–60 kPa) where a single diaphragm would not produce enough movement.</p>
          <div className="text-xs space-y-1 text-[var(--color-text-muted)]">
            <div>Gas distribution systems (natural gas, biogas)</div>
            <div>HVAC duct static pressure and filter monitoring</div>
            <div>Clean room differential pressure monitoring</div>
          </div>
        </div>

        {/* 4. Differential Pressure */}
        <div className="rounded-xl p-5" style={{background: "var(--color-bg-raise)", border: "1px solid var(--color-border)"}}>
          <h3 className="text-sm font-bold text-[var(--color-text-primary)] mb-2" style={{fontFamily: "var(--font-display)"}}>4. Differential Pressure Gauges</h3>
          <p className="text-sm text-[var(--color-text-secondary)] mb-3">Measure the difference between two pressure ports (high-side and low-side). Internally, two Bourdon tubes or a diaphragm capsule compares the two pressures and the pointer shows only the <strong>difference (ΔP)</strong>. This is invaluable because ΔP reveals conditions that absolute pressure cannot — like a clogged filter (high ΔP across it) or flow rate (ΔP across an orifice plate is proportional to flow squared).</p>
          <div className="text-xs space-y-1 text-[var(--color-text-muted)]">
            <div>Filter condition monitoring (increasing ΔP = clogging)</div>
            <div>Level measurement in pressurised vessels (bubbler systems)</div>
            <div>Flow measurement across orifice plates, venturis, and nozzles</div>
          </div>
        </div>
      </div>

      {/* Materials table */}
      <div className="mt-6">
        <h3 className="text-sm font-bold text-[var(--color-text-primary)] mb-3" style={{fontFamily: "var(--font-display)"}}>Bourdon Tube Materials &amp; Why They Matter</h3>
        <p className="text-sm text-[var(--color-text-secondary)] mb-3">
          The material of the Bourdon tube directly determines the gauge&apos;s compatibility with the process media. A wrong material choice leads to stress corrosion cracking, pitting, or catastrophic tube rupture. Each material has a specific <strong>elastic modulus</strong> and <strong>corrosion resistance profile</strong> that must match the process chemistry and temperature.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-[var(--color-text-secondary)]">
            <thead>
              <tr className="border-b border-[var(--color-border)]">
                <th className="text-left py-2 pr-3 font-semibold text-[var(--color-text-primary)]" style={{fontFamily: "var(--font-mono)"}}>Material</th>
                <th className="text-left py-2 pl-3 font-semibold text-[var(--color-text-primary)]" style={{fontFamily: "var(--font-mono)"}}>Use Case</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[var(--color-border)]/50"><td className="py-2 pr-3 font-medium text-[var(--color-text-primary)]">316 SS</td><td className="py-2 pl-3">General process, corrosive media — the workhorse of industrial gauges, resistant to most acids and chlorides at moderate temperatures</td></tr>
              <tr className="border-b border-[var(--color-border)]/50"><td className="py-2 pr-3 font-medium text-[var(--color-text-primary)]">Monel 400</td><td className="py-2 pl-3">Seawater, marine, HF acid — outstanding resistance to chloride stress corrosion cracking, which destroys 316 SS in marine environments</td></tr>
              <tr className="border-b border-[var(--color-border)]/50"><td className="py-2 pr-3 font-medium text-[var(--color-text-primary)]">Inconel 625</td><td className="py-2 pl-3">High temp, sour gas (H₂S) — maintains strength at elevated temperatures and resists sulfide stress cracking per NACE MR0175</td></tr>
              <tr><td className="py-2 pr-3 font-medium text-[var(--color-text-primary)]">Bronze/Brass</td><td className="py-2 pl-3">Water, air, non-corrosive (economical) — adequate for clean, low-risk services where cost reduction is the priority</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Specialized Types Integration */}
      <div className="mt-6">
        <h3 className="text-sm font-bold text-[var(--color-text-primary)] mb-3" style={{fontFamily: "var(--font-display)"}}>Specialized Gauge Variants</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="rounded-xl p-4" style={{background: "var(--color-bg-raise)", border: "1px solid var(--color-border)"}}>
            <h4 className="text-xs font-bold text-[var(--color-text-primary)] mb-2" style={{fontFamily: "var(--font-mono)"}}>Test Gauges (Calibration Grade)</h4>
            <ul className="text-xs space-y-1 text-[var(--color-text-secondary)]">
              <li>Class 0.1, 0.25, 0.6 — highest accuracy available in analogue gauges</li>
              <li>Mirror band on dial eliminates parallax error (the pointer&apos;s reflection aligns with the pointer when your eye is perpendicular to the dial)</li>
              <li>Knife-edge pointer for precise reading against scale markings</li>
              <li>Used with deadweight testers as field reference standards</li>
            </ul>
          </div>
          <div className="rounded-xl p-4" style={{background: "var(--color-bg-raise)", border: "1px solid var(--color-border)"}}>
            <h4 className="text-xs font-bold text-[var(--color-text-primary)] mb-2" style={{fontFamily: "var(--font-mono)"}}>Sanitary Gauges</h4>
            <ul className="text-xs space-y-1 text-[var(--color-text-secondary)]">
              <li>316L electropolished to Ra &lt; 0.8 μm — prevents bacterial adhesion</li>
              <li>Tri-clamp connection per ISO 2852 / ASME BPE — no threads to trap contaminants</li>
              <li>Fill fluid: FDA-approved (neobee, glycerin) — safe if seal ruptures</li>
              <li>No crevices, CIP/SIP compatible — clean-in-place and sterilize-in-place</li>
            </ul>
          </div>
          <div className="rounded-xl p-4" style={{background: "var(--color-bg-raise)", border: "1px solid var(--color-border)"}}>
            <h4 className="text-xs font-bold text-[var(--color-text-primary)] mb-2" style={{fontFamily: "var(--font-mono)"}}>Panel Mount Gauges</h4>
            <ul className="text-xs space-y-1 text-[var(--color-text-secondary)]">
              <li>Back connection with front flange or U-clamp for flush panel installation</li>
              <li>Smaller dial sizes (40mm, 50mm, 63mm) for dense control panels</li>
              <li>Often liquid-filled to dampen vibration from nearby rotating equipment</li>
            </ul>
          </div>
          <div className="rounded-xl p-4" style={{background: "var(--color-bg-raise)", border: "1px solid var(--color-border)"}}>
            <h4 className="text-xs font-bold text-[var(--color-text-primary)] mb-2" style={{fontFamily: "var(--font-mono)"}}>Digital Pressure Gauges</h4>
            <ul className="text-xs space-y-1 text-[var(--color-text-secondary)]">
              <li>Battery powered, 0.1–0.5% accuracy — piezo-resistive or capacitive sensing</li>
              <li>Data logging, min/max recall, backlight for dark locations</li>
              <li>Units switching (bar, psi, kPa, kg/cm², mmHg) — one gauge serves multiple standards</li>
              <li>4–20 mA output option integrates with DCS/PLC for remote monitoring</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  ),

  // ── Block 4: Key Specifications (8-row table) ────────────────
  keyspecs: (
    <>
      <p className="mb-4 text-[var(--color-text-secondary)]">
        These eight parameters define every pressure gauge specification. When writing a datasheet or purchase requisition, each must be explicitly stated — ambiguous specs lead to wrong deliveries and field callbacks.
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-[var(--color-text-secondary)]">
          <thead>
            <tr className="border-b border-[var(--color-border)]">
              <th className="text-left py-2 pr-3 font-semibold text-[var(--color-text-primary)]" style={{fontFamily: "var(--font-mono)"}}>Parameter</th>
              <th className="text-left py-2 pl-3 font-semibold text-[var(--color-text-primary)]" style={{fontFamily: "var(--font-mono)"}}>Recommendation</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-[var(--color-border)]/50"><td className="py-2 pr-3 font-medium text-[var(--color-text-primary)]">Dial Size</td><td className="py-2 pl-3" style={{fontFamily: "var(--font-mono)"}}>100mm (4") field-mounted for legibility at arm&apos;s length; 160mm (6") for control room panels where operators read at a distance</td></tr>
            <tr className="border-b border-[var(--color-border)]/50"><td className="py-2 pr-3 font-medium text-[var(--color-text-primary)]">Case Material</td><td className="py-2 pl-3">304/316 SS for corrosive atmospheres (offshore, chemical plants); phenolic resin for indoor panel mounting (lighter, cheaper)</td></tr>
            <tr className="border-b border-[var(--color-border)]/50"><td className="py-2 pr-3 font-medium text-[var(--color-text-primary)]">Window</td><td className="py-2 pl-3">Laminated safety glass (standard) for scratch resistance; acrylic for high-vibration areas where glass may fracture</td></tr>
            <tr className="border-b border-[var(--color-border)]/50"><td className="py-2 pr-3 font-medium text-[var(--color-text-primary)]">Fill Fluid</td><td className="py-2 pl-3" style={{fontFamily: "var(--font-mono)"}}>Glycerin 99.7% (–20 to +60°C) — most common, water-soluble, safe; Silicone oil (–40 to +100°C) — wider temperature range, preferred for food/pharma</td></tr>
            <tr className="border-b border-[var(--color-border)]/50"><td className="py-2 pr-3 font-medium text-[var(--color-text-primary)]">Accuracy</td><td className="py-2 pl-3" style={{fontFamily: "var(--font-mono)"}}>Class 1.0 (field indication), Class 0.6 (control room / critical processes), Class 0.25 (laboratory / calibration standards)</td></tr>
            <tr className="border-b border-[var(--color-border)]/50"><td className="py-2 pr-3 font-medium text-[var(--color-text-primary)]">Range Selection</td><td className="py-2 pl-3">Normal operating pressure at <strong>50–75% of full scale</strong> — this balances readability with safety margin for surges</td></tr>
            <tr className="border-b border-[var(--color-border)]/50"><td className="py-2 pr-3 font-medium text-[var(--color-text-primary)]">Process Connection</td><td className="py-2 pl-3" style={{fontFamily: "var(--font-mono)"}}>1/2" NPT male (process side), 1/4" NPT (instrument side); flanged per ASME B16.5 / EN 1092-1 for high-pressure or hazardous services</td></tr>
            <tr><td className="py-2 pr-3 font-medium text-[var(--color-text-primary)]">Tagging</td><td className="py-2 pl-3">Stainless steel tag, laser etched with instrument tag number (per ISA 5.1) — critical for maintenance traceability</td></tr>
          </tbody>
        </table>
      </div>
    </>
  ),

  // ── Block 5: Charts (Performance & Compliance) ───────────────
  performance: (
    <>
      <h3 className="text-sm font-bold text-[var(--color-text-primary)] mb-3" style={{fontFamily: "var(--font-display)"}}>Accuracy Classes per EN 837 / ASME B40.100</h3>
      <p className="mb-3">
        Accuracy class defines the maximum permissible error as a percentage of full-scale span. A Class 1.0 gauge with a 0–100 bar scale can be wrong by up to ±1.0 bar at any point on the dial. The class number directly determines the gauge&apos;s cost, complexity, and application suitability.
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-[var(--color-text-secondary)]">
          <thead>
            <tr className="border-b border-[var(--color-border)]">
              <th className="text-left py-2 pr-3 font-semibold text-[var(--color-text-primary)]" style={{fontFamily: "var(--font-mono)"}}>Class</th>
              <th className="text-left py-2 px-3 font-semibold text-[var(--color-text-primary)]" style={{fontFamily: "var(--font-mono)"}}>Accuracy (±% of Span)</th>
              <th className="text-left py-2 pl-3 font-semibold text-[var(--color-text-primary)]" style={{fontFamily: "var(--font-mono)"}}>Typical Use</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-[var(--color-border)]/50"><td className="py-2 pr-3 font-medium text-[var(--color-text-primary)]">Class 0.1</td><td className="py-2 px-3" style={{fontFamily: "var(--font-mono)"}}>0.1%</td><td className="py-2 pl-3">Laboratory, calibration standards — requires temperature-controlled environment and expensive quartz-Bourdon or force-balance sensors</td></tr>
            <tr className="border-b border-[var(--color-border)]/50"><td className="py-2 pr-3 font-medium text-[var(--color-text-primary)]">Class 0.25</td><td className="py-2 px-3" style={{fontFamily: "var(--font-mono)"}}>0.25%</td><td className="py-2 pl-3">High-precision process — test gauges, custody transfer, critical batch reactions</td></tr>
            <tr className="border-b border-[var(--color-border)]/50"><td className="py-2 pr-3 font-medium text-[var(--color-text-primary)]">Class 0.6</td><td className="py-2 px-3" style={{fontFamily: "var(--font-mono)"}}>0.6%</td><td className="py-2 pl-3">Precision industrial — safety systems, compressor discharge monitoring</td></tr>
            <tr className="border-b border-[var(--color-border)]/50"><td className="py-2 pr-3 font-medium text-[var(--color-text-primary)]">Class 1.0</td><td className="py-2 px-3" style={{fontFamily: "var(--font-mono)"}}>1.0%</td><td className="py-2 pl-3">General industrial (most common) — the default for standard process measurement</td></tr>
            <tr className="border-b border-[var(--color-border)]/50"><td className="py-2 pr-3 font-medium text-[var(--color-text-primary)]">Class 1.6</td><td className="py-2 px-3" style={{fontFamily: "var(--font-mono)"}}>1.6%</td><td className="py-2 pl-3">General purpose, panel mounting — adequate for indication-only applications</td></tr>
            <tr><td className="py-2 pr-3 font-medium text-[var(--color-text-primary)]">Class 2.5</td><td className="py-2 px-3" style={{fontFamily: "var(--font-mono)"}}>2.5%</td><td className="py-2 pl-3">Commercial, non-critical — heating systems, compressed air, water pressure</td></tr>
          </tbody>
        </table>
      </div>
      <AccuracyBarChart />

      <h3 className="text-sm font-bold text-[var(--color-text-primary)] mt-6 mb-3" style={{fontFamily: "var(--font-display)"}}>NAMUR NE43 — Signal Diagnostics for Pressure Transmitters</h3>
      <p className="mb-3">
        While mechanical gauges have no electrical output, modern plants often use pressure <strong>transmitters</strong> (with local gauge displays) that communicate via 4–20 mA loops. NAMUR NE43 standardizes the signal levels so control systems can distinguish between a valid measurement, a sensor fault, and an overrange condition — without adding extra wires.
      </p>
      <p className="mb-3 text-sm text-[var(--color-text-secondary)]">
        <strong>Why these specific values?</strong> The 4–20 mA range uses 4 mA as the live zero (so a wire break drops to 0 mA, instantly detectable). NAMUR extends this by reserving the <strong>low-saturation band (3.6–3.8 mA)</strong> and <strong>high-saturation band (20.5–21.0 mA)</strong> as warning zones before entering fault territory. This gives the control system a graded response: saturate before you alarm.
      </p>
      <div className="overflow-x-auto mb-4">
        <table className="w-full text-sm text-[var(--color-text-secondary)]">
          <thead>
            <tr className="border-b border-[var(--color-border)]">
              <th className="text-left py-2 pr-3 font-semibold text-[var(--color-text-primary)]" style={{fontFamily: "var(--font-mono)"}}>Signal Range</th>
              <th className="text-left py-2 pl-3 font-semibold text-[var(--color-text-primary)]" style={{fontFamily: "var(--font-mono)"}}>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-[var(--color-border)]/50"><td className="py-2 pr-3" style={{fontFamily: "var(--font-mono)"}}>3.8–20.5 mA</td><td className="py-2 pl-3">Normal operation (valid measurement range)</td></tr>
            <tr className="border-b border-[var(--color-border)]/50"><td className="py-2 pr-3" style={{fontFamily: "var(--font-mono)"}}>&lt; 3.6 mA</td><td className="py-2 pl-3"><strong className="text-red-500">Low alarm (sensor fault, cable break, power loss)</strong></td></tr>
            <tr className="border-b border-[var(--color-border)]/50"><td className="py-2 pr-3" style={{fontFamily: "var(--font-mono)"}}>&gt; 21.0 mA</td><td className="py-2 pl-3"><strong className="text-red-500">High alarm (sensor fault, overrange, short circuit)</strong></td></tr>
            <tr className="border-b border-[var(--color-border)]/50"><td className="py-2 pr-3" style={{fontFamily: "var(--font-mono)"}}>3.6–3.8 mA</td><td className="py-2 pl-3">Low saturation (process below transmitter range — near fault threshold)</td></tr>
            <tr><td className="py-2 pr-3" style={{fontFamily: "var(--font-mono)"}}>20.5–21.0 mA</td><td className="py-2 pl-3">High saturation (process above transmitter range — near fault threshold)</td></tr>
          </tbody>
        </table>
      </div>
      <NAMURBandChart />

      <h3 className="text-sm font-bold text-[var(--color-text-primary)] mt-6 mb-3" style={{fontFamily: "var(--font-display)"}}>Pressure Range Selection Visual Guide</h3>
      <p className="mb-3">
        The chart below shows common gauge ranges mapped against typical operating pressures. The green band at 50–75% of full scale is where you want your normal operating point — it provides enough pointer deflection for easy reading while leaving headroom for pressure surges without pegging the pointer.
      </p>
      <PressureRangeChart />
      <div className="mt-4 p-4 rounded-lg border-l-4 border-amber-500 bg-amber-500/5">
        <p className="text-sm text-[var(--color-text-secondary)]"><strong className="text-amber-400">Field Note:</strong> For custody transfer or safety systems, specify Class 0.6 or better. For general indication, Class 1.6 is adequate. Never oversize a gauge range — a gauge with 0–400 bar range measuring 10 bar normal operates at only 2.5% of FS, where accuracy is poorest and the pointer barely moves.</p>
      </div>
    </>
  ),

  // ── Block 6: Industry Applications (6 industry cards) ────────
  applications: (
    <>
      <p className="mb-4 text-[var(--color-text-secondary)]">
        Pressure gauges are deployed across virtually every industrial sector. Each application imposes different demands on material compatibility, accuracy, and environmental protection. Here are six key industries and what they require from their pressure measurement:
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        {/* 1. Oil & Gas */}
        <div className="rounded-xl p-4" style={{background: "var(--color-bg-raise)", border: "1px solid var(--color-border)"}}>
          <div className="text-lg mb-1">🛢️</div>
          <h3 className="text-sm font-bold text-[var(--color-text-primary)] mb-2" style={{fontFamily: "var(--font-display)"}}>Oil &amp; Gas</h3>
          <p className="text-xs text-[var(--color-text-secondary)]">Upstream wellhead, midstream pipelines, downstream refineries. Demands Inconel or Monel wetted parts for sour gas (H₂S), NACE MR0175 compliance, and liquid-fill case dampening for pump/compressor vibration. Common ranges: 0–400 bar wellhead, 0–100 bar pipeline.</p>
        </div>
        {/* 2. Chemical / Petrochemical */}
        <div className="rounded-xl p-4" style={{background: "var(--color-bg-raise)", border: "1px solid var(--color-border)"}}>
          <div className="text-lg mb-1">🧪</div>
          <h3 className="text-sm font-bold text-[var(--color-text-primary)] mb-2" style={{fontFamily: "var(--font-display)"}}>Chemical &amp; Petrochemical</h3>
          <p className="text-xs text-[var(--color-text-secondary)]">Corrosive acids (HCl, H₂SO₄), solvents, and reactive intermediates. Requires diaphragm seals or chemical seals with PTFE/Hastelloy C wetted parts. Flush diaphragm designs prevent dead-leg accumulation. Accuracy Class 0.6–1.0 for reactor pressure monitoring.</p>
        </div>
        {/* 3. Power Generation */}
        <div className="rounded-xl p-4" style={{background: "var(--color-bg-raise)", border: "1px solid var(--color-border)"}}>
          <div className="text-lg mb-1">⚡</div>
          <h3 className="text-sm font-bold text-[var(--color-text-primary)] mb-2" style={{fontFamily: "var(--font-display)"}}>Power Generation</h3>
          <p className="text-xs text-[var(--color-text-secondary)]">Steam turbine inlet pressure (high-temp, up to 600°C), boiler drum level (ΔP), condenser vacuum. Needs cooling elements (siphon/pigtail) to protect Bourdon tube from steam temperature. Condensate pots prevent steam from reaching the gauge.</p>
        </div>
        {/* 4. Water & Wastewater */}
        <div className="rounded-xl p-4" style={{background: "var(--color-bg-raise)", border: "1px solid var(--color-border)"}}>
          <div className="text-lg mb-1">💧</div>
          <h3 className="text-sm font-bold text-[var(--color-text-primary)] mb-2" style={{fontFamily: "var(--font-display)"}}>Water &amp; Wastewater</h3>
          <p className="text-xs text-[var(--color-text-secondary)]">Pump discharge pressure, filter differential pressure, distribution network monitoring. Brass/Bronze Bourdon tubes are often sufficient (non-corrosive media). Requires outdoor-rated (IP65) cases for weather exposure. Class 2.5 is usually adequate.</p>
        </div>
        {/* 5. Food & Pharma */}
        <div className="rounded-xl p-4" style={{background: "var(--color-bg-raise)", border: "1px solid var(--color-border)"}}>
          <div className="text-lg mb-1">🥼</div>
          <h3 className="text-sm font-bold text-[var(--color-text-primary)] mb-2" style={{fontFamily: "var(--font-display)"}}>Food &amp; Pharmaceutical</h3>
          <p className="text-xs text-[var(--color-text-secondary)]">Sanitary processes — sterile, CIP/SIP-cleaned, no crevices. 316L electropolished (Ra &lt; 0.8 μm), Tri-clamp connections, FDA-approved fill fluids (neobee, glycerin). Flush diaphragm designs prevent bacterial growth. Class 1.0 for bioreactor monitoring.</p>
        </div>
        {/* 6. HVAC & Building Services */}
        <div className="rounded-xl p-4" style={{background: "var(--color-bg-raise)", border: "1px solid var(--color-border)"}}>
          <div className="text-lg mb-1">🏢</div>
          <h3 className="text-sm font-bold text-[var(--color-text-primary)] mb-2" style={{fontFamily: "var(--font-display)"}}>HVAC &amp; Building Services</h3>
          <p className="text-xs text-[var(--color-text-secondary)]">Chilled water, boiler pressure, duct static pressure (capsule gauges, 0–600 mbar), filter ΔP. Capsule elements excel here because they sense millibar-level air pressure changes. Low-cost, panel-mount, Class 2.5 gauges dominate this sector.</p>
        </div>
      </div>
    </>
  ),

  // ── Block 7: Advantages vs Limitations (2 columns) ───────────
  advantages: (
    <>
      <p className="mb-4 text-[var(--color-text-secondary)]">
        Every pressure-sensing technology has strengths and weaknesses. Understanding these trade-offs is what separates a skilled instrumentation engineer from a parts-replacer. Here is the honest assessment of mechanical pressure gauges vs. their electronic alternatives.
      </p>
      <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
        {/* Advantages */}
        <div className="rounded-xl p-5" style={{background: "var(--color-bg-raise)", border: "1px solid var(--color-border)"}}>
          <h3 className="text-sm font-bold text-green-400 mb-3 flex items-center gap-2" style={{fontFamily: "var(--font-display)"}}>
            <span>✅</span> Advantages
          </h3>
          <ul className="text-sm space-y-2 text-[var(--color-text-secondary)]">
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-green-500 flex-shrink-0" /><strong>No power required:</strong> The mechanical movement is self-powered by the process pressure — no batteries, no 24 VDC loops, no intrinsic safety barriers needed. This makes them the most reliable instrument in a blackout.</li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-green-500 flex-shrink-0" /><strong>Instant visual read:</strong> Pointer position communicates pressure at a glance — no menus to navigate, no display refresh lag. Operators can scan a panel of 50 gauges in seconds.</li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-green-500 flex-shrink-0" /><strong>Low cost:</strong> A basic Class 2.5 gauge costs $15–50. Even precision Class 0.6 test gauges are under $500 — a fraction of an equivalent electronic transmitter.</li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-green-500 flex-shrink-0" /><strong>Simple troubleshooting:</strong> A stuck pointer, fogged window, or zero offset are immediately visible. No diagnostic tool or HART communicator needed — just your eyes.</li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-green-500 flex-shrink-0" /><strong>No EMI/RFI susceptibility:</strong> Purely mechanical — electromagnetic interference from VFDs, radios, or welding cannot affect the reading.</li>
          </ul>
        </div>
        {/* Limitations */}
        <div className="rounded-xl p-5" style={{background: "var(--color-bg-raise)", border: "1px solid var(--color-border)"}}>
          <h3 className="text-sm font-bold text-red-400 mb-3 flex items-center gap-2" style={{fontFamily: "var(--font-display)"}}>
            <span>⚠️</span> Limitations
          </h3>
          <ul className="text-sm space-y-2 text-[var(--color-text-secondary)]">
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-red-500 flex-shrink-0" /><strong>No remote signal:</strong> The reading lives at the gauge location only. No integration with DCS, PLC, SCADA, or historian without adding a separate transmitter.</li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-red-500 flex-shrink-0" /><strong>No data logging:</strong> No min/max recording, no trend history, no overpressure timestamp. The gauge shows only the current pressure — what happened at 3 AM is invisible unless someone was watching.</li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-red-500 flex-shrink-0" /><strong>Permanent damage from overrange:</strong> Exceeding the Bourdon tube&apos;s elastic limit causes plastic deformation (yield). The tube won&apos;t return to zero and must be replaced — there is no electronic reset.</li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-red-500 flex-shrink-0" /><strong>Vibration sensitivity:</strong> Pointer oscillation under vibration reduces readability and accelerates wear on the sector/pinion gears. Requires liquid fill or snubbers to mitigate.</li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-red-500 flex-shrink-0" /><strong>Temperature drift:</strong> Changes in ambient temperature affect the elastic modulus of the Bourdon tube material, introducing measurement error. A Class 1.0 gauge may drift to 1.5–2.0% error at the temperature extremes of its rating.</li>
          </ul>
        </div>
      </div>
    </>
  ),

  // ── Block 8: Installation & Calibration (organized content) ──
  installcal: (
    <>
      <p className="mb-4 text-[var(--color-text-secondary)]">
        Correct installation and regular calibration are what separate a gauge that &quot;works on paper&quot; from one that works reliably for years. These six areas cover the most common field problems and their solutions.
      </p>

      <div className="space-y-4">
        {/* 1. Process Connection */}
        <div className="rounded-xl p-4 sm:p-5" style={{background: "var(--color-bg-raise)", border: "1px solid var(--color-border)"}}>
          <h3 className="text-xs font-bold text-amber-400 uppercase tracking-[.08em] mb-2" style={{fontFamily: "var(--font-mono)"}}>1. Process Connection &amp; Sizing</h3>
          <p className="text-sm text-[var(--color-text-secondary)] mb-2">The connection must match the process piping: <strong>1/4" NPT</strong> (standard instrument connection), <strong>1/2" NPT</strong> (high pressure / viscous fluids to avoid plugging), <strong>flanged</strong> per ASME B16.5 / EN 1092-1 (for high-pressure or hazardous services where thread creep is a concern), or <strong>Tri-clamp</strong> per ISO 2852 / ASME BPE (sanitary). <em>Why it matters:</em> Undersized connections create a restriction that dampens dynamic pressure changes and delays response time.</p>
        </div>

        {/* 2. Mounting Position */}
        <div className="rounded-xl p-4 sm:p-5" style={{background: "var(--color-bg-raise)", border: "1px solid var(--color-border)"}}>
          <h3 className="text-xs font-bold text-amber-400 uppercase tracking-[.08em] mb-2" style={{fontFamily: "var(--font-mono)"}}>2. Mounting Position</h3>
          <p className="text-sm text-[var(--color-text-secondary)] mb-2"><strong>Vertical (standard):</strong> Dial face upright — this is the position at which most gauges are calibrated. <strong>Horizontal</strong> or inverted mounting adds a gravity bias error from the link weight (typically 1–2% of span). Specify bottom connection for vertical pipe mounting, back connection for panel installation. <em>Why it matters:</em> Every gauge is calibrated with the pointer axis vertical. Mounting at an angle changes the friction distribution in the hairspring and pivot bearings, introducing zero shift.</p>
        </div>

        {/* 3. Impulse Piping */}
        <div className="rounded-xl p-4 sm:p-5" style={{background: "var(--color-bg-raise)", border: "1px solid var(--color-border)"}}>
          <h3 className="text-xs font-bold text-amber-400 uppercase tracking-[.08em] mb-2" style={{fontFamily: "var(--font-mono)"}}>3. Impulse Piping &amp; Slope</h3>
          <p className="text-sm text-[var(--color-text-secondary)] mb-2">The impulse line (the pipe connecting the gauge to the process) must be routed deliberately: <strong>slope ≥ 1:10 toward the process</strong> for gas service (condensate drains back), <strong>slope away from the process</strong> for liquid service (gas bubbles rise back). Keep impulse lines <strong>short and equal length</strong> for differential pressure applications. Use <strong>condensate pots</strong> for steam service. <em>Why it matters:</em> A trapped liquid column in a gas-service impulse line creates a hydrostatic head error of roughly 0.1 bar per metre of liquid. Equal-length lines in DP applications cancel this error; unequal lengths introduce a bias that shifts with ambient temperature.</p>
        </div>

        {/* 4. Accessories */}
        <div className="rounded-xl p-4 sm:p-5" style={{background: "var(--color-bg-raise)", border: "1px solid var(--color-border)"}}>
          <h3 className="text-xs font-bold text-amber-400 uppercase tracking-[.08em] mb-2" style={{fontFamily: "var(--font-mono)"}}>4. Essential Accessories</h3>
          <div className="overflow-x-auto mb-2">
            <table className="w-full text-sm text-[var(--color-text-secondary)]">
              <thead>
                <tr className="border-b border-[var(--color-border)]">
                  <th className="text-left py-2 pr-3 font-semibold text-[var(--color-text-primary)]" style={{fontFamily: "var(--font-mono)"}}>Accessory</th>
                  <th className="text-left py-2 pl-3 font-semibold text-[var(--color-text-primary)]" style={{fontFamily: "var(--font-mono)"}}>Purpose</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[var(--color-border)]/50"><td className="py-2 pr-3 font-medium text-[var(--color-text-primary)]">Snubber/Restrictor</td><td className="py-2 pl-3">Dampen pulsation from reciprocating pumps, compressors — a porous sintered disc or orifice restricts flow to the gauge, smoothing pointer movement</td></tr>
                <tr className="border-b border-[var(--color-border)]/50"><td className="py-2 pr-3 font-medium text-[var(--color-text-primary)]">Siphon (Pigtail / Crosby coil)</td><td className="py-2 pl-3">Steam service — creates a condensate trap that prevents live steam from reaching the Bourdon tube (steam temperature would soften and distort the tube wall)</td></tr>
                <tr className="border-b border-[var(--color-border)]/50"><td className="py-2 pr-3 font-medium text-[var(--color-text-primary)]">Diaphragm Seal</td><td className="py-2 pl-3">Corrosive, viscous, sanitary, high-temp media — isolates gauge internals; the seal transmits pressure through a fill fluid (silicone, halocarbon) to the gauge element</td></tr>
                <tr className="border-b border-[var(--color-border)]/50"><td className="py-2 pr-3 font-medium text-[var(--color-text-primary)]">Cooling Element</td><td className="py-2 pl-3">High process temperature (&gt;100°C) — finned pipe or extended capillary radiates heat before it reaches the gauge; can reduce temperature by 50–100°C over a metre of capillary</td></tr>
                <tr><td className="py-2 pr-3 font-medium text-[var(--color-text-primary)]">Overrange Protector</td><td className="py-2 pl-3">Prevent damage from pressure spikes — a spring-loaded valve or blowout disc isolates the gauge when pressure exceeds a threshold; resets when pressure normalizes</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 5. Calibration Procedure */}
        <div className="rounded-xl p-4 sm:p-5" style={{background: "var(--color-bg-raise)", border: "1px solid var(--color-border)"}}>
          <h3 className="text-xs font-bold text-amber-400 uppercase tracking-[.08em] mb-2" style={{fontFamily: "var(--font-mono)"}}>5. Calibration Procedure (per DKD/DAkkS / ASME B40.100)</h3>
          <ol className="text-sm space-y-2 text-[var(--color-text-secondary)] list-decimal list-inside mb-3">
            <li><strong>Visual Inspection:</strong> Check case, window, pointer, dial for physical damage. A cracked window or bent pointer invalidates calibration before you start.</li>
            <li><strong>Zero Check:</strong> With no pressure applied, the pointer must rest exactly on the zero stop. If not, check if the pointer is loose on the pinion or if the Bourdon tube has taken a set (permanent deformation).</li>
            <li><strong>Increasing Pressure (Up-Scale):</strong> Apply 0%, 25%, 50%, 75%, 100% of full scale using a deadweight tester or pressure calibrator. Hold each point for 10 seconds before reading.</li>
            <li><strong>Decreasing Pressure (Down-Scale):</strong> Repeat the same points in descending order. The difference between up-scale and down-scale readings at the same point is <strong>hysteresis</strong> — caused by friction in the movement and elastic after-effect in the tube material.</li>
            <li><strong>Record:</strong> Document hysteresis, repeatability (three cycles), and linearity deviation. Compare against the gauge&apos;s accuracy class limits.</li>
            <li><strong>Adjust:</strong> If the gauge has a zero/span adjustment screw (typically behind a seal on the dial face), adjust zero first, then span, then recheck zero (they interact). Test gauges with a knife-edge pointer and mirror scale allow more precise reading.</li>
          </ol>
          <p className="text-sm font-semibold text-[var(--color-text-primary)] mb-2" style={{fontFamily: "var(--font-mono)"}}>Acceptance Criteria (Class 1.0)</p>
          <ul className="text-sm space-y-1 text-[var(--color-text-secondary)] mb-2">
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-green-500 flex-shrink-0" /><strong>Linearity:</strong> ≤ 1.0% FS</li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-green-500 flex-shrink-0" /><strong>Hysteresis:</strong> ≤ 1.0% FS</li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-green-500 flex-shrink-0" /><strong>Repeatability:</strong> ≤ 0.5% FS</li>
          </ul>
        </div>

        {/* 6. Maintenance Schedule */}
        <div className="rounded-xl p-4 sm:p-5" style={{background: "var(--color-bg-raise)", border: "1px solid var(--color-border)"}}>
          <h3 className="text-xs font-bold text-amber-400 uppercase tracking-[.08em] mb-2" style={{fontFamily: "var(--font-mono)"}}>6. Field Maintenance Schedule &amp; Troubleshooting</h3>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm text-[var(--color-text-secondary)]">
              <thead>
                <tr className="border-b border-[var(--color-border)]">
                  <th className="text-left py-2 pr-3 font-semibold text-[var(--color-text-primary)]" style={{fontFamily: "var(--font-mono)"}}>Frequency</th>
                  <th className="text-left py-2 pl-3 font-semibold text-[var(--color-text-primary)]" style={{fontFamily: "var(--font-mono)"}}>Task</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[var(--color-border)]/50"><td className="py-2 pr-3" style={{fontFamily: "var(--font-mono)"}}>Monthly</td><td className="py-2 pl-3">Visual check: pointer at zero, no leaks, window clear, no condensation inside</td></tr>
                <tr className="border-b border-[var(--color-border)]/50"><td className="py-2 pr-3" style={{fontFamily: "var(--font-mono)"}}>Quarterly</td><td className="py-2 pl-3">Tap test: lightly tap case — pointer should not stick or jump; if it does, bearing friction or gear tooth damage is developing</td></tr>
                <tr className="border-b border-[var(--color-border)]/50"><td className="py-2 pr-3" style={{fontFamily: "var(--font-mono)"}}>Annually</td><td className="py-2 pl-3">Full calibration against deadweight tester or pressure calibrator; document as-found vs. as-left readings</td></tr>
                <tr><td className="py-2 pr-3" style={{fontFamily: "var(--font-mono)"}}>As Needed</td><td className="py-2 pl-3">Replace if: cracked window, visible leak, pointer stuck or doesn&apos;t return to zero, error &gt;2× accuracy class in calibration check</td></tr>
              </tbody>
            </table>
          </div>
          <h4 className="text-xs font-bold text-[var(--color-text-primary)] mb-2" style={{fontFamily: "var(--font-mono)"}}>Common Failure Modes</h4>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-[var(--color-text-secondary)]">
              <thead>
                <tr className="border-b border-[var(--color-border)]">
                  <th className="text-left py-2 pr-3 font-semibold text-[var(--color-text-primary)]" style={{fontFamily: "var(--font-mono)"}}>Symptom</th>
                  <th className="text-left py-2 px-3 font-semibold text-[var(--color-text-primary)]" style={{fontFamily: "var(--font-mono)"}}>Probable Cause</th>
                  <th className="text-left py-2 pl-3 font-semibold text-[var(--color-text-primary)]" style={{fontFamily: "var(--font-mono)"}}>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[var(--color-border)]/50"><td className="py-2 pr-3 font-medium text-[var(--color-text-primary)]">Pointer stuck at zero</td><td className="py-2 px-3">Broken Bourdon tube (fatigue crack at the fixed end), disconnected linkage from overrange snap</td><td className="py-2 pl-3">Replace gauge — repair is not economical for industrial gauges</td></tr>
                <tr className="border-b border-[var(--color-border)]/50"><td className="py-2 pr-3 font-medium text-[var(--color-text-primary)]">Pointer oscillates</td><td className="py-2 px-3">Pressure pulsation from pump/compressor, no liquid fill, worn gear teeth</td><td className="py-2 pl-3">Add snubber at inlet or retrofill case with glycerin/silicone</td></tr>
                <tr className="border-b border-[var(--color-border)]/50"><td className="py-2 pr-3 font-medium text-[var(--color-text-primary)]">Reading high/low consistently</td><td className="py-2 px-3">Calibration drift (Bourdon tube material relaxation), temperature effect on modulus</td><td className="py-2 pl-3">Recalibrate; check if ambient temp is within gauge spec</td></tr>
                <tr className="border-b border-[var(--color-border)]/50"><td className="py-2 pr-3 font-medium text-[var(--color-text-primary)]">Leak at connection</td><td className="py-2 px-3">Loose fitting, damaged thread (cross-threaded), degraded PTFE seal tape</td><td className="py-2 pl-3">Re-tighten with correct torque, replace seal, inspect thread condition</td></tr>
                <tr className="border-b border-[var(--color-border)]/50"><td className="py-2 pr-3 font-medium text-[var(--color-text-primary)]">Cracked window</td><td className="py-2 px-3">Mechanical impact, overpressure bulge, thermal stress from steam near cold glass</td><td className="py-2 pl-3">Replace window if available; otherwise replace gauge</td></tr>
                <tr className="border-b border-[var(--color-border)]/50"><td className="py-2 pr-3 font-medium text-[var(--color-text-primary)]">Fogged window (internal condensation)</td><td className="py-2 px-3">Case seal failure, moisture ingress, temperature cycling below dew point</td><td className="py-2 pl-3">Replace gauge — hermetic seal is lost; drying will recur</td></tr>
                <tr><td className="py-2 pr-3 font-medium text-[var(--color-text-primary)]">Pointer doesn&apos;t return to zero</td><td className="py-2 px-3">Overpressure event caused Bourdon tube plastic deformation (yield); hairspring damaged</td><td className="py-2 pl-3">Replace gauge — the sensing element is permanently damaged</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  ),

  // ── Block 9: Conclusion (with field note) ────────────────────
  conclusion: (
    <>
      <p className="mb-4">
        Pressure gauges are the most fundamental and reliable pressure indication devices in process plants. Despite being 175 years old (the Bourdon tube design dates to 1849), they remain indispensable because of their simplicity, reliability, and zero power requirement.
      </p>
      <p className="mb-4">
        Proper selection requires integrating five dimensions of knowledge — each building on the last:
      </p>
      <ol className="text-sm space-y-2 text-[var(--color-text-secondary)] list-decimal list-inside mb-4">
        <li><strong>Process conditions</strong> (pressure range, temperature, media, viscosity) — determines the sensing element type and wetted materials</li>
        <li><strong>Accuracy requirements</strong> (safety, control, indication only) — determines the accuracy class and whether a test gauge, industrial gauge, or commercial gauge is appropriate</li>
        <li><strong>Environment</strong> (vibration, corrosion, ambient temperature, hazardous area) — determines case material, fill fluid, ingress protection (IP rating), and need for accessories</li>
        <li><strong>Installation constraints</strong> (mounting position, impulse piping run, connection type) — determines the connection configuration, pipe slope, and need for siphons or cooling elements</li>
        <li><strong>Maintenance philosophy</strong> (calibration interval, spare parts strategy, criticality) — determines whether to specify a field-repairable gauge or a disposable unit</li>
      </ol>
      <div className="p-4 rounded-lg border-l-4 border-amber-500 bg-amber-500/5">
        <p className="text-sm text-[var(--color-text-secondary)]">
          <strong className="text-amber-400">Final Field Note:</strong> A gauge that reads correctly but cannot be read (fogged window, wrong mounting position, no lighting) is useless in practice. Install for <strong>readability first</strong>, then accuracy. Use liquid fill for any location with noticeable vibration — it extends gear life by 3–5× and eliminates pointer flutter. Specify 316 SS case for corrosive atmospheres (marine, chemical, offshore) — the extra $50 now saves a $500 replacement and a process shutdown later. And always — <strong>always</strong> — verify zero before trusting any reading. Every calibration procedure starts with zero for a reason: if the pointer doesn&apos;t rest on zero with no pressure, nothing the gauge tells you can be trusted.
        </p>
      </div>
    </>
  ),
};

// ─── Sources ──────────────────────────────────────────────────
const sources = [
  { label: "EN 837-1", scope: "Bourdon tube gauges — dimensions, metrology, requirements" },
  { label: "EN 837-2", scope: "Selection and installation recommendations for pressure gauges" },
  { label: "EN 837-3", scope: "Diaphragm and capsule pressure gauges — dimensions and metrology" },
  { label: "ASME B40.100", scope: "Pressure gauges and gauge attachments — general requirements" },
  { label: "ASME B40.300", scope: "Diaphragm/sealed gauge pressure transmitters" },
  { label: "NAMUR NE43", scope: "Standardization of 4–20 mA signal levels for fault detection" },
  { label: "API RP 551", scope: "Process measurement instrumentation for refineries and petrochemicals" },
  { label: "IEC 60770", scope: "Transmitters for use in industrial-process control systems" },
  { label: "NACE MR0175 / ISO 15156", scope: "Materials for sour gas (H₂S) service" },
];

// ─── Sections Config ──────────────────────────────────────────
const sections = [
  {
    id: "quick-facts",
    title: "Quick Facts",
    icon: "📊",
    content: SectionContent.quickfacts,
  },
  {
    id: "working-principle",
    title: "How Pressure Gauges Work",
    icon: "⚙️",
    content: SectionContent.workingprinciple,
    image: (
      <div className="relative aspect-[4/3] sm:aspect-[16/10] max-w-[600px] mx-auto">
        <img
          src="/pressure-gauge-diagram.png"
          alt="Cross-section of a Bourdon tube pressure gauge showing internal components: Bourdon tube, linkage, sector gear, pinion, pointer, and dial"
          className="w-full h-full object-contain rounded-xl opacity-90 hover:opacity-100 transition-opacity duration-300"
          style={{filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.3))"}}
        />
        <p className="mt-3 text-center text-sm text-[var(--color-text-muted)]">
          Internal construction of a Bourdon tube pressure gauge (cross-section view). The elliptical Bourdon tube (bottom) straightens under pressure, pulling the link which rotates the sector gear and pinion to drive the pointer across the dial.
        </p>
      </div>
    ),
  },
  {
    id: "types",
    title: "Types & Variants",
    icon: "📐",
    content: SectionContent.types,
  },
  {
    id: "key-specs",
    title: "Key Specifications",
    icon: "📋",
    content: SectionContent.keyspecs,
  },
  {
    id: "performance",
    title: "Performance & Compliance",
    icon: "📈",
    content: SectionContent.performance,
  },
  {
    id: "applications",
    title: "Industry Applications",
    icon: "🏭",
    content: SectionContent.applications,
  },
  {
    id: "advantages",
    title: "Advantages & Limitations",
    icon: "⚖️",
    content: SectionContent.advantages,
  },
  {
    id: "install-cal",
    title: "Installation & Calibration",
    icon: "🔧",
    content: SectionContent.installcal,
  },
  {
    id: "conclusion",
    title: "Conclusion & Field Notes",
    icon: "🏁",
    content: SectionContent.conclusion,
  },
];

// ─── Page ──────────────────────────────────────────────────────
export default function PressureGaugesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TechArticle",
        "@id": "https://ihub-eta.vercel.app/knowledge/instrumentation/pressure-gauges#article",
        "headline": seo.title,
        "description": seo.description,
        "image": "https://ihub-eta.vercel.app/pressure-gauge-diagram.png",
        "author": { "@type": "Person", "name": "Satish Kumar Jaiswal", "jobTitle": "Lead I&C Commissioning Engineer" },
        "publisher": { "@type": "Organization", "name": "Instrumentation Hub", "logo": { "@type": "ImageObject", "url": "https://ihub-eta.vercel.app/favicon.ico" } },
        "datePublished": "2025-01-15",
        "dateModified": "2025-01-15",
        "mainEntityOfPage": { "@type": "WebPage", "@id": "https://ihub-eta.vercel.app/knowledge/instrumentation/pressure-gauges" },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ihub-eta.vercel.app/knowledge/instrumentation/pressure-gauges#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "item": { "@id": "https://ihub-eta.vercel.app/knowledge", "name": "Knowledge Base" } },
          { "@type": "ListItem", "position": 2, "item": { "@id": "https://ihub-eta.vercel.app/knowledge/instrumentation", "name": "Instrumentation" } },
          { "@type": "ListItem", "position": 3, "item": { "@id": "https://ihub-eta.vercel.app/knowledge/instrumentation/pressure-gauges", "name": "Pressure Gauges" } },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageMeta {...seo} />
      <InstrumentArticleLayout
        title={meta.title}
        description={meta.description}
        category={meta.category}
        breadcrumb={meta.breadcrumb}
        metaTags={meta.metaTags}
        sections={sections}
        sources={sources}
        backLink={{ href: "/knowledge/instrumentation", label: "Back to Instrumentation Hub" }}
        documentVersion="Document Version 2.0 | Rewritten with expanded educational depth | Based on EN 837, ASME B40.100, API RP 551, NACE MR0175, and field experience from NEOM Green Hydrogen, NSRP Vietnam, ADNOC UAE projects"
        footerNote={undefined}
      />
    </>
  );
}