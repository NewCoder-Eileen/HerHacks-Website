"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { AnimatedSection } from "@/components/motion/AnimatedSection";
import { Decoration } from "@/components/ui/MascotSlot";
import { storySections } from "@/content/nav";

export function StorySections() {
  return (
    <div className="relative overflow-hidden">
      {/* Shared vertical line */}
      <div
        className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent hidden lg:block"
        aria-hidden="true"
      />

      {storySections.map((section, index) => (
        <StorySection
          key={section.id}
          id={section.id}
          heading={section.heading}
          body={section.body}
          align={section.align}
          index={index}
        />
      ))}
    </div>
  );
}

interface StorySectionProps {
  id: string;
  heading: string;
  body: string;
  align: "left" | "right";
  index: number;
}

function StorySection({ id, heading, body, align, index }: StorySectionProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const decorY1 = useTransform(scrollYProgress, [0, 1], [-60, 60]);
  const decorY2 = useTransform(scrollYProgress, [0, 1], [40, -80]);
  const decorRotate = useTransform(scrollYProgress, [0, 1], [-12, 12]);

  const isLeft = align === "left";
  const shapes: Array<"circle" | "blob" | "rect"> = ["circle", "blob", "rect", "circle"];
  const shapeA = shapes[index % shapes.length];
  const shapeB = shapes[(index + 2) % shapes.length];

  return (
    <section
      ref={ref}
      id={id}
      className="relative section-padding overflow-hidden"
      aria-label={heading.replace("\n", " ")}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex flex-col ${
            isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
          } items-center gap-12 lg:gap-20`}
        >
          {/* Text block */}
          <AnimatedSection className="flex-1 min-w-0" delay={0.05}>
            <div
              className={`max-w-lg ${isLeft ? "lg:mr-auto" : "lg:ml-auto"}`}
            >
              <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-4">
                0{index + 1}
              </p>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6 whitespace-pre-line">
                {heading}
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">{body}</p>
            </div>
          </AnimatedSection>

          {/* Floating decoration panel */}
          <div className="flex-1 min-w-0 relative min-h-64 sm:min-h-80 w-full hidden sm:flex items-center justify-center">
            {/* Primary decoration */}
            <motion.div
              style={{ y: decorY1, rotate: decorRotate }}
              className="relative z-10"
            >
              <Decoration
                label="DECORATION"
                shape={shapeA}
                size="w-48 h-48 lg:w-64 lg:h-64"
              />
            </motion.div>

            {/* Secondary smaller decoration */}
            <motion.div
              style={{ y: decorY2 }}
              className={`absolute ${
                isLeft ? "right-4 top-4" : "left-4 top-4"
              } z-0`}
            >
              <Decoration
                label="DECORATION"
                shape={shapeB}
                size="w-24 h-24 lg:w-32 lg:h-32"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
