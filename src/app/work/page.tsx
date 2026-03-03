import type { Metadata } from "next";
import CaseStudyGrid from "@/components/site/CaseStudyGrid";
import CTA from "@/components/site/CTA";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Work",
  description: "Case studies showing how teams turn long-form content into short-form systems.",
  openGraph: {
    title: "Work | VantaReel",
    description: "Case studies showing how teams turn long-form content into short-form systems.",
    images: ["/og-image.jpg"],
  },
};

export default function Page() {
  return (
    <>
      <Section>
        <Container>
          <Badge>Work</Badge>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight">Case studies from real production workflows</h1>
          <p className="mt-3 max-w-2xl text-[var(--muted)]">
            Examples of how VantaReel supports creators, operators, and agencies with repeatable short-form delivery.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="/book">Book a Call</Button>
            <Button href="/pricing" variant="secondary">
              View Pricing
            </Button>
          </div>
        </Container>
      </Section>
      <CaseStudyGrid />
      <CTA />
    </>
  );
}
