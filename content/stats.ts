export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export const stats: Stat[] = [
  { value: 500, suffix: "+", label: "Hackers" },
  { value: 36, suffix: "h", label: "Hours of Hacking" },
  { value: 20, suffix: "+", label: "Workshops" },
  { value: 120, suffix: "+", label: "Projects Submitted" },
];
