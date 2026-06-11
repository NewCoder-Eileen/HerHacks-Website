"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { event } from "@/content/event";
import { anchorLinks, pageLinks } from "@/content/nav";

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Drawer */}
          <motion.nav
            key="drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 340, damping: 34 }}
            className="fixed right-0 top-0 bottom-0 z-50 w-72 max-w-[90vw] bg-background border-l border-border flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-border">
              <span className="font-display text-xl font-semibold">{event.shortName}</span>
              <button
                onClick={onClose}
                aria-label="Close navigation"
                className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-muted transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="3" y1="3" x2="15" y2="15" />
                  <line x1="15" y1="3" x2="3" y2="15" />
                </svg>
              </button>
            </div>

            {/* Links */}
            <div className="flex-1 overflow-y-auto p-5 space-y-1">
              {anchorLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className="block px-3 py-3 rounded-xl text-foreground font-medium hover:bg-muted transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="my-3 border-t border-border" />
              {pageLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className="block px-3 py-3 rounded-xl text-foreground font-medium hover:bg-muted transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA */}
            <div className="p-5 border-t border-border">
              <Button href={event.links.dashboard} className="w-full justify-center">
                Dashboard
              </Button>
            </div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
}
