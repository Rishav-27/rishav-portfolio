import Section, { eyebrow, h2 } from "./Section";
import ProjectRow, { AllProjectsCTA } from "./ProjectRow";
import { projects } from "../data/resume";

export default function Work() {
  return (
    <Section id="work">
      <div data-reveal style={eyebrow}>02 — SELECTED WORK</div>
      <h2 data-reveal style={{ ...h2, margin: "0 0 clamp(40px,7vw,88px)", maxWidth: "20ch" }}>
        Shipped products, and the things I built to learn.
      </h2>

      <div data-projects="true" style={{ display: "flex", flexDirection: "column", gap: "clamp(56px,9vw,120px)" }}>
        {projects.slice(0, 3).map((p) => <ProjectRow key={p.num} p={p} />)}
      </div>

      <AllProjectsCTA />

      <p data-reveal style={{ margin: "clamp(28px,3vw,36px) 0 0", fontSize: 15.5, lineHeight: 1.6, color: "var(--dim)", maxWidth: "64ch", textWrap: "pretty" }}>
        Alongside these I&apos;ve contributed to a number of client builds at WebbyWolf that aren&apos;t mine to write up publicly — happy to walk through the work in a conversation.
      </p>
    </Section>
  );
}
