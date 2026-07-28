import { useCallback, useEffect, useRef, useState } from 'react';
import { motion, MotionConfig } from 'motion/react';
import PricingDetailModal from './PricingDetailModal';
import ShineButton from '../ui/ShineButton';
import { getPlans } from './plans';
import { revealVariants, revealViewport } from '../ui/motionPresets';
import { useLocale } from '../../i18n/LocaleContext.jsx';
import { nl2br } from '../../i18n/nl2br.jsx';
import styles from './Pricing.module.css';

/* Keep in sync with --modal-close-dur */
const MODAL_CLOSE_MS = 150;

function CheckIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={styles.iconCheck}
    >
      <path
        d="M5 12.5l4.5 4.5L19 7.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function XIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={styles.iconX}
    >
      <path
        d="M7 7l10 10M17 7L7 17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Pricing() {
  const { locale, t } = useLocale();
  const plans = getPlans(locale);
  const trackRef = useRef(null);
  /* Feature detail modal: opens with the clicked feature's info */
  const [modalFeature, setModalFeature] = useState(null);
  const [modalState, setModalState] = useState('open');

  const openModal = (feature) => {
    setModalFeature(feature);
    setModalState('open');
  };

  const closeModal = useCallback(() => {
    setModalState('closing');
    setTimeout(() => setModalFeature(null), MODAL_CLOSE_MS);
  }, []);

  /* Whenever the cards overflow horizontally (desktop included),
     keep the featured plan centered in the visible area */
  useEffect(() => {
    const centerFeatured = () => {
      const track = trackRef.current;
      if (!track || track.scrollWidth <= track.clientWidth) return;
      const featured = track.querySelector('[data-featured="true"]');
      if (!featured) return;
      track.scrollLeft =
        featured.offsetLeft - (track.clientWidth - featured.offsetWidth) / 2;
    };
    centerFeatured();
    window.addEventListener('resize', centerFeatured);
    return () => window.removeEventListener('resize', centerFeatured);
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <motion.section
        id="planos"
        className={styles.section}
        variants={revealVariants}
        initial="hidden"
        whileInView="show"
        viewport={revealViewport}
      >
      <div className={styles.heading}>
        <h2 className={styles.title}>{nl2br(t('home.pricing.title'))}</h2>
        <p className={styles.subtitle}>{t('home.pricing.subtitle')}</p>
      </div>

      <div className={styles.track} ref={trackRef}>
        {plans.map((plan) => (
          <article
            key={plan.id}
            data-featured={plan.featured}
            className={`${styles.card} ${plan.featured ? styles.featured : ''}`}
          >
            {plan.featured && <span className={styles.badge}>{plan.badge}</span>}

            <div className={styles.top}>
              <div className={styles.planHeading}>
                <p
                  className={`${styles.planName} ${
                    plan.featured ? styles.planNameFeatured : ''
                  }`}
                >
                  {plan.name}
                </p>
                {plan.description && (
                  <p className={styles.planDescription}>{plan.description}</p>
                )}
              </div>
              <div className={styles.priceBlock}>
                {plan.priceLabel && (
                  <p className={styles.priceLabel}>{plan.priceLabel}</p>
                )}
                <p className={styles.price}>
                  {plan.price}
                  {plan.period && (
                    <span className={styles.period}>{plan.period}</span>
                  )}
                </p>
              </div>

              {plan.cta.variant === 'pro' ? (
                <ShineButton href={plan.cta.href} className={styles.fullWidthCta}>
                  {plan.cta.label}
                </ShineButton>
              ) : (
                <a
                  href={plan.cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.outlineCta}
                >
                  <span className={styles.proCtaLabel}>
                    {plan.cta.label}
                    {plan.cta.arrow && (
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        aria-hidden="true"
                        className={styles.proCtaArrow}
                      >
                        <path
                          d="M3 9h11M10 4.5L14.5 9 10 13.5"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </span>
                </a>
              )}
            </div>

            <ul className={styles.features}>
              {plan.features.map(({ label, included, strong, details }) => (
                <li key={label} className={styles.feature}>
                  <div className={styles.featureRow}>
                    {included ? <CheckIcon /> : <XIcon />}
                    <span
                      className={`${styles.featureLabel} ${
                        strong ? styles.featureStrong : ''
                      } ${included ? '' : styles.featureExcluded}`}
                    >
                      {label}
                    </span>
                    {details && (
                      <button
                        type="button"
                        className={styles.expandButton}
                        aria-label={`${t('home.pricing.detail')} ${label}`}
                        onClick={() => openModal({ label, details })}
                      >
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          aria-hidden="true"
                        >
                          <path
                            d="M6 1.5v9M1.5 6h9"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                          />
                        </svg>
                      </button>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      {modalFeature && (
        <PricingDetailModal
          feature={modalFeature}
          state={modalState}
          onClose={closeModal}
        />
      )}
      </motion.section>
    </MotionConfig>
  );
}

export default Pricing;
