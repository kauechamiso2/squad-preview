import { motion, MotionConfig } from 'motion/react';
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
import { useLocale } from '../../i18n/LocaleContext.jsx';
import styles from './Hero.module.css';

// Anúncio -> título -> subtítulo -> CTA, em sequência (stagger). MotionConfig
// com reducedMotion="user" respeita prefers-reduced-motion (mantém o fade,
// remove o deslocamento).
const contentVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

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
  const { t } = useLocale();
  return (
    <MotionConfig reducedMotion="user">
      <section className={styles.hero}>
        <motion.div
          className={styles.content}
          variants={contentVariants}
          initial="hidden"
          animate="show"
        >
          <motion.a
            href="https://pipelinevalor.globo.com/startups/noticia/inner-ai-chega-a-r-500-mi-com-rodada-liderada-por-canary-e-onevc.ghtml"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.announcement}
            variants={itemVariants}
          >
            <p className={styles.announcementText}>
              {t('home.hero.announcePre')}{' '}
              <span className={styles.announcementHighlight}>
                {t('home.hero.announceHighlight')}
              </span>
            </p>
            <span className={styles.announcementIcon}>
              <img src={iconArrow} alt="" />
            </span>
          </motion.a>

          <motion.h1 className={styles.title} variants={itemVariants}>
            {t('home.hero.title')}
          </motion.h1>

          <motion.p className={styles.subtitle} variants={itemVariants}>
            {t('home.hero.subtitle')}
          </motion.p>

          <motion.div className={styles.ctaRow} variants={itemVariants}>
            <RainbowButton href={WHATSAPP_CTA}>{t('cta.whatsapp')}</RainbowButton>
          </motion.div>
        </motion.div>

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
          <p className={styles.mediaTitle}>{t('home.hero.mediaTitle')}</p>

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
    </MotionConfig>
  );
}

export default Hero;
