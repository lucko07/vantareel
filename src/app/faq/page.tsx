import type { Metadata } from "next";
import CTA from "@/components/site/CTA";
import FAQAccordion from "@/components/site/FAQAccordion";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common VantaReel objections about clips, revisions, turnaround, posting support, and fit.",
  openGraph: {
    title: "FAQ | VantaReel",
    description:
      "Get clear answers on workflow, formats, revisions, and getting started with VantaReel.",
    images: ["/og-image.jpg"],
  },
};

export default function FAQPage() {
  return (
    <>
      <Section>
        <Container>
          <Badge>FAQ</Badge>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">Frequently asked questions</h1>
          <p className="mt-3 max-w-3xl text-[var(--muted)]">
            Direct answers to the most common objections before starting a short-form repurposing partnership.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="/book">Book a Strategy Call</Button>
            <Button href="/pricing" variant="ghost">See Plans</Button>
          </div>
        </Container>
      </Section>
      <FAQAccordion />
      <CTA />
    </>
  );
}
