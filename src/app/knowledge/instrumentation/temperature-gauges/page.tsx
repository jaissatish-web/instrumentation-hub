"use client";

import InstrumentArticleLayout from "@/components/InstrumentArticleLayout";
import PageMeta from "@/components/PageMeta";

// ─── SEO ───────────────────────────────────────────────────────
const seo = {
  title: "Temperature Gauges",
  description:
    "Master industrial temperature gauges — bimetallic thermometers, filled-system thermometers, and dial thermometers. Covers thermal expansion principles, accuracy classes (Class 1.0–2.0), installation, calibration, and selection criteria per ASME B40.200 and IEC 60751.",
  canonical: "https://ihub-eta.vercel.app/knowledge/instrumentation/temperature-gauges",
  image: "/bimetallic-thermometer-diagram.svg",
  keywords: "temperature gauge, bimetallic thermometer, filled system thermometer, dial thermometer, thermal expansion, ASME B40.200, industrial temperature measurement, thermometer calibration",
};

// ─── Config ────────────────────────────────────────────────────
const meta = {
  title: seo.title,
  description:
    "Comprehensive guide covering principles, types, selection, installation, calibration, and troubleshooting of industrial temperature gauges.",
  category: "Instrumentation Guide",
  breadcrumb: [
    { label: "Knowledge Base", href: "/knowledge" },
    { label: "Instrumentation", href: "/knowledge/instrumentation" },
    { label: "Temperature Gauges", href: "/knowledge/instrumentation/temperature-gauges" },
  ],
  metaTags: [
    { label: "ASME B40.200", color: "amber" as const },
    { label: "Bimetallic · Filled System", color: "green" as const },
    { label: "Range -30 to 600°C", color: "blue" as const },
  ],
};

// ─── SVG Chart: Temperature Range Comparison ──────────────────
const TemperatureRangeChart = () => (
  <div className="w-full py-4">
    <svg viewBox="0 0 420 160" className="w-full h-auto">
      <text x="210" y="16" textAnchor="middle" fill="#e8edf5" fontSize="11" fontWeight="600" style={{fontFamily: "var(--font-display)"}}>Temperature Gauge Range Coverage</text>
      <g transform="translate(10, 35)">
        {/* Scale */}
        <line x1="0" y1="0" x2="380" y2="0" stroke="#2a3d5c" strokeWidth="2" />
        <line x1="0" y1="-5" x2="0" y2="5" stroke="#8a9bb5" strokeWidth="1.5" />
        <text x="0" y="20" textAnchor="middle" fill="#8a9bb5" fontSize="8" style={{fontFamily: "var(--font-mono)"}}>-30</text>
        <line x1="95" y1="-5" x2="95" y2="5" stroke="#8a9bb5" strokeWidth="1.5" />
        <text x="95" y="20" textAnchor="middle" fill="#8a9bb5" fontSize="8" style={{fontFamily: "var(--font-mono)"}}>100</text>
        <line x1="190" y1="-5" x2="190" y2="5" stroke="#8a9bb5" strokeWidth="1.5" />
        <text x="190" y="20" textAnchor="middle" fill="#8a9bb5" fontSize="8" style={{fontFamily: "var(--font-mono)"}}>200</text>
        <line x1="285" y1="-5" x2="285" y2="5" stroke="#8a9bb5" strokeWidth="1.5" />
        <text x="285" y="20" textAnchor="middle" fill="#8a9bb5" fontSize="8" style={{fontFamily: "var(--font-mono)"}}>400</text>
        <line x1="380" y1="-5" x2="380" y2="5" stroke="#8a9bb5" strokeWidth="1.5" />
        <text x="380" y="20" textAnchor="middle" fill="#8a9bb5" fontSize="8" style={{fontFamily: "var(--font-mono)"}}>600°C</text>

        {/* Bimetallic */}
        <rect x="10" y="30" width="160" height="22" rx="4" fill="#F5A800" fillOpacity="0.3" stroke="#F5A800" strokeWidth="1" />
        <text x="90" y="44" textAnchor="middle" fill="#e8edf5" fontSize="9" style={{fontFamily: "var(--font-mono)"}}>Bimetallic -30 to 350°C</text>

        {/* Filled System */}
        <rect x="60" y="60" width="260" height="22" rx="4" fill="#00b4ff" fillOpacity="0.3" stroke="#00b4ff" strokeWidth="1" />
        <text x="190" y="74" textAnchor="middle" fill="#e8edf5" fontSize="9" style={{fontFamily: "var(--font-mono)"}}>Filled System -40 to 600°C</text>

        {/* Gas Actuated */}
        <rect x="10" y="90" width="270" height="22" rx="4" fill="#00e676" fillOpacity="0.3" stroke="#00e676" strokeWidth="1" />
        <text x="145" y="104" textAnchor="middle" fill="#e8edf5" fontSize="9" style={{fontFamily: "var(--font-mono)"}}>Gas-Actuated -30 to 600°C</text>

        {/* Vapor Pressure */}
        <rect x="10" y="120" width="140" height="22" rx="4" fill="#ff6b35" fillOpacity="0.3" stroke="#ff6b35" strokeWidth="1" />
        <text x="80" y="134" textAnchor="middle" fill="#e8edf5" fontSize="9" style={{fontFamily: "var(--font-mono)"}}>Vapor Pressure 0 to 250°C</text>
      </g>
    </svg>
  </div>
);

// ─── Section Content ───────────────────────────────────────────
const SectionContent = {
  principles: (
    <>
      <p>
        Industrial temperature gauges operate on the principle of <strong>thermal expansion</strong>. 
        When temperature increases, the sensing element expands proportionally, and this mechanical 
        movement is transmitted through a linkage to rotate a pointer on a calibrated dial. The two 
        most common mechanical types are <strong>bimetallic thermometers</strong> and <strong>filled-system thermometers</strong>.
      </p>
      <div className="overflow-x-auto my-4">
        <table className="w-full text-sm text-[var(--color-text-secondary)]">
          <thead>
            <tr className="border-b border-[var(--color-border)]">
              <th className="text-left py-2 pr-3 font-semibold text-[var(--color-text-primary)]" style={{fontFamily: "var(--font-mono)"}}>Element</th>
              <th className="text-left py-2 px-3 font-semibold text-[var(--color-text-primary)]" style={{fontFamily: "var(--font-mono)"}}>Principle</th>
              <th className="text-left py-2 px-3 font-semibold text-[var(--color-text-primary)]" style={{fontFamily: "var(--font-mono)"}}>Range</th>
              <th className="text-left py-2 pl-3 font-semibold text-[var(--color-text-primary)]" style={{fontFamily: "var(--font-mono)"}}>Typical Accuracy</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-[var(--color-border)]/50"><td className="py-2 pr-3 font-medium text-[var(--color-text-primary)]">Bimetallic</td><td className="py-2 px-3">Two bonded metals with different thermal expansion coefficients bend a spiral coil</td><td className="py-2 px-3" style={{fontFamily: "var(--font-mono)"}}>-30 to 350°C</td><td className="py-2 pl-3" style={{fontFamily: "var(--font-mono)"}}>±0.5–2.0% FS</td></tr>
            <tr className="border-b border-[var(--color-border)]/50"><td className="py-2 pr-3 font-medium text-[var(--color-text-primary)]">Filled System</td><td className="py-2 px-3">Liquid, gas, or vapor in a sealed bulb expands/contracts, moving Bourdon tube or bellows</td><td className="py-2 px-3" style={{fontFamily: "var(--font-mono)"}}>-40 to 600°C</td><td className="py-2 pl-3" style={{fontFamily: "var(--font-mono)"}}>±0.5–1.0% FS</td></tr>
            <tr className="border-b border-[var(--color-border)]/50"><td className="py-2 pr-3 font-medium text-[var(--color-text-primary)]">Gas-Actuated</td><td className="py-2 px-3">Inert gas (N₂) in bulb expands with temperature, actuating pressure element</td><td className="py-2 px-3" style={{fontFamily: "var(--font-mono)"}}>-30 to 600°C</td><td className="py-2 pl-3" style={{fontFamily: "var(--font-mono)"}}>Class 1.0 (DIN 16195)</td></tr>
            <tr><td className="py-2 pr-3 font-medium text-[var(--color-text-primary)]">Vapor Pressure</td><td className="py-2 px-3">Partial fill liquid vaporizes at process temp, creating vapor pressure</td><td className="py-2 px-3" style={{fontFamily: "var(--font-mono)"}}>0 to 250°C</td><td className="py-2 pl-3" style={{fontFamily: "var(--font-mono)"}}>±0.5–2.0% FS</td></tr>
          </tbody>
        </table>
      </div>
      <div className="p-4 rounded-lg border-l-4 border-amber-500 bg-amber-500/5">
        <p className="text-sm text-[var(--color-text-secondary)]">
          <strong className="text-amber-400">Key Advantage:</strong> Mechanical temperature gauges require no external power — 
          the measurement energy comes directly from the thermal expansion of the sensing element itself. 
          This makes them inherently reliable for local indication in hazardous areas.
        </p>
      </div>
    </>
  ),

  types: (
    <>
      <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
        <div className="rounded-xl p-5" style={{background: "var(--color-bg-raise)", border: "1px solid var(--color-border)"}}>
          <h3 className="text-sm font-bold text-[var(--color-text-primary)] mb-2" style={{fontFamily: "var(--font-display)"}}>1. Bimetallic Thermometers</h3>
          <p className="text-sm text-[var(--color-text-secondary)] mb-3">Two dissimilar metal strips bonded together (typically Invar and brass/steel) wound into a spiral or helix. The spiral coils/uncolls with temperature change, rotating the pointer.</p>
          <ul className="text-xs space-y-1 text-[var(--color-text-muted)]">
            <li><strong className="text-[var(--color-text-primary)]">Dial sizes:</strong> 63mm, 100mm, 160mm</li>
            <li><strong className="text-[var(--color-text-primary)]">Stem length:</strong> 100–600mm standard</li>
            <li><strong className="text-[var(--color-text-primary)]">Response time:</strong> 10–40 seconds</li>
            <li><strong className="text-[var(--color-text-primary)]">Use case:</strong> General local temp indication</li>
          </ul>
        </div>

        <div className="rounded-xl p-5" style={{background: "var(--color-bg-raise)", border: "1px solid var(--color-border)"}}>
          <h3 className="text-sm font-bold text-[var(--color-text-primary)] mb-2" style={{fontFamily: "var(--font-display)"}}>2. Filled-System Thermometers</h3>
          <p className="text-sm text-[var(--color-text-secondary)] mb-3">A bulb filled with liquid, gas, or vapor connected via capillary tube to a Bourdon tube or bellows element. Temperature change causes fill expansion, actuating the pointer.</p>
          <ul className="text-xs space-y-1 text-[var(--color-text-muted)]">
            <li><strong className="text-[var(--color-text-primary)]">Liquid-filled:</strong> Mercury (banned), organic liquids</li>
            <li><strong className="text-[var(--color-text-primary)]">Gas-filled:</strong> N₂, He for wide ranges</li>
            <li><strong className="text-[var(--color-text-primary)]">Capillary length:</strong> Up to 30m remotely</li>
            <li><strong className="text-[var(--color-text-primary)]">Use case:</strong> Remote reading, high temp</li>
          </ul>
        </div>

        <div className="rounded-xl p-5" style={{background: "var(--color-bg-raise)", border: "1px solid var(--color-border)"}}>
          <h3 className="text-sm font-bold text-[var(--color-text-primary)] mb-2" style={{fontFamily: "var(--font-display)"}}>3. Gas-Actuated Thermometers</h3>
          <p className="text-sm text-[var(--color-text-secondary)] mb-3">Inert gas (typically N₂) sealed in bulb and capillary. Gas pressure follows ideal gas law (PV=nRT), actuating a pressure element. Most linear of all mechanical types.</p>
          <ul className="text-xs space-y-1 text-[var(--color-text-muted)]">
            <li><strong className="text-[var(--color-text-primary)]">Class accuracy:</strong> Class 1.0 per DIN 16195</li>
            <li><strong className="text-[var(--color-text-primary)]">Linear output:</strong> Near-linear P vs T response</li>
            <li><strong className="text-[var(--color-text-primary)]">High temp:</strong> Up to 600°C</li>
            <li><strong className="text-[var(--color-text-primary)]">Use case:</strong> Process heaters, ovens, exhaust</li>
          </ul>
        </div>

        <div className="rounded-xl p-5" style={{background: "var(--color-bg-raise)", border: "1px solid var(--color-border)"}}>
          <h3 className="text-sm font-bold text-[var(--color-text-primary)] mb-2" style={{fontFamily: "var(--font-display)"}}>4. Vapor-Pressure Thermometers</h3>
          <p className="text-sm text-[var(--color-text-secondary)] mb-3">Bulb partially filled with a volatile liquid. The vapor pressure above the liquid is a function of temperature at the bulb, independent of ambient temperature at the indicator.</p>
          <ul className="text-xs space-y-1 text-[var(--color-text-muted)]">
            <li><strong className="text-[var(--color-text-primary)]">Ambient compensation:</strong> Inherent</li>
            <li><strong className="text-[var(--color-text-primary)]">Nonlinear scale:</strong> Expanded at low end</li>
            <li><strong className="text-[var(--color-text-primary)]">Low temp:</strong> Suitable below 0°C</li>
            <li><strong className="text-[var(--color-text-primary)]">Use case:</strong> Refrigeration, HVAC, ducts</li>
          </ul>
        </div>
      </div>
    </>
  ),

  specs: (
    <>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-[var(--color-text-secondary)]">
          <thead>
            <tr className="border-b border-[var(--color-border)]">
              <th className="text-left py-2 pr-3 font-semibold text-[var(--color-text-primary)]" style={{fontFamily: "var(--font-mono)"}}>Parameter</th>
              <th className="text-left py-2 px-3 font-semibold text-[var(--color-text-primary)]" style={{fontFamily: "var(--font-mono)"}}>Typical Value</th>
              <th className="text-left py-2 pl-3 font-semibold text-[var(--color-text-primary)]" style={{fontFamily: "var(--font-mono)"}}>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-[var(--color-border)]/50"><td className="py-2 pr-3 font-medium text-[var(--color-text-primary)]">Range</td><td className="py-2 px-3" style={{fontFamily: "var(--font-mono)"}}>-30 to 600°C</td><td className="py-2 pl-3">Depends on fill type; bimetallic max 350°C</td></tr>
            <tr className="border-b border-[var(--color-border)]/50"><td className="py-2 pr-3 font-medium text-[var(--color-text-primary)]">Accuracy</td><td className="py-2 px-3" style={{fontFamily: "var(--font-mono)"}}>Class 1.0 to 2.0</td><td className="py-2 pl-3">Per ASME B40.200 / DIN 16195</td></tr>
            <tr className="border-b border-[var(--color-border)]/50"><td className="py-2 pr-3 font-medium text-[var(--color-text-primary)]">Dial Size</td><td className="py-2 px-3" style={{fontFamily: "var(--font-mono)"}}>63, 100, 160mm</td><td className="py-2 pl-3">100mm for field, 160mm for control room</td></tr>
            <tr className="border-b border-[var(--color-border)]/50"><td className="py-2 pr-3 font-medium text-[var(--color-text-primary)]">Stem Material</td><td className="py-2 px-3" style={{fontFamily: "var(--font-mono)"}}>316 SS, Inconel 600</td><td className="py-2 pl-3">316 SS for general process, Inconel for high temp</td></tr>
            <tr className="border-b border-[var(--color-border)]/50"><td className="py-2 pr-3 font-medium text-[var(--color-text-primary)]">Process Connection</td><td className="py-2 px-3" style={{fontFamily: "var(--font-mono)"}}>1/2" NPT, 3/4" NPT</td><td className="py-2 pl-3">Direct mount or with thermowell</td></tr>
            <tr className="border-b border-[var(--color-border)]/50"><td className="py-2 pr-3 font-medium text-[var(--color-text-primary)]">Protection Class</td><td className="py-2 px-3" style={{fontFamily: "var(--font-mono)"}}>IP54, IP65</td><td className="py-2 pl-3">IP65 for outdoor/washdown areas</td></tr>
            <tr className="border-b border-[var(--color-border)]/50"><td className="py-2 pr-3 font-medium text-[var(--color-text-primary)]">Response Time</td><td className="py-2 px-3" style={{fontFamily: "var(--font-mono)"}}>10–90 seconds</td><td className="py-2 pl-3">Slower in thermowells; depends on stem insertion depth</td></tr>
            <tr><td className="py-2 pr-3 font-medium text-[var(--color-text-primary)]">Ambient Limit</td><td className="py-2 px-3" style={{fontFamily: "var(--font-mono)"}}>-20 to +70°C</td><td className="py-2 pl-3">At case; ambient compensation available</td></tr>
          </tbody>
        </table>
      </div>
    </>
  ),

  selection: (
    <>
      <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
        <div className="rounded-xl p-5" style={{background: "var(--color-bg-raise)", border: "1px solid var(--color-border)"}}>
          <h3 className="text-xs font-bold text-amber-400 uppercase tracking-[.08em] mb-3" style={{fontFamily: "var(--font-mono)"}}>Application Guide</h3>
          <ul className="text-sm space-y-2 text-[var(--color-text-secondary)]">
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-amber-500 flex-shrink-0" /><strong>Bimetallic:</strong> Best value for local indication -30 to 350°C. Use for general process where no remote transmission needed.</li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-amber-500 flex-shrink-0" /><strong>Filled System:</strong> Best for remote reading up to 30m. Choose gas-actuated for best linearity, vapor-pressure for ambient independence.</li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-amber-500 flex-shrink-0" /><strong>Capillary length:</strong> Use shortest possible length to minimize ambient temperature error. For long runs, specify ambient compensation.</li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-amber-500 flex-shrink-0" /><strong>Stem immersion:</strong> Minimum immersion depth = 10× stem diameter for accurate measurement per ASME PTC 19.3.</li>
          </ul>
        </div>
        <div className="rounded-xl p-5" style={{background: "var(--color-bg-raise)", border: "1px solid var(--color-border)"}}>
          <h3 className="text-xs font-bold text-amber-400 uppercase tracking-[.08em] mb-3" style={{fontFamily: "var(--font-mono)"}}>Material Compatibility</h3>
          <ul className="text-sm space-y-2 text-[var(--color-text-secondary)]">
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-amber-500 flex-shrink-0" /><strong>316 SS stem:</strong> General process, corrosive media</li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-amber-500 flex-shrink-0" /><strong>Inconel 600:</strong> High temp, sour gas</li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-amber-500 flex-shrink-0" /><strong>Teflon-coated:</strong> Highly corrosive, HCl, H₂SO₄</li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-amber-500 flex-shrink-0" /><strong>Thermowell material:</strong> Match stem material; use same alloy to prevent galvanic corrosion</li>
          </ul>
        </div>
      </div>
      <div className="p-4 rounded-lg border-l-4 border-amber-500 bg-amber-500/5 mt-6">
        <p className="text-sm text-[var(--color-text-secondary)]">
          <strong className="text-amber-400">Rule of Thumb:</strong> Select range so normal operating temperature sits at <strong>50–75% of full scale</strong>. 
          For process temperatures above 250°C, always use a thermowell to allow replacement without process shutdown.
        </p>
      </div>
    </>
  ),

  applications: (
    <>
      <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
        <div className="flex items-start gap-3 p-4 rounded-xl" style={{background: "var(--color-bg-raise)"}}><span className="text-2xl flex-shrink-0">🛢️</span><div><strong className="text-[var(--color-text-primary)]">Oil & Gas</strong><p className="text-sm text-[var(--color-text-muted)]">Storage tank temp, pipeline temp, compressor skids</p></div></div>
        <div className="flex items-start gap-3 p-4 rounded-xl" style={{background: "var(--color-bg-raise)"}}><span className="text-2xl flex-shrink-0">🧪</span><div><strong className="text-[var(--color-text-primary)]">Chemical</strong><p className="text-sm text-[var(--color-text-muted)]">Reactor jacket temp, heat exchanger inlet/outlet</p></div></div>
        <div className="flex items-start gap-3 p-4 rounded-xl" style={{background: "var(--color-bg-raise)"}}><span className="text-2xl flex-shrink-0">🔥</span><div><strong className="text-[var(--color-text-primary)]">Power</strong><p className="text-sm text-[var(--color-text-muted)]">Boiler flue gas, steam temp, condenser coolant</p></div></div>
        <div className="flex items-start gap-3 p-4 rounded-xl" style={{background: "var(--color-bg-raise)"}}><span className="text-2xl flex-shrink-0">💊</span><div><strong className="text-[var(--color-text-primary)]">Pharma</strong><p className="text-sm text-[var(--color-text-muted)]">Autoclave temp, clean steam, storage monitoring</p></div></div>
        <div className="flex items-start gap-3 p-4 rounded-xl" style={{background: "var(--color-bg-raise)"}}><span className="text-2xl flex-shrink-0">🍺</span><div><strong className="text-[var(--color-text-primary)]">Food & Bev</strong><p className="text-sm text-[var(--color-text-muted)]">Pasteurization, cooking vessels, cold storage</p></div></div>
        <div className="flex items-start gap-3 p-4 rounded-xl" style={{background: "var(--color-bg-raise)"}}><span className="text-2xl flex-shrink-0">🌬️</span><div><strong className="text-[var(--color-text-primary)]">HVAC</strong><p className="text-sm text-[var(--color-text-muted)]">Duct temp, chilled water, boiler supply/return</p></div></div>
      </div>
    </>
  ),

  advantages: (
    <>
      <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
        <div className="rounded-xl p-5" style={{background: "rgba(0,230,118,0.05)", border: "1px solid rgba(0,230,118,0.2)"}}>
          <h3 className="text-xs font-bold text-green-400 uppercase tracking-[.08em] mb-3" style={{fontFamily: "var(--font-mono)"}}>Advantages</h3>
          <ul className="text-sm space-y-2 text-[var(--color-text-secondary)]">
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-green-500 flex-shrink-0" />No external power required (intrinsically safe)</li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-green-500 flex-shrink-0" />Direct local reading, no signal processing</li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-green-500 flex-shrink-0" />Rugged, simple, low maintenance</li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-green-500 flex-shrink-0" />Remote indication up to 30m (filled system)</li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-green-500 flex-shrink-0" />Lower cost than RTD/TC transmitter assemblies</li>
          </ul>
        </div>
        <div className="rounded-xl p-5" style={{background: "rgba(255,61,92,0.05)", border: "1px solid rgba(255,61,92,0.2)"}}>
          <h3 className="text-xs font-bold text-red-400 uppercase tracking-[.08em] mb-3" style={{fontFamily: "var(--font-mono)"}}>Limitations</h3>
          <ul className="text-sm space-y-2 text-[var(--color-text-secondary)]">
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-red-500 flex-shrink-0" />No electronic output (local indication only)</li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-red-500 flex-shrink-0" />Slower response time vs RTD/thermocouple</li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-red-500 flex-shrink-0" />Long capillary runs add ambient temp error</li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-red-500 flex-shrink-0" />Limited range vs thermocouples (max 600°C)</li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-red-500 flex-shrink-0" />Lower accuracy (±1–2%) vs RTD (±0.1%)</li>
          </ul>
        </div>
      </div>
    </>
  ),

  installation: (
    <>
      <ul className="text-sm space-y-3 text-[var(--color-text-secondary)]">
        <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-amber-500 flex-shrink-0" /><strong>Thermowell required</strong> for process pressures above 50 bar or temperatures above 250°C. Use tapered or straight-shank per ASME PTC 19.3.</li>
        <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-amber-500 flex-shrink-0" /><strong>Stem immersion depth:</strong> Minimum 75mm in liquids, 150mm in gases. The sensing element must be fully immersed in the process stream.</li>
        <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-amber-500 flex-shrink-0" /><strong>Orientation:</strong> Mount stem vertically or angled downward toward process. Avoid horizontal mount with tip below connection (trapped air pocket).</li>
        <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-amber-500 flex-shrink-0" /><strong>Capillary protection:</strong> For filled-system types, protect capillary from mechanical damage with conduit or armored tubing. Avoid sharp bends (&lt;50mm radius).</li>
        <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-amber-500 flex-shrink-0" /><strong>Calibration:</strong> Use dry-block calibrator or oil bath at minimum 3 points (0%, 50%, 100% FS). Adjust zero screw if pointer is offset. Recalibrate annually.</li>
        <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-amber-500 flex-shrink-0" /><strong>Common faults:</strong> Sticking pointer (dirt/damage), fogged window (seal failure), loose bezel (vibration), liquid fill loss (filled-system).</li>
      </ul>
    </>
  ),

  conclusion: (
    <>
      <p className="mb-4">
        Mechanical temperature gauges remain essential for local temperature indication across virtually every process industry. 
        Their simplicity, reliability, and intrinsic safety make them the first choice for local reads. Proper selection requires understanding:
      </p>
      <ol className="text-sm space-y-2 text-[var(--color-text-secondary)] list-decimal list-inside mb-4">
        <li><strong>Temperature range</strong> — match gauge type to actual process temps</li>
        <li><strong>Accuracy needed</strong> — Class 1.0 for control, Class 2.0 for indication</li>
        <li><strong>Remote reading distance</strong> — capillary length vs bimetallic direct mount</li>
        <li><strong>Process conditions</strong> — pressure, corrosion, vibration, ambient</li>
        <li><strong>Thermowell requirement</strong> — always for high temp/pressure or critical service</li>
      </ol>
      <div className="p-4 rounded-lg border-l-4 border-amber-500 bg-amber-500/5">
        <p className="text-sm text-[var(--color-text-secondary)]">
          <strong className="text-amber-400">Final Field Note:</strong> The most accurate temperature gauge is useless if the stem isn't fully immersed. 
          Always verify insertion depth during installation. For steam service, always use a thermowell with conductive paste. 
          And remember — a bimetallic thermometer gives you local read, not a 4-20 mA signal. Use a temperature transmitter when you need remote monitoring.
        </p>
      </div>
    </>
  ),
};

// ─── Sources ──────────────────────────────────────────────────
const sources = [
  { label: "ASME B40.200", scope: "Thermometers - bimetallic, filled-system, and vapor pressure" },
  { label: "ASME PTC 19.3", scope: "Thermowells - performance test codes" },
  { label: "DIN 16195", scope: "Industrial temperature gauges - dimensions and accuracy classes" },
  { label: "IEC 60751", scope: "Industrial platinum resistance thermometers and sensors" },
  { label: "ISA-5.1-2009", scope: "Instrumentation symbols and identification" },
  { label: "Inst Tools", scope: "Temperature measurement comparison and sensor reference data" },
];

// ─── Sections Config ──────────────────────────────────────────
const sections = [
  {
    id: "principles",
    title: "Operating Principles",
    icon: "⚙️",
    content: SectionContent.principles,
    image: (
      <div className="relative max-w-[300px] mx-auto">
        <img
          src="/bimetallic-thermometer-diagram.svg"
          alt="Cross-section of a bimetallic dial thermometer showing the dial face with temperature scale, pointer, stainless steel sheath stem, and internal bimetallic coil sensing element"
          className="w-full h-auto rounded-xl opacity-90 hover:opacity-100 transition-opacity duration-300"
          style={{filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.3))"}}
        />
        <p className="mt-3 text-center text-sm text-[var(--color-text-muted)]">
          Bimetallic dial thermometer construction — dial, pointer, stem, and bimetallic sensing coil
        </p>
      </div>
    ),
  },
  {
    id: "types",
    title: "Types of Temperature Gauges",
    icon: "📐",
    content: SectionContent.types,
  },
  {
    id: "specs",
    title: "Key Specifications",
    icon: "🎯",
    content: SectionContent.specs,
    chart: <TemperatureRangeChart />,
  },
  {
    id: "selection",
    title: "Selection Guide",
    icon: "✅",
    content: SectionContent.selection,
  },
  {
    id: "applications",
    title: "Applications",
    icon: "🏭",
    content: SectionContent.applications,
  },
  {
    id: "advantages",
    title: "Advantages vs. Limitations",
    icon: "⚖️",
    content: SectionContent.advantages,
  },
  {
    id: "installation",
    title: "Installation & Calibration",
    icon: "🔧",
    content: SectionContent.installation,
  },
  {
    id: "conclusion",
    title: "Conclusion",
    icon: "🏁",
    content: SectionContent.conclusion,
  },
];

// ─── Page ──────────────────────────────────────────────────────
export default function TemperatureGaugesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TechArticle",
        "@id": "https://ihub-eta.vercel.app/knowledge/instrumentation/temperature-gauges#article",
        "headline": seo.title,
        "description": seo.description,
        "image": "https://ihub-eta.vercel.app/bimetallic-thermometer-diagram.svg",
        "author": { "@type": "Person", "name": "Satish Kumar Jaiswal", "jobTitle": "Lead I&C Commissioning Engineer" },
        "publisher": { "@type": "Organization", "name": "Instrumentation Hub", "logo": { "@type": "ImageObject", "url": "https://ihub-eta.vercel.app/favicon.ico" } },
        "datePublished": "2025-01-15",
        "dateModified": "2025-01-15",
        "mainEntityOfPage": { "@type": "WebPage", "@id": "https://ihub-eta.vercel.app/knowledge/instrumentation/temperature-gauges" },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ihub-eta.vercel.app/knowledge/instrumentation/temperature-gauges#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "item": { "@id": "https://ihub-eta.vercel.app/knowledge", "name": "Knowledge Base" } },
          { "@type": "ListItem", "position": 2, "item": { "@id": "https://ihub-eta.vercel.app/knowledge/instrumentation", "name": "Instrumentation" } },
          { "@type": "ListItem", "position": 3, "item": { "@id": "https://ihub-eta.vercel.app/knowledge/instrumentation/temperature-gauges", "name": "Temperature Gauges" } },
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
        documentVersion="Document Version 1.0 | Based on ASME B40.200, DIN 16195, instrumentationtools.com, and field experience"
        footerNote={undefined}
      />
    </>
  );
}