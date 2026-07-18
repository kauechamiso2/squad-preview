import Button from '../ui/Button';
import VidalyticsVideo from '../VidalyticsVideo/VidalyticsVideo';
import { WHATSAPP_CONTACT } from '../../links';
import styles from './WazCta.module.css';

function WazCta() {
  return (
    <section className={styles.cta}>
      <VidalyticsVideo embedId="gWxOiV1lURJu0gq8" />

      <div className={styles.overlay} aria-hidden="true" />

      <div className={styles.content}>
        <h2 className={styles.title}>Contrate Waz pro seu negócio</h2>
        <Button size="lg" href={WHATSAPP_CONTACT} withArrow>
          Contrate Waz
        </Button>
      </div>
    </section>
  );
}

export default WazCta;
