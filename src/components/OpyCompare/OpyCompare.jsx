import thumbsDown from '../../assets/icon-thumbs-down.svg';
import thumbsUp from '../../assets/icon-thumbs-up.svg';
import styles from './OpyCompare.module.css';

const WITHOUT = [
  'Escala de time grande vira bagunça de planilha.',
  'Um turno vazio só aparece quando já é tarde.',
  'Loja sem gente é prejuízo que ninguém viu vir.',
  'Montar escala toda semana consome um tempo enorme.',
];

const WITH = [
  'Escala organizada mesmo com time grande.',
  'Turno sem cobertura avisa o gestor na hora.',
  'Buraco na escala nunca passa despercebido.',
  'Escala pronta sem recomeçar toda semana.',
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

function OpyCompare() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>
        O que muda com <span className={styles.gradient}>Opy</span>
        <br />
        no seu time
      </h2>

      <div className={styles.cards}>
        <Card label="SEM OPY NO SEU TIME" items={WITHOUT} icon={thumbsDown} />
        <Card label="COM OPY NO SEU TIME" items={WITH} icon={thumbsUp} />
      </div>
    </section>
  );
}

export default OpyCompare;
