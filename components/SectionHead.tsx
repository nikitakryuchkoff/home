"use client";

import type { ReactNode } from "react";

import type { LText } from "@/lib/content";

import { useLang } from "./LanguageContext";

export function SectionHead({
  n,
  h,
  sub,
  children,
}: {
  n?: number;
  h: LText | string;
  sub?: LText | string;
  children?: ReactNode;
}) {
  const { t } = useLang();
  const num = n != null ? String(n).padStart(2, "0") : null;
  return (
    <header className="section-head">
      <div className="meta">
        {num && (
          <div className="section-num">
            <span className="big">§{num}</span>
          </div>
        )}
        <span className="meta-rule" aria-hidden="true" />
        {children}
      </div>
      <div className="title-wrap">
        <h2 className="h-balance t-h1">{t(h)}</h2>
        {sub && <p className="lede">{t(sub)}</p>}
      </div>
    </header>
  );
}
