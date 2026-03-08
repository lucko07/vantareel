import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { homepageProblemPoints } from "@/content";

export default function Features() {
  return (
    <Section tone="muted" className="py-14 md:py-16">
      <Container>
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Why most long-form creators stall on short-form</h2>
        <p className="mt-3 max-w-2xl text-[var(--muted)]">
          VantaReel is built to remove the specific production bottlenecks that stop consistent growth.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {homepageProblemPoints.map((point) => (
            <Card key={point} className="border border-[var(--border)] bg-white p-6 hover:translate-y-0">
              <p className="text-sm font-medium">{point}</p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
