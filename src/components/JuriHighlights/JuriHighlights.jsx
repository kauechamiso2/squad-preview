import hl1 from '../../assets/juri-hl-1.png';
import hl2 from '../../assets/juri-hl-2.png';
import hl3 from '../../assets/juri-hl-3.png';
import hl4 from '../../assets/juri-hl-4.png';
import styles from './JuriHighlights.module.css';

const HIGHLIGHTS = [
  { img: hl1, caption: 'Reúne todos os contratos em um só lugar.' },
  { img: hl2, caption: 'Lê o contrato e extrai as informações importantes.' },
  { img: hl3, caption: 'Avisa antes do contrato vencer.' },
  { img: hl4, caption: 'Deixa o e-mail de renovação pronto para enviar.' },
];

function JuriHighlights() {
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

export default JuriHighlights;
