"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { header } from "../data/resume";

const links = [
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];
const sheet = {
  padding: "14px 4px",
  fontSize: 17,
  fontWeight: 500,
  borderBottom: "1px solid var(--line)",
} as const;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const close = () => setOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the link for whichever section is crossing the middle of the viewport.
  useEffect(() => {
    const els = links
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => !!el);
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <motion.nav
      initial={false}
      animate={{
        width: scrolled ? "min(calc(100% - 32px), 900px)" : "100%",
        top: scrolled ? 16 : 0,
        borderRadius: scrolled ? 999 : 0,
        background: scrolled ? "var(--navbg)" : "transparent",
        border: scrolled ? "1px solid var(--line)" : "1px solid transparent",
        boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.08)" : "0 0 0 rgba(0,0,0,0)",
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      style={{
        position: "fixed",
        left: "50%",
        x: "-50%",
        zIndex: 60,
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 var(--pad)",
          height: scrolled ? 60 : 66,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
          transition: "height 0.3s ease",
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

        <motion.div
          animate={{
            background: scrolled ? "transparent" : "var(--navbg)",
            borderColor: scrolled ? "transparent" : "var(--line)",
          }}
          transition={{ duration: 0.3 }}
          style={{
            display: "var(--navcore)",
            alignItems: "center",
            gap: 2,
            padding: 4,
            borderRadius: 999,
            border: "1px solid var(--line)",
          }}
        >
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              data-navlink
              aria-current={active === l.id ? "true" : undefined}
              style={{ position: "relative" }}
            >
              {active === l.id && (
                <motion.div
                  layoutId="activeTab"
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "var(--surf)",
                    borderRadius: 999,
                    zIndex: -1,
                  }}
                  transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                />
              )}
              {l.label}
            </a>
          ))}
        </motion.div>

        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
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
          <Link href="/projects" onClick={close} style={sheet}>
            All projects
          </Link>
          <a href="#skills" onClick={close} style={sheet}>
            Skills
          </a>
          <a href="#github" onClick={close} style={sheet}>
            GitHub
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
    </motion.nav>
  );
}
