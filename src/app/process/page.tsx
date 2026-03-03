import type { Metadata } from "next";
import CTA from "@/components/site/CTA";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { processSteps } from "@/lib/content";

export const metadata: Metadata = {
  title: "Process",
  description: "See onboarding, weekly cadence, and who handles what in the VantaReel workflow.",
  openGraph: {
    title: "Process | VantaReel",
    description: "See onboarding, weekly cadence, and who handles what in the VantaReel workflow.",
    images: ["/og-image.jpg"],
  },
};

export default function Page() {
  return (
    <>
      <Section>
        <Container>
          <Badge>Process</Badge>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight">A clean onboarding-to-delivery cadence</h1>
          <p className="mt-3 max-w-2xl text-[var(--muted)]">
            Built to keep approvals focused, quality consistent, and production moving every week.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="/book">Book a Call</Button>
            <Button href="/services" variant="secondary">
              See Services
            </Button>
          </div>
        </Container>
      </Section>

      <Section tone="muted">
        <Container>
          <h2 className="text-3xl font-semibold tracking-tight">Onboarding checklist</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <Card key={step.title} className="bg-white">
                <h3 className="font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-[var(--muted)]">{step.body}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="text-3xl font-semibold tracking-tight">Weekly cadence timeline</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {["Monday: Intake", "Tuesday: Edit", "Wednesday: Review", "Friday: Delivery"].map((item) => (
              <Card key={item}>
                <p className="text-sm font-medium">{item}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="muted">
        <Container>
          <h2 className="text-3xl font-semibold tracking-tight">Who handles what</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <Card className="bg-white">
              <h3 className="text-lg font-semibold">You provide</h3>
              <ul className="mt-4 space-y-2 text-sm text-[var(--muted)]">
                <li>- Source recordings or episode links</li>
                <li>- Brand direction and references</li>
                <li>- Timely approval feedback</li>
              </ul>
            </Card>
            <Card className="bg-white">
              <h3 className="text-lg font-semibold">We handle</h3>
              <ul className="mt-4 space-y-2 text-sm text-[var(--muted)]">
                <li>- Clip selection and hook framing</li>
                <li>- Captions, pacing, and layout polish</li>
                <li>- Organized weekly delivery</li>
              </ul>
            </Card>
          </div>
        </Container>
      </Section>

      <CTA />
    </>
  );
}
