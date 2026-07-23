import { motion, MotionConfig } from 'motion/react';
import HighlightButton from '../ui/HighlightButton';
import iconCheckCircle from '../../assets/icon-check-circle.svg';
import mentoriasPreview from '../../assets/mentorias-preview.png';
import mentoriasPreviewTablet from '../../assets/mentorias-preview-tablet.png';
import mentoriasPreviewMobile from '../../assets/mentorias-preview-mobile.png';
import { revealVariants, revealViewport } from '../ui/motionPresets';
import { useLocale } from '../../i18n/LocaleContext.jsx';
import { nl2br } from '../../i18n/nl2br.jsx';
import styles from './Mentorias.module.css';

const MENTORIA_CTA =
  'https://wa.me/551150395056?text=Oi%21%20Vim%20pelo%20site%20da%20Squad%20e%20quero%20saber%20mais%20sobre%20as%20mentorias%20ao%20vivo.%20Pode%20me%20contar%20como%20funciona%3F%20%F0%9F%99%82';

function Mentorias() {
  const { t } = useLocale();
  const benefits = t('home.mentorias.benefits');
  return (
    <MotionConfig reducedMotion="user">
      <motion.section
        className={styles.section}
        variants={revealVariants}
        initial="hidden"
        whileInView="show"
        viewport={revealViewport}
      >
        <div className={styles.content}>
          <div className={styles.visual}>
            <picture>
              <source
                media="(max-width: 767px)"
                srcSet={mentoriasPreviewMobile}
              />
              <source
                media="(max-width: 1199px)"
                srcSet={mentoriasPreviewTablet}
              />
              <img
                src={mentoriasPreview}
                alt="Calendário do Squad.com com mentorias agendadas e uma mentoria ao vivo em andamento"
                className={styles.visualImage}
              />
            </picture>
          </div>

          {/* display: contents on tablet/mobile lets the visual slot between heading and benefits */}
          <div className={styles.textCol}>
            <div className={styles.heading}>
              <h2 className={styles.title}>{nl2br(t('home.mentorias.title'))}</h2>
              <p className={styles.subtitle}>{t('home.mentorias.subtitle')}</p>
            </div>

            <ul className={styles.benefits}>
              {benefits.map((text, index) => (
                <li key={index} className={styles.benefit}>
                  <img
                    src={iconCheckCircle}
                    alt=""
                    className={styles.benefitIcon}
                  />
                  <p className={styles.benefitText}>{text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <HighlightButton
          size="lg"
          href={MENTORIA_CTA}
          className={styles.ctaButton}
        >
          {t('home.mentorias.cta')}
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
        </HighlightButton>
      </motion.section>
    </MotionConfig>
  );
}

export default Mentorias;
