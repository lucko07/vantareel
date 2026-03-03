import type { Metadata } from "next";
import CTA from "@/components/site/CTA";
import PricingTable from "@/components/site/PricingTable";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { pricingNotes } from "@/lib/content";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Simple monthly retainers for predictable short-form production.",
  openGraph: {
    title: "Pricing | VantaReel",
    description: "Simple monthly retainers for predictable short-form production.",
    images: ["/og-image.jpg"],
  },
};

export default function Page() {
  return (
    <>
      <Section>
        <Container>
          <Badge>Pricing</Badge>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight">Retainers built for consistency</h1>
          <p className="mt-3 max-w-2xl text-[var(--muted)]">
            Transparent monthly tiers so your team can scale short-form output without surprises.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="/book">Book a Call</Button>
            <Button href="/services" variant="secondary">
              Compare Services
            </Button>
          </div>
        </Container>
      </Section>

      <PricingTable />

      <Section tone="muted">
        <Container>
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="bg-white">
              <h2 className="text-xl font-semibold">What counts as a clip</h2>
              <p className="mt-2 text-sm text-[var(--muted)]">{pricingNotes.clipDefinition}</p>
            </Card>
            <Card className="bg-white">
              <h2 className="text-xl font-semibold">Revisions policy</h2>
              <p className="mt-2 text-sm text-[var(--muted)]">{pricingNotes.revisions}</p>
            </Card>
          </div>
        </Container>
      </Section>

      <CTA />
    </>
  );
}
