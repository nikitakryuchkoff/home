"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { CONTENT } from "@/lib/content";

import { useLang } from "./LanguageContext";

const NAV_ITEMS = [
  { href: "/", label: CONTENT.nav.home },
  { href: "/services", label: CONTENT.nav.services },
  { href: "/pricing", label: CONTENT.nav.pricing },
] as const;

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export function Nav() {
  const { lang, setLang, t } = useLang();
  const pathname = usePathname() ?? "/";

  return (
    <nav className="nav" aria-label="Primary">
      <div className="nav-inner container">
        <Link
          href="/"
          className="nav-brand"
          aria-label={lang === "ru" ? "DMX — главная" : "DMX — home"}
        >
          <span className="mark" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
            <span />
          </span>
          <span>DMX</span>
        </Link>
        <div className="nav-links" role="menubar">
          {NAV_ITEMS.map((it) => {
            const active = isActive(pathname, it.href);
            return (
              <Link
                key={it.href}
                href={it.href}
                className={"nav-link" + (active ? " active" : "")}
                role="menuitem"
                aria-current={active ? "page" : undefined}
              >
                {t(it.label)}
              </Link>
            );
          })}
        </div>
        <div className="nav-actions">
          <div className="lang-switch" role="group" aria-label="Language">
            <button
              type="button"
              className={lang === "ru" ? "on" : ""}
              onClick={() => setLang("ru")}
              aria-pressed={lang === "ru"}
            >
              RU
            </button>
            <button
              type="button"
              className={lang === "en" ? "on" : ""}
              onClick={() => setLang("en")}
              aria-pressed={lang === "en"}
            >
              EN
            </button>
          </div>
          <Link href="/pricing" className="btn btn-primary btn-sm">
            {t(CONTENT.nav.cta)} <span className="arrow">→</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
