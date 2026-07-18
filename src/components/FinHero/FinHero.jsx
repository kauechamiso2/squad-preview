import Button from '../ui/Button';
import dashboard from '../../assets/fin-dashboard.png';
import dashboardMobile from '../../assets/fin-dashboard-mobile.png';
import character from '../../assets/fin-character.png';
import { WHATSAPP_CONTACT } from '../../links';
import styles from './FinHero.module.css';

function FinHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Conheça Fin:
          <br />
          seu gestor financeiro
        </h1>

        <p className={styles.subtitle}>
          O Fin centraliza os pagamentos da sua empresa, mostra quanto entra e
          quanto sai e projeta o caixa do próximo mês. Tudo isso rodando todo
          dia, enquanto você foca no resto do negócio.
        </p>

        <Button size="lg" href={WHATSAPP_CONTACT} withArrow>
          Contrate Fin
        </Button>
      </div>

      <div className={styles.visual}>
        <div className={styles.card}>
          <img
            src={dashboard}
            alt="Painel de Fluxo de caixa do Squad conduzido pelo Fin"
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

export default FinHero;
