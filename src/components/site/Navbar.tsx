"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { navLinks } from "@/content";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-white/95 backdrop-blur">
      <Container className="flex items-center justify-between py-3">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          {site.name}
        </Link>

        <nav className="hidden items-center gap-5 text-sm lg:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-[var(--muted)] transition-colors hover:text-[var(--fg)]">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="/book" size="sm">
            Book a Strategy Call
          </Button>
        </div>

        <button
          type="button"
          className="rounded-2xl border border-[var(--border)] px-3 py-2 text-sm lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          Menu
        </button>
      </Container>

      <div
        id="mobile-nav"
        className={cn(
          "overflow-hidden border-t border-[var(--border)] bg-white transition-[max-height] duration-200 lg:hidden",
          open ? "max-h-[480px]" : "max-h-0"
        )}
      >
        <Container className="flex flex-col gap-3 py-4">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm text-[var(--muted)]" onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
          <Button href="/book" size="sm">
            Book a Strategy Call
          </Button>
        </Container>
      </div>
    </header>
  );
}
