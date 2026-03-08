import type { Metadata } from "next";
import SampleClipCard from "@/components/site/SampleClipCard";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { specSampleClips } from "@/content";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Spec Sample Clips showing how VantaReel repackages podcasts, talking-head videos, and webinars into short-form content.",
  openGraph: {
    title: "Work | VantaReel",
    description:
      "Review demonstration clip transformations that show VantaReel short-form repurposing quality and workflow.",
    images: ["/og-image.jpg"],
  },
};

export default function WorkPage() {
  return (
    <>
      <Section className="py-16">
        <Container>
          <Badge>Work</Badge>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">Spec Sample Clips</h1>
          <p className="mt-3 max-w-3xl text-[var(--muted)]">
            These sample transformations show how VantaReel repackages long-form content into short-form videos built for weekly growth.
          </p>
          <p className="mt-2 max-w-3xl text-sm text-[var(--muted)]">
            These are demonstration examples of the type of repurposing work VantaReel produces.
          </p>
        </Container>
      </Section>

      <Section tone="muted" className="pt-8 md:pt-10">
        <Container>
          <div className="grid gap-6">
            {specSampleClips.map((clip) => (
              <div key={clip.id} id={clip.id} className="scroll-mt-24">
                <SampleClipCard clip={clip} />
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="rounded-3xl border border-[var(--border)] bg-[linear-gradient(140deg,#ffffff_0%,#f8fafc_100%)] p-8 shadow-sm md:p-10">
            <h2 className="text-3xl font-semibold tracking-tight">Want clips like these from your own content?</h2>
            <p className="mt-3 max-w-3xl text-[var(--muted)]">
              If you already record podcasts, interviews, webinars, or talking-head videos, VantaReel can turn them into weekly short-form content ready for TikTok, Reels, and Shorts.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/book">Book a Strategy Call</Button>
              <Button href="/pricing" variant="ghost">See Pricing</Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
