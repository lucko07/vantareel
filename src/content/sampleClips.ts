export type SpecSampleClip = {
  id: string;
  title: string;
  label: string;
  niche: string;
  sourceType: string;
  summary: string;
  clipAngle: string;
  deliverables: string[];
  platforms: string[];
  thumbnailText: string;
  hookLine: string;
  status: string;
  notes: string;
  cta: string;
  videoPreview?: string;
  thumbnail?: string;
};

// Replacement notes:
// - Replace `title` with final client-facing clip title.
// - Replace `thumbnailText` with real thumbnail image text or remove when image is available.
// - Add real MP4 or embed link fields when assets are ready.
// - Optional media fields:
//   - `videoPreview`: `/portfolio/clips/your-clip.mp4`
//   - `thumbnail`: `/portfolio/thumbnails/your-thumb.jpg`
// - Replace `summary`, `clipAngle`, and `notes` with real before/after context.
// - Add real metrics only when verified and approved for publication.
export const specSampleClips: SpecSampleClip[] = [
  {
    id: "business-podcast-repurposing",
    title: "Business Podcast Repurposing",
    label: "Spec Sample",
    niche: "Business Podcast",
    sourceType: "Podcast Episode",
    summary:
      "Example transformation of a long-form business conversation into short-form clips built for attention and retention.",
    clipAngle:
      "Pulled the strongest insight moment, tightened pacing, added captions, and formatted for short-form distribution.",
    deliverables: ["3 vertical clips", "Hook rewrite", "Burned-in captions", "Ready-to-post export"],
    platforms: ["TikTok", "Instagram Reels", "YouTube Shorts"],
    thumbnailText: "Business Podcast Clip",
    hookLine: "The fastest way to waste good content is to publish it once.",
    status: "Sample Transformation",
    notes: "Replace with real before/after podcast clip later.",
    cta: "Book a Strategy Call",
    videoPreview: "/portfolio/clips/business-podcast.mp4",
    thumbnail: "/portfolio/thumbnails/business-podcast-thumb.jpg",
  },
  {
    id: "coach-consultant-talking-head",
    title: "Coach / Consultant Talking Head",
    label: "Spec Sample",
    niche: "Coaching / Consulting",
    sourceType: "Talking Head Video",
    summary:
      "Example short-form edit showing how coach content can be repackaged into a sharper, captioned clip for social growth.",
    clipAngle:
      "Reframed the core lesson into a stronger hook, shortened pauses, emphasized the most valuable insight, and designed for mobile viewing.",
    deliverables: ["3 vertical clips", "Hook-first opening", "Captions", "Clean brand-ready layout"],
    platforms: ["TikTok", "Instagram Reels", "YouTube Shorts"],
    thumbnailText: "Coach Content Clip",
    hookLine: "Most experts do not need more content. They need better repurposing.",
    status: "Sample Transformation",
    notes: "Replace with real coaching clip later.",
    cta: "See Pricing",
    videoPreview: "/portfolio/clips/coach-consultant.mp4",
    thumbnail: "/portfolio/thumbnails/coach-consultant-thumb.jpg",
  },
  {
    id: "webinar-education-clip-breakdown",
    title: "Webinar / Education Clip Breakdown",
    label: "Spec Sample",
    niche: "Education / Webinar",
    sourceType: "Webinar Recording",
    summary:
      "Example of turning educational long-form content into short-form clips that highlight one clear takeaway at a time.",
    clipAngle:
      "Extracted a concise teaching moment, simplified the framing, and packaged it into a short-form educational clip.",
    deliverables: ["3 vertical clips", "Clean subtitles", "Highlighted teaching point", "Multi-platform export"],
    platforms: ["TikTok", "Instagram Reels", "YouTube Shorts"],
    thumbnailText: "Webinar Clip",
    hookLine: "If your webinar has value, it should not disappear after one upload.",
    status: "Sample Transformation",
    notes: "Replace with real webinar clip later.",
    cta: "Get a Free Content Audit",
    videoPreview: "/portfolio/clips/webinar-education.mp4",
    thumbnail: "/portfolio/thumbnails/webinar-education-thumb.jpg",
  },
];
