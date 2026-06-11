interface MascotSlotProps {
  label?: string;
  width?: string;
  height?: string;
  shape?: "rect" | "circle" | "dashed";
  className?: string;
}

export function MascotSlot({
  label = "MASCOT",
  width = "w-48",
  height = "h-48",
  shape = "circle",
  className = "",
}: MascotSlotProps) {
  const shapeClass =
    shape === "circle"
      ? "placeholder-circle"
      : shape === "dashed"
      ? "placeholder-box"
      : "placeholder-box rounded-2xl";

  return (
    <div
      className={`${shapeClass} ${width} ${height} shrink-0 ${className}`}
      role="img"
      aria-label={`Placeholder: ${label}`}
    >
      <span>{label}</span>
    </div>
  );
}

export function PlaceholderBox({
  label,
  className = "",
  aspectRatio = "aspect-video",
}: {
  label: string;
  className?: string;
  aspectRatio?: string;
}) {
  return (
    <div
      className={`placeholder-box ${aspectRatio} w-full ${className}`}
      role="img"
      aria-label={`Placeholder: ${label}`}
    >
      <span>{label}</span>
    </div>
  );
}

export function PlaceholderPhoto({
  label = "PHOTO",
  className = "",
}: {
  label?: string;
  className?: string;
}) {
  return (
    <div
      className={`placeholder-box aspect-square ${className}`}
      role="img"
      aria-label={`Placeholder: ${label}`}
    >
      <span>{label}</span>
    </div>
  );
}

export function PlaceholderLogo({
  label = "SPONSOR LOGO",
  className = "",
}: {
  label?: string;
  className?: string;
}) {
  return (
    <div
      className={`placeholder-box aspect-[3/2] ${className}`}
      role="img"
      aria-label={`Placeholder: ${label}`}
    >
      <span className="text-center px-2">{label}</span>
    </div>
  );
}

export function Decoration({
  label = "DECORATION",
  shape = "circle",
  size = "w-24 h-24",
  className = "",
}: {
  label?: string;
  shape?: "circle" | "rect" | "blob";
  size?: string;
  className?: string;
}) {
  const shapeClass = shape === "circle" ? "rounded-full" : shape === "blob" ? "rounded-[60%_40%_30%_70%/60%_30%_70%_40%]" : "rounded-2xl";
  return (
    <div
      className={`placeholder-box ${size} ${shapeClass} ${className}`}
      role="presentation"
      aria-hidden="true"
    >
      <span className="text-[9px]">{label}</span>
    </div>
  );
}
