import { motion, MotionConfig } from 'motion/react';
import hl1 from '../../assets/opy-hl-1.png';
import hl2 from '../../assets/opy-hl-2.png';
import hl3 from '../../assets/opy-hl-3.png';
import hl1En from '../../assets/opy-hl-1-en.png';
import hl2En from '../../assets/opy-hl-2-en.png';
import hl3En from '../../assets/opy-hl-3-en.png';
import { revealVariants, revealViewport } from '../ui/motionPresets';
import { useLocale } from '../../i18n/LocaleContext.jsx';
import styles from './OpyHighlights.module.css';

const HL_IMAGES = [hl1, hl2, hl3];
const HL_IMAGES_EN = [hl1En, hl2En, hl3En];

function OpyHighlights() {
  const { t, locale } = useLocale();
  const captions = t('pages.opy.highlights');
  // Assets só têm PT e EN; espanhol usa a versão em inglês.
  const images = locale !== 'pt' ? HL_IMAGES_EN : HL_IMAGES;
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
          {images.map((img, i) => (
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

export default OpyHighlights;
