"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

/** Clears the fixed navbar (66px) with a little breathing room. */
const NAV_OFFSET = -80;

/** Site-wide Lenis smooth scrolling. Skipped for visitors who ask for reduced motion. */
export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({ autoRaf: true, lerp: 0.1 });

    // In-page links (#about, /#work while on /, …) glide instead of jumping.
    // Lenis's own `anchors` option doesn't cancel the browser's instant jump, so do it here.
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as Element | null)?.closest?.("a[href]");
      if (!(a instanceof HTMLAnchorElement)) return;
      const url = new URL(a.href);
      if (!url.hash || url.origin !== location.origin || url.pathname !== location.pathname) return;

      const id = decodeURIComponent(url.hash.slice(1));
      const target = id === "top" ? 0 : document.getElementById(id);
      if (target === null) return;

      e.preventDefault();
      lenis.scrollTo(target, { offset: target === 0 ? 0 : NAV_OFFSET });
      history.pushState(null, "", url.hash);
    };
    document.addEventListener("click", onClick);

    return () => {
      document.removeEventListener("click", onClick);
      lenis.destroy();
    };
  }, []);

  return null;
}
