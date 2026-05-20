"use client";

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

  useEffect(() => {
    const stored = typeof window !== "undefined" ? window.localStorage.getItem("lang") : null;
    if (stored === "ru" || stored === "en") setLangState(stored);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;
    const map: Record<string, string> = {
      "LUMEN ARCHITECTURE — DMX, фасадная анимация, медиафасады":
        "LUMEN ARCHITECTURE — DMX, facade animation, media facades",
      "Услуги · LUMEN": "Services · LUMEN",
      "Стоимость DMX, фасадной анимации и медиафасадов · LUMEN":
        "DMX, facade animation and media facade pricing · LUMEN",
      "Кейсы и контакты · LUMEN": "Cases & contacts · LUMEN",
    };
    if (lang === "en") {
      const en = map[document.title];
      if (en) document.title = en;
    } else {
      const ru = Object.entries(map).find(([, v]) => v === document.title)?.[0];
      if (ru) document.title = ru;
    }
  }, [lang]);

  const setLang = useCallback((l: Lang) => setLangState(l), []);
  const t = useCallback((o: LText | string | undefined | null) => txFn(o, lang), [lang]);

  const value = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t]);
  return <LangCtx.Provider value={value}>{children}</LangCtx.Provider>;
}

export const useLang = () => useContext(LangCtx);
