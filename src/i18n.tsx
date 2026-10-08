import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import type { Lang, Text } from './content/data';
import { ui, type UI } from './content/ui';

const STORAGE_KEY = 'lang';

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  ui: UI;
  /** Resuelve un texto bilingüe del contenido. */
  t: (text: Text) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

function initialLang(): Lang {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'es' || saved === 'en') return saved;
  } catch {
    // localStorage puede no estar disponible (modo privado)
  }
  return navigator.language.toLowerCase().startsWith('es') ? 'es' : 'en';
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(initialLang);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignorar
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo<LanguageContextValue>(
    () => ({ lang, setLang, ui: ui[lang], t: (text) => text[lang] }),
    [lang, setLang],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider');
  return ctx;
}
