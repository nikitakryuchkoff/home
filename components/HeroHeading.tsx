"use client";

import Link from "next/link";

import { CONTENT } from "@/lib/content";

import { useLang } from "./LanguageContext";

export function HeroHeading() {
  const { lang, t } = useLang();
  return (
    <div className="hero-left">
      <div className="hero-stack">
        <span className="micro">
          {lang === "ru"
            ? "Инженерная студия архитектурного света"
            : "Architectural lighting engineering studio"}
        </span>
        <h1 className="h-display h-soft hero-h">
          {lang === "ru" ? "Свет как часть архитектуры." : "Light as part of architecture."}
        </h1>
      </div>

      <div className="hero-stack hero-stack-tight">
        <p className="lede hero-lede">{t(CONTENT.home.hero.sub)}</p>
        <div className="hero-actions">
          <Link href="/pricing" className="btn btn-primary btn-lg">
            {lang === "ru" ? "Рассчитать стоимость" : "Get a quote"}{" "}
            <span className="arrow">→</span>
          </Link>
          <Link href="/services" className="btn btn-lg">
            {lang === "ru" ? "Услуги" : "Services"} <span className="arrow">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
