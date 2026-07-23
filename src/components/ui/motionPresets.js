// Shared "gentle" scroll-reveal used across page sections below the hero:
// fade + slight slide-up as each section enters the viewport, once.
export const revealVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export const revealViewport = { once: true, amount: 0.2 };
