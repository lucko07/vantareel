import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { homeContent } from "@/lib/content";

export default function Features() {
  return (
    <Section>
      <Container>
        <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">Built for consistent short-form quality</h2>
        <p className="mt-4 max-w-2xl text-lg text-[var(--muted)]">
          Every batch follows a repeatable system so your team gets predictable, premium output.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {homeContent.features.map((feature) => (
            <Card
              key={feature.title}
              className="bg-[linear-gradient(var(--card),var(--card))_padding-box,linear-gradient(140deg,rgba(0,212,255,0.26),rgba(124,58,237,0.2))_border-box]"
            >
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="mt-3 text-base text-[var(--muted)]">{feature.body}</p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
