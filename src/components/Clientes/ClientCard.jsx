import { useRef } from 'react';
import styles from './ClientCard.module.css';

/**
 * Featured case: a full-bleed portrait video card. The static thumbnail shows
 * by default; on hover a short muted clip loops over it. Clicking (or Enter/
 * Space) opens the full-video modal. Quote, name/role and the company logo are
 * overlaid on the bottom, over a dark gradient for legibility.
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

  const logoClass =
    client.logoVariant === 'emblem' ? styles.logoEmblem : styles.logoWordmark;
  const previewSrc = client.previewVideo || client.video;

  return (
    <article
      className={styles.card}
      onClick={onOpen}
      onMouseEnter={playVideo}
      onMouseLeave={stopVideo}
      role="button"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          onOpen();
        }
      }}
    >
      <img
        src={client.image}
        alt=""
        className={styles.photo}
        style={client.imagePosition ? { objectPosition: client.imagePosition } : undefined}
      />
      {previewSrc && (
        <video
          ref={videoRef}
          className={styles.video}
          src={previewSrc}
          muted
          loop
          playsInline
          preload="auto"
          style={client.videoPosition ? { objectPosition: client.videoPosition } : undefined}
        />
      )}
      <div className={styles.overlay} aria-hidden="true" />

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
            className={`${styles.logo} ${logoClass}`}
          />
        </div>
      </div>
    </article>
  );
}

export default ClientCard;
