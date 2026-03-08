export type PricingTier = {
  name: string;
  monthlyPrice: string;
  clipCount: string;
  featured?: boolean;
  idealFor: string;
  includes: string[];
};

export const pricingTiers: PricingTier[] = [
  {
    name: "Starter",
    monthlyPrice: "$750/mo",
    clipCount: "12 clips per month",
    idealFor: "Best for creators testing a consistent short-form cadence.",
    includes: [
      "12 short-form clips",
      "Hook-first editing",
      "Branded captions",
      "9:16 exports for TikTok, Reels, and Shorts",
      "One revision round per batch",
      "Organized delivery folders",
    ],
  },
  {
    name: "Growth",
    monthlyPrice: "$1,500/mo",
    clipCount: "30 clips per month",
    featured: true,
    idealFor: "Best for businesses using short-form content as a core growth channel.",
    includes: [
      "30 short-form clips",
      "Advanced hook/title options",
      "Caption and brand style consistency",
      "9:16 + optional 1:1 exports",
      "Priority weekly delivery",
      "One revision round per batch",
    ],
  },
  {
    name: "Authority",
    monthlyPrice: "$3,000/mo",
    clipCount: "60 clips per month",
    idealFor: "Best for high-volume teams building daily short-form presence.",
    includes: [
      "60 short-form clips",
      "Priority edit queue",
      "9:16 + 1:1 + 16:9 format support",
      "Hook title options for testing",
      "Expanded content packaging support",
      "One revision round per batch",
    ],
  },
];

export const pricingDetails = {
  whatCountsAsClip:
    "One clip is one finished short-form video delivered in one approved angle. Alternate hooks or versioning count as additional clips.",
  revisionPolicy:
    "Every weekly batch includes one revision round covering copy, caption timing, pacing, and visual adjustments.",
  addOns: [
    "Extra clip volume",
    "Additional revision rounds",
    "Long-form episode trailer edits",
    "Custom thumbnail packages",
    "Upload scheduling support",
  ],
};
