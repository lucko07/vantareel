import type { Metadata } from "next";
import Script from "next/script";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book a Call",
  description: "Schedule a quick intro call to map your first month of short-form production.",
  openGraph: {
    title: "Book a Call | VantaReel",
    description: "Schedule a quick intro call to map your first month of short-form production.",
    images: ["/og-image.jpg"],
  },
};

export default function BookPage() {
  return (
    <Section>
      <Container>
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">Book a Strategy Call</h1>
          <p className="mt-4 text-lg text-[var(--muted)]">
            Pick a time that works for you. You'll get a Google Meet link automatically.
          </p>

          <div className="mt-10 rounded-2xl border border-[var(--border)] bg-white p-3 shadow-sm">
            <div
              className="calendly-inline-widget"
              data-url={site.calendlyUrl}
              style={{ minWidth: "320px", height: "780px" }}
            />
          </div>

          <div className="mt-6">
            <a
              href={site.calendlyUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-2xl border border-[var(--border)] px-5 py-3 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:bg-neutral-50 hover:shadow-md"
            >
              Open Calendly in a new tab
            </a>
          </div>
        </div>
      </Container>

      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="afterInteractive" />
    </Section>
  );
}
