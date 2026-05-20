"use client";

import { PRICING } from "@/lib/content";

import { useLang } from "../LanguageContext";
import { SectionHead } from "../SectionHead";
import { Ticker } from "../Ticker";

const fmtUSD = (n: number) => n.toLocaleString("en-US").replace(/,/g, " ");

export function PricingPageClient() {
  const { lang, t } = useLang();

  return (
    <main>
      {/* page hero */}
      <section className="section pricing-hero" aria-labelledby="pricing-h1">
        <div className="container">
          <div className="page-hero-inner">
            <span className="micro">{t(PRICING.hero.kicker)}</span>
            <h1 id="pricing-h1" className="h-display h-soft page-hero-h">
              {t(PRICING.hero.h1)}
            </h1>
            <p className="lede page-hero-lede">{t(PRICING.hero.sub)}</p>
          </div>
        </div>
      </section>

      {/* TARIFF GRID */}
      <section className="section" aria-labelledby="tariff-h">
        <div className="container">
          <SectionHead n={1} h={{ ru: "Цены за одну сцену.", en: "Prices per single scene." }}>
            <span className="micro" id="tariff-h">
              {lang === "ru" ? "[ ТАРИФНАЯ СЕТКА ]" : "[ TARIFF GRID ]"}
            </span>
          </SectionHead>
          <div>
            <div className="tariff-row head">
              <div className="name">{lang === "ru" ? "Сцена" : "Scene"}</div>
              <div className="price">
                <small>{lang === "ru" ? "СВЕТ" : "DYNAMIC"}</small>
              </div>
              <div className="price">
                <small>{lang === "ru" ? "ПИКСЕЛЬ" : "PIXEL"}</small>
              </div>
              <div className="price">
                <small>{lang === "ru" ? "СРОК" : "LEAD"}</small>
              </div>
              <div className="lead">{lang === "ru" ? "ХАРАКТЕР" : "CHARACTER"}</div>
            </div>
            {PRICING.tariffs.map((r, i) => (
              <div className="tariff-row" key={i}>
                <div className="name">{t(r.n)}</div>
                <div className="price">
                  <small>{lang === "ru" ? "СВЕТ" : "DYN"}</small>
                  <span>
                    {r.from ? (lang === "ru" ? "от " : "from ") : ""}${fmtUSD(r.dyn)}
                  </span>
                </div>
                <div className="price">
                  <small>{lang === "ru" ? "ПИКСЕЛЬ" : "PIX"}</small>
                  {r.pix == null ? (
                    <span style={{ color: "var(--muted)" }}>— —</span>
                  ) : (
                    <span>${fmtUSD(r.pix)}</span>
                  )}
                </div>
                <div className="price">
                  <small>{lang === "ru" ? "СРОК" : "LEAD"}</small>
                  <span style={{ fontSize: 13 }}>{t(r.t)}</span>
                </div>
                <div className="lead">{t(r.ch)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Q/A ANSWERS */}
      <section className="section" aria-labelledby="answers-h">
        <div className="container">
          <SectionHead
            n={2}
            h={{ ru: "Ответы на вопросы по стоимости.", en: "Answers on pricing questions." }}
            sub={{
              ru: "Прямые экспертные ответы — те же, что мы отправляем в коммерческих предложениях.",
              en: "Direct expert answers — the same we send in proposals.",
            }}
          >
            <span className="micro" id="answers-h">
              {lang === "ru" ? "[ ОТВЕТЫ ]" : "[ ANSWERS ]"}
            </span>
          </SectionHead>
          <div className="qa-list">
            {PRICING.answers.map((a, i) => (
              <article className="qa-v2" key={i}>
                <div className="qa-v2-idx">{String(i + 1).padStart(2, "0")}</div>
                <div className="qa-v2-body">
                  <h3 className="qa-v2-q">{t(a.q)}</h3>
                  <p className="qa-v2-lede">{t(a.h)}</p>
                  <div className="qa-v2-text">
                    {a.p.map((p, j) => (
                      <p key={j}>{t(p)}</p>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EXAMPLES */}
      <section className="section invert" aria-labelledby="examples-h">
        <div className="container">
          <SectionHead n={3} h={{ ru: "Как складывается итог.", en: "How the total is composed." }}>
            <span className="micro" id="examples-h">
              {lang === "ru" ? "[ ПРИМЕРЫ РАСЧЁТА ]" : "[ ESTIMATE EXAMPLES ]"}
            </span>
          </SectionHead>
          <div className="grid-12">
            {PRICING.examples.map((ex, i) => (
              <article className="span-4 cell example-cell" key={i}>
                <span className="cell-num">EX.{String(i + 1).padStart(2, "0")}</span>
                <h3 className="h-on-invert t-h3">{t(ex.ttl)}</h3>
                <span className="micro">{t(ex.meta)}</span>
                <div className="example-rows">
                  {ex.rows.map((r, j) => (
                    <div key={j} className="calc-line-row">
                      <span>{t(r.l)}</span>
                      <span className="v">${r.v}</span>
                    </div>
                  ))}
                </div>
                <div className="cell-foot example-total">
                  <span>{lang === "ru" ? "ИТОГО" : "TOTAL"}</span>
                  <span className="example-total-v">${ex.total}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Ticker
        items={
          lang === "ru"
            ? [
                "DMX от $4 000 за объединение",
                "сцены $200 / $600 / $1 600",
                "сцены $600 / $1 000 / $3 000",
                "без шаблонов",
                "ночные тесты",
                "112 объектов",
              ]
            : [
                "DMX from $4 000 orchestration",
                "scenes $200 / $600 / $1 600",
                "scenes $600 / $1 000 / $3 000",
                "no templates",
                "night tests",
                "112 projects",
              ]
        }
      />
    </main>
  );
}
