import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { testimonialItems } from "@/content";

export default function Testimonials() {
  return (
    <Section tone="muted">
      <Container>
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Social proof</h2>
        <p className="mt-3 text-sm text-[var(--muted)]">Testimonials below are placeholders and can be replaced from `src/content/testimonials.ts`.</p>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {testimonialItems.map((item) => (
            <Card key={item.name} className="border border-[var(--border)] bg-white p-6 shadow-none hover:translate-y-0">
              <p className="text-sm leading-relaxed">{item.quote}</p>
              <div className="mt-5 text-sm text-[var(--muted)]">
                <p className="font-medium text-[var(--fg)]">{item.name}</p>
                <p>{item.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
