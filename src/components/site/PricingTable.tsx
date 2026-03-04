import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { pricingTiers } from "@/lib/content";
import { cn } from "@/lib/utils";

export default function PricingTable() {
  return (
    <Section>
      <Container>
        <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">Pricing that scales with your output</h2>
        <p className="mt-4 max-w-2xl text-lg text-[var(--muted)]">
          Start with a monthly retainer and expand clip volume as your content engine grows.
        </p>
        <div className="mt-10 grid items-stretch gap-6 md:grid-cols-3">
          {pricingTiers.map((tier) => (
            <Card
              key={tier.name}
              className={cn(
                "relative transition-all duration-300 hover:scale-[1.01]",
                tier.featured &&
                  "border-transparent bg-[linear-gradient(white,white)_padding-box,linear-gradient(130deg,var(--accent),var(--accent2))_border-box] shadow-[0_16px_40px_rgba(0,0,0,0.10)]"
              )}
            >
              {tier.featured ? (
                <div className="absolute right-5 top-5 rounded-2xl border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cyan-700">
                  Most Popular
                </div>
              ) : null}
              <div className="text-sm text-[var(--muted)]">{tier.name}</div>
              <div className="mt-2 text-3xl font-semibold">
                {tier.price}
                <span className="ml-1 text-sm font-medium text-[var(--muted)]">{tier.cadence}</span>
              </div>
              <p className="mt-2 text-sm text-[var(--muted)]">{tier.line}</p>
              <ul className="mt-5 space-y-2 text-sm text-[var(--muted)]">
                {tier.includes.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
              <Button href="/book" variant={tier.featured ? "primary" : "secondary"} className="mt-6 w-full">
                Book a Call
              </Button>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
