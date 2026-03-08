import type { Metadata } from "next";
import Footer from "@/components/site/Footer";
import Navbar from "@/components/site/Navbar";

export const metadata: Metadata = {
  title: {
    default: "VantaReel",
    template: "%s | VantaReel",
  },
  description: "Premium short-form repurposing for creators, coaches, consultants, and podcast teams.",
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
