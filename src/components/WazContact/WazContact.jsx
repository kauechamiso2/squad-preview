import { WhatsappLogo } from '@phosphor-icons/react';
import avatarWaz from '../../assets/avatar-waz.png';
import { WHATSAPP_CONTACT } from '../../links';
import { useLocale } from '../../i18n/LocaleContext.jsx';
import styles from './WazContact.module.css';

/**
 * Botão fixo de contato presente em todas as páginas: o avatar do Waz com um
 * selo do WhatsApp e, no hover/foco, um balão "Entre em contato (Waz)".
 * Abre a conversa do WhatsApp (mesmo link do CTA da navbar).
 */
function WazContact() {
  const { t } = useLocale();
  const label = t('cta.wazFloat');

  return (
    <a
      className={styles.root}
      href={WHATSAPP_CONTACT}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
    >
      <span className={styles.tooltip} aria-hidden="true">
        {label}
      </span>
      <span className={styles.avatarWrap}>
        <img src={avatarWaz} alt="" aria-hidden="true" className={styles.avatar} />
        <span className={styles.badge} aria-hidden="true">
          <WhatsappLogo size={26} weight="fill" />
        </span>
      </span>
    </a>
  );
}

export default WazContact;
