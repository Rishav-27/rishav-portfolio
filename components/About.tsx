import Image from "next/image";
import Section, { eyebrow, h2 } from "./Section";

const principles = [
  {
    n: "01",
    t: "Measure, then optimise",
    b: "Profiler first. I've never once guessed the bottleneck correctly, and I've stopped trying.",
  },
  {
    n: "02",
    t: "Components over pages",
    b: "A well-drawn primitive pays for itself by the third screen. Most of my speed comes from not rebuilding things.",
  },
  {
    n: "03",
    t: "Read the whole stack",
    b: "Half of frontend bugs are schema decisions. Being useful on both sides of the API saves everyone a round trip.",
  },
];
const stats = [
  { v: "5+", l: "Products built", lead: true },
  { v: "4", l: "MVPs in progress" },
  { v: "1+", l: "Year shipping" },
];

export default function About() {
  return (
    <Section id="about">
      <div data-reveal style={eyebrow}>
        01 — ABOUT
      </div>
      <h2
        data-reveal
        style={{
          ...h2,
          fontSize: "clamp(32px,7vw,64px)",
          margin: "0 0 clamp(40px,6vw,72px)",
          maxWidth: "16ch",
        }}
      >
        I care about the second after the click.
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(var(--aboutcols),minmax(0,1fr))",
          gap: "clamp(32px,6vw,80px)",
          alignItems: "start",
          marginBottom: "clamp(48px,7vw,88px)",
        }}
      >
        <div
          data-reveal
          style={{
            borderRadius: 20,
            overflow: "hidden",
            border: "1px solid var(--line)",
            aspectRatio: "4/5",
            position: "relative",
          }}
        >
          <Image
            src="/rishav.jpg"
            alt="Rishav Kumar"
            fill
            sizes="(max-width:700px) 100vw, 50vw"
            style={{ objectFit: "cover", objectPosition: "54% 58%" }}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <p
            data-reveal
            style={{
              fontSize: "clamp(18px,2.4vw,23px)",
              lineHeight: 1.56,
              margin: 0,
              textWrap: "pretty",
            }}
          >
            I&apos;m <strong style={{ fontWeight: 600 }}>Rishav</strong> — a
            full-stack engineer from Jamshedpur. I build products end-to-end:
            the interface, the API, the schema, and the performance work that
            makes them feel instant.
          </p>
          <p
            data-reveal
            style={{
              fontSize: "clamp(16px,2vw,19px)",
              lineHeight: 1.66,
              color: "var(--dim)",
              margin: 0,
              textWrap: "pretty",
            }}
          >
            Most of my time sits between frontend and data — auth flows, search
            over large catalogs, caching, real-time streams. I&apos;d rather
            ship a boring thing that holds up under load than a clever thing
            that doesn&apos;t.
          </p>
          <p
            data-reveal
            style={{
              fontSize: "clamp(16px,2vw,19px)",
              lineHeight: 1.66,
              color: "var(--dim)",
              margin: 0,
              textWrap: "pretty",
            }}
          >
            I&apos;ve shipped a trading platform pushing thousands of concurrent
            WebSocket updates, a CNN that identifies spoken language from raw
            audio, and I&apos;m currently racing four MVPs of my own — including{" "}
            <strong style={{ fontWeight: 600, color: "var(--fg)" }}>
              CVora
            </strong>
            , a resume product I intend to sell. Day-to-day I also contribute to
            live SaaS at WebbyWolf.
          </p>

          <div
            data-reveal
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(130px,1fr))",
              gap: 20,
              paddingTop: 8,
            }}
          >
            {stats.map((s) => (
              <div
                key={s.l}
                style={{
                  borderLeft: `2px solid ${s.lead ? "var(--fg)" : "var(--line2)"}`,
                  paddingLeft: 16,
                }}
              >
                <div
                  style={{
                    fontSize: "clamp(28px,5vw,38px)",
                    fontWeight: 800,
                    letterSpacing: "-.03em",
                    lineHeight: 1,
                  }}
                >
                  {s.v}
                </div>
                <div
                  style={{
                    fontSize: 12,
                    color: "var(--faint)",
                    textTransform: "uppercase",
                    letterSpacing: ".14em",
                    marginTop: 6,
                  }}
                >
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: 1,
          background: "var(--line)",
          border: "1px solid var(--line)",
          borderRadius: 20,
          overflow: "hidden",
        }}
      >
        {principles.map((p) => (
          <div
            key={p.n}
            data-reveal
            style={{ background: "var(--bg)", padding: "30px 26px" }}
          >
            <div
              style={{
                fontFamily: "var(--font-geist-mono), monospace",
                fontSize: 13,
                color: "var(--faint)",
                marginBottom: 14,
              }}
            >
              {p.n}
            </div>
            <div
              style={{
                fontSize: 19,
                fontWeight: 700,
                letterSpacing: "-.02em",
                marginBottom: 10,
              }}
            >
              {p.t}
            </div>
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.6,
                color: "var(--dim)",
                margin: 0,
                textWrap: "pretty",
              }}
            >
              {p.b}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
