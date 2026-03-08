import type { Metadata } from "next";
import Script from "next/script";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book a Strategy Call",
  description:
    "Book a VantaReel strategy call to review your long-form content workflow and plan your first monthly clip system.",
  openGraph: {
    title: "Book a Strategy Call | VantaReel",
    description:
      "See who the call is for, what we cover, and schedule your VantaReel strategy session.",
    images: ["/og-image.jpg"],
  },
};

export default function BookPage() {
  return (
    <Section>
      <Container>
        <div className="mx-auto max-w-5xl">
          <Badge>Book a Call</Badge>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">Book a Strategy Call</h1>
          <p className="mt-4 max-w-3xl text-[var(--muted)]">
            This call is for creators, coaches, consultants, podcasters, and teams already producing long-form content and ready to repurpose it consistently.
          </p>
          <p className="mt-3 max-w-3xl text-sm text-[var(--muted)]">
            No-pressure consultation: if there is no fit, you still leave with clear next steps for improving your short-form workflow.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <Card className="border border-[var(--border)] bg-white p-5 shadow-none hover:translate-y-0">
              <h2 className="text-base font-semibold">What happens on the call</h2>
              <p className="mt-2 text-sm text-[var(--muted)]">We review your current publishing workflow and identify short-form bottlenecks.</p>
            </Card>
            <Card className="border border-[var(--border)] bg-white p-5 shadow-none hover:translate-y-0">
              <h2 className="text-base font-semibold">What we cover</h2>
              <p className="mt-2 text-sm text-[var(--muted)]">Volume goals, platform priorities, style direction, turnaround needs, and plan recommendation.</p>
            </Card>
            <Card className="border border-[var(--border)] bg-white p-5 shadow-none hover:translate-y-0">
              <h2 className="text-base font-semibold">After the call</h2>
              <p className="mt-2 text-sm text-[var(--muted)]">You get a clear next-step plan for onboarding and monthly delivery start.</p>
            </Card>
          </div>

          <div className="mt-8 rounded-2xl border border-[var(--border)] bg-white p-3 shadow-sm">
            <div className="calendly-inline-widget" data-url={site.calendlyUrl} style={{ minWidth: "320px", height: "760px" }} />
          </div>

          <p className="mt-6 text-sm text-[var(--muted)]">
            If the calendar does not load, open it directly: <a className="underline" href={site.calendlyUrl} target="_blank" rel="noreferrer">{site.calendlyUrl}</a>
          </p>
          <p className="mt-2 text-sm text-[var(--muted)]">
            Fallback contact: <a className="underline" href={`mailto:${site.email}`}>{site.email}</a>
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/book">Book a Strategy Call</Button>
            <Button href="/work" variant="ghost">See Sample Work</Button>
            <Button href="/audit" variant="ghost">Get a Free Content Audit</Button>
          </div>
        </div>
      </Container>
      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="afterInteractive" />
    </Section>
  );
}
