import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://vantareel.com"),
  title: {
    default: "VantaReel",
    template: "%s | VantaReel",
  },
  description: "Podcast → Viral Shorts, Weekly.",
  openGraph: {
    title: "VantaReel",
    description: "Podcast → Viral Shorts, Weekly.",
    images: ["/og-image.jpg"],
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
