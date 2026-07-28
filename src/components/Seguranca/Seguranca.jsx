import { useEffect, useRef, useState } from 'react';
import { motion, MotionConfig } from 'motion/react';
import { EyeSlash, LockKey, ShieldCheck } from '@phosphor-icons/react';
import { revealVariants, revealViewport } from '../ui/motionPresets';
import { useLocale } from '../../i18n/LocaleContext.jsx';
import { nl2br } from '../../i18n/nl2br.jsx';
import styles from './Seguranca.module.css';

/* Ícones por cartão; título e texto vêm de home.seguranca.features (por índice). */
const ICONS = [ShieldCheck, LockKey, EyeSlash];

function Seguranca() {
  const { t } = useLocale();
  const features = t('home.seguranca.features');
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
    <MotionConfig reducedMotion="user">
      <motion.section
        className={styles.section}
        variants={revealVariants}
        initial="hidden"
        whileInView="show"
        viewport={revealViewport}
      >
        <h2 className={styles.title}>{nl2br(t('home.seguranca.title'))}</h2>

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
            {features.flatMap(({ title, text }, index) => {
              const Icon = ICONS[index];
              const card = (
                <li
                  key={`card-${runKey}-${index}`}
                  /* Animation class only after the observer confirms a view:
                     if it never fires, the content simply stays visible */
                  className={
                    runKey > 0 ? `${styles.card} ${styles.cardIn}` : styles.card
                  }
                  style={runKey > 0 ? { animationDelay: `${index * 0.12}s` } : undefined}
                >
                  <Icon size={24} weight="regular" className={styles.cardIcon} />
                  <p className={styles.cardTitle}>{title}</p>
                  <p className={styles.cardText}>{text}</p>
                </li>
              );
              /* A divider sits between columns, not before the first one */
              if (index === 0) return [card];
              return [
                <li
                  key={`divider-${runKey}-${index}`}
                  className={styles.divider}
                  aria-hidden="true"
                />,
                card,
              ];
            })}
          </ul>
        </div>
      </motion.section>
    </MotionConfig>
  );
}

export default Seguranca;
