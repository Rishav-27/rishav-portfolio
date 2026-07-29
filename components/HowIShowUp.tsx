import Image from "next/image";
import Section, { eyebrow, h2 } from "./Section";
import { places } from "../data/resume";

export default function HowIShowUp() {
  return (
    <Section id="offline">
      <div style={{ display: "grid", gridTemplateColumns: "repeat(var(--aboutcols),minmax(0,1fr))", gap: "clamp(32px,6vw,72px)", alignItems: "start" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div data-reveal style={eyebrow}>08 — HOW I SHOW UP</div>
          <h2 data-reveal style={{ ...h2, margin: "0 0 14px", maxWidth: "18ch" }}>Always learning. Easy to work with.</h2>
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

        <div data-reveal style={{ borderRadius: 20, overflow: "hidden", border: "1px solid var(--line)", position: "relative", aspectRatio: "4/5" }}>
          <Image
            src="/ladakh.jpg"
            alt="On the road in Ladakh"
            fill
            sizes="(max-width:700px) 100vw, 50vw"
            style={{ objectFit: "cover" }}
          />
          <div style={{
            position: "absolute", left: 0, right: 0, bottom: 0,
            padding: "40px 20px 20px", background: "linear-gradient(to top, rgba(0,0,0,.82), rgba(0,0,0,.35) 55%, rgba(0,0,0,0))",
          }}>
            <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 12, marginBottom: 12 }}>
              <span style={{ fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: ".14em", color: "rgba(255,255,255,.75)" }}>Places covered</span>
              <span style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: 12.5, color: "rgba(255,255,255,.75)" }}>{places.length}+</span>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 12 }}>
              {places.map((pl) => (
                <span key={pl} style={{ padding: "7px 13px", fontSize: 13.5, fontWeight: 500, color: "#fff", background: "rgba(255,255,255,.14)", backdropFilter: "blur(6px)", WebkitBackdropFilter: "blur(6px)", borderRadius: 9 }}>{pl}</span>
              ))}
            </div>
            <div style={{ fontSize: 13.5, lineHeight: 1.55, color: "rgba(255,255,255,.65)", textWrap: "pretty" }}>
              Next on the list: Spiti, and the rest of the northeast.
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
