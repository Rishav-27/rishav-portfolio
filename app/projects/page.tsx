import type { Metadata } from "next";
import ScrollFX from "../../components/ScrollFX";
import ProjectsIndex from "../../components/ProjectsIndex";
import { siteConfig } from "../../lib/site";

export const metadata: Metadata = {
  title: "Projects — Rishav Kumar",
  description: "Everything I've built: shipped products, personal projects, and what's in progress.",
  alternates: { canonical: `${siteConfig.url}/projects` },
  openGraph: {
    title: "Projects — Rishav Kumar",
    description: "Everything I've built: shipped products, personal projects, and what's in progress.",
    url: `${siteConfig.url}/projects`,
    images: [siteConfig.ogImage],
  },
};

export default function ProjectsPage() {
  return (
    <>
      <ScrollFX />
      <ProjectsIndex />
    </>
  );
}
