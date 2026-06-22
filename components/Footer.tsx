"use client";

import { SITE } from "@/lib/content";

import { useLang } from "./LanguageContext";

export function Footer() {
  const { lang } = useLang();
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-col">
          <h5>{lang === "ru" ? "Направление" : "Focus"}</h5>
          <p>
            {lang === "ru"
              ? "Проектирование и расчёт архитектурного света, систем управления, пиксельных фасадов и фасадной анимации."
              : "Architectural lighting, facade control, pixel facades and facade animation estimates."}
          </p>
        </div>
        <div className="footer-col">
          <h5>{lang === "ru" ? "Контакты" : "Contacts"}</h5>
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          <a
            href={`https://t.me/${SITE.telegram.replace(/^@/, "")}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Telegram · {SITE.telegram}
          </a>
        </div>
      </div>
      <div className="footer-base">
        <span>© 2026</span>
        <span>
          {lang === "ru" ? "Расчёт · проектирование · сервис" : "Estimate · design · service"}
        </span>
        <span>{lang === "ru" ? "Все права защищены" : "All rights reserved"}</span>
      </div>
    </footer>
  );
}
