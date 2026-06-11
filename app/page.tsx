import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { StorySections } from "@/components/home/StorySections";
import { StatsStrip } from "@/components/home/StatsStrip";
import { VenueSection } from "@/components/home/VenueSection";
import { PhotoCollage } from "@/components/home/PhotoCollage";
import { SponsorsSection } from "@/components/home/SponsorsSection";
import { TeamTeaser } from "@/components/home/TeamTeaser";
import { FaqSection } from "@/components/home/FaqSection";

export const metadata: Metadata = {
  title: "Home",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <StorySections />
      <StatsStrip />
      <VenueSection />
      <PhotoCollage />
      <SponsorsSection />
      <TeamTeaser />
      <FaqSection />
    </>
  );
}
