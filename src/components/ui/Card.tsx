import { cn } from "@/lib/utils";

export default function Card({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-transparent bg-[linear-gradient(var(--card),var(--card))_padding-box,linear-gradient(140deg,rgba(0,212,255,0.22),rgba(124,58,237,0.18))_border-box] p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",
        className
      )}
    >
      {children}
    </div>
  );
}
