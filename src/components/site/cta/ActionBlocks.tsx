import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { sampleAuditOffer } from "@/content";

function ActionBlock({
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: {
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <Card className="border border-[var(--border)] bg-white p-8 shadow-none hover:translate-y-0 hover:shadow-none">
      <h3 className="text-2xl font-semibold tracking-tight">{title}</h3>
      <p className="mt-3 text-sm text-[var(--muted)]">{description}</p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Button href={primaryHref}>{primaryLabel}</Button>
        {secondaryLabel && secondaryHref ? (
          <Button href={secondaryHref} variant="ghost">
            {secondaryLabel}
          </Button>
        ) : null}
      </div>
    </Card>
  );
}

export function BookStrategyCallCTA() {
  return (
    <ActionBlock
      title="Book a Strategy Call"
      description="Review your current long-form content, identify bottlenecks, and map a weekly clip plan."
      primaryLabel="Book a Strategy Call"
      primaryHref="/book"
      secondaryLabel="See Pricing"
      secondaryHref="/pricing"
    />
  );
}

export function SeeSampleClipsCTA() {
  return (
    <ActionBlock
      title="See Sample Work"
      description="Preview sample transformations and how long-form recordings become short-form assets."
      primaryLabel="See Sample Work"
      primaryHref="/work"
      secondaryLabel="How It Works"
      secondaryHref="/process"
    />
  );
}

export function FreeAuditCTA() {
  return (
    <ActionBlock
      title={sampleAuditOffer.title}
      description={sampleAuditOffer.description}
      primaryLabel={sampleAuditOffer.cta}
      primaryHref="/audit"
      secondaryLabel="Book a Strategy Call"
      secondaryHref="/book"
    />
  );
}

export function MonthlyPlanCTA() {
  return (
    <ActionBlock
      title="Start With a Monthly Plan"
      description="Choose a plan aligned to your publishing goals and scale clip volume as your content engine grows."
      primaryLabel="Start With a Monthly Plan"
      primaryHref="/pricing"
      secondaryLabel="Book a Strategy Call"
      secondaryHref="/book"
    />
  );
}
