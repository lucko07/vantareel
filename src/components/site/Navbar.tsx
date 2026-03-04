"use client";

import { useState } from "react";
import Link from "next/link";
import { navLinks } from "@/lib/content";
import { site } from "@/lib/site";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-white/85 backdrop-blur">
      <Container className="flex items-center justify-between py-3">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          {site.name}
        </Link>

        <nav className="hidden items-center gap-6 text-sm md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-[var(--muted)] transition-colors hover:text-[var(--fg)]">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href="/book" size="sm">
            {site.primaryCta}
          </Button>
        </div>

        <button
          type="button"
          className="rounded-2xl border border-[var(--border)] px-3 py-2 text-sm md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          Menu
        </button>
      </Container>

      <div
        id="mobile-nav"
        className={cn(
          "overflow-hidden border-t border-[var(--border)] bg-white transition-[max-height] duration-200 md:hidden",
          open ? "max-h-80" : "max-h-0"
        )}
      >
        <Container className="flex flex-col gap-3 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-[var(--muted)]"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Button href="/book" size="sm">
            {site.primaryCta}
          </Button>
        </Container>
      </div>
    </header>
  );
}
