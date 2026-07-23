import { motion, MotionConfig } from 'motion/react';
import hl1 from '../../assets/pipo-hl-1.png';
import hl2 from '../../assets/pipo-hl-2.png';
import hl3 from '../../assets/pipo-hl-3.png';
import { revealVariants, revealViewport } from '../ui/motionPresets';
import { useLocale } from '../../i18n/LocaleContext.jsx';
import styles from './PipoHighlights.module.css';

const HL_IMAGES = [hl1, hl2, hl3];

function PipoHighlights() {
  const { t } = useLocale();
  const captions = t('pages.pipo.highlights');
  return (
    <MotionConfig reducedMotion="user">
      <motion.section
        className={styles.section}
        variants={revealVariants}
        initial="hidden"
        whileInView="show"
        viewport={revealViewport}
      >
        <ul className={styles.grid}>
          {HL_IMAGES.map((img, i) => (
            <li key={i} className={styles.card}>
              <img src={img} alt="" aria-hidden="true" className={styles.illus} />
              <p className={styles.caption}>{captions[i]}</p>
            </li>
          ))}
        </ul>
      </motion.section>
    </MotionConfig>
  );
}

export default PipoHighlights;
