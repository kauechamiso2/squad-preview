import styles from './ShineButton.module.css';

/**
 * Black CTA with a silver coin-shine sweep and a sliding arrow on hover.
 * Shared visual: Pricing's Business plan CTA and the Mentorias CTA.
 */
function ShineButton({ children, href, className: extraClassName, ...props }) {
  const className = `${styles.button}${extraClassName ? ` ${extraClassName}` : ''}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      {...props}
    >
      <span className={styles.shine} aria-hidden="true" />
      <span className={styles.label}>
        {children}
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          aria-hidden="true"
          className={styles.arrow}
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
    </a>
  );
}

export default ShineButton;
