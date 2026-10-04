import Section, { eyebrow, h2 } from "./Section";
import ProjectRow, { AllProjectsCTA } from "./ProjectRow";
import { projects } from "../data/resume";

const FEATURED = 5;
// Hidden from the home page only; still listed on /projects.
const HOME_HIDDEN = ["aeoix", "linkova"];
const featured = projects.filter((p) => !HOME_HIDDEN.includes(p.slug)).slice(0, FEATURED);

export default function Work() {
  return (
    <Section id="work">
      <div data-reveal style={eyebrow}>02 — SELECTED WORK</div>
      <h2 data-reveal style={{ ...h2, margin: "0 0 clamp(40px,7vw,88px)", maxWidth: "20ch" }}>
        Shipped products, and the things I built to learn.
      </h2>

      <div data-projects="true" style={{ display: "flex", flexDirection: "column", gap: "clamp(56px,9vw,120px)" }}>
        {featured.map((p) => <ProjectRow key={p.num} p={p} />)}
      </div>

      <AllProjectsCTA shown={FEATURED}>
        <p style={{ margin: "12px 0 0", fontSize: 15.5, lineHeight: 1.6, color: "var(--dim)", maxWidth: "64ch", textWrap: "pretty" }}>
          Beyond these, I&apos;ve architected and shipped several high-performance, proprietary web applications for various clients. I&apos;m always happy to dive into the technical details and system design in a conversation.
        </p>
      </AllProjectsCTA>
    </Section>
  );
}
