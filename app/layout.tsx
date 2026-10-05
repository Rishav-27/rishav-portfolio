import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import SmoothScroll from "../components/SmoothScroll";
import "./globals.css";
import { siteConfig } from "../lib/site";
import { header } from "../data/resume";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: siteConfig.title, template: "%s" },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  alternates: { canonical: "/" },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: `${siteConfig.name} — Portfolio`,
    locale: "en_US",
    type: "website",
    images: [{ url: siteConfig.ogImage, alt: siteConfig.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

// Structured data so search engines connect the name "Rishav Kumar" to this site and his profiles.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteConfig.url}/#person`,
      name: siteConfig.name,
      url: siteConfig.url,
      image: `${siteConfig.url}${siteConfig.ogImage}`,
      jobTitle: siteConfig.jobTitle,
      description: siteConfig.description,
      email: `mailto:${header.email}`,
      worksFor: { "@type": "Organization", name: "WebbyWolf Innovations" },
      address: { "@type": "PostalAddress", addressLocality: "Jamshedpur", addressRegion: "Jharkhand", addressCountry: "IN" },
      knowsAbout: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Supabase"],
      sameAs: [siteConfig.links.linkedin, siteConfig.links.github, header.instagram],
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: `${siteConfig.name} — Portfolio`,
      publisher: { "@id": `${siteConfig.url}/#person` },
      inLanguage: "en",
    },
  ],
};

import Atmosphere from "../components/Atmosphere";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Script id="theme-init" strategy="beforeInteractive">
          {`try{var t=localStorage.getItem('rk-portfolio-theme');if(t==='light'||t==='dark'){document.documentElement.dataset.theme=t}}catch(e){}`}
        </Script>
        <Atmosphere />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
