import { AppleLogo, AndroidLogo } from '@phosphor-icons/react';
import { DOWNLOAD_LINKS } from '../../links';
import ArrowIcon from '../ui/ArrowIcon';
import { useLocale } from '../../i18n/LocaleContext.jsx';
import { nl2br } from '../../i18n/nl2br.jsx';
import tiles from '../../assets/download-tiles.png';
import styles from './DownloadMobile.module.css';

/* "Baixe o Squad no seu celular" — texto à esquerda (eyebrow com gradiente,
   título, subtítulo, botões iOS + Android) e a composição de tiles à direita.
   No tablet/mobile empilha e centraliza. */
function DownloadMobile() {
  const { t } = useLocale();
  return (
    <section className={styles.section}>
      <div className={styles.text}>
        <p className={styles.eyebrow}>{t('pages.download.mobile.eyebrow')}</p>
        <h2 className={styles.title}>{nl2br(t('pages.download.mobile.title'))}</h2>
        <p className={styles.subtitle}>{t('pages.download.mobile.subtitle')}</p>
        <div className={styles.buttons}>
          <a
            href={DOWNLOAD_LINKS.ios}
            className={styles.storeBtn}
            target="_blank"
            rel="noopener noreferrer"
          >
            <AppleLogo size={24} weight="fill" aria-hidden="true" />
            <span className={styles.labelWrap}>
              <span>Download iOS</span>
              <span className={styles.arrow} aria-hidden="true">
                <ArrowIcon />
              </span>
            </span>
          </a>
          <a
            href={DOWNLOAD_LINKS.android}
            className={styles.storeBtn}
            target="_blank"
            rel="noopener noreferrer"
          >
            <AndroidLogo size={24} weight="fill" aria-hidden="true" />
            <span className={styles.labelWrap}>
              <span>Download Android</span>
              <span className={styles.arrow} aria-hidden="true">
                <ArrowIcon />
              </span>
            </span>
          </a>
        </div>
      </div>

      <img src={tiles} alt="" aria-hidden="true" className={styles.tiles} />
    </section>
  );
}

export default DownloadMobile;
