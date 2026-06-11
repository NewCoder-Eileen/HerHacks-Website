import Link from "next/link";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/motion/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Section } from "@/components/ui/Section";
import { PlaceholderLogo } from "@/components/ui/MascotSlot";
import { sponsors, partners, tierLabels, type SponsorTier } from "@/content/sponsors";
import { event } from "@/content/event";

const tierOrder: SponsorTier[] = ["title", "platinum", "gold", "silver", "bronze"];

const logoSizeByTier: Record<SponsorTier, string> = {
  title: "col-span-full max-w-sm mx-auto",
  platinum: "col-span-1 sm:col-span-1",
  gold: "col-span-1",
  silver: "col-span-1",
  bronze: "col-span-1",
};

const gridColsByTier: Record<SponsorTier, string> = {
  title: "grid-cols-1",
  platinum: "grid-cols-1 sm:grid-cols-2",
  gold: "grid-cols-2 sm:grid-cols-3",
  silver: "grid-cols-2 sm:grid-cols-4",
  bronze: "grid-cols-3 sm:grid-cols-5",
};

export function SponsorsSection() {
  const titleSponsors = sponsors.filter((s) => s.tier === "title");

  return (
    <Section id="sponsors" className="bg-muted">
      <AnimatedSection>
        <SectionHeading
          eyebrow="Sponsors"
          title="Powered By Our Partners"
          subtitle="These organizations make EVENTNAME possible. We're grateful for their continued support of student innovation."
          className="mb-16"
        />
      </AnimatedSection>

      {/* Title sponsor(s) with blurb */}
      {titleSponsors.length > 0 && (
        <AnimatedSection delay={0.05} className="mb-16">
          {titleSponsors.map((s) => (
            <div
              key={s.id}
              className="bg-background border border-border rounded-2xl p-8 flex flex-col sm:flex-row items-center gap-8 max-w-3xl mx-auto"
            >
              <PlaceholderLogo label="PRESENTING PARTNER LOGO" className="w-48 shrink-0" />
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-1">
                  {tierLabels[s.tier]}
                </p>
                <h3 className="font-display text-xl font-semibold mb-3">{s.name}</h3>
                {s.blurb && (
                  <p className="text-muted-foreground leading-relaxed">{s.blurb}</p>
                )}
              </div>
            </div>
          ))}
        </AnimatedSection>
      )}

      {/* Tiered grids */}
      {tierOrder
        .filter((tier) => tier !== "title")
        .map((tier) => {
          const tieredSponsors = sponsors.filter((s) => s.tier === tier);
          if (tieredSponsors.length === 0) return null;
          return (
            <AnimatedSection key={tier} delay={0.08} className="mb-12">
              <h3 className="text-center text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-6">
                {tierLabels[tier]}
              </h3>
              <StaggerContainer
                className={`grid ${gridColsByTier[tier]} gap-4 max-w-4xl mx-auto`}
              >
                {tieredSponsors.map((s) => (
                  <StaggerItem key={s.id} className={logoSizeByTier[tier]}>
                    <PlaceholderLogo label={s.name} />
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </AnimatedSection>
          );
        })}

      {/* Partners row */}
      {partners.length > 0 && (
        <AnimatedSection delay={0.1} className="mt-16 pt-12 border-t border-border">
          <h3 className="text-center text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-8">
            Community Partners
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {partners.map((p) => (
              <PlaceholderLogo key={p.id} label={p.name} className="w-32" />
            ))}
          </div>
        </AnimatedSection>
      )}

      {/* Become a sponsor CTA */}
      <AnimatedSection delay={0.12} className="mt-16 text-center">
        <p className="text-muted-foreground mb-4 text-lg">
          Interested in sponsoring {event.name}?
        </p>
        <Link
          href={`mailto:${event.email.sponsorship}`}
          className="inline-flex items-center gap-2 text-foreground font-semibold underline underline-offset-4 hover:text-accent transition-colors"
        >
          Get in Touch →
        </Link>
      </AnimatedSection>
    </Section>
  );
}
