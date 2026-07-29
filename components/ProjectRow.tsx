import Link from "next/link";
import type { Project } from "../data/resume";

export default function ProjectRow({ p }: { p: Project }) {
  return (
    <div data-tilt style={{ display: "flex", gap: "clamp(24px,4vw,64px)", alignItems: "center", willChange: "transform" }}>
      <div style={{ flex: "1 1 0", minWidth: 0, width: "100%" }}>
        {p.img ? (
          <div role="img" aria-label={p.title} style={{
            borderRadius: 20, overflow: "hidden", border: "1px solid var(--line)",
            backgroundColor: "var(--surf)", backgroundImage: `url(${p.img})`,
            backgroundSize: "cover", backgroundPosition: "top center", aspectRatio: "16/9",
          }} />
        ) : (
          <div style={{
            borderRadius: 20, border: "1px solid var(--line)", background: "var(--surf)", aspectRatio: "16/11",
            display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: 12,
          }}>
            <div style={{ fontSize: "clamp(34px,6vw,64px)", fontWeight: 800, letterSpacing: "-.04em", lineHeight: 1, color: "transparent", WebkitTextStroke: "1px var(--stroke)", opacity: .5 }}>{p.title}</div>
            <div style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: 12.5, color: "var(--faint)", letterSpacing: ".14em" }}>{p.kind === "In progress" ? "BUILDING NOW" : "NO PREVIEW"}</div>
          </div>
        )}
      </div>

      <div style={{ flex: "1 1 0", minWidth: 0, width: "100%" }}>
        <div style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: 13, color: "var(--faint)", letterSpacing: ".1em", marginBottom: 14 }}>{p.num} · {p.year}</div>
        <h3 style={{ fontSize: "clamp(26px,4.6vw,38px)", lineHeight: 1.08, fontWeight: 700, letterSpacing: "-.035em", margin: "0 0 8px" }}>{p.title}</h3>
        <div style={{ fontSize: 15, color: "var(--dim)", marginBottom: 20 }}>{p.kicker}</div>
        <p style={{ fontSize: "clamp(16px,2vw,18px)", lineHeight: 1.62, color: "var(--dim)", margin: "0 0 24px", textWrap: "pretty" }}>{p.description}</p>

        <ul style={{ listStyle: "none", margin: "0 0 26px", padding: 0, display: "flex", flexDirection: "column", gap: 12 }}>
          {p.items.map((it) => (
            <li key={it} style={{ display: "flex", gap: 12, fontSize: 15, lineHeight: 1.55, color: "var(--dim)" }}>
              <span style={{ color: "var(--faint)", flex: "none" }}>—</span><span>{it}</span>
            </li>
          ))}
        </ul>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 26 }}>
          {p.tech.map((t) => (
            <span key={t} style={{ padding: "6px 13px", fontSize: 12.5, fontWeight: 500, color: "var(--dim)", background: "var(--surf)", border: "1px solid var(--line)", borderRadius: 999 }}>{t}</span>
          ))}
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
          {p.live && (
            <a href={p.live} target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", minHeight: 48, padding: "0 22px", borderRadius: 999, background: "var(--btn-bg)", color: "var(--btn-fg)", fontWeight: 600, fontSize: 14 }}>Visit live site</a>
          )}
          {p.github && (
            <a href={p.github} target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", minHeight: 48, padding: "0 22px", borderRadius: 999, border: "1px solid var(--line2)", fontWeight: 600, fontSize: 14 }}>Source</a>
          )}
        </div>
      </div>
    </div>
  );
}

export function AllProjectsCTA() {
  return (
    <div data-reveal style={{ marginTop: "clamp(48px,7vw,88px)", paddingTop: "clamp(32px,4vw,44px)", borderTop: "1px solid var(--line)", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 20 }}>
      <div style={{ fontSize: "clamp(18px,2.4vw,24px)", fontWeight: 600, letterSpacing: "-.02em", maxWidth: "26ch", textWrap: "pretty" }}>
        Seven more projects, written up in full.
      </div>
      <Link href="/projects" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", minHeight: 52, padding: "0 28px", borderRadius: 999, background: "var(--btn-bg)", color: "var(--btn-fg)", fontWeight: 600, fontSize: 15 }}>See all projects →</Link>
    </div>
  );
}
