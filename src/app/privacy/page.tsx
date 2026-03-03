import type { Metadata } from "next";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "General privacy information for VantaReel website visitors and clients.",
  openGraph: {
    title: "Privacy Policy | VantaReel",
    description: "General privacy information for VantaReel website visitors and clients.",
    images: ["/og-image.jpg"],
  },
};

export default function Page() {
  return (
    <Section>
      <Container>
        <Badge>Privacy</Badge>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight">Privacy Policy</h1>
        <p className="mt-3 max-w-2xl text-[var(--muted)]">
          This is general information and not legal advice. Contact us for policy questions.
        </p>
        <div className="mt-6">
          <Button href="/book">Book a Call</Button>
        </div>

        <div className="mt-10 space-y-4">
          <Card>
            <h2 className="text-lg font-semibold">Information We Collect</h2>
            <p className="mt-2 text-sm text-[var(--muted)]">
              We may collect contact information submitted through email or booking forms and basic analytics data.
            </p>
          </Card>
          <Card>
            <h2 className="text-lg font-semibold">How We Use Information</h2>
            <p className="mt-2 text-sm text-[var(--muted)]">
              We use data to communicate about services, improve site experience, and deliver agreed client work.
            </p>
          </Card>
          <Card>
            <h2 className="text-lg font-semibold">Contact</h2>
            <p className="mt-2 text-sm text-[var(--muted)]">
              For privacy requests, email <a className="underline" href={`mailto:${site.email}`}>{site.email}</a>.
            </p>
          </Card>
        </div>
      </Container>
    </Section>
  );
}
