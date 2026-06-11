"use client";

import { type ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

interface ParallaxLayerProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

export function ParallaxLayer({
  children,
  speed = 0.3,
  className = "",
}: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [speed * -150, speed * 150]);

  return (
    <div ref={ref} className={`relative ${className}`}>
      <motion.div style={{ y }} className="w-full h-full">
        {children}
      </motion.div>
    </div>
  );
}

interface FloatingDecorProps {
  children: ReactNode;
  speed?: number;
  rotateRange?: [number, number];
  className?: string;
}

export function FloatingDecor({
  children,
  speed = 0.2,
  rotateRange = [-8, 8],
  className = "",
}: FloatingDecorProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [speed * -200, speed * 200]);
  const rotate = useTransform(scrollYProgress, [0, 1], rotateRange);

  return (
    <div ref={ref} className={`absolute pointer-events-none ${className}`}>
      <motion.div style={{ y, rotate }}>
        {children}
      </motion.div>
    </div>
  );
}
