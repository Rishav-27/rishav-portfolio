"use client";
import { useEffect, useState } from "react";

type Mode = "auto" | "light" | "dark";
const ORDER: Mode[] = ["auto", "light", "dark"];
const PATHS: Record<Mode, string> = {
  light: "M12 17a5 5 0 100-10 5 5 0 000 10zM12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42",
  dark: "M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z",
  auto: "M12 3a9 9 0 000 18 9 9 0 000-18zM12 3v18",
};

export default function ThemeToggle() {
  const [mode, setMode] = useState<Mode>("auto");

  useEffect(() => {
    const saved = localStorage.getItem("rk-portfolio-theme") as Mode | null;
    if (saved === "light" || saved === "dark") {
      setMode(saved);
      document.documentElement.dataset.theme = saved;
    }
  }, []);

  const next = ORDER[(ORDER.indexOf(mode) + 1) % 3];
  const cycle = () => {
    if (next === "auto") delete document.documentElement.dataset.theme;
    else document.documentElement.dataset.theme = next;
    localStorage.setItem("rk-portfolio-theme", next);
    setMode(next);
  };

  return (
    <button
      onClick={cycle}
      title={`Theme: ${mode} — switch to ${next}`}
      aria-label={`Theme: ${mode} — switch to ${next}`}
      style={{
        width: 44, height: 44, display: "inline-flex", alignItems: "center", justifyContent: "center",
        border: "1px solid var(--line)", background: "transparent", color: "var(--fg)",
        borderRadius: 999, cursor: "pointer", flex: "none",
      }}
    >
      <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <path d={PATHS[mode]} />
      </svg>
    </button>
  );
}
