"use client";

import { CASES } from "@/lib/content";

import { ContactForm } from "../ContactForm";
import { useLang } from "../LanguageContext";
import { ScenePreview } from "../ScenePreview";
import { SectionHead } from "../SectionHead";

const SCENE_KINDS = ["basic", "medium", "complex"] as const;
type SceneKind = (typeof SCENE_KINDS)[number];

const OFFICES = [
  {
    c: "MOW",
    n: { ru: "Москва", en: "Moscow" },
    a: { ru: "Большая Якиманка, 32", en: "Bolshaya Yakimanka, 32" },
    p: "+7 495 000 00 00",
    m: "mow@lumen-arch.studio",
  },
  {
    c: "DXB",
    n: { ru: "Дубай", en: "Dubai" },
    a: { ru: "DIFC, Gate Village 4", en: "DIFC, Gate Village 4" },
    p: "+971 50 000 0000",
    m: "dxb@lumen-arch.studio",
  },
  {
    c: "ALA",
    n: { ru: "Алматы", en: "Almaty" },
    a: { ru: "Аль-Фараби, 7", en: "Al-Farabi, 7" },
    p: "+7 727 000 00 00",
    m: "ala@lumen-arch.studio",
  },
] as const;

export function CasesPageClient() {
  const { lang, t } = useLang();

  return (
    <main>
      <section className="section cases-hero" aria-labelledby="cases-h1">
        <div className="container">
          <div className="page-hero-inner">
            <span className="micro">
              {lang === "ru" ? "[ СТРАНИЦА · КЕЙСЫ И КОНТАКТЫ ]" : "[ PAGE · CASES & CONTACTS ]"}
            </span>
            <h1 id="cases-h1" className="h-display page-hero-h cases-hero-h">
              {lang === "ru"
                ? "Объекты, в которых свет работает на здание."
                : "Buildings where light works for the architecture."}
            </h1>
            <p className="lede page-hero-lede">
              {lang === "ru"
                ? "Editorial-разворот по пяти знаковым объектам: задача, инженерное решение, результат и драйверы стоимости — без шаблонов."
                : "An editorial spread across five signature projects: task, engineering, outcome and price drivers — no templates."}
            </p>
          </div>
        </div>
      </section>

      {CASES.map((c, i) => {
        const kind: SceneKind = SCENE_KINDS[i % SCENE_KINDS.length];
        return (
          <article key={c.idx} aria-labelledby={`case-${c.idx}-h`} className="case-block">
            <div className="case-art">
              <div className="case-scene">
                <ScenePreview kind={kind} />
              </div>
              <span className="num-mega" aria-hidden="true">
                {c.idx}
              </span>
              <div className="case-cap">
                <span>[ {t(c.type)} ]</span>
                <span>{c.stats.map((s) => `${t(s.k)} · ${s.v}`).join("    ")}</span>
              </div>
            </div>
            <div className="editorial">
              <div className="editorial-side">
                <span className="micro">
                  {c.idx} / {String(CASES.length).padStart(2, "0")}
                </span>
                <h2 id={`case-${c.idx}-h`} className="t-h1">
                  {t(c.ttl)}
                </h2>
                <span className="micro dim">{t(c.type)}</span>
                <div className="editorial-stats">
                  {c.stats.map((s, j) => (
                    <div key={j}>
                      <div className="k">{t(s.k)}</div>
                      <div className="v">{s.v}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="editorial-col">
                <h4>{lang === "ru" ? "// ЗАДАЧА" : "// TASK"}</h4>
                <p>{t(c.task)}</p>
                <h4 className="editorial-col-h-spaced">
                  {lang === "ru" ? "// РЕШЕНИЕ" : "// SOLUTION"}
                </h4>
                <p>{t(c.sol)}</p>
              </div>
              <div className="editorial-col">
                <h4>{lang === "ru" ? "// РЕЗУЛЬТАТ" : "// OUTCOME"}</h4>
                <p>{t(c.res)}</p>
                <h4 className="editorial-col-h-spaced">
                  {lang === "ru" ? "// ДРАЙВЕРЫ СТОИМОСТИ" : "// PRICE DRIVERS"}
                </h4>
                <p>{t(c.drivers)}</p>
              </div>
            </div>
          </article>
        );
      })}

      <section className="section" id="contact" aria-labelledby="cases-contact-h">
        <div className="container">
          <SectionHead
            h={{
              ru: "Опишите фасад — соберём расчёт.",
              en: "Describe the facade — we'll build a quote.",
            }}
            sub={{
              ru: "После заявки мы возвращаемся в течение 1–2 рабочих дней с разбором задачи и предварительной партитурой сцен.",
              en: "We respond within 1–2 business days with a task breakdown and a preliminary scene partiture.",
            }}
          >
            <span className="micro" id="cases-contact-h">
              {lang === "ru" ? "[ ЗАЯВКА · РАСЧЁТ ЗА 2 ДНЯ ]" : "[ REQUEST · QUOTE IN 2 DAYS ]"}
            </span>
          </SectionHead>
          <ContactForm />
        </div>
      </section>

      <section className="section invert" aria-labelledby="offices-h">
        <div className="container">
          <SectionHead h={{ ru: "Москва · Дубай · Алматы.", en: "Moscow · Dubai · Almaty." }}>
            <span className="micro" id="offices-h">
              {lang === "ru" ? "[ КОНТАКТЫ · ШТАБ-КВАРТИРЫ ]" : "[ CONTACTS · HEADQUARTERS ]"}
            </span>
          </SectionHead>
          <div className="grid-12">
            {OFFICES.map((o) => (
              <article className="span-4 cell office-cell" key={o.c}>
                <span className="cell-num">{o.c}</span>
                <h3 className="h-on-invert t-h2">{t(o.n)}</h3>
                <div className="office-lines">
                  <span className="office-line">{t(o.a)}</span>
                  <a className="office-line" href={"tel:" + o.p.replace(/\s/g, "")}>
                    {o.p}
                  </a>
                  <a className="office-line office-mail" href={"mailto:" + o.m}>
                    {o.m}
                  </a>
                </div>
                <div className="cell-foot office-foot">
                  <span>{lang === "ru" ? "ПН-ПТ · 10:00 — 20:00" : "MON-FRI · 10:00 — 20:00"}</span>
                  <span>{lang === "ru" ? "Тел / TG / WA" : "Tel / TG / WA"}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
