import thumbsDown from '../../assets/icon-thumbs-down.svg';
import thumbsUp from '../../assets/icon-thumbs-up.svg';
import styles from './MakyCompare.module.css';

const WITHOUT = [
  'O feed fica parado porque falta tempo pra criar e postar.',
  'Anúncio pago vira gasto às cegas.',
  'Comentário com intenção de compra fica sem resposta.',
  'Marketing vira a última tarefa do dia, sempre adiada.',
];

const WITH = [
  'Posts criados e agendados sozinhos, no horário certo.',
  'Campanha pronta e só vai ao ar depois da sua aprovação.',
  'Comentário vira DM na hora, efetuando a venda na hora.',
  'Marketing rodando todo dia, sem tirar sua atenção do negócio.',
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

function MakyCompare() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>
        O que muda com <span className={styles.gradient}>Maky</span>
        <br />
        no seu time
      </h2>

      <div className={styles.cards}>
        <Card label="SEM MAKY NO SEU TIME" items={WITHOUT} icon={thumbsDown} />
        <Card label="COM MAKY NO SEU TIME" items={WITH} icon={thumbsUp} />
      </div>
    </section>
  );
}

export default MakyCompare;
