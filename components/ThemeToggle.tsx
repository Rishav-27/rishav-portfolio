"use client";
import { useSyncExternalStore } from "react";

type Theme = "light" | "dark";
const KEY = "rk-portfolio-theme";
const PATHS: Record<Theme, string> = {
  light: "M12 17a5 5 0 100-10 5 5 0 000 10zM12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42",
  dark: "M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z",
};

/**
 * The theme on screen: the visitor's own pick if they've made one (put on <html> by the
 * inline script in layout.tsx), otherwise whatever their system prefers.
 */
function current(): Theme {
  const picked = document.documentElement.dataset.theme;
  if (picked === "light" || picked === "dark") return picked;
  return matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function subscribe(onChange: () => void) {
  const mq = matchMedia("(prefers-color-scheme: dark)");
  const mo = new MutationObserver(onChange);
  mq.addEventListener("change", onChange);
  mo.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  return () => {
    mq.removeEventListener("change", onChange);
    mo.disconnect();
  };
}

export default function ThemeToggle() {
  // null on the server, so hydration matches before the real theme is known.
  const theme = useSyncExternalStore<Theme | null>(subscribe, current, () => null);
  const next: Theme = theme === "dark" ? "light" : "dark";

  const apply = () => {
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem(KEY, next);
    } catch {}
  };

  // The new theme grows out of the toggle as a circle until it covers the whole page.
  const toggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!document.startViewTransition || reduce) return apply();

    const r = e.currentTarget.getBoundingClientRect();
    const x = r.left + r.width / 2;
    const y = r.top + r.height / 2;
    const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));

    document
      .startViewTransition(async () => {
        apply();
        // let the icon re-render before the new frame is captured
        await new Promise((res) => setTimeout(res));
      })
      .ready.then(() => {
        document.documentElement.animate(
          { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
          { duration: 650, easing: "cubic-bezier(.65,0,.35,1)", pseudoElement: "::view-transition-new(root)" }
        );
      })
      // Skipped (e.g. tab hidden): the theme is still applied, just without the animation.
      .catch(() => {});
  };

  const label = `Switch to ${next} mode`;
  return (
    <button
      onClick={toggle}
      title={label}
      aria-label={label}
      style={{
        width: 44, height: 44, display: "inline-flex", alignItems: "center", justifyContent: "center",
        border: "1px solid var(--line)", background: "transparent", color: "var(--fg)",
        borderRadius: 999, cursor: "pointer", flex: "none",
      }}
    >
      <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        {/* Shows what a click switches to: a sun in dark mode, a moon in light mode. */}
        {theme && <path d={PATHS[next]} />}
      </svg>
    </button>
  );
}
