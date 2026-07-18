import Button from '../ui/Button';
import dashboard from '../../assets/maky-dashboard.png';
import dashboardMobile from '../../assets/maky-dashboard-mobile.png';
import character from '../../assets/maky-character.png';
import { WHATSAPP_CONTACT } from '../../links';
import styles from './MakyHero.module.css';

function MakyHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Conheça Maky:
          <br />
          sua estrategista de marketing
        </h1>

        <p className={styles.subtitle}>
          A Maky acompanha o que a concorrência está fazendo, cria conteúdo
          pronto pra postar e coloca campanhas no ar. Tudo isso rodando todo
          dia, enquanto você foca no resto do negócio.
        </p>

        <Button size="lg" href={WHATSAPP_CONTACT} withArrow>
          Contrate Maky
        </Button>
      </div>

      <div className={styles.visual}>
        <div className={styles.card}>
          <img
            src={dashboard}
            alt="Painel de Mídia Paga do Squad conduzido pela Maky"
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

export default MakyHero;
