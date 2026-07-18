import thumbsDown from '../../assets/icon-thumbs-down.svg';
import thumbsUp from '../../assets/icon-thumbs-up.svg';
import styles from '../ConhecimentoCompare/ConhecimentoCompare.module.css';

const WITHOUT = [
  'Vender em mais de um canal significa catálogo duplicado.',
  'Cobrança depende de lembrar quem já pagou o quê.',
  'Ninguém sabe se aquele pedido já foi entregue ou não.',
  'Cobrar o restante de um sinal é lembrete manual.',
];

const WITH = [
  'Um catálogo só, sincronizado onde você já vende.',
  'Pagamento e saldo restante visíveis num lugar só.',
  'Status de cada venda visível do pagamento à entrega.',
  'Link de cobrança do restante enviado com um clique.',
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

function CatalogoCompare() {
  return (
    <section className={styles.section}>
      <div className={styles.cards}>
        <Card label="SEM SQUAD NO SEU TIME" items={WITHOUT} icon={thumbsDown} />
        <Card label="COM SQUAD NO SEU TIME" items={WITH} icon={thumbsUp} />
      </div>
    </section>
  );
}

export default CatalogoCompare;
