import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { site } from "@/lib/site";

export default function CTA() {
  return (
    <Section tone="dark">
      <Container>
        <div className="relative overflow-hidden rounded-2xl border border-white/20 bg-[radial-gradient(circle_at_50%_0%,rgba(0,212,255,0.35),transparent_48%),linear-gradient(130deg,#05070f_0%,#111827_45%,#291254_100%)] p-8 md:p-14">
          <div className="pointer-events-none absolute -left-24 top-10 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="pointer-events-none absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-indigo-500/25 blur-3xl" />
          <div className="relative mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Ready to turn long-form content into weekly growth?
            </h2>
            <p className="mt-4 max-w-2xl text-white/80 md:mx-auto">
              Book a short call to review your content workflow and map your first month of delivery.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button href="/book" size="lg" className="hover:shadow-[0_0_36px_rgba(0,212,255,0.45)]">
                {site.primaryCta}
              </Button>
              <Button
                href={site.calendlyUrl}
                variant="secondary"
                size="lg"
                className="border border-white/30 bg-white/10 text-white hover:bg-white/20"
              >
                Open Calendar
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
