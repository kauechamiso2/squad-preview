import { motion, MotionConfig } from 'motion/react';
import Button from '../ui/Button';
import { WHATSAPP_CTA } from '../../links';
import bannerBg from '../../assets/cta-banner-bg.jpg';
import bannerBgTablet from '../../assets/cta-banner-bg-tablet.jpg';
import bannerBgMobile from '../../assets/cta-banner-bg-mobile.jpg';
import { revealVariants, revealViewport } from '../ui/motionPresets';
import { useLocale } from '../../i18n/LocaleContext.jsx';
import { nl2br } from '../../i18n/nl2br.jsx';
import styles from './CtaBanner.module.css';

function CtaBanner() {
  const { t } = useLocale();
  return (
    <MotionConfig reducedMotion="user">
      <motion.section
        className={styles.section}
        variants={revealVariants}
        initial="hidden"
        whileInView="show"
        viewport={revealViewport}
      >
        <div className={styles.banner}>
          <picture>
            <source media="(max-width: 767px)" srcSet={bannerBgMobile} />
            <source media="(max-width: 1199px)" srcSet={bannerBgTablet} />
            <img src={bannerBg} alt="" className={styles.background} />
          </picture>
          <div className={styles.content}>
            <h2 className={styles.title}>{nl2br(t('home.ctaBanner.title'))}</h2>
            <Button
              size="lg"
              variant="white"
              href={WHATSAPP_CTA}
              className={styles.ctaButton}
            >
              {t('cta.whatsapp')}
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                aria-hidden="true"
                className={styles.ctaArrow}
              >
                <path
                  d="M3 9h11M10 4.5L14.5 9 10 13.5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Button>
          </div>
        </div>
      </motion.section>
    </MotionConfig>
  );
}

export default CtaBanner;
