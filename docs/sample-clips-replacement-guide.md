# Sample Clips Replacement Guide

## Where the sample clip data lives
- `src/content/sampleClips.ts`
- Exported through `src/content/index.ts` as `specSampleClips`

## Where the preview components live
- `src/components/site/VerticalClipMock.tsx`
- `src/components/site/SampleClipCard.tsx`
- Rendered on `src/app/work/page.tsx`

## How to replace a spec sample with a real client clip
1. Open `src/content/sampleClips.ts`.
2. Find the sample entry by `id`.
3. Add media fields on the sample:
- `videoPreview` (example: `/portfolio/clips/client-clip-1.mp4`)
- `thumbnail` (example: `/portfolio/thumbnails/client-thumb-1.jpg`)
4. Replace text fields:
- `title`
- `thumbnailText`
- `summary`
- `clipAngle`
- `hookLine`
- `notes`
5. Keep `label` and `status` honest. If it becomes real published work, update labels accordingly.
6. Add real media assets in `public/portfolio`.

## Preview media priority (already implemented)
The preview component follows this order:
1. `videoPreview` renders muted autoplay loop video.
2. If no video exists, `thumbnail` image is rendered.
3. If neither exists, a styled gradient fallback is rendered.

This means you can launch immediately with gradients, then add thumbnails, then upgrade to real video previews.

## Recommended assets to gather before replacing
- Thumbnail image
- MP4 file or embed link
- Clip title
- One-line result or use case
- Before/after description

## Suggested file structure for real assets
```text
public/
  portfolio/
    clips/
      client-clip-1.mp4
      client-clip-2.mp4
      client-clip-3.mp4
    thumbnails/
      client-thumb-1.jpg
      client-thumb-2.jpg
      client-thumb-3.jpg
```

## Notes
- Do not publish unverified metrics.
- Do not imply results or client approval unless documented.
- Keep project naming consistent so future swaps are fast.
