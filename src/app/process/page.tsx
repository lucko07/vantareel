import type { Metadata } from "next";
import CTA from "@/components/site/CTA";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { processOverview } from "@/content";

export const metadata: Metadata = {
  title: "Process",
  description:
    "See onboarding, weekly workflow, responsibilities, revision steps, and delivery timeline for VantaReel clients.",
  openGraph: {
    title: "Process | VantaReel",
    description:
      "Understand what happens after booking, from onboarding through weekly short-form delivery.",
    images: ["/og-image.jpg"],
  },
};

export default function ProcessPage() {
  return (
    <>
      <Section>
        <Container>
          <Badge>Process</Badge>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">How VantaReel runs your weekly clip workflow</h1>
          <p className="mt-3 max-w-3xl text-[var(--muted)]">
            A practical system from onboarding to weekly delivery so your team can publish consistently without production chaos.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="/book">Book a Strategy Call</Button>
            <Button href="/onboarding" variant="ghost">View Onboarding Form</Button>
          </div>
        </Container>
      </Section>

      <Section tone="muted">
        <Container>
          <h2 className="text-3xl font-semibold tracking-tight">Onboarding process</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {processOverview.steps.map((step, index) => (
              <Card key={step} className="border border-[var(--border)] bg-white p-6 shadow-none hover:translate-y-0">
                <p className="text-xs uppercase tracking-wide text-[var(--muted)]">Step {index + 1}</p>
                <h3 className="mt-2 text-base font-semibold">{step}</h3>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="text-3xl font-semibold tracking-tight">Weekly workflow and delivery schedule</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              "Monday: Intake and source review",
              "Tuesday: Clip selection and first edit pass",
              "Wednesday: Captions and brand polish",
              "Friday: Final delivery and revision wrap",
            ].map((item) => (
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
              <h2 className="text-2xl font-semibold tracking-tight">Client responsibilities</h2>
              <ul className="mt-4 space-y-2 text-sm text-[var(--muted)]">
                {processOverview.clientResponsibilities.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
            </Card>
            <Card className="border border-[var(--border)] bg-white p-7 shadow-none hover:translate-y-0">
              <h2 className="text-2xl font-semibold tracking-tight">VantaReel responsibilities</h2>
              <ul className="mt-4 space-y-2 text-sm text-[var(--muted)]">
                {processOverview.vantareelResponsibilities.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
            </Card>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Card className="border border-[var(--border)] bg-white p-8 shadow-none hover:translate-y-0">
            <h2 className="text-2xl font-semibold tracking-tight">What happens after booking</h2>
            <p className="mt-3 text-sm text-[var(--muted)]">
              After your call, we confirm scope and plan. Once onboarding details and source links are submitted, production begins and first delivery typically arrives within 7 business days.
            </p>
            <p className="mt-3 text-sm text-[var(--muted)]">
              Revision steps: submit feedback in one consolidated note set, we apply updates, and finalize delivery for publishing.
            </p>
          </Card>
        </Container>
      </Section>

      <CTA />
    </>
  );
}
