import type { Metadata } from "next";
import CTA from "@/components/site/CTA";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { whoWeHelpItems } from "@/content";

export const metadata: Metadata = {
  title: "Who We Help",
  description:
    "Ideal VantaReel clients including podcasters, YouTubers, coaches, consultants, creators, and educators.",
  openGraph: {
    title: "Who We Help | VantaReel",
    description: "See if VantaReel is the right short-form repurposing partner for your long-form content business.",
    images: ["/og-image.jpg"],
  },
};

export default function WhoWeHelpPage() {
  return (
    <>
      <Section>
        <Container>
          <Badge>Target Clients</Badge>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">Who VantaReel helps most</h1>
          <p className="mt-3 max-w-3xl text-[var(--muted)]">
            If you already create long-form content, we can transform it into a consistent stream of short-form assets.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="/book">Book a Strategy Call</Button>
            <Button href="/audit" variant="ghost">Get a Free Content Audit</Button>
          </div>
        </Container>
      </Section>

      <Section tone="muted">
        <Container>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {whoWeHelpItems.map((item) => (
              <Card key={item.title} className="border border-[var(--border)] bg-white p-6 shadow-none hover:translate-y-0">
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="mt-2 text-sm text-[var(--muted)]">{item.reason}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <CTA />
    </>
  );
}
