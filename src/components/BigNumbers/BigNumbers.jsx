import { useEffect, useRef, useState } from 'react';
import { motion, MotionConfig } from 'motion/react';
import { revealVariants, revealViewport } from '../ui/motionPresets';
import { useLocale } from '../../i18n/LocaleContext.jsx';
import styles from './BigNumbers.module.css';

/* Visual-only por cartão (figura + gradiente + cores do hover). label,
   description e suffix vêm das traduções (home.stats.items) pelo índice. */
const STATS = [
  { gradient: 'gradientRoi', colors: ['#7cc870', '#b3ddf2', '#ffd2ea'], value: '3,7x' },
  { gradient: 'gradientReceita', colors: ['#6d7cff', '#b3ddf2', '#f45dac'], value: '88%' },
  { gradient: 'gradientHoras', colors: ['#6d7cff', '#0091ff', '#eac764'], value: '9h' },
  { gradient: 'gradientPayback', colors: ['#7cc870', '#6d7cff', '#6d7cff'], value: '95%' },
];

/* Public sources backing each stat above, in the same order */
const SOURCES = [
  {
    label: 'IDC InfoBrief / Microsoft (2024)',
    url: 'https://info.microsoft.com/ww-landing-business-opportunity-of-ai.html',
  },
  {
    label: 'NVIDIA State of AI (2026)',
    url: 'https://blogs.nvidia.com/blog/state-of-ai-report-2026/',
  },
  {
    label: 'Forrester TEI',
    url: 'https://tei.forrester.com/go/microsoft/M365Copilot/',
  },
  {
    label: 'MIT NANDA / Fortune (2025)',
    url: 'https://fortune.com/2025/08/18/mit-report-95-percent-generative-ai-pilots-at-companies-failing-cfo/',
  },
];

/* transitions.dev number pop-in: each character enters with a blurred
   slide, the last two ride in staggered */
function PopInValue({ value, animate }) {
  const chars = value.split('');
  return (
    <span
      className={`${styles.digitGroup} ${animate ? styles.isAnimating : ''}`}
    >
      {chars.map((char, index) => (
        <span
          key={index}
          className={styles.digit}
          data-stagger={
            index === chars.length - 2
              ? '1'
              : index === chars.length - 1
                ? '2'
                : undefined
          }
        >
          {char}
        </span>
      ))}
    </span>
  );
}

function BigNumbers() {
  const { t, locale } = useLocale();
  const items = t('home.stats.items');
  // Inglês usa ponto decimal (3.7x); PT e ES mantêm a vírgula (3,7x).
  const fmt = (v) => (locale === 'en' ? v.replace(',', '.') : v);
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  /* Fire the pop-in once, when the cards scroll into view */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <motion.section
        className={styles.section}
        ref={sectionRef}
        variants={revealVariants}
        initial="hidden"
        whileInView="show"
        viewport={revealViewport}
      >
        <div className={styles.heading}>
          <h2 className={styles.title}>{t('home.stats.title')}</h2>
          <p className={styles.subtitle}>{t('home.stats.subtitle')}</p>
        </div>

        <div className={styles.bottom}>
          <ul className={styles.cards}>
            {STATS.map(({ gradient, colors, value }, i) => {
              const { label, suffix, description } = items[i];
              return (
                <li
                  key={label}
                  className={styles.card}
                  style={{
                    '--stroke-1': colors[0],
                    '--stroke-2': colors[1],
                    '--stroke-3': colors[2],
                  }}
                >
                  <div className={styles.stat}>
                    <p className={`${styles.label} ${styles[gradient]}`}>{label}</p>
                    <p className={styles.value}>
                      <PopInValue value={fmt(value)} animate={visible} />
                      {suffix && <span className={styles.suffix}>{suffix}</span>}
                    </p>
                  </div>
                  <p className={styles.description}>{description}</p>
                </li>
              );
            })}
          </ul>

          <p className={styles.sources}>
            {t('home.stats.sourcesLabel')}{' '}
            {SOURCES.map(({ label, url }, index) => (
              <span key={url}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.sourceLink}
                >
                  {label}
                </a>
                {index < SOURCES.length - 2
                  ? ', '
                  : index === SOURCES.length - 2
                    ? t('home.stats.and')
                    : ''}
              </span>
            ))}{' '}
            {t('home.stats.sourcesSuffix')}
          </p>
        </div>
      </motion.section>
    </MotionConfig>
  );
}

export default BigNumbers;
