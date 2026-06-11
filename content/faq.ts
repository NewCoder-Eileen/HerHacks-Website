export interface FaqItem {
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    question: "What is a hackathon?",
    answer:
      "A hackathon is a collaborative event where participants come together to brainstorm, prototype, and build projects over a short, intense period — typically a weekend. You'll form teams, pick a challenge, and race to create something awesome. Workshops, mentors, and prizes make it an unforgettable experience.",
  },
  {
    question: "Who can attend?",
    answer:
      "EVENTNAME is open to any student currently enrolled in high school or post-secondary education. You don't need to be a computer science major — designers, writers, business students, and complete beginners are all warmly welcome.",
  },
  {
    question: "Is it free to attend?",
    answer:
      "Yes! Participation is completely free. We cover meals, snacks, and swag for the entire event. Travel reimbursements may be available for participants coming from farther away — check back closer to the event for details.",
  },
  {
    question: "How are teams formed?",
    answer:
      "Teams can have 2–5 members. You're welcome to register solo and find teammates at our team-formation mixer at the start of the event, or you can bring your own crew. There's no solo hacking — everyone teams up!",
  },
  {
    question: "Can I sleep over at the venue?",
    answer:
      "Yes! We provide a dedicated sleeping area with cots and mats. Bring your own sleeping bag or blanket if you plan to nap on-site. The venue runs 24 hours so you can hack through the night or rest as needed.",
  },
  {
    question: "I've never written a line of code — can I still join?",
    answer:
      "Absolutely. Many of our best projects come from first-time hackers. We run beginner-friendly workshops on topics like web development, app design, and no-code tools. Mentors are available throughout the weekend to help you get unstuck.",
  },
  {
    question: "Is there a remote or hybrid option?",
    answer:
      "EVENTNAME is an in-person event at VENUE NAME. We believe the energy of hacking side-by-side is irreplaceable — but keep an eye on our mailing list for virtual events and mini-hackathons throughout the year.",
  },
  {
    question: "How can I stay updated?",
    answer:
      "Join our mailing list using the form on this page, and follow us on social media (Instagram, Discord, LinkedIn). We'll send event announcements, workshop schedules, and important logistics directly to your inbox.",
  },
  {
    question: "Will there be food?",
    answer:
      "Yes — we'll have meals and snacks throughout the entire event. We accommodate common dietary restrictions (vegetarian, vegan, gluten-free, halal). Please note your requirements during registration.",
  },
];
