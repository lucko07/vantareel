import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { site } from "@/lib/site";

export default function CTA() {
  return (
    <Section tone="dark">
      <Container>
        <div className="rounded-3xl border border-white/15 bg-neutral-900 p-8 md:p-12">
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight md:text-4xl">
            Ready to turn long-form content into weekly growth?
          </h2>
          <p className="mt-3 max-w-2xl text-white/80">
            Book a short call to review your content workflow and map your first month of delivery.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="/book" size="lg">
              {site.primaryCta}
            </Button>
            <Button href={site.calendlyUrl} variant="ghost" size="lg" className="border-white/20 bg-transparent text-white hover:bg-white/10">
              Open Calendly
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
