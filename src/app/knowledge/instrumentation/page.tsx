"use client";

import Link from "next/link";

const metadata = {
  title: "Instrumentation Knowledge Base - Instrumentation Hub",
  description: "Comprehensive guides on pressure gauges, transmitters, temperature sensors, flow meters, level measurement, and control valves",
};

const topics = [
  {
    id: "pressure-gauges",
    title: "Pressure Gauges",
    description: "Bourdon tube, diaphragm, bellows, digital types. Selection, installation, calibration, and maintenance.",
    icon: "📏",
    color: "border-amber-500/30",
    bgColor: "bg-amber-500/5",
    tags: ["Bourdon", "Diaphragm", "Digital", "Calibration"],
  },
  {
    id: "pressure-transmitters",
    title: "Pressure Transmitters",
    description: "4-20mA, HART, Foundation Fieldbus. Smart transmitters, calibration, and commissioning.",
    icon: "📡",
    color: "border-blue-500/30",
    bgColor: "bg-blue-500/5",
    tags: ["4-20mA", "HART", "Smart", "Commissioning"],
    comingSoon: true,
  },
  {
    id: "temperature-sensors",
    title: "Temperature Sensors",
    description: "RTDs, thermocouples, thermowells. Wiring, compensation, and accuracy classes.",
    icon: "🌡️",
    color: "border-red-500/30",
    bgColor: "bg-red-500/5",
    tags: ["RTD", "Thermocouple", "Thermowell"],
    comingSoon: true,
  },
  {
    id: "flow-meters",
    title: "Flow Meters",
    description: "DP flow, magnetic, ultrasonic, Coriolis, vortex. Sizing, installation, and diagnostics.",
    icon: "📊",
    color: "border-cyan-500/30",
    bgColor: "bg-cyan-500/5",
    tags: ["DP", "Mag", "Coriolis", "Ultrasonic"],
    comingSoon: true,
  },
  {
    id: "level-measurement",
    title: "Level Measurement",
    description: "Radar, ultrasonic, displacer, capacitive, guided wave radar. Interface and solids level.",
    icon: "📈",
    color: "border-green-500/30",
    bgColor: "bg-green-500/5",
    tags: ["Radar", "Guided Wave", "Displacer"],
    comingSoon: true,
  },
  {
    id: "control-valves",
    title: "Control Valves",
    description: "Globe, ball, butterfly, rotary. Cv sizing, actuators, positioners, and trim selection.",
    icon: "⚙️",
    color: "border-purple-500/30",
    bgColor: "bg-purple-500/5",
    tags: ["Globe", "Ball", "Positioner", "Cv Sizing"],
    comingSoon: true,
  },
];

export default function InstrumentationPage() {
  return (
    <div className="page-enter min-h-screen pb-16">
      <div className="max-w-6xl mx-auto px-4 py-12 sm:py-20">
        {/* Header */}
        <div className="mb-12 sm:mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-amber-500/20 bg-amber-500/5 mb-6">
            <span className="text-[9px] font-semibold uppercase tracking-[.12em] text-amber-500" style={{fontFamily: "var(--font-mono)"}}>
              Instrumentation Knowledge Base
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[var(--color-text-primary)] mb-6" style={{fontFamily: "var(--font-display)"}}>
            Instrumentation <span className="gradient-amber">Guides</span>
          </h1>
          <p className="text-lg sm:text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto leading-relaxed">
            Field-proven references for I&C engineers. Covers selection, installation, calibration, and troubleshooting.
            Built from 15+ years of commissioning experience across NEOM, NSRP, and ADNOC projects.
          </p>
        </div>

        {/* Topic Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {topics.map((topic) => (
            <Link
              key={topic.id}
              href={topic.comingSoon ? "#" : `/knowledge/instrumentation/${topic.id}`}
              className={`group glass-card rounded-2xl p-6 sm:p-8 relative overflow-hidden transition-all duration-300 hover:translate-y-[-4px] cursor-pointer ${topic.comingSoon ? "opacity-60 pointer-events-none" : ""}`}
              style={{ border: "1px solid var(--color-border)", background: "var(--color-bg-card)" }}
            >
              {/* Accent border top */}
              <div className={`absolute top-0 left-0 right-0 h-1 transition-all duration-300 ${topic.color} group-hover:opacity-100`} />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className={`text-4xl sm:text-5xl mb-4 ${topic.bgColor} inline-flex items-center justify-center rounded-xl w-16 h-16`}>
                  <span aria-hidden="true">{topic.icon}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-black text-[var(--color-text-primary)] mb-3 group-hover:text-amber-400 transition-colors" style={{fontFamily: "var(--font-display)"}}>
                  {topic.title}
                  {topic.comingSoon && (
                    <span className="ml-2 text-[10px] font-semibold uppercase tracking-[.1em] text-amber-500 bg-amber-500/10 px-2 py-0.5 rounded" style={{fontFamily: "var(--font-mono)"}}>
                      Soon
                    </span>
                  )}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-[var(--color-text-muted)] leading-relaxed mb-4">
                  {topic.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {topic.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-semibold uppercase tracking-[.08em] text-[var(--color-text-muted)] bg-[var(--color-bg-raise)] px-2.5 py-1 rounded-full"
                      style={{fontFamily: "var(--font-mono)"}}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover indicator */}
              {!topic.comingSoon && (
                <div className="absolute bottom-0 left-0 right-0 h-px bg-amber-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              )}
            </Link>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-12 sm:mt-16 text-center">
          <p className="text-sm text-[var(--color-text-muted)]">
            More topics coming soon. 
            <a href="/tools" className="text-amber-400 hover:text-amber-300 underline underline-offset-2">
              Try the Engineering Calculators →
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}