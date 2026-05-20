"use client";

import { useState, type FormEvent } from "react";

import { useLang } from "./LanguageContext";

export function ContactForm() {
  const { lang } = useLang();
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <form
      className="form"
      onSubmit={onSubmit}
      aria-label={lang === "ru" ? "Форма заявки" : "Request form"}
    >
      <div className="field">
        <label htmlFor="lumen-name">{lang === "ru" ? "Имя" : "Name"}</label>
        <input
          id="lumen-name"
          name="name"
          placeholder={lang === "ru" ? "Иван Орлов" : "Ivan Orlov"}
          required
        />
      </div>
      <div className="field">
        <label htmlFor="lumen-company">{lang === "ru" ? "Компания" : "Company"}</label>
        <input id="lumen-company" name="company" placeholder="Devstroy Group" />
      </div>
      <div className="field">
        <label htmlFor="lumen-email">E-mail</label>
        <input id="lumen-email" type="email" name="email" placeholder="name@company.com" required />
      </div>
      <div className="field">
        <label htmlFor="lumen-phone">
          {lang === "ru" ? "Телефон / Telegram" : "Phone / Telegram"}
        </label>
        <input id="lumen-phone" name="phone" placeholder="+7 / @username" />
      </div>
      <div className="field">
        <label htmlFor="lumen-type">{lang === "ru" ? "Тип объекта" : "Object type"}</label>
        <select id="lumen-type" name="object" defaultValue="hotel">
          <option value="hotel">
            {lang === "ru" ? "Отель / резиденция" : "Hotel / residence"}
          </option>
          <option value="bc">{lang === "ru" ? "Бизнес-центр" : "Business centre"}</option>
          <option value="retail">{lang === "ru" ? "Торговая галерея" : "Retail gallery"}</option>
          <option value="landmark">Landmark</option>
          <option value="restaurant">
            {lang === "ru" ? "Ресторанный комплекс" : "Restaurant complex"}
          </option>
          <option value="other">{lang === "ru" ? "Другое" : "Other"}</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="lumen-count">{lang === "ru" ? "Количество фасадов" : "Facade count"}</label>
        <input id="lumen-count" name="count" placeholder="1 — 4+" />
      </div>
      <div className="field full">
        <label htmlFor="lumen-task">{lang === "ru" ? "Опишите задачу" : "Describe the task"}</label>
        <textarea
          id="lumen-task"
          name="task"
          rows={3}
          placeholder={
            lang === "ru" ? "Геометрия, требования, дедлайн…" : "Geometry, requirements, deadline…"
          }
        />
      </div>
      <div className="field full submit">
        <span className="form-note" data-state={sent ? "sent" : "idle"} aria-live="polite">
          {sent
            ? lang === "ru"
              ? "[ ✓ ЗАЯВКА ОТПРАВЛЕНА · ОТВЕТИМ ЗА 1–2 ДНЯ ]"
              : "[ ✓ REQUEST SENT · REPLY IN 1–2 DAYS ]"
            : lang === "ru"
              ? "[ ОТВЕЧАЕМ В ТЕЧЕНИЕ 1–2 РАБОЧИХ ДНЕЙ ]"
              : "[ WE REPLY WITHIN 1–2 BUSINESS DAYS ]"}
        </span>
        <button type="submit" className="btn btn-primary" disabled={sent}>
          {lang === "ru" ? "Отправить заявку" : "Send request"} <span className="arrow">→</span>
        </button>
      </div>
    </form>
  );
}
