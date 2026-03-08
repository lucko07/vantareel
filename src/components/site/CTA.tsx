import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export default function CTA() {
  return (
    <Section tone="dark">
      <Container>
        <div className="rounded-3xl border border-white/20 bg-[linear-gradient(120deg,#111827_0%,#0b1b33_55%,#2a1500_100%)] p-8 md:p-14">
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight md:text-4xl">
            Ready to turn your long-form content into weekly growth?
          </h2>
          <p className="mt-4 max-w-2xl text-sm text-white/80 md:text-base">
            Book a strategy call and we will map a practical clip workflow for your niche, volume, and posting goals.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/book" size="lg">
              Book a Strategy Call
            </Button>
            <Button href="/work" variant="ghost" size="lg" className="border border-white/30 bg-white/10 text-white hover:bg-white/20">
              See Sample Work
            </Button>
            <Button href="/audit" variant="ghost" size="lg" className="border border-white/30 bg-white/10 text-white hover:bg-white/20">
              Get a Free Content Audit
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
