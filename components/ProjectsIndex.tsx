"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { projects, header, type Project } from "../data/resume";

type Key = "all" | "team" | "personal" | "wip";
const KINDS: Record<Exclude<Key, "all">, Project["kind"]> = {
  team: "Team project", personal: "Personal project", wip: "In progress",
};
const host = (url?: string) => (url ? url.replace(/^https?:\/\//, "").replace(/\/$/, "") : "");

export default function ProjectsIndex() {
  const [filter, setFilter] = useState<Key>("all");
  const shown = filter === "all" ? projects : projects.filter((p) => p.kind === KINDS[filter]);
  const tabs: { key: Key; label: string; count: number }[] = [
    { key: "all", label: "All", count: projects.length },
    { key: "team", label: "Client & team", count: projects.filter((p) => p.kind === "Team project").length },
    { key: "personal", label: "Personal", count: projects.filter((p) => p.kind === "Personal project").length },
    { key: "wip", label: "In progress", count: projects.filter((p) => p.kind === "In progress").length },
  ];

  return (
    <div style={{ background: "var(--bg)", color: "var(--fg)", minHeight: "100vh" }}>
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 60, background: "var(--navbg)", backdropFilter: "blur(18px)", WebkitBackdropFilter: "blur(18px)", borderBottom: "1px solid var(--line)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 var(--pad)", height: 66, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 11, minWidth: 0 }}>
            <Image src="/rishav.jpg" alt={header.name} width={36} height={36} style={{ borderRadius: "50%", objectFit: "cover", objectPosition: "56% 62%", border: "1px solid var(--line2)", flex: "none" }} />
            <span style={{ fontWeight: 700, fontSize: 17, letterSpacing: "-.02em", whiteSpace: "nowrap" }}>Rishav<span style={{ color: "var(--dim)" }}>.dev</span></span>
          </Link>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <ThemeToggle />
            <Link href="/" style={{ display: "inline-flex", alignItems: "center", height: 44, padding: "0 18px", borderRadius: 999, border: "1px solid var(--line2)", fontSize: 14, fontWeight: 600, whiteSpace: "nowrap" }}>← Portfolio</Link>
          </div>
        </div>
      </nav>

      <header style={{ padding: "calc(66px + var(--sec)) var(--pad) clamp(36px,5vw,56px)", maxWidth: 1280, margin: "0 auto" }}>
        <div data-reveal style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: 13, color: "var(--faint)", letterSpacing: ".14em", marginBottom: 22 }}>ALL WORK · 2024 — 2026</div>
        <h1 data-reveal style={{ fontSize: "clamp(44px,12vw,96px)", lineHeight: .94, fontWeight: 800, letterSpacing: "-.045em", margin: "0 0 26px", maxWidth: "14ch", textWrap: "balance" }}>Everything I&apos;ve built.</h1>
        <p data-reveal style={{ fontSize: "clamp(17px,2.3vw,22px)", lineHeight: 1.55, color: "var(--dim)", maxWidth: "56ch", margin: "0 0 24px", textWrap: "pretty" }}>
          Two products shipped with the WebbyWolf team, three I built on my own, and four in progress right now. Each one lists what I actually did.
        </p>
        <p data-reveal style={{ fontSize: 15.5, lineHeight: 1.6, color: "var(--dim)", maxWidth: "60ch", margin: "0 0 40px", textWrap: "pretty" }}>
          I&apos;ve also contributed to several client builds at WebbyWolf that aren&apos;t mine to publish — happy to talk through that work directly.
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {tabs.map((t) => (
            <button key={t.key} onClick={() => setFilter(t.key)}
              style={{
                minHeight: 44, padding: "0 20px", borderRadius: 999, fontSize: 14, fontWeight: 600, cursor: "pointer",
                border: "1px solid var(--line2)",
                background: filter === t.key ? "var(--btn-bg)" : "transparent",
                color: filter === t.key ? "var(--btn-fg)" : "var(--fg)",
              }}>
              {t.label} · {t.count}
            </button>
          ))}
        </div>
      </header>

      <main style={{ padding: "0 var(--pad) var(--sec)", maxWidth: 1280, margin: "0 auto", display: "flex", flexDirection: "column", gap: "clamp(20px,3vw,32px)" }}>
        {shown.map((p) => (
          <article key={p.num} style={{ border: "1px solid var(--line)", borderRadius: 24, overflow: "hidden" }}>
            {p.img ? (
              <div style={{ aspectRatio: "16/9", backgroundColor: "var(--surf)", backgroundImage: `url(${p.img})`, backgroundSize: "cover", backgroundPosition: "top center", borderBottom: "1px solid var(--line)" }} />
            ) : (
              <div style={{ aspectRatio: "21/9", background: "var(--surf)", borderBottom: "1px solid var(--line)", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: 12, padding: 24 }}>
                <div style={{ fontSize: "clamp(34px,6vw,64px)", fontWeight: 800, letterSpacing: "-.04em", lineHeight: 1, color: "transparent", WebkitTextStroke: "1px var(--stroke)", opacity: .5 }}>{p.title}</div>
                <div style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: 12.5, color: "var(--faint)", letterSpacing: ".14em" }}>BUILDING NOW</div>
              </div>
            )}

            <div style={{ padding: "clamp(24px,3.5vw,44px)", display: "flex", flexDirection: "column", gap: 24 }}>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 10 }}>
                <span style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: 13, color: "var(--faint)" }}>{p.num}</span>
                <span style={{ padding: "5px 12px", borderRadius: 999, fontSize: 12, fontWeight: 600, letterSpacing: ".04em", textTransform: "uppercase", background: "var(--surf)", border: "1px solid var(--line)", color: "var(--dim)" }}>{p.kind}</span>
                <span style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: 13, color: "var(--faint)" }}>{p.year}</span>
                {(p.live || p.kind === "In progress") && (
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 7, fontSize: 13, color: "var(--dim)", marginLeft: "auto" }}>
                    <span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--ok)", animation: "om-pulse 2s ease-in-out infinite" }} />
                    {p.live ? "Live in production" : "Building now"}
                  </span>
                )}
              </div>

              <div>
                <h2 style={{ fontSize: "clamp(28px,5vw,44px)", lineHeight: 1.04, fontWeight: 800, letterSpacing: "-.04em", margin: "0 0 10px" }}>{p.title}</h2>
                <div style={{ fontSize: 16, color: "var(--dim)" }}>{p.kicker}</div>
              </div>

              <p style={{ fontSize: "clamp(17px,2.1vw,20px)", lineHeight: 1.6, margin: 0, maxWidth: "62ch", textWrap: "pretty" }}>{p.description}</p>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 1, background: "var(--line)", border: "1px solid var(--line)", borderRadius: 16, overflow: "hidden" }}>
                {[["My role", p.role], ["Team", p.team], ["Hardest part", p.hard]].map(([k, v]) => (
                  <div key={k} style={{ background: "var(--bg)", padding: "18px 20px" }}>
                    <div style={{ fontSize: 11.5, textTransform: "uppercase", letterSpacing: ".14em", color: "var(--faint)", marginBottom: 7 }}>{k}</div>
                    <div style={{ fontSize: 15, fontWeight: 500, lineHeight: 1.45 }}>{v}</div>
                  </div>
                ))}
              </div>

              <div>
                <div style={{ fontSize: 11.5, textTransform: "uppercase", letterSpacing: ".14em", color: "var(--faint)", marginBottom: 14 }}>What I built</div>
                <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "12px 32px" }}>
                  {p.items.map((it) => (
                    <li key={it} style={{ display: "flex", gap: 12, fontSize: 15.5, lineHeight: 1.55, color: "var(--dim)" }}>
                      <span style={{ color: "var(--faint)", flex: "none" }}>—</span><span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {p.tech.map((t) => (
                  <span key={t} style={{ padding: "6px 13px", fontSize: 12.5, fontWeight: 500, color: "var(--dim)", background: "var(--surf)", border: "1px solid var(--line)", borderRadius: 999 }}>{t}</span>
                ))}
              </div>

              {(p.live || p.github) && (
                <div style={{ display: "flex", flexWrap: "wrap", gap: 10, paddingTop: 4 }}>
                  {p.live && <a href={p.live} target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", minHeight: 48, padding: "0 24px", borderRadius: 999, background: "var(--btn-bg)", color: "var(--btn-fg)", fontWeight: 600, fontSize: 14 }}>Visit {host(p.live)} →</a>}
                  {p.github && <a href={p.github} target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", minHeight: 48, padding: "0 24px", borderRadius: 999, border: "1px solid var(--line2)", fontWeight: 600, fontSize: 14 }}>Source on GitHub</a>}
                </div>
              )}
            </div>
          </article>
        ))}
      </main>

      <footer style={{ padding: "var(--sec) var(--pad) 48px", borderTop: "1px solid var(--line)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <h2 data-reveal style={{ fontSize: "clamp(32px,8vw,64px)", lineHeight: 1, fontWeight: 800, letterSpacing: "-.045em", margin: "0 0 28px", maxWidth: "16ch", textWrap: "balance" }}>Want the long version of any of these?</h2>
          <div data-reveal style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: "clamp(48px,7vw,80px)" }}>
            <a href={`mailto:${header.email}`} style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", minHeight: 56, padding: "0 30px", borderRadius: 999, background: "var(--btn-bg)", color: "var(--btn-fg)", fontWeight: 600, fontSize: 16 }}>{header.email}</a>
            <Link href="/" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", minHeight: 56, padding: "0 30px", borderRadius: 999, border: "1px solid var(--line2)", fontWeight: 600, fontSize: 16 }}>← Back to portfolio</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
