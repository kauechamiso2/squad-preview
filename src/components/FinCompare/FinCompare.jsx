import thumbsDown from '../../assets/icon-thumbs-down.svg';
import thumbsUp from '../../assets/icon-thumbs-up.svg';
import styles from './FinCompare.module.css';

const WITHOUT = [
  'Pagamento espalhado entre planilha, app e caderno.',
  'Dinheiro do negócio se mistura com o pessoal.',
  'Sem saber o que vem, o crescimento é reativo.',
  'Dinheiro entra, mas ninguém sabe pra onde vai.',
];

const WITH = [
  'Todos os pagamentos num só lugar.',
  'Separação clara, sem depender de memória.',
  'Previsibilidade pra crescer com planejamento.',
  'Clareza de pra onde o dinheiro vai, todo dia.',
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

function FinCompare() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>
        O que muda com <span className={styles.gradient}>Fin</span>
        <br />
        no seu time
      </h2>

      <div className={styles.cards}>
        <Card label="SEM FIN NO SEU TIME" items={WITHOUT} icon={thumbsDown} />
        <Card label="COM FIN NO SEU TIME" items={WITH} icon={thumbsUp} />
      </div>
    </section>
  );
}

export default FinCompare;
