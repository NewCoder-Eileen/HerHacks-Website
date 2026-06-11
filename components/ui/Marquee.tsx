"use client";

import { type ReactNode } from "react";

interface MarqueeProps {
  children: ReactNode;
  speed?: "slow" | "normal" | "fast";
  reverse?: boolean;
  pauseOnHover?: boolean;
  className?: string;
}

const speedDuration: Record<string, string> = {
  slow: "60s",
  normal: "35s",
  fast: "20s",
};

export function Marquee({
  children,
  speed = "normal",
  reverse = false,
  pauseOnHover = true,
  className = "",
}: MarqueeProps) {
  return (
    <div
      className={`relative flex overflow-hidden select-none marquee-root ${className}`}
      style={{
        maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
      }}
    >
      <div
        className={`flex w-max gap-6 items-center marquee-track ${pauseOnHover ? "marquee-pausable" : ""}`}
        style={{
          animationDuration: speedDuration[speed],
          animationDirection: reverse ? "reverse" : "normal",
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
          animationName: "marquee-scroll",
        }}
        aria-hidden="true"
      >
        {children}
        {children}
      </div>
    </div>
  );
}
