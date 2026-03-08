import type { Metadata } from "next";
import CTA from "@/components/site/CTA";
import { MonthlyPlanCTA } from "@/components/site/cta/ActionBlocks";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { serviceContent } from "@/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "VantaReel service scope, deliverables, optional add-ons, formats, turnaround expectations, and revision policy.",
  openGraph: {
    title: "Services | VantaReel",
    description:
      "Explore who VantaReel is for, what is included, supported formats, and delivery expectations.",
    images: ["/og-image.jpg"],
  },
};

export default function ServicesPage() {
  return (
    <>
      <Section>
        <Container>
          <Badge>Services</Badge>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">Short-form repurposing services for growth-focused brands</h1>
          <p className="mt-3 max-w-3xl text-[var(--muted)]">
            We convert existing long-form content into premium short-form clips designed for consistent visibility and reliable publishing cadence.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="/book">Book a Strategy Call</Button>
            <Button href="/pricing" variant="ghost">View Pricing</Button>
          </div>
        </Container>
      </Section>

      <Section tone="muted">
        <Container>
          <h2 className="text-3xl font-semibold tracking-tight">Who this is for</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {serviceContent.whoItIsFor.map((item) => (
              <Card key={item} className="border border-[var(--border)] bg-white p-6 shadow-none hover:translate-y-0">
                <p className="text-sm font-medium">{item}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="text-3xl font-semibold tracking-tight">What is included</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {serviceContent.included.map((item) => (
              <Card key={item} className="border border-[var(--border)] bg-white p-6 shadow-none hover:translate-y-0">
                <p className="text-sm font-medium">{item}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="muted">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="border border-[var(--border)] bg-white p-7 shadow-none hover:translate-y-0">
              <h2 className="text-2xl font-semibold tracking-tight">Optional add-ons</h2>
              <ul className="mt-4 space-y-2 text-sm text-[var(--muted)]">
                {serviceContent.optionalAddOns.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
            </Card>

            <Card className="border border-[var(--border)] bg-white p-7 shadow-none hover:translate-y-0">
              <h2 className="text-2xl font-semibold tracking-tight">Supported content formats</h2>
              <ul className="mt-4 space-y-2 text-sm text-[var(--muted)]">
                {serviceContent.supportedFormats.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
            </Card>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="border border-[var(--border)] bg-white p-7 shadow-none hover:translate-y-0">
              <h2 className="text-2xl font-semibold tracking-tight">Turnaround expectations</h2>
              <ul className="mt-4 space-y-2 text-sm text-[var(--muted)]">
                {serviceContent.turnaround.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
            </Card>

            <Card className="border border-[var(--border)] bg-white p-7 shadow-none hover:translate-y-0">
              <h2 className="text-2xl font-semibold tracking-tight">Platform deliverables</h2>
              <ul className="mt-4 space-y-2 text-sm text-[var(--muted)]">
                {serviceContent.platformDeliverables.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
              <p className="mt-5 text-sm text-[var(--muted)]">{serviceContent.revisionPolicy}</p>
            </Card>
          </div>
        </Container>
      </Section>

      <Section tone="muted">
        <Container>
          <MonthlyPlanCTA />
        </Container>
      </Section>

      <CTA />
    </>
  );
}
