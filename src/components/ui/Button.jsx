import styles from './Button.module.css';

/**
 * Primary action button.
 * size: "md" (40px, navbar) | "lg" (56px, hero CTA with glow border)
 * variant: "solid" (black, default) | "outline" (white with border)
 * withArrow: reveals an arrow sliding right on hover
 * When `href` is passed, renders as an anchor styled like the button.
 */
function Button({
  children,
  size = 'md',
  variant = 'solid',
  withArrow = false,
  href,
  className: extraClassName,
  ...props
}) {
  const className = `${styles.button} ${styles[size]} ${styles[variant]} ${extraClassName || ''}`;

  const content = withArrow ? (
    <>
      {children}
      <span className={styles.arrow} aria-hidden="true">
        <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
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
  ) : (
    children
  );

  if (href) {
    return (
      <a
        className={className}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button className={className} {...props}>
      {content}
    </button>
  );
}

export default Button;
