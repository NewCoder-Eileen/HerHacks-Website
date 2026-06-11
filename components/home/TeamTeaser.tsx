import Link from "next/link";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/motion/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { teamMembers } from "@/content/team";

const featuredTeam = teamMembers.filter((m) => m.team === "Co-Directors");

export function TeamTeaser() {
  return (
    <Section id="team-section" className="bg-background">
      <AnimatedSection>
        <SectionHeading
          eyebrow="The Team"
          title="Student-Organized, Community-Driven"
          subtitle="EVENTNAME is run entirely by a dedicated team of student volunteers who believe in the power of learning by doing."
          className="mb-14"
        />
      </AnimatedSection>

      <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-10">
        {teamMembers.slice(0, 8).map((member) => (
          <StaggerItem key={member.id}>
            <div className="flex flex-col items-center gap-3 text-center group">
              {/* Headshot placeholder */}
              <div
                className="placeholder-circle w-20 h-20 group-hover:-translate-y-1 transition-transform duration-200"
                role="img"
                aria-label={`Headshot placeholder for ${member.name}`}
              >
                <span className="text-[9px]">PHOTO</span>
              </div>
              <div>
                <p className="font-semibold text-sm text-foreground">{member.name}</p>
                <p className="text-xs text-muted-foreground">{member.role}</p>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>

      <AnimatedSection className="text-center" delay={0.15}>
        <Button href="/team" variant="outline" size="md">
          Meet the Full Team →
        </Button>
      </AnimatedSection>
    </Section>
  );
}
