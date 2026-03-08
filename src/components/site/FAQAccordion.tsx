import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { faqItems } from "@/content";

export default function FAQAccordion({
  title = "Frequently asked questions",
  count,
}: {
  title?: string;
  count?: number;
}) {
  const items = typeof count === "number" ? faqItems.slice(0, count) : faqItems;

  return (
    <Section>
      <Container>
        <h2 className="text-3xl font-semibold tracking-tight">{title}</h2>
        <div className="mt-8 space-y-3">
          {items.map((item) => (
            <details key={item.question} className="rounded-2xl border border-[var(--border)] bg-white p-5">
              <summary className="cursor-pointer list-none pr-6 font-medium">{item.question}</summary>
              <p className="mt-3 text-sm text-[var(--muted)]">{item.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </Section>
  );
}
