import hl1 from '../../assets/opy-hl-1.png';
import hl2 from '../../assets/opy-hl-2.png';
import hl3 from '../../assets/opy-hl-3.png';
import styles from './OpyHighlights.module.css';

const HIGHLIGHTS = [
  { img: hl1, caption: 'Monta a escala de times.' },
  { img: hl2, caption: 'Mostra quem está trabalhando, em um lugar só.' },
  { img: hl3, caption: 'Avisa se um turno fica sem cobertura.' },
];

function OpyHighlights() {
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

export default OpyHighlights;
