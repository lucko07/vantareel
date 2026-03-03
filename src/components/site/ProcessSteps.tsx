import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { processSteps } from "@/lib/content";

export default function ProcessSteps() {
  return (
    <Section tone="muted">
      <Container>
        <h2 className="text-3xl font-semibold tracking-tight">Simple weekly workflow</h2>
        <p className="mt-2 max-w-2xl text-[var(--muted)]">
          A focused production cadence keeps quality high and approvals straightforward.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {processSteps.map((step) => (
            <Card key={step.title} className="bg-white">
              <h3 className="font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm text-[var(--muted)]">{step.body}</p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
