"use client";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { eyebrow, h2 } from "./Section";
import { header } from "../data/resume";

const ActivityCalendar = dynamic(() => import("react-activity-calendar").then((m) => m.ActivityCalendar), {
  ssr: false,
});

const username = header.github.replace(/\/$/, "").split("/").pop() ?? "";

type Activity = { date: string; count: number; level: 0 | 1 | 2 | 3 | 4 };

function readScheme(): "light" | "dark" {
  const attr = document.documentElement.dataset.theme;
  if (attr === "light" || attr === "dark") return attr;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function GithubActivity() {
  const [scheme, setScheme] = useState<"light" | "dark">("dark");
  const [data, setData] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setScheme(readScheme());
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const sync = () => setScheme(readScheme());
    mq.addEventListener("change", sync);
    const observer = new MutationObserver(sync);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    return () => {
      mq.removeEventListener("change", sync);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    let cancelled = false;
    fetch(`/api/github-contributions?username=${username}`, { cache: "no-store" })
      .then((r) => r.json())
      .then((json) => {
        if (!cancelled && json.contributions) {
          setData(json.contributions);
          setLoading(false);
        }
      })
      .catch(() => setLoading(false));
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section id="github" style={{ padding: "var(--sec) var(--pad)", maxWidth: 1280, margin: "0 auto", borderTop: "1px solid var(--line)" }}>
      <div data-reveal style={eyebrow}>06 — GITHUB ACTIVITY</div>
      <h2 data-reveal style={{ ...h2, margin: "0 0 clamp(28px,4vw,40px)", maxWidth: "20ch" }}>
        Commits, not just claims.
      </h2>

      <div data-reveal style={{ border: "1px solid var(--line)", borderRadius: 20, padding: "clamp(20px,3vw,32px)", overflowX: "auto" }}>
        <ActivityCalendar
          data={data}
          loading={loading}
          colorScheme={scheme}
          blockSize={12}
          blockMargin={4}
          fontSize={13}
          theme={{
            light: ["var(--surf2)", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
            dark: ["var(--surf2)", "#0e4429", "#006d32", "#26a641", "#39d353"],
          }}
        />
      </div>

      <p data-reveal style={{ marginTop: 16, fontSize: 14, color: "var(--dim)" }}>
        <a href={header.github} target="_blank" rel="noreferrer" style={{ textDecoration: "underline", textUnderlineOffset: 4, textDecorationColor: "var(--line2)" }}>
          @{username} on GitHub →
        </a>
      </p>
    </section>
  );
}
