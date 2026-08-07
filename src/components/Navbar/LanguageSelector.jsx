import { useEffect, useRef, useState } from 'react';
import { useLocale } from '../../i18n/LocaleContext.jsx';
import styles from './LanguageSelector.module.css';

/* Sem bandeiras: um idioma não mapeia 1:1 com um país (ex.: espanhol não é só
   Espanha). O seletor mostra o código no botão e o nome completo no menu. */
const LANGS = [
  { code: 'pt', label: 'Português (Brasil)', short: 'PT' },
  { code: 'en', label: 'English', short: 'EN' },
  { code: 'es', label: 'Español', short: 'ES' },
];

function GlobeIcon() {
  return (
    <svg
      className={styles.globe}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="8" cy="8" r="6.15" stroke="currentColor" strokeWidth="1.3" />
      <path
        d="M1.85 8h12.3M8 1.85c1.75 1.6 2.7 3.85 2.7 6.15S9.75 12.55 8 14.15C6.25 12.55 5.3 10.3 5.3 8S6.25 3.45 8 1.85Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LanguageSelector() {
  const { locale, setLocale, t } = useLocale();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const current = LANGS.find((l) => l.code === locale) ?? LANGS[0];

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
        <GlobeIcon />
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
          {LANGS.map(({ code, label }) => (
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
