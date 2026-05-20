"use client";

import { useState } from "react";

import type { FaqItem } from "@/lib/content";

import { useLang } from "./LanguageContext";

export function Faq({
  items,
  openFirst = false,
}: {
  items: readonly FaqItem[];
  openFirst?: boolean;
}) {
  const { t } = useLang();
  const [open, setOpen] = useState<number>(openFirst ? 0 : -1);
  return (
    <div role="list">
      {items.map((it, i) => {
        const isOpen = open === i;
        const id = `faq-${i}`;
        return (
          <div key={i} role="listitem" className={"faq-item" + (isOpen ? " open" : "")}>
            <h3 style={{ margin: 0, fontWeight: 500 }}>
              <button
                type="button"
                className="faq-q"
                aria-expanded={isOpen}
                aria-controls={id}
                onClick={() => setOpen(isOpen ? -1 : i)}
              >
                <span className="idx">[ {String(i + 1).padStart(2, "0")} ]</span>
                <span className="title">{t(it.q)}</span>
                <span className="toggle" aria-hidden="true">
                  {isOpen ? "−" : "+"}
                </span>
              </button>
            </h3>
            <div className="faq-a" id={id} role="region" aria-hidden={!isOpen}>
              <span />
              <p className="faq-a-text">{t(it.a)}</p>
              <span />
            </div>
          </div>
        );
      })}
    </div>
  );
}
