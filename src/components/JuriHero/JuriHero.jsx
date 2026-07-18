import Button from '../ui/Button';
import dashboard from '../../assets/juri-dashboard.png';
import dashboardMobile from '../../assets/juri-dashboard-mobile.png';
import character from '../../assets/juri-character.png';
import { WHATSAPP_CONTACT } from '../../links';
import styles from './JuriHero.module.css';

function JuriHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Conheça Juri:
          <br />
          seu jurídico de plantão
        </h1>

        <p className={styles.subtitle}>
          A Juri organiza todos os seus contratos num só lugar, avisa quando
          algum está perto de vencer e deixa o e-mail de renovação pronto pra
          você enviar. Tudo isso rodando todo dia, enquanto você foca no resto do
          negócio.
        </p>

        <Button size="lg" href={WHATSAPP_CONTACT} withArrow>
          Contrate Juri
        </Button>
      </div>

      <div className={styles.visual}>
        <div className={styles.card}>
          <img
            src={dashboard}
            alt="Painel de Contratos do Squad conduzido pela Juri"
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

export default JuriHero;
