import { useScroll, useTransform, type MotionValue } from 'framer-motion';
import type { RefObject } from 'react';

/**
 * Returns a MotionValue<number> in pixels suitable for `y` transforms.
 * Use on an element wrapper to drive a child's parallax movement.
 */
export function useParallaxY(
  ref: RefObject<HTMLElement | null>,
  range: [number, number] = [-80, 80],
): MotionValue<number> {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  return useTransform(scrollYProgress, [0, 1], range);
}
