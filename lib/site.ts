// Canonical production domain. Canonicals, the sitemap and structured data all use it;
// NEXT_PUBLIC_SITE_URL can override it (e.g. for a preview deployment).
const url = (process.env.NEXT_PUBLIC_SITE_URL || "https://rishavdev.in").replace(/\/$/, "")

export const siteConfig = {
  url,
  name: "Rishav Kumar",
  title: "Rishav Kumar — Full-Stack Software Engineer",
  description:
    "Full-stack engineer building fast, real-time products for the web. Next.js, Node, PostgreSQL. Currently at WebbyWolf Innovations.",
  ogImage: "/rishav.jpg",
  keywords: [
    "Rishav Kumar",
    "Full-Stack Software Engineer",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer",
    "TypeScript",
    "PostgreSQL",
    "Supabase",
    "WebbyWolf",
    "Software Engineer Portfolio",
    "Rishav Kumar Developer",
    "Rishav Kumar Jamshedpur",
    "Rishav Kumar Portfolio",
  ],
  jobTitle: "Full-Stack Software Engineer",
  location: "Jamshedpur, Jharkhand, India",
  links: {
    linkedin: "https://www.linkedin.com/in/rishav27/",
    github: "https://github.com/Rishav-27",
  },
}
