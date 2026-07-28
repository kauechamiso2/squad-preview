import { useCallback, useEffect, useRef, useState } from 'react';

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

  /* The track only scrolls on the X axis (overflow-y: hidden), but browsers
     auto-redirect a vertical-only wheel/trackpad gesture into horizontal
     scrollLeft movement on any element that can scroll horizontally — which
     traps page scrolling whenever the cursor is over the carousel. When the
     gesture is predominantly vertical, scroll the page instead and stop the
     browser from redirecting it into the track. A predominantly horizontal
     gesture (trackpad swipe, shift+wheel) is left alone to scroll the track
     natively. Needs a real listener (not React's onWheel) so preventDefault
     can stop the browser's own default action. */
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const handleWheel = (event) => {
      if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
        event.preventDefault();
        window.scrollBy({ top: event.deltaY, left: 0 });
      }
    };
    track.addEventListener('wheel', handleWheel, { passive: false });
    return () => track.removeEventListener('wheel', handleWheel);
  }, []);

  return { trackRef, canScroll, updateArrows, scroll };
}
