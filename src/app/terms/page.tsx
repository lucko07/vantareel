import type { Metadata } from "next";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms",
  description: "General terms for using the VantaReel website and services.",
  openGraph: {
    title: "Terms | VantaReel",
    description: "General terms for using the VantaReel website and services.",
    images: ["/og-image.jpg"],
  },
};

export default function Page() {
  return (
    <Section>
      <Container>
        <Badge>Terms</Badge>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight">Terms of Service</h1>
        <p className="mt-3 max-w-2xl text-[var(--muted)]">
          These terms are general informational content and do not replace legal counsel.
        </p>
        <div className="mt-6">
          <Button href="/book">Book a Call</Button>
        </div>

        <div className="mt-10 space-y-4">
          <Card>
            <h2 className="text-lg font-semibold">Scope of Work</h2>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Specific deliverables, timelines, and revision limits are defined in your client agreement.
            </p>
          </Card>
          <Card>
            <h2 className="text-lg font-semibold">Payments</h2>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Retainers and payment schedules are documented before production begins.
            </p>
          </Card>
          <Card>
            <h2 className="text-lg font-semibold">Ownership & Usage</h2>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Clients retain ownership of source content and approved final deliverables after payment.
            </p>
          </Card>
          <Card>
            <h2 className="text-lg font-semibold">Contact</h2>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Questions about terms can be sent to <a className="underline" href={`mailto:${site.email}`}>{site.email}</a>.
            </p>
          </Card>
        </div>
      </Container>
    </Section>
  );
}
