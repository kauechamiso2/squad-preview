import RainbowButton from '../ui/RainbowButton';
import appPreview from '../../assets/app-preview.png';
import appPreviewTablet from '../../assets/app-preview-tablet.png';
import appPreviewMobile from '../../assets/app-preview-mobile.png';
import iconArrow from '../../assets/icon-arrow.svg';
import mediaExame from '../../assets/media-exame.svg';
import mediaPipeline from '../../assets/media-pipeline.svg';
import mediaStartupi from '../../assets/media-startupi.svg';
import mediaCnn from '../../assets/media-cnn.svg';
import { WHATSAPP_CTA } from '../../links';
import styles from './Hero.module.css';

const MEDIA_LOGOS = [
  {
    src: mediaExame,
    alt: 'Exame',
    href: 'https://exame.com/inteligencia-artificial/loja-na-paulista-vende-funcionarios-de-ia-com-atendimento-presencial-para-popularizar-agentes/',
  },
  {
    src: mediaPipeline,
    alt: 'Pipeline',
    href: 'https://pipelinevalor.globo.com/startups/noticia/inner-ai-chega-a-r-500-mi-com-rodada-liderada-por-canary-e-onevc.ghtml',
  },
  {
    src: mediaStartupi,
    alt: 'Startupi',
    href: 'https://startupi.com.br/inner-ai-levanta-r-30-milhoes/',
  },
  {
    src: mediaCnn,
    alt: 'CNN',
    href: 'https://www.cnnbrasil.com.br/economia/macroeconomia/empresa-testa-qual-a-melhor-ia-disponivel-no-brasil-veja-resultados/',
  },
];

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <a
          href="https://pipelinevalor.globo.com/startups/noticia/inner-ai-chega-a-r-500-mi-com-rodada-liderada-por-canary-e-onevc.ghtml"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.announcement}
        >
          <p className={styles.announcementText}>
            Anunciando nossa rodada seed de{' '}
            <span className={styles.announcementHighlight}>R$30M</span>
          </p>
          <span className={styles.announcementIcon}>
            <img src={iconArrow} alt="" />
          </span>
        </a>

        <h1 className={styles.title}>
          A solução completa para seu negócio
        </h1>

        <p className={styles.subtitle}>
          O Squad é um time de agentes de IA que assume o marketing, as vendas,
          o financeiro e a operação da sua empresa. Trabalhando juntos, com
          contexto compartilhado, 24 horas por dia.
        </p>

        <div className={styles.ctaRow}>
          <RainbowButton href={WHATSAPP_CTA}>Falar no WhatsApp</RainbowButton>
        </div>
      </div>

      <picture className={styles.visual}>
        <source media="(max-width: 767px)" srcSet={appPreviewMobile} />
        <source media="(max-width: 1199px)" srcSet={appPreviewTablet} />
        <img
          src={appPreview}
          alt="Interface do app Squad com a barra lateral de agentes e ferramentas"
          className={styles.visualImage}
        />
      </picture>

      <div className={styles.media}>
        <p className={styles.mediaTitle}>Na mídia</p>

        {/* On mobile the second track makes the marquee loop seamless */}
        <div className={styles.mediaLogos}>
          <div className={styles.mediaTrack}>
            {MEDIA_LOGOS.map(({ src, alt, href }) => (
              <a
                key={alt}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={src} alt={alt} className={styles.mediaLogo} />
              </a>
            ))}
          </div>
          <div
            className={`${styles.mediaTrack} ${styles.mediaTrackClone}`}
            aria-hidden="true"
          >
            {MEDIA_LOGOS.map(({ src, alt, href }) => (
              <a
                key={alt}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={-1}
              >
                <img src={src} alt="" className={styles.mediaLogo} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
