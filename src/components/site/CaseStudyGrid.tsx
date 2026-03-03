import Image from "next/image";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { caseStudies } from "@/lib/content";

export default function CaseStudyGrid() {
  return (
    <Section>
      <Container>
        <h2 className="text-3xl font-semibold tracking-tight">Selected work</h2>
        <p className="mt-2 max-w-2xl text-[var(--muted)]">
          Each engagement uses the same core system, adapted to brand voice and audience.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {caseStudies.map((study) => (
            <Card key={study.title} className="p-0">
              <div className="relative h-44 w-full overflow-hidden rounded-t-3xl border-b border-[var(--border)] bg-neutral-100">
                <Image
                  src={study.thumbnail}
                  alt={study.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <p className="text-xs uppercase tracking-wide text-[var(--muted)]">{study.niche}</p>
                <h3 className="mt-2 text-lg font-semibold">{study.title}</h3>
                <div className="mt-4 space-y-2 text-sm text-[var(--muted)]">
                  <p>
                    <span className="font-medium text-[var(--fg)]">Problem:</span> {study.problem}
                  </p>
                  <p>
                    <span className="font-medium text-[var(--fg)]">Approach:</span> {study.approach}
                  </p>
                  <p>
                    <span className="font-medium text-[var(--fg)]">Outcomes:</span> {study.outcomes}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
