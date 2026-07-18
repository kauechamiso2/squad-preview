import Button from '../ui/Button';
import dashboard from '../../assets/waz-dashboard.png';
import dashboardMobile from '../../assets/waz-dashboard-mobile.png';
import character from '../../assets/waz-character.png';
import { WHATSAPP_CONTACT } from '../../links';
import styles from './WazHero.module.css';

function WazHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Conheça Waz:
          <br />
          seu especialista em vendas
        </h1>

        <p className={styles.subtitle}>
          O Waz fala com sua base inteira no WhatsApp, monta propostas
          comerciais em minutos e atende seus clientes no automático. Tudo isso
          rodando todo dia, enquanto você foca no resto do negócio.
        </p>

        <Button size="lg" href={WHATSAPP_CONTACT} withArrow>
          Contrate Waz
        </Button>
      </div>

      <div className={styles.visual}>
        <div className={styles.card}>
          <img
            src={dashboard}
            alt="Painel de Propostas do Squad conduzido pelo Waz"
            className={styles.dashboard}
          />
          {/* Mobile shows a zoomed-in crop of the panel (legible on small screens) */}
          <img
            src={dashboardMobile}
            alt=""
            aria-hidden="true"
            className={styles.dashboardMobile}
          />
        </div>
        {/* Character sits outside the card so it's never clipped by its overflow */}
        <span className={styles.characterShadow} aria-hidden="true" />
        <img
          src={character}
          alt=""
          aria-hidden="true"
          className={styles.character}
        />
      </div>
    </section>
  );
}

export default WazHero;
