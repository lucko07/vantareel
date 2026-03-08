import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import VerticalClipMock from "@/components/site/VerticalClipMock";
import type { SpecSampleClip } from "@/content/sampleClips";

const themeById: Record<string, "podcast" | "coach" | "webinar"> = {
  "business-podcast-repurposing": "podcast",
  "coach-consultant-talking-head": "coach",
  "webinar-education-clip-breakdown": "webinar",
};

const bestForByNiche: Record<string, string> = {
  "Business Podcast": "Podcast hosts and founder-led shows publishing weekly episodes.",
  "Coaching / Consulting": "Coaches and consultants sharing insight-led talking head content.",
  "Education / Webinar": "Educators and experts turning webinars into evergreen short clips.",
};

function ctaHref(cta: string) {
  if (cta === "Book a Strategy Call") return "/book";
  if (cta === "See Pricing") return "/pricing";
  if (cta === "Get a Free Content Audit") return "/audit";
  return "/book";
}

export default function SampleClipCard({ clip }: { clip: SpecSampleClip }) {
  return (
    <Card className="border border-[var(--border)] bg-white p-5 shadow-none hover:translate-y-0">
      <div className="mb-4 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <VerticalClipMock
          niche={clip.niche}
          thumbnailText={clip.thumbnailText}
          hookLine={clip.hookLine}
          theme={themeById[clip.id]}
          videoPreview={clip.videoPreview}
          thumbnail={clip.thumbnail}
        />

        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-[var(--border)] bg-neutral-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-[var(--muted)]">
              {clip.label}
            </span>
            <span className="rounded-full border border-[var(--border)] bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-[var(--muted)]">
              {clip.status}
            </span>
          </div>

          <h3 className="mt-3 text-xl font-semibold tracking-tight">{clip.title}</h3>
          <p className="mt-2 text-sm text-[var(--muted)]">{clip.summary}</p>
          <p className="mt-3 text-sm font-medium">Hook line: &quot;{clip.hookLine}&quot;</p>

          <div className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
            <div>
              <p className="font-medium">Niche</p>
              <p className="text-[var(--muted)]">{clip.niche}</p>
            </div>
            <div>
              <p className="font-medium">Source type</p>
              <p className="text-[var(--muted)]">{clip.sourceType}</p>
            </div>
          </div>

          <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">Platforms</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {clip.platforms.map((platform) => (
              <span key={`${clip.id}-${platform}`} className="rounded-full border border-[var(--border)] px-2.5 py-1 text-xs text-[var(--muted)]">
                {platform}
              </span>
            ))}
          </div>

          <div className="mt-5">
            <Button href={ctaHref(clip.cta)}>{clip.cta}</Button>
          </div>
        </div>
      </div>

      <div className="mb-4 rounded-xl border border-[var(--border)] bg-neutral-50 p-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">What this pack includes</p>
        <ul className="mt-2 grid gap-1.5 text-sm text-[var(--muted)] sm:grid-cols-2">
          {clip.deliverables.map((deliverable) => (
            <li key={`pack-${clip.id}-${deliverable}`}>- {deliverable}</li>
          ))}
        </ul>
      </div>

      <details className="rounded-xl border border-[var(--border)] bg-neutral-50 p-4">
        <summary className="cursor-pointer list-none text-sm font-medium">View sample transformation details</summary>
        <div className="mt-3 space-y-3 text-sm text-[var(--muted)]">
          <p>
            <span className="font-medium text-[var(--fg)]">Edit approach:</span> {clip.clipAngle}
          </p>
          <p>
            <span className="font-medium text-[var(--fg)]">Best for:</span> {bestForByNiche[clip.niche]}
          </p>
          <p>
            <span className="font-medium text-[var(--fg)]">Replacement note:</span> {clip.notes}
          </p>
        </div>
      </details>
    </Card>
  );
}
