import Image from "next/image";
import type { Project } from "../data/resume";

/**
 * Separate phone screens (public/<slug>/m-*.png, transparent background),
 * shown whole; the first shot sits in the centre, larger, the next two beside it. Tune HEIGHTS to adjust.
 */
const HEIGHTS = [84, 100, 84]; // % of the container height, per screen

export default function PhoneStrip({ p, aspectRatio }: { p: Project; aspectRatio: string }) {
  const [main, left, right] = (p.shots ?? [])
    .filter((s) => s.device === "mobile")
    .slice(1, 1 + HEIGHTS.length);
  const screens = [left, main, right].filter(Boolean); // first shot goes in the centre
  return (
    <div
      style={{
        aspectRatio,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "2.5%",
        padding: "2% 0",
      }}
    >
      {screens.map((s, i) => (
        <Image
          key={s.src}
          src={s.src}
          alt={`${p.title} — ${s.caption}`}
          width={780}
          height={1696}
          sizes="25vw"
          style={{
            height: `${HEIGHTS[i]}%`,
            width: "auto",
            filter: "drop-shadow(0 18px 28px rgba(0,0,0,0.28))",
          }}
        />
      ))}
    </div>
  );
}
