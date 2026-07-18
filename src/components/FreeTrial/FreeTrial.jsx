import trialNinety from '../../assets/trial-90.svg';
import trialGlow from '../../assets/trial-glow.svg';
import styles from './FreeTrial.module.css';

function FreeTrial() {
  return (
    <section className={styles.section}>
      <div className={styles.banner}>
        <img src={trialGlow} alt="" className={styles.glow} aria-hidden="true" />

        <div className={styles.copy}>
          <p className={styles.copyTitle}>Teste por 90 dias sem compromisso.</p>
          <p className={styles.copyText}>
            O seu resultado é o nosso compromisso. Se por qualquer motivo o
            Squad não fizer sentido pra você, garantimos a devolução integral do
            valor investido em até 90 dias.
          </p>
        </div>

        <div className={styles.visual}>
          <img
            src={trialNinety}
            alt="90 dias de garantia"
            className={styles.ninety}
          />
          <span className={styles.diasPill}>Dias</span>
        </div>
      </div>
    </section>
  );
}

export default FreeTrial;
