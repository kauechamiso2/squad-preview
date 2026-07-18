import thumbsDown from '../../assets/icon-thumbs-down.svg';
import thumbsUp from '../../assets/icon-thumbs-up.svg';
import styles from './JuriCompare.module.css';

const WITHOUT = [
  'Prazo e organização tomam tempo que era pro negócio.',
  'Multa por cancelar fora do prazo, por distração.',
  'Cláusula importante escondida em letra miúda.',
  'Contrato espalhado entre e-mail, PDF e assinador.',
];

const WITH = [
  'Contratos organizados todo dia, sem tirar seu tempo.',
  'Prazo de decisão sempre visível, sem susto.',
  'Termos importantes traduzidos em campos claros.',
  'Todos os contratos guardados num só lugar.',
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

function JuriCompare() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>
        O que muda com <span className={styles.gradient}>Juri</span>
        <br />
        no seu time
      </h2>

      <div className={styles.cards}>
        <Card label="SEM JURI NO SEU TIME" items={WITHOUT} icon={thumbsDown} />
        <Card label="COM JURI NO SEU TIME" items={WITH} icon={thumbsUp} />
      </div>
    </section>
  );
}

export default JuriCompare;
