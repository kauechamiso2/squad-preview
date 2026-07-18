import { useCallback, useRef, useState } from 'react';
import buttonStyles from './Button.module.css';
import styles from './HighlightButton.module.css';

/**
 * Button with a cursor-following blurred highlight on hover and a ripple
 * on click (adapted from the shadcn "highlight-button" to CSS Modules).
 * Shares the visual base with Button via size/variant.
 */
function HighlightButton({
  children,
  size = 'lg',
  variant = 'solid',
  highlightSize = 56,
  href,
  onClick,
  ...props
}) {
  const buttonRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [click, setClick] = useState(null);

  const handleMouseMove = useCallback((event) => {
    const rect = buttonRef.current?.getBoundingClientRect();
    if (!rect) return;
    setPosition({ x: event.clientX - rect.left, y: event.clientY - rect.top });
  }, []);

  const handleClick = useCallback(
    (event) => {
      const rect = buttonRef.current?.getBoundingClientRect();
      if (rect) {
        setClick({
          x: event.clientX - rect.left,
          y: event.clientY - rect.top,
          key: Date.now(),
        });
      }
      onClick?.(event);
    },
    [onClick],
  );

  const className = `${buttonStyles.button} ${buttonStyles[size]} ${buttonStyles[variant]} ${styles.highlight}`;
  const Tag = href ? 'a' : 'button';
  const tagProps = href
    ? { href, target: '_blank', rel: 'noopener noreferrer' }
    : {};

  return (
    <Tag
      ref={buttonRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => {
        setHovering(false);
        setClick(null);
      }}
      onClick={handleClick}
      {...tagProps}
      {...props}
    >
      {hovering && (
        <span
          className={styles.glow}
          style={{
            left: position.x,
            top: position.y,
            width: highlightSize,
            height: highlightSize,
          }}
        />
      )}

      {click && (
        <span
          key={click.key}
          className={styles.ripple}
          style={{ left: click.x, top: click.y }}
        />
      )}

      <span className={styles.label}>{children}</span>
    </Tag>
  );
}

export default HighlightButton;
