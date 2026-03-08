import Image from "next/image";
import { cn } from "@/lib/utils";

type Theme = "podcast" | "coach" | "webinar";

const themeClasses: Record<Theme, string> = {
  podcast:
    "bg-[radial-gradient(circle_at_20%_10%,rgba(56,189,248,0.25),transparent_35%),linear-gradient(150deg,#0f172a_0%,#1e293b_45%,#0b1120_100%)]",
  coach:
    "bg-[radial-gradient(circle_at_85%_15%,rgba(245,158,11,0.28),transparent_30%),linear-gradient(150deg,#0a0a0a_0%,#111827_55%,#1f2937_100%)]",
  webinar:
    "bg-[radial-gradient(circle_at_22%_12%,rgba(129,140,248,0.28),transparent_35%),linear-gradient(150deg,#1e1b4b_0%,#312e81_52%,#4c1d95_100%)]",
};

export default function VerticalClipMock({
  niche,
  thumbnailText,
  hookLine,
  theme,
  videoPreview,
  thumbnail,
}: {
  niche: string;
  thumbnailText: string;
  hookLine: string;
  theme: Theme;
  videoPreview?: string;
  thumbnail?: string;
}) {
  return (
    <div
      className={cn(
        "group relative aspect-[9/16] w-full overflow-hidden rounded-2xl border border-white/15 text-white transition-transform duration-300 hover:scale-[1.015]",
        themeClasses[theme]
      )}
    >
      {videoPreview ? (
        <video
          src={videoPreview}
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
      ) : thumbnail ? (
        <Image src={thumbnail} alt={thumbnailText} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
      ) : null}

      <div className="absolute inset-0 bg-black/20" />

      <div className="absolute left-4 top-4 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-[10px] font-medium uppercase tracking-wide">
        {niche}
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/40 bg-white/15 shadow-lg backdrop-blur-sm">
          <span className="text-[11px] font-medium uppercase">Play</span>
        </div>
      </div>

      <div className="absolute bottom-20 left-4 right-4 rounded-lg border border-white/15 bg-black/30 px-3 py-1.5 text-[10px] text-white/80">
        {thumbnailText}
      </div>

      <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/20 bg-black/35 p-3 backdrop-blur-sm">
        <p className="text-[11px] font-semibold uppercase tracking-wide text-white/75">{thumbnailText}</p>
        <p className="mt-1 text-xs leading-relaxed text-white/95">{hookLine}</p>
      </div>
    </div>
  );
}
