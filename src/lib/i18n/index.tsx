"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';
import { type Lang, type TDict, tr, t } from './translations';

// ── Context ───────────────────────────────────────────────────
interface I18nCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
  tr: TDict;
  t: (node: Record<Lang, string>) => string;
}

const I18nContext = createContext<I18nCtx>({
  lang: 'fr',
  setLang: () => {},
  tr,
  t: (node) => node.fr,
});

// ── Provider ──────────────────────────────────────────────────
export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>('fr');

  useEffect(() => {
    // Load saved language from localStorage
    try {
      const saved = localStorage.getItem('fx-lang') as Lang | null;
      if (saved && ['en','fr','de','es','it','nl','pl'].includes(saved)) {
        setLangState(saved);
      }
    } catch {}
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    try { localStorage.setItem('fx-lang', l); } catch {}
  };

  const tFn = (node: Record<Lang, string>) => t(node, lang);

  return (
    <I18nContext.Provider value={{ lang, setLang, tr, t: tFn }}>
      {children}
    </I18nContext.Provider>
  );
}

// ── Hook ──────────────────────────────────────────────────────
export function useTranslation() {
  return useContext(I18nContext);
}
