import type { Metadata } from "next";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Free Content Audit",
  description:
    "Request a free VantaReel short-form content audit to get 3 clip opportunities from your latest long-form video.",
  openGraph: {
    title: "Free Content Audit | VantaReel",
    description: "Get 3 repurposing opportunities and hook ideas from your latest long-form video.",
    images: ["/og-image.jpg"],
  },
};

export default function AuditPage() {
  return (
    <Section>
      <Container className="max-w-5xl">
        <Badge>Free Offer</Badge>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">Get a free short-form content audit</h1>
        <p className="mt-3 max-w-3xl text-[var(--muted)]">
          We will review your latest long-form video and send 3 moments that can become high-performing short-form clips.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <Card className="border border-[var(--border)] bg-white p-5 shadow-none hover:translate-y-0">
            <h2 className="text-base font-semibold">What you get</h2>
            <p className="mt-2 text-sm text-[var(--muted)]">Three clip opportunities, hook angles, and suggested platform formatting notes.</p>
          </Card>
          <Card className="border border-[var(--border)] bg-white p-5 shadow-none hover:translate-y-0">
            <h2 className="text-base font-semibold">Who it is for</h2>
            <p className="mt-2 text-sm text-[var(--muted)]">Creators and teams publishing long-form videos and wanting consistent short-form growth.</p>
          </Card>
          <Card className="border border-[var(--border)] bg-white p-5 shadow-none hover:translate-y-0">
            <h2 className="text-base font-semibold">How to request</h2>
            <p className="mt-2 text-sm text-[var(--muted)]">Submit the form below or book a strategy call if you want a full monthly plan recommendation.</p>
          </Card>
        </div>

        <form className="mt-8 grid gap-5 rounded-3xl border border-[var(--border)] bg-white p-6 md:grid-cols-2 md:p-8">
          <label>
            <span className="mb-2 block text-sm font-medium">Name</span>
            <input className="w-full rounded-xl border border-[var(--border)] px-3 py-2 text-sm outline-none focus:border-[var(--accent)]" />
          </label>
          <label>
            <span className="mb-2 block text-sm font-medium">Email</span>
            <input type="email" className="w-full rounded-xl border border-[var(--border)] px-3 py-2 text-sm outline-none focus:border-[var(--accent)]" />
          </label>
          <label className="md:col-span-2">
            <span className="mb-2 block text-sm font-medium">Website or Channel Link</span>
            <input type="url" className="w-full rounded-xl border border-[var(--border)] px-3 py-2 text-sm outline-none focus:border-[var(--accent)]" />
          </label>
          <label className="md:col-span-2">
            <span className="mb-2 block text-sm font-medium">Latest Long-Form Video Link</span>
            <input type="url" className="w-full rounded-xl border border-[var(--border)] px-3 py-2 text-sm outline-none focus:border-[var(--accent)]" />
          </label>
          <div className="md:col-span-2 flex flex-wrap gap-3">
            <button type="submit" className="inline-flex rounded-2xl bg-[var(--accent)] px-5 py-3 text-sm font-medium text-white transition hover:bg-[var(--accent-dark)]">
              Request Free Audit
            </button>
            <Button href="/book" variant="ghost">Book a Strategy Call</Button>
            <Button href="/work" variant="ghost">See Sample Work</Button>
          </div>
        </form>
      </Container>
    </Section>
  );
}
