/* Seta que surge deslizando à direita no hover dos botões — mesmo desenho do
   Button `withArrow` do site. Decorativa (aria-hidden no wrapper). */
function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
      <path
        d="M3 9h11M10 4.5L14.5 9 10 13.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default ArrowIcon;
