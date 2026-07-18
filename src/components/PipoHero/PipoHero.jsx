import Button from '../ui/Button';
import dashboard from '../../assets/pipo-dashboard.png';
import dashboardMobile from '../../assets/pipo-dashboard-mobile.png';
import character from '../../assets/pipo-character.png';
import { WHATSAPP_CONTACT } from '../../links';
import styles from './PipoHero.module.css';

function PipoHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Conheça Pipo:
          <br />
          seu especialista em pessoas
        </h1>

        <p className={styles.subtitle}>
          O Pipo treina sua equipe, responde as dúvidas do time na hora e
          organiza a triagem de currículos pra novas vagas. Tudo isso rodando
          todo dia, enquanto você foca no resto do negócio.
        </p>

        <Button size="lg" href={WHATSAPP_CONTACT} withArrow>
          Contrate Pipo
        </Button>
      </div>

      <div className={styles.visual}>
        <div className={styles.card}>
          <img
            src={dashboard}
            alt="Painel de Triagem de CVs do Squad conduzido pelo Pipo"
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

export default PipoHero;
