"use client";

import Link from "next/link";

import { CONTENT } from "@/lib/content";

import { ContactForm } from "./ContactForm";
import { Faq } from "./Faq";
import { Icon } from "./Icon";
import { useLang } from "./LanguageContext";
import { SectionHead } from "./SectionHead";

export function IntroSection() {
  const { t } = useLang();
  return (
    <section className="section" aria-labelledby="intro-h">
      <div className="container">
        <SectionHead n={1} h={CONTENT.home.intro.h}>
          <span className="micro" id="intro-h">
            {t(CONTENT.home.intro.kicker)}
          </span>
        </SectionHead>
        <div className="intro-copy">
          <p className="lede">{t(CONTENT.home.intro.p1)}</p>
          <p className="body">{t(CONTENT.home.intro.p2)}</p>
        </div>
      </div>
    </section>
  );
}

export function ServicesSection() {
  const { lang, t } = useLang();
  return (
    <section className="section" aria-labelledby="services-h">
      <div className="container">
        <SectionHead n={2} h={CONTENT.home.services.h}>
          <span className="micro" id="services-h">
            {lang === "ru" ? "[ 03 / УСЛУГИ ]" : "[ 03 / SERVICES ]"}
          </span>
        </SectionHead>
        <div className="grid-12">
          {CONTENT.home.services.items.map((it) => (
            <Link
              href="/services"
              className="span-6 cell cell-link"
              key={it.code}
              aria-label={t(it.title)}
            >
              <div className="cell-h-row">
                <span className="cell-num">{it.code}</span>
                <span className="micro" aria-hidden="true">
                  →
                </span>
              </div>
              <div className="cell-icon">
                <Icon name={it.icon} />
              </div>
              <h3 className="h-soft t-h3">{t(it.title)}</h3>
              <p className="body">{t(it.body)}</p>
              <div className="cell-foot">
                <span>{t(it.foot)}</span>
                <span>{lang === "ru" ? "Подробнее" : "Learn more"} →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ApproachSection() {
  const { lang, t } = useLang();
  return (
    <section className="section invert" aria-labelledby="approach-h">
      <div className="container">
        <SectionHead n={3} h={CONTENT.home.advantages.h}>
          <span className="micro" id="approach-h">
            {lang === "ru" ? "[ 04 / ПОДХОД ]" : "[ 04 / APPROACH ]"}
          </span>
        </SectionHead>
        <div className="grid-12" role="list">
          {CONTENT.home.advantages.items.map((it) => (
            <article className="span-3 cell" key={it.k} role="listitem">
              <span className="cell-num">{it.k}</span>
              <div className="cell-icon">
                <Icon name={it.icon} />
              </div>
              <h3 className="h-soft h-on-invert t-h3">{t(it.t)}</h3>
              <p className="body">{t(it.d)}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FaqSection() {
  const { lang } = useLang();
  return (
    <section className="section" aria-labelledby="faq-h">
      <div className="container">
        <SectionHead n={4} h={CONTENT.home.faqHeading}>
          <span className="micro" id="faq-h">
            {lang === "ru" ? "[ 07 / ВОПРОСЫ ]" : "[ 07 / QUESTIONS ]"}
          </span>
        </SectionHead>
        <Faq items={CONTENT.faq} openFirst />
      </div>
    </section>
  );
}

export function ContactSection() {
  const { lang } = useLang();
  return (
    <section className="section" aria-labelledby="contact-h" id="contact">
      <div className="container">
        <SectionHead n={5} h={CONTENT.home.contactHeading}>
          <span className="micro" id="contact-h">
            {lang === "ru" ? "[ 08 / ЗАЯВКА ]" : "[ 08 / REQUEST ]"}
          </span>
        </SectionHead>
        <ContactForm />
      </div>
    </section>
  );
}
