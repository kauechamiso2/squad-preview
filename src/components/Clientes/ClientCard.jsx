import { useRef } from 'react';
import styles from './ClientCard.module.css';

function PlayIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" aria-hidden="true">
      <path d="M9 6.5v13l11-6.5L9 6.5z" fill="currentColor" />
    </svg>
  );
}

/**
 * Featured case: video thumbnail on the left, testimonial text on the right.
 * Desktop: hovering plays a short preview clip behind the play button.
 * Clicking anywhere on the card opens the full-video modal.
 */
function ClientCard({ client, onOpen }) {
  const videoRef = useRef(null);

  const playVideo = () => videoRef.current?.play();
  const stopVideo = () => {
    const video = videoRef.current;
    if (!video) return;
    video.pause();
    video.currentTime = 0;
  };

  return (
    <article
      className={styles.card}
      onClick={onOpen}
      onMouseEnter={playVideo}
      onMouseLeave={stopVideo}
    >
      <div className={styles.media}>
        <img src={client.image} alt="" className={styles.photo} />
        <video
          ref={videoRef}
          className={styles.video}
          src={client.previewVideo || client.video}
          muted
          loop
          playsInline
          preload="auto"
        />
        <span className={styles.playButton} aria-hidden="true">
          <PlayIcon />
        </span>
      </div>

      <div className={styles.body}>
        <p className={styles.quote}>{client.quote}</p>
        <div className={styles.person}>
          <div className={styles.identity}>
            <p className={styles.name}>{client.name}</p>
            <p className={styles.role}>{client.role}</p>
          </div>
          <img src={client.logo} alt={client.logoAlt} className={styles.logo} />
        </div>
      </div>
    </article>
  );
}

export default ClientCard;
