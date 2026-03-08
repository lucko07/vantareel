import type { Metadata } from "next";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "VantaReel terms for short-form repurposing services including payment, revisions, ownership, and liability limits.",
  openGraph: {
    title: "Terms | VantaReel",
    description:
      "Review VantaReel service terms, payment expectations, revision policy, and ownership rights.",
    images: ["/og-image.jpg"],
  },
};

export default function TermsPage() {
  return (
    <Section>
      <Container className="max-w-4xl">
        <Badge>Terms</Badge>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight">Terms of Service</h1>
        <p className="mt-3 text-sm text-[var(--muted)]">Last updated: March 8, 2026</p>

        <div className="mt-8 space-y-4">
          <Card className="border border-[var(--border)] bg-white p-6 shadow-none hover:translate-y-0">
            <h2 className="text-xl font-semibold">Service scope</h2>
            <p className="mt-2 text-sm text-[var(--muted)]">Scope, clip volume, delivery cadence, and platform formats are defined by your selected plan and signed agreement.</p>
          </Card>
          <Card className="border border-[var(--border)] bg-white p-6 shadow-none hover:translate-y-0">
            <h2 className="text-xl font-semibold">Payments</h2>
            <p className="mt-2 text-sm text-[var(--muted)]">Monthly fees are billed in advance. Work may pause on overdue invoices. Add-ons and rush requests are billed separately when approved.</p>
          </Card>
          <Card className="border border-[var(--border)] bg-white p-6 shadow-none hover:translate-y-0">
            <h2 className="text-xl font-semibold">Revisions</h2>
            <p className="mt-2 text-sm text-[var(--muted)]">One revision round per batch is included unless otherwise agreed. Additional revision rounds are available as paid add-ons.</p>
          </Card>
          <Card className="border border-[var(--border)] bg-white p-6 shadow-none hover:translate-y-0">
            <h2 className="text-xl font-semibold">Intellectual property</h2>
            <p className="mt-2 text-sm text-[var(--muted)]">Clients retain ownership of source material. Final deliverables transfer to the client after full payment. VantaReel may reference non-confidential work for portfolio use unless restricted in writing.</p>
          </Card>
          <Card className="border border-[var(--border)] bg-white p-6 shadow-none hover:translate-y-0">
            <h2 className="text-xl font-semibold">Service disclaimer and liability limits</h2>
            <p className="mt-2 text-sm text-[var(--muted)]">We do not guarantee specific performance metrics. Maximum liability is limited to fees paid for the current billing period.</p>
          </Card>
          <Card className="border border-[var(--border)] bg-white p-6 shadow-none hover:translate-y-0">
            <h2 className="text-xl font-semibold">Contact</h2>
            <p className="mt-2 text-sm text-[var(--muted)]">Questions about terms can be sent to <a className="underline" href={`mailto:${site.email}`}>{site.email}</a>.</p>
          </Card>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/book">Book a Strategy Call</Button>
          <Button href="/work" variant="ghost">See Sample Work</Button>
          <Button href="/audit" variant="ghost">Get a Free Content Audit</Button>
        </div>
      </Container>
    </Section>
  );
}
