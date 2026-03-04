import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { homeContent } from "@/lib/content";
import { site } from "@/lib/site";

export default function Hero() {
  return (
    <Section className="relative flex min-h-screen items-center overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(0,212,255,0.26),transparent_42%),radial-gradient(circle_at_85%_18%,rgba(124,58,237,0.24),transparent_42%),radial-gradient(circle_at_55%_80%,rgba(37,99,235,0.2),transparent_45%)]" />
      <Container className="relative">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <Badge>{homeContent.hero.eyebrow}</Badge>
            <h1 className="mt-6 text-5xl font-semibold tracking-tight text-balance md:text-6xl">
              {homeContent.hero.title}
            </h1>
            <p className="mt-6 max-w-xl text-lg text-[var(--muted)] md:text-xl">{homeContent.hero.subtitle}</p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button
                href="/book"
                size="lg"
                className="hover:shadow-[0_0_36px_rgba(0,212,255,0.45)]"
              >
                {site.primaryCta}
              </Button>
              <Button href="/work" variant="secondary" size="lg">
                {site.secondaryCta}
              </Button>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-3 text-sm text-[var(--muted)] sm:grid-cols-3">
              {homeContent.hero.trustBullets.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/70 bg-white/80 px-4 py-3 shadow-sm backdrop-blur-sm"
                >
                  <span className="font-medium text-[var(--fg)]">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <Card className="animate-float border-white/25 bg-white/10 shadow-2xl backdrop-blur-xl">
            <h2 className="text-xl font-semibold">What you get</h2>
            <ul className="mt-4 space-y-3 text-sm text-[var(--muted)]">
              {homeContent.hero.offerChecklist.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
            <div className="mt-6 rounded-2xl border border-white/30 bg-white/40 p-4 text-sm backdrop-blur-sm">
              <div className="font-medium text-[var(--fg)]">Fast start</div>
              <div className="mt-1 text-[var(--muted)]">{homeContent.hero.promise}</div>
            </div>
          </Card>
        </div>
      </Container>
    </Section>
  );
}
