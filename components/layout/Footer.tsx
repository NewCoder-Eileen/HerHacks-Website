import Link from "next/link";
import { MascotSlot } from "@/components/ui/MascotSlot";
import { event } from "@/content/event";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { label: "Past Site", href: event.links.pastSite },
    { label: "Code of Conduct", href: event.links.codeOfConduct },
    { label: "Privacy Policy", href: event.links.privacyPolicy },
    { label: "Contact", href: `mailto:${event.email.contact}` },
  ];

  const socials = [
    { label: "Instagram", href: event.social.instagram },
    { label: "Twitter / X", href: event.social.twitter },
    { label: "LinkedIn", href: event.social.linkedin },
    { label: "Discord", href: event.social.discord },
  ];

  return (
    <footer className="border-t border-border bg-muted">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col items-center gap-10">
          {/* Mascot */}
          <MascotSlot
            label="MASCOT"
            width="w-32"
            height="h-32"
            shape="circle"
          />

          {/* Event name */}
          <div className="text-center">
            <p className="font-display text-2xl font-semibold text-foreground">{event.name}</p>
            <p className="text-muted-foreground text-sm mt-1">{event.tagline}</p>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-4" aria-label="Social media links">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {s.label}
              </a>
            ))}
          </div>

          {/* Page links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Copyright */}
          <p className="text-xs text-muted-foreground text-center">
            © {currentYear} {event.name} Organizers. Made with care by students, for students.
          </p>
        </div>
      </div>
    </footer>
  );
}
