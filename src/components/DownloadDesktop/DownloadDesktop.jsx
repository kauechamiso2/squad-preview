import macosIcon from '../../assets/macos-icon.svg';
import { DOWNLOAD_LINKS } from '../../links';
import ArrowIcon from '../ui/ArrowIcon';
import { useLocale } from '../../i18n/LocaleContext.jsx';
import styles from './DownloadDesktop.module.css';

/* Logo do Windows: 4 quadrados coloridos (cores exatas do Figma) */
function WindowsIcon() {
  return (
    <span className={styles.win} aria-hidden="true">
      <span />
      <span />
      <span />
      <span />
    </span>
  );
}

const ROWS = [
  { key: 'windows', name: 'Windows', href: DOWNLOAD_LINKS.windows },
  { key: 'macos', name: 'MacOS', href: DOWNLOAD_LINKS.mac },
];

/* "Squad desktop" — título centralizado + lista Windows / MacOS, cada linha com
   ícone + nome à esquerda e botão "Download" à direita. */
function DownloadDesktop() {
  const { t } = useLocale();
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.title}>{t('pages.download.desktop.title')}</h2>

        {ROWS.map(({ key, name, href }) => (
          <div key={key} className={styles.row}>
            <div className={styles.left}>
              <span className={styles.iconBox}>
                {key === 'windows' ? (
                  <WindowsIcon />
                ) : (
                  <img src={macosIcon} alt="" className={styles.macos} />
                )}
              </span>
              <span className={styles.name}>{name}</span>
            </div>
            <a
              href={href}
              className={styles.dlBtn}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Download</span>
              <span className={styles.arrow} aria-hidden="true">
                <ArrowIcon />
              </span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default DownloadDesktop;
