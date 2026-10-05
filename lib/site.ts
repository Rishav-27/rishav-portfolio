// Set NEXT_PUBLIC_SITE_URL to the custom domain once you have one; until then
// canonicals, the sitemap and structured data point at the live Vercel URL.
const url = (process.env.NEXT_PUBLIC_SITE_URL || "https://rishav-portfolio-wine.vercel.app").replace(/\/$/, "")

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
