export type SubTeam =
  | "Co-Directors"
  | "Technology"
  | "Design"
  | "Logistics"
  | "Finance"
  | "Marketing"
  | "Sponsorship";

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  team: SubTeam;
  pronouns?: string;
}

export const teamMembers: TeamMember[] = [
  // Co-Directors
  { id: "t1", name: "Alex Johnson", role: "Co-Director", team: "Co-Directors", pronouns: "they/them" },
  { id: "t2", name: "Jordan Smith", role: "Co-Director", team: "Co-Directors", pronouns: "she/her" },

  // Technology
  { id: "t3", name: "Casey Williams", role: "Tech Lead", team: "Technology", pronouns: "he/him" },
  { id: "t4", name: "Riley Davis", role: "Web Developer", team: "Technology" },
  { id: "t5", name: "Morgan Chen", role: "Web Developer", team: "Technology" },
  { id: "t6", name: "Avery Martinez", role: "Infrastructure", team: "Technology" },

  // Design
  { id: "t7", name: "Quinn Anderson", role: "Design Lead", team: "Design", pronouns: "she/her" },
  { id: "t8", name: "Sam Taylor", role: "UI/UX Designer", team: "Design" },
  { id: "t9", name: "Drew Wilson", role: "Illustrator", team: "Design" },

  // Logistics
  { id: "t10", name: "Blake Thomas", role: "Logistics Lead", team: "Logistics", pronouns: "he/him" },
  { id: "t11", name: "Skylar Jackson", role: "Venue Coordinator", team: "Logistics" },
  { id: "t12", name: "Reese White", role: "Food & Catering", team: "Logistics" },

  // Finance
  { id: "t13", name: "Parker Harris", role: "Finance Lead", team: "Finance", pronouns: "she/her" },
  { id: "t14", name: "Emerson Lee", role: "Budget Analyst", team: "Finance" },

  // Marketing
  { id: "t15", name: "Dakota Clark", role: "Marketing Lead", team: "Marketing", pronouns: "they/them" },
  { id: "t16", name: "Finley Lewis", role: "Social Media", team: "Marketing" },
  { id: "t17", name: "Rowan Robinson", role: "Content Writer", team: "Marketing" },

  // Sponsorship
  { id: "t18", name: "Sage Walker", role: "Sponsorship Lead", team: "Sponsorship", pronouns: "she/her" },
  { id: "t19", name: "Indigo Hall", role: "Partnerships", team: "Sponsorship" },
];

export const subTeams: SubTeam[] = [
  "Co-Directors",
  "Technology",
  "Design",
  "Logistics",
  "Finance",
  "Marketing",
  "Sponsorship",
];
