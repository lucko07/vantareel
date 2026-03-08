import type { Metadata } from "next";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Contractor Guidelines",
  description: "Internal expectations for VantaReel editors covering turnaround, communication, and quality control.",
};

export default function ContractorPage() {
  return (
    <Section>
      <Container className="max-w-4xl">
        <Badge>Internal</Badge>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight">Contractor Guidelines</h1>
        <p className="mt-3 text-[var(--muted)]">Lightweight internal reference for editor standards. Full SOPs are stored in the `docs/` folder.</p>

        <div className="mt-8 space-y-4">
          <Card className="border border-[var(--border)] bg-white p-6 shadow-none hover:translate-y-0">
            <h2 className="text-lg font-semibold">Expected output</h2>
            <p className="mt-2 text-sm text-[var(--muted)]">Editors deliver polished short-form clips matching VantaReel caption, pacing, and brand quality standards.</p>
          </Card>
          <Card className="border border-[var(--border)] bg-white p-6 shadow-none hover:translate-y-0">
            <h2 className="text-lg font-semibold">Turnaround and communication</h2>
            <p className="mt-2 text-sm text-[var(--muted)]">Respect weekly deadlines, flag blockers early, and submit concise revision notes with each draft handoff.</p>
          </Card>
          <Card className="border border-[var(--border)] bg-white p-6 shadow-none hover:translate-y-0">
            <h2 className="text-lg font-semibold">Quality control and revisions</h2>
            <p className="mt-2 text-sm text-[var(--muted)]">All clips must pass the QA checklist before handoff. One revision round is standard unless project scope states otherwise.</p>
          </Card>
        </div>
      </Container>
    </Section>
  );
}
