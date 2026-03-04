import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { homeContent } from "@/lib/content";

export default function Testimonials() {
  return (
    <Section tone="muted">
      <Container>
        <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">What clients say</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {homeContent.testimonials.map((item) => (
            <Card key={item.name} className="bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <p className="text-base leading-relaxed text-[var(--fg)]">{item.quote}</p>
              <div className="mt-6 text-sm text-[var(--muted)]">
                <div className="font-medium text-[var(--fg)]">{item.name}</div>
                <div className="mt-1">{item.role}</div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
