import { skills } from "../data/resume";

const tier = { fontFamily: "var(--font-geist-mono), monospace", fontSize: 11.5, textTransform: "uppercase", letterSpacing: ".1em", color: "var(--faint)", marginBottom: 10 } as const;
const list = { listStyle: "none", margin: 0, padding: 0, display: "flex", flexWrap: "wrap", gap: 8 } as const;
const pill = { display: "inline-flex", alignItems: "center", gap: 8, padding: "7px 13px", fontSize: 13.5, fontWeight: 500, color: "var(--fg)", background: "var(--surf)", border: "1px solid var(--line)", borderRadius: 9 } as const;
const dot = { width: 7, height: 7, borderRadius: "50%", background: "var(--ok)", flex: "none" } as const;

const flat = skills.flatMap((s) => [...s.core, ...s.rest]);
const half = Math.ceil(flat.length / 2);
const rowA = [...flat.slice(0, half), ...flat.slice(0, half)];
const rowB = [...flat.slice(half), ...flat.slice(half)];

function Marquee({ items, seconds, opacity, reverse }: { items: string[]; seconds: number; opacity: number; reverse?: boolean }) {
  return (
    <div data-marquee-row style={{ display: "flex", width: "max-content", animation: `om-marquee ${seconds}s linear infinite${reverse ? " reverse" : ""}` }}>
      {items.map((s, i) => (
        <div key={`${s}-${i}`} data-marquee-word style={{
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

      <div data-marquee style={{ padding: "clamp(6px,1.5vw,14px) 0 clamp(36px,5vw,56px)", display: "flex", flexDirection: "column", gap: "clamp(6px,1.2vw,14px)" }}>
        <Marquee items={rowA} seconds={46} opacity={.42} />
        <Marquee items={rowB} seconds={38} opacity={.22} reverse />
      </div>

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 var(--pad)" }}>
        <p data-reveal style={{ fontSize: "clamp(15.5px,1.8vw,17px)", lineHeight: 1.6, color: "var(--dim)", maxWidth: "80ch", margin: "0 0 22px", textWrap: "pretty" }}>
          Everything listed here I&apos;ve used in real, shipped work.{" "}
          <span style={{ display: "inline-flex", alignItems: "center", gap: 7, color: "var(--fg)", fontWeight: 500 }}>
            <span aria-hidden style={dot} />Green dot
          </span>{" "}
          = my core stack, used every day.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))", gap: 1, background: "var(--line)", border: "1px solid var(--line)", borderRadius: 20, overflow: "hidden" }}>
          {skills.map((g) => (
            <div key={g.num} data-reveal style={{ background: "var(--bg)", padding: "28px 26px", display: "flex", flexDirection: "column", gap: 22 }}>
              <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 10 }}>
                <h3 style={{ margin: 0, fontSize: 19, fontWeight: 700, letterSpacing: "-.02em" }}>{g.category}</h3>
                <div style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: 12, color: "var(--faint)" }}>{g.num}</div>
              </div>
              <div>
                <div style={tier}>Core · every day</div>
                <ul style={list}>
                  {g.core.map((i) => (
                    <li key={i} style={{ ...pill, fontWeight: 600 }}>
                      <span aria-hidden style={dot} />{i}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div style={tier}>Also used in projects</div>
                <ul style={list}>
                  {g.rest.map((i) => (
                    <li key={i} style={pill}>{i}</li>
                  ))}
                </ul>
              </div>
              <div style={{ fontSize: 13.5, lineHeight: 1.55, color: "var(--dim)", marginTop: "auto", paddingTop: 16, borderTop: "1px solid var(--line)", minHeight: "calc(4.65em + 17px)", textWrap: "pretty" }}>{g.note}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
