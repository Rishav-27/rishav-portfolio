// TODO: set NEXT_PUBLIC_SITE_URL once the production domain is chosen.
const url = process.env.NEXT_PUBLIC_SITE_URL || "https://your-domain.com"

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
  ],
  links: {
    linkedin: "https://www.linkedin.com/in/rishav27/",
    github: "https://github.com/Rishav-27",
  },
}
