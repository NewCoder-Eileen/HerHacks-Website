import type { Metadata, Viewport } from "next";
import { Fredoka, Outfit } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { event } from "@/content/event";
import "./globals.css";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-fredoka",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-outfit",
  display: "swap",
});

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "https://eventname.ca";

export const metadata: Metadata = {
  title: {
    default: `${event.name} ${event.edition}`,
    template: `%s | ${event.name}`,
  },
  description: `${event.name} is a student-run hackathon happening ${event.dates.display} at ${event.venue.name}. ${event.tagline}.`,
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: baseUrl,
    siteName: event.name,
    title: `${event.name} ${event.edition} — ${event.tagline}`,
    description: `Join us at ${event.venue.name}, ${event.venue.city} for ${event.duration} of hacking, workshops, and community.`,
    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: `${event.name} ${event.edition} Open Graph Image`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${event.name} ${event.edition}`,
    description: `${event.tagline} — ${event.dates.display}`,
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${fredoka.variable} ${outfit.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-background text-foreground font-body antialiased min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
