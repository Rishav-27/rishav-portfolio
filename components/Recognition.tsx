import Section, { eyebrow, h2 } from "./Section";
import { certifications } from "../data/resume";

export default function Recognition() {
  return (
    <Section id="certifications">
      <div data-reveal style={eyebrow}>07 — RECOGNITION</div>
      <h2 data-reveal style={{ ...h2, margin: "0 0 clamp(36px,5vw,56px)" }}>Certifications &amp; awards.</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))", gap: 14 }}>
        {certifications.map((c) => (
          <div key={c.title} data-reveal style={{ border: "1px solid var(--line)", borderRadius: 18, padding: "26px 24px", display: "flex", flexDirection: "column", gap: 10, minHeight: 170 }}>
            <div style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: 13, color: "var(--faint)" }}>{c.date}</div>
            <div style={{ fontSize: 19, fontWeight: 700, letterSpacing: "-.02em", lineHeight: 1.25, marginTop: "auto", textWrap: "pretty" }}>{c.title}</div>
            <div style={{ fontSize: 14, color: "var(--dim)" }}>{c.issuer}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}
