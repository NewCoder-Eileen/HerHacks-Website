import type { Metadata } from "next";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/motion/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PlaceholderLogo } from "@/components/ui/MascotSlot";
import { Button } from "@/components/ui/Button";
import {
  sponsors,
  tierBenefits,
  tierLabels,
  type SponsorTier,
} from "@/content/sponsors";
import { event } from "@/content/event";

export const metadata: Metadata = {
  title: "Sponsors",
  description: `Support ${event.name} and connect with the next generation of innovators.`,
};

type PaidTier = Exclude<SponsorTier, "title">;

const tiers: Array<{ id: PaidTier; price: string; color: string }> = [
  { id: "bronze", price: "$500+", color: "border-border" },
  { id: "silver", price: "$1,500+", color: "border-border-strong" },
  { id: "gold", price: "$3,000+", color: "border-accent" },
  { id: "platinum", price: "$6,000+", color: "border-primary" },
];

export default function SponsorsPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <div className="bg-muted border-b border-border section-padding-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              eyebrow="Partner With Us"
              title="Sponsor EVENTNAME"
              subtitle="Connect your brand with hundreds of motivated students, emerging developers, and future professionals in a focused, energetic environment."
            />
          </AnimatedSection>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">

        {/* Tier benefit comparison */}
        <section aria-labelledby="tier-heading">
          <AnimatedSection>
            <h2 id="tier-heading" className="font-display text-3xl font-semibold text-foreground mb-10 text-center">
              Sponsorship Tiers
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.08}>
            <div className="overflow-x-auto -mx-4 sm:mx-0">
              <table className="min-w-full border-collapse" aria-label="Sponsorship tier benefits">
                <thead>
                  <tr>
                    <th className="text-left px-4 py-3 text-sm font-semibold text-foreground border-b border-border w-1/2">
                      Benefit
                    </th>
                    {tiers.map((tier) => (
                      <th key={tier.id} className="px-4 py-3 text-center border-b border-border">
                        <div className={`inline-block border-t-4 ${tier.color} pt-2 px-3`}>
                          <p className="text-sm font-bold text-foreground">{tierLabels[tier.id]}</p>
                          <p className="text-xs text-muted-foreground">{tier.price}</p>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {tierBenefits.map((benefit, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-muted/50" : "bg-background"}>
                      <td className="px-4 py-3 text-sm text-foreground">{benefit.feature}</td>
                      {tiers.map((tier) => {
                        const val = benefit[tier.id];
                        return (
                          <td key={tier.id} className="px-4 py-3 text-center">
                            {typeof val === "boolean" ? (
                              val ? (
                                <span className="text-foreground" aria-label="Included">
                                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="inline-block">
                                    <polyline points="20 6 9 17 4 12" />
                                  </svg>
                                </span>
                              ) : (
                                <span className="text-muted-foreground" aria-label="Not included">—</span>
                              )
                            ) : (
                              <span className="text-xs font-medium text-foreground">{val}</span>
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimatedSection>
        </section>

        {/* Current sponsors grid */}
        <section aria-labelledby="sponsors-heading">
          <AnimatedSection>
            <h2 id="sponsors-heading" className="font-display text-3xl font-semibold text-foreground mb-10 text-center">
              {event.edition} Sponsors
            </h2>
          </AnimatedSection>

          {(["title", "platinum", "gold", "silver", "bronze"] as SponsorTier[]).map((tier) => {
            const tieredSponsors = sponsors.filter((s) => s.tier === tier);
            if (tieredSponsors.length === 0) return null;

            return (
              <AnimatedSection key={tier} delay={0.05} className="mb-12">
                <h3 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-5 text-center">
                  {tierLabels[tier]}
                </h3>
                <StaggerContainer className="flex flex-wrap justify-center gap-6">
                  {tieredSponsors.map((s) => (
                    <StaggerItem key={s.id}>
                      <div className={tier === "title" ? "w-64" : tier === "platinum" ? "w-48" : tier === "gold" ? "w-40" : "w-32"}>
                        <PlaceholderLogo label={s.name} />
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </AnimatedSection>
            );
          })}
        </section>

        {/* CTA */}
        <section className="bg-muted rounded-3xl p-10 sm:p-14 text-center">
          <AnimatedSection>
            <h2 className="font-display text-3xl font-semibold text-foreground mb-4">
              Become a Sponsor
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-xl mx-auto">
              Want to reach the next generation of tech talent? Reach out and let&apos;s talk about how
              your organization can make an impact at {event.name}.
            </p>
            <Button href={`mailto:${event.email.sponsorship}`} size="lg" external>
              Get the Sponsorship Package →
            </Button>
          </AnimatedSection>
        </section>
      </div>
    </div>
  );
}
