import type { Metadata } from "next";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Lead Form",
  description:
    "Lead capture form for VantaReel prospects looking to improve growth, consistency, and time savings with short-form repurposing.",
  openGraph: {
    title: "Lead Form | VantaReel",
    description: "Tell us your biggest short-form bottleneck and get a plan recommendation.",
    images: ["/og-image.jpg"],
  },
};

export default function LeadPage() {
  return (
    <Section>
      <Container className="max-w-4xl">
        <Badge>Lead Capture</Badge>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight">Get a short-form growth plan</h1>
        <p className="mt-3 text-[var(--muted)]">
          Share your channel details and biggest short-form challenge. We will recommend a practical repurposing plan.
        </p>

        <form className="mt-8 grid gap-5 rounded-3xl border border-[var(--border)] bg-white p-6 md:grid-cols-2 md:p-8">
          <label>
            <span className="mb-2 block text-sm font-medium">Name</span>
            <input name="name" required className="w-full rounded-xl border border-[var(--border)] px-3 py-2 text-sm outline-none focus:border-[var(--accent)]" />
          </label>
          <label>
            <span className="mb-2 block text-sm font-medium">Email</span>
            <input name="email" type="email" required className="w-full rounded-xl border border-[var(--border)] px-3 py-2 text-sm outline-none focus:border-[var(--accent)]" />
          </label>
          <label>
            <span className="mb-2 block text-sm font-medium">Niche</span>
            <input name="niche" required className="w-full rounded-xl border border-[var(--border)] px-3 py-2 text-sm outline-none focus:border-[var(--accent)]" />
          </label>
          <label>
            <span className="mb-2 block text-sm font-medium">Website or Channel</span>
            <input name="website" type="url" required className="w-full rounded-xl border border-[var(--border)] px-3 py-2 text-sm outline-none focus:border-[var(--accent)]" />
          </label>
          <label>
            <span className="mb-2 block text-sm font-medium">Monthly content volume</span>
            <input name="contentVolume" required className="w-full rounded-xl border border-[var(--border)] px-3 py-2 text-sm outline-none focus:border-[var(--accent)]" />
          </label>
          <label className="md:col-span-2">
            <span className="mb-2 block text-sm font-medium">Biggest short-form challenge</span>
            <textarea
              name="challenge"
              required
              rows={4}
              className="w-full rounded-xl border border-[var(--border)] px-3 py-2 text-sm outline-none focus:border-[var(--accent)]"
            />
          </label>
          <div className="md:col-span-2 flex flex-wrap gap-3">
            <button type="submit" className="inline-flex rounded-2xl bg-[var(--accent)] px-5 py-3 text-sm font-medium text-white transition hover:bg-[var(--accent-dark)]">
              Send My Growth Request
            </button>
            <Button href="/book" variant="ghost">Book a Strategy Call</Button>
            <Button href="/work" variant="ghost">See Sample Work</Button>
            <Button href="/audit" variant="ghost">Get a Free Content Audit</Button>
          </div>
        </form>
      </Container>
    </Section>
  );
}
