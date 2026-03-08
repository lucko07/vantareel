import type { Metadata } from "next";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "VantaReel privacy policy for website visitors, leads, and clients using our short-form repurposing services.",
  openGraph: {
    title: "Privacy Policy | VantaReel",
    description:
      "Understand what data VantaReel collects, how it is used, and how to contact us for privacy requests.",
    images: ["/og-image.jpg"],
  },
};

export default function PrivacyPage() {
  return (
    <Section>
      <Container className="max-w-4xl">
        <Badge>Privacy</Badge>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight">Privacy Policy</h1>
        <p className="mt-3 text-sm text-[var(--muted)]">Last updated: March 8, 2026</p>

        <div className="mt-8 space-y-4">
          <Card className="border border-[var(--border)] bg-white p-6 shadow-none hover:translate-y-0">
            <h2 className="text-xl font-semibold">Information we collect</h2>
            <p className="mt-2 text-sm text-[var(--muted)]">Contact details, onboarding responses, project files, and basic site analytics needed to provide and improve services.</p>
          </Card>
          <Card className="border border-[var(--border)] bg-white p-6 shadow-none hover:translate-y-0">
            <h2 className="text-xl font-semibold">How we use information</h2>
            <p className="mt-2 text-sm text-[var(--muted)]">To respond to inquiries, deliver editing services, manage revisions, and communicate about account or project updates.</p>
          </Card>
          <Card className="border border-[var(--border)] bg-white p-6 shadow-none hover:translate-y-0">
            <h2 className="text-xl font-semibold">Data sharing</h2>
            <p className="mt-2 text-sm text-[var(--muted)]">We do not sell personal information. We may share relevant project data with approved contractors strictly for fulfillment purposes.</p>
          </Card>
          <Card className="border border-[var(--border)] bg-white p-6 shadow-none hover:translate-y-0">
            <h2 className="text-xl font-semibold">Security and retention</h2>
            <p className="mt-2 text-sm text-[var(--muted)]">We keep business records and content files only as long as needed for service delivery, legal requirements, and support continuity.</p>
          </Card>
          <Card className="border border-[var(--border)] bg-white p-6 shadow-none hover:translate-y-0">
            <h2 className="text-xl font-semibold">Contact</h2>
            <p className="mt-2 text-sm text-[var(--muted)]">For privacy requests, email <a className="underline" href={`mailto:${site.email}`}>{site.email}</a>.</p>
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
