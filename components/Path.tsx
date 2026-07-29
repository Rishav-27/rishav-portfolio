import Section, { eyebrow, h2 } from "./Section";
import { jobs, education } from "../data/resume";

const stamp = { fontFamily: "var(--font-geist-mono), monospace", fontSize: 13, color: "var(--faint)", marginBottom: 10 } as const;
const heading = { fontSize: 14, fontWeight: 600, textTransform: "uppercase", letterSpacing: ".14em", color: "var(--faint)", margin: "0 0 32px", paddingBottom: 16, borderBottom: "1px solid var(--line)" } as const;

export default function Path() {
  return (
    <Section id="experience">
      <div data-reveal style={eyebrow}>04 — PATH</div>
      <h2 data-reveal style={{ ...h2, margin: "0 0 clamp(40px,6vw,72px)" }}>Experience &amp; education.</h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "clamp(56px,8vw,96px)" }}>
        <div>
          <h3 data-reveal style={heading}>Work</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 38 }}>
            {jobs.map((j) => (
              <div key={j.company} data-reveal style={{ position: "relative", paddingLeft: 26 }}>
                <div aria-hidden style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 1, background: "var(--line)" }} />
                <div data-grow="y" aria-hidden style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 1, background: "var(--line2)", transformOrigin: "top center" }} />
                <div style={{ position: "absolute", left: -5, top: 4, width: 11, height: 11, borderRadius: "50%", background: "var(--fg)" }} />
                <div style={stamp}>{j.duration}</div>
                <h4 style={{ fontSize: 22, fontWeight: 700, letterSpacing: "-.02em", margin: "0 0 4px" }}>{j.role}</h4>
                <a href={j.url} target="_blank" rel="noreferrer" style={{ fontSize: 16, color: "var(--dim)", display: "inline-block", marginBottom: 22, textDecoration: "underline", textUnderlineOffset: 4, textDecorationColor: "var(--line2)" }}>{j.company}</a>
                <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 14 }}>
                  {j.items.map((it) => (
                    <li key={it} style={{ display: "flex", gap: 12, fontSize: 15.5, lineHeight: 1.6, color: "var(--dim)" }}>
                      <span style={{ color: "var(--faint)", flex: "none" }}>—</span><span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 data-reveal style={heading}>Education</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 0 }}>
            {education.map((e) => (
              <div key={e.level} data-reveal style={{ position: "relative", paddingRight: "clamp(22px,3vw,40px)", paddingBottom: 24 }}>
                <div style={{ display: "flex", alignItems: "center", marginBottom: 22 }}>
                  <span style={{ width: 13, height: 13, borderRadius: "50%", border: "2px solid var(--fg)", background: "var(--bg)", flex: "none", boxSizing: "border-box" }} />
                  <span data-grow="x" aria-hidden style={{ flex: 1, height: 1, background: "var(--line2)", transformOrigin: "left center" }} />
                </div>
                <div style={stamp}>{e.duration}</div>
                <h4 style={{ fontSize: 19, fontWeight: 700, letterSpacing: "-.02em", margin: "0 0 4px", textWrap: "pretty" }}>{e.level}</h4>
                <div style={{ fontSize: 15, color: "var(--dim)", marginBottom: 12 }}>{e.institution} · {e.location}</div>
                <div style={{ display: "inline-block", fontFamily: "var(--font-geist-mono), monospace", fontSize: 13, padding: "5px 11px", borderRadius: 8, background: "var(--surf)", border: "1px solid var(--line)", color: "var(--dim)" }}>{e.score}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
