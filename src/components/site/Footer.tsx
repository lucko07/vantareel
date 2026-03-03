import Link from "next/link";
import Container from "@/components/ui/Container";
import { navLinks } from "@/lib/content";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)]">
      <Container className="py-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <div className="text-lg font-semibold tracking-tight">{site.name}</div>
            <p className="mt-1 text-sm text-[var(--muted)]">{site.tagline}</p>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-[var(--muted)]">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </div>
        </div>

        <div className="mt-8 text-sm text-[var(--muted)]">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
