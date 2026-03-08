import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export default function Hero() {
  return (
    <Section className="relative overflow-hidden pb-12 pt-24 md:pt-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(234,88,12,0.16),transparent_44%),radial-gradient(circle_at_85%_20%,rgba(14,116,144,0.14),transparent_40%)]" />
      <Container className="relative">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <Badge>Premium Short-Form Repurposing</Badge>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-balance md:text-6xl">
              Turn Long-Form Content Into 30+ Short Videos Every Month
            </h1>
            <p className="mt-5 max-w-3xl text-lg text-[var(--muted)] md:text-xl">
              We repurpose podcasts, webinars, interviews, and YouTube videos into scroll-stopping short-form videos
              for TikTok, Reels, and Shorts so creators grow without spending hours editing.
            </p>
            <p className="mt-3 max-w-3xl text-base text-[var(--muted)] md:text-lg">
              Built for podcasters, coaches, consultants, and creators who want consistent short-form content
              without managing editors.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/book" size="lg">
                Book a Strategy Call
              </Button>
              <Button href="/work" variant="ghost" size="lg">
                See Sample Work
              </Button>
            </div>
            <ul className="mt-8 grid gap-3 text-sm text-[var(--fg)] sm:grid-cols-3">
              <li className="rounded-2xl border border-[var(--border)] bg-white px-4 py-3">Weekly clip delivery</li>
              <li className="rounded-2xl border border-[var(--border)] bg-white px-4 py-3">
                Hook-first editing with captions
              </li>
              <li className="rounded-2xl border border-[var(--border)] bg-white px-4 py-3">
                Built for TikTok, Reels, and Shorts
              </li>
            </ul>
          </div>

          <Card className="border border-[var(--border)] bg-white shadow-lg hover:translate-y-0">
            <h2 className="text-xl font-semibold">What you get</h2>
            <p className="mt-6 text-sm text-[var(--muted)]">
              Every batch is edited for retention, clarity, and ready-to-post delivery.
            </p>
            <ul className="mt-4 space-y-3 text-sm text-[var(--muted)]">
              <li>- Clip selection from your best long-form moments</li>
              <li>- Hook-first edits with platform-native pacing</li>
              <li>- Branded captions with safe-zone spacing</li>
              <li>- Organized files for immediate publishing</li>
            </ul>
          </Card>
        </div>
      </Container>
    </Section>
  );
}
