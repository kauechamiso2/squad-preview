import hl1 from '../../assets/pipo-hl-1.png';
import hl2 from '../../assets/pipo-hl-2.png';
import hl3 from '../../assets/pipo-hl-3.png';
import styles from './PipoHighlights.module.css';

const HIGHLIGHTS = [
  { img: hl1, caption: 'Responde a equipe na hora, com resposta oficial.' },
  { img: hl2, caption: 'Analisa currículo e escolhe quem tem mais aderência.' },
  { img: hl3, caption: 'Organiza os candidatos, do início à resposta.' },
];

function PipoHighlights() {
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

export default PipoHighlights;
