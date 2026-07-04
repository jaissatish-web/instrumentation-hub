"use client";

import InstrumentArticleLayout, {
  AccuracyBarChart,
  NAMURBandChart,
} from "@/components/InstrumentArticleLayout";

// ─── Config ────────────────────────────────────────────────────
const meta = {
  title: "Pressure Gauges",
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
    { label: "Field-Tested (NEOM, NSRP, ADNOC)", color: "cyan" as const },
    { label: "Class 0.1 – 2.5 Coverage", color: "green" as const },
  ],
};

// ─── Section Content ───────────────────────────────────────────

const SectionContent = {
  principles: (
    <>
      <p>
        Most mechanical pressure gauges operate on the principle of <strong>elastic deformation</strong>.
        When pressure is applied to a sensing element, it deforms proportionally to the applied
        pressure. This mechanical movement is then amplified and displayed on a calibrated dial.
      </p>
      <div className="overflow-x-auto my-4">
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
            <tr className="border-b border-[var(--color-border)]/50"><td className="py-2 pr-3 font-medium text-[var(--color-text-primary)]">Bourdon Tube</td><td className="py-2 px-3">C-shaped/helical tube straightens under pressure</td><td className="py-2 px-3" style={{fontFamily: "var(--font-mono)"}}>0–1000 bar</td><td className="py-2 pl-3">General purpose, process industry</td></tr>
            <tr className="border-b border-[var(--color-border)]/50"><td className="py-2 pr-3 font-medium text-[var(--color-text-primary)]">Diaphragm</td><td className="py-2 px-3">Flexible membrane deflects under pressure</td><td className="py-2 px-3" style={{fontFamily: "var(--font-mono)"}}>0–25 bar</td><td className="py-2 pl-3">Low pressure, corrosive media</td></tr>
            <tr className="border-b border-[var(--color-border)]/50"><td className="py-2 pr-3 font-medium text-[var(--color-text-primary)]">Bellows</td><td className="py-2 px-3">Accordion-like element expands/contracts</td><td className="py-2 px-3" style={{fontFamily: "var(--font-mono)"}}>0–40 bar</td><td className="py-2 pl-3">Low pressure, differential pressure</td></tr>
            <tr><td className="py-2 pr-3 font-medium text-[var(--color-text-primary)]">Capsule</td><td className="py-2 px-3">Two diaphragms welded together</td><td className="py-2 px-3" style={{fontFamily: "var(--font-mono)"}}>0–600 mbar</td><td className="py-2 pl-3">Very low pressure, gas applications</td></tr>
          </tbody>
        </table>
      </div>
    </>
  ),

  types: (
    <>
      <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
        {/* 1. Bourdon Tube */}
        <div className="rounded-xl p-5" style={{background: "var(--color-bg-raise)", border: "1px solid var(--color-border)"}}>
          <h3 className="text-sm font-bold text-[var(--color-text-primary)] mb-2" style={{fontFamily: "var(--font-display)"}}>1. Bourdon Tube (Most Common)</h3>
          <p className="text-sm text-[var(--color-text-secondary)] mb-3">C-shaped/helical tube straightens when pressurized, amplified through link-sector-gear to rotate pointer.</p>
          <div className="text-xs space-y-1 text-[var(--color-text-muted)]">
            <div><strong className="text-[var(--color-text-primary)]">C-Type:</strong> 250° arc, 0–1000 bar</div>
            <div><strong className="text-[var(--color-text-primary)]">Helical/Spiral:</strong> Multi-turn, higher sensitivity, 0–60 bar</div>
            <div><strong className="text-[var(--color-text-primary)]">Coiled:</strong> Compact for panel mounting</div>
          </div>
        </div>

        {/* 2. Diaphragm */}
        <div className="rounded-xl p-5" style={{background: "var(--color-bg-raise)", border: "1px solid var(--color-border)"}}>
          <h3 className="text-sm font-bold text-[var(--color-text-primary)] mb-2" style={{fontFamily: "var(--font-display)"}}>2. Diaphragm Pressure Gauges</h3>
          <p className="text-sm text-[var(--color-text-secondary)] mb-3">For low pressures (0–25 bar) and corrosive/viscous media. Isolates process media from movement.</p>
          <div className="text-xs space-y-1 text-[var(--color-text-muted)]">
            <div><strong className="text-[var(--color-text-primary)]">Flat:</strong> Clean fluids</div>
            <div><strong className="text-[var(--color-text-primary)]">Corrugated:</strong> Higher deflection, sensitivity</div>
            <div><strong className="text-[var(--color-text-primary)]">Flush:</strong> Sanitary applications</div>
          </div>
        </div>

        {/* 3. Capsule */}
        <div className="rounded-xl p-5" style={{background: "var(--color-bg-raise)", border: "1px solid var(--color-border)"}}>
          <h3 className="text-sm font-bold text-[var(--color-text-primary)] mb-2" style={{fontFamily: "var(--font-display)"}}>3. Capsule Pressure Gauges</h3>
          <p className="text-sm text-[var(--color-text-secondary)] mb-3">Two diaphragms welded at periphery. Very low pressures (0–600 mbar).</p>
          <div className="text-xs space-y-1 text-[var(--color-text-muted)]">
            <div>Gas distribution systems</div>
            <div>HVAC air pressure</div>
            <div>Clean room monitoring</div>
          </div>
        </div>

        {/* 4. Differential Pressure */}
        <div className="rounded-xl p-5" style={{background: "var(--color-bg-raise)", border: "1px solid var(--color-border)"}}>
          <h3 className="text-sm font-bold text-[var(--color-text-primary)] mb-2" style={{fontFamily: "var(--font-display)"}}>4. Differential Pressure Gauges</h3>
          <p className="text-sm text-[var(--color-text-secondary)] mb-3">Measure difference between two pressures.</p>
          <div className="text-xs space-y-1 text-[var(--color-text-muted)]">
            <div>Filter monitoring (ΔP across filter)</div>
            <div>Level measurement (bubbler systems)</div>
            <div>Flow measurement (orifice ΔP)</div>
          </div>
        </div>
      </div>

      {/* Materials table */}
      <div className="mt-6">
        <h3 className="text-sm font-bold text-[var(--color-text-primary)] mb-3" style={{fontFamily: "var(--font-display)"}}>Bourdon Tube Materials</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-[var(--color-text-secondary)]">
            <thead>
              <tr className="border-b border-[var(--color-border)]">
                <th className="text-left py-2 pr-3 font-semibold text-[var(--color-text-primary)]" style={{fontFamily: "var(--font-mono)"}}>Material</th>
                <th className="text-left py-2 pl-3 font-semibold text-[var(--color-text-primary)]" style={{fontFamily: "var(--font-mono)"}}>Use Case</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[var(--color-border)]/50"><td className="py-2 pr-3 font-medium text-[var(--color-text-primary)]">316 SS</td><td className="py-2 pl-3">General process, corrosive media</td></tr>
              <tr className="border-b border-[var(--color-border)]/50"><td className="py-2 pr-3 font-medium text-[var(--color-text-primary)]">Monel 400</td><td className="py-2 pl-3">Seawater, marine, HF acid</td></tr>
              <tr className="border-b border-[var(--color-border)]/50"><td className="py-2 pr-3 font-medium text-[var(--color-text-primary)]">Inconel 625</td><td className="py-2 pl-3">High temp, sour gas (H₂S)</td></tr>
              <tr><td className="py-2 pr-3 font-medium text-[var(--color-text-primary)]">Bronze/Brass</td><td className="py-2 pl-3">Water, air, non-corrosive (economical)</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  ),

  accuracy: (
    <>
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
            <tr className="border-b border-[var(--color-border)]/50"><td className="py-2 pr-3 font-medium text-[var(--color-text-primary)]">Class 0.1</td><td className="py-2 px-3" style={{fontFamily: "var(--font-mono)"}}>0.1%</td><td className="py-2 pl-3">Laboratory, calibration standards</td></tr>
            <tr className="border-b border-[var(--color-border)]/50"><td className="py-2 pr-3 font-medium text-[var(--color-text-primary)]">Class 0.25</td><td className="py-2 px-3" style={{fontFamily: "var(--font-mono)"}}>0.25%</td><td className="py-2 pl-3">High-precision process</td></tr>
            <tr className="border-b border-[var(--color-border)]/50"><td className="py-2 pr-3 font-medium text-[var(--color-text-primary)]">Class 0.6</td><td className="py-2 px-3" style={{fontFamily: "var(--font-mono)"}}>0.6%</td><td className="py-2 pl-3">Precision industrial</td></tr>
            <tr className="border-b border-[var(--color-border)]/50"><td className="py-2 pr-3 font-medium text-[var(--color-text-primary)]">Class 1.0</td><td className="py-2 px-3" style={{fontFamily: "var(--font-mono)"}}>1.0%</td><td className="py-2 pl-3">General industrial (most common)</td></tr>
            <tr className="border-b border-[var(--color-border)]/50"><td className="py-2 pr-3 font-medium text-[var(--color-text-primary)]">Class 1.6</td><td className="py-2 px-3" style={{fontFamily: "var(--font-mono)"}}>1.6%</td><td className="py-2 pl-3">General purpose, panel mounting</td></tr>
            <tr><td className="py-2 pr-3 font-medium text-[var(--color-text-primary)]">Class 2.5</td><td className="py-2 px-3" style={{fontFamily: "var(--font-mono)"}}>2.5%</td><td className="py-2 pl-3">Commercial, non-critical</td></tr>
          </tbody>
        </table>
      </div>
      <div className="mt-4 p-4 rounded-lg border-l-4 border-amber-500 bg-amber-500/5">
        <p className="text-sm text-[var(--color-text-secondary)]"><strong className="text-amber-400">Field Note:</strong> For custody transfer or safety systems, specify Class 0.6 or better. For general indication, Class 1.6 is adequate.</p>
      </div>
    </>
  ),

  namur: (
    <>
      <p className="mb-4">
        While not directly applicable to mechanical gauges, if using pressure <strong>transmitters</strong> with gauge displays:
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-[var(--color-text-secondary)]">
          <thead>
            <tr className="border-b border-[var(--color-border)]">
              <th className="text-left py-2 pr-3 font-semibold text-[var(--color-text-primary)]" style={{fontFamily: "var(--font-mono)"}}>Signal Range</th>
              <th className="text-left py-2 pl-3 font-semibold text-[var(--color-text-primary)]" style={{fontFamily: "var(--font-mono)"}}>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-[var(--color-border)]/50"><td className="py-2 pr-3" style={{fontFamily: "var(--font-mono)"}}>3.8–20.5 mA</td><td className="py-2 pl-3">Normal operation</td></tr>
            <tr className="border-b border-[var(--color-border)]/50"><td className="py-2 pr-3" style={{fontFamily: "var(--font-mono)"}}>&lt; 3.6 mA</td><td className="py-2 pl-3"><strong className="text-red-500">Low alarm (sensor fault, cable break)</strong></td></tr>
            <tr className="border-b border-[var(--color-border)]/50"><td className="py-2 pr-3" style={{fontFamily: "var(--font-mono)"}}>&gt; 21.0 mA</td><td className="py-2 pl-3"><strong className="text-red-500">High alarm (sensor fault, overrange)</strong></td></tr>
            <tr className="border-b border-[var(--color-border)]/50"><td className="py-2 pr-3" style={{fontFamily: "var(--font-mono)"}}>3.6–3.8 mA</td><td className="py-2 pl-3">Low saturation (near fault)</td></tr>
            <tr><td className="py-2 pr-3" style={{fontFamily: "var(--font-mono)"}}>20.5–21.0 mA</td><td className="py-2 pl-3">High saturation (near fault)</td></tr>
          </tbody>
        </table>
      </div>
    </>
  ),

  selection: (
    <>
      <h3 className="text-sm font-bold text-[var(--color-text-primary)] mb-3" style={{fontFamily: "var(--font-display)"}}>Process Media Compatibility</h3>
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm text-[var(--color-text-secondary)]">
          <thead>
            <tr className="border-b border-[var(--color-border)]">
              <th className="text-left py-2 pr-3 font-semibold text-[var(--color-text-primary)]" style={{fontFamily: "var(--font-mono)"}}>Media</th>
              <th className="text-left py-2 pl-3 font-semibold text-[var(--color-text-primary)]" style={{fontFamily: "var(--font-mono)"}}>Recommended Wetted Parts</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-[var(--color-border)]/50"><td className="py-2 pr-3">Water, Air, Oil</td><td className="py-2 pl-3">Brass, Bronze, 316 SS</td></tr>
            <tr className="border-b border-[var(--color-border)]/50"><td className="py-2 pr-3">Acids (HCl, H₂SO₄)</td><td className="py-2 pl-3">Monel, Hastelloy C, PTFE-lined</td></tr>
            <tr className="border-b border-[var(--color-border)]/50"><td className="py-2 pr-3">Seawater, Chlorides</td><td className="py-2 pl-3">Monel 400, Super Duplex</td></tr>
            <tr className="border-b border-[var(--color-border)]/50"><td className="py-2 pr-3">Sour Gas (H₂S)</td><td className="py-2 pl-3">Inconel 625, NACE MR0175</td></tr>
            <tr className="border-b border-[var(--color-border)]/50"><td className="py-2 pr-3">High Temperature (&gt;200°C)</td><td className="py-2 pl-3">Inconel, SS with cooling element</td></tr>
            <tr className="border-b border-[var(--color-border)]/50"><td className="py-2 pr-3">Viscous/Slurry</td><td className="py-2 pl-3">Flush diaphragm, capillary seal</td></tr>
            <tr><td className="py-2 pr-3">Sanitary (Food/Pharma)</td><td className="py-2 pl-3">316L electropolished, Tri-clamp</td></tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-sm font-bold text-[var(--color-text-primary)] mb-3" style={{fontFamily: "var(--font-display)"}}>Pressure Range Selection</h3>
      <div className="p-4 rounded-lg border-l-4 border-amber-500 bg-amber-500/5 mb-4">
        <p className="text-sm text-[var(--color-text-secondary)]"><strong className="text-amber-400">Rule of Thumb:</strong> Select range so normal operating pressure is <strong>50–75% of full scale</strong>.</p>
      </div>
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm text-[var(--color-text-secondary)]">
          <thead>
            <tr className="border-b border-[var(--color-border)]">
              <th className="text-left py-2 pr-3 font-semibold text-[var(--color-text-primary)]" style={{fontFamily: "var(--font-mono)"}}>Operating Pressure</th>
              <th className="text-left py-2 pl-3 font-semibold text-[var(--color-text-primary)]" style={{fontFamily: "var(--font-mono)"}}>Recommended Gauge Range</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-[var(--color-border)]/50"><td className="py-2 pr-3" style={{fontFamily: "var(--font-mono)"}}>10 bar</td><td className="py-2 pl-3" style={{fontFamily: "var(--font-mono)"}}>0–16 bar or 0–25 bar</td></tr>
            <tr className="border-b border-[var(--color-border)]/50"><td className="py-2 pr-3" style={{fontFamily: "var(--font-mono)"}}>50 bar</td><td className="py-2 pl-3" style={{fontFamily: "var(--font-mono)"}}>0–60 bar or 0–100 bar</td></tr>
            <tr className="border-b border-[var(--color-border)]/50"><td className="py-2 pr-3">Vacuum</td><td className="py-2 pl-3" style={{fontFamily: "var(--font-mono)"}}>-1 to 0 bar (compound)</td></tr>
            <tr><td className="py-2 pr-3">Vacuum to Pressure</td><td className="py-2 pl-3" style={{fontFamily: "var(--font-mono)"}}>-1 to +10 bar (compound)</td></tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-sm font-bold text-[var(--color-text-primary)] mb-3" style={{fontFamily: "var(--font-display)"}}>Environmental Considerations</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-[var(--color-text-secondary)]">
          <thead>
            <tr className="border-b border-[var(--color-border)]">
              <th className="text-left py-2 pr-3 font-semibold text-[var(--color-text-primary)]" style={{fontFamily: "var(--font-mono)"}}>Condition</th>
              <th className="text-left py-2 pl-3 font-semibold text-[var(--color-text-primary)]" style={{fontFamily: "var(--font-mono)"}}>Protection</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-[var(--color-border)]/50"><td className="py-2 pr-3">Vibration</td><td className="py-2 pl-3">Liquid-filled (glycerin/silicone)</td></tr>
            <tr className="border-b border-[var(--color-border)]/50"><td className="py-2 pr-3">Pulsation</td><td className="py-2 pl-3">Snubber, restrictor, liquid fill</td></tr>
            <tr className="border-b border-[var(--color-border)]/50"><td className="py-2 pr-3">Outdoor/Corrosive</td><td className="py-2 pl-3">SS case, IP65/IP66, coated movement</td></tr>
            <tr className="border-b border-[var(--color-border)]/50"><td className="py-2 pr-3">High Ambient Temp</td><td className="py-2 pl-3">Cooling element, capillary</td></tr>
            <tr><td className="py-2 pr-3">Hazardous Area</td><td className="py-2 pl-3">Intrinsically safe (if transmitter), SS case</td></tr>
          </tbody>
        </table>
      </div>
    </>
  ),

  installation: (
    <>
      <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
        <div className="rounded-xl p-5" style={{background: "var(--color-bg-raise)", border: "1px solid var(--color-border)"}}>
          <h3 className="text-xs font-bold text-amber-400 uppercase tracking-[.08em] mb-3" style={{fontFamily: "var(--font-mono)"}}>1. Mounting Position</h3>
          <ul className="text-sm space-y-2 text-[var(--color-text-secondary)]">
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-amber-500 flex-shrink-0" /><strong>Vertical (standard):</strong> Dial face upright</li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-amber-500 flex-shrink-0" /><strong>Horizontal:</strong> Specify "bottom connection" or "back connection"</li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-amber-500 flex-shrink-0" /><strong>Panel Mount:</strong> Back connection with front flange or U-clamp</li>
          </ul>
        </div>
        <div className="rounded-xl p-5" style={{background: "var(--color-bg-raise)", border: "1px solid var(--color-border)"}}>
          <h3 className="text-xs font-bold text-amber-400 uppercase tracking-[.08em] mb-3" style={{fontFamily: "var(--font-mono)"}}>2. Process Connection</h3>
          <ul className="text-sm space-y-2 text-[var(--color-text-secondary)]">
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-amber-500 flex-shrink-0" /><strong>Thread:</strong> 1/4" NPT (std), 1/2" NPT (high pressure)</li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-amber-500 flex-shrink-0" /><strong>Flanged:</strong> Per ASME B16.5 / EN 1092-1</li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-amber-500 flex-shrink-0" /><strong>Sanitary:</strong> Tri-clamp per ISO 2852 / ASME BPE</li>
          </ul>
        </div>
      </div>

      <div className="mt-4 sm:mt-6">
        <h3 className="text-sm font-bold text-[var(--color-text-primary)] mb-3" style={{fontFamily: "var(--font-display)"}}>3. Impulse Piping</h3>
        <ul className="text-sm space-y-2 text-[var(--color-text-secondary)]">
          <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-amber-500 flex-shrink-0" />Slope piping <strong>≥ 1:10</strong> toward process for gas service</li>
          <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-amber-500 flex-shrink-0" />Slope <strong>away from process</strong> for liquid service</li>
          <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-amber-500 flex-shrink-0" />Keep impulse lines <strong>short</strong> and <strong>same length</strong> (for DP)</li>
          <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-amber-500 flex-shrink-0" />Use <strong>condensate pots</strong> for steam service</li>
        </ul>
      </div>

      <div className="mt-6 overflow-x-auto">
        <h3 className="text-sm font-bold text-[var(--color-text-primary)] mb-3" style={{fontFamily: "var(--font-display)"}}>4. Accessories</h3>
        <table className="w-full text-sm text-[var(--color-text-secondary)]">
          <thead>
            <tr className="border-b border-[var(--color-border)]">
              <th className="text-left py-2 pr-3 font-semibold text-[var(--color-text-primary)]" style={{fontFamily: "var(--font-mono)"}}>Accessory</th>
              <th className="text-left py-2 pl-3 font-semibold text-[var(--color-text-primary)]" style={{fontFamily: "var(--font-mono)"}}>Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-[var(--color-border)]/50"><td className="py-2 pr-3 font-medium text-[var(--color-text-primary)]">Snubber/Restrictor</td><td className="py-2 pl-3">Dampen pulsation</td></tr>
            <tr className="border-b border-[var(--color-border)]/50"><td className="py-2 pr-3 font-medium text-[var(--color-text-primary)]">Siphon (Pigtail)</td><td className="py-2 pl-3">Steam service (condensate trap)</td></tr>
            <tr className="border-b border-[var(--color-border)]/50"><td className="py-2 pr-3 font-medium text-[var(--color-text-primary)]">Diaphragm Seal</td><td className="py-2 pl-3">Corrosive, viscous, sanitary, high temp</td></tr>
            <tr className="border-b border-[var(--color-border)]/50"><td className="py-2 pr-3 font-medium text-[var(--color-text-primary)]">Cooling Element</td><td className="py-2 pl-3">High process temperature (&gt;100°C)</td></tr>
            <tr><td className="py-2 pr-3 font-medium text-[var(--color-text-primary)]">Overrange Protector</td><td className="py-2 pl-3">Prevent damage from pressure spikes</td></tr>
          </tbody>
        </table>
      </div>
    </>
  ),

  calibration: (
    <>
      <p className="mb-3 text-sm font-semibold text-[var(--color-text-primary)]" style={{fontFamily: "var(--font-mono)"}}>Calibration Procedure (per DKD/DAkkS / ASME B40.100)</p>
      <ol className="text-sm space-y-2 text-[var(--color-text-secondary)] list-decimal list-inside mb-6">
        <li><strong>Visual Inspection:</strong> Case, window, pointer, dial</li>
        <li><strong>Zero Check:</strong> Verify pointer at zero with no pressure</li>
        <li><strong>Increasing Pressure:</strong> Apply 0%, 25%, 50%, 75%, 100% FS</li>
        <li><strong>Decreasing Pressure:</strong> Same points descending</li>
        <li><strong>Record:</strong> Hysteresis, repeatability, linearity</li>
        <li><strong>Adjust:</strong> If equipped with zero/span adjustment</li>
      </ol>

      <p className="mb-3 text-sm font-semibold text-[var(--color-text-primary)]" style={{fontFamily: "var(--font-mono)"}}>Acceptance Criteria (Class 1.0)</p>
      <ul className="text-sm space-y-2 text-[var(--color-text-secondary)] mb-6">
        <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-green-500 flex-shrink-0" /><strong>Linearity:</strong> ≤ 1.0% FS</li>
        <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-green-500 flex-shrink-0" /><strong>Hysteresis:</strong> ≤ 1.0% FS</li>
        <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-green-500 flex-shrink-0" /><strong>Repeatability:</strong> ≤ 0.5% FS</li>
      </ul>

      <h3 className="text-sm font-bold text-[var(--color-text-primary)] mb-3" style={{fontFamily: "var(--font-display)"}}>Field Maintenance Schedule</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-[var(--color-text-secondary)]">
          <thead>
            <tr className="border-b border-[var(--color-border)]">
              <th className="text-left py-2 pr-3 font-semibold text-[var(--color-text-primary)]" style={{fontFamily: "var(--font-mono)"}}>Frequency</th>
              <th className="text-left py-2 pl-3 font-semibold text-[var(--color-text-primary)]" style={{fontFamily: "var(--font-mono)"}}>Task</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-[var(--color-border)]/50"><td className="py-2 pr-3" style={{fontFamily: "var(--font-mono)"}}>Monthly</td><td className="py-2 pl-3">Visual check: pointer at zero, no leaks, window clear</td></tr>
            <tr className="border-b border-[var(--color-border)]/50"><td className="py-2 pr-3" style={{fontFamily: "var(--font-mono)"}}>Quarterly</td><td className="py-2 pl-3">Tap test: lightly tap case, pointer should not stick</td></tr>
            <tr className="border-b border-[var(--color-border)]/50"><td className="py-2 pr-3" style={{fontFamily: "var(--font-mono)"}}>Annually</td><td className="py-2 pl-3">Full calibration against deadweight tester</td></tr>
            <tr><td className="py-2 pr-3" style={{fontFamily: "var(--font-mono)"}}>As Needed</td><td className="py-2 pl-3">Replace if: cracked window, leaking, pointer stuck, &gt;2× accuracy class error</td></tr>
          </tbody>
        </table>
      </div>
    </>
  ),

  failures: (
    <>
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
            <tr className="border-b border-[var(--color-border)]/50"><td className="py-2 pr-3 font-medium text-[var(--color-text-primary)]">Pointer stuck at zero</td><td className="py-2 px-3">Broken Bourdon tube, disconnected linkage</td><td className="py-2 pl-3">Replace gauge</td></tr>
            <tr className="border-b border-[var(--color-border)]/50"><td className="py-2 pr-3 font-medium text-[var(--color-text-primary)]">Pointer oscillates</td><td className="py-2 px-3">Pulsation, no liquid fill</td><td className="py-2 pl-3">Add snubber or liquid fill</td></tr>
            <tr className="border-b border-[var(--color-border)]/50"><td className="py-2 pr-3 font-medium text-[var(--color-text-primary)]">Reading high/low</td><td className="py-2 px-3">Calibration drift, temperature effect</td><td className="py-2 pl-3">Recalibrate, check temp spec</td></tr>
            <tr className="border-b border-[var(--color-border)]/50"><td className="py-2 pr-3 font-medium text-[var(--color-text-primary)]">Leak at connection</td><td className="py-2 px-3">Loose fitting, damaged thread</td><td className="py-2 pl-3">Re-tighten, replace seal</td></tr>
            <tr className="border-b border-[var(--color-border)]/50"><td className="py-2 pr-3 font-medium text-[var(--color-text-primary)]">Cracked window</td><td className="py-2 px-3">Impact, overpressure</td><td className="py-2 pl-3">Replace window/gauge</td></tr>
            <tr className="border-b border-[var(--color-border)]/50"><td className="py-2 pr-3 font-medium text-[var(--color-text-primary)]">Fogged window</td><td className="py-2 px-3">Seal failure, temp cycling</td><td className="py-2 pl-3">Replace gauge (hermetic seal lost)</td></tr>
            <tr><td className="py-2 pr-3 font-medium text-[var(--color-text-primary)]">Pointer doesn't return to zero</td><td className="py-2 px-3">Overpressure, Bourdon tube yield</td><td className="py-2 pl-3">Replace gauge</td></tr>
          </tbody>
        </table>
      </div>
    </>
  ),

  specialized: (
    <>
      <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
        <div className="rounded-xl p-5" style={{background: "var(--color-bg-raise)", border: "1px solid var(--color-border)"}}>
          <h3 className="text-sm font-bold text-[var(--color-text-primary)] mb-2" style={{fontFamily: "var(--font-display)"}}>Test Gauges (Calibration Grade)</h3>
          <ul className="text-sm space-y-1 text-[var(--color-text-secondary)]">
            <li>Class 0.1, 0.25, 0.6</li>
            <li>Mirror band parallax elimination</li>
            <li>Knife-edge pointer</li>
            <li>Used with deadweight testers</li>
          </ul>
        </div>
        <div className="rounded-xl p-5" style={{background: "var(--color-bg-raise)", border: "1px solid var(--color-border)"}}>
          <h3 className="text-sm font-bold text-[var(--color-text-primary)] mb-2" style={{fontFamily: "var(--font-display)"}}>Panel Mount Gauges</h3>
          <ul className="text-sm space-y-1 text-[var(--color-text-secondary)]">
            <li>Back connection</li>
            <li>Front flange or U-clamp</li>
            <li>Smaller dial (40mm, 50mm, 63mm)</li>
          </ul>
        </div>
        <div className="rounded-xl p-5" style={{background: "var(--color-bg-raise)", border: "1px solid var(--color-border)"}}>
          <h3 className="text-sm font-bold text-[var(--color-text-primary)] mb-2" style={{fontFamily: "var(--font-display)"}}>Differential Pressure Gauges</h3>
          <ul className="text-sm space-y-1 text-[var(--color-text-secondary)]">
            <li>Two Bourdon tubes or diaphragm capsule</li>
            <li>Single pointer shows ΔP</li>
            <li>Used on filters, heat exchangers, level</li>
          </ul>
        </div>
        <div className="rounded-xl p-5" style={{background: "var(--color-bg-raise)", border: "1px solid var(--color-border)"}}>
          <h3 className="text-sm font-bold text-[var(--color-text-primary)] mb-2" style={{fontFamily: "var(--font-display)"}}>Sanitary Gauges</h3>
          <ul className="text-sm space-y-1 text-[var(--color-text-secondary)]">
            <li>316L electropolished (Ra &lt; 0.8 μm)</li>
            <li>Tri-clamp connection</li>
            <li>Fill fluid: FDA-approved (neobee, glycerin)</li>
            <li>No crevices, CIP/SIP compatible</li>
          </ul>
        </div>
      </div>
      <div className="mt-4 sm:mt-6 rounded-xl p-5" style={{background: "var(--color-bg-raise)", border: "1px solid var(--color-border)"}}>
        <h3 className="text-sm font-bold text-[var(--color-text-primary)] mb-2" style={{fontFamily: "var(--font-display)"}}>Digital Pressure Gauges</h3>
        <ul className="text-sm space-y-1 text-[var(--color-text-secondary)]">
          <li>Battery powered, 0.1–0.5% accuracy</li>
          <li>Data logging, min/max, backlight</li>
          <li>Units switching (bar, psi, kPa, kg/cm²)</li>
          <li>4–20 mA output option</li>
        </ul>
      </div>
    </>
  ),

  quickref: (
    <>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-[var(--color-text-secondary)]">
          <thead>
            <tr className="border-b border-[var(--color-border)]">
              <th className="text-left py-2 pr-3 font-semibold text-[var(--color-text-primary)]" style={{fontFamily: "var(--font-mono)"}}>Parameter</th>
              <th className="text-left py-2 pl-3 font-semibold text-[var(--color-text-primary)]" style={{fontFamily: "var(--font-mono)"}}>Recommendation</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-[var(--color-border)]/50"><td className="py-2 pr-3">Dial Size</td><td className="py-2 pl-3" style={{fontFamily: "var(--font-mono)"}}>100mm (4") field, 160mm (6") control room</td></tr>
            <tr className="border-b border-[var(--color-border)]/50"><td className="py-2 pr-3">Case Material</td><td className="py-2 pl-3">304/316 SS for process, phenolic for panel</td></tr>
            <tr className="border-b border-[var(--color-border)]/50"><td className="py-2 pr-3">Window</td><td className="py-2 pl-3">Laminated safety glass (std), acrylic (vibration)</td></tr>
            <tr className="border-b border-[var(--color-border)]/50"><td className="py-2 pr-3">Fill Fluid</td><td className="py-2 pl-3" style={{fontFamily: "var(--font-mono)"}}>Glycerin 99.7% (–20 to +60°C), Silicone (–40 to +100°C)</td></tr>
            <tr className="border-b border-[var(--color-border)]/50"><td className="py-2 pr-3">Accuracy</td><td className="py-2 pl-3" style={{fontFamily: "var(--font-mono)"}}>Class 1.0 (field), Class 0.6 (control), Class 0.25 (lab)</td></tr>
            <tr className="border-b border-[var(--color-border)]/50"><td className="py-2 pr-3">Range</td><td className="py-2 pl-3">Normal op at 50–75% FS</td></tr>
            <tr className="border-b border-[var(--color-border)]/50"><td className="py-2 pr-3">Connection</td><td className="py-2 pl-3" style={{fontFamily: "var(--font-mono)"}}>1/2" NPT male (process), 1/4" NPT (instrument)</td></tr>
            <tr><td className="py-2 pr-3">Tagging</td><td className="py-2 pl-3">Stainless steel tag, laser etched</td></tr>
          </tbody>
        </table>
      </div>
    </>
  ),

  conclusion: (
    <>
      <p className="mb-4">
        Pressure gauges remain the most fundamental and reliable pressure indication devices in process plants. Proper selection requires understanding:
      </p>
      <ol className="text-sm space-y-2 text-[var(--color-text-secondary)] list-decimal list-inside mb-4">
        <li><strong>Process conditions</strong> (pressure, temperature, media, viscosity)</li>
        <li><strong>Accuracy requirements</strong> (safety, control, indication only)</li>
        <li><strong>Environment</strong> (vibration, corrosion, temperature, hazardous area)</li>
        <li><strong>Installation constraints</strong> (mounting, impulse piping, accessories)</li>
        <li><strong>Maintenance philosophy</strong> (calibration interval, spare parts strategy)</li>
      </ol>
      <div className="p-4 rounded-lg border-l-4 border-amber-500 bg-amber-500/5">
        <p className="text-sm text-[var(--color-text-secondary)]">
          <strong className="text-amber-400">Final Field Note:</strong> A gauge that reads correctly but can't be read (fogged, wrong position, no light) is useless. Install for <strong>readability first</strong>, then accuracy. Use liquid fill for vibration. Specify 316 SS case for corrosive atmospheres. And always—always—verify zero before trusting the reading.
        </p>
      </div>
    </>
  ),
};

// ─── Sources ──────────────────────────────────────────────────
const sources = [
  { label: "EN 837-1", scope: "Bourdon tube gauges - dimensions, metrology" },
  { label: "EN 837-2", scope: "Selection and installation recommendations" },
  { label: "EN 837-3", scope: "Diaphragm and capsule gauges" },
  { label: "ASME B40.100", scope: "Pressure gauges and gauge attachments" },
  { label: "ASME B40.300", scope: "Diaphragm/sealed gauges" },
  { label: "NAMUR NE43", scope: "4–20 mA signal levels (transmitters)" },
  { label: "API RP 551", scope: "Process measurement instrumentation" },
  { label: "IEC 60770", scope: "Transmitters for process control" },
];

// ─── Sections Config ──────────────────────────────────────────
const sections = [
  {
    id: "principles",
    title: "Operating Principles",
    icon: "⚙️",
    content: SectionContent.principles,
    image: (
      <div className="relative aspect-[4/3] sm:aspect-[16/10] max-w-[600px] mx-auto">
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
    ),
  },
  {
    id: "types",
    title: "Types of Pressure Gauges",
    icon: "📐",
    content: SectionContent.types,
  },
  {
    id: "accuracy",
    title: "Accuracy Classes",
    icon: "🎯",
    content: SectionContent.accuracy,
    chart: <AccuracyBarChart />,
  },
  {
    id: "namur",
    title: "NAMUR NE43",
    icon: "📡",
    content: SectionContent.namur,
    chart: <NAMURBandChart />,
  },
  {
    id: "selection",
    title: "Selection Guide",
    icon: "✅",
    content: SectionContent.selection,
  },
  {
    id: "installation",
    title: "Installation Best Practices",
    icon: "🔧",
    content: SectionContent.installation,
  },
  {
    id: "calibration",
    title: "Calibration & Maintenance",
    icon: "📋",
    content: SectionContent.calibration,
  },
  {
    id: "failures",
    title: "Common Failure Modes",
    icon: "⚠️",
    content: SectionContent.failures,
  },
  {
    id: "specialized",
    title: "Specialized Gauge Types",
    icon: "🔬",
    content: SectionContent.specialized,
  },
  {
    id: "quickref",
    title: "Quick Reference Card",
    icon: "🗒️",
    content: SectionContent.quickref,
  },
  {
    id: "conclusion",
    title: "Conclusion",
    icon: "🏁",
    content: SectionContent.conclusion,
  },
];

// ─── Page ──────────────────────────────────────────────────────
export default function PressureGaugesPage() {
  return (
    <InstrumentArticleLayout
      title={meta.title}
      description={meta.description}
      category={meta.category}
      breadcrumb={meta.breadcrumb}
      metaTags={meta.metaTags}
      sections={sections}
      sources={sources}
      backLink={{ href: "/knowledge/instrumentation", label: "Back to Instrumentation Hub" }}
      documentVersion="Document Version 1.0 | Based on EN 837, ASME B40.100, API RP 551, and field experience from NEOM Green Hydrogen, NSRP Vietnam, ADNOC UAE projects"
      footerNote={undefined}
    />
  );
}