import Button from '../ui/Button';
import VidalyticsVideo from '../VidalyticsVideo/VidalyticsVideo';
import { WHATSAPP_CONTACT } from '../../links';
import styles from './FinCta.module.css';

function FinCta() {
  return (
    <section className={styles.cta}>
      <VidalyticsVideo embedId="1z0e7116xAMOLtq6" />

      <div className={styles.overlay} aria-hidden="true" />

      <div className={styles.content}>
        <h2 className={styles.title}>Contrate Fin pro seu negócio</h2>
        <Button size="lg" href={WHATSAPP_CONTACT} withArrow>
          Contrate Fin
        </Button>
      </div>
    </section>
  );
}

export default FinCta;
