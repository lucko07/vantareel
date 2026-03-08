import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export default function Logos() {
  const badges = [
    "Weekly Production Cadence",
    "Platform-Native Formats",
    "Conversion-Focused Editing",
    "Premium Brand Consistency",
  ];

  return (
    <Section tone="muted" className="py-12">
      <Container>
        <p className="text-center text-sm font-medium text-[var(--muted)]">Built for predictable short-form execution</p>
        <div className="mt-6 grid gap-3 md:grid-cols-4">
          {badges.map((item) => (
            <div key={item} className="rounded-2xl border border-[var(--border)] bg-white px-4 py-3 text-center text-sm text-[var(--muted)]">
              {item}
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
