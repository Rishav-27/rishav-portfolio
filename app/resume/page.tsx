import type { Metadata } from "next";
import ScrollFX from "../../components/ScrollFX";
import ResumeView from "../../components/ResumeView";
import { header } from "../../data/resume";
import { siteConfig } from "../../lib/site";

export const metadata: Metadata = {
  title: `Résumé — ${header.name}`,
  description:
    "One-page résumé for Rishav Kumar, Full Stack Software Engineer — React, Next.js, TypeScript, Node.js, PostgreSQL. Read it here or download the PDF.",
  alternates: { canonical: `${siteConfig.url}/resume` },
  openGraph: {
    title: `Résumé — ${header.name}`,
    description:
      "Full Stack Software Engineer — React, Next.js, TypeScript, Node.js, PostgreSQL.",
    url: `${siteConfig.url}/resume`,
    images: [siteConfig.ogImage],
  },
};

export default function ResumePage() {
  // Same shell as app/projects/page.tsx: ScrollFX must be mounted once per
  // route or every [data-reveal] in ResumeView is inert. ResumeView owns its
  // own background/minHeight wrapper, exactly like ProjectsIndex does.
  return (
    <>
      <ScrollFX />
      <ResumeView />
    </>
  );
}
