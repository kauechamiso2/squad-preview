import wordmark from '../../assets/wordmark-squad.svg';
import { WHATSAPP_CTA } from '../../links';
import { withBase } from '../../base';
import { useLocale } from '../../i18n/LocaleContext.jsx';
import styles from './Footer.module.css';

/* Rótulos traduzíveis vêm por chave (labelKey/titleKey); nomes de marca
   (Instagram, Tiktok, LinkedIn) ficam literais. */
const LINK_GROUPS = [
  {
    titleKey: 'footer.support',
    links: [
      { labelKey: 'footer.terms', href: '/terms/index.html' },
      { labelKey: 'footer.privacy', href: '/privacy/index.html' },
      { labelKey: 'footer.contact', href: WHATSAPP_CTA, external: true },
    ],
  },
  {
    titleKey: 'footer.social',
    links: [
      {
        label: 'Instagram',
        href: 'https://www.instagram.com/squadcom_br/',
        external: true,
      },
      {
        label: 'Tiktok',
        href: 'https://www.tiktok.com/@squadcom_br?_r=1&_t=ZS-97q74pQJjLF',
        external: true,
      },
      {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/company/innerai/posts/?feedView=all',
        external: true,
      },
    ],
  },
];

function Footer() {
  const { t } = useLocale();
  return (
    <footer className={styles.footer}>
      <div className={styles.card}>
        <div className={styles.columns}>
          {LINK_GROUPS.map(({ titleKey, links }) => {
            const title = t(titleKey);
            return (
              <nav key={titleKey} className={styles.column} aria-label={title}>
                <p className={styles.columnTitle}>{title}</p>
                <ul className={styles.linkList}>
                  {links.map(({ label, labelKey, href, external }) => {
                    const text = labelKey ? t(labelKey) : label;
                    return (
                      <li key={text}>
                        <a
                          href={external ? href : withBase(href)}
                          className={styles.link}
                          {...(external && {
                            target: '_blank',
                            rel: 'noopener noreferrer',
                          })}
                        >
                          {text}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            );
          })}
        </div>

        <img src={wordmark} alt="squad.com" className={styles.wordmark} />
      </div>

      {/* Outside the white card, sitting on the footer background */}
      <p className={styles.legal}>
        <span>CNPJ: 42.888.509/0001-62</span>
        <span>© 2026 Squad.com</span>
      </p>
    </footer>
  );
}

export default Footer;
