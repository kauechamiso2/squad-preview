import Button from '../ui/Button';
import VidalyticsVideo from '../VidalyticsVideo/VidalyticsVideo';
import { WHATSAPP_CONTACT } from '../../links';
import styles from './PipoCta.module.css';

function PipoCta() {
  return (
    <section className={styles.cta}>
      <VidalyticsVideo embedId="Ba7rsYgl8bnmWx6g" />

      <div className={styles.overlay} aria-hidden="true" />

      <div className={styles.content}>
        <h2 className={styles.title}>Contrate Pipo pro seu negócio</h2>
        <Button size="lg" href={WHATSAPP_CONTACT} withArrow>
          Contrate Pipo
        </Button>
      </div>
    </section>
  );
}

export default PipoCta;
