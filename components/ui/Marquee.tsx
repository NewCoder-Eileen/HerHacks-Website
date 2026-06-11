"use client";

import { type ReactNode } from "react";

interface MarqueeProps {
  children: ReactNode;
  speed?: "slow" | "normal" | "fast";
  reverse?: boolean;
  pauseOnHover?: boolean;
  className?: string;
}

const speedDuration = {
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
      className={`relative flex overflow-hidden select-none ${className}`}
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
      }}
    >
      <div
        className="flex w-max animate-marquee gap-6 items-center"
        style={{
          animationDuration: speedDuration[speed],
          animationDirection: reverse ? "reverse" : "normal",
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
          ...(pauseOnHover ? { "--pauseOnHover": "paused" } as React.CSSProperties : {}),
        }}
      >
        {children}
        {children}
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation-name: marquee;
        }
        .animate-marquee:hover {
          animation-play-state: ${pauseOnHover ? "paused" : "running"};
        }
      `}</style>
    </div>
  );
}
