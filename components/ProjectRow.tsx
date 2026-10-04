"use client";

import Link from "next/link";
import type { Project } from "../data/resume";
import { projects } from "../data/resume";

import Image from "next/image";

export default function ProjectRow({ p }: { p: Project }) {
  return (
    <div data-reveal style={{ display: "flex", gap: "clamp(24px,4vw,64px)", alignItems: "center" }}>
      <div style={{ flex: p.bare ? "1.8 1 0" : "1.4 1 0", minWidth: 0, width: "100%" }}>
        {p.slug === "roledock" ? (
          <div style={{ position: "relative", width: "100%", aspectRatio: "16/10" }}>
            <div style={{ position: "absolute", left: 0, top: "5%", width: "75%", borderRadius: 16, overflow: "hidden", border: "1px solid var(--line)", boxShadow: "0 20px 40px rgba(0,0,0,0.1)", transition: "transform 0.4s" }} onMouseOver={(e) => e.currentTarget.style.transform = "translateY(-4px)"} onMouseOut={(e) => e.currentTarget.style.transform = "translateY(0)"}>
              <Image src="/roledock/d-today.png" alt="RoleDock Desktop" width={1200} height={800} style={{ width: "100%", height: "auto", display: "block" }} />
            </div>
            <div style={{ position: "absolute", right: 0, top: "15%", width: "28%", borderRadius: 24, overflow: "hidden", border: "6px solid #000", boxShadow: "0 30px 60px rgba(0,0,0,0.3)", transition: "transform 0.4s" }} onMouseOver={(e) => e.currentTarget.style.transform = "translateY(-8px)"} onMouseOut={(e) => e.currentTarget.style.transform = "translateY(0)"}>
              <Image src="/roledock/m-today.png" alt="RoleDock Mobile" width={600} height={1200} style={{ width: "100%", height: "auto", display: "block" }} />
            </div>
          </div>
        ) : p.img ? (
          <div 
            style={p.bare ? {
              position: "relative",
              width: "100%",
              aspectRatio: "1675/1226",
              transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
            } : {
              position: "relative",
              width: "100%",
              aspectRatio: "16/10",
              borderRadius: 20, overflow: "hidden", border: "1px solid var(--line)",
              backgroundColor: "var(--surf)",
              transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
            }} 
            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <Image 
              src={p.img} 
              alt={p.title} 
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              style={{ objectFit: p.bare ? "contain" : "cover", objectPosition: p.bare ? "center" : "top center" }} 
              priority
            />
          </div>
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
        <p style={{ fontSize: "clamp(16px,2vw,18px)", lineHeight: 1.62, color: "var(--dim)", margin: "0 0 32px", textWrap: "pretty" }}>{p.description}</p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 32 }}>
          {p.tech.map((t) => (
            <span key={t} style={{ padding: "6px 13px", fontSize: 12.5, fontWeight: 500, color: "var(--dim)", background: "var(--surf)", border: "1px solid var(--line)", borderRadius: 999 }}>{t}</span>
          ))}
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
          {p.live && (
            <a href={p.live} target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", minHeight: 48, padding: "0 22px", borderRadius: 999, background: "var(--btn-bg)", color: "var(--btn-fg)", fontWeight: 600, fontSize: 14 }}>Visit live site</a>
          )}
          {p.github && (
            <a href={p.github} target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", minHeight: 48, padding: "0 22px", borderRadius: 999, border: "1px solid var(--line2)", fontWeight: 600, fontSize: 14 }}>Source on GitHub</a>
          )}
          <Link href={`/projects#${p.slug}`} style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", minHeight: 48, padding: "0 22px", borderRadius: 999, border: "1px solid var(--line2)", fontWeight: 600, fontSize: 14 }}>Read the case study</Link>
        </div>
      </div>
    </div>
  );
}

/** Shown on the home page under the featured projects. */
export function AllProjectsCTA({ shown = 3, children }: { shown?: number, children?: React.ReactNode }) {
  const rest = projects.length - shown;
  return (
    <div data-reveal style={{ marginTop: "clamp(48px,7vw,88px)", paddingTop: "clamp(32px,4vw,44px)", borderTop: "1px solid var(--line)", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 20 }}>
      <div>
        <div style={{ fontSize: "clamp(18px,2.4vw,24px)", fontWeight: 600, letterSpacing: "-.02em", maxWidth: "26ch", textWrap: "pretty" }}>
          {rest} more projects, written up in full.
        </div>
        {children}
      </div>
      <Link href="/projects" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", minHeight: 52, padding: "0 28px", borderRadius: 999, background: "var(--btn-bg)", color: "var(--btn-fg)", fontWeight: 600, fontSize: 15 }}>See all projects →</Link>
    </div>
  );
}
