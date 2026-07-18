import hl1 from '../../assets/fin-hl-1.png';
import hl2 from '../../assets/fin-hl-2.png';
import hl3 from '../../assets/fin-hl-3.png';
import hl4 from '../../assets/fin-hl-4.png';
import styles from './FinHighlights.module.css';

const HIGHLIGHTS = [
  { img: hl1, caption: 'Reúne todo pagamento do seu negócio num só lugar.' },
  { img: hl2, caption: 'Organiza cobrança e gera link de pagamento.' },
  { img: hl3, caption: 'Mostra o que sobrou de verdade no fim do mês.' },
  { img: hl4, caption: 'Projeta o caixa do mês que vem.' },
];

function FinHighlights() {
  return (
    <section className={styles.section}>
      <ul className={styles.grid}>
        {HIGHLIGHTS.map(({ img, caption }) => (
          <li key={caption} className={styles.card}>
            <img src={img} alt="" aria-hidden="true" className={styles.illus} />
            <p className={styles.caption}>{caption}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default FinHighlights;
