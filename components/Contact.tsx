import { header } from "../data/resume";

export default function Contact() {
  return (
    <footer id="contact" style={{ padding: "var(--sec) var(--pad) 48px", borderTop: "1px solid var(--line)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div data-reveal style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: 13, color: "var(--faint)", letterSpacing: ".14em", marginBottom: 22 }}>09 — CONTACT</div>
        <h2 data-reveal style={{ fontSize: "clamp(36px,10vw,88px)", lineHeight: .98, fontWeight: 800, letterSpacing: "-.045em", margin: "0 0 32px", maxWidth: "14ch", textWrap: "balance" }}>
          Let&apos;s build something fast.
        </h2>
        <p data-reveal style={{ fontSize: "clamp(17px,2.2vw,21px)", lineHeight: 1.6, color: "var(--dim)", maxWidth: "46ch", margin: "0 0 40px", textWrap: "pretty" }}>
          I&apos;m open to full-time and contract work — frontend, backend, or the whole thing. Fastest way to reach me is email.
        </p>

        <div data-reveal style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: "clamp(56px,8vw,96px)" }}>
          <a href={`mailto:${header.email}`} style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", minHeight: 56, padding: "0 30px", borderRadius: 999, background: "var(--btn-bg)", color: "var(--btn-fg)", fontWeight: 600, fontSize: 16 }}>{header.email}</a>
          <a href={header.phoneHref} style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", minHeight: 56, padding: "0 30px", borderRadius: 999, border: "1px solid var(--line2)", fontWeight: 600, fontSize: 16 }}>{header.phone}</a>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 20, justifyContent: "space-between", alignItems: "center", borderTop: "1px solid var(--line)", paddingTop: 28 }}>
          <div style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: 12.5, color: "var(--faint)", letterSpacing: ".06em", textTransform: "uppercase" }}>© {new Date().getFullYear()} {header.name}</div>
          <div style={{ display: "flex", gap: 22, fontSize: 14, fontWeight: 500 }}>
            <a href={header.github} target="_blank" rel="noreferrer" style={{ color: "var(--dim)" }}>GitHub</a>
            <a href={header.linkedin} target="_blank" rel="noreferrer" style={{ color: "var(--dim)" }}>LinkedIn</a>
            <a href={header.twitter} target="_blank" rel="noreferrer" style={{ color: "var(--dim)" }}>Twitter</a>
            <a href={header.instagram} target="_blank" rel="noreferrer" style={{ color: "var(--dim)" }}>Instagram</a>
            <a href={`mailto:${header.email}`} style={{ color: "var(--dim)" }}>Email</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
