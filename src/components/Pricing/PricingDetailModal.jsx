import { useEffect } from 'react';
import styles from './PricingDetailModal.module.css';

function FeatureDetails({ details }) {
  if (details.type === 'text') {
    return <p className={styles.detailText}>{details.text}</p>;
  }
  if (details.type === 'list') {
    return (
      <ul className={styles.detailList}>
        {details.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }
  return (
    <div className={styles.detailGroups}>
      {details.groups.map(({ title, items }) => (
        <div key={title} className={styles.detailGroup}>
          <p className={styles.detailGroupTitle}>{title}</p>
          {items.map((item) => (
            <p key={item} className={styles.detailGroupItem}>
              {item}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
}

/**
 * Feature detail modal (transitions.dev modal pattern): scales up from
 * --modal-scale on open, dips back on close. `state` is "open" or
 * "closing"; the parent unmounts it after --modal-close-dur.
 */
function PricingDetailModal({ feature, state, onClose }) {
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
        aria-label={feature.label}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className={styles.close}
          aria-label="Fechar"
          onClick={onClose}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M6 6l12 12M18 6L6 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <p className={styles.title}>{feature.label}</p>
        <FeatureDetails details={feature.details} />
      </div>
    </div>
  );
}

export default PricingDetailModal;
