import type { Metadata } from "next";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/motion/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { teamMembers, subTeams } from "@/content/team";
import { event } from "@/content/event";

export const metadata: Metadata = {
  title: "Team",
  description: `Meet the student volunteers behind ${event.name}.`,
};

export default function TeamPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Page header */}
      <div className="bg-muted border-b border-border section-padding-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              eyebrow="The Organizers"
              title="Meet the Team"
              subtitle={`${event.name} is built by a passionate group of student volunteers who give their time to create an unforgettable event.`}
            />
          </AnimatedSection>
        </div>
      </div>

      {/* Team grid by sub-team */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        {subTeams.map((team) => {
          const members = teamMembers.filter((m) => m.team === team);
          if (members.length === 0) return null;
          return (
            <section key={team} aria-labelledby={`team-${team}`}>
              <AnimatedSection>
                <h2
                  id={`team-${team}`}
                  className="font-display text-2xl font-semibold text-foreground mb-8 pb-4 border-b border-border"
                >
                  {team}
                </h2>
              </AnimatedSection>

              <StaggerContainer
                className={`grid gap-8 ${
                  team === "Co-Directors"
                    ? "grid-cols-2 max-w-xs mx-auto sm:max-w-sm"
                    : "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
                }`}
              >
                {members.map((member) => (
                  <StaggerItem key={member.id}>
                    <article className="flex flex-col items-center text-center gap-3 group">
                      {/* Headshot */}
                      <div
                        className={`placeholder-circle transition-all duration-200 group-hover:-translate-y-1 group-hover:shadow-md ${
                          team === "Co-Directors" ? "w-28 h-28" : "w-20 h-20"
                        }`}
                        role="img"
                        aria-label={`Headshot placeholder for ${member.name}`}
                      >
                        <span className="text-[9px]">PHOTO</span>
                      </div>

                      {/* Info */}
                      <div>
                        <p className="font-semibold text-foreground text-sm leading-tight">
                          {member.name}
                        </p>
                        {member.pronouns && (
                          <p className="text-xs text-muted-foreground mb-0.5">{member.pronouns}</p>
                        )}
                        <p className="text-xs text-muted-foreground">{member.role}</p>
                      </div>
                    </article>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </section>
          );
        })}
      </div>
    </div>
  );
}
