"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/Button";
import { Decoration } from "@/components/ui/MascotSlot";
import { FloatingDecor } from "@/components/motion/ParallaxLayer";
import { event } from "@/content/event";

export function Hero() {
  const [email, setEmail] = useState("");

  const handleMailingList = (e: React.FormEvent) => {
    e.preventDefault();
    // Replace with actual mailing list integration
    console.log("Subscribe:", email);
    setEmail("");
  };

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background pt-16"
      aria-label="Hero section"
    >
      {/* Background decoration grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle, #000 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Floating decorations */}
      <FloatingDecor speed={0.15} rotateRange={[-6, 4]} className="top-24 left-[6%] hidden sm:block">
        <Decoration label="DECORATION" shape="circle" size="w-20 h-20 md:w-28 md:h-28" />
      </FloatingDecor>

      <FloatingDecor speed={0.25} rotateRange={[4, -8]} className="top-36 right-[6%] hidden sm:block">
        <Decoration label="DECORATION" shape="blob" size="w-24 h-24 md:w-36 md:h-36" />
      </FloatingDecor>

      <FloatingDecor speed={0.1} rotateRange={[-4, 6]} className="bottom-28 left-[12%] hidden lg:block">
        <Decoration label="DECORATION" shape="rect" size="w-32 h-20" />
      </FloatingDecor>

      <FloatingDecor speed={0.3} rotateRange={[6, -4]} className="bottom-36 right-[12%] hidden lg:block">
        <Decoration label="DECORATION" shape="circle" size="w-16 h-16 md:w-20 md:h-20" />
      </FloatingDecor>

      {/* Main content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto flex flex-col items-center gap-8">

        {/* Logo / Wordmark placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
          className="placeholder-box w-56 h-20 sm:w-72 sm:h-24 rounded-2xl"
          role="img"
          aria-label="Event wordmark placeholder"
        >
          <span>WORDMARK / LOGO</span>
        </motion.div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.15 }}
        >
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-muted-foreground mb-3">
            {event.edition} Edition
          </p>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-semibold text-foreground leading-tight">
            {event.tagline}
          </h1>
        </motion.div>

        {/* Date + Venue */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.28 }}
          className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-muted-foreground"
        >
          <span className="flex items-center gap-2 text-base font-medium">
            <CalendarIcon />
            {event.dates.display}
          </span>
          <span className="hidden sm:block w-px h-4 bg-border" aria-hidden="true" />
          <span className="flex items-center gap-2 text-base font-medium">
            <LocationIcon />
            In-Person @ {event.venue.name}
          </span>
        </motion.div>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.38 }}
          className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-lg"
        >
          <Button href={event.links.dashboard} size="lg" className="w-full sm:w-auto shrink-0">
            Dashboard
          </Button>

          {/* Inline email subscribe */}
          <form
            onSubmit={handleMailingList}
            className="flex items-center w-full rounded-full border border-border bg-surface overflow-hidden focus-within:border-primary transition-colors"
          >
            <label htmlFor="hero-email" className="sr-only">
              Email address for mailing list
            </label>
            <input
              id="hero-email"
              type="email"
              placeholder="Join mailing list…"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 bg-transparent px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none"
            />
            <button
              type="submit"
              className="shrink-0 px-4 py-2.5 mr-1 text-xs font-semibold bg-primary text-primary-foreground rounded-full hover:bg-accent transition-colors"
            >
              Subscribe
            </button>
          </form>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
          aria-hidden="true"
        >
          <span className="text-xs text-muted-foreground tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          >
            <svg width="16" height="24" viewBox="0 0 16 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-muted-foreground">
              <path d="M8 5v14M3 14l5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function CalendarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
