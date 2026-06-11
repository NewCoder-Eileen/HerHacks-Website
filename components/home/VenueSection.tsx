import { AnimatedSection } from "@/components/motion/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Section } from "@/components/ui/Section";
import { event } from "@/content/event";

export function VenueSection() {
  return (
    <Section id="venue" className="bg-surface">
      <AnimatedSection>
        <SectionHeading
          eyebrow="Location"
          title="Come Hack With Us"
          subtitle={`${event.venue.name} — ${event.venue.city}`}
          className="mb-12"
        />
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Venue info */}
          <div className="space-y-4">
            <div className="bg-background border border-border rounded-2xl p-6 space-y-3">
              <h3 className="font-display text-xl font-semibold">{event.venue.name}</h3>
              <p className="text-muted-foreground flex items-start gap-2">
                <svg className="shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                {event.venue.address}
              </p>
              <p className="text-muted-foreground flex items-start gap-2">
                <svg className="shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                {event.dates.display}
              </p>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              The event takes place at {event.venue.name} in {event.venue.city}. The venue is
              accessible by public transit and has dedicated parking available. A full logistics
              guide will be sent out to registered participants one week before the event.
            </p>
          </div>

          {/* Map placeholder */}
          <div
            className="placeholder-box rounded-2xl w-full aspect-[4/3]"
            role="img"
            aria-label="Google Maps embed placeholder — will show venue location"
          >
            {event.venue.mapEmbedUrl ? (
              <iframe
                src={event.venue.mapEmbedUrl}
                width="100%"
                height="100%"
                className="border-0 rounded-2xl"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Map showing ${event.venue.name}`}
              />
            ) : (
              <div className="flex flex-col items-center gap-2">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-placeholder-border">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>GOOGLE MAP</span>
              </div>
            )}
          </div>
        </div>
      </AnimatedSection>
    </Section>
  );
}
