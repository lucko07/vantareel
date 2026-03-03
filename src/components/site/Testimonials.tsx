import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { homeContent } from "@/lib/content";

export default function Testimonials() {
  return (
    <Section tone="muted">
      <Container>
        <h2 className="text-3xl font-semibold tracking-tight">What clients say</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {homeContent.testimonials.map((item) => (
            <Card key={item.name} className="bg-white">
              <p className="text-sm text-[var(--fg)]">{item.quote}</p>
              <div className="mt-5 text-sm text-[var(--muted)]">
                <div className="font-medium text-[var(--fg)]">{item.name}</div>
                <div>{item.role}</div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
