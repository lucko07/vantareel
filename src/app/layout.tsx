import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/content";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.metadataBase),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "VantaReel repurposes podcasts, webinars, interviews, and YouTube videos into premium short-form clips for TikTok, Reels, and Shorts.",
  openGraph: {
    title: siteConfig.name,
    description:
      "Turn long-form content into consistent short-form growth with weekly clip delivery.",
    images: [siteConfig.ogImage],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
