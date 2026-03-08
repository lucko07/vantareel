import type { Metadata } from "next";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Client Onboarding",
  description:
    "VantaReel onboarding form for new clients to submit brand details, goals, source content, and workflow preferences.",
  openGraph: {
    title: "Client Onboarding | VantaReel",
    description: "Complete onboarding to start your weekly short-form production workflow.",
    images: ["/og-image.jpg"],
  },
};

const fields = [
  { id: "name", label: "Full Name", type: "text", required: true },
  { id: "email", label: "Email", type: "email", required: true },
  { id: "company", label: "Company or Brand", type: "text", required: true },
  { id: "website", label: "Website or Social Link", type: "url", required: true },
  { id: "niche", label: "Niche", type: "text", required: true },
  { id: "contentType", label: "Long-Form Content Type", type: "text", required: true },
  { id: "videosPerMonth", label: "Number of Long Videos per Month", type: "number", required: true },
  { id: "platforms", label: "Current Platforms", type: "text", required: true },
  { id: "goals", label: "Content Goals", type: "textarea", required: true },
  { id: "turnaround", label: "Preferred Turnaround", type: "text", required: true },
  { id: "uploadLink", label: "Upload Link or Drive Link", type: "url", required: true },
  { id: "notes", label: "Additional Notes", type: "textarea", required: false },
] as const;

export default function OnboardingPage() {
  return (
    <Section>
      <Container className="max-w-5xl">
        <Badge>Onboarding</Badge>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">Client Onboarding Form</h1>
        <p className="mt-3 max-w-3xl text-[var(--muted)]">
          Submission-ready structure for onboarding. Connect this form action to Firebase Functions, Formspree, or your preferred form backend.
        </p>

        <form className="mt-8 grid gap-5 rounded-3xl border border-[var(--border)] bg-white p-6 md:grid-cols-2 md:p-8">
          {fields.map((field) => (
            <label key={field.id} className={field.type === "textarea" ? "md:col-span-2" : ""}>
              <span className="mb-2 block text-sm font-medium">{field.label}</span>
              {field.type === "textarea" ? (
                <textarea
                  name={field.id}
                  required={field.required}
                  rows={4}
                  className="w-full rounded-xl border border-[var(--border)] px-3 py-2 text-sm outline-none focus:border-[var(--accent)]"
                />
              ) : (
                <input
                  name={field.id}
                  type={field.type}
                  required={field.required}
                  className="w-full rounded-xl border border-[var(--border)] px-3 py-2 text-sm outline-none focus:border-[var(--accent)]"
                />
              )}
            </label>
          ))}

          <div className="md:col-span-2 flex flex-wrap gap-3">
            <button
              type="submit"
              className="inline-flex rounded-2xl bg-[var(--accent)] px-5 py-3 text-sm font-medium text-white transition hover:bg-[var(--accent-dark)]"
            >
              Submit Onboarding Details
            </button>
            <Button href="/book" variant="ghost">
              Book a Strategy Call
            </Button>
          </div>
        </form>
      </Container>
    </Section>
  );
}
