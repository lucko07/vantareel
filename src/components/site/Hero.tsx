import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { homeContent } from "@/lib/content";
import { site } from "@/lib/site";

export default function Hero() {
  return (
    <Section className="relative overflow-hidden pt-16 md:pt-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-[radial-gradient(circle_at_top_left,rgba(0,212,255,0.20),transparent_58%),radial-gradient(circle_at_top_right,rgba(124,58,237,0.12),transparent_50%)]" />
      <Container className="relative">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <Badge>{homeContent.hero.eyebrow}</Badge>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              {homeContent.hero.title}
            </h1>
            <p className="mt-4 max-w-xl text-lg text-[var(--muted)]">{homeContent.hero.subtitle}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/book" size="lg">
                {site.primaryCta}
              </Button>
              <Button href="/work" variant="secondary" size="lg">
                {site.secondaryCta}
              </Button>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-3 text-sm text-[var(--muted)] sm:grid-cols-3">
              {homeContent.hero.trustBullets.map((item) => (
                <div key={item} className="rounded-2xl border border-[var(--border)] bg-white px-4 py-3">
                  <span className="font-medium text-[var(--fg)]">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <Card>
            <h2 className="text-xl font-semibold">What you get</h2>
            <ul className="mt-4 space-y-3 text-sm text-[var(--muted)]">
              {homeContent.hero.offerChecklist.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
            <div className="mt-6 rounded-2xl border border-[var(--border)] bg-neutral-50 p-4 text-sm">
              <div className="font-medium text-[var(--fg)]">Fast start</div>
              <div className="mt-1 text-[var(--muted)]">{homeContent.hero.promise}</div>
            </div>
          </Card>
        </div>
      </Container>
    </Section>
  );
}
