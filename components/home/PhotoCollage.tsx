import { Marquee } from "@/components/ui/Marquee";
import { AnimatedSection } from "@/components/motion/AnimatedSection";

const photos = [
  { id: 0,  label: "PHOTO 1",  aspect: "aspect-[4/3]", width: "w-52" },
  { id: 1,  label: "PHOTO 2",  aspect: "aspect-square", width: "w-40" },
  { id: 2,  label: "PHOTO 3",  aspect: "aspect-[3/4]",  width: "w-36" },
  { id: 3,  label: "PHOTO 4",  aspect: "aspect-[4/3]", width: "w-48" },
  { id: 4,  label: "PHOTO 5",  aspect: "aspect-square", width: "w-44" },
  { id: 5,  label: "PHOTO 6",  aspect: "aspect-[3/4]",  width: "w-32" },
  { id: 6,  label: "PHOTO 7",  aspect: "aspect-[4/3]", width: "w-52" },
  { id: 7,  label: "PHOTO 8",  aspect: "aspect-square", width: "w-40" },
  { id: 8,  label: "PHOTO 9",  aspect: "aspect-[3/4]",  width: "w-36" },
  { id: 9,  label: "PHOTO 10", aspect: "aspect-[4/3]", width: "w-48" },
];

export function PhotoCollage() {
  return (
    <section aria-label="Photo gallery" className="section-padding bg-background overflow-hidden">
      <AnimatedSection className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-3">
          Memories
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground">
          The Energy is Real
        </h2>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        {/* Clothesline rope */}
        <div className="w-full h-px bg-border mb-0" aria-hidden="true" />

        {/* Photos hanging from the line */}
        <Marquee speed="slow" className="pt-0">
          {photos.map((photo) => (
            <div key={photo.id} className="flex flex-col items-center shrink-0">
              {/* String */}
              <div className="w-px h-5 bg-border-strong shrink-0" aria-hidden="true" />
              {/* Photo placeholder */}
              <div
                className={`placeholder-box ${photo.width} ${photo.aspect} rounded-xl`}
                role="img"
                aria-label={`Placeholder: ${photo.label}`}
              >
                <span>{photo.label}</span>
              </div>
            </div>
          ))}
        </Marquee>
      </AnimatedSection>
    </section>
  );
}
