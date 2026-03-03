import { cn } from "@/lib/utils";

type Tone = "default" | "muted" | "dark";

const toneClasses: Record<Tone, string> = {
  default: "bg-[var(--bg)] text-[var(--fg)]",
  muted: "bg-neutral-50 text-[var(--fg)]",
  dark: "bg-neutral-950 text-white",
};

export default function Section({
  tone = "default",
  className,
  children,
}: {
  tone?: Tone;
  className?: string;
  children: React.ReactNode;
}) {
  return <section className={cn("py-14 md:py-20", toneClasses[tone], className)}>{children}</section>;
}
