"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/motion/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { schedule, eventTypeLabels, eventTypeStyles, type EventType } from "@/content/schedule";
import { event } from "@/content/event";

// Metadata can only be exported from server components; this page uses "use client"
// so the title comes from the root layout default template.

export default function SchedulePage() {
  const [activeDay, setActiveDay] = useState(0);

  return (
    <div className="min-h-screen pt-16">
      {/* Page header */}
      <div className="bg-muted border-b border-border section-padding-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              eyebrow={event.dates.display}
              title="Event Schedule"
              subtitle="Three days of hacking, workshops, activities, and memories. Times are approximate — check back for the final schedule."
            />
          </AnimatedSection>
        </div>
      </div>

      {/* Day tabs */}
      <div className="sticky top-16 z-20 bg-background/90 backdrop-blur border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div role="tablist" aria-label="Schedule days" className="flex gap-1 py-2">
            {schedule.map((day, index) => (
              <button
                key={day.label}
                role="tab"
                aria-selected={activeDay === index}
                aria-controls={`day-panel-${index}`}
                id={`day-tab-${index}`}
                onClick={() => setActiveDay(index)}
                className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-150 ${
                  activeDay === index
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                <span className="hidden sm:inline">{day.date}</span>
                <span className="sm:hidden">{day.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Schedule content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Legend */}
        <AnimatedSection className="flex flex-wrap gap-2 mb-8">
          {(Object.keys(eventTypeLabels) as EventType[]).map((type) => (
            <span key={type} className={`text-xs font-semibold px-3 py-1 rounded-full ${eventTypeStyles[type]}`}>
              {eventTypeLabels[type]}
            </span>
          ))}
        </AnimatedSection>

        <AnimatePresence mode="wait">
          {schedule.map((day, dayIndex) => (
            activeDay === dayIndex && (
              <motion.div
                key={day.label}
                id={`day-panel-${dayIndex}`}
                role="tabpanel"
                aria-labelledby={`day-tab-${dayIndex}`}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.25 }}
              >
                <h2 className="font-display text-2xl font-semibold text-foreground mb-8">
                  {day.date}
                </h2>

                <StaggerContainer className="relative space-y-0">
                  {/* Timeline line */}
                  <div
                    className="absolute left-[5.5rem] sm:left-24 top-4 bottom-4 w-px bg-border"
                    aria-hidden="true"
                  />

                  {day.events.map((ev) => (
                    <StaggerItem key={ev.id}>
                      <div className="flex gap-4 sm:gap-6 py-5 first:pt-0 group">
                        {/* Time */}
                        <div className="w-20 sm:w-24 shrink-0 text-right">
                          <span className="text-sm font-medium text-muted-foreground">
                            {ev.time}
                          </span>
                        </div>

                        {/* Dot */}
                        <div className="relative z-10 flex items-start pt-1">
                          <div className={`w-3 h-3 rounded-full border-2 shrink-0 ${
                            ev.type === "ceremony"
                              ? "bg-primary border-primary"
                              : "bg-background border-border-strong"
                          }`} aria-hidden="true" />
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0 pb-2">
                          <div className="flex flex-wrap items-start gap-2 mb-1">
                            <h3 className="font-semibold text-foreground text-base leading-tight">
                              {ev.title}
                            </h3>
                            <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${eventTypeStyles[ev.type]}`}>
                              {eventTypeLabels[ev.type]}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground mb-1 flex items-center gap-1">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                              <circle cx="12" cy="10" r="3" />
                            </svg>
                            {ev.location}
                          </p>
                          {ev.description && (
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {ev.description}
                            </p>
                          )}
                          {ev.speaker && (
                            <p className="text-xs text-muted-foreground mt-1 font-medium">
                              Speaker: {ev.speaker}
                            </p>
                          )}
                        </div>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </motion.div>
            )
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
