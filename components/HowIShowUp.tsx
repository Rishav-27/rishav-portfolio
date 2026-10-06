import Section, { eyebrow, h2 } from "./Section";
import { projects } from "../data/resume";

export default function HowIShowUp() {
  const solo = projects.filter((p) => p.team === "Solo" && p.kind !== "In progress").length;
  const team = projects.filter((p) => p.kind === "Team project").length;
  const proof = [
    { big: "1 week", text: "to be productive in a stack I haven't used — how I picked up Supabase, WebSockets and server-side rendering." },
    { big: String(solo), text: "products designed, built and shipped solo, from database to UI." },
    { big: String(team), text: "live products shipped inside the WebbyWolf team — an AI answer-engine platform and a 250,000-listing marketplace." },
  ];
  return (
    <Section id="offline">
      <div style={{ display: "grid", gridTemplateColumns: "repeat(var(--aboutcols),minmax(0,1fr))", gap: "clamp(32px,6vw,72px)", alignItems: "start" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div data-reveal style={eyebrow}>07 — HOW I SHOW UP</div>
          <h2 data-reveal style={{ ...h2, margin: "0 0 14px", maxWidth: "18ch" }}>Always learning. Easy to work with.</h2>
          <p data-reveal style={{ fontSize: "clamp(17px,2.2vw,21px)", lineHeight: 1.6, margin: 0, textWrap: "pretty" }}>
            I pick up new technology fast and I enjoy it. Hand me a stack I haven&apos;t used and I&apos;ll be productive in it inside a week — that&apos;s how I got to Supabase, to WebSockets, to server-side rendering.
          </p>
          <p data-reveal style={{ fontSize: "clamp(16px,2vw,18px)", lineHeight: 1.65, color: "var(--dim)", margin: 0, textWrap: "pretty" }}>
            I adapt to how a team already works rather than asking it to change for me. New codebase, new conventions, new time zone — I&apos;d rather learn the shape of things and be useful quickly than argue for my own preferences on day one.
          </p>
          <p data-reveal style={{ fontSize: "clamp(15px,1.8vw,17px)", lineHeight: 1.6, color: "var(--faint)", margin: 0 }}>
            Outside work: travelling, and learning guitar.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {proof.map((x) => (
            <div key={x.big} data-reveal style={{ border: "1px solid var(--line)", borderRadius: 20, padding: "clamp(20px,3vw,28px)", background: "var(--navbg)", backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)" }}>
              <div style={{ fontSize: "clamp(36px,5vw,52px)", fontWeight: 800, letterSpacing: "-.04em", lineHeight: 1, marginBottom: 10 }}>{x.big}</div>
              <div style={{ fontSize: 16, lineHeight: 1.55, color: "var(--dim)", textWrap: "pretty" }}>{x.text}</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
