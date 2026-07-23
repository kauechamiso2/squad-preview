import { motion, MotionConfig } from 'motion/react';
import thumbsDown from '../../assets/icon-thumbs-down.svg';
import thumbsUp from '../../assets/icon-thumbs-up.svg';
import { revealVariants, revealViewport } from '../ui/motionPresets';
import { useLocale } from '../../i18n/LocaleContext.jsx';
import { nl2br } from '../../i18n/nl2br.jsx';
import styles from './MakyCompare.module.css';

function Card({ label, items, icon }) {
  return (
    <div className={styles.card}>
      <p className={styles.cardLabel}>{label}</p>
      {items.map((text) => (
        <div key={text} className={styles.row}>
          <img src={icon} alt="" aria-hidden="true" className={styles.icon} />
          <p className={styles.rowText}>{text}</p>
        </div>
      ))}
    </div>
  );
}

function MakyCompare() {
  const { t } = useLocale();
  const c = t('pages.maky.compare');
  return (
    <MotionConfig reducedMotion="user">
      <motion.section
        className={styles.section}
        variants={revealVariants}
        initial="hidden"
        whileInView="show"
        viewport={revealViewport}
      >
        <h2 className={styles.title}>
          {c.pre}
          <span className={styles.gradient}>Maky</span>
          {nl2br(c.post)}
        </h2>

        <div className={styles.cards}>
          <Card label={c.withoutLabel} items={c.without} icon={thumbsDown} />
          <Card label={c.withLabel} items={c.with} icon={thumbsUp} />
        </div>
      </motion.section>
    </MotionConfig>
  );
}

export default MakyCompare;
