"use client";

import { usePathname } from "next/navigation";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import { tx as txFn, type Lang, type LText } from "@/lib/content";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (o: LText | string | undefined | null) => string;
};

const LangCtx = createContext<Ctx>({
  lang: "ru",
  setLang: () => undefined,
  t: (o) => txFn(o, "ru"),
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("ru");
  const pathname = usePathname() ?? "/";

  useEffect(() => {
    const stored = typeof window !== "undefined" ? window.localStorage.getItem("lang") : null;
    if (stored === "ru" || stored === "en") setLangState(stored);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;
    const titles: Record<string, Record<Lang, string>> = {
      "/": {
        ru: "DMX — стоимость фасадного освещения и анимации",
        en: "DMX — facade lighting and animation pricing",
      },
      "/services": {
        ru: "Услуги · DMX",
        en: "Services · DMX",
      },
      "/pricing": {
        ru: "Стоимость фасадного освещения и анимации · DMX",
        en: "Facade lighting and animation pricing · DMX",
      },
    };
    const title = titles[pathname]?.[lang];
    if (title) document.title = title;
  }, [lang, pathname]);

  const setLang = useCallback((l: Lang) => setLangState(l), []);
  const t = useCallback((o: LText | string | undefined | null) => txFn(o, lang), [lang]);

  const value = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t]);
  return <LangCtx.Provider value={value}>{children}</LangCtx.Provider>;
}

export const useLang = () => useContext(LangCtx);
