import Button from '../ui/Button';
import heroDesktop from '../../assets/cat-hero-desktop.png';
import heroMobile from '../../assets/cat-hero-mobile.png';
import { WHATSAPP_CTA } from '../../links';
import styles from './CatalogoHero.module.css';

function CatalogoHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.stage}>
        <img
          src={heroDesktop}
          alt=""
          aria-hidden="true"
          className={`${styles.art} ${styles.artDesktop}`}
        />

        <div className={styles.content}>
          <h1 className={styles.title}>
            Cadastre uma vez,
            <br />
            todo agente vende certo.
          </h1>
          <p className={styles.subtitle}>
            Produtos e Serviços reúne o que você vende, o preço e o estoque num
            só lugar. Todo agente do Squad vende a partir dessa mesma informação,
            então preço, prazo e disponibilidade nunca ficam desencontrados.
          </p>
          <Button size="lg" href={WHATSAPP_CTA} withArrow>
            Contratar Squad
          </Button>
        </div>

        <img
          src={heroMobile}
          alt=""
          aria-hidden="true"
          className={`${styles.art} ${styles.artMobile}`}
        />
      </div>
    </section>
  );
}

export default CatalogoHero;
