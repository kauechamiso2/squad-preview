import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { DEFAULT_LOCALE, resolveInitialLocale, storeLocale } from './detect';
import { strings } from './strings';

// Idioma de origem do conteúdo: qualquer chave ainda não traduzida cai para o
// português (nunca mostra a chave crua nem fica em branco durante a tradução).
const SOURCE_LOCALE = 'pt';

const LocaleContext = createContext({
  locale: DEFAULT_LOCALE,
  setLocale: () => {},
  t: (k) => k,
});

function lookup(dict, key) {
  return key.split('.').reduce((o, k) => (o == null ? undefined : o[k]), dict);
}

export function LocaleProvider({ children }) {
  // Inicia no padrão para o primeiro render do cliente bater com o HTML do SSR
  // (evita hydration mismatch); a detecção real é aplicada logo após montar.
  const [locale, setLocaleState] = useState(DEFAULT_LOCALE);

  useEffect(() => {
    const resolved = resolveInitialLocale();
    if (resolved !== DEFAULT_LOCALE) setLocaleState(resolved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const value = useMemo(() => {
    const setLocale = (next) => {
      storeLocale(next);
      setLocaleState(next);
    };
    const t = (key) => {
      const val = lookup(strings[locale], key);
      if (val != null) return val;
      const fallback = lookup(strings[SOURCE_LOCALE], key);
      return fallback != null ? fallback : key;
    };
    return { locale, setLocale, t };
  }, [locale]);

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  return useContext(LocaleContext);
}
