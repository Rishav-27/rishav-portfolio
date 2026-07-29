import { header } from "../data/resume";

const label = { fontSize: 13, color: "var(--faint)", textTransform: "uppercase", letterSpacing: ".14em", marginBottom: 8 } as const;
const val = { fontSize: 16, fontWeight: 500 } as const;
const underline = { textDecoration: "underline", textUnderlineOffset: 4, textDecorationColor: "var(--line2)" } as const;

export default function Hero() {
  return (
    <section id="top" style={{
      padding: "calc(66px + var(--sec)) var(--pad) var(--sec)", maxWidth: 1280, margin: "0 auto",
      minHeight: "100svh", display: "flex", flexDirection: "column", justifyContent: "center",
      position: "relative", overflow: "hidden",
    }}>
      <div aria-hidden style={{
        position: "absolute", right: "-6vw", bottom: "-4vh", fontSize: "clamp(180px,34vw,460px)",
        fontWeight: 900, letterSpacing: "-.06em", lineHeight: .78, color: "transparent",
        WebkitTextStroke: "1.5px var(--stroke)", opacity: .15, pointerEvents: "none",
        userSelect: "none", zIndex: -1, whiteSpace: "nowrap",
      }}>RK</div>

      <div data-reveal style={{ display: "inline-flex", alignSelf: "flex-start", alignItems: "center", gap: 9, padding: "7px 14px", borderRadius: 999, border: "1px solid var(--line)", background: "var(--surf)", marginBottom: 28 }}>
        <span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--ok)", animation: "om-pulse 2s ease-in-out infinite" }} />
        <span style={{ fontSize: 13, fontWeight: 500, color: "var(--dim)" }}>Open to opportunities — Full-time / Remote</span>
      </div>

      <h1 data-reveal style={{ fontSize: "var(--heroname)", lineHeight: .92, fontWeight: 800, letterSpacing: "-.045em", margin: "0 0 26px", maxWidth: "16ch", textWrap: "balance" }}>
        {header.name}
      </h1>

      <p data-reveal style={{ fontSize: "clamp(18px,4.4vw,30px)", lineHeight: 1.42, color: "var(--dim)", maxWidth: "22ch", margin: "0 0 40px", textWrap: "pretty" }}>
        Full-stack engineer building <span style={{ color: "var(--fg)", fontWeight: 500 }}>fast, real-time products</span> for the web.
      </p>

      <div data-reveal style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 56 }}>
        <a href="#work" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", minHeight: 52, padding: "0 28px", borderRadius: 999, background: "var(--btn-bg)", color: "var(--btn-fg)", fontWeight: 600, fontSize: 15 }}>View selected work</a>
        <a href={`mailto:${header.email}`} style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", minHeight: 52, padding: "0 28px", borderRadius: 999, border: "1px solid var(--line2)", fontWeight: 600, fontSize: 15 }}>{header.email}</a>
      </div>

      <div data-reveal style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(140px,1fr))", gap: 2, borderTop: "1px solid var(--line)", paddingTop: 26 }}>
        <div style={{ paddingRight: 20 }}><div style={label}>Currently</div><div style={val}>SWE @ WebbyWolf</div></div>
        <div style={{ paddingRight: 20 }}><div style={label}>Based in</div><div style={val}>{header.location}</div></div>
        <div style={{ paddingRight: 20 }}><div style={label}>Focus</div><div style={val}>Next.js · Node · Postgres</div></div>
        <div style={{ paddingRight: 20 }}>
          <div style={label}>Phone</div>
          <a href={header.phoneHref} style={{ ...val, ...underline }}>{header.phone}</a>
        </div>
        <div>
          <div style={label}>Links</div>
          <div style={{ display: "flex", gap: 14, ...val }}>
            <a href={header.github} target="_blank" rel="noreferrer" style={underline}>GitHub</a>
            <a href={header.linkedin} target="_blank" rel="noreferrer" style={underline}>LinkedIn</a>
            <a href={header.twitter} target="_blank" rel="noreferrer" style={underline}>Twitter</a>
            <a href={header.instagram} target="_blank" rel="noreferrer" style={underline}>Instagram</a>
          </div>
        </div>
      </div>
    </section>
  );
}
