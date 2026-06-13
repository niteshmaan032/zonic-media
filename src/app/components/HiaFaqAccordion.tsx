"use client";

import { useState } from "react";

export type HiaFaqItem = {
  q: string;
  a: string;
};

type Props = {
  items: HiaFaqItem[];
  /** Index of the item open on first render. Defaults to 0. Pass -1 for all closed. */
  defaultOpen?: number;
};

export default function HiaFaqAccordion({ items, defaultOpen = 0 }: Props) {
  const [openIndex, setOpenIndex] = useState<number>(defaultOpen);

  const toggle = (i: number) => {
    setOpenIndex((prev) => (prev === i ? -1 : i));
  };

  return (
    <div className="hia-faq-list">
      {items.map((item, i) => {
        const isOpen = i === openIndex;
        const panelId = `hia-faq-panel-${i}`;
        const buttonId = `hia-faq-trigger-${i}`;
        return (
          <div
            key={i}
            className={`hia-faq-item${isOpen ? " hia-faq-open" : ""}`}
          >
            <button
              type="button"
              id={buttonId}
              className="hia-faq-q"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => toggle(i)}
            >
              <span>{item.q}</span>
              <span className="hia-faq-toggle" aria-hidden="true">
                +
              </span>
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className="hia-faq-a"
              hidden={!isOpen}
            >
              <p>{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
