import Link from "next/link";
import Container from "@/components/ui/Container";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-neutral-50">
      <Container className="py-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-md">
            <p className="text-lg font-semibold tracking-tight">{site.name}</p>
            <p className="mt-2 text-sm text-[var(--muted)]">{site.tagline}</p>
            <p className="mt-3 text-sm text-[var(--muted)]">
              Trusted by long-form creators for clear communication, premium edits, and reliable weekly delivery.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-[var(--muted)]">
            <Link href="/book">Book</Link>
            <Link href="/work">Work</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-[var(--border)] bg-white p-6">
          <h3 className="text-xl font-semibold tracking-tight">Ready to start this month?</h3>
          <p className="mt-2 text-sm text-[var(--muted)]">
            Clear offer. Fast onboarding. Weekly clip delivery. Most clients can start within 7 business days.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/book" className="text-sm font-medium underline">
              Book a Strategy Call
            </Link>
            <Link href="/work" className="text-sm font-medium underline">
              See Sample Work
            </Link>
          </div>
        </div>

        <p className="mt-8 text-sm text-[var(--muted)]">Copyright {new Date().getFullYear()} {site.name}. All rights reserved.</p>
      </Container>
    </footer>
  );
}
