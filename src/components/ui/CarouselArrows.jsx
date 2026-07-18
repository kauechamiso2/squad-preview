import styles from './CarouselArrows.module.css';

function ChevronIcon({ flipped = false }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      style={flipped ? { transform: 'scaleX(-1)' } : undefined}
    >
      <path
        d="M9 5l7 7-7 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* Prev/next arrow pair used by the carousel sections */
function CarouselArrows({ canPrev, canNext, onPrev, onNext }) {
  return (
    <div className={styles.arrows}>
      <button
        type="button"
        className={styles.arrowButton}
        aria-label="Anterior"
        disabled={!canPrev}
        onClick={onPrev}
      >
        <ChevronIcon flipped />
      </button>
      <button
        type="button"
        className={styles.arrowButton}
        aria-label="Próximo"
        disabled={!canNext}
        onClick={onNext}
      >
        <ChevronIcon />
      </button>
    </div>
  );
}

export default CarouselArrows;
