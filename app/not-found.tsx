import Link from "next/link";
import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { MascotSlot } from "@/components/ui/MascotSlot";

export const metadata: Metadata = {
  title: "404 — Page Not Found",
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center pt-16">
      <MascotSlot
        label="MASCOT"
        width="w-40"
        height="h-40"
        shape="circle"
        className="mb-10"
      />

      <p className="font-display text-8xl font-semibold text-muted mb-2" aria-hidden="true">
        404
      </p>

      <h1 className="font-display text-3xl font-semibold text-foreground mb-4">
        Oops — nothing to hack here
      </h1>

      <p className="text-muted-foreground text-lg mb-10 max-w-sm">
        The page you're looking for doesn't exist. Maybe it was submitted to Devpost already?
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-3">
        <Button href="/" size="lg">
          Back to Home
        </Button>
        <Button href="/schedule" variant="outline" size="lg">
          View Schedule
        </Button>
      </div>
    </div>
  );
}
