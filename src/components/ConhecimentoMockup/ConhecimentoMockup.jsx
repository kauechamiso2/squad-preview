import mockup from '../../assets/con-s3-mockup.png';
import styles from './ConhecimentoMockup.module.css';

function ConhecimentoMockup() {
  return (
    <section className={styles.section}>
      <img
        src={mockup}
        alt="Painel da Base de Conhecimento do Squad com o time de agentes"
        className={styles.image}
      />
    </section>
  );
}

export default ConhecimentoMockup;
