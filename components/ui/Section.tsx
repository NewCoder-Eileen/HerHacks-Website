import { type HTMLAttributes } from "react";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  as?: "section" | "div" | "article";
  contained?: boolean;
  padded?: boolean;
}

export function Section({
  as: Tag = "section",
  contained = true,
  padded = true,
  className = "",
  children,
  ...props
}: SectionProps) {
  return (
    <Tag
      className={`${padded ? "section-padding" : ""} ${className}`}
      {...props}
    >
      {contained ? (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
      ) : (
        children
      )}
    </Tag>
  );
}
