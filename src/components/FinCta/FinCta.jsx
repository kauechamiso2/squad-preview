import { motion, MotionConfig } from 'motion/react';
import Button from '../ui/Button';
import VidalyticsVideo from '../VidalyticsVideo/VidalyticsVideo';
import { WHATSAPP_CONTACT } from '../../links';
import { revealVariants, revealViewport } from '../ui/motionPresets';
import { useLocale } from '../../i18n/LocaleContext.jsx';
import styles from './FinCta.module.css';

function FinCta() {
  const { t } = useLocale();
  return (
    <MotionConfig reducedMotion="user">
      <motion.section
        className={styles.cta}
        variants={revealVariants}
        initial="hidden"
        whileInView="show"
        viewport={revealViewport}
      >
        <VidalyticsVideo embedId="1z0e7116xAMOLtq6" />

        <div className={styles.overlay} aria-hidden="true" />

        <div className={styles.content}>
          <h2 className={styles.title}>{t('pages.fin.cta.title')}</h2>
          <Button size="lg" href={WHATSAPP_CONTACT} withArrow>
            {t('pages.fin.cta.button')}
          </Button>
        </div>
      </motion.section>
    </MotionConfig>
  );
}

export default FinCta;
