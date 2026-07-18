import Button from '../ui/Button';
import VidalyticsVideo from '../VidalyticsVideo/VidalyticsVideo';
import { WHATSAPP_CONTACT } from '../../links';
import styles from './OpyCta.module.css';

function OpyCta() {
  return (
    <section className={styles.cta}>
      <VidalyticsVideo embedId="_8yZN2_i6uq3UK6p" />

      <div className={styles.overlay} aria-hidden="true" />

      <div className={styles.content}>
        <h2 className={styles.title}>Contrate Opy pro seu negócio</h2>
        <Button size="lg" href={WHATSAPP_CONTACT} withArrow>
          Contrate Opy
        </Button>
      </div>
    </section>
  );
}

export default OpyCta;
