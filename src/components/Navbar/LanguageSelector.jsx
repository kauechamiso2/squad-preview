import { useEffect, useRef, useState } from 'react';
import { useLocale } from '../../i18n/LocaleContext.jsx';
import styles from './LanguageSelector.module.css';

/* Bandeiras como SVG inline (renderizam em qualquer sistema, diferente dos
   emojis de bandeira que viram texto no Windows). Cantos arredondados via CSS
   em .flag. */
function FlagBR() {
  return (
    <svg className={styles.flag} viewBox="0 0 20 14" aria-hidden="true">
      <rect width="20" height="14" fill="#009b3a" />
      <path d="M10 2.1 17.6 7 10 11.9 2.4 7z" fill="#fedf00" />
      <circle cx="10" cy="7" r="2.5" fill="#002776" />
    </svg>
  );
}

function FlagUS() {
  return (
    <svg className={styles.flag} viewBox="0 0 20 14" aria-hidden="true">
      <rect width="20" height="14" fill="#fff" />
      <g fill="#b22234">
        <rect width="20" height="2" y="0" />
        <rect width="20" height="2" y="4" />
        <rect width="20" height="2" y="8" />
        <rect width="20" height="2" y="12" />
      </g>
      <rect width="9" height="8" fill="#3c3b6e" />
    </svg>
  );
}

function FlagES() {
  return (
    <svg className={styles.flag} viewBox="0 0 20 14" aria-hidden="true">
      <rect width="20" height="14" fill="#c60b1e" />
      <rect width="20" height="7" y="3.5" fill="#ffc400" />
    </svg>
  );
}

/* Por enquanto é só visual — o site ainda não tem tradução; o seletor guarda a
   escolha em estado local. Quando houver i18n, conectar `lang`. */
const LANGS = [
  { code: 'pt', label: 'Português', short: 'PT', Flag: FlagBR },
  { code: 'en', label: 'English', short: 'EN', Flag: FlagUS },
  { code: 'es', label: 'Español', short: 'ES', Flag: FlagES },
];

function LanguageSelector() {
  const { locale, setLocale, t } = useLocale();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const current = LANGS.find((l) => l.code === locale) ?? LANGS[0];
  const CurrentFlag = current.Flag;

  useEffect(() => {
    if (!open) return undefined;
    const onDocClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('mousedown', onDocClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDocClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <div className={styles.wrap} ref={ref}>
      <button
        type="button"
        className={styles.trigger}
        aria-label={t('lang.select')}
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <CurrentFlag />
        <span className={styles.code}>{current.short}</span>
        <svg
          className={`${styles.chev} ${open ? styles.chevOpen : ''}`}
          width="12"
          height="12"
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M4 6l4 4 4-4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {open && (
        <ul className={styles.menu} role="listbox">
          {LANGS.map(({ code, label, Flag }) => (
            <li key={code}>
              <button
                type="button"
                role="option"
                aria-selected={code === locale}
                className={`${styles.option} ${code === locale ? styles.optionActive : ''}`}
                onClick={() => {
                  setLocale(code);
                  setOpen(false);
                }}
              >
                <Flag />
                <span>{label}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default LanguageSelector;
