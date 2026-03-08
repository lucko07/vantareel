import Link from "next/link";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import VerticalClipMock from "@/components/site/VerticalClipMock";
import { specSampleClips } from "@/content";

const themeById: Record<string, "podcast" | "coach" | "webinar"> = {
  "business-podcast-repurposing": "podcast",
  "coach-consultant-talking-head": "coach",
  "webinar-education-clip-breakdown": "webinar",
};

export default function CaseStudyGrid({
  limit,
  preview = false,
}: {
  limit?: number;
  preview?: boolean;
}) {
  const items = typeof limit === "number" ? specSampleClips.slice(0, limit) : specSampleClips;

  return (
    <Section className="py-16 md:py-20">
      <Container>
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
          {preview ? "Spec Sample Clips" : "Sample transformations"}
        </h2>
        <p className="mt-3 max-w-3xl text-[var(--muted)]">
          These demonstration samples show how VantaReel repackages long-form content into short-form assets built for weekly growth.
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {items.map((clip) => (
            <Link key={clip.id} href={preview ? `/work#${clip.id}` : `/work#${clip.id}`} className="block">
              <Card className="border border-[var(--border)] bg-white p-4 shadow-none hover:translate-y-0">
                <VerticalClipMock
                  niche={clip.niche}
                  thumbnailText={clip.thumbnailText}
                  hookLine={clip.hookLine}
                  theme={themeById[clip.id]}
                  videoPreview={clip.videoPreview}
                  thumbnail={clip.thumbnail}
                />
                <div className="mt-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">{clip.label}</p>
                  <h3 className="mt-2 text-lg font-semibold tracking-tight">{clip.title}</h3>
                  <p className="mt-2 text-sm text-[var(--muted)]">{clip.summary}</p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
        {preview ? (
          <div className="mt-8">
            <Button href="/work" variant="ghost">
              See Sample Work
            </Button>
          </div>
        ) : null}
      </Container>
    </Section>
  );
}
