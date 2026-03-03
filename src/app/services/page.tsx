import type { Metadata } from "next";
import CTA from "@/components/site/CTA";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description: "Repurposing packages, add-ons, and quality standards for weekly short-form output.",
  openGraph: {
    title: "Services | VantaReel",
    description: "Repurposing packages, add-ons, and quality standards for weekly short-form output.",
    images: ["/og-image.jpg"],
  },
};

export default function Page() {
  return (
    <>
      <Section>
        <Container>
          <Badge>Services</Badge>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight">Repurposing packages for weekly growth</h1>
          <p className="mt-3 max-w-2xl text-[var(--muted)]">
            Choose a delivery cadence that matches your content volume and brand standards.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="/book">Book a Call</Button>
            <Button href="/pricing" variant="secondary">
              View Pricing
            </Button>
          </div>
        </Container>
      </Section>

      <Section tone="muted">
        <Container>
          <h2 className="text-3xl font-semibold tracking-tight">Repurposing packages</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {services.packages.map((pkg) => (
              <Card key={pkg.name} className="bg-white">
                <h3 className="text-xl font-semibold">{pkg.name}</h3>
                <p className="mt-2 text-sm text-[var(--muted)]">{pkg.description}</p>
                <ul className="mt-4 space-y-2 text-sm text-[var(--muted)]">
                  {pkg.deliverables.map((item) => (
                    <li key={item}>- {item}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="text-3xl font-semibold tracking-tight">Add-ons</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.addOns.map((item) => (
              <Card key={item}>
                <p className="text-sm text-[var(--fg)]">{item}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="muted">
        <Container>
          <h2 className="text-3xl font-semibold tracking-tight">Quality standards</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {services.qualityStandards.map((item) => (
              <Card key={item} className="bg-white">
                <p className="text-sm text-[var(--fg)]">{item}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <CTA />
    </>
  );
}
