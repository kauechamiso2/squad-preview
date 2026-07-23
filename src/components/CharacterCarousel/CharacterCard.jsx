import { useRef } from 'react';
import iconArrowUpright from '../../assets/icon-arrow-upright.svg';
import { withBase } from '../../base';
import { useLocale } from '../../i18n/LocaleContext.jsx';
import styles from './CharacterCard.module.css';

/* Peak tilt in degrees at the card edges (transitions.dev card tilt) */
const MAX_TILT = 8;

function CharacterCard({ character, onOpen }) {
  const { t } = useLocale();
  const { name, segment, description, avatar, skills } = character;
  const href = withBase(`/${name.toLowerCase()}`);
  const tiltRef = useRef(null);
  const cardRef = useRef(null);

  /* Pointer tracked on the flat outer wrapper so the rotating card
     never slips out from under the cursor. Mouse-only: touch keeps
     swiping the carousel. */
  const track = (event) => {
    if (event.pointerType !== 'mouse') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const wrapper = tiltRef.current;
    const card = cardRef.current;
    if (!wrapper || !card) return;
    const rect = wrapper.getBoundingClientRect();
    const px = Math.min(1, Math.max(0, (event.clientX - rect.left) / rect.width));
    const py = Math.min(1, Math.max(0, (event.clientY - rect.top) / rect.height));
    wrapper.dataset.hover = 'true';
    card.dataset.tilting = 'true';
    card.style.setProperty('--tilt-ry', `${((px - 0.5) * MAX_TILT).toFixed(2)}deg`);
    card.style.setProperty('--tilt-rx', `${((0.5 - py) * MAX_TILT).toFixed(2)}deg`);
    card.style.setProperty('--tilt-gx', `${(px * 100).toFixed(1)}%`);
    card.style.setProperty('--tilt-gy', `${(py * 100).toFixed(1)}%`);
  };

  const reset = () => {
    const wrapper = tiltRef.current;
    const card = cardRef.current;
    if (!wrapper || !card) return;
    wrapper.dataset.hover = 'false';
    card.dataset.tilting = 'false';
    card.style.setProperty('--tilt-rx', '0deg');
    card.style.setProperty('--tilt-ry', '0deg');
  };

  return (
    <a
      href={href}
      className={styles.tilt}
      ref={tiltRef}
      onPointerMove={track}
      onPointerLeave={reset}
      aria-label={`Conhecer ${name} — ${segment}`}
    >
      <article className={styles.card} ref={cardRef}>
      <div className={styles.info}>
        <div
          className={`${styles.avatar} ${
            avatar.composed ? styles[avatar.composed.tile] : ''
          }`}
        >
          <img
            src={avatar.src}
            alt={name}
            className={avatar.composed ? styles.avatarSheet : styles.avatarImage}
            style={
              avatar.composed
                ? {
                    width: avatar.composed.width,
                    left: avatar.composed.left,
                    top: avatar.composed.top,
                  }
                : undefined
            }
          />
        </div>
        <div className={styles.heading}>
          <p className={styles.name}>{name}</p>
          <h3 className={styles.segment}>{segment}</h3>
          <p className={styles.description}>{description}</p>
        </div>
      </div>

      <div className={styles.skills}>
        <p className={styles.skillsLabel}>{t('agentCard.tools')}</p>
        <ul className={styles.skillList}>
          {skills
            .filter(({ cardHidden }) => !cardHidden)
            .map((skill) => {
              const { label, icon = true, Icon } = skill;
              return (
            <li
              key={label}
              className={styles.skillTag}
              onClick={(event) => {
                /* Keep the pill opening the modal instead of following the
                   card link — preventDefault cancels the <a> navigation,
                   stopPropagation guards any ancestor handlers. */
                event.preventDefault();
                event.stopPropagation();
                /* "Ver mais" has no own modal: opens the first tool */
                onOpen(icon ? skill : null);
              }}
            >
              {icon && Icon && (
                <Icon size={22} weight="regular" className={styles.skillIcon} />
              )}
              <span>{label}</span>
              {icon ? (
                <img
                  src={iconArrowUpright}
                  alt=""
                  className={`${styles.skillIcon} ${styles.skillArrow}`}
                />
              ) : (
                /* "Ver mais": a "+" slides in to the right on hover */
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                  className={styles.plusIcon}
                >
                  <path
                    d="M8 3v10M3 8h10"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              )}
            </li>
              );
            })}
        </ul>
      </div>

        <div className={styles.glare} aria-hidden="true" />
      </article>
    </a>
  );
}

export default CharacterCard;
