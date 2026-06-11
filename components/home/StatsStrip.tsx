import { CountUp } from "@/components/motion/CountUp";
import { AnimatedSection } from "@/components/motion/AnimatedSection";
import { stats } from "@/content/stats";

export function StatsStrip() {
  return (
    <section className="border-y border-border bg-muted section-padding-sm" aria-label="Event statistics">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <dl className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <dt className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-2">
                  {stat.label}
                </dt>
                <dd className="font-display text-5xl md:text-6xl font-semibold text-foreground">
                  <CountUp target={stat.value} suffix={stat.suffix} duration={1600} />
                </dd>
              </div>
            ))}
          </dl>
        </AnimatedSection>
      </div>
    </section>
  );
}
