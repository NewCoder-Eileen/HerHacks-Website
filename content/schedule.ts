export type EventType = "ceremony" | "workshop" | "activity" | "meal" | "break";

export interface ScheduleEvent {
  id: string;
  time: string;
  title: string;
  location: string;
  type: EventType;
  description?: string;
  speaker?: string;
}

export interface ScheduleDay {
  label: string;
  date: string;
  events: ScheduleEvent[];
}

export const schedule: ScheduleDay[] = [
  {
    label: "Day 1",
    date: "Friday, August 15",
    events: [
      {
        id: "d1-1",
        time: "4:00 PM",
        title: "Check-In & Registration",
        location: "Main Lobby",
        type: "activity",
        description: "Pick up your badge, swag bag, and find your team table.",
      },
      {
        id: "d1-2",
        time: "6:00 PM",
        title: "Opening Ceremony",
        location: "Main Auditorium",
        type: "ceremony",
        description: "Welcome remarks, sponsor spotlights, and hacking kickoff.",
      },
      {
        id: "d1-3",
        time: "7:00 PM",
        title: "Team Formation Mixer",
        location: "Atrium",
        type: "activity",
        description: "Find teammates, swap ideas, and lock in your project concept.",
      },
      {
        id: "d1-4",
        time: "8:00 PM",
        title: "Dinner",
        location: "Cafeteria",
        type: "meal",
        description: "Hot meals with vegetarian, vegan, and halal options.",
      },
      {
        id: "d1-5",
        time: "9:00 PM",
        title: "Intro to Web Dev",
        location: "Workshop Room A",
        type: "workshop",
        description: "Build your first website from scratch with HTML, CSS, and JavaScript.",
        speaker: "Morgan Chen",
      },
      {
        id: "d1-6",
        time: "9:00 PM",
        title: "Design Thinking 101",
        location: "Workshop Room B",
        type: "workshop",
        description: "Learn how to identify user needs and prototype solutions rapidly.",
        speaker: "Quinn Anderson",
      },
      {
        id: "d1-7",
        time: "11:00 PM",
        title: "Midnight Snack",
        location: "Cafeteria",
        type: "meal",
      },
      {
        id: "d1-8",
        time: "11:59 PM",
        title: "Hacking officially begins!",
        location: "Everywhere",
        type: "ceremony",
      },
    ],
  },
  {
    label: "Day 2",
    date: "Saturday, August 16",
    events: [
      {
        id: "d2-1",
        time: "8:00 AM",
        title: "Breakfast",
        location: "Cafeteria",
        type: "meal",
      },
      {
        id: "d2-2",
        time: "10:00 AM",
        title: "APIs & AI Tools Workshop",
        location: "Workshop Room A",
        type: "workshop",
        description: "Connect your project to APIs and explore AI/ML tools.",
        speaker: "Casey Williams",
      },
      {
        id: "d2-3",
        time: "10:00 AM",
        title: "Mobile App Dev with React Native",
        location: "Workshop Room B",
        type: "workshop",
        speaker: "Riley Davis",
      },
      {
        id: "d2-4",
        time: "12:00 PM",
        title: "Lunch",
        location: "Cafeteria",
        type: "meal",
      },
      {
        id: "d2-5",
        time: "1:00 PM",
        title: "Pitching & Presentation Skills",
        location: "Workshop Room A",
        type: "workshop",
        description: "How to demo your project to judges in 3 minutes or less.",
        speaker: "Jordan Smith",
      },
      {
        id: "d2-6",
        time: "3:00 PM",
        title: "Nerf War Break",
        location: "Gymnasium",
        type: "activity",
        description: "Take a breather, recharge, and wreak havoc.",
      },
      {
        id: "d2-7",
        time: "6:00 PM",
        title: "Dinner",
        location: "Cafeteria",
        type: "meal",
      },
      {
        id: "d2-8",
        time: "8:00 PM",
        title: "Midnight Challenge Announced",
        location: "Main Auditorium",
        type: "activity",
        description: "Optional bonus challenge revealed for bonus prizes.",
      },
      {
        id: "d2-9",
        time: "11:00 PM",
        title: "Midnight Snack",
        location: "Cafeteria",
        type: "meal",
      },
    ],
  },
  {
    label: "Day 3",
    date: "Sunday, August 17",
    events: [
      {
        id: "d3-1",
        time: "8:00 AM",
        title: "Breakfast",
        location: "Cafeteria",
        type: "meal",
      },
      {
        id: "d3-2",
        time: "10:00 AM",
        title: "Submissions Close",
        location: "Devpost",
        type: "ceremony",
        description: "All projects must be submitted to Devpost by 10:00 AM sharp.",
      },
      {
        id: "d3-3",
        time: "11:00 AM",
        title: "Science Fair Judging",
        location: "Main Hall",
        type: "activity",
        description: "Present your project at your table. Judges rotate every 5 minutes.",
      },
      {
        id: "d3-4",
        time: "1:00 PM",
        title: "Lunch",
        location: "Cafeteria",
        type: "meal",
      },
      {
        id: "d3-5",
        time: "2:00 PM",
        title: "Top 5 Final Presentations",
        location: "Main Auditorium",
        type: "ceremony",
        description: "Finalist teams present on stage to judges and the full audience.",
      },
      {
        id: "d3-6",
        time: "3:30 PM",
        title: "Awards & Closing Ceremony",
        location: "Main Auditorium",
        type: "ceremony",
        description: "Prize announcements, sponsor acknowledgements, and final remarks.",
      },
      {
        id: "d3-7",
        time: "4:30 PM",
        title: "Wrap-Up & Departure",
        location: "Main Lobby",
        type: "activity",
        description: "Safe travels! Keep building, keep connecting.",
      },
    ],
  },
];

export const eventTypeStyles: Record<EventType, string> = {
  ceremony: "bg-foreground text-background",
  workshop: "bg-muted text-foreground border border-border-strong",
  activity: "bg-surface text-foreground border border-border",
  meal: "bg-muted text-muted-foreground border border-border",
  break: "bg-muted text-muted-foreground border border-border",
};

export const eventTypeLabels: Record<EventType, string> = {
  ceremony: "Ceremony",
  workshop: "Workshop",
  activity: "Activity",
  meal: "Meal",
  break: "Break",
};
