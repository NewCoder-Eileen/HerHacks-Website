export const event = {
  name: "EVENTNAME",
  shortName: "EVENTNAME",
  tagline: "Learn, Connect, Innovate",
  edition: "2025",
  dates: {
    display: "August 15–17, 2025",
    start: "2025-08-15",
    end: "2025-08-17",
  },
  duration: "36 hours",
  venue: {
    name: "VENUE NAME",
    city: "CITY, Province",
    address: "123 University Ave, CITY, Province A1B 2C3",
    mapEmbedUrl: null, // Replace with real Google Maps embed src
  },
  social: {
    instagram: "#",
    twitter: "#",
    linkedin: "#",
    discord: "#",
    facebook: "#",
  },
  email: {
    contact: "hello@eventname.ca",
    sponsorship: "sponsor@eventname.ca",
  },
  links: {
    dashboard: "#",
    mailingList: "#",
    codeOfConduct: "#",
    privacyPolicy: "#",
    pastSite: "#",
  },
} as const;
