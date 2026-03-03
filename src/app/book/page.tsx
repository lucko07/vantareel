import type { Metadata } from "next";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book a Call",
  description: "Schedule a quick intro call to map your first month of short-form production.",
  openGraph: {
    title: "Book a Call | VantaReel",
    description: "Schedule a quick intro call to map your first month of short-form production.",
    images: ["/og-image.jpg"],
  },
};

export default function Page() {
  return (
    <Section>
      <Container>
        <Badge>Book</Badge>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight">Book your strategy call</h1>
        <p className="mt-3 max-w-2xl text-[var(--muted)]">
          We’ll review your content pipeline, confirm fit, and map an actionable monthly scope.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <Card>
            <h2 className="text-xl font-semibold">What we will cover on the call</h2>
            <ul className="mt-4 space-y-2 text-sm text-[var(--muted)]">
              <li>- Your current long-form content flow</li>
              <li>- Clip volume targets and channels</li>
              <li>- Style direction and brand constraints</li>
              <li>- Recommended package and next steps</li>
            </ul>
            <p className="mt-5 text-sm text-[var(--muted)]">
              Expect a practical conversation focused on workflow and output quality.
            </p>
          </Card>

          <Card className="border-transparent bg-neutral-950 text-white">
            <h2 className="text-xl font-semibold">Choose your booking option</h2>
            <p className="mt-2 text-sm text-white/75">
              Use Calendly for the fastest route. Email fallback is available if preferred.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <Button href={site.calendlyUrl} size="lg">
                Open Calendly
              </Button>
              <a href={`mailto:${site.email}`} className="text-sm text-white/80 underline">
                {site.email}
              </a>
            </div>
          </Card>
        </div>
      </Container>
    </Section>
  );
}
