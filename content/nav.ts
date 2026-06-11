export interface NavLink {
  label: string;
  href: string;
  isAnchor?: boolean;
  isExternal?: boolean;
}

export interface NavPage {
  label: string;
  href: string;
}

export const anchorLinks: NavLink[] = [
  { label: "About", href: "#about", isAnchor: true },
  { label: "Sponsors", href: "#sponsors", isAnchor: true },
  { label: "Team", href: "#team-section", isAnchor: true },
  { label: "FAQ", href: "#faq", isAnchor: true },
];

export const pageLinks: NavPage[] = [
  { label: "Schedule", href: "/schedule" },
];

export const storySections = [
  {
    id: "about",
    heading: "A Hackathon Built\nfor Everyone",
    body: "EVENTNAME is one of Canada's largest student-run hackathons, welcoming participants of all backgrounds and skill levels. Whether you're a seasoned engineer or picking up a keyboard for the first time, there's a place here for you.",
    align: "left" as const,
  },
  {
    id: "story-2",
    heading: "Bring Your\nIdeas to Life",
    body: "Thirty-six hours. Unlimited potential. Access to industry mentors, cutting-edge tools, and resources that help you take a raw idea all the way to a working prototype — and maybe even a winning project.",
    align: "right" as const,
  },
  {
    id: "story-3",
    heading: "Form Genuine\nConnections",
    body: "Hackathons are where lifelong friendships, future co-founders, and dream teams are born. Connect with students from across the country who share your curiosity and drive.",
    align: "left" as const,
  },
  {
    id: "story-4",
    heading: "Create Lasting\nMemories",
    body: "From the midnight snack run to the 3 AM breakthrough, EVENTNAME is packed with moments you'll still be talking about years later. Come for the prizes; stay for the experience.",
    align: "right" as const,
  },
];
