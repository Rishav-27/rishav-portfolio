import { skills } from "../data/resume";

const flat = skills.flatMap((s) => [...s.core, ...s.rest]);
const half = Math.ceil(flat.length / 2);
const rowA = [...flat.slice(0, half), ...flat.slice(0, half)];
const rowB = [...flat.slice(half), ...flat.slice(half)];

function Marquee({ items, seconds, opacity, reverse }: { items: string[]; seconds: number; opacity: number; reverse?: boolean }) {
  return (
    <div style={{ display: "flex", width: "max-content", animation: `om-marquee ${seconds}s linear infinite${reverse ? " reverse" : ""}` }}>
      {items.map((s, i) => (
        <div key={`${s}-${i}`} style={{
          flex: "none", margin: "0 clamp(16px,3vw,34px)", fontSize: "clamp(28px,6vw,58px)", fontWeight: 800,
          letterSpacing: "-.03em", color: "transparent", WebkitTextStroke: "1px var(--stroke)", opacity, whiteSpace: "nowrap",
        }}>{s}</div>
      ))}
    </div>
  );
}

export default function Toolkit() {
  return (
    <section id="skills" style={{ padding: "var(--sec) 0", borderTop: "1px solid var(--line)", overflow: "hidden" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 var(--pad) clamp(36px,5vw,56px)" }}>
        <div data-reveal style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: 13, color: "var(--faint)", letterSpacing: ".14em", marginBottom: 22 }}>05 — TOOLKIT</div>
        <h2 data-reveal style={{ fontSize: "var(--h2)", lineHeight: 1.02, fontWeight: 800, letterSpacing: "-.04em", margin: 0 }}>What I work with.</h2>
      </div>

      <div style={{ padding: "clamp(6px,1.5vw,14px) 0 clamp(36px,5vw,56px)", display: "flex", flexDirection: "column", gap: "clamp(6px,1.2vw,14px)" }}>
        <Marquee items={rowA} seconds={46} opacity={.42} />
        <Marquee items={rowB} seconds={38} opacity={.22} reverse />
      </div>

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 var(--pad)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))", gap: 1, background: "var(--line)", border: "1px solid var(--line)", borderRadius: 20, overflow: "hidden" }}>
          {skills.map((g) => (
            <div key={g.num} data-reveal style={{ background: "var(--bg)", padding: "28px 26px", display: "flex", flexDirection: "column", gap: 18 }}>
              <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 10 }}>
                <div style={{ fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: ".14em", color: "var(--faint)" }}>{g.category}</div>
                <div style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: 12, color: "var(--faint)" }}>{g.num}</div>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {g.core.map((i) => (
                  <span key={i} style={{ padding: "7px 13px", fontSize: 13.5, fontWeight: 600, color: "var(--btn-fg)", background: "var(--btn-bg)", borderRadius: 9 }}>{i}</span>
                ))}
                {g.rest.map((i) => (
                  <span key={i} style={{ padding: "7px 13px", fontSize: 13.5, fontWeight: 500, color: "var(--dim)", border: "1px solid var(--line)", borderRadius: 9 }}>{i}</span>
                ))}
              </div>
              <div style={{ fontSize: 13.5, lineHeight: 1.55, color: "var(--dim)", marginTop: "auto", textWrap: "pretty" }}>{g.note}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 1280, margin: "clamp(16px,2vw,20px) auto 0", padding: "0 var(--pad)", display: "flex", alignItems: "center", gap: 10 }}>
        <span style={{ width: 11, height: 11, borderRadius: 3, background: "var(--btn-bg)", flex: "none" }} />
        <span style={{ fontSize: 13.5, color: "var(--dim)" }}>Filled = what I reach for daily</span>
      </div>
    </section>
  );
}
