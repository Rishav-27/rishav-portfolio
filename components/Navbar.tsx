"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { header } from "../data/resume";

const core = {
  display: "var(--navcore)",
  alignItems: "center",
  padding: "8px 13px",
  borderRadius: 999,
  fontSize: 14,
  fontWeight: 500,
  color: "var(--dim)",
} as const;
const extra = { ...core, display: "var(--navlinks)" } as const;
const sheet = {
  padding: "14px 4px",
  fontSize: 17,
  fontWeight: 500,
  borderBottom: "1px solid var(--line)",
} as const;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
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
        <a
          href="#top"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 11,
            minWidth: 0,
          }}
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
        </a>

        <div style={{ display: "flex", alignItems: "center", gap: 2 }}>
          <a href="#about" style={core}>
            About
          </a>
          <a href="#work" style={core}>
            Work
          </a>
          <a href="#experience" style={core}>
            Experience
          </a>
          <Link href="/projects" style={core}>
            Projects
          </Link>
          <a href="#building" style={extra}>
            Building
          </a>
          <a href="#skills" style={extra}>
            Skills
          </a>
          <a href="#contact" style={extra}>
            Contact
          </a>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          {/* <a href={header.phoneHref} style={{ display: "var(--navlinks)", alignItems: "center", height: 40, padding: "0 12px", borderRadius: 999, fontSize: 13.5, fontWeight: 500, color: "var(--dim)", whiteSpace: "nowrap" }}>{header.phone}</a> */}
          <ThemeToggle />
          <a
            href={`mailto:${header.email}`}
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
            Hire me
          </a>
          <button
            onClick={() => setOpen(!open)}
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
              <path
                d={open ? "M18 6L6 18M6 6l12 12" : "M3 6h18M3 12h18M3 18h18"}
              />
            </svg>
          </button>
        </div>
      </div>

      {open && (
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
          <a href="#about" onClick={close} style={sheet}>
            About
          </a>
          <a href="#work" onClick={close} style={sheet}>
            Work
          </a>
          <a href="#building" onClick={close} style={sheet}>
            Building
          </a>
          <a href="#experience" onClick={close} style={sheet}>
            Experience
          </a>
          <Link href="/projects" style={sheet}>
            All projects
          </Link>
          <a href="#skills" onClick={close} style={sheet}>
            Skills
          </a>
          <a href="#offline" onClick={close} style={sheet}>
            How I show up
          </a>
          <a
            href="#contact"
            onClick={close}
            style={{ padding: "14px 4px", fontSize: 17, fontWeight: 500 }}
          >
            Contact
          </a>
          <a
            href={`mailto:${header.email}`}
            style={{
              marginTop: 14,
              height: 52,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 999,
              background: "var(--btn-bg)",
              color: "var(--btn-fg)",
              fontWeight: 600,
            }}
          >
            Hire me
          </a>
        </div>
      )}
    </nav>
  );
}
