import wordmark from '../../assets/wordmark-squad.svg';
import { WHATSAPP_CTA } from '../../links';
import { withBase } from '../../base';
import styles from './Footer.module.css';

const LINK_GROUPS = [
  {
    title: 'Suporte',
    links: [
      { label: 'Termos de Serviço', href: '/terms/index.html' },
      { label: 'Política de Privacidade', href: '/privacy/index.html' },
      {
        label: 'Contato',
        href: WHATSAPP_CTA,
        external: true,
      },
    ],
  },
  {
    title: 'Redes',
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
  return (
    <footer className={styles.footer}>
      <div className={styles.card}>
        <div className={styles.columns}>
          {LINK_GROUPS.map(({ title, links }) => (
            <nav key={title} className={styles.column} aria-label={title}>
              <p className={styles.columnTitle}>{title}</p>
              <ul className={styles.linkList}>
                {links.map(({ label, href, external }) => (
                  <li key={label}>
                    <a
                      href={external ? href : withBase(href)}
                      className={styles.link}
                      {...(external && {
                        target: '_blank',
                        rel: 'noopener noreferrer',
                      })}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <img src={wordmark} alt="squad.com" className={styles.wordmark} />
      </div>
    </footer>
  );
}

export default Footer;
