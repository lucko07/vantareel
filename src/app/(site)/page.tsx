import type { Metadata } from "next";
import CTA from "@/components/site/CTA";
import FAQAccordion from "@/components/site/FAQAccordion";
import Features from "@/components/site/Features";
import Hero from "@/components/site/Hero";
import Logos from "@/components/site/Logos";
import PricingTable from "@/components/site/PricingTable";
import ProcessSteps from "@/components/site/ProcessSteps";
import Testimonials from "@/components/site/Testimonials";

export const metadata: Metadata = {
  title: "Home",
  description: "Turn long-form content into premium short videos delivered every week.",
  openGraph: {
    title: "VantaReel | Home",
    description: "Turn long-form content into premium short videos delivered every week.",
    images: ["/og-image.jpg"],
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Logos />
      <Features />
      <ProcessSteps />
      <Testimonials />
      <PricingTable />
      <FAQAccordion count={6} />
      <CTA />
    </>
  );
}
