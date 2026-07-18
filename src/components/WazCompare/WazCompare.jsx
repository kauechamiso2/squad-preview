import thumbsDown from '../../assets/icon-thumbs-down.svg';
import thumbsUp from '../../assets/icon-thumbs-up.svg';
import styles from './WazCompare.module.css';

const WITHOUT = [
  'Mensagem fora do horário só é respondida depois.',
  'A mesma mensagem pra base inteira, sem filtro.',
  'Proposta copiada da antiga, ajustada na mão.',
  'Vendas dependem de alguém disponível o dia todo.',
];

const WITH = [
  'Atendimento na hora, mesmo fora do horário.',
  'Base segmentada, cada campanha pro grupo certo.',
  'Proposta pronta em minutos, na sua linguagem.',
  'Vendas rodando todo dia, sem depender de ninguém.',
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

function WazCompare() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>
        O que muda com <span className={styles.gradient}>Waz</span>
        <br />
        no seu time
      </h2>

      <div className={styles.cards}>
        <Card label="SEM WAZ NO SEU TIME" items={WITHOUT} icon={thumbsDown} />
        <Card label="COM WAZ NO SEU TIME" items={WITH} icon={thumbsUp} />
      </div>
    </section>
  );
}

export default WazCompare;
