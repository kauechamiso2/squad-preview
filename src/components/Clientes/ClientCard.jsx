import { useEffect, useRef, useState } from 'react';
import { useLocale } from '../../i18n/LocaleContext.jsx';
import VidalyticsEmbed from './VidalyticsEmbed';
import styles from './ClientCard.module.css';

function PlayIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 26 26" aria-hidden="true">
      <path d="M9 6.5v13l11-6.5L9 6.5z" fill="currentColor" />
    </svg>
  );
}

/**
 * Vertical testimonial card: poster fills it, quote/person/logo sit on top.
 *
 * Cards with `client.vidalytics` show a play button that opens the shared
 * ClientModal — same full 16:9 video + Vidalytics default player used
 * everywhere else on the site, rather than a cropped copy inline. On hover,
 * the same embed also fades in over the poster as a silent preview loop
 * (matching the original featured-card hover). It's unmounted whenever the
 * modal for this card is open, since a Vidalytics embed id can only run once
 * per page.
 *
 * The preview reuses the embed purely as a video source: the player's own
 * chrome (controls, unmute prompt) is hidden in CSS and the raw <video> is
 * cropped to fill the card, so the hover reads as footage, not a player.
 *
 * Cards without `client.vidalytics` are static placeholders — poster and
 * text only, no play button — until a real video is assigned to them.
 */
function ClientCard({ client, onOpen, isModalOpen }) {
  const { t } = useLocale();
  const [isHovering, setIsHovering] = useState(false);
  const previewRef = useRef(null);
  const hasVideo = Boolean(client.vidalytics);
  const label = `${t('home.clientes.watch')} ${client.name}`;
  const showPreview = hasVideo && isHovering && !isModalOpen;

  /* The player mounts its <video> async, starts it with sound, and pauses it
     on its own once its (hidden) UI settles. Both are answered by event, not
     by polling: a timer is both too slow to beat the first audio frames and
     throttled enough to leave the preview stopped for seconds at a time. */
  useEffect(() => {
    if (!showPreview) return undefined;

    const root = previewRef.current;
    if (!root) return undefined;

    let video = null;

    const silence = () => {
      video.muted = true;
      video.volume = 0;
    };

    const resume = () => {
      video.play().catch(() => {});
    };

    const attach = (node) => {
      if (video) return;
      video = node;
      silence();
      video.loop = true;
      resume();
      video.addEventListener('volumechange', silence);
      video.addEventListener('pause', resume);
    };

    const found = root.querySelector('video');
    if (found) attach(found);

    const observer = new MutationObserver(() => {
      const node = root.querySelector('video');
      if (node) attach(node);
    });
    observer.observe(root, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      if (!video) return;
      video.removeEventListener('volumechange', silence);
      video.removeEventListener('pause', resume);
    };
  }, [showPreview]);

  return (
    <article
      className={styles.card}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <img src={client.poster} alt="" className={styles.poster} />

      {showPreview && (
        <div className={styles.preview} ref={previewRef} aria-hidden="true">
          <VidalyticsEmbed
            key={client.vidalytics.id}
            embedId={client.vidalytics.id}
            embedUrl={client.vidalytics.url}
          />
        </div>
      )}

      {/* Bottom-up scrim: keeps the overlaid text readable over any frame */}
      <span className={styles.scrim} aria-hidden="true" />

      {/* Column so the button centres in the space left above the text —
          long quotes push it up instead of colliding with it. */}
      <div className={styles.content}>
        <div className={styles.stage}>
          {hasVideo && (
            <button
              type="button"
              className={styles.playButton}
              onClick={onOpen}
              aria-label={label}
            >
              <PlayIcon />
            </button>
          )}
        </div>

        <div className={styles.body}>
          <p className={styles.quote}>{client.quote}</p>
          <div className={styles.person}>
            <div className={styles.identity}>
              <p className={styles.name}>{client.name}</p>
              <p className={styles.role}>{client.role}</p>
            </div>
            <img
              src={client.logo}
              alt={client.logoAlt}
              className={styles.logo}
            />
          </div>
        </div>
      </div>
    </article>
  );
}

export default ClientCard;
