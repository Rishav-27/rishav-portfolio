import type { Metadata } from "next";
import ScrollFX from "../../components/ScrollFX";
import ProjectsIndex from "../../components/ProjectsIndex";

export const metadata: Metadata = {
  title: "Projects — Rishav Kumar",
  description: "Everything I've built: shipped products, personal projects, and what's in progress.",
};

export default function ProjectsPage() {
  return (
    <>
      <ScrollFX />
      <ProjectsIndex />
    </>
  );
}
