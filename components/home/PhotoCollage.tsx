import { Marquee } from "@/components/ui/Marquee";
import { AnimatedSection } from "@/components/motion/AnimatedSection";

const PHOTO_COUNT = 10;

const photos = Array.from({ length: PHOTO_COUNT }, (_, i) => ({
  id: i,
  label: `PHOTO ${i + 1}`,
  aspect: i % 3 === 0 ? "aspect-[4/3]" : i % 3 === 1 ? "aspect-square" : "aspect-[3/4]",
  width: i % 3 === 0 ? "w-56" : i % 3 === 1 ? "w-44" : "w-36",
}));

export function PhotoCollage() {
  return (
    <section aria-label="Photo gallery" className="section-padding bg-background overflow-hidden">
      <AnimatedSection className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-3">
          Memories
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground">
          The Energy is Real
        </h2>
      </AnimatedSection>

      {/* Decorative hang-line */}
      <AnimatedSection delay={0.1}>
        <div className="relative w-full mb-4" aria-hidden="true">
          <div className="absolute left-0 right-0 top-1/2 h-px bg-border" />
          <Marquee speed="slow" className="py-2">
            {photos.map((photo) => (
              <div key={photo.id} className="flex flex-col items-center gap-0.5">
                {/* String */}
                <div className="w-px h-6 bg-border" aria-hidden="true" />
                {/* Photo placeholder */}
                <div
                  className={`placeholder-box ${photo.width} ${photo.aspect} rounded-xl shrink-0`}
                  role="img"
                  aria-label={`Placeholder: ${photo.label}`}
                >
                  <span>{photo.label}</span>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </AnimatedSection>
    </section>
  );
}
