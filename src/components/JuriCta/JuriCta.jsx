import Button from '../ui/Button';
import VidalyticsVideo from '../VidalyticsVideo/VidalyticsVideo';
import { WHATSAPP_CONTACT } from '../../links';
import styles from './JuriCta.module.css';

function JuriCta() {
  return (
    <section className={styles.cta}>
      <VidalyticsVideo embedId="AC5GjSKEJoXKZMFL" />

      <div className={styles.overlay} aria-hidden="true" />

      <div className={styles.content}>
        <h2 className={styles.title}>Contrate Juri pro seu negócio</h2>
        <Button size="lg" href={WHATSAPP_CONTACT} withArrow>
          Contrate Juri
        </Button>
      </div>
    </section>
  );
}

export default JuriCta;
