import { useEffect, useRef, useState } from 'react';
import styles from './WhatsAppModal.module.css';

/**
 * Popup de captura antes do WhatsApp (landing de Ads).
 *
 * Segue o padrão de modal do projeto (AgentModal): escala a partir de
 * --modal-scale ao abrir, recua ao fechar, Esc e clique no overlay fecham.
 * Ao enviar, monta a mensagem já com o nome e abre o WhatsApp.
 *
 * O ganho pro Google Ads é medir o lead no envio do formulário — e não no
 * clique do botão, que dispara mesmo quando a pessoa desiste no WhatsApp.
 */

/* Formata os dígitos como (11) 96336-8080 conforme a pessoa digita */
function formatPhone(value) {
  const digits = value.replace(/\D/g, '').slice(0, 11);
  if (digits.length <= 2) return digits;
  const ddd = `(${digits.slice(0, 2)})`;
  if (digits.length <= 6) return `${ddd} ${digits.slice(2)}`;
  /* Celular tem 9 dígitos, fixo tem 8 — o corte muda conforme o tamanho */
  const split = digits.length > 10 ? 7 : 6;
  return `${ddd} ${digits.slice(2, split)}-${digits.slice(split)}`;
}

function WhatsAppModal({ state, onClose, onSubmit }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [touched, setTouched] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const nameRef = useRef(null);
  const modalRef = useRef(null);

  const phoneDigits = phone.replace(/\D/g, '');
  const nameOk = name.trim().length >= 2;
  const phoneOk = phoneDigits.length >= 10;
  const valid = nameOk && phoneOk;

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    /* Devolve o foco pro elemento que abriu o modal quando ele fecha */
    const opener = document.activeElement;
    nameRef.current?.focus();
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
      if (opener instanceof HTMLElement) opener.focus();
    };
  }, [onClose]);

  /* Mantém o Tab dentro do modal enquanto ele está aberto */
  const onKeyDown = (event) => {
    if (event.key !== 'Tab') return;
    const focusables = modalRef.current?.querySelectorAll(
      'button, input, [href]',
    );
    if (!focusables?.length) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTouched(true);
    if (!valid || submitting) return;
    /* onSubmit abre a sessão de tracking antes de redirecionar; o estado
       evita duplo envio e sinaliza que algo está acontecendo. */
    setSubmitting(true);
    Promise.resolve(onSubmit({ name: name.trim(), phone: phoneDigits })).catch(
      () => setSubmitting(false),
    );
  };

  const stateClass = state === 'open' ? styles.isOpen : styles.isClosing;

  return (
    <div
      className={`${styles.overlay} ${stateClass}`}
      onClick={onClose}
      role="presentation"
    >
      <div
        ref={modalRef}
        className={`${styles.modal} ${stateClass}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="wa-modal-title"
        onClick={(event) => event.stopPropagation()}
        onKeyDown={onKeyDown}
      >
        <button
          type="button"
          className={styles.close}
          aria-label="Fechar"
          onClick={onClose}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M6 6l12 12M18 6L6 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <p className={styles.eyebrow}>
          <span className={styles.dot} aria-hidden="true" />
          Quase lá · resposta em minutos
        </p>

        <h2 className={styles.title} id="wa-modal-title">
          Insira seus dados para ser direcionado para o WhatsApp
        </h2>

        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="wa-name">
              Seu nome
            </label>
            <input
              id="wa-name"
              ref={nameRef}
              className={styles.input}
              type="text"
              name="name"
              autoComplete="given-name"
              placeholder="Como podemos te chamar?"
              value={name}
              onChange={(event) => setName(event.target.value)}
              aria-invalid={touched && !nameOk}
            />
            {touched && !nameOk && (
              <p className={styles.error}>Digite seu nome.</p>
            )}
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="wa-phone">
              WhatsApp
            </label>
            <div className={styles.phoneRow}>
              <span className={styles.prefix} aria-hidden="true">
                🇧🇷 +55
              </span>
              <input
                id="wa-phone"
                className={`${styles.input} ${styles.phoneInput}`}
                type="tel"
                name="phone"
                inputMode="numeric"
                autoComplete="tel-national"
                placeholder="(11) 96336-8080"
                value={phone}
                onChange={(event) => setPhone(formatPhone(event.target.value))}
                aria-invalid={touched && !phoneOk}
              />
            </div>
            {touched && !phoneOk && (
              <p className={styles.error}>Digite seu WhatsApp com DDD.</p>
            )}
          </div>

          <button
            type="submit"
            className={styles.submit}
            disabled={submitting}
            aria-busy={submitting}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.9-4.45 9.9-9.91C21.95 6.45 17.5 2 12.04 2Zm5.8 14.16c-.24.68-1.42 1.31-1.96 1.36-.5.05-.98.23-3.3-.69-2.78-1.1-4.55-3.94-4.69-4.12-.14-.18-1.12-1.49-1.12-2.85s.71-2.02.96-2.3c.25-.27.55-.34.73-.34l.53.01c.17 0 .4-.06.62.48l.85 2.06c.07.14.12.31.02.5-.1.18-.15.29-.29.45l-.43.5c-.14.14-.29.3-.12.58.16.28.73 1.2 1.56 1.95 1.07.95 1.98 1.25 2.26 1.39.28.14.44.12.6-.07l.87-1c.2-.24.37-.19.62-.1l1.98.93c.25.12.41.18.47.28.06.1.06.58-.18 1.26Z" />
            </svg>
            {submitting ? 'Abrindo WhatsApp…' : 'Continuar no WhatsApp'}
            <span className={styles.arrow} aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
                <path
                  d="M3 9h11M10 4.5L14.5 9 10 13.5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>

          <p className={styles.legal}>
            Ao continuar, você concorda em receber contato da Squad no WhatsApp.
          </p>
        </form>
      </div>
    </div>
  );
}

export default WhatsAppModal;
