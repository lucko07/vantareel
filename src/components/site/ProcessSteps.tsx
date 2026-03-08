import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { processOverview } from "@/content";

export default function ProcessSteps() {
  return (
    <Section className="py-14 md:py-16">
      <Container>
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Simple weekly production flow</h2>
        <p className="mt-3 max-w-2xl text-[var(--muted)]">
          Clear steps keep client approvals fast and delivery quality consistent every week.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {processOverview.steps.map((step, index) => (
            <Card key={step} className="border border-[var(--border)] bg-white p-6 hover:translate-y-0">
              <p className="text-xs font-medium uppercase tracking-wide text-[var(--muted)]">Step {index + 1}</p>
              <h3 className="mt-2 text-base font-semibold">{step}</h3>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
