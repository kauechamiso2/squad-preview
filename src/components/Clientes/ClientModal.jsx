import { useEffect } from 'react';
import VidalyticsEmbed from './VidalyticsEmbed';
import styles from './ClientModal.module.css';

/**
 * Video-case modal (transitions.dev modal pattern): scales up from
 * --modal-scale on open, dips back down on close. `state` is either
 * "open" or "closing" — the parent unmounts it after --modal-close-dur.
 */
function ClientModal({ client, state, onClose }) {
  useEffect(() => {
    const onKey = (event) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const stateClass = state === 'open' ? styles.isOpen : styles.isClosing;

  return (
    <div
      className={`${styles.overlay} ${stateClass}`}
      onClick={onClose}
      role="presentation"
    >
      <div
        className={`${styles.modal} ${stateClass}`}
        role="dialog"
        aria-modal="true"
        aria-label={`Case de ${client.name}`}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className={styles.close}
          aria-label="Fechar"
          onClick={onClose}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
            <path
              d="M5 5l10 10M15 5L5 15"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <VidalyticsEmbed
          className={styles.video}
          embedId={client.vidalytics.id}
          embedUrl={client.vidalytics.url}
        />

        <div className={styles.info}>
          <p className={styles.quote}>{client.quote}</p>
          <p className={styles.person}>
            <span className={styles.name}>{client.name}</span>
            <span className={styles.role}> — {client.role}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ClientModal;
