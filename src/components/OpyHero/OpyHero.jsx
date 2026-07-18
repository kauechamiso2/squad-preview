import Button from '../ui/Button';
import dashboard from '../../assets/opy-dashboard.png';
import dashboardMobile from '../../assets/opy-dashboard-mobile.png';
import character from '../../assets/opy-character.png';
import { WHATSAPP_CONTACT } from '../../links';
import styles from './OpyHero.module.css';

function OpyHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Conheça Opy:
          <br />
          sua gestora de operações
        </h1>

        <p className={styles.subtitle}>
          A Opy monta a escala do seu time, avisa quando um turno fica sem
          cobertura e deixa o colaborador pedir troca direto pelo app. Tudo isso
          rodando todo dia, enquanto você foca no resto do negócio.
        </p>

        <Button size="lg" href={WHATSAPP_CONTACT} withArrow>
          Contrate Opy
        </Button>
      </div>

      <div className={styles.visual}>
        <div className={styles.card}>
          <img
            src={dashboard}
            alt="Painel de Escalas do Squad conduzido pela Opy"
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

export default OpyHero;
