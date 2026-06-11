export type SponsorTier = "title" | "platinum" | "gold" | "silver" | "bronze";

export interface Sponsor {
  id: string;
  name: string;
  tier: SponsorTier;
  url?: string;
  blurb?: string;
}

export interface TierBenefit {
  feature: string;
  bronze: boolean | string;
  silver: boolean | string;
  gold: boolean | string;
  platinum: boolean | string;
}

export const sponsors: Sponsor[] = [
  {
    id: "title-1",
    name: "Presenting Partner",
    tier: "title",
    blurb:
      "Our title sponsor believes in empowering the next generation of innovators. They've been instrumental in shaping the hackathon experience for hundreds of students each year.",
  },
  { id: "plat-1", name: "Platinum Sponsor A", tier: "platinum" },
  { id: "plat-2", name: "Platinum Sponsor B", tier: "platinum" },
  { id: "gold-1", name: "Gold Sponsor A", tier: "gold" },
  { id: "gold-2", name: "Gold Sponsor B", tier: "gold" },
  { id: "gold-3", name: "Gold Sponsor C", tier: "gold" },
  { id: "silver-1", name: "Silver Sponsor A", tier: "silver" },
  { id: "silver-2", name: "Silver Sponsor B", tier: "silver" },
  { id: "silver-3", name: "Silver Sponsor C", tier: "silver" },
  { id: "silver-4", name: "Silver Sponsor D", tier: "silver" },
  { id: "bronze-1", name: "Bronze Sponsor A", tier: "bronze" },
  { id: "bronze-2", name: "Bronze Sponsor B", tier: "bronze" },
  { id: "bronze-3", name: "Bronze Sponsor C", tier: "bronze" },
  { id: "bronze-4", name: "Bronze Sponsor D", tier: "bronze" },
  { id: "bronze-5", name: "Bronze Sponsor E", tier: "bronze" },
];

export const partners: Sponsor[] = [
  { id: "partner-1", name: "Community Partner A", tier: "bronze" },
  { id: "partner-2", name: "Community Partner B", tier: "bronze" },
  { id: "partner-3", name: "Community Partner C", tier: "bronze" },
  { id: "partner-4", name: "Community Partner D", tier: "bronze" },
];

export const tierBenefits: TierBenefit[] = [
  { feature: "Logo on website", bronze: true, silver: true, gold: true, platinum: true },
  { feature: "Logo on event signage", bronze: true, silver: true, gold: true, platinum: true },
  { feature: "Social media mention", bronze: true, silver: true, gold: true, platinum: true },
  { feature: "Resume access", bronze: false, silver: true, gold: true, platinum: true },
  { feature: "Table at event", bronze: false, silver: false, gold: true, platinum: true },
  { feature: "Workshop slot", bronze: false, silver: false, gold: true, platinum: true },
  { feature: "Prize category", bronze: false, silver: false, gold: true, platinum: true },
  { feature: "Speaking opportunity", bronze: false, silver: false, gold: false, platinum: true },
  { feature: "Logo size on collateral", bronze: "Small", silver: "Medium", gold: "Large", platinum: "Featured" },
  { feature: "Hackpost blurb", bronze: false, silver: false, gold: "50 words", platinum: "150 words" },
];

export const tierColors: Record<SponsorTier, string> = {
  title: "bg-foreground text-background",
  platinum: "bg-surface border border-border-strong",
  gold: "bg-surface border border-border",
  silver: "bg-surface border border-border",
  bronze: "bg-surface border border-border",
};

export const tierLabels: Record<SponsorTier, string> = {
  title: "Title Partner",
  platinum: "Platinum",
  gold: "Gold",
  silver: "Silver",
  bronze: "Bronze",
};
