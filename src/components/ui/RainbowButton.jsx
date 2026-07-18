import styles from './RainbowButton.module.css';

/**
 * Adapted from the shadcn "rainbow-button": black button with an animated
 * rainbow gradient border, a blurred rainbow glow underneath, an arrow and
 * a golden "coin" shine that sweeps across on hover.
 */
function RainbowButton({ children, href, ...props }) {
  const inner = (
    <>
      <span className={styles.shine} aria-hidden="true" />
      <span className={styles.label}>
        {children}
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M3 9h11M10 4.5L14.5 9 10 13.5"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </>
  );

  if (href) {
    return (
      <a
        className={styles.rainbow}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {inner}
      </a>
    );
  }

  return (
    <button className={styles.rainbow} {...props}>
      {inner}
    </button>
  );
}

export default RainbowButton;
