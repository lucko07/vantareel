import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-[var(--accent)] text-neutral-950 shadow-[0_10px_30px_rgba(0,212,255,0.30)] hover:bg-[var(--accent)]/90 hover:shadow-[0_14px_36px_rgba(0,212,255,0.40)]",
  secondary: "bg-neutral-950 text-white shadow-sm hover:bg-neutral-800 hover:shadow-lg",
  ghost: "border border-[var(--border)] bg-white text-[var(--fg)] hover:bg-neutral-50 hover:shadow-md",
};

const sizeClasses: Record<Size, string> = {
  sm: "rounded-2xl px-3 py-2 text-sm",
  md: "rounded-2xl px-4 py-2.5 text-sm",
  lg: "rounded-2xl px-5 py-3 text-base",
};

export default function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center font-medium transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
    >
      {children}
    </Link>
  );
}
