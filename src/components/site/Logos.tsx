import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { homeContent } from "@/lib/content";

const logos = ["Creator Studio", "Momentum Media", "Signal House", "Northbound Labs", "Peak Network"];

export default function Logos() {
  return (
    <Section tone="muted" className="py-10">
      <Container>
        <p className="text-center text-sm font-medium text-[var(--muted)]">{homeContent.logosHeading}</p>
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
          {logos.map((logo) => (
            <div
              key={logo}
              className="rounded-2xl border border-[var(--border)] bg-white px-4 py-3 text-center text-sm text-[var(--muted)]"
            >
              {logo}
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
