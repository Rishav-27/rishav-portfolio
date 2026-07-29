import Section, { eyebrow, h2 } from "./Section";
import { building } from "../data/resume";

export default function Building() {
  return (
    <Section id="building">
      <div data-reveal style={eyebrow}>03 — IN PROGRESS</div>
      <h2 data-reveal style={{ ...h2, margin: "0 0 20px", maxWidth: "18ch" }}>Four things on the bench right now.</h2>
      <p data-reveal style={{ fontSize: "clamp(16px,2vw,19px)", lineHeight: 1.6, color: "var(--dim)", maxWidth: "56ch", margin: "0 0 clamp(36px,5vw,56px)", textWrap: "pretty" }}>
        An eight-week sprint to ship four MVPs on one shared stack — Next.js, TypeScript, Supabase, Tailwind. Building in public; each ships as it&apos;s done.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 14 }}>
        {building.map((b) => (
          <div key={b.name} data-reveal style={{ border: "1px solid var(--line)", borderRadius: 20, padding: "28px 26px", display: "flex", flexDirection: "column", gap: 14, minHeight: 250 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--ok)", animation: "om-pulse 2.4s ease-in-out infinite", flex: "none" }} />
              <span style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: 12.5, color: "var(--faint)", letterSpacing: ".06em" }}>{b.status}</span>
            </div>
            <div>
              <div style={{ fontSize: 24, fontWeight: 700, letterSpacing: "-.025em", marginBottom: 4 }}>{b.name}</div>
              <div style={{ fontSize: 14.5, color: "var(--dim)" }}>{b.type}</div>
            </div>
            <p style={{ fontSize: 15, lineHeight: 1.58, color: "var(--dim)", margin: 0, textWrap: "pretty" }}>{b.blurb}</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 7, marginTop: "auto" }}>
              {b.tech.map((t) => (
                <span key={t} style={{ padding: "5px 11px", fontSize: 12, fontWeight: 500, color: "var(--dim)", background: "var(--surf)", border: "1px solid var(--line)", borderRadius: 999 }}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
