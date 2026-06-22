"use client";

import Link from "next/link";

import { CONTENT, SERVICES_DETAIL } from "@/lib/content";

import { useLang } from "../LanguageContext";

export function ServicesPageClient() {
  const { lang, t } = useLang();
  const items = CONTENT.home.services.items;

  return (
    <main>
      <section className="section services-hero" aria-labelledby="svc-h1">
        <div className="container">
          <div className="services-hero-inner">
            <div className="services-hero-row">
              <span className="micro">
                {lang === "ru" ? "[ СТРАНИЦА · УСЛУГИ ]" : "[ PAGE · SERVICES ]"}
              </span>
              <span className="micro">{lang === "ru" ? "[ 06 ПОЗИЦИЙ ]" : "[ 06 ITEMS ]"}</span>
            </div>
            <h1 id="svc-h1" className="h-display h-soft services-hero-h">
              {lang === "ru"
                ? "Полный цикл инженерии архитектурного света — от шкафа до сценария."
                : "Full architectural-light engineering cycle — from the cabinet to the scene."}
            </h1>
            <p className="lede services-hero-lede">
              {lang === "ru"
                ? "Шесть направлений, которые мы ведём силами одной команды. Это означает единую инженерную ответственность от первой схемы до годового сервисного контракта."
                : "Six directions delivered by a single team. It means unified engineering responsibility from the first diagram to the yearly service contract."}
            </p>
          </div>
        </div>
      </section>

      <div className="services-list container">
        {items.map((s, i) => {
          const d = SERVICES_DETAIL[i];
          return (
            <article key={s.code} className="svc" aria-labelledby={`svc-${i}-h`}>
              <div className="svc-side">
                <span className="svc-num">·{s.code}</span>
                <h2 id={`svc-${i}-h`} className="h-balance t-h2">
                  {t(s.title)}
                </h2>
                <p className="body svc-side-body">{t(s.body)}</p>
                <div className="svc-side-cta">
                  <Link href="/pricing" className="btn btn-ghost btn-sm">
                    {lang === "ru" ? "Расчёт стоимости" : "Estimate price"}{" "}
                    <span className="arrow">→</span>
                  </Link>
                </div>
              </div>
              <div className="svc-body">
                <div className="svc-detail">
                  <div className="svc-section">
                    <h4>{lang === "ru" ? "Что это" : "What it is"}</h4>
                    <p>{t(d.what)}</p>
                  </div>
                  <div className="svc-section">
                    <h4>{lang === "ru" ? "Для каких объектов" : "Best suited for"}</h4>
                    <p>{t(d.objects)}</p>
                  </div>
                  <div className="svc-section">
                    <h4>{lang === "ru" ? "Что входит" : "What is included"}</h4>
                    <ul>
                      {d.includes.map((it, j) => (
                        <li key={j}>{t(it)}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="svc-section">
                    <h4>{lang === "ru" ? "Как считается стоимость" : "How it is priced"}</h4>
                    <p>{t(d.pricing)}</p>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </main>
  );
}
