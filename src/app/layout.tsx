import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://vantareel.com"),
  title: {
    default: "VantaReel",
    template: "%s | VantaReel",
  },
  description:
    "VantaReel repurposes long-form podcasts and videos into high-performing short-form content every week.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
