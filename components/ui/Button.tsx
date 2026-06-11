import { type ButtonHTMLAttributes, forwardRef } from "react";
import Link from "next/link";

type Variant = "primary" | "secondary" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  href?: string;
  external?: boolean;
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-primary text-primary-foreground hover:bg-accent border border-primary hover:border-accent",
  secondary:
    "bg-secondary text-secondary-foreground hover:bg-muted border border-border hover:border-border-strong",
  ghost:
    "bg-transparent text-foreground hover:bg-muted border border-transparent hover:border-border",
  outline:
    "bg-transparent text-foreground hover:bg-muted border border-border-strong hover:border-primary",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2 text-sm rounded-full",
  md: "px-6 py-2.5 text-sm rounded-full",
  lg: "px-8 py-3.5 text-base rounded-full",
};

const base =
  "inline-flex items-center justify-center gap-2 font-medium cursor-pointer transition-all duration-200 select-none focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 active:scale-95 disabled:opacity-50 disabled:pointer-events-none";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", href, external, className = "", children, ...props }, ref) => {
    const classes = `${base} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

    if (href) {
      const linkProps = external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {};
      return (
        <Link href={href} className={classes} {...linkProps}>
          {children}
        </Link>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
