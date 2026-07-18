import { useEffect, useRef, useState } from 'react';
import { EyeSlash, LockKey, ShieldCheck } from '@phosphor-icons/react';
import styles from './Seguranca.module.css';

const FEATURES = [
  {
    title: 'Conformidade SOC II',
    Icon: ShieldCheck,
    text: 'Protegemos suas informações com práticas de segurança líderes do setor. Somos compatíveis com SOC II Tipo I de ponta a ponta.',
  },
  {
    title: 'Criptografia',
    Icon: LockKey,
    text: 'Todos os seus dados são criptografados em repouso e em trânsito, com proteção de nível bancário para as informações sensíveis da sua empresa.',
  },
  {
    title: 'Sem treinar modelos',
    Icon: EyeSlash,
    text: 'Seus dados ficam seguros e nunca são usados para treinar modelos de IA. Sua informação é sua, e continua sendo.',
  },
];

function Seguranca() {
  const panelRef = useRef(null);
  const [runKey, setRunKey] = useState(0);

  /* Replays the blur-in of the card text every time the panel enters
     the viewport. Fail-safe: the cards are visible by default — the
     animation only plays on top (remount via key), so the content
     never stays hidden if the observer doesn't fire. */
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const panel = panelRef.current;
    if (!panel) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setRunKey((key) => key + 1);
      },
      { threshold: 0.35 },
    );
    observer.observe(panel);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>
        Segurança de nível corporativo
        <br />
        está no nosso DNA
      </h2>

      <div className={styles.panelBox}>
        {/* Full-width line crossing the block behind the panel */}
        <span className={styles.line} aria-hidden="true" />
        <span className={`${styles.dot} ${styles.dotLeft}`} aria-hidden="true" />
        <span
          className={`${styles.dot} ${styles.dotRight}`}
          aria-hidden="true"
        />

        {/* Light streaks running along the side lines, in sync with the
            highlight orbiting the panel border */}
        <span className={styles.sweepLeft} aria-hidden="true" />
        <span className={styles.sweepRight} aria-hidden="true" />

        <ul className={styles.panel} ref={panelRef}>
          {FEATURES.map(({ title, Icon, text }, index) => (
            <li
              key={`${runKey}-${index}`}
              /* Animation class only after the observer confirms a view:
                 if it never fires, the content simply stays visible */
              className={
                runKey > 0 ? `${styles.card} ${styles.cardIn}` : styles.card
              }
            >
              <div className={styles.cardHead}>
                <Icon size={26} weight="regular" className={styles.cardIcon} />
                <p className={styles.cardTitle}>{title}</p>
              </div>
              <p className={styles.cardText}>{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Seguranca;
