import Link from "next/link";
import { AnimatedSection } from "@/components/motion/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";
import { Section } from "@/components/ui/Section";
import { faqItems } from "@/content/faq";
import { event } from "@/content/event";

export function FaqSection() {
  return (
    <Section id="faq" className="bg-surface">
      <div className="max-w-3xl mx-auto">
        <AnimatedSection>
          <SectionHeading
            eyebrow="FAQ"
            title="Questions? Answers."
            className="mb-12"
          />
        </AnimatedSection>

        <AnimatedSection delay={0.08}>
          <Accordion items={faqItems} />
        </AnimatedSection>

        <AnimatedSection delay={0.12} className="mt-12 text-center">
          <p className="text-muted-foreground">
            Still have a question?{" "}
            <Link
              href={`mailto:${event.email.contact}`}
              className="text-foreground font-medium underline underline-offset-4 hover:text-accent transition-colors"
            >
              Email us at {event.email.contact}
            </Link>
          </p>
        </AnimatedSection>
      </div>
    </Section>
  );
}
