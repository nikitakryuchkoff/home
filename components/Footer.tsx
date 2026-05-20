"use client";

import Link from "next/link";

import { CONTENT, SITE } from "@/lib/content";

import { useLang } from "./LanguageContext";

export function Footer() {
  const { lang, t } = useLang();
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-col">
          <h5>{lang === "ru" ? "Студия" : "Studio"}</h5>
          <p>
            {lang === "ru"
              ? "Lumen Architecture — инженерная студия архитектурного света для премиальных объектов в Москве, Дубае и Алматы."
              : "Lumen Architecture — engineering studio of architectural light for premium objects in Moscow, Dubai and Almaty."}
          </p>
        </div>
        <div className="footer-col">
          <h5>{lang === "ru" ? "Навигация" : "Navigation"}</h5>
          <Link href="/">{t(CONTENT.nav.home)}</Link>
          <Link href="/services">{t(CONTENT.nav.services)}</Link>
          <Link href="/pricing">{t(CONTENT.nav.pricing)}</Link>
          <Link href="/cases">{t(CONTENT.nav.cases)}</Link>
        </div>
        <div className="footer-col">
          <h5>{lang === "ru" ? "Контакты" : "Contacts"}</h5>
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          <a href="tel:+74950000000">{SITE.phone}</a>
          <a
            href={`https://t.me/${SITE.telegram.replace(/^@/, "")}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Telegram · {SITE.telegram}
          </a>
          <a
            href={`https://wa.me/${SITE.whatsapp.replace(/\D/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp · {SITE.whatsapp}
          </a>
        </div>
        <div className="footer-col">
          <h5>{lang === "ru" ? "Адреса" : "Offices"}</h5>
          {SITE.offices.map((o) => (
            <a
              key={o}
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(o)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {o}
            </a>
          ))}
        </div>
      </div>
      <div className="footer-base">
        <span>© 2014 — 2026 LUMEN ARCHITECTURE</span>
        <span>DMX · SPI · MEDIA · NEON · SERVICE</span>
        <span>{lang === "ru" ? "Все права защищены" : "All rights reserved"}</span>
      </div>
    </footer>
  );
}
