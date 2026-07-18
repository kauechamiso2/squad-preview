import hl1 from '../../assets/waz-hl-1.png';
import hl2 from '../../assets/waz-hl-2.png';
import hl3 from '../../assets/waz-hl-3.png';
import hl4 from '../../assets/waz-hl-4.png';
import styles from './WazHighlights.module.css';

const HIGHLIGHTS = [
  { img: hl1, caption: 'Fala com toda a base, sem sair do WhatsApp.' },
  { img: hl2, caption: 'Responde o cliente na hora, com o tom certo.' },
  { img: hl3, caption: 'Monta a proposta em minutos, pronta pra enviar.' },
  { img: hl4, caption: 'Conduz a conversa até converter a venda.' },
];

function WazHighlights() {
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

export default WazHighlights;
