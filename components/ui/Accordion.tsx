"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
}

export function Accordion({ items, allowMultiple = false }: AccordionProps) {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggle = (index: number) => {
    setOpenIndexes((prev) => {
      if (prev.includes(index)) {
        return prev.filter((i) => i !== index);
      }
      return allowMultiple ? [...prev, index] : [index];
    });
  };

  return (
    <div className="divide-y divide-border" role="list">
      {items.map((item, index) => {
        const isOpen = openIndexes.includes(index);
        const panelId = `accordion-panel-${index}`;
        const buttonId = `accordion-button-${index}`;

        return (
          <div key={index} role="listitem">
            <button
              id={buttonId}
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between gap-4 py-5 text-left text-foreground font-medium text-lg hover:text-accent transition-colors duration-150 group"
            >
              <span>{item.question}</span>
              <span
                className={`shrink-0 w-6 h-6 rounded-full border border-border-strong flex items-center justify-center transition-transform duration-300 group-hover:border-primary ${
                  isOpen ? "rotate-45 bg-primary border-primary" : "bg-transparent"
                }`}
                aria-hidden="true"
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  stroke={isOpen ? "white" : "currentColor"}
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <line x1="6" y1="1" x2="6" y2="11" />
                  <line x1="1" y1="6" x2="11" y2="6" />
                </svg>
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
                  className="overflow-hidden"
                >
                  <p className="pb-5 text-muted-foreground leading-relaxed">{item.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
