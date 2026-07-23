import { useState } from 'react';
import { motion, MotionConfig } from 'motion/react';
import { revealVariants, revealViewport } from '../ui/motionPresets';
import { useLocale } from '../../i18n/LocaleContext.jsx';
import { nl2br } from '../../i18n/nl2br.jsx';
import styles from './Faq.module.css';

function ChevronIcon({ open }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={`${styles.chevron} ${open ? styles.chevronOpen : ''}`}
    >
      {/* Symmetric path + vertical flip animates in every browser
          (CSS `d:` morphing is Chromium-only) */}
      <path
        d="M6 9l6 6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

function Faq() {
  const { t } = useLocale();
  const items = t('home.faq.items');
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <MotionConfig reducedMotion="user">
      <motion.section
        className={styles.section}
        variants={revealVariants}
        initial="hidden"
        whileInView="show"
        viewport={revealViewport}
      >
        <h2 className={styles.title}>{nl2br(t('home.faq.title'))}</h2>

        <ul className={styles.list}>
          {items.map(({ question, answer }, index) => {
            const open = openIndex === index;
            return (
              <li key={index} className={styles.item}>
                <button
                  type="button"
                  className={styles.questionRow}
                  aria-expanded={open}
                  onClick={() => toggle(index)}
                >
                  <span className={styles.question}>{question}</span>
                  <ChevronIcon open={open} />
                </button>
                <div
                  className={`${styles.answerWrap} ${
                    open ? styles.answerWrapOpen : ''
                  }`}
                >
                  <div className={styles.answerInner}>
                    <p className={styles.answer}>{answer}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </motion.section>
    </MotionConfig>
  );
}

export default Faq;
