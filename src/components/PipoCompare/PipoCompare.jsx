import thumbsDown from '../../assets/icon-thumbs-down.svg';
import thumbsUp from '../../assets/icon-thumbs-up.svg';
import styles from './PipoCompare.module.css';

const WITHOUT = [
  'Treinar gente nova é sempre começar do zero.',
  'Onboarding depende de alguém explicar tudo de novo.',
  'Vaga divulgada sem cara nenhuma da empresa.',
  'Conhecimento da empresa vive só na cabeça do dono.',
];

const WITH = [
  'Time treinado com o que você já escreveu.',
  'Trilha de onboarding que roda sozinha.',
  'Página de vaga com a cara do seu negócio.',
  'Conhecimento registrado, disponível sempre.',
];

function Card({ label, items, icon }) {
  return (
    <div className={styles.card}>
      <p className={styles.cardLabel}>{label}</p>
      {items.map((text) => (
        <div key={text} className={styles.row}>
          <img src={icon} alt="" aria-hidden="true" className={styles.icon} />
          <p className={styles.rowText}>{text}</p>
        </div>
      ))}
    </div>
  );
}

function PipoCompare() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>
        O que muda com <span className={styles.gradient}>Pipo</span>
        <br />
        no seu time
      </h2>

      <div className={styles.cards}>
        <Card label="SEM PIPO NO SEU TIME" items={WITHOUT} icon={thumbsDown} />
        <Card label="COM PIPO NO SEU TIME" items={WITH} icon={thumbsUp} />
      </div>
    </section>
  );
}

export default PipoCompare;
