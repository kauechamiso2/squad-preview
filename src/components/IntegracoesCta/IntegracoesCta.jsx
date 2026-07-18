import Button from '../ui/Button';
import bg from '../../assets/int-cta-bg.png';
import { WHATSAPP_CTA } from '../../links';
import styles from './IntegracoesCta.module.css';

function IntegracoesCta() {
  return (
    <section className={styles.section}>
      <div className={styles.banner}>
        <img src={bg} alt="" aria-hidden="true" className={styles.bg} />
        <div className={styles.overlay} aria-hidden="true" />
        <div className={styles.content}>
          <h2 className={styles.title}>
            Contrate agora o Squad
            <br />
            para o seu negócio
          </h2>
          <Button size="lg" href={WHATSAPP_CTA} withArrow>
            Contratar agora
          </Button>
        </div>
      </div>
    </section>
  );
}

export default IntegracoesCta;
