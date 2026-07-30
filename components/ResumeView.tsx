"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import {
  header,
  summary,
  skills,
  jobs,
  projects,
  education,
  certifications,
  achievements,
} from "../data/resume";

type Version = "ats" | "modern";

const VERSIONS: Record<
  Version,
  { label: string; note: string; file: string }
> = {
  ats: {
    label: "Minimal · ATS",
    note: "Single column, no graphics. Built to parse cleanly in Workday, Greenhouse, Lever and Taleo. Use this one for application portals.",
    file: header.resumePdf,
  },
  modern: {
    label: "Modern",
    note: "Same content, set in the type system this site uses. Still plain selectable text, so it parses too. Use this one for referrals and recruiter emails.",
    file: header.resumePdfModern,
  },
};

const navCore = {
  display: "var(--navcore)",
  alignItems: "center",
  padding: "8px 13px",
  borderRadius: 999,
  fontSize: 14,
  fontWeight: 500,
  color: "var(--dim)",
} as const;
const navExtra = { ...navCore, display: "var(--navlinks)" } as const;
const navSheet = {
  padding: "14px 4px",
  fontSize: 17,
  fontWeight: 500,
  borderBottom: "1px solid var(--line)",
} as const;

const mono = {
  fontFamily: "var(--font-geist-mono), monospace",
  fontSize: 12.5,
  color: "var(--faint)",
  letterSpacing: ".14em",
  textTransform: "uppercase",
} as const;

const btnSolid = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: 52,
  padding: "0 26px",
  borderRadius: 999,
  background: "var(--btn-bg)",
  color: "var(--btn-fg)",
  fontWeight: 600,
  fontSize: 15,
} as const;
const btnGhost = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: 52,
  padding: "0 26px",
  borderRadius: 999,
  border: "1px solid var(--line2)",
  fontWeight: 600,
  fontSize: 15,
} as const;

function SectionHead({ n, title }: { n: string; title: string }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 14,
        margin: "0 0 26px",
      }}
    >
      <span style={mono}>{n}</span>
      <h2
        style={{
          fontSize: "clamp(20px,3vw,26px)",
          fontWeight: 700,
          letterSpacing: "-.03em",
          margin: 0,
        }}
      >
        {title}
      </h2>
      <span style={{ flex: 1, height: 1, background: "var(--line)" }} />
    </div>
  );
}

export default function ResumeView() {
  const [version, setVersion] = useState<Version>("ats");
  const [navOpen, setNavOpen] = useState(false);
  const closeNav = () => setNavOpen(false);
  const active = VERSIONS[version];
  const shown = projects.filter((p) => p.onResume);

  return (
    <div
      style={{
        background: "var(--bg)",
        color: "var(--fg)",
        minHeight: "100vh",
        position: "relative",
      }}
    >
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 60,
          background: "var(--navbg)",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
          borderBottom: "1px solid var(--line)",
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "0 var(--pad)",
            height: 66,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
          }}
        >
          <Link
            href="/"
            style={{ display: "flex", alignItems: "center", gap: 11, minWidth: 0 }}
          >
            <Image
              src="/rishav.jpg"
              alt={header.name}
              width={36}
              height={36}
              style={{
                width: 36,
                height: 36,
                borderRadius: "50%",
                objectFit: "cover",
                objectPosition: "56% 62%",
                border: "1px solid var(--line2)",
                flex: "none",
              }}
            />
            <span
              style={{
                fontWeight: 700,
                fontSize: 17,
                letterSpacing: "-.02em",
                whiteSpace: "nowrap",
              }}
            >
              Rishav<span style={{ color: "var(--dim)" }}>.dev</span>
            </span>
          </Link>

          <div style={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Link href="/#about" style={navCore}>About</Link>
            <Link href="/#work" style={navCore}>Work</Link>
            <Link href="/projects" style={navCore}>Projects</Link>
            <Link href="/resume" style={{ ...navCore, color: "var(--fg)" }}>Résumé</Link>
            <Link href="/#skills" style={navExtra}>Skills</Link>
            <Link href="/#contact" style={navExtra}>Contact</Link>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <ThemeToggle />
            <a
              href={active.file}
              download
              style={{
                display: "inline-flex",
                alignItems: "center",
                height: 44,
                padding: "0 clamp(14px,2vw,20px)",
                borderRadius: 999,
                background: "var(--btn-bg)",
                color: "var(--btn-fg)",
                fontSize: 14,
                fontWeight: 600,
                whiteSpace: "nowrap",
                flex: "none",
              }}
            >
              Download PDF
            </a>
            <button
              onClick={() => setNavOpen(!navOpen)}
              aria-label="Menu"
              style={{
                width: 44,
                height: 44,
                display: "var(--menubtn)",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid var(--line)",
                background: "transparent",
                color: "var(--fg)",
                borderRadius: 999,
                cursor: "pointer",
                flex: "none",
              }}
            >
              <svg
                width="19"
                height="19"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.9"
                strokeLinecap="round"
              >
                <path d={navOpen ? "M18 6L6 18M6 6l12 12" : "M3 6h18M3 12h18M3 18h18"} />
              </svg>
            </button>
          </div>
        </div>

        {navOpen && (
          <div
            style={{
              borderTop: "1px solid var(--line)",
              padding: "10px var(--pad) 20px",
              display: "flex",
              flexDirection: "column",
              gap: 2,
              background: "var(--bg)",
            }}
          >
            <Link href="/#about" onClick={closeNav} style={navSheet}>About</Link>
            <Link href="/#work" onClick={closeNav} style={navSheet}>Work</Link>
            <Link href="/projects" onClick={closeNav} style={navSheet}>All projects</Link>
            <Link href="/#skills" onClick={closeNav} style={navSheet}>Skills</Link>
            <Link href="/#contact" onClick={closeNav} style={navSheet}>Contact</Link>
            <Link href="/" onClick={closeNav} style={{ padding: "14px 4px", fontSize: 17, fontWeight: 500 }}>
              ← Back to portfolio
            </Link>
          </div>
        )}
      </nav>

      <header
        style={{
          padding: "calc(66px + var(--sec)) var(--pad) clamp(36px,5vw,56px)",
          maxWidth: 1280,
          margin: "0 auto",
        }}
      >
        <div data-reveal style={{ ...mono, fontSize: 13, marginBottom: 22 }}>
          Résumé · Updated {new Date().getFullYear()}
        </div>
        <h1
          data-reveal
          style={{
            fontSize: "clamp(44px,12vw,96px)",
            lineHeight: 0.94,
            fontWeight: 800,
            letterSpacing: "-.045em",
            margin: "0 0 26px",
            maxWidth: "14ch",
            textWrap: "balance",
          }}
        >
          {header.name}
        </h1>
        <p
          data-reveal
          style={{
            fontSize: "clamp(17px,2.3vw,22px)",
            lineHeight: 1.55,
            color: "var(--dim)",
            maxWidth: "60ch",
            margin: "0 0 32px",
            textWrap: "pretty",
          }}
        >
          {summary}
        </p>

        <div
          data-reveal
          style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 28 }}
        >
          <a href={active.file} download style={btnSolid}>
            Download PDF
          </a>
          <a href={active.file} target="_blank" rel="noreferrer" style={btnGhost}>
            View PDF ↗
          </a>
          <a href={"mailto:" + header.email} style={btnGhost}>
            {header.email}
          </a>
        </div>

        <div data-reveal style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 14 }}>
          {(Object.keys(VERSIONS) as Version[]).map((k) => (
            <button
              key={k}
              onClick={() => setVersion(k)}
              style={{
                minHeight: 44,
                padding: "0 20px",
                borderRadius: 999,
                fontSize: 14,
                fontWeight: 600,
                cursor: "pointer",
                border: "1px solid var(--line2)",
                background: version === k ? "var(--btn-bg)" : "transparent",
                color: version === k ? "var(--btn-fg)" : "var(--fg)",
              }}
            >
              {VERSIONS[k].label}
            </button>
          ))}
        </div>
        <p
          data-reveal
          style={{
            fontSize: 15,
            lineHeight: 1.6,
            color: "var(--dim)",
            maxWidth: "62ch",
            margin: 0,
            textWrap: "pretty",
          }}
        >
          {active.note}
        </p>

        <div
          data-reveal
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))",
            gap: 2,
            borderTop: "1px solid var(--line)",
            marginTop: "clamp(32px,4vw,44px)",
            paddingTop: 26,
          }}
        >
          {[
            ["Role", header.resumeTitle],
            ["Based in", header.location],
            ["Availability", header.openTo],
            ["Phone", header.phone],
          ].map(([k, v]) => (
            <div key={k} style={{ paddingRight: 20 }}>
              <div style={{ ...mono, fontSize: 12, marginBottom: 8 }}>{k}</div>
              <div style={{ fontSize: 15.5, fontWeight: 500, textWrap: "pretty" }}>{v}</div>
            </div>
          ))}
          <div>
            <div style={{ ...mono, fontSize: 12, marginBottom: 8 }}>Links</div>
            <div style={{ display: "flex", gap: 14, fontSize: 15.5, fontWeight: 500 }}>
              <a href={header.github} target="_blank" rel="noreferrer" style={{ textDecoration: "underline", textUnderlineOffset: 4, textDecorationColor: "var(--line2)" }}>GitHub</a>
              <a href={header.linkedin} target="_blank" rel="noreferrer" style={{ textDecoration: "underline", textUnderlineOffset: 4, textDecorationColor: "var(--line2)" }}>LinkedIn</a>
            </div>
          </div>
        </div>
      </header>

      <main
        style={{
          padding: "0 var(--pad) var(--sec)",
          maxWidth: 1280,
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "clamp(48px,7vw,80px)",
        }}
      >
        <section>
          <SectionHead n="01" title="Technical skills" />
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
            {skills.map((g) => (
              <div
                key={g.num}
                style={{
                  background: "var(--bg)",
                  padding: "26px 24px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                }}
              >
                <div style={{ ...mono, fontSize: 12 }}>{g.category}</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                  {g.core.map((i) => (
                    <span key={i} style={{ padding: "6px 12px", fontSize: 13, fontWeight: 600, color: "var(--btn-fg)", background: "var(--btn-bg)", borderRadius: 8 }}>{i}</span>
                  ))}
                  {g.rest.map((i) => (
                    <span key={i} style={{ padding: "6px 12px", fontSize: 13, fontWeight: 500, color: "var(--dim)", border: "1px solid var(--line)", borderRadius: 8 }}>{i}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <SectionHead n="02" title="Experience" />
          <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
            {jobs.map((j) => (
              <div key={j.company} style={{ position: "relative", paddingLeft: 26 }}>
                <div aria-hidden style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 1, background: "var(--line)" }} />
                <div aria-hidden style={{ position: "absolute", left: -5, top: 4, width: 11, height: 11, borderRadius: "50%", background: "var(--fg)" }} />
                <div style={{ ...mono, fontSize: 12.5, marginBottom: 10 }}>{j.duration}</div>
                <h3 style={{ fontSize: 22, fontWeight: 700, letterSpacing: "-.02em", margin: "0 0 4px" }}>{j.role}</h3>
                <a
                  href={j.url}
                  target="_blank"
                  rel="noreferrer"
                  style={{ fontSize: 16, color: "var(--dim)", display: "inline-block", marginBottom: 20, textDecoration: "underline", textUnderlineOffset: 4, textDecorationColor: "var(--line2)" }}
                >
                  {j.company}
                </a>
                <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                  {j.items.map((it) => (
                    <li key={it} style={{ display: "flex", gap: 12, fontSize: 15.5, lineHeight: 1.6, color: "var(--dim)" }}>
                      <span style={{ color: "var(--faint)", flex: "none" }}>—</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section>
          <SectionHead n="03" title="Selected projects" />
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {shown.map((p) => (
              <article
                key={p.num}
                style={{ border: "1px solid var(--line)", borderRadius: 20, padding: "clamp(24px,3vw,34px)" }}
              >
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: 12, marginBottom: 12 }}>
                  <h3 style={{ fontSize: "clamp(22px,3vw,28px)", fontWeight: 700, letterSpacing: "-.03em", margin: 0 }}>{p.title}</h3>
                  <span style={{ fontSize: 15, color: "var(--dim)" }}>{p.kicker}</span>
                </div>
                <p style={{ fontSize: 16.5, lineHeight: 1.6, color: "var(--dim)", margin: "0 0 20px", maxWidth: "62ch", textWrap: "pretty" }}>{p.description}</p>
                <ul style={{ listStyle: "none", margin: "0 0 20px", padding: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                  {p.items.map((it) => (
                    <li key={it} style={{ display: "flex", gap: 12, fontSize: 15, lineHeight: 1.55, color: "var(--dim)" }}>
                      <span style={{ color: "var(--faint)", flex: "none" }}>—</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 7, marginBottom: 20 }}>
                  {p.tech.map((t) => (
                    <span key={t} style={{ padding: "6px 12px", fontSize: 12.5, fontWeight: 500, color: "var(--dim)", background: "var(--surf)", border: "1px solid var(--line)", borderRadius: 999 }}>{t}</span>
                  ))}
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noreferrer" style={{ ...btnGhost, minHeight: 44, padding: "0 20px", fontSize: 14 }}>Visit live site ↗</a>
                  )}
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noreferrer" style={{ ...btnGhost, minHeight: 44, padding: "0 20px", fontSize: 14 }}>Source on GitHub ↗</a>
                  )}
                  <Link href={"/projects#" + p.slug} style={{ ...btnGhost, minHeight: 44, padding: "0 20px", fontSize: 14 }}>Read the case study</Link>
                </div>
              </article>
            ))}
          </div>
          <p style={{ fontSize: 15.5, lineHeight: 1.6, color: "var(--dim)", margin: "22px 0 0", maxWidth: "64ch", textWrap: "pretty" }}>
            Also built: TradeVerse, a Real Estate marketplace, MultiLangDetect and the SK Enterprises site —{" "}
            <Link href="/projects" style={{ textDecoration: "underline", textUnderlineOffset: 4, textDecorationColor: "var(--line2)" }}>all {projects.length} projects are written up in full</Link>.
          </p>
        </section>

        <section>
          <SectionHead n="04" title="Education" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 24 }}>
            {education.map((e) => (
              <div key={e.level} style={{ borderTop: "1px solid var(--line)", paddingTop: 18 }}>
                <div style={{ ...mono, fontSize: 12.5, marginBottom: 10 }}>{e.duration}</div>
                <h3 style={{ fontSize: 18, fontWeight: 700, letterSpacing: "-.02em", margin: "0 0 4px", textWrap: "pretty" }}>{e.level}</h3>
                <div style={{ fontSize: 15, color: "var(--dim)", marginBottom: 12 }}>{e.institution} · {e.location}</div>
                <div style={{ display: "inline-block", fontFamily: "var(--font-geist-mono), monospace", fontSize: 13, padding: "5px 11px", borderRadius: 8, background: "var(--surf)", border: "1px solid var(--line)", color: "var(--dim)" }}>{e.score}</div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <SectionHead n="05" title="Certifications & achievements" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))", gap: 14, marginBottom: 24 }}>
            {certifications.map((c) => (
              <div key={c.title} style={{ border: "1px solid var(--line)", borderRadius: 18, padding: "24px 22px", display: "flex", flexDirection: "column", gap: 10, minHeight: 150 }}>
                <div style={{ ...mono, fontSize: 12.5 }}>{c.date}</div>
                <div style={{ fontSize: 18, fontWeight: 700, letterSpacing: "-.02em", lineHeight: 1.25, marginTop: "auto", textWrap: "pretty" }}>{c.title}</div>
                <div style={{ fontSize: 14, color: "var(--dim)" }}>{c.issuer}</div>
              </div>
            ))}
          </div>
          <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 12 }}>
            {achievements.map((a) => (
              <li key={a} style={{ display: "flex", gap: 12, fontSize: 15.5, lineHeight: 1.6, color: "var(--dim)" }}>
                <span style={{ color: "var(--faint)", flex: "none" }}>—</span>
                <span>{a}</span>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer style={{ padding: "var(--sec) var(--pad) 48px", borderTop: "1px solid var(--line)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "clamp(32px,8vw,64px)",
              lineHeight: 1,
              fontWeight: 800,
              letterSpacing: "-.045em",
              margin: "0 0 28px",
              maxWidth: "18ch",
              textWrap: "balance",
            }}
          >
            Want the PDF and a conversation?
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            <a href={"mailto:" + header.email} style={{ ...btnSolid, minHeight: 56, padding: "0 30px", fontSize: 16 }}>{header.email}</a>
            <a href={active.file} download style={{ ...btnGhost, minHeight: 56, padding: "0 30px", fontSize: 16 }}>Download PDF</a>
            <Link href="/" style={{ ...btnGhost, minHeight: 56, padding: "0 30px", fontSize: 16 }}>← Back to portfolio</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
