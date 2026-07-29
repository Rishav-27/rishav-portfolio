import Section, { eyebrow, h2 } from "./Section";
import { places } from "../data/resume";

export default function HowIShowUp() {
  return (
    <Section id="offline">
      <div data-reveal style={eyebrow}>07 — HOW I SHOW UP</div>
      <h2 data-reveal style={{ ...h2, margin: "0 0 clamp(36px,5vw,56px)", maxWidth: "18ch" }}>Always learning. Easy to work with.</h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(var(--aboutcols),minmax(0,1fr))", gap: "clamp(32px,6vw,72px)", alignItems: "start" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <p data-reveal style={{ fontSize: "clamp(17px,2.2vw,21px)", lineHeight: 1.6, margin: 0, textWrap: "pretty" }}>
            I pick up new technology fast and I enjoy it. Hand me a stack I haven&apos;t used and I&apos;ll be productive in it inside a week — that&apos;s how I got to Supabase, to WebSockets, to server-side rendering.
          </p>
          <p data-reveal style={{ fontSize: "clamp(16px,2vw,18px)", lineHeight: 1.65, color: "var(--dim)", margin: 0, textWrap: "pretty" }}>
            I adapt to how a team already works rather than asking it to change for me. New codebase, new conventions, new time zone — I&apos;d rather learn the shape of things and be useful quickly than argue for my own preferences on day one.
          </p>
          <p data-reveal style={{ fontSize: "clamp(16px,2vw,18px)", lineHeight: 1.65, color: "var(--dim)", margin: 0, textWrap: "pretty" }}>
            Outside work the same instinct sends me travelling — Ladakh down to Kanyakumari, across Assam and Meghalaya, through Hyderabad, Bangalore and Nashik. And I&apos;m learning guitar, which is a decent reminder that being bad at something new is the price of getting good at anything.
          </p>
        </div>

        <div data-reveal style={{ border: "1px solid var(--line)", borderRadius: 20, overflow: "hidden" }}>
          <div style={{ padding: "22px 24px", borderBottom: "1px solid var(--line)", display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 12 }}>
            <span style={{ fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: ".14em", color: "var(--faint)" }}>Places covered</span>
            <span style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: 12.5, color: "var(--faint)" }}>{places.length}+</span>
          </div>
          <div style={{ padding: "20px 24px 24px", display: "flex", flexWrap: "wrap", gap: 8 }}>
            {places.map((pl) => (
              <span key={pl} style={{ padding: "7px 13px", fontSize: 13.5, fontWeight: 500, color: "var(--dim)", background: "var(--surf)", borderRadius: 9 }}>{pl}</span>
            ))}
          </div>
          <div style={{ padding: "0 24px 24px", fontSize: 13.5, lineHeight: 1.55, color: "var(--faint)", textWrap: "pretty" }}>
            Next on the list: Spiti, and the rest of the northeast.
          </div>
        </div>
      </div>
    </Section>
  );
}
