import { useState } from 'react';
import { motion, MotionConfig } from 'motion/react';
import { revealVariants, revealViewport } from '../ui/motionPresets';
import { useLocale } from '../../i18n/LocaleContext.jsx';
import { nl2br } from '../../i18n/nl2br.jsx';
import styles from './WazFaq.module.css';

function WazFaq() {
  const { t } = useLocale();
  const faqs = t('pages.waz.faq');
  const [open, setOpen] = useState(0);

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

        <div className={styles.list}>
          {faqs.map(({ q, a }, i) => {
            const isOpen = open === i;
            return (
              <div key={q} className={styles.item}>
                <button
                  type="button"
                  className={`${styles.question} ${isOpen ? styles.questionOpen : ''}`}
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  <span>{q}</span>
                  <svg
                    className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M6 9l6 6 6-6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <div
                  className={`${styles.answerWrap} ${isOpen ? styles.answerOpen : ''}`}
                >
                  <p className={styles.answer}>{a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </motion.section>
    </MotionConfig>
  );
}

export default WazFaq;
