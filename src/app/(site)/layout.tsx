import type { Metadata } from "next";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";

export const metadata: Metadata = {
  title: {
    default: "VantaReel",
    template: "%s | VantaReel",
  },
  description: "Premium short-form repurposing for creators, teams, and agencies.",
};

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh bg-white text-black">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
