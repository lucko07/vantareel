import type { Metadata } from "next";
import CTA from "@/components/site/CTA";
import FAQAccordion from "@/components/site/FAQAccordion";
import PricingTable from "@/components/site/PricingTable";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { pricingDetails } from "@/content";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "VantaReel monthly plans, what counts as a clip, revision policy, add-ons, and pricing FAQs.",
  openGraph: {
    title: "Pricing | VantaReel",
    description:
      "Compare Starter, Growth, and Authority plans for monthly short-form clip production.",
    images: ["/og-image.jpg"],
  },
};

export default function PricingPage() {
  return (
    <>
      <Section>
        <Container>
          <Badge>Pricing</Badge>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">Simple monthly plans for consistent short-form output</h1>
          <p className="mt-3 max-w-3xl text-[var(--muted)]">
            Choose the plan that fits your content volume now and scale up as your publishing cadence grows.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="/book">Book a Strategy Call</Button>
            <Button href="/services" variant="ghost">View Service Details</Button>
          </div>
        </Container>
      </Section>

      <PricingTable heading="Choose your monthly plan" showAllDetails />

      <Section tone="muted">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="border border-[var(--border)] bg-white p-7 shadow-none hover:translate-y-0">
              <h2 className="text-2xl font-semibold tracking-tight">What counts as a clip</h2>
              <p className="mt-3 text-sm text-[var(--muted)]">{pricingDetails.whatCountsAsClip}</p>
            </Card>
            <Card className="border border-[var(--border)] bg-white p-7 shadow-none hover:translate-y-0">
              <h2 className="text-2xl font-semibold tracking-tight">Revision policy</h2>
              <p className="mt-3 text-sm text-[var(--muted)]">{pricingDetails.revisionPolicy}</p>
            </Card>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="text-3xl font-semibold tracking-tight">Add-ons</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {pricingDetails.addOns.map((item) => (
              <Card key={item} className="border border-[var(--border)] bg-white p-6 shadow-none hover:translate-y-0">
                <p className="text-sm font-medium">{item}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <FAQAccordion title="Pricing FAQ" count={6} />
      <CTA />
    </>
  );
}
