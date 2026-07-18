import { useCallback, useRef, useState } from 'react';

/**
 * Shared logic for horizontal scroll carousels: tracks whether each arrow
 * is enabled and scrolls the container by one stride.
 */
export function useCarouselTrack(stride) {
  const trackRef = useRef(null);
  const [canScroll, setCanScroll] = useState({ prev: false, next: true });

  const updateArrows = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    setCanScroll({
      prev: track.scrollLeft > 0,
      next: track.scrollLeft < track.scrollWidth - track.clientWidth - 1,
    });
  }, []);

  const scroll = useCallback(
    (direction) => {
      trackRef.current?.scrollBy({
        left: direction * stride,
        behavior: 'smooth',
      });
    },
    [stride],
  );

  return { trackRef, canScroll, updateArrows, scroll };
}
