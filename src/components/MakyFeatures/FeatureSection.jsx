import { useLocale } from '../../i18n/LocaleContext.jsx';
import styles from './FeatureSection.module.css';

function FeatureSection({
  eyebrow,
  title,
  paragraph,
  image,
  reverse = false,
  cta,
  ctaDisabled = false,
  hideCta = false,
  eyebrowGradient,
  onCta,
}) {
  const { t } = useLocale();
  const ctaLabel = cta ?? t('common.learnMore');
  return (
    <section className={`${styles.section} ${reverse ? styles.reverse : ''}`}>
      <div className={styles.text}>
        <p
          className={styles.eyebrow}
          style={eyebrowGradient ? { backgroundImage: eyebrowGradient } : undefined}
        >
          {eyebrow}
        </p>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.paragraph}>{paragraph}</p>
        {!hideCta && (
          <button
            type="button"
            className={`${styles.cta} ${ctaDisabled ? styles.ctaDisabled : ''}`}
            onClick={onCta}
          >
            {ctaLabel}
            {!ctaDisabled && (
              <span className={styles.arrow} aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
                  <path
                    d="M3 9h11M10 4.5L14.5 9 10 13.5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            )}
          </button>
        )}
      </div>

      <div className={styles.visual}>
        <img src={image} alt="" aria-hidden="true" className={styles.image} />
      </div>
    </section>
  );
}

export default FeatureSection;
