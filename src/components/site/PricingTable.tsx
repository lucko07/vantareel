import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { pricingTiers } from "@/content";
import { cn } from "@/lib/utils";

export default function PricingTable({
  heading = "Monthly plans built for consistent output",
  showAllDetails = false,
}: {
  heading?: string;
  showAllDetails?: boolean;
}) {
  return (
    <Section>
      <Container>
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{heading}</h2>
        <p className="mt-3 max-w-2xl text-[var(--muted)]">
          Premium editing retainers designed for predictable short-form publishing momentum.
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {pricingTiers.map((tier) => (
            <Card
              key={tier.name}
              className={cn(
                "relative border p-7 shadow-none",
                tier.featured ? "border-neutral-900 bg-neutral-900 text-white" : "border-[var(--border)] bg-white"
              )}
            >
              {tier.featured ? (
                <span className="absolute right-5 top-5 rounded-full border border-white/25 bg-white/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-white">
                  Most Popular
                </span>
              ) : null}
              <p className={cn("text-xs font-medium uppercase tracking-wide", tier.featured ? "text-neutral-300" : "text-[var(--muted)]")}>
                {tier.name}
              </p>
              <p className="mt-2 text-3xl font-semibold">{tier.monthlyPrice}</p>
              <p className={cn("mt-2 text-sm", tier.featured ? "text-neutral-300" : "text-[var(--muted)]")}>{tier.clipCount}</p>
              <p className={cn("mt-3 text-sm", tier.featured ? "text-neutral-300" : "text-[var(--muted)]")}>{tier.idealFor}</p>
              <ul className={cn("mt-5 space-y-2 text-sm", tier.featured ? "text-neutral-200" : "text-[var(--muted)]")}>
                {(showAllDetails ? tier.includes : tier.includes.slice(0, 4)).map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
              <Button
                href="/book"
                className={cn("mt-6 w-full", tier.featured ? "bg-white text-neutral-950 hover:bg-neutral-100" : "")}
                variant={tier.featured ? "ghost" : "primary"}
              >
                Book a Strategy Call
              </Button>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
