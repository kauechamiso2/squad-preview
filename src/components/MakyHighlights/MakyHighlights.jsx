import hl1 from '../../assets/maky-hl-1.png';
import hl2 from '../../assets/maky-hl-2.png';
import hl3 from '../../assets/maky-hl-3.png';
import hl4 from '../../assets/maky-hl-4.png';
import styles from './MakyHighlights.module.css';

const HIGHLIGHTS = [
  { img: hl1, caption: 'Monitora e analisa a concorrência diariamente.' },
  { img: hl2, caption: 'Cria posts com o contexto que a marca já carrega.' },
  { img: hl3, caption: 'Analisa, agenda, publica na hora certa.' },
  { img: hl4, caption: 'Interage e acompanha sua rede 24/7' },
];

function MakyHighlights() {
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

export default MakyHighlights;
