import { useEffect, useRef, useState } from 'react';
import { Brain, PuzzlePiece, Storefront } from '@phosphor-icons/react';
import Button from '../ui/Button';
import logo from '../../assets/logo-squad.svg';
import avatarMaky from '../../assets/avatar-maky.png';
import avatarWaz from '../../assets/avatar-waz.png';
import avatarFin from '../../assets/avatar-fin.png';
import avatarOpy from '../../assets/avatar-opy-new.png';
import avatarPipo from '../../assets/avatar-pipo-new.png';
import avatarJuri from '../../assets/avatar-juri-new.png';
import { WHATSAPP_CONTACT } from '../../links';
import { withBase } from '../../base';
import { useLocale } from '../../i18n/LocaleContext.jsx';
import LanguageSelector from './LanguageSelector';
import styles from './Navbar.module.css';

const AGENTS = [
  { name: 'Waz', segKey: 'nav.segments.waz', href: '/waz', avatar: avatarWaz },
  { name: 'Maky', segKey: 'nav.segments.maky', href: '/maky', avatar: avatarMaky },
  { name: 'Fin', segKey: 'nav.segments.fin', href: '/fin', avatar: avatarFin },
  { name: 'Opy', segKey: 'nav.segments.opy', href: '/opy', avatar: avatarOpy },
  { name: 'Pipo', segKey: 'nav.segments.pipo', href: '/pipo', avatar: avatarPipo },
  { name: 'Juri', segKey: 'nav.segments.juri', href: '/juri', avatar: avatarJuri },
];

const BUSINESS = [
  { titleKey: 'nav.business.conhecimento', href: '/conhecimento', Icon: Brain, bg: '#efeaff', color: '#7c5cff' },
  { titleKey: 'nav.business.catalogo', href: '/catalogo', Icon: Storefront, bg: '#eaf6ec', color: '#2f9e44' },
  { titleKey: 'nav.business.integracoes', href: '/integracoes', Icon: PuzzlePiece, bg: '#e8f3ff', color: '#1971c2' },
];

/* "Recursos" está temporariamente oculto (mantido no código para reativar). */
const SHOW_RECURSOS = false;

function Chevron({ className }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 6l4 4 4-4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function AgentLink({ agent, className }) {
  const { t } = useLocale();
  return (
    <a href={withBase(agent.href)} className={className}>
      <span className={styles.agentAvatar}>
        <img src={agent.avatar} alt="" aria-hidden="true" />
      </span>
      <span className={styles.agentText}>
        <span className={styles.agentSegment}>{t(agent.segKey)}</span>
        <span className={styles.agentName}>{agent.name}</span>
      </span>
    </a>
  );
}

function BusinessLink({ item, className }) {
  const { t } = useLocale();
  const { Icon } = item;
  return (
    <a href={withBase(item.href)} className={className}>
      <span className={styles.bizIcon} style={{ background: item.bg, color: item.color }}>
        <Icon size={24} weight="regular" />
      </span>
      <span className={styles.agentText}>
        <span className={styles.agentSegment}>{t(item.titleKey)}</span>
      </span>
    </a>
  );
}

function Navbar() {
  const { t } = useLocale();
  const [menuOpen, setMenuOpen] = useState(false);
  const [agentesOpen, setAgentesOpen] = useState(false);
  const [negocioOpen, setNegocioOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null); // 'agentes' | 'negocio' | null
  // Hides on scroll down, reveals on scroll up (skipped near the very top)
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  // "Planos" ancora na tabela de preços da home. Se ela existe na página atual,
  // rola suave; senão, deixa o link navegar para /#planos.
  const planosHref = `${withBase('/')}#planos`;
  const goToPlanos = (e) => {
    const el = document.getElementById('planos');
    if (el) {
      e.preventDefault();
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
    }
    setMenuOpen(false);
  };

  useEffect(() => {
    lastScrollY.current = window.scrollY;
    let ticking = false;

    const updateNavbar = () => {
      const currentScrollY = window.scrollY;
      const scrollingDown = currentScrollY > lastScrollY.current;
      // Keep the bar open while a mobile menu is expanded
      setHidden(scrollingDown && currentScrollY > 96 && !menuOpen);
      lastScrollY.current = currentScrollY;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateNavbar);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [menuOpen]);

  return (
    <header className={`${styles.navbar} ${hidden ? styles.hidden : ''}`}>
      <div className={styles.bar}>
        <div className={styles.left}>
          <a href={withBase('/')} aria-label="Squad.com">
            <img src={logo} alt="squad.com" className={styles.logo} />
          </a>
          {/* Inline nav — desktop only */}
          <nav className={styles.links}>
            <div
              className={styles.navItem}
              onMouseEnter={() => setOpenMenu('agentes')}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <button
                type="button"
                className={`${styles.link} ${openMenu === 'agentes' ? styles.linkActive : ''}`}
                aria-expanded={openMenu === 'agentes'}
              >
                {t('nav.agents')}
                <Chevron
                  className={`${styles.chevron} ${openMenu === 'agentes' ? styles.chevronOpen : ''}`}
                />
              </button>
              {openMenu === 'agentes' && (
                <div className={styles.megaWrap}>
                  <div className={styles.megaPanel}>
                    <div className={styles.agentsGrid}>
                      {AGENTS.map((a) => (
                        <AgentLink key={a.name} agent={a} className={styles.agentItem} />
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className={styles.navItem}>
              <a href={withBase('/aprendizagem')} className={styles.link}>
                {t('nav.learning')}
              </a>
            </div>

            {/* Planos — ancora suave para a tabela de preços da home */}
            <div className={styles.navItem}>
              <a href={planosHref} className={styles.link} onClick={goToPlanos}>
                {t('nav.plans')}
              </a>
            </div>

            {SHOW_RECURSOS && (
              <div
                className={styles.navItem}
                onMouseEnter={() => setOpenMenu('negocio')}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <button
                  type="button"
                  className={`${styles.link} ${openMenu === 'negocio' ? styles.linkActive : ''}`}
                  aria-expanded={openMenu === 'negocio'}
                >
                  {t('nav.resources')}
                  <Chevron
                    className={`${styles.chevron} ${openMenu === 'negocio' ? styles.chevronOpen : ''}`}
                  />
                </button>
                {openMenu === 'negocio' && (
                  <div className={styles.megaWrap}>
                    <div className={styles.megaPanel}>
                      <div className={styles.bizGrid}>
                        {BUSINESS.map((b) => (
                          <BusinessLink key={b.href} item={b} className={styles.agentItem} />
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </nav>
        </div>

        <div className={styles.actions}>
          <LanguageSelector />
          <Button size="md" href={WHATSAPP_CONTACT} withArrow>
            {t('nav.contact')}
          </Button>
          <button
            type="button"
            className={styles.hamburger}
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Hamburger dropdown — tablet & mobile */}
      {menuOpen && (
        <div className={styles.menu}>
          <button
            type="button"
            className={styles.menuItem}
            aria-expanded={agentesOpen}
            onClick={() => setAgentesOpen((o) => !o)}
          >
            {t('nav.agents')}
            <Chevron
              className={`${styles.menuChevron} ${agentesOpen ? styles.menuChevronOpen : ''}`}
            />
          </button>
          <div className={`${styles.submenu} ${agentesOpen ? styles.submenuOpen : ''}`}>
            {AGENTS.map((a) => (
              <AgentLink key={a.name} agent={a} className={styles.submenuItem} />
            ))}
          </div>

          <a href={withBase('/aprendizagem')} className={styles.menuItem}>
            {t('nav.learning')}
          </a>

          {/* Planos — ancora suave para a tabela de preços da home */}
          <a href={planosHref} className={styles.menuItem} onClick={goToPlanos}>
            {t('nav.plans')}
          </a>

          {SHOW_RECURSOS && (
            <>
              <button
                type="button"
                className={styles.menuItem}
                aria-expanded={negocioOpen}
                onClick={() => setNegocioOpen((o) => !o)}
              >
                {t('nav.resources')}
                <Chevron
                  className={`${styles.menuChevron} ${negocioOpen ? styles.menuChevronOpen : ''}`}
                />
              </button>
              <div className={`${styles.submenu} ${negocioOpen ? styles.submenuOpen : ''}`}>
                {BUSINESS.map((b) => (
                  <BusinessLink key={b.href} item={b} className={styles.submenuItem} />
                ))}
              </div>
            </>
          )}
        </div>
      )}
    </header>
  );
}

export default Navbar;
