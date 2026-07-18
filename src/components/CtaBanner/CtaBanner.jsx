import Button from '../ui/Button';
import { WHATSAPP_CTA } from '../../links';
import bannerBg from '../../assets/cta-banner-bg.jpg';
import bannerBgTablet from '../../assets/cta-banner-bg-tablet.jpg';
import bannerBgMobile from '../../assets/cta-banner-bg-mobile.jpg';
import styles from './CtaBanner.module.css';

function CtaBanner() {
  return (
    <section className={styles.section}>
      <div className={styles.banner}>
        <picture>
          <source media="(max-width: 767px)" srcSet={bannerBgMobile} />
          <source media="(max-width: 1199px)" srcSet={bannerBgTablet} />
          <img src={bannerBg} alt="" className={styles.background} />
        </picture>
        <div className={styles.content}>
          <h2 className={styles.title}>
            Desbloqueie
            <br />
            o potencial da sua
            <br />
            empresa
          </h2>
          <Button
            size="lg"
            variant="white"
            href={WHATSAPP_CTA}
            className={styles.ctaButton}
          >
            Falar no WhatsApp
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
    </section>
  );
}

export default CtaBanner;
