import type { Metadata } from "next";
import CaseStudyGrid from "@/components/site/CaseStudyGrid";
import CTA from "@/components/site/CTA";
import Features from "@/components/site/Features";
import Hero from "@/components/site/Hero";
import Logos from "@/components/site/Logos";
import PricingTable from "@/components/site/PricingTable";
import ProcessSteps from "@/components/site/ProcessSteps";
import Testimonials from "@/components/site/Testimonials";
import {
  BookStrategyCallCTA,
  FreeAuditCTA,
  MonthlyPlanCTA,
  SeeSampleClipsCTA,
} from "@/components/site/cta/ActionBlocks";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { homepageDeliverables, homepageWhoWeHelp } from "@/content";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Turn long-form content into 30+ monthly short videos with hook-first editing, captions, and weekly delivery.",
  openGraph: {
    title: "VantaReel | Home",
    description:
      "VantaReel repurposes long-form videos into high-performing short-form clips for TikTok, Reels, and Shorts.",
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

      <Section tone="muted" className="py-14 md:py-16">
        <Container>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">What clients receive every month</h2>
          <p className="mt-3 max-w-2xl text-[var(--muted)]">
            High-quality assets delivered in a predictable cadence, ready for social publishing.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {homepageDeliverables.map((item) => (
              <Card key={item} className="border border-[var(--border)] bg-white p-5 shadow-none hover:translate-y-0">
                <p className="text-sm font-medium">{item}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <CaseStudyGrid preview limit={3} />
      <PricingTable heading="Pricing preview" />

      <Section className="py-16 md:py-20">
        <Container>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Who We Help</h2>
          <p className="mt-3 max-w-2xl text-[var(--muted)]">
            We support long-form content businesses that need consistent short-form output without adding editing overhead.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {homepageWhoWeHelp.map((item) => (
              <Card key={item.title} className="border border-[var(--border)] bg-white p-5 shadow-none hover:translate-y-0">
                <h3 className="text-base font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-[var(--muted)]">{item.reason}</p>
              </Card>
            ))}
          </div>
          <div className="mt-8">
            <Button href="/who-we-help" variant="ghost">
              See Target Client Details
            </Button>
          </div>
        </Container>
      </Section>

      <Testimonials />

      <Section tone="muted" className="py-14 md:py-16">
        <Container>
          <div className="grid gap-4 md:grid-cols-2">
            <BookStrategyCallCTA />
            <SeeSampleClipsCTA />
            <FreeAuditCTA />
            <MonthlyPlanCTA />
          </div>
        </Container>
      </Section>

      <CTA />

      <Section className="pt-14 md:pt-16">
        <Container>
          <div className="rounded-3xl border border-[var(--border)] bg-white p-8 md:p-12">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Ready to turn your long-form content into weekly growth?
            </h2>
            <p className="mt-3 max-w-2xl text-[var(--muted)]">
              Start with a strategy call or review sample work to see how VantaReel can fit your monthly content goals.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/book" size="lg">
                Book a Strategy Call
              </Button>
              <Button href="/work" variant="ghost" size="lg">
                See Sample Work
              </Button>
              <Button href="/audit" variant="ghost" size="lg">
                Get a Free Content Audit
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
