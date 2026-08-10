import { useEffect, useState } from 'react';
import { motion, MotionConfig } from 'motion/react';
import DownloadButton from '../DownloadButton/DownloadButton';
import { detectOS } from '../../device';
import { useLocale } from '../../i18n/LocaleContext.jsx';
import { nl2br } from '../../i18n/nl2br.jsx';
import visualDesktop from '../../assets/download-hero-desktop.webp';
import visualTablet from '../../assets/download-hero-tablet.webp';
import visualMobile from '../../assets/download-hero-mobile.webp';
import visualDesktopEn from '../../assets/download-hero-desktop-en.webp';
import visualTabletEn from '../../assets/download-hero-tablet-en.webp';
import visualMobileEn from '../../assets/download-hero-mobile-en.webp';
import styles from './DownloadHero.module.css';

// Título -> subtítulo -> CTA, em sequência (stagger), como nas outras heroes.
const contentVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.05 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

function DownloadHero() {
  const { t, locale } = useLocale();

  // Os assets do dashboard têm PT e EN; espanhol usa a versão em inglês.
  const en = locale !== 'pt';
  const vDesktop = en ? visualDesktopEn : visualDesktop;
  const vTablet = en ? visualTabletEn : visualTablet;
  const vMobile = en ? visualMobileEn : visualMobile;

  // O HTML pré-renderizado sai com o default 'ios' (o mesmo do Figma). Após a
  // hidratação, detecta o SO no cliente e troca o botão — sem mismatch porque a
  // primeira renderização no cliente ainda é 'ios', igual ao servidor.
  const [os, setOs] = useState('ios');
  useEffect(() => {
    setOs(detectOS());
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <section className={styles.hero}>
        <motion.div
          className={styles.content}
          variants={contentVariants}
          initial="hidden"
          animate="show"
        >
          <motion.h1 className={styles.title} variants={itemVariants}>
            {nl2br(t('pages.download.hero.title'))}
          </motion.h1>

          <motion.p className={styles.subtitle} variants={itemVariants}>
            {t('pages.download.hero.subtitle')}
          </motion.p>

          <motion.div className={styles.ctaRow} variants={itemVariants}>
            <DownloadButton os={os} />
          </motion.div>
        </motion.div>

        {/* Um visual composto por breakpoint (composições diferentes no Figma).
            CSS mostra só o do tamanho atual. Decorativo — o texto carrega o
            significado. */}
        <div className={styles.visual}>
          <img
            src={vDesktop}
            alt=""
            aria-hidden="true"
            className={`${styles.image} ${styles.desktop}`}
          />
          <img
            src={vTablet}
            alt=""
            aria-hidden="true"
            className={`${styles.image} ${styles.tablet}`}
          />
          <img
            src={vMobile}
            alt=""
            aria-hidden="true"
            className={`${styles.image} ${styles.mobile}`}
          />
        </div>
      </section>
    </MotionConfig>
  );
}

export default DownloadHero;
