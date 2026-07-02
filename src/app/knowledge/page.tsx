import Link from "next/link";

const hubs = [
  { id: "instrumentation", icon: "📡", name: "Instrumentation", desc: "Pressure, Temperature, Flow, Level, Analytical, Control Valves, Calibration, Installation & Commissioning", count: "36+ articles" },
  { id: "plc", icon: "🧩", name: "PLC Programming", desc: "Ladder Logic, Structured Text, Function Block, Timers, Counters, PID, Safety PLC, Networking & Diagnostics", count: "28+ articles" },
  { id: "scada", icon: "🖥️", name: "SCADA Systems", desc: "HMI Graphics, Alarm Management, Historian, Trending, Tag Management, Scripting & Security", count: "18+ articles" },
  { id: "dcs", icon: "⚙️", name: "DCS Systems", desc: "Architecture, Controllers, Graphics, Batch Control, Redundancy, I/O Systems & Commissioning", count: "22+ articles" },
  { id: "process-control", icon: "🎛️", name: "Process Control", desc: "PID Tuning, Cascade, Ratio, Feedforward, Split Range, Override, APC & Loop Tuning", count: "15+ articles" },
  { id: "electrical", icon: "⚡", name: "Electrical Engineering", desc: "Motors, Transformers, Switchgear, VFD, Cable Sizing, Earthing, UPS, Protection & Testing", count: "25+ articles" },
  { id: "communication", icon: "🌐", name: "Industrial Communication", desc: "Modbus, Profibus, Profinet, EtherNet/IP, HART, Foundation Fieldbus, OPC UA & MQTT", count: "20+ articles" },
  { id: "automation", icon: "🤖", name: "Industrial Automation", desc: "Industry 4.0, IIoT, Edge Computing, Digital Twin, MES, Robotics & Predictive Maintenance", count: "12+ articles" },
  { id: "safety", icon: "🛡️", name: "Functional Safety", desc: "SIL, SIS, ESD, Fire & Gas, HAZOP, LOPA, ATEX, IECEx & Risk Assessment", count: "16+ articles" },
  { id: "mechanical", icon: "🔧", name: "Mechanical Equipment", desc: "Pumps, Compressors, Boilers, Heat Exchangers, Turbines, Valves & Rotating Equipment", count: "10+ articles" },
  { id: "drawings", icon: "📐", name: "Engineering Drawings", desc: "P&ID, PFD, Loop Diagrams, Hook-ups, Cable Schedules, Cause & Effect, Logic Diagrams", count: "14+ articles" },
  { id: "software", icon: "💻", name: "Industrial Software", desc: "TIA Portal, Studio 5000, WinCC, FactoryTalk, Ignition, CODESYS, EPLAN & AutoCAD Electrical", count: "20+ articles" },
  { id: "manufacturers", icon: "🏭", name: "Manufacturers", desc: "Siemens, Rockwell, ABB, Emerson, Honeywell, Yokogawa, Endress+Hauser & Schneider", count: "30+ articles" },
  { id: "calculators", icon: "🧮", name: "Engineering Calculators", desc: "Unit Converters, Motor Current, Cable Size, Voltage Drop, Transformer Sizing, Cv & Tank Volume", count: "18+ tools" },
  { id: "downloads", icon: "📥", name: "Downloads", desc: "PLC Programs, SCADA Projects, Excel Sheets, PDF Guides, Checklists, Templates & CAD Drawings", count: "50+ files" },
  { id: "interview", icon: "💼", name: "Interview Preparation", desc: "Technical Q&A, HR Questions, Fresh Graduate to Senior Level, Oil & Gas Focus", count: "200+ questions" },
  { id: "mcqs", icon: "❓", name: "MCQs", desc: "Instrumentation, PLC, SCADA, DCS, Electrical, Safety, Networks, Automation & Robotics", count: "500+ questions" },
  { id: "projects", icon: "🔬", name: "Projects", desc: "PLC, Arduino, ESP32, Raspberry Pi, IoT, SCADA, Automation & Capstone Projects", count: "25+ projects" },
  { id: "engineering-tools", icon: "🛠️", name: "Engineering Tools", desc: "Reference Tables, ISA/IEC Symbols, Cable Color Codes, Standards Library & Cheat Sheets", count: "12+ tools" },
  { id: "career", icon: "🎯", name: "Career Hub", desc: "Engineering Roadmaps, Resume Writing, Certifications, Training, Jobs & Career Guides", count: "15+ guides" },
];

export default function KnowledgePage() {
  return (
    <div className="page-enter max-w-6xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--color-accent-blue)]/20 bg-[var(--color-accent-blue)]/5 mb-4">
          <span className="text-[9px] font-semibold uppercase tracking-[.12em] text-[var(--color-accent-blue)]" style={{fontFamily: "var(--font-mono)"}}>20 Knowledge Hubs</span>
        </div>
        <h1 className="text-5xl sm:text-6xl font-black text-[var(--color-text-primary)] mb-4" style={{fontFamily: "var(--font-display)"}}>
          Knowledge <span className="gradient-blue">Base</span>
        </h1>
        <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl">
          Comprehensive engineering knowledge organized into 20 pillar hubs. Each hub contains articles, calculators, downloads, MCQs, and interview questions.
        </p>
      </div>

      {/* Hub Grid */}
      <div className="hub-grid">
        {hubs.map((h) => (
          <Link key={h.id} href={`/knowledge/${h.id}`} className="hub-card">
            <div className="hub-icon">{h.icon}</div>
            <div className="hub-name">{h.name}</div>
            <div className="hub-count">{h.count}</div>
            <div className="hub-desc">{h.desc}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
