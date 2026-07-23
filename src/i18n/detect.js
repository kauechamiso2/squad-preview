// Detecção de idioma. Padrão: inglês. Troca automaticamente para português se
// (1) o fuso do computador é um fuso brasileiro OU (2) o idioma do navegador é
// português. Espanhol é apenas manual (pelo seletor), nunca automático.

export const LOCALES = ['en', 'pt', 'es'];
export const DEFAULT_LOCALE = 'en';
const STORAGE_KEY = 'squad-locale';

// Fusos horários IANA do Brasil.
const BRAZIL_TIMEZONES = new Set([
  'America/Sao_Paulo',
  'America/Bahia',
  'America/Fortaleza',
  'America/Recife',
  'America/Araguaina',
  'America/Maceio',
  'America/Belem',
  'America/Santarem',
  'America/Manaus',
  'America/Boa_Vista',
  'America/Porto_Velho',
  'America/Eirunepe',
  'America/Rio_Branco',
  'America/Cuiaba',
  'America/Campo_Grande',
  'America/Noronha',
]);

function isBrazilianTimezone() {
  try {
    return BRAZIL_TIMEZONES.has(Intl.DateTimeFormat().resolvedOptions().timeZone);
  } catch {
    return false;
  }
}

function isPortugueseBrowser() {
  try {
    const langs =
      navigator.languages && navigator.languages.length
        ? navigator.languages
        : [navigator.language];
    return langs.some((l) => l && l.toLowerCase().startsWith('pt'));
  } catch {
    return false;
  }
}

export function getStoredLocale() {
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    return LOCALES.includes(v) ? v : null;
  } catch {
    return null;
  }
}

export function storeLocale(locale) {
  try {
    localStorage.setItem(STORAGE_KEY, locale);
  } catch {
    /* ignore (private mode etc.) */
  }
}

// Idioma auto-detectado (ignora escolha salva). Só faz sentido no cliente.
export function detectLocale() {
  if (isBrazilianTimezone() || isPortugueseBrowser()) return 'pt';
  return DEFAULT_LOCALE;
}

// Idioma efetivo ao carregar: escolha explícita do usuário vence; senão, auto.
export function resolveInitialLocale() {
  return getStoredLocale() || detectLocale();
}
