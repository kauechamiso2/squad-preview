import { AppleLogo, AndroidLogo, WindowsLogo } from '@phosphor-icons/react';
import { DOWNLOAD_LINKS } from '../../links';
import ArrowIcon from '../ui/ArrowIcon';
import styles from './DownloadButton.module.css';

/* Uma variação por sistema operacional. iOS e Mac usam o mesmo logo (Apple).
   O texto ("Download <plataforma>") segue o Figma e é igual em todos os idiomas
   — plataforma é nome próprio, não se traduz. */
const VARIANTS = {
  ios: { name: 'iOS', Icon: AppleLogo, href: DOWNLOAD_LINKS.ios },
  mac: { name: 'Mac', Icon: AppleLogo, href: DOWNLOAD_LINKS.mac },
  android: { name: 'Android', Icon: AndroidLogo, href: DOWNLOAD_LINKS.android },
  windows: { name: 'Windows', Icon: WindowsLogo, href: DOWNLOAD_LINKS.windows },
};

/**
 * Botão preto de download com o logo do sistema operacional detectado.
 * `os`: 'ios' | 'mac' | 'android' | 'windows' (default 'ios', igual ao Figma).
 */
function DownloadButton({ os = 'ios', className }) {
  const { name, Icon, href } = VARIANTS[os] || VARIANTS.ios;
  return (
    <a
      href={href}
      className={`${styles.button} ${className || ''}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon size={20} weight="fill" className={styles.icon} aria-hidden="true" />
      <span className={styles.labelWrap}>
        <span>Download {name}</span>
        <span className={styles.arrow} aria-hidden="true">
          <ArrowIcon />
        </span>
      </span>
    </a>
  );
}

export default DownloadButton;
