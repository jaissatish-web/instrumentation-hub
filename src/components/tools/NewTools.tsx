"use client";

import { useState, useEffect } from "react";

// ─── Shared UI helpers (match tools/page.tsx patterns) ─────────
type Inputs = Record<string, string>;
type Results = Record<string, string>;

function useToolState() {
  const [inputs, setInputs] = useState<Inputs>({});
  const [result, setResult] = useState<Results>({});
  const g = (k: string) => inputs[k] || "";
  const gi = (k: string) => parseFloat(g(k));
  const set = (k: string, v: string) => setResult((p) => ({ ...p, [k]: v }));
  const setIn = (k: string, v: string) => setInputs((p) => ({ ...p, [k]: v }));
  return { inputs, result, g, gi, set, setIn, setInputs, setResult };
}

const Card = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-xl p-6 sm:p-8" style={{ background: "var(--color-bg-card)", border: "1px solid var(--color-border)" }}>
    {children}
  </div>
);

const Header = ({ icon, title, desc }: { icon: string; title: string; desc: string }) => (
  <div className="flex items-center gap-3 pb-5 mb-5 border-b border-[var(--color-border)]">
    <span className="text-2xl">{icon}</span>
    <div>
      <div className="text-lg font-black uppercase tracking-[.03em] text-[var(--color-text-primary)]" style={{ fontFamily: "var(--font-display)" }}>{title}</div>
      <div className="text-xs text-[var(--color-text-muted)] mt-0.5">{desc}</div>
    </div>
  </div>
);

function useFieldHelpers({ inputs, result, gi, g, set, setIn }: ReturnType<typeof useToolState>) {
  const input = (key: string, placeholder: string, step = "any") => (
    <input
      className="w-full px-3 py-2.5 rounded-md text-sm bg-[var(--color-bg-raise)] border border-[var(--color-border)] text-[var(--color-text-primary)] outline-none focus:border-[var(--color-accent-blue)] transition-colors"
      style={{ fontFamily: "var(--font-body)" }}
      type="number"
      step={step}
      placeholder={placeholder}
      value={inputs[key] || ""}
      onChange={(e) => setIn(key, e.target.value)}
    />
  );
  const textInput = (key: string, placeholder: string) => (
    <input
      className="w-full px-3 py-2.5 rounded-md text-sm bg-[var(--color-bg-raise)] border border-[var(--color-border)] text-[var(--color-text-primary)] outline-none focus:border-[var(--color-accent-blue)] transition-colors"
      style={{ fontFamily: "var(--font-body)" }}
      type="text"
      placeholder={placeholder}
      value={inputs[key] || ""}
      onChange={(e) => setIn(key, e.target.value)}
    />
  );
  const select = (key: string, options: string[]) => (
    <select
      className="w-full px-3 py-2.5 rounded-md text-sm bg-[var(--color-bg-raise)] border border-[var(--color-border)] text-[var(--color-text-primary)] outline-none"
      value={inputs[key] || options[0]}
      onChange={(e) => setIn(key, e.target.value)}
    >
      {options.map((o) => <option key={o} value={o}>{o}</option>)}
    </select>
  );
  const resbox = (children: React.ReactNode) => (
    <div className="rounded-lg p-4 my-4" style={{ background: "rgba(0,180,255,0.05)", border: "1px solid rgba(0,180,255,0.25)" }}>
      {children}
    </div>
  );
  const res = (label: string, value: string, color = "var(--color-accent-blue)") => (
    <div className="text-center">
      <div className="text-[9px] font-semibold uppercase tracking-[.15em] text-[var(--color-text-muted)] mb-2" style={{ fontFamily: "var(--font-mono)" }}>{label}</div>
      <div className="text-xl font-black leading-none" style={{ color, fontFamily: "var(--font-display)" }}>{value}</div>
    </div>
  );
  const field = (label: string, children: React.ReactNode) => (
    <div className="flex flex-col gap-1.5">
      <div className="text-[9px] font-semibold uppercase tracking-[.16em] text-[var(--color-text-muted)]" style={{ fontFamily: "var(--font-mono)" }}>{label}</div>
      {children}
    </div>
  );
  const note = (text: string) => (
    <div className="rounded-md p-3 mt-3 text-[11px] leading-relaxed" style={{ background: "var(--color-bg-raise)", border: "1px solid var(--color-border)", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)" }}>
      {text}
    </div>
  );
  const btn = (label: string, onClick: () => void) => (
    <button className="w-full py-2.5 rounded-md text-[10px] font-bold uppercase tracking-[.09em] text-black mb-3" style={{ background: "var(--color-accent-blue)", fontFamily: "var(--font-mono)" }} onClick={onClick}>{label}</button>
  );
  return { input, textInput, select, resbox, res, field, note, btn };
}

// ─── 1. 2oo3 Voting Simulator ──────────────────────────────────
export function TwoOoThreeTool() {
  const s = useToolState();
  const { select, resbox, res, field, note } = useFieldHelpers(s);
  const { g } = s;
  const vals = [g("s1") || "Normal", g("s2") || "Normal", g("s3") || "Normal"];
  const demands = vals.filter((v) => v === "Demand").length;
  const trip = demands >= 2;
  return (
    <Card>
      <Header icon="🛡️" title="2oo3 Voting Simulator" desc="Two-out-of-three safety voting logic" />
      <div className="grid grid-cols-3 gap-4 mb-4">
        {[0, 1, 2].map((i) => (
          <div key={i}>{field(`Sensor ${i + 1}`, select(`s${i + 1}`, ["Normal", "Demand"]))}</div>
        ))}
      </div>
      {resbox(
        <div className="grid grid-cols-2 gap-4">
          {res("Voting Result", trip ? "TRIP ACTIVE" : "NO TRIP", trip ? "var(--color-accent-red)" : "var(--color-accent-green)")}
          {res("Trip Demands", `${demands} of 3`)}
        </div>
      )}
      <div className="flex gap-2 mb-3">
        {vals.map((v, i) => (
          <div key={i} className={`flex-1 rounded-lg p-3 text-center text-xs font-bold border ${v === "Demand" ? "text-[var(--color-accent-red)]" : "text-[var(--color-text-muted)]"}`} style={{ borderColor: v === "Demand" ? "rgba(255,61,92,0.4)" : "var(--color-border)", background: v === "Demand" ? "rgba(255,61,92,0.08)" : "var(--color-bg-raise)" }}>
            S{i + 1}: {v}
          </div>
        ))}
      </div>
      {note("2oo3 requires 2 of 3 sensors to agree before tripping — prevents false trips from a single faulty sensor.")}
    </Card>
  );
}

// ─── 2. Calibration Error ──────────────────────────────────────
export function CalibrationErrorTool() {
  const s = useToolState();
  const { input, resbox, res, field, note, btn } = useFieldHelpers(s);
  const { gi, g, set } = s;
  const calc = () => {
    const expected = gi("ce-expected"), measured = gi("ce-measured"), l = gi("ce-lrv"), u = gi("ce-urv"), tol = gi("ce-tol");
    if ([expected, measured, l, u, tol].some(isNaN) || u <= l) return;
    const error = measured - expected;
    const pct = (100 * error) / (u - l);
    set("ce-r1", error.toFixed(5));
    set("ce-r2", pct.toFixed(5) + "%");
    set("ce-r3", Math.abs(pct) <= tol + 1e-10 ? "PASS" : "FAIL");
  };
  return (
    <Card>
      <Header icon="🎯" title="Calibration Error Calculator" desc="Error vs % of span with tolerance check" />
      <div className="grid grid-cols-2 gap-4 mb-4">
        {field("Expected Value", input("ce-expected", "e.g. 100"))}
        {field("Measured Value", input("ce-measured", "e.g. 101.2"))}
      </div>
      <div className="grid grid-cols-3 gap-4 mb-4">
        {field("LRV", input("ce-lrv", "0"))}
        {field("URV", input("ce-urv", "100"))}
        {field("Tolerance (% span)", input("ce-tol", "0.5"))}
      </div>
      {btn("Calculate Error", calc)}
      {resbox(
        <div className="grid grid-cols-3 gap-4">
          {res("Signed Error", s.result["ce-r1"] || "—")}
          {res("Error / Span", s.result["ce-r2"] || "—")}
          {res("Result", s.result["ce-r3"] || "—", s.result["ce-r3"] === "FAIL" ? "var(--color-accent-red)" : "var(--color-accent-green)")}
        </div>
      )}
      {note("Error = measured − expected. Pass/fail excludes reference uncertainty and guard bands — apply the project decision rule.")}
    </Card>
  );
}

const Note = ({ text }: { text: string }) => (
  <div className="rounded-md p-3 mt-3 text-[11px] leading-relaxed" style={{ background: "var(--color-bg-raise)", border: "1px solid var(--color-border)", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)" }}>
    {text}
  </div>
);

// ─── 3. Cause & Effect Checklist ───────────────────────────────
const CE_ITEMS = [
  "Cause input and tag matched to approved matrix",
  "Initiating condition simulated under authorized procedure",
  "Expected effect and output tag verified",
  "Actual response and timing recorded",
  "Alarm and operator indication verified",
  "Latching behavior checked",
  "Reset permissives and sequence checked",
  "Bypasses removed and normal state restored",
  "Witness review and punch closure recorded",
];

export function CauseEffectTool() {
  const [states, setStates] = useState<string[]>(Array(CE_ITEMS.length).fill("pending"));
  const [tag, setTag] = useState("");
  const done = states.filter((s) => s === "pass").length;
  const fail = states.filter((s) => s === "fail").length;
  const na = states.filter((s) => s === "na").length;
  const pending = states.filter((s) => s === "pending").length;
  return (
    <Card>
      <Header icon="🧩" title="Cause & Effect Checklist" desc="C&E matrix verification — 9 checks" />
      <div className="mb-4">
        <div className="text-[9px] font-semibold uppercase tracking-[.16em] text-[var(--color-text-muted)] mb-1.5" style={{ fontFamily: "var(--font-mono)" }}>Loop / Cause Tag</div>
        <input className="w-full px-3 py-2.5 rounded-md text-sm bg-[var(--color-bg-raise)] border border-[var(--color-border)] text-[var(--color-text-primary)] outline-none" type="text" placeholder="e.g. PSH-201-001A" value={tag} onChange={(e) => setTag(e.target.value)} />
      </div>
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="text-3xl font-black" style={{ color: "var(--color-accent-blue)", fontFamily: "var(--font-display)" }}>{done}/{CE_ITEMS.length}</div>
          <div className="text-[9px] font-semibold uppercase tracking-[.13em] text-[var(--color-text-muted)]" style={{ fontFamily: "var(--font-mono)" }}>Passed</div>
        </div>
        <div className="flex gap-2 text-[10px] font-semibold">
          <span className="px-2 py-1 rounded text-[var(--color-accent-green)]" style={{ background: "rgba(0,230,118,0.08)" }}>{done} ✓</span>
          <span className="px-2 py-1 rounded text-[var(--color-accent-red)]" style={{ background: "rgba(255,61,92,0.08)" }}>{fail} ✕</span>
          <span className="px-2 py-1 rounded text-[var(--color-text-muted)]" style={{ background: "var(--color-bg-raise)" }}>{na} N/A</span>
          <span className="px-2 py-1 rounded text-[var(--color-text-muted)]" style={{ background: "var(--color-bg-raise)" }}>{pending} …</span>
        </div>
      </div>
      {CE_ITEMS.map((item, i) => (
        <div key={i} className="flex items-center gap-2.5 py-1.5 px-2 rounded-md hover:bg-white/[.03] transition-colors">
          <div className="flex-1 text-xs text-[var(--color-text-secondary)] leading-relaxed">{item}</div>
          <select
            className="px-2 py-1 rounded text-[10px] bg-[var(--color-bg-raise)] border border-[var(--color-border)] text-[var(--color-text-primary)] outline-none"
            value={states[i]}
            onChange={(e) => setStates((p) => p.map((v, j) => (j === i ? e.target.value : v)))}
          >
            <option value="pending">Not checked</option>
            <option value="pass">Pass</option>
            <option value="fail">Fail</option>
            <option value="na">N/A</option>
          </select>
        </div>
      ))}
      <Note text="A recorded check is not a signed acceptance certificate. Completion is not acceptance." />
    </Card>
  );
}

// ─── 4. FAT / SAT Checklist ────────────────────────────────────
const FS_ITEMS = [
  "Approved test procedure and scope identified",
  "Drawings, I/O list and software revisions identified",
  "Panel and equipment inspection recorded",
  "Power supplies and grounding checked",
  "I/O simulation or field checks recorded",
  "Operator graphics and alarms checked",
  "Control sequences tested against approved design",
  "Communications loss response tested",
  "Redundancy and recovery tested where applicable",
  "Access roles and backup/restore checked",
  "Punch items and deviations recorded",
  "Witness signatures and acceptance recorded",
];

export function FatSatTool() {
  const [states, setStates] = useState<string[]>(Array(FS_ITEMS.length).fill("pending"));
  const done = states.filter((s) => s === "pass").length;
  const fail = states.filter((s) => s === "fail").length;
  return (
    <Card>
      <Header icon="🧪" title="FAT / SAT Checklist" desc="Factory & site acceptance testing — 12 checks" />
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="text-3xl font-black" style={{ color: "var(--color-accent-blue)", fontFamily: "var(--font-display)" }}>{done}/{FS_ITEMS.length}</div>
          <div className="text-[9px] font-semibold uppercase tracking-[.13em] text-[var(--color-text-muted)]" style={{ fontFamily: "var(--font-mono)" }}>Passed</div>
        </div>
        <div className="flex gap-2 text-[10px] font-semibold">
          <span className="px-2 py-1 rounded text-[var(--color-accent-green)]" style={{ background: "rgba(0,230,118,0.08)" }}>{done} ✓</span>
          <span className="px-2 py-1 rounded text-[var(--color-accent-red)]" style={{ background: "rgba(255,61,92,0.08)" }}>{fail} ✕</span>
        </div>
      </div>
      {FS_ITEMS.map((item, i) => (
        <div key={i} className="flex items-center gap-2.5 py-1.5 px-2 rounded-md hover:bg-white/[.03] transition-colors">
          <div className="flex-1 text-xs text-[var(--color-text-secondary)] leading-relaxed">{item}</div>
          <select
            className="px-2 py-1 rounded text-[10px] bg-[var(--color-bg-raise)] border border-[var(--color-border)] text-[var(--color-text-primary)] outline-none"
            value={states[i]}
            onChange={(e) => setStates((p) => p.map((v, j) => (j === i ? e.target.value : v)))}
          >
            <option value="pending">Not checked</option>
            <option value="pass">Pass</option>
            <option value="fail">Fail</option>
            <option value="na">N/A</option>
          </select>
        </div>
      ))}
      <Note text="FAT verifies the panel against the approved design; SAT re-verifies against the installed system. Keep evidence traceable." />
    </Card>
  );
}

// ─── 5. HART Command Reference ─────────────────────────────────
const HART = [
  ["0", "Read unique identifier", "Device type, manufacturer, revision, serial", "Device unique ID", "Works at all power levels"],
  ["1", "Read primary variable (PV)", "Current process variable", "PV value + unit", "Unit comes from cmd 3 or 14"],
  ["2", "Read loop current and % of range", "Analog output + range %", "mA, % of range", "Useful with series mA meter"],
  ["3", "Read all dynamic variables", "PV, SV, TV, QV", "Up to 4 variables", "Device-dependent mapping"],
  ["6", "Write polling address", "Device address (0–15)", "Acknowledgment", "Changes affect discovery"],
  ["7", "Read loop configuration", "Loop current mode + transfer", "Mode + transfer function", "Legacy; often obsolete"],
  ["8", "Write loop configuration", "Desired mode/transfer", "Acknowledgment", "Authorised maintenance only"],
  ["11", "Read tag, descriptor, date", "Tag (8 chars), descriptor, date", "Tag + metadata", "Cmd 20 covers long tag"],
  ["12", "Write tag", "New tag", "Acknowledgment", "Tag length device-limited"],
  ["13", "Write descriptor and date", "Descriptor + date", "Acknowledgment", "Metadata editing"],
  ["14", "Read PV sensor information", "Sensor serial, limits, span, units", "Sensor info block", "Confirm limits vs range"],
  ["15", "Read output information", "Alarm selection, transfer, PV range", "Output config block", "Check alarm direction"],
  ["16", "Read final assembly number", "Installation number", "Number", "Often unused"],
  ["17", "Write message", "Free 32-char message", "Acknowledgment", "Useful for loop notes"],
  ["18", "Write tag, descriptor, date", "Combined metadata write", "Acknowledgment", "May be blocked"],
  ["19", "Write final assembly number", "New number", "Acknowledgment", "—"],
  ["20", "Read long tag", "Long tag (32 chars)", "Long tag", "Modern DCS interfaces"],
  ["21", "Read unique ID by long tag", "Long tag query", "Device ID", "—"],
  ["22", "Write long tag", "New long tag", "Acknowledgment", "—"],
  ["24", "Read additional device status", "Diagnostic bits", "Status words", "Pair with cmd 48"],
  ["27", "Read device variables + status", "Variables + status", "Variable set", "Vendor-specific mapping"],
  ["33", "Read device variables", "Select variables", "Values + units", "Standard aux reads"],
  ["35", "Write device variables", "Variable + value", "Acknowledgment", "Respect write-protect"],
  ["38", "Reset configuration changed flag", "—", "Status", "After config verification"],
  ["40", "Enter / exit fixed current mode", "Target mA (e.g. 4.0)", "Acknowledgment", "Loop stays fixed until exit"],
  ["48", "Read additional device status", "Extended diagnostics", "Status + help text", "Key for NE107 diagnostics"],
];

export function HartTool() {
  const [q, setQ] = useState("");
  const found = q.trim() === "" ? HART : HART.filter((r) => r.some((c) => c.toLowerCase().includes(q.toLowerCase())));
  return (
    <Card>
      <Header icon="📡" title="HART Command Reference" desc="Universal & common-practice commands" />
      <div className="mb-4">
        <div className="text-[9px] font-semibold uppercase tracking-[.16em] text-[var(--color-text-muted)] mb-1.5" style={{ fontFamily: "var(--font-mono)" }}>Search</div>
        <input className="w-full px-3 py-2.5 rounded-md text-sm bg-[var(--color-bg-raise)] border border-[var(--color-border)] text-[var(--color-text-primary)] outline-none focus:border-[var(--color-accent-blue)]" type="text" placeholder="e.g. tag, status, mA…" value={q} onChange={(e) => setQ(e.target.value)} />
      </div>
      <div className="rounded-lg p-3 mb-3 text-[10px] text-[var(--color-text-muted)]" style={{ background: "var(--color-bg-raise)", fontFamily: "var(--font-mono)" }}>
        {found.length} of {HART.length} commands shown
      </div>
      <div className="overflow-x-auto rounded-lg border border-[var(--color-border)]">
        <table className="w-full text-xs">
          <thead>
            <tr style={{ background: "var(--color-bg-raise)" }}>
              {["#", "Command", "Typical data", "Response", "Caveats"].map((h) => (
                <th key={h} className="text-left px-3 py-2 text-[9px] font-bold uppercase tracking-[.08em] text-[var(--color-accent-blue)] whitespace-nowrap" style={{ fontFamily: "var(--font-mono)" }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {found.map((r) => (
              <tr key={r[0]} className="border-t border-[var(--color-border)]">
                {r.slice(0, 5).map((c, j) => (
                  <td key={j} className={`px-3 py-2 text-[var(--color-text-secondary)] ${j === 0 ? "font-bold text-[var(--color-accent-blue)]" : ""}`}>{c}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Note text="Reference for field communicator work — exact data objects are device- and protocol-revision-dependent." />
    </Card>
  );
}

// ─── 6. Hydrostatic Level ──────────────────────────────────────
export function HydrostaticTool() {
  const s = useToolState();
  const { input, select, resbox, res, field, note, btn } = useFieldHelpers(s);
  const { gi, g, set } = s;
  const calc = () => {
    const rho = gi("hy-rho"), max = gi("hy-max"), v = gi("hy-v");
    if ([rho, max, v].some(isNaN) || max <= 0 || rho <= 0) return;
    const mode = g("hy-mode") || "height";
    const h = mode === "height" ? v : (v * 1000) / (rho * 9.80665);
    const dp = (rho * 9.80665 * h) / 1000;
    set("hy-r1", h.toFixed(3) + " m");
    set("hy-r2", dp.toFixed(3) + " kPa");
    set("hy-r3", ((h / max) * 100).toFixed(2) + "%");
  };
  return (
    <Card>
      <Header icon="🛢️" title="Hydrostatic Level" desc="Level from hydrostatic pressure (open vessel)" />
      <div className="grid grid-cols-2 gap-4 mb-4">
        {field("Density (kg/m³)", input("hy-rho", "e.g. 1000"))}
        {field("Tank Height (m)", input("hy-max", "e.g. 5"))}
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        {field("Mode", select("hy-mode", ["height", "pressure"]))}
        {field(g("hy-mode") === "height" ? "Liquid Height (m)" : "Pressure (kPa)", input("hy-v", "Enter value"))}
      </div>
      {btn("Calculate Level", calc)}
      {resbox(
        <div className="grid grid-cols-3 gap-4">
          {res("Liquid Height", s.result["hy-r1"] || "—")}
          {res("Hydrostatic Pressure", s.result["hy-r2"] || "—")}
          {res("Level", s.result["hy-r3"] || "—", "var(--color-accent-green)")}
        </div>
      )}
      {note("Open vessel or pressure-balanced arrangement; constant density and standard gravity. DP = ρ·g·h / 1000.")}
    </Card>
  );
}

// ─── 7. I/O Spares Calculator ──────────────────────────────────
const IO_TYPES = ["AI", "AO", "DI", "DO"];

export function IoSparesTool() {
  const s = useToolState();
  const { input, select, resbox, res, field, note, btn } = useFieldHelpers(s);
  const { gi, g, set } = s;
  const calc = () => {
    const counts: Record<string, number> = { AI: gi("io-ai"), AO: gi("io-ao"), DI: gi("io-di"), DO: gi("io-do") };
    const channels: Record<string, number> = { AI: gi("io-chai") || 16, AO: gi("io-chao") || 8, DI: gi("io-chdi") || 32, DO: gi("io-chdo") || 32 };
    const spare = gi("io-spare") || 20;
    const reserve = g("io-reserve") === "yes" ? 1 : 0;
    if (Object.values(counts).some(isNaN) || spare < 0 || spare > 100) return;
    const plan: Record<string, { modules: number; installed: number; spare: number; utilization: number }> = {};
    IO_TYPES.forEach((k) => {
      const need = Math.ceil((counts[k] * (1 + spare / 100)) / channels[k]);
      const modules = Math.max(need, 0) + (reserve && Math.ceil(counts[k] / channels[k]) > 0 ? 1 : 0);
      const installed = modules * channels[k];
      plan[k] = { modules, installed, spare: installed - counts[k], utilization: counts[k] ? (counts[k] / installed) * 100 : 0 };
    });
    set("io-r1", `${plan.AI.modules} / ${plan.AI.spare}`);
    set("io-r2", `${plan.AO.modules} / ${plan.AO.spare}`);
    set("io-r3", `${plan.DI.modules} / ${plan.DI.spare}`);
    set("io-r4", `${plan.DO.modules} / ${plan.DO.spare}`);
  };
  return (
    <Card>
      <Header icon="🔌" title="DCS / PLC I/O Spares" desc="Module count with spare policy & reserve" />
      <div className="grid grid-cols-2 gap-4 mb-4">
        {field("AI Signals", input("io-ai", "e.g. 120"))}
        {field("AO Signals", input("io-ao", "e.g. 40"))}
        {field("DI Signals", input("io-di", "e.g. 200"))}
        {field("DO Signals", input("io-do", "e.g. 80"))}
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        {field("Spare Policy (%)", input("io-spare", "20"))}
        {field("Reserve Module / Type", select("io-reserve", ["yes", "no"]))}
      </div>
      {btn("Calculate Modules", calc)}
      {resbox(
        <div className="grid grid-cols-4 gap-2">
          {res("AI", s.result["io-r1"] || "—")}
          {res("AO", s.result["io-r2"] || "—")}
          {res("DI", s.result["io-r3"] || "—")}
          {res("DO", s.result["io-r4"] || "—", "var(--color-accent-green)")}
        </div>
      )}
      {note("Need = ceil(count × (1 + spare%) / channels). Reserve adds one module per type. Verify against vendor catalog and cabinet layout.")}
    </Card>
  );
}

// ─── 8. ISA Tag Builder ────────────────────────────────────────
const ISA_VARS: Record<string, string> = { P: "Pressure", T: "Temperature", F: "Flow", L: "Level", A: "Analysis", Q: "Quantity", V: "Vibration", D: "Density", H: "Hand", X: "Unspecified", Y: "Event", Z: "Position", S: "Speed", G: "Gauge" };
const ISA_FUNS: Record<string, string> = { T: "Transmitter", I: "Indicator", S: "Switch", A: "Alarm", R: "Recorder", C: "Controller", V: "Valve", E: "Element/sensor", G: "Gauge", Y: "Relay/compute", Z: "Positioner", K: "Check valve", J: "Power element" };

export function IsaTagTool() {
  const s = useToolState();
  const { textInput, select, resbox, res, field, note, btn } = useFieldHelpers(s);
  const { g, set } = s;
  const build = () => {
    const prefix = g("isa-prefix"), varL = g("isa-var") || "P", fnL = g("isa-fun") || "T";
    const loop = g("isa-loop"), suffix = g("isa-suffix"), style = g("isa-style") || "prefix";
    if (!/^\d{1,5}$/.test(loop || "")) { set("isa-r1", "—"); set("isa-r2", "Enter 1–5 digit loop number"); return; }
    if (!/^[A-Za-z0-9]{0,4}$/.test(prefix || "")) { set("isa-r1", "—"); set("isa-r2", "Prefix: 0–4 letters/digits"); return; }
    const core = varL + fnL + "-" + loop + (suffix || "").toUpperCase();
    const full = style === "prefix" && prefix ? prefix + core : core;
    set("isa-r1", full);
    set("isa-r2", `${varL} = ${ISA_VARS[varL]} · ${fnL} = ${ISA_FUNS[fnL]} · Loop ${loop}`);
  };
  return (
    <Card>
      <Header icon="🏷️" title="ISA Tag Builder" desc="Simplified ISA 5.1-style instrument tags" />
      <div className="grid grid-cols-2 gap-4 mb-4">
        {field("Project Prefix", textInput("isa-prefix", "e.g. 21"))}
        {field("Measured Variable", select("isa-var", Object.keys(ISA_VARS)))}
        {field("Function", select("isa-fun", Object.keys(ISA_FUNS)))}
        {field("Loop Number", textInput("isa-loop", "e.g. 201"))}
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        {field("Suffix", textInput("isa-suffix", "e.g. A (optional)"))}
        {field("Style", select("isa-style", ["prefix", "plain"]))}
      </div>
      {btn("Build Tag", build)}
      {resbox(
        <div className="text-center">
          <div className="text-[9px] font-semibold uppercase tracking-[.15em] text-[var(--color-text-muted)] mb-2" style={{ fontFamily: "var(--font-mono)" }}>Proposed Tag</div>
          <div className="text-3xl font-black tracking-[.05em]" style={{ color: "var(--color-accent-blue)", fontFamily: "var(--font-display)" }}>{s.result["isa-r1"] || "—"}</div>
          <div className="text-[10px] text-[var(--color-text-muted)] mt-2" style={{ fontFamily: "var(--font-mono)" }}>{s.result["isa-r2"] || ""}</div>
        </div>
      )}
      {note("Simplified ISA 5.1-style tag. Project naming rules and client standards always take precedence.")}
    </Card>
  );
}

// ─── 9. Loop Voltage Budget ────────────────────────────────────
export function LoopVoltageTool() {
  const s = useToolState();
  const { input, resbox, res, field, note, btn } = useFieldHelpers(s);
  const { gi, set } = s;
  const calc = () => {
    const v = gi("lv-supply"), i = gi("lv-current"), r = gi("lv-res"), dev = gi("lv-dev"), other = gi("lv-other");
    if ([v, i, r, dev, other].some(isNaN) || v <= 0 || i <= 0) return;
    const resistive = (i * r) / 1000;
    const margin = v - dev - other - resistive;
    const available = v - other - resistive;
    set("lv-r1", available.toFixed(2) + " V");
    set("lv-r2", margin.toFixed(2) + " V");
    set("lv-r3", margin >= 0 ? "Within budget" : "Insufficient voltage");
  };
  return (
    <Card>
      <Header icon="⚡" title="Loop Voltage Budget" desc="Will the transmitter have enough voltage?" />
      <div className="grid grid-cols-2 gap-4 mb-4">
        {field("Supply Voltage (V)", input("lv-supply", "e.g. 24"))}
        {field("Loop Current (mA)", input("lv-current", "e.g. 20"))}
        {field("Loop Resistance (Ω)", input("lv-res", "e.g. 250"))}
        {field("Device Minimum (V)", input("lv-dev", "e.g. 10.5"))}
      </div>
      <div className="mb-4">{field("Other Fixed Drops (V)", input("lv-other", "e.g. 0"))}</div>
      {btn("Calculate Budget", calc)}
      {resbox(
        <div className="grid grid-cols-3 gap-4">
          {res("Transmitter Available", s.result["lv-r1"] || "—")}
          {res("Voltage Margin", s.result["lv-r2"] || "—", (s.result["lv-r2"] || "").startsWith("-") ? "var(--color-accent-red)" : "var(--color-accent-green)")}
          {res("Budget Check", s.result["lv-r3"] || "—")}
        </div>
      )}
      {note("Use worst-case supply, configured maximum current and device/barrier data. A positive margin alone does not validate an IS circuit.")}
    </Card>
  );
}

// ─── 10. mA Loop Fault Finder ──────────────────────────────────
export function MaFaultTool() {
  const s = useToolState();
  const { input, resbox, res, field, note, btn } = useFieldHelpers(s);
  const { gi, g, set } = s;
  const calc = () => {
    const ma = gi("mf-ma"), lo = gi("mf-lo") || 3.6, hi = gi("mf-hi") || 21.0;
    if (isNaN(ma) || ma < 0 || ma > 30) { set("mf-r1", "—"); set("mf-r2", "Enter 0–30 mA"); set("mf-r3", ""); return; }
    let band = "", advice = "";
    if (ma < 0.5) { band = "Open circuit / no current"; advice = "Confirm loop power is energised. Measure voltage at transmitter terminals. Check for open terminals, blown fuse or disconnected cable."; }
    else if (ma < 3.8) { band = "Low-signal fault band"; advice = "Compare with configured fault current (3.6 mA common). Check supply polarity, high loop resistance, corroded terminals or sensor fault."; }
    else if (ma <= 20.5) { band = `Normal signal band (${(((ma - 4) / 16) * 100).toFixed(1)}% of span)`; advice = "Signal within normal operating band. Below 4 mA is a live-zero read, not a fault."; }
    else if (ma < 21.0) { band = "High limit transition"; advice = "Between 20.5 and 21 mA — treat as alarm state. Confirm configured fault threshold."; }
    else if (ma <= 23) { band = "High-signal fault band"; advice = "Typical causes: sensor/electronics fault, loop test mode left on, or wiring mistake feeding foreign current."; }
    else { band = "Over-range / unwanted current"; advice = "Suspect short to another source or incorrectly wired powered device. Isolate and test the transmitter alone."; }
    set("mf-r1", ma.toFixed(2) + " mA");
    set("mf-r2", band);
    set("mf-r3", advice);
  };
  return (
    <Card>
      <Header icon="🔍" title="mA Loop Fault Finder" desc="NAMUR NE43-style signal band diagnosis" />
      <div className="grid grid-cols-3 gap-4 mb-4">
        {field("Measured Current (mA)", input("mf-ma", "e.g. 3.5"))}
        {field("Low Fault Limit", input("mf-lo", "3.6"))}
        {field("High Fault Limit", input("mf-hi", "21.0"))}
      </div>
      {btn("Classify Signal", calc)}
      {resbox(
        <div className="grid grid-cols-1 gap-3">
          {res("Measured Current", s.result["mf-r1"] || "—")}
          <div className="text-center">
            <div className="text-[9px] font-semibold uppercase tracking-[.15em] text-[var(--color-text-muted)] mb-2" style={{ fontFamily: "var(--font-mono)" }}>Signal Band</div>
            <div className="text-lg font-black leading-none" style={{ color: (s.result["mf-r2"] || "").includes("Normal") ? "var(--color-accent-green)" : (s.result["mf-r2"] || "").includes("transition") ? "var(--color-accent-gold)" : "var(--color-accent-red)", fontFamily: "var(--font-display)" }}>{s.result["mf-r2"] || "—"}</div>
          </div>
          {s.result["mf-r3"] && <div className="text-[11px] leading-relaxed text-[var(--color-text-secondary)]" style={{ fontFamily: "var(--font-mono)" }}>{s.result["mf-r3"]}</div>}
        </div>
      )}
      {note("Diagnostic assistance only — not a conclusive fault determination. Confirm with device diagnostics and project drawings.")}
    </Card>
  );
}

// ─── 11. PID Simulator ─────────────────────────────────────────
export function PidTool() {
  const s = useToolState();
  const { input, resbox, res, field, note, btn } = useFieldHelpers(s);
  const { gi, g, set } = s;
  const [points, setPoints] = useState<[number, number, number][] | null>(null);
  const calc = () => {
    const kp = gi("pid-kp"), ki = gi("pid-ki"), kd = gi("pid-kd"), tau = gi("pid-tau"), gain = gi("pid-gain"), sp = gi("pid-sp"), dist = gi("pid-dist");
    if ([kp, ki, kd, tau, gain, sp, dist].some(isNaN) || kp < 0 || kp > 20 || ki < 0 || ki > 20 || kd < 0 || kd > 20) return;
    if (tau < 1 || tau > 100 || gain < 0.1 || gain > 3 || sp < 1 || sp > 90 || dist < -30 || dist > 30) return;
    let y = 0, integral = 0, lastY = 0;
    const dt = 0.1, pts: [number, number, number][] = [];
    for (let n = 0; n <= 2000; n++) {
      const time = n * dt, error = sp - y, derivative = -(y - lastY) / dt;
      let candidate = integral + error * dt;
      const raw = kp * error + ki * candidate + kd * derivative;
      const u = Math.max(0, Math.min(100, raw));
      if ((raw >= 0 && raw <= 100) || (raw > 100 && error < 0) || (raw < 0 && error > 0)) integral = candidate;
      pts.push([time, y, u]);
      lastY = y;
      y += (gain * u + (time >= 100 ? dist : 0) - y) * dt / tau;
    }
    setPoints(pts);
    const last = pts[pts.length - 1];
    const before = pts.filter((p) => p[0] < 100);
    const peak = Math.max(...before.map((p) => p[1]));
    set("pid-r1", last[1].toFixed(2) + "%");
    set("pid-r2", last[2].toFixed(2) + "%");
    set("pid-r3", Math.max(0, ((peak - sp) / sp) * 100).toFixed(2) + "%");
    set("pid-r4", (sp - last[1]).toFixed(2) + " pts");
  };
  const W = 560, H = 260, padL = 40, padB = 24;
  const chart = (() => {
    if (!points) return null;
    const xs = points.map((p) => p[0]), ys = points.map((p) => p[1]);
    const ymin = Math.min(0, ...ys), ymax = Math.max(100, ...ys);
    const X = (t: number) => padL + (t / 200) * (W - padL - 10);
    const Y = (v: number) => H - padB - ((v - ymin) / (ymax - ymin)) * (H - padB - 10);
    const pvPath = points.map((p, i) => `${i === 0 ? "M" : "L"}${X(p[0]).toFixed(1)},${Y(p[1]).toFixed(1)}`).join(" ");
    const outPath = points.map((p, i) => `${i === 0 ? "M" : "L"}${X(p[0]).toFixed(1)},${Y(p[2]).toFixed(1)}`).join(" ");
    return (
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto">
        <rect width={W} height={H} rx="12" fill="#0d1420" />
        {[0, 25, 50, 75, 100].map((v) => (
          <g key={v}>
            <line x1={padL} y1={Y(v)} x2={W - 10} y2={Y(v)} stroke="#1e2d47" strokeWidth="0.5" />
            <text x={padL - 6} y={Y(v) + 3} textAnchor="end" fill="#5a6a85" fontSize="8" style={{ fontFamily: "var(--font-mono)" }}>{v}</text>
          </g>
        ))}
        {/* disturbance marker at 100s */}
        <line x1={X(100)} y1={10} x2={X(100)} y2={H - padB} stroke="#ff6b35" strokeWidth="1" strokeDasharray="4 3" />
        <text x={X(100) + 4} y={16} fill="#ff6b35" fontSize="8" style={{ fontFamily: "var(--font-mono)" }}>disturbance</text>
        <path d={pvPath} fill="none" stroke="#00b4ff" strokeWidth="2.5" />
        <path d={outPath} fill="none" stroke="#00e676" strokeWidth="1.5" strokeOpacity="0.7" />
        {/* setpoint */}
        <line x1={padL} y1={Y(g("pid-sp") ? parseFloat(g("pid-sp")) : 50)} x2={W - 10} y2={Y(g("pid-sp") ? parseFloat(g("pid-sp")) : 50)} stroke="#F5A800" strokeWidth="1.5" strokeDasharray="6 4" />
        <text x={W - 14} y={16} textAnchor="end" fill="#8a9bb5" fontSize="8" style={{ fontFamily: "var(--font-mono)" }}>PV — Output — SP</text>
      </svg>
    );
  })();
  return (
    <Card>
      <Header icon="🎛️" title="PID Loop Simulator" desc="First-order process · teaching simulation" />
      <div className="grid grid-cols-2 gap-4 mb-4">
        {field("Kp (0–20)", input("pid-kp", "e.g. 2"))}
        {field("Ki (0–20)", input("pid-ki", "e.g. 0.1"))}
        {field("Kd (0–20)", input("pid-kd", "0"))}
        {field("Time Constant τ (1–100 s)", input("pid-tau", "10"))}
        {field("Process Gain (0.1–3)", input("pid-gain", "1"))}
        {field("Setpoint (1–90%)", input("pid-sp", "50"))}
      </div>
      <div className="mb-4">{field("Disturbance (−30…+30)", input("pid-dist", "10"))}</div>
      {btn("Run Simulation", calc)}
      {chart && <div className="mb-4">{chart}</div>}
      {resbox(
        <div className="grid grid-cols-4 gap-2">
          {res("Final PV", s.result["pid-r1"] || "—")}
          {res("Final Output", s.result["pid-r2"] || "—", "var(--color-accent-green)")}
          {res("Pre-Disturbance Overshoot", s.result["pid-r3"] || "—", "var(--color-accent-orange)")}
          {res("Final Error", s.result["pid-r4"] || "—")}
        </div>
      )}
      {note("First-order process, no dead time. Output limited 0–100%; derivative on measurement with conditional anti-windup. Disturbance starts at 100 s. Teaching simulation, not plant tuning guidance.")}
    </Card>
  );
}

// ─── 12. Pressure Calibrator (5-point) ─────────────────────────
export function PressureCalibratorTool() {
  const s = useToolState();
  const { input, resbox, res, field, note, btn } = useFieldHelpers(s);
  const { gi, set } = s;
  const [table, setTable] = useState<[number, string, string][] | null>(null);
  const calc = () => {
    const l = gi("pc-lrv"), u = gi("pc-urv"), p = gi("pc-pos");
    if ([l, u, p].some(isNaN) || u <= l || p < 0 || p > 100) return;
    const applied = l + ((u - l) * p) / 100;
    const mA = 4 + 0.16 * p;
    set("pc-r1", applied.toFixed(3));
    set("pc-r2", mA.toFixed(3) + " mA");
    setTable([0, 25, 50, 75, 100].map((x, i) => [i + 1, `${x}%`, `${(l + ((u - l) * x) / 100).toFixed(3)}`, `${(4 + 0.16 * x).toFixed(3)} mA`] as unknown as [number, string, string]));
  };
  return (
    <Card>
      <Header icon="🧮" title="Pressure Calibrator" desc="5-point calibration test points" />
      <div className="grid grid-cols-2 gap-4 mb-4">
        {field("LRV", input("pc-lrv", "e.g. 0"))}
        {field("URV", input("pc-urv", "e.g. 10"))}
      </div>
      <div className="mb-4">{field("Test Position (% of span)", input("pc-pos", "e.g. 50"))}</div>
      {btn("Calculate Test Points", calc)}
      {resbox(
        <div className="grid grid-cols-2 gap-4">
          {res("Applied Value", s.result["pc-r1"] || "—")}
          {res("Expected Output", s.result["pc-r2"] || "—", "var(--color-accent-green)")}
        </div>
      )}
      {table && (
        <div className="overflow-x-auto rounded-lg border border-[var(--color-border)] mb-3">
          <table className="w-full text-xs">
            <thead>
              <tr style={{ background: "var(--color-bg-raise)" }}>
                {["Point", "Span", "Applied", "Expected"].map((h) => (
                  <th key={h} className="text-left px-3 py-2 text-[9px] font-bold uppercase tracking-[.08em] text-[var(--color-accent-blue)]" style={{ fontFamily: "var(--font-mono)" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {table.map((r) => (
                <tr key={r[0]} className="border-t border-[var(--color-border)]">
                  {r.map((c, j) => <td key={j} className="px-3 py-2 text-[var(--color-text-secondary)]">{c}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {note("Rising and falling points check linearity and hysteresis. Apply both directions and record as-found / as-left.")}
    </Card>
  );
}

// ─── 13. Punch List Generator ──────────────────────────────────
const PUNCH_CATS = ["Documentation", "Instrument", "Electrical", "Piping", "Functional", "Walkdown", "Other"];

export function PunchListTool() {
  const [rows, setRows] = useState<{ tag: string; category: string; issue: string; owner: string; status: string; date: string }[]>([]);
  const [form, setForm] = useState({ tag: "", category: "Instrument", issue: "", owner: "", status: "Open", date: new Date().toISOString().slice(0, 10) });
  const stats = {
    total: rows.length,
    open: rows.filter((r) => r.status === "Open").length,
    closed: rows.filter((r) => r.status === "Closed").length,
    inprogress: rows.filter((r) => r.status === "In progress").length,
  };
  const add = () => {
    if (!form.tag.trim()) return;
    setRows((p) => [...p, { ...form, tag: form.tag.trim() }]);
    setForm((f) => ({ ...f, tag: "", issue: "", owner: "" }));
  };
  const remove = (i: number) => setRows((p) => p.filter((_, j) => j !== i));
  return (
    <Card>
      <Header icon="📋" title="Punch List Generator" desc="Track punch items during walkdown" />
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="text-3xl font-black" style={{ color: "var(--color-accent-blue)", fontFamily: "var(--font-display)" }}>{stats.total}</div>
          <div className="text-[9px] font-semibold uppercase tracking-[.13em] text-[var(--color-text-muted)]" style={{ fontFamily: "var(--font-mono)" }}>Records</div>
        </div>
        <div className="flex gap-2 text-[10px] font-semibold">
          <span className="px-2 py-1 rounded text-[var(--color-accent-red)]" style={{ background: "rgba(255,61,92,0.08)" }}>{stats.open} Open</span>
          <span className="px-2 py-1 rounded text-[var(--color-accent-gold)]" style={{ background: "rgba(212,175,55,0.08)" }}>{stats.inprogress} In progress</span>
          <span className="px-2 py-1 rounded text-[var(--color-accent-green)]" style={{ background: "rgba(0,230,118,0.08)" }}>{stats.closed} Closed</span>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-3">
        <input className="px-3 py-2 rounded-md text-xs bg-[var(--color-bg-raise)] border border-[var(--color-border)] text-[var(--color-text-primary)] outline-none" placeholder="Tag (e.g. FT-201)" value={form.tag} onChange={(e) => setForm((f) => ({ ...f, tag: e.target.value }))} />
        <select className="px-3 py-2 rounded-md text-xs bg-[var(--color-bg-raise)] border border-[var(--color-border)] text-[var(--color-text-primary)] outline-none" value={form.category} onChange={(e) => setForm((f) => ({ ...f, category: e.target.value }))}>
          {PUNCH_CATS.map((c) => <option key={c}>{c}</option>)}
        </select>
        <input className="px-3 py-2 rounded-md text-xs bg-[var(--color-bg-raise)] border border-[var(--color-border)] text-[var(--color-text-primary)] outline-none" placeholder="Issue" value={form.issue} onChange={(e) => setForm((f) => ({ ...f, issue: e.target.value }))} />
        <input className="px-3 py-2 rounded-md text-xs bg-[var(--color-bg-raise)] border border-[var(--color-border)] text-[var(--color-text-primary)] outline-none" placeholder="Owner" value={form.owner} onChange={(e) => setForm((f) => ({ ...f, owner: e.target.value }))} />
        <select className="px-3 py-2 rounded-md text-xs bg-[var(--color-bg-raise)] border border-[var(--color-border)] text-[var(--color-text-primary)] outline-none" value={form.status} onChange={(e) => setForm((f) => ({ ...f, status: e.target.value }))}>
          {["Open", "In progress", "Closed"].map((st) => <option key={st}>{st}</option>)}
        </select>
        <input className="px-3 py-2 rounded-md text-xs bg-[var(--color-bg-raise)] border border-[var(--color-border)] text-[var(--color-text-primary)] outline-none" type="date" value={form.date} onChange={(e) => setForm((f) => ({ ...f, date: e.target.value }))} />
      </div>
      <button className="w-full py-2.5 rounded-md text-[10px] font-bold uppercase tracking-[.09em] text-black mb-4" style={{ background: "var(--color-accent-blue)", fontFamily: "var(--font-mono)" }} onClick={add}>+ Add Punch Item</button>
      {rows.length === 0 ? (
        <div className="rounded-lg p-6 text-center text-xs text-[var(--color-text-muted)]" style={{ background: "var(--color-bg-raise)", fontFamily: "var(--font-mono)" }}>No punch records yet. Add rows above.</div>
      ) : (
        <div className="space-y-2">
          {rows.map((r, i) => (
            <div key={i} className="flex items-center gap-2.5 px-3 py-2 rounded-md" style={{ background: "var(--color-bg-raise)" }}>
              <div className="flex-1 min-w-0">
                <span className="text-xs font-bold text-[var(--color-text-primary)]">{r.tag}</span>
                <span className="text-[10px] text-[var(--color-text-muted)] ml-2">{r.category} · {r.issue}</span>
              </div>
              <span className={`text-[9px] font-semibold px-2 py-0.5 rounded ${r.status === "Closed" ? "text-[var(--color-accent-green)]" : r.status === "In progress" ? "text-[var(--color-accent-gold)]" : "text-[var(--color-accent-red)]"}`} style={{ background: "var(--color-bg-card)" }}>{r.status}</span>
              <button className="text-[9px] text-[var(--color-text-muted)] hover:text-[var(--color-accent-red)]" onClick={() => remove(i)}>✕</button>
            </div>
          ))}
        </div>
      )}
      <Note text="Records are stored in this browser session. Export to CSV before clearing browser data." />
    </Card>
  );
}

// ─── 14. RTD & Thermocouple Reference ──────────────────────────
function rtd(t: number) {
  return 100 * (1 + 3.9083e-3 * t - 5.775e-7 * t * t + (t < 0 ? -4.183e-12 * (t - 100) * t * t * t : 0));
}
const TC_COEF: Record<string, { max: number; c: number[] }> = {
  K: { max: 1372, c: [-0.176004136860e-1, 0.389212049750e-1, 0.185587700320e-4, -0.994575928740e-7, 0.318409457190e-9, -0.560728448890e-12, 0.560750590590e-15, -0.320207200030e-18, 0.971511471520e-22, -0.121047212750e-25] },
  J: { max: 760, c: [0, 0.503811878150e-1, 0.304758369300e-4, -0.856810657200e-7, 0.132281952950e-9, -0.170529583370e-12, 0.209480906970e-15, -0.125383953360e-18, 0.156317256970e-22] },
  T: { max: 400, c: [0, 0.387481063640e-1, 0.332922278800e-4, 0.206182434040e-6, -0.218822568460e-8, 0.109968809280e-10, -0.308157587720e-13, 0.454791352900e-16, -0.275129016730e-19] },
};
function tc(type: string, t: number) {
  const d = TC_COEF[type];
  if (!d || t < 0 || t > d.max) return NaN;
  let e = 0;
  for (let i = d.c.length - 1; i >= 0; i--) e = e * t + d.c[i];
  if (type === "K") e += 0.1185976 * Math.exp(-0.1183432e-3 * (t - 126.9686) ** 2);
  return e;
}

export function RtdTcReferenceTool() {
  const s = useToolState();
  const { input, select, resbox, res, field, note, btn } = useFieldHelpers(s);
  const { gi, g, set } = s;
  const [table, setTable] = useState<[string, string, string][] | null>(null);
  const calc = () => {
    const type = g("rt-type") || "pt100";
    const mode = g("rt-mode") || "single";
    if (mode === "single") {
      const t = gi("rt-temp"), cj = gi("rt-cj") || 0;
      if (isNaN(t)) return;
      if (type === "pt100") {
        if (t < -200 || t > 850) { set("rt-r1", "—"); set("rt-r2", "Range −200…850 °C"); return; }
        const r = rtd(t);
        set("rt-r1", r.toFixed(4) + " Ω");
        set("rt-r2", `IEC 60751 · Class A ±${(0.15 + 0.002 * Math.abs(t)).toFixed(3)} °C`);
      } else {
        const d = TC_COEF[type];
        if (t < 0 || t > d.max || cj < 0 || cj > 100) { set("rt-r1", "—"); set("rt-r2", `Range 0…${d.max} °C · CJ 0…100 °C`); return; }
        const e = tc(type, t) - tc(type, cj);
        set("rt-r1", e.toFixed(4) + " mV");
        set("rt-r2", `NIST ITS-90 · Type ${type} · CJ ${cj.toFixed(1)} °C`);
      }
    } else {
      const from = gi("rt-from"), to = gi("rt-to"), step = gi("rt-step");
      if ([from, to, step].some(isNaN) || step <= 0) return;
      const lo = Math.min(from, to), hi = Math.max(from, to);
      const rows: [string, string, string][] = [];
      if (type === "pt100") {
        if (lo < -200 || hi > 850) return;
        for (let t = lo; t <= hi + 1e-9; t += step) {
          const r = rtd(t);
          rows.push([t.toFixed(1), r.toFixed(4) + " Ω", `A ±${(0.15 + 0.002 * Math.abs(t)).toFixed(3)}`]);
        }
      } else {
        const d = TC_COEF[type];
        if (lo < 0 || hi > d.max) return;
        for (let t = lo; t <= hi + 1e-9; t += step) {
          rows.push([t.toFixed(1), tc(type, t).toFixed(4) + " mV", "Class 1 ≈ ±1.5 °C"]);
        }
      }
      setTable(rows);
      set("rt-r1", `${rows.length} rows`);
      set("rt-r2", `${lo.toFixed(1)}…${hi.toFixed(1)} °C · step ${step.toFixed(1)}`);
    }
  };
  return (
    <Card>
      <Header icon="📟" title="RTD & Thermocouple Reference" desc="Pt100 / Type K·J·T reference values & tables" />
      <div className="grid grid-cols-2 gap-4 mb-4">
        {field("Sensor", select("rt-type", ["pt100", "K", "J", "T"]))}
        {field("Mode", select("rt-mode", ["single", "table"]))}
      </div>
      {g("rt-mode") === "single" ? (
        <div className="grid grid-cols-2 gap-4 mb-4">
          {field("Temperature (°C)", input("rt-temp", "e.g. 100"))}
          {field("Reference Junction (°C)", input("rt-cj", "0"))}
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-4 mb-4">
          {field("From (°C)", input("rt-from", "0"))}
          {field("To (°C)", input("rt-to", "200"))}
          {field("Step (°C)", input("rt-step", "10"))}
        </div>
      )}
      {btn("Get Reference", calc)}
      {resbox(
        <div className="grid grid-cols-2 gap-4">
          {res(g("rt-mode") === "single" ? "Reference Value" : "Rows", s.result["rt-r1"] || "—")}
          {res("Detail", s.result["rt-r2"] || "—", "var(--color-text-secondary)")}
        </div>
      )}
      {table && (
        <div className="overflow-x-auto rounded-lg border border-[var(--color-border)] max-h-64 overflow-y-auto">
          <table className="w-full text-xs">
            <thead className="sticky top-0">
              <tr style={{ background: "var(--color-bg-raise)" }}>
                {["Temperature (°C)", g("rt-type") === "pt100" ? "Resistance (Ω)" : "EMF (mV)", "Tolerance"].map((h) => (
                  <th key={h} className="text-left px-3 py-2 text-[9px] font-bold uppercase tracking-[.08em] text-[var(--color-accent-blue)]" style={{ fontFamily: "var(--font-mono)" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {table.map((r, i) => (
                <tr key={i} className="border-t border-[var(--color-border)]">
                  {r.map((c, j) => <td key={j} className="px-3 py-1.5 text-[var(--color-text-secondary)]">{c}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {note("Generated from the same validated Pt100 and NIST forward reference functions used by the interactive calculators.")}
    </Card>
  );
}

// ─── 15. Wet Leg / Dry Leg ─────────────────────────────────────
export function WetLegTool() {
  const s = useToolState();
  const { input, select, resbox, res, field, note, btn } = useFieldHelpers(s);
  const { gi, g, set } = s;
  const calc = () => {
    const rho = gi("wl-rho"), rr = gi("wl-rr"), h = gi("wl-h"), z = gi("wl-z"), ref = gi("wl-ref"), p = gi("wl-pos");
    const wet = g("wl-leg") === "wet";
    if ([rho, rr, h, z, ref, p].some(isNaN) || rho <= 0 || rr <= 0 || h <= 0 || z < 0 || ref < 0 || p < 0 || p > 100) return;
    if (wet && ref < h + z) { set("wl-r1", "—"); set("wl-r2", "Wet-leg height must reach upper level + offset"); return; }
    const lrv = ((rho * z - (wet ? rr * ref : 0)) * 9.80665) / 1000;
    const urv = lrv + (rho * 9.80665 * h) / 1000;
    const dp = lrv + (urv - lrv) * (p / 100);
    set("wl-r1", lrv.toFixed(3) + " kPa");
    set("wl-r2", urv.toFixed(3) + " kPa");
    set("wl-r3", dp.toFixed(3) + " kPa");
    set("wl-r4", (4 + 0.16 * p).toFixed(3) + " mA");
  };
  return (
    <Card>
      <Header icon="🌊" title="Wet Leg / Dry Leg" desc="DP level with reference-leg offset" />
      <div className="grid grid-cols-2 gap-4 mb-4">
        {field("Process Density (kg/m³)", input("wl-rho", "e.g. 1000"))}
        {field("Reference Density (kg/m³)", input("wl-rr", "e.g. 1000"))}
        {field("Level Span (m)", input("wl-h", "e.g. 3"))}
        {field("Transmitter Offset z (m)", input("wl-z", "e.g. 0.5"))}
        {field("Reference Height (m)", input("wl-ref", "e.g. 4"))}
        {field("Leg Type", select("wl-leg", ["wet", "dry"]))}
      </div>
      <div className="mb-4">{field("Level Position (% of span)", input("wl-pos", "e.g. 50"))}</div>
      {btn("Calculate Range", calc)}
      {resbox(
        <div className="grid grid-cols-4 gap-2">
          {res("LRV", s.result["wl-r1"] || "—")}
          {res("URV", s.result["wl-r2"] || "—")}
          {res("Current DP", s.result["wl-r3"] || "—")}
          {res("Output", s.result["wl-r4"] || "—", "var(--color-accent-green)")}
        </div>
      )}
      {note("HP connects to bottom tap; transmitter below bottom tap by z. DP = ρg(h+z) − ρref·g·Href for a wet LP leg. A wet leg can give a negative LRV.")}
    </Card>
  );
}