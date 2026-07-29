"use client";
import { useEffect } from "react";

/**
 * Drives three scroll behaviours with one rAF loop + one IntersectionObserver:
 *  [data-reveal] fade + rise, staggered per sibling group
 *  [data-grow="x"|"y"] timeline rules that draw when their block reveals
 *  [data-tilt]  scroll-linked 3D rotation (the project "ladder")
 */
export function useScrollFX() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const growWithin = (root: Element) => {
      root.querySelectorAll<HTMLElement>('[data-grow][data-grown="0"]').forEach((el, i) => {
        el.style.transition = `transform 1.05s cubic-bezier(.16,1,.3,1) ${160 + i * 90}ms`;
        el.style.transform = "none";
        el.setAttribute("data-grown", "1");
      });
    };

    const revealNodes = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const growNodes = Array.from(document.querySelectorAll<HTMLElement>("[data-grow]"));

    if (reduce) {
      revealNodes.forEach((n) => n.setAttribute("data-revealed", "1"));
      growNodes.forEach((n) => n.setAttribute("data-grown", "1"));
      return;
    }

    revealNodes.forEach((n) => {
      n.setAttribute("data-revealed", "0");
      n.style.opacity = "0";
      n.style.transform = "translateY(22px)";
    });
    growNodes.forEach((n) => {
      n.setAttribute("data-grown", "0");
      n.style.transform = n.getAttribute("data-grow") === "x" ? "scaleX(0)" : "scaleY(0)";
    });

    const show = (el: HTMLElement, delay: number) => {
      el.style.transition =
        `opacity .7s cubic-bezier(.16,1,.3,1) ${delay}ms, transform .7s cubic-bezier(.16,1,.3,1) ${delay}ms`;
      el.style.opacity = "1";
      el.style.transform = "none";
      el.setAttribute("data-revealed", "1");
      growWithin(el);
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting && entry.boundingClientRect.top > 0) return;
          const el = entry.target as HTMLElement;
          const sibs = Array.from(el.parentElement?.children ?? []).filter((c) =>
            c.hasAttribute("data-reveal")
          );
          show(el, Math.min(sibs.indexOf(el), 5) * 90);
          io.unobserve(el);
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.05 }
    );
    revealNodes.forEach((n) => io.observe(n));

    let raf = 0;
    const apply = () => {
      raf = 0;
      const vh = window.innerHeight || 800;

      // safety net: a fast anchor jump can skip observer ticks
      document.querySelectorAll<HTMLElement>('[data-revealed="0"]').forEach((el) => {
        if (el.getBoundingClientRect().top < vh * 0.92) show(el, 0);
      });

      document.querySelectorAll<HTMLElement>("[data-tilt]").forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.bottom < -200 || r.top > vh + 200) return;
        const centre = r.top + r.height / 2;
        const p = Math.max(-1, Math.min(1, (centre - vh / 2) / (vh * 0.85)));
        el.style.transform =
          `perspective(1600px) rotateX(${(p * 11).toFixed(2)}deg) translateY(${(p * 26).toFixed(1)}px) scale(${(1 - Math.abs(p) * 0.05).toFixed(4)})`;
        el.style.opacity = (1 - Math.abs(p) * 0.55).toFixed(3);
      });
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(apply); };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    apply();

    return () => {
      io.disconnect();
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
}
