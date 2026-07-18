import Button from '../ui/Button';
import VidalyticsVideo from '../VidalyticsVideo/VidalyticsVideo';
import { WHATSAPP_CONTACT } from '../../links';
import styles from './MakyCta.module.css';

function MakyCta() {
  return (
    <section className={styles.cta}>
      <VidalyticsVideo embedId="S2yd3T0romt65Uyf" />

      <div className={styles.overlay} aria-hidden="true" />

      <div className={styles.content}>
        <h2 className={styles.title}>Contrate Maky pro seu negócio</h2>
        <Button size="lg" href={WHATSAPP_CONTACT} withArrow>
          Contrate Maky
        </Button>
      </div>
    </section>
  );
}

export default MakyCta;
