"use client";

import InstrumentArticleLayout, {
  NAMURBandChart,
  AccuracyBarChart,
  PressureRangeChart,
} from "@/components/InstrumentArticleLayout";
import PageMeta from "@/components/PageMeta";

// ─── SEO Config ─────────────────────────────────────────────────
const seo = {
  title: "Pressure Transmitters",
  description:
    "Smart pressure transmitters guide covering 4-20mA HART, piezoresistive sensing, calibration, NAMUR NE43 fault levels, and industrial applications.",
  canonical: "https://ihub-eta.vercel.app/knowledge/instrumentation/pressure-transmitters",
  image: "/pressure-transmitter-diagram.svg",
  keywords:
    "pressure transmitter, smart transmitter, HART, Foundation Fieldbus, piezoresistive, capacitive, NAMUR NE43, calibration, deadweight tester, 4-20mA, DP transmitter, gauge pressure, absolute pressure, multivariable transmitter, silicon diaphragm, strain gauge",
};

const meta = {
  title: seo.title,
  description:
    "Smart measurement devices for 4–20 mA transmission with HART/Foundation Fieldbus protocols. Covers sensing principles, calibration, NAMUR NE43 fault levels, and industrial applications.",
  category: "Instrumentation Guide",
  breadcrumb: [
    { label: "Knowledge Base", href: "/knowledge" },
    { label: "Instrumentation", href: "/knowledge/instrumentation" },
    { label: "Pressure Transmitters", href: "/knowledge/instrumentation/pressure-transmitters" },
  ],
  metaTags: [
    { label: "4–20 mA + HART", color: "amber" as const },
    { label: "Piezoresistive · Capacitive", color: "green" as const },
  ],
};

// ─── SVG Diagram ────────────────────────────────────────────────
const TransmitterDiagram = () => (
  <div className="relative max-w-[600px] mx-auto">
    <img
      src="/pressure-transmitter-diagram.svg"
      alt="Cross-section of a smart pressure transmitter showing process seal, silicon diaphragm sensing element, and electronics housing with HART communication"
      className="w-full h-auto rounded-xl opacity-90 hover:opacity-100 transition-opacity duration-300"
      style={{ filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.3))" }}
    />
    <p className="mt-3 text-center text-sm text-[var(--color-text-muted)]">
      Cross-section showing process seal, silicon diaphragm sensing element, and electronics housing with HART
    </p>
  </div>
);

// ─── Section Content ───────────────────────────────────────────
const SectionContent = {
  // ────── 1. HERO / QUICK FACTS ──────────────────────────────────
  quickFacts: (
    <>
      <p>
        A <strong>pressure transmitter</strong> (also called a pressure transducer or pressure sensor) is an
        electronic instrument that converts a physical pressure — the force per unit area of a gas or liquid —
        into a standardized electrical signal, most commonly a <strong>4–20 mA</strong> analog current loop. Unlike
        a simple pressure switch (which just opens or closes a contact at a setpoint) or a local pressure gauge
        (which only displays pressure on a dial), a transmitter sends a continuous, proportional signal to a
        distant control system — a <strong>DCS</strong> (Distributed Control System), <strong>PLC</strong>
        (Programmable Logic Controller), or <strong>SCADA</strong> (Supervisory Control and Data Acquisition) —
        enabling real-time monitoring, alarming, historical trending, and closed-loop control.
      </p>
      <p>
        The term &ldquo;smart&rdquo; or &ldquo;intelligent&rdquo; transmitter refers to devices that incorporate
        a microprocessor, digital communication (e.g., HART, Foundation Fieldbus, Profibus PA), and on-board
        diagnostics. These transmitters can be remotely configured, re-ranged, and diagnosed without sending a
        technician to the field — a massive productivity advantage in large plants such as oil refineries,
        chemical complexes, and power stations.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-5">
        {[
          { label: "Output Signal", value: "4–20 mA + HART / FF / PA", detail: "Analog + digital" },
          { label: "Accuracy Range", value: "±0.05–0.5% span", detail: "Depends on element type" },
          { label: "Supply Voltage", value: "10–30 VDC", detail: "Loop-powered typical" },
          { label: "Pressure Range", value: "0–1000 bar", detail: "Up to 4000 bar special" },
        ].map((f) => (
          <div
            key={f.label}
            className="rounded-xl p-4 text-center"
            style={{ background: "var(--color-bg-raise)", border: "1px solid var(--color-border)" }}
          >
            <div className="text-[10px] uppercase tracking-[.08em] text-[var(--color-text-muted)] mb-1" style={{ fontFamily: "var(--font-mono)" }}>
              {f.label}
            </div>
            <div className="text-base font-bold text-[var(--color-text-primary)]" style={{ fontFamily: "var(--font-display)" }}>
              {f.value}
            </div>
            <div className="text-xs text-[var(--color-text-muted)] mt-1">{f.detail}</div>
          </div>
        ))}
      </div>
    </>
  ),

  // ────── 2. WORKING PRINCIPLE ──────────────────────────────────
  principles: (
    <>
      <p>
        At its core, a pressure transmitter is a <strong>transducer</strong> — a device that converts one form
        of energy into another. Here, the mechanical energy of pressure (force per unit area) is converted into
        an electrical signal proportional to the applied pressure. This conversion happens in two stages:
      </p>
      <ol className="space-y-3 list-decimal list-inside text-sm text-[var(--color-text-secondary)]">
        <li>
          <strong>Sensing:</strong> The process pressure acts on a <strong>diaphragm</strong> — a thin, flexible
          membrane made of stainless steel, ceramic, or silicon. The pressure pushes the diaphragm inward,
          causing a tiny deflection (measured in micrometers). This deflection is the mechanical response to
          pressure.
        </li>
        <li>
          <strong>Transduction:</strong> The deflection is converted into an electrical signal by one of several
          physical effects: a change in <strong>resistance</strong> (piezoresistive), a change in{" "}
          <strong>capacitance</strong> (capacitive), or a change in <strong>resonant frequency</strong>
          (resonant). The on-board electronics amplify, linearize, temperature-compensate, and convert this raw
          signal into a standardized 4–20 mA current loop or a digital protocol message.
        </li>
      </ol>
      <p>
        The 4–20 mA standard is used so widely because current signals are <strong>immune to voltage drops</strong>
        along long cable runs — unlike a voltage signal (e.g., 0–10 V), which degrades with distance. In a
        current loop, the same current flows through the entire circuit regardless of wire resistance, as long
        as the power supply voltage is sufficient to overcome the total loop resistance. This makes 4–20 mA
        reliable over distances of several kilometres.
      </p>

      <h3 className="text-lg font-bold text-[var(--color-text-primary)] mt-6 mb-3" style={{ fontFamily: "var(--font-display)" }}>
        Sensing Element Technologies
      </h3>
      <p>
        Four main physical principles are used to convert diaphragm deflection into an electrical signal. Each
        offers different trade-offs among accuracy, range, cost, and environmental tolerance.
      </p>

      <div className="overflow-x-auto my-4">
        <table className="w-full text-sm text-[var(--color-text-secondary)]">
          <thead>
            <tr className="border-b border-[var(--color-border)]">
              <th className="text-left py-2 pr-3 font-semibold text-[var(--color-text-primary)]" style={{ fontFamily: "var(--font-mono)" }}>
                Element
              </th>
              <th className="text-left py-2 px-3 font-semibold text-[var(--color-text-primary)]" style={{ fontFamily: "var(--font-mono)" }}>
                Principle
              </th>
              <th className="text-left py-2 px-3 font-semibold text-[var(--color-text-primary)]" style={{ fontFamily: "var(--font-mono)" }}>
                Typical Range
              </th>
              <th className="text-left py-2 pl-3 font-semibold text-[var(--color-text-primary)]" style={{ fontFamily: "var(--font-mono)" }}>
                Accuracy
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-[var(--color-border)]/50">
              <td className="py-2 pr-3 font-medium text-[var(--color-text-primary)]">Piezoresistive</td>
              <td className="py-2 px-3">Silicon diaphragm strain gauge</td>
              <td className="py-2 px-3" style={{ fontFamily: "var(--font-mono)" }}>0–1000 bar</td>
              <td className="py-2 pl-3" style={{ fontFamily: "var(--font-mono)" }}>±0.1–0.5%</td>
            </tr>
            <tr className="border-b border-[var(--color-border)]/50">
              <td className="py-2 pr-3 font-medium text-[var(--color-text-primary)]">Capacitive</td>
              <td className="py-2 px-3">Diaphragm-parallel plate capacitance</td>
              <td className="py-2 px-3" style={{ fontFamily: "var(--font-mono)" }}>0–100 bar</td>
              <td className="py-2 pl-3" style={{ fontFamily: "var(--font-mono)" }}>±0.075%</td>
            </tr>
            <tr className="border-b border-[var(--color-border)]/50">
              <td className="py-2 pr-3 font-medium text-[var(--color-text-primary)]">Resonant</td>
              <td className="py-2 px-3">Quartz crystal frequency shift</td>
              <td className="py-2 px-3" style={{ fontFamily: "var(--font-mono)" }}>0–400 bar</td>
              <td className="py-2 pl-3" style={{ fontFamily: "var(--font-mono)" }}>±0.05%</td>
            </tr>
            <tr>
              <td className="py-2 pr-3 font-medium text-[var(--color-text-primary)]">Piezoelectric</td>
              <td className="py-2 px-3">Crystal charge under pressure</td>
              <td className="py-2 px-3">Dynamic only</td>
              <td className="py-2 pl-3">High frequency</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="p-4 rounded-xl mb-4" style={{ background: "var(--color-bg-raise)", border: "1px solid var(--color-border)" }}>
        <h4 className="text-sm font-bold text-[var(--color-text-primary)] mb-2" style={{ fontFamily: "var(--font-display)" }}>
          🔬 Why These Principles Work
        </h4>
        <ul className="text-sm space-y-2 text-[var(--color-text-secondary)]">
          <li>
            <strong>Piezoresistive:</strong> When a silicon crystal is physically deformed, the distances between
            its atoms change, which alters the material&rsquo;s electrical resistivity. By diffusing four
            resistors into a silicon diaphragm in a <strong>Wheatstone bridge</strong> configuration, the tiny
            resistance changes (on the order of milliohms) are converted into a measurable voltage proportional
            to pressure. The bridge design also cancels out temperature effects automatically — all four
            resistors experience the same temperature, so the net output stays stable.
          </li>
          <li>
            <strong>Capacitive:</strong> A capacitor&rsquo;s capacitance depends on the gap between its two
            plates. In a capacitive pressure sensor, the diaphragm itself acts as one plate, while a fixed
            electrode behind it acts as the other. As pressure pushes the diaphragm closer to the fixed plate,
            the capacitance increases. The relationship is non-linear (C ∝ 1/d), but the transmitter&rsquo;s
            microprocessor linearizes the output digitally. Capacitive sensors excel at low pressure ranges
            (sub-atmospheric to a few bar) because the deflection is more easily measured.
          </li>
          <li>
            <strong>Resonant:</strong> A quartz crystal or silicon resonator has a natural vibration frequency
            that depends on its physical dimensions. When pressure is applied, the crystal is stressed, its
            dimensions change slightly, and its resonant frequency shifts. Frequency is the easiest physical
            quantity to measure with extreme precision (count zero-crossings over time), which is why resonant
            sensors achieve the highest accuracy (±0.05%). They are however more expensive and sensitive to
            vibration.
          </li>
          <li>
            <strong>Piezoelectric:</strong> Certain crystals (quartz, tourmaline, lead zirconate titanate / PZT)
            generate an electric charge when mechanically stressed. This charge decays over time (the sensor has
            a finite &ldquo;RC time constant&rdquo;), so piezoelectric sensors are only suitable for dynamic
            pressure changes — they cannot measure a steady pressure. They excel in applications like
            combustion pressure analysis, hydraulic spike detection, and acoustic pressure sensing.
          </li>
        </ul>
      </div>
    </>
  ),

  // ────── 3. TYPES / VARIANTS ───────────────────────────────────
  types: (
    <>
      <p>
        Pressure transmitters are classified by the <strong>reference pressure</strong> they use and the{" "}
        <strong>number of variables</strong> they measure. The choice of type depends on the process
        requirement: what do you need to compare the pressure against?
      </p>
      <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mt-4">
        <div
          className="rounded-xl p-5"
          style={{ background: "var(--color-bg-raise)", border: "1px solid var(--color-border)" }}
        >
          <h3 className="text-sm font-bold text-[var(--color-text-primary)] mb-2" style={{ fontFamily: "var(--font-display)" }}>
            Differential Pressure (DP)
          </h3>
          <p className="text-sm text-[var(--color-text-secondary)] mb-2">
            Two ports measure ΔP across an orifice, nozzle, venturi, or other primary flow element. The
            pressure drop across the restriction is proportional to the square of the flow rate
            (Bernoulli&rsquo;s principle: <strong>ΔP ∝ Q²</strong>). This is the most common method for
            industrial flow measurement worldwide.
          </p>
          <div className="text-xs text-[var(--color-text-muted)]">
            Use case: Flow measurement with DP meters (ISO 5167)
          </div>
        </div>
        <div
          className="rounded-xl p-5"
          style={{ background: "var(--color-bg-raise)", border: "1px solid var(--color-border)" }}
        >
          <h3 className="text-sm font-bold text-[var(--color-text-primary)] mb-2" style={{ fontFamily: "var(--font-display)" }}>
            Absolute Pressure
          </h3>
          <p className="text-sm text-[var(--color-text-secondary)] mb-2">
            The sensing element&rsquo;s reference side is evacuated and sealed under vacuum (a &ldquo;sealed
            reference chamber&rdquo;). This means the output is referenced to <strong>absolute zero pressure</strong>,
            unaffected by changes in barometric pressure. Essential for applications where the atmospheric
            pressure varies (e.g., altitude compensation, vacuum distillation).
          </p>
          <div className="text-xs text-[var(--color-text-muted)]">
            Use case: Tank vapor space, altitude compensation, vacuum measurement
          </div>
        </div>
        <div
          className="rounded-xl p-5"
          style={{ background: "var(--color-bg-raise)", border: "1px solid var(--color-border)" }}
        >
          <h3 className="text-sm font-bold text-[var(--color-text-primary)] mb-2" style={{ fontFamily: "var(--font-display)" }}>
            Gauge (Relative) Pressure
          </h3>
          <p className="text-sm text-[var(--color-text-secondary)] mb-2">
            The reference side is vented to the atmosphere. The transmitter reads the <strong>difference</strong>{" "}
            between the process pressure and the local ambient atmospheric pressure. This is the most common
            configuration for general industrial processes because most vessels and pipes operate relative to
            the surrounding atmosphere.
          </p>
          <div className="text-xs text-[var(--color-text-muted)]">
            Use case: Vessel, piping, pump suction/discharge, compressor stages
          </div>
        </div>
        <div
          className="rounded-xl p-5"
          style={{ background: "var(--color-bg-raise)", border: "1px solid var(--color-border)" }}
        >
          <h3 className="text-sm font-bold text-[var(--color-text-primary)] mb-2" style={{ fontFamily: "var(--font-display)" }}>
            Multivariable
          </h3>
          <p className="text-sm text-[var(--color-text-secondary)] mb-2">
            A single device that measures <strong>differential pressure, static (line) pressure, and process
            temperature</strong> simultaneously. This is crucial for mass flow calculations where the fluid
            density changes with temperature and pressure — for example, steam flow measurement requires
            density compensation using the steam table equations (IAPWS-IF97).
          </p>
          <div className="text-xs text-[var(--color-text-muted)]">
            Use case: Steam flow (density compensation), natural gas custody transfer, flare gas metering
          </div>
        </div>
      </div>
    </>
  ),

  // ────── 4. KEY SPECIFICATIONS ─────────────────────────────────
  specs: (
    <>
      <p>
        Selecting the right pressure transmitter requires understanding the key specification parameters.
        The most common mistake is oversizing the range — a transmitter used at 10% of its full scale has
        effectively 10× worse accuracy than one used at 50–75% of its range. Always select a range where the
        normal operating pressure falls between <strong>50% and 75% of the transmitter&rsquo;s full scale
        (URL — Upper Range Limit)</strong>. Also, the maximum working pressure (MWP) should never exceed 65%
        of the transmitter&rsquo;s rated overpressure limit.
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-[var(--color-text-secondary)]">
          <thead>
            <tr className="border-b border-[var(--color-border)]">
              <th className="text-left py-2 pr-3 font-semibold text-[var(--color-text-primary)]" style={{ fontFamily: "var(--font-mono)" }}>
                Parameter
              </th>
              <th className="text-left py-2 px-3 font-semibold text-[var(--color-text-primary)]" style={{ fontFamily: "var(--font-mono)" }}>
                Typical Value
              </th>
              <th className="text-left py-2 pl-3 font-semibold text-[var(--color-text-primary)]" style={{ fontFamily: "var(--font-mono)" }}>
                Notes
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-[var(--color-border)]/50">
              <td className="py-2 pr-3 font-medium text-[var(--color-text-primary)]">Range</td>
              <td className="py-2 px-3" style={{ fontFamily: "var(--font-mono)" }}>0–1000 bar</td>
              <td className="py-2 pl-3">Span selectable within sensor limits; select 50% above max working pressure</td>
            </tr>
            <tr className="border-b border-[var(--color-border)]/50">
              <td className="py-2 pr-3 font-medium text-[var(--color-text-primary)]">Accuracy</td>
              <td className="py-2 px-3" style={{ fontFamily: "var(--font-mono)" }}>±0.05–0.5% span</td>
              <td className="py-2 pl-3">Depends on sensing element type; resonant ±0.05%, capacitive ±0.075%, piezoresistive ±0.1–0.5%</td>
            </tr>
            <tr className="border-b border-[var(--color-border)]/50">
              <td className="py-2 pr-3 font-medium text-[var(--color-text-primary)]">Output</td>
              <td className="py-2 px-3" style={{ fontFamily: "var(--font-mono)" }}>4–20 mA + HART</td>
              <td className="py-2 pl-3">Digital: Foundation Fieldbus, Profibus PA, WirelessHART</td>
            </tr>
            <tr className="border-b border-[var(--color-border)]/50">
              <td className="py-2 pr-3 font-medium text-[var(--color-text-primary)]">Supply Voltage</td>
              <td className="py-2 px-3" style={{ fontFamily: "var(--font-mono)" }}>12–36 VDC</td>
              <td className="py-2 pl-3">10–30 VDC typical for loop power; higher voltage needed for longer loops</td>
            </tr>
            <tr className="border-b border-[var(--color-border)]/50">
              <td className="py-2 pr-3 font-medium text-[var(--color-text-primary)]">Process Connection</td>
              <td className="py-2 px-3" style={{ fontFamily: "var(--font-mono)" }}>1/2&Prime; NPT, BSP, flanged</td>
              <td className="py-2 pl-3">1/4&Prime; NPT for low pressure; sanitary connections (Tri-Clamp) for pharma/food</td>
            </tr>
            <tr className="border-b border-[var(--color-border)]/50">
              <td className="py-2 pr-3 font-medium text-[var(--color-text-primary)]">Temp Limits</td>
              <td className="py-2 px-3" style={{ fontFamily: "var(--font-mono)" }}>-40 to +85&deg;C</td>
              <td className="py-2 pl-3">-20 to +60&deg;C standard; high-temp models with remote diaphragm seals up to 400&deg;C</td>
            </tr>
            <tr className="border-b border-[var(--color-border)]/50">
              <td className="py-2 pr-3 font-medium text-[var(--color-text-primary)]">Protection Class</td>
              <td className="py-2 px-3" style={{ fontFamily: "var(--font-mono)" }}>IP65, IP66, IP67</td>
              <td className="py-2 pl-3">IP67 for submersion risk; NEMA 4X for corrosive washdown environments</td>
            </tr>
            <tr>
              <td className="py-2 pr-3 font-medium text-[var(--color-text-primary)]">Hazardous Area</td>
              <td className="py-2 px-3" style={{ fontFamily: "var(--font-mono)" }}>ATEX, IECEx, FM, CSA</td>
              <td className="py-2 pl-3">Intrinsically safe (Ex ia) for Zone 0/1; flameproof (Ex d) for Zone 1/2</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  ),

  // ────── 5. NAMUR NE43 & 4–20 mA SIGNAL LEVELS ─────────────────
  namur: (
    <>
      <p>
        The <strong>4–20 mA analog signal</strong> is the backbone of industrial process control. The key
        insight is that 4 mA represents the <strong>Lower Range Value (LRV)</strong> — the minimum pressure
        in the configured span — and 20 mA represents the <strong>Upper Range Value (URV)</strong>. The
        signal is linear: if the pressure is at 50% of the configured span, the output is exactly 12 mA
        (midpoint of the 4–20 mA scale).
      </p>
      <p>
        But why 4 mA and not 0 mA? The <strong>live zero</strong> concept (4 mA instead of 0 mA) serves two
        critical purposes:
      </p>
      <ul className="text-sm space-y-2 text-[var(--color-text-secondary)] list-disc list-inside">
        <li>
          <strong>Loop integrity check:</strong> If the loop current drops to 0 mA, the control system knows
          there is a <strong>wire break</strong>, a failed power supply, or an open circuit — not a legitimate
          zero-pressure reading. A 0 mA reading is always a fault.
        </li>
        <li>
          <strong>Transmitter power:</strong> The 4 mA baseline provides enough power for the transmitter&rsquo;s
          electronics to operate. The total loop power is P = V<sub>supply</sub> × I, so at 4 mA, a 24 V supply
          delivers 96 mW — sufficient for the microprocessor, ADC, and HART modem.
        </li>
      </ul>

      <h3 className="text-lg font-bold text-[var(--color-text-primary)] mt-5 mb-3" style={{ fontFamily: "var(--font-display)" }}>
        NAMUR NE43 Fault Signalling
      </h3>
      <p>
        The <strong>NAMUR NE43</strong> standard (published by the User Association of Automation Technology
        in Process Industries) defines the allowed signal ranges for 4–20 mA transmitters and, critically,
        the <strong>fault current levels</strong> that tell the control system when something is wrong with
        the sensor or electronics — not the process:
      </p>
      <div className="grid sm:grid-cols-3 gap-3 my-4">
        <div className="rounded-xl p-4 text-center" style={{ background: "rgba(255,61,92,0.08)", border: "1px solid rgba(255,61,92,0.2)" }}>
          <div className="text-2xl font-bold text-red-400" style={{ fontFamily: "var(--font-mono)" }}>&lt; 3.6 mA</div>
          <div className="text-xs text-[var(--color-text-muted)] mt-1">Low Alarm / Fault</div>
          <div className="text-[10px] text-[var(--color-text-muted)] mt-1">Sensor failure, open circuit, or self-diagnostic trip</div>
        </div>
        <div className="rounded-xl p-4 text-center" style={{ background: "rgba(0,230,118,0.08)", border: "1px solid rgba(0,230,118,0.2)" }}>
          <div className="text-2xl font-bold text-green-400" style={{ fontFamily: "var(--font-mono)" }}>3.8–20.5 mA</div>
          <div className="text-xs text-[var(--color-text-muted)] mt-1">Normal Operating Range</div>
          <div className="text-[10px] text-[var(--color-text-muted)] mt-1">Includes 3.8 mA for LRV tracking and 20.5 mA for URV tracking</div>
        </div>
        <div className="rounded-xl p-4 text-center" style={{ background: "rgba(255,61,92,0.08)", border: "1px solid rgba(255,61,92,0.2)" }}>
          <div className="text-2xl font-bold text-red-400" style={{ fontFamily: "var(--font-mono)" }}>&gt; 21.0 mA</div>
          <div className="text-xs text-[var(--color-text-muted)] mt-1">High Alarm / Fault</div>
          <div className="text-[10px] text-[var(--color-text-muted)] mt-1">Electronics failure, shorted sensor, or over-range diagnostic</div>
        </div>
      </div>
      <p>
        Note that the normal operating range extends slightly <em>below</em> 4 mA (to 3.8 mA) and <em>above</em>{" "}
        20 mA (to 20.5 mA). This allows the transmitter to track process values that go slightly out of the
        configured range without immediately tripping a fault alarm. Only when the signal drops below 3.6 mA
        or rises above 21 mA does the control system declare a <strong>device fault</strong>. This is a
        critical distinction: low/high process alarms are detected by the DCS/PLC based on the 4–20 mA value
        relative to the configured LRV/URV, while NAMUR NE43 faults indicate a <strong>device malfunction</strong>,
        not a process condition.
      </p>
    </>
  ),

  // ────── 6. APPLICATIONS ───────────────────────────────────────
  applications: (
    <>
      <p>
        Pressure transmitters are found in virtually every industrial process. The application determines the
        type of transmitter, the materials of construction, the accuracy class, and the hazardous area
        certification required. Below are the major industries and their typical pressure measurement needs.
      </p>
      <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 mt-4">
        <div className="flex items-start gap-3 p-4 rounded-xl" style={{ background: "var(--color-bg-raise)" }}>
          <span className="text-2xl flex-shrink-0">🛢️</span>
          <div>
            <strong className="text-[var(--color-text-primary)]">Oil &amp; Gas</strong>
            <p className="text-sm text-[var(--color-text-muted)]">
              Wellhead pressure monitoring, separator DP for three-phase separation, pipeline custody transfer
              (multivariable with density compensation), flare gas metering, and HIPPS (High Integrity Pressure
              Protection Systems).
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3 p-4 rounded-xl" style={{ background: "var(--color-bg-raise)" }}>
          <span className="text-2xl flex-shrink-0">🧪</span>
          <div>
            <strong className="text-[var(--color-text-primary)]">Chemical</strong>
            <p className="text-sm text-[var(--color-text-muted)]">
              Reactor pressure control (exothermic reactions need fast-responding transmitters), scrubber DP
              for packed column monitoring, pump protection against dead-head or cavitation, and filter DP
              for catalyst bed health.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3 p-4 rounded-xl" style={{ background: "var(--color-bg-raise)" }}>
          <span className="text-2xl flex-shrink-0">⚡</span>
          <div>
            <strong className="text-[var(--color-text-primary)]">Power</strong>
            <p className="text-sm text-[var(--color-text-muted)]">
              Boiler drum level measurement (DP transmitter with wet leg / dry leg configuration), steam header
              pressure for turbine inlet control, condenser vacuum, and BFP (Boiler Feed Pump) recirculation
              flow.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3 p-4 rounded-xl" style={{ background: "var(--color-bg-raise)" }}>
          <span className="text-2xl flex-shrink-0">💊</span>
          <div>
            <strong className="text-[var(--color-text-primary)]">Pharma &amp; Biotech</strong>
            <p className="text-sm text-[var(--color-text-muted)]">
              Sterile tank pressure with sanitary Tri-Clamp connections, clean steam pressure for autoclave/
              SIP (Sterilization-In-Place), bioreactor headspace pressure, and WFI (Water-For-Injection)
              distribution loop pressure.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3 p-4 rounded-xl" style={{ background: "var(--color-bg-raise)" }}>
          <span className="text-2xl flex-shrink-0">💧</span>
          <div>
            <strong className="text-[var(--color-text-primary)]">Water &amp; Wastewater</strong>
            <p className="text-sm text-[var(--color-text-muted)]">
              Filter DP (membrane and multimedia filter health indication), pump discharge pressure for VFD
              speed control, distribution network pressure, and reservoir level via DP (bubbler method).
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3 p-4 rounded-xl" style={{ background: "var(--color-bg-raise)" }}>
          <span className="text-2xl flex-shrink-0">🌬️</span>
          <div>
            <strong className="text-[var(--color-text-primary)]">HVAC &amp; Building Automation</strong>
            <p className="text-sm text-[var(--color-text-muted)]">
              Chilled water pump head pressure, AHU (Air Handling Unit) filter DP for maintenance scheduling,
              duct static pressure for VAV box control, and building gas supply pressure monitoring.
            </p>
          </div>
        </div>
      </div>
    </>
  ),

  // ────── 7. ADVANTAGES VS. LIMITATIONS ─────────────────────────
  advantages: (
    <>
      <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
        <div
          className="rounded-xl p-5"
          style={{ background: "rgba(0,230,118,0.05)", border: "1px solid rgba(0,230,118,0.2)" }}
        >
          <h3 className="text-xs font-bold text-green-400 uppercase tracking-[.08em] mb-3" style={{ fontFamily: "var(--font-mono)" }}>
            Advantages
          </h3>
          <ul className="text-sm space-y-2 text-[var(--color-text-secondary)]">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-green-500 flex-shrink-0" />
              <strong>Remote monitoring</strong> via 4–20 mA signal — the transmitter can be hundreds or thousands
              of metres from the control room
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-green-500 flex-shrink-0" />
              <strong>Digital protocols</strong> (HART, FF, PA) enable remote diagnostics, configuration, and
              multi-variable access without a field visit
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-green-500 flex-shrink-0" />
              <strong>High accuracy</strong> (±0.05%) available — far better than a mechanical gauge (±1–5%)
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-green-500 flex-shrink-0" />
              <strong>No mechanical wear</strong> on the sensing element — no Bourdon tube fatigue, no
              bellows cracking, no springs to age
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-green-500 flex-shrink-0" />
              <strong>Multiple outputs</strong> (mA + digital) allow the same device to feed both safety
              systems (analog) and asset management systems (digital)
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-green-500 flex-shrink-0" />
              <strong>Self-diagnostics</strong> — smart transmitters continuously monitor their own health
              (sensor drift, electronics temperature, memory integrity) and report via NAMUR NE107 status
              signals
            </li>
          </ul>
        </div>
        <div
          className="rounded-xl p-5"
          style={{ background: "rgba(255,61,92,0.05)", border: "1px solid rgba(255,61,92,0.2)" }}
        >
          <h3 className="text-xs font-bold text-red-400 uppercase tracking-[.08em] mb-3" style={{ fontFamily: "var(--font-mono)" }}>
            Limitations
          </h3>
          <ul className="text-sm space-y-2 text-[var(--color-text-secondary)]">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-red-500 flex-shrink-0" />
              <strong>Requires power supply</strong> (loop power) — if the power supply fails, the signal is
              lost; compare with a mechanical gauge that needs no power
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-red-500 flex-shrink-0" />
              <strong>Higher initial cost</strong> than gauges or switches — a smart transmitter can cost 3–10×
              a simple gauge, but the lifecycle cost (no calibration visits, remote diagnostics) often offsets
              this
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-red-500 flex-shrink-0" />
              <strong>Electronics susceptible to lightning/surge</strong> — requires proper surge protection
              (IEC 61000-4-5) and grounding per ISA-RP12.6
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-red-500 flex-shrink-0" />
              <strong>Calibration drift over time</strong> — typically ±0.1–0.2% per year due to diaphragm
              aging, temperature cycling, and electronics component drift; requires periodic re-calibration
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-red-500 flex-shrink-0" />
              <strong>Requires shielding</strong> in noisy environments — VFD (Variable Frequency Drive)
              cables, motor starters, and high-power switching create electromagnetic interference (EMI) that
              can corrupt the signal if the instrument cable is not properly shielded and grounded
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-red-500 flex-shrink-0" />
              <strong>Impulse line blockage</strong> — the most common field failure. Plugged impulse lines
              (from wax, hydrate, sludge, or corrosion debris) cause the transmitter to read a trapped
              pressure rather than the actual process pressure, leading to false readings that can go
              undetected for days
            </li>
          </ul>
        </div>
      </div>
    </>
  ),

  // ────── 8. INSTALLATION, CALIBRATION & MAINTENANCE ────────────
  installation: (
    <>
      <p>
        Proper installation and calibration are essential for achieving the transmitter&rsquo;s rated accuracy
        and long-term reliability. The most common source of measurement error in the field is not the
        transmitter itself — it is incorrect installation, plugged impulse lines, or improper calibration
        procedure.
      </p>

      <h3 className="text-lg font-bold text-[var(--color-text-primary)] mt-5 mb-3" style={{ fontFamily: "var(--font-display)" }}>
        Installation Best Practices
      </h3>
      <ul className="text-sm space-y-3 text-[var(--color-text-secondary)]">
        <li className="flex items-start gap-2">
          <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-amber-500 flex-shrink-0" />
          <strong>Mounting:</strong> Vertical pipe mount is preferred for liquids to allow any trapped gas to
          rise back to the process. Mount above the tap for liquids (self-draining impulse lines) and below
          the tap for gases (self-venting). Ensure 1/2&Prime; NPT or larger upstream connection with a full
          port isolation valve.
        </li>
        <li className="flex items-start gap-2">
          <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-amber-500 flex-shrink-0" />
          <strong>Isolation Valves:</strong> Always install a double block-and-bleed configuration (needle
          valve + ball valve) to allow safe removal of the transmitter for service without shutting down the
          process. The bleed valve lets you safely vent any trapped pressure before disassembly.
        </li>
        <li className="flex items-start gap-2">
          <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-amber-500 flex-shrink-0" />
          <strong>Impulse Lines:</strong> For DP transmitters, impulse lines must be of <strong>equal length</strong>{" "}
          to the high-pressure and low-pressure side. Any difference in length creates a density head error
          (hydrostatic pressure difference) that directly adds to the measured ΔP. Slope the lines: downward
          toward the process for liquids (so any gas bubbles vent back) and upward away from the process for
          gases (so any condensate drains back).
        </li>
        <li className="flex items-start gap-2">
          <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-amber-500 flex-shrink-0" />
          <strong>Wiring:</strong> Use twisted-shielded pair cable (Beldon 8767 or equivalent) for the 4–20 mA
          loop. Ground the shield at <strong>one end only</strong> (typically at the DCS/PLC end) to avoid
          ground loops. Keep the instrument cable at least 300 mm away from high-power AC cables and VFD
          conduits.
        </li>
        <li className="flex items-start gap-2">
          <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-amber-500 flex-shrink-0" />
          <strong>NAMUR NE43 Check:</strong> During commissioning, verify that the transmitter is configured
          for NAMUR NE43 fault levels (3.6 mA low, 21.0 mA high). Some older transmitters default to 0 mA
          for fault, which cannot be distinguished from a wire break by the DCS.
        </li>
      </ul>

      <h3 className="text-lg font-bold text-[var(--color-text-primary)] mt-5 mb-3" style={{ fontFamily: "var(--font-display)" }}>
        Calibration Procedure
      </h3>
      <p>
        Calibration establishes the relationship between the applied pressure and the transmitter output.
        The standard procedure follows the <strong>zero-and-span</strong> method, also known as{" "}
        <strong>two-point calibration</strong>:
      </p>
      <ol className="text-sm space-y-2 text-[var(--color-text-secondary)] list-decimal list-inside">
        <li>
          <strong>Zero trim:</strong> With the transmitter isolated from the process and both ports vented
          to atmosphere (for gauge pressure) or with a vacuum applied to the reference port (for absolute),
          adjust the output to read exactly 4.000 mA (or 0% of range). This compensates for any mounting
          stresses, diaphragm preload, or small offsets in the electronics.
        </li>
        <li>
          <strong>Span adjustment:</strong> Apply a known pressure equal to the URV (Upper Range Value)
          using a <strong>deadweight tester</strong> or a <strong>precision pressure comparator</strong>.
          Adjust the transmitter output to read exactly 20.000 mA (or 100% of range). A deadweight tester
          works by placing calibrated masses on a precision piston — the pressure generated is P = F/A = mg/A,
          with traceability to national standards.
        </li>
        <li>
          <strong>Linearization check:</strong> Test at 25%, 50%, and 75% of span to verify linearity. The
          deviation from the ideal straight line should be within the transmitter&rsquo;s stated accuracy.
        </li>
        <li>
          <strong>HART trim (digital):</strong> If the transmitter uses HART, perform a separate digital
          trim (sometimes called &ldquo;sensor trim&rdquo; or &ldquo;DAC trim&rdquo;) to correct the digital
          representation of the pressure value, independent of the analog 4–20 mA output.
        </li>
      </ol>

      <h3 className="text-lg font-bold text-[var(--color-text-primary)] mt-5 mb-3" style={{ fontFamily: "var(--font-display)" }}>
        Preventive Maintenance
      </h3>
      <ul className="text-sm space-y-2 text-[var(--color-text-secondary)]">
        <li className="flex items-start gap-2">
          <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-amber-500 flex-shrink-0" />
          <strong>Check impulse lines for blockage:</strong> The most common failure. A quick field test is to
          &ldquo;span reset&rdquo; — open the equalizing valve on a DP transmitter and observe if the output
          returns to 4 mA (or the zero value). If it does not, the impulse lines are likely plugged.
        </li>
        <li className="flex items-start gap-2">
          <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-amber-500 flex-shrink-0" />
          <strong>Verify zero drift:</strong> Trend the transmitter&rsquo;s zero reading over time. A gradual
          shift of more than 0.1% per month suggests diaphragm degradation or electronics drift.
        </li>
        <li className="flex items-start gap-2">
          <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-amber-500 flex-shrink-0" />
          <strong>Perform blowdown:</strong> Periodically open the drain/vent valves to clear any accumulated
          sediment, liquid (in gas service), or wax from the impulse lines. This is especially important in
          hydrocarbon service where paraffinic wax can build up.
        </li>
        <li className="flex items-start gap-2">
          <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-amber-500 flex-shrink-0" />
          <strong>Calibration interval:</strong> Typical recalibration interval is 12 months for smart
          transmitters in non-critical service, and 3–6 months for critical safety applications (SIL-rated
          loops). Follow manufacturer recommendations and plant maintenance procedures.
        </li>
      </ul>
    </>
  ),

  // ────── 9. CONCLUSION ─────────────────────────────────────────
  conclusion: (
    <>
      <p>
        Pressure transmitters are the most widely deployed measurement instrument in the process industries,
        and understanding their operating principles, selection criteria, and installation best practices is
        fundamental for any instrumentation and control engineer.
      </p>
      <p>
        The evolution from mechanical gauges to smart transmitters with digital communication has transformed
        plant operations. Modern transmitters not only measure pressure with extreme accuracy (±0.05%) but also
        provide remote diagnostics, predictive maintenance alerts, and multi-variable outputs — all over a
        simple two-wire 4–20 mA loop that has been the industry standard for over 50 years.
      </p>
      <p className="font-medium text-[var(--color-text-primary)]">
        Key takeaways for selecting and using pressure transmitters:
      </p>
      <ul className="text-sm space-y-2 text-[var(--color-text-secondary)]">
        <li className="flex items-start gap-2">
          <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-amber-500 flex-shrink-0" />
          Select the range so that the normal operating pressure falls between 50–75% of the transmitter&rsquo;s
          full scale for best accuracy
        </li>
        <li className="flex items-start gap-2">
          <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-amber-500 flex-shrink-0" />
          Choose the sensing element technology based on accuracy requirements: resonant (±0.05%) for custody
          transfer, capacitive (±0.075%) for precision process control, piezoresistive (±0.1–0.5%) for
          general industrial
        </li>
        <li className="flex items-start gap-2">
          <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-amber-500 flex-shrink-0" />
          Always use NAMUR NE43 fault signalling for safety-related applications to distinguish between
          process alarms and device faults
        </li>
        <li className="flex items-start gap-2">
          <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-amber-500 flex-shrink-0" />
          The most common field failures are not the transmitter electronics — they are plugged impulse lines,
          incorrect mounting, and calibration drift. Invest in proper installation and routine maintenance.
        </li>
      </ul>
    </>
  ),

  // ────── 10. SOURCES ───────────────────────────────────────────
  sources: (
    <>
      <ul className="text-sm space-y-2 text-[var(--color-text-secondary)]">
        <li className="flex items-start gap-2">
          <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-amber-500 flex-shrink-0" />
          Emerson 3051SMV Product Manual — Multivariable transmitter specifications and calibration
        </li>
        <li className="flex items-start gap-2">
          <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-amber-500 flex-shrink-0" />
          Endress+Hauser Cerabar M PMC25 Product Guide — Capacitive pressure sensor operating principles
        </li>
        <li className="flex items-start gap-2">
          <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-amber-500 flex-shrink-0" />
          ISA-5.1-2009 Instrumentation Symbols and Identification — Standard P&amp;ID symbols for pressure
          transmitters
        </li>
        <li className="flex items-start gap-2">
          <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-amber-500 flex-shrink-0" />
          NAMUR NE43 &ldquo;Electrical Equipment of Field Devices&rdquo; — Fault signalling levels for 4–20 mA
          transmitters
        </li>
        <li className="flex items-start gap-2">
          <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-amber-500 flex-shrink-0" />
          IEC 60770-1: Transmitters for use in industrial-process control systems — Performance evaluation
          methods
        </li>
      </ul>
    </>
  ),
};

// ─── Sections Config ───────────────────────────────────────────
const sections = [
  {
    id: "quick-facts",
    title: "Overview",
    icon: "📋",
    content: SectionContent.quickFacts,
    image: <TransmitterDiagram />,
  },
  {
    id: "principles",
    title: "Operating Principle",
    icon: "⚙️",
    content: SectionContent.principles,
    image: (
      <div className="relative max-w-[600px] mx-auto">
        <img
          src="/pressure-transmitter-sensing.svg"
          alt="Piezoresistive Wheatstone bridge and capacitive pressure sensing schematic diagrams"
          className="w-full h-auto rounded-xl opacity-90 hover:opacity-100 transition-opacity duration-300"
          style={{filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.3))"}}
        />
        <p className="mt-3 text-center text-sm text-[var(--color-text-muted)]">
          Piezoresistive sensing (left) uses four diffused resistors in a Wheatstone bridge on a silicon diaphragm; capacitive sensing (right) measures the change in capacitance between the diaphragm and a fixed electrode
        </p>
      </div>
    ),
  },
  {
    id: "types",
    title: "Types / Variants",
    icon: "📐",
    content: SectionContent.types,
  },
  {
    id: "specs",
    title: "Key Specifications",
    icon: "🎯",
    content: SectionContent.specs,
    chart: <AccuracyBarChart />,
  },
  {
    id: "namur",
    title: "NAMUR NE43 & Signal Levels",
    icon: "📡",
    content: SectionContent.namur,
    chart: <NAMURBandChart />,
  },
  {
    id: "range-selection",
    title: "Range Selection Guide",
    icon: "📏",
    content: (
      <p>
        The chart below illustrates recommended pressure range selection based on typical working pressures.
        The goal is to have the normal operating pressure (steady-state working condition) fall between <strong>50%
        and 75% of the full-scale range</strong>. This ensures that transient pressure spikes (e.g., pump start-up
        surges, valve closures) stay within the transmitter&rsquo;s overpressure limit while maintaining the best
        accuracy. For example, if the working pressure is 8 bar, choose a 15–16 bar transmitter range — not a
        100 bar range, which would waste 92% of the sensor&rsquo;s resolution.
      </p>
    ),
    chart: <PressureRangeChart />,
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
    title: "Installation, Calibration & Maintenance",
    icon: "🔧",
    content: SectionContent.installation,
    image: (
      <div className="relative max-w-[600px] mx-auto">
        <img
          src="/current-loop-diagram.svg"
          alt="4-20 mA current loop diagram showing 24 VDC power supply, pressure transmitter, and DCS/PLC input card connected in series"
          className="w-full h-auto rounded-xl opacity-90 hover:opacity-100 transition-opacity duration-300"
          style={{filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.3))"}}
        />
        <p className="mt-3 text-center text-sm text-[var(--color-text-muted)]">
          4–20 mA loop wiring: 24 VDC supply powers the transmitter, which regulates loop current proportional to pressure; the DCS/PLC reads the signal across a precision burden resistor
        </p>
      </div>
    ),
  },
  {
    id: "conclusion",
    title: "Conclusion",
    icon: "🎯",
    content: SectionContent.conclusion,
  },
  {
    id: "sources",
    title: "Sources",
    icon: "📚",
    content: SectionContent.sources,
  },
];

// ─── Page ──────────────────────────────────────────────────────
export default function PressureTransmittersPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TechArticle",
        "@id":
          "https://ihub-eta.vercel.app/knowledge/instrumentation/pressure-transmitters#article",
        headline: seo.title,
        description: seo.description,
        image: "https://ihub-eta.vercel.app/pressure-transmitter-diagram.svg",
        author: {
          "@type": "Person",
          name: "Satish Kumar Jaiswal",
          jobTitle: "Lead I&C Commissioning Engineer",
        },
        publisher: {
          "@type": "Organization",
          name: "Instrumentation Hub",
          logo: {
            "@type": "ImageObject",
            url: "https://ihub-eta.vercel.app/favicon.ico",
          },
        },
        datePublished: "2025-01-15",
        dateModified: "2025-06-15",
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id":
            "https://ihub-eta.vercel.app/knowledge/instrumentation/pressure-transmitters",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://ihub-eta.vercel.app/knowledge/instrumentation/pressure-transmitters#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            item: {
              "@id": "https://ihub-eta.vercel.app/knowledge",
              name: "Knowledge Base",
            },
          },
          {
            "@type": "ListItem",
            position: 2,
            item: {
              "@id": "https://ihub-eta.vercel.app/knowledge/instrumentation",
              name: "Instrumentation",
            },
          },
          {
            "@type": "ListItem",
            position: 3,
            item: {
              "@id":
                "https://ihub-eta.vercel.app/knowledge/instrumentation/pressure-transmitters",
              name: "Pressure Transmitters",
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageMeta {...seo} />
      <InstrumentArticleLayout
        title={meta.title}
        description={meta.description}
        category={meta.category}
        breadcrumb={meta.breadcrumb}
        metaTags={meta.metaTags}
        sections={sections}
        sources={undefined}
        backLink={{
          href: "/knowledge/instrumentation",
          label: "Back to Instrumentation Hub",
        }}
        documentVersion="Document Version 2.0 | Based on manufacturer documentation and field experience from NEOM Green Hydrogen, NSRP Vietnam, ADNOC UAE projects"
        footerNote={undefined}
      />
    </>
  );
}