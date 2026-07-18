import { useEffect } from 'react';
import styles from './AgentModal.module.css';

/**
 * Per-tool agent modal (transitions.dev modal pattern): scales up from
 * --modal-scale on open, dips back on close. Each tool has its own modal —
 * rich content when `tool.modal` is present, otherwise a simple "em breve".
 * The media slot shows a product screenshot when available, or the agent
 * photo with an "em breve" pill for upcoming tools.
 * `accent` (from the agent) tints the quote bar, section labels and icons.
 */
function AgentModal({ agent, tool, state, onClose }) {
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
  const accent = agent.accent || '#f45dac';
  const m = tool.modal;

  return (
    <div
      className={`${styles.overlay} ${stateClass}`}
      onClick={onClose}
      role="presentation"
    >
      <div
        className={`${styles.modal} ${stateClass}`}
        style={{ '--accent': accent }}
        role="dialog"
        aria-modal="true"
        aria-label={m ? m.title : tool.modalLabel || tool.label}
        onClick={(event) => event.stopPropagation()}
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

        <div className={styles.scrollArea}>
        {m ? (
          <>
            <h2 className={styles.title}>{m.title}</h2>
            <p className={styles.subtitle}>{m.subtitle}</p>

            {/* Media slot: product screenshot, or the agent photo + an
                "em breve" pill for upcoming tools */}
            {tool.image ? (
              <img
                className={styles.screenshot}
                src={tool.image}
                alt={`Tela da ferramenta ${m.title}`}
              />
            ) : tool.comingSoon ? (
              <div className={styles.comingMedia}>
                <img
                  src={agent.avatar.src}
                  alt={agent.name}
                  className={styles.comingAvatar}
                />
                <span className={styles.comingPill}>Em breve</span>
              </div>
            ) : null}

            <blockquote className={styles.quote}>{m.quote}</blockquote>

            <p className={styles.sectionLabel}>Sobre a ferramenta</p>
            <div className={styles.featureGrid}>
              {m.features.map(({ Icon, title, text }) => (
                <div key={title} className={styles.featureCard}>
                  <span className={styles.featureIcon}>
                    <Icon size={22} weight="regular" />
                  </span>
                  <h3 className={styles.featureTitle}>{title}</h3>
                  <p className={styles.featureText}>{text}</p>
                </div>
              ))}
            </div>
          </>
        ) : tool.comingSoon ? (
          /* Upcoming tool: agent photo above a soft "Em breve..." note */
          <div className={styles.soon}>
            <img
              src={agent.avatar.src}
              alt={agent.name}
              className={styles.soonAvatar}
            />
            <p className={styles.soonText}>Em breve...</p>
          </div>
        ) : (
          <>
            <h2 className={styles.title}>{tool.modalLabel || tool.label}</h2>
            {tool.image && (
              <img
                className={styles.screenshot}
                src={tool.image}
                alt={`Tela da ferramenta ${tool.modalLabel || tool.label}`}
              />
            )}
          </>
        )}
        </div>
      </div>
    </div>
  );
}

export default AgentModal;
