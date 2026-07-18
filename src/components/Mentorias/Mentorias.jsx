import HighlightButton from '../ui/HighlightButton';
import iconCheckCircle from '../../assets/icon-check-circle.svg';
import mentoriasPreview from '../../assets/mentorias-preview.png';
import mentoriasPreviewTablet from '../../assets/mentorias-preview-tablet.png';
import mentoriasPreviewMobile from '../../assets/mentorias-preview-mobile.png';
import styles from './Mentorias.module.css';

const MENTORIA_CTA =
  'https://wa.me/551150395056?text=Oi%21%20Vim%20pelo%20site%20da%20Squad%20e%20quero%20saber%20mais%20sobre%20as%20mentorias%20ao%20vivo.%20Pode%20me%20contar%20como%20funciona%3F%20%F0%9F%99%82';

const BENEFITS = [
  'Várias mentorias ao vivo por dia, uma para cada ferramenta.',
  'Acompanhamento dedicado em cada etapa da implementação',
  'Especialistas por área: marketing, vendas, finanças e operações',
];

function Mentorias() {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <div className={styles.visual}>
          <picture>
            <source
              media="(max-width: 767px)"
              srcSet={mentoriasPreviewMobile}
            />
            <source
              media="(max-width: 1199px)"
              srcSet={mentoriasPreviewTablet}
            />
            <img
              src={mentoriasPreview}
              alt="Calendário do Squad.com com mentorias agendadas e uma mentoria ao vivo em andamento"
              className={styles.visualImage}
            />
          </picture>
        </div>

        {/* display: contents on tablet/mobile lets the visual slot between heading and benefits */}
        <div className={styles.textCol}>
          <div className={styles.heading}>
            <h2 className={styles.title}>
              Mentorias para
              <br />
              toda a sua jornada
            </h2>
            <p className={styles.subtitle}>
              Mentoria ao vivo, várias vezes por dia. Você não fica sozinho.
              Todos os dias, várias sessões ao vivo com especialistas de
              verdade ao seu lado, do primeiro clique à sua empresa rodando no
              automático
            </p>
          </div>

          <ul className={styles.benefits}>
            {BENEFITS.map((text, index) => (
              <li key={index} className={styles.benefit}>
                <img
                  src={iconCheckCircle}
                  alt=""
                  className={styles.benefitIcon}
                />
                <p className={styles.benefitText}>{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <HighlightButton
        size="lg"
        href={MENTORIA_CTA}
        className={styles.ctaButton}
      >
        Quero essa mentoria
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          aria-hidden="true"
          className={styles.ctaArrow}
        >
          <path
            d="M3 9h11M10 4.5L14.5 9 10 13.5"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </HighlightButton>
    </section>
  );
}

export default Mentorias;
