import type { Metadata } from "next";
import CTA from "@/components/site/CTA";
import FAQAccordion from "@/components/site/FAQAccordion";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers to common questions about turnaround, revisions, brand style, and delivery.",
  openGraph: {
    title: "FAQ | VantaReel",
    description: "Answers to common questions about turnaround, revisions, brand style, and delivery.",
    images: ["/og-image.jpg"],
  },
};

export default function Page() {
  return (
    <>
      <Section>
        <Container>
          <Badge>FAQ</Badge>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight">Common questions, answered clearly</h1>
          <p className="mt-3 max-w-2xl text-[var(--muted)]">
            Everything teams usually ask before starting a monthly short-form workflow.
          </p>
          <div className="mt-6">
            <Button href="/book">Book a Call</Button>
          </div>
        </Container>
      </Section>
      <FAQAccordion count={8} />
      <CTA />
    </>
  );
}
