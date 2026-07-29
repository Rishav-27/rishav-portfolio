import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rishav Kumar — Full-Stack Software Engineer",
  description:
    "Full-stack engineer building fast, real-time products for the web. Next.js, Node, PostgreSQL. Currently at WebbyWolf Innovations.",
  openGraph: {
    title: "Rishav Kumar — Full-Stack Software Engineer",
    description: "Full-stack engineer building fast, real-time products for the web.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <head>
        {/* apply the saved theme before paint so there is no flash */}
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem('rk-portfolio-theme');if(t==='light'||t==='dark'){document.documentElement.dataset.theme=t}}catch(e){}`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
