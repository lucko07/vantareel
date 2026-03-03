import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { homeContent } from "@/lib/content";

export default function Features() {
  return (
    <Section>
      <Container>
        <h2 className="text-3xl font-semibold tracking-tight">Built for consistent short-form quality</h2>
        <p className="mt-2 max-w-2xl text-[var(--muted)]">
          Every batch follows a repeatable system so your team gets predictable, premium output.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {homeContent.features.map((feature) => (
            <Card key={feature.title}>
              <h3 className="text-lg font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm text-[var(--muted)]">{feature.body}</p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
