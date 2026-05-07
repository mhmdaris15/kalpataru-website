import type { Variants, Transition } from 'framer-motion';

export const EASE_CINEMATIC = [0.22, 1, 0.36, 1] as const;
export const EASE_SOFT = [0.65, 0, 0.35, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: EASE_CINEMATIC },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 1.2, ease: EASE_CINEMATIC },
  },
};

export const stagger = (delayChildren = 0, staggerChildren = 0.08): Variants => ({
  hidden: {},
  show: { transition: { delayChildren, staggerChildren } },
});

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.9, ease: EASE_CINEMATIC },
  },
};

/** Used for reveal-on-scroll word-by-word headings */
export const wordReveal: Variants = {
  hidden: { y: '110%', opacity: 0 },
  show: (i: number = 0) => ({
    y: '0%',
    opacity: 1,
    transition: { duration: 0.95, ease: EASE_CINEMATIC, delay: i * 0.06 },
  }),
};

export const pageEnter: Transition = { duration: 0.7, ease: EASE_CINEMATIC };
