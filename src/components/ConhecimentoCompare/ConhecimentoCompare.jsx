import thumbsDown from '../../assets/icon-thumbs-down.svg';
import thumbsUp from '../../assets/icon-thumbs-up.svg';
import styles from './ConhecimentoCompare.module.css';

const WITHOUT = [
  'A mesma pergunta ganha uma resposta diferente toda vez.',
  'Treinar gente nova é explicar tudo de novo, sempre.',
  'Cada pessoa faz o mesmo processo de um jeito diferente.',
  'Informação importante se perde no meio da rotina.',
];

const WITH = [
  'Pergunta repetida, sempre a mesma resposta oficial.',
  'Processo documentado, pronto pra quem chegar depois.',
  'Todo mundo segue o mesmo passo a passo.',
  'Nada se perde, tudo fica registrado e acessível.',
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

function ConhecimentoCompare() {
  return (
    <section className={styles.section}>
      <div className={styles.cards}>
        <Card label="SEM SQUAD NO SEU TIME" items={WITHOUT} icon={thumbsDown} />
        <Card label="COM SQUAD NO SEU TIME" items={WITH} icon={thumbsUp} />
      </div>
    </section>
  );
}

export default ConhecimentoCompare;
