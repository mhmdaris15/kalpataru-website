import { motion } from 'framer-motion';
import { type HTMLAttributes } from 'react';

type Props = HTMLAttributes<HTMLDivElement> & {
  src: string;
  alt: string;
  /** Aspect ratio class, e.g. 'aspect-[4/5]' */
  aspect?: string;
  /** Direction the mask wipes from when revealing */
  from?: 'bottom' | 'top' | 'left' | 'right';
  delay?: number;
  rounded?: string;
  imgClassName?: string;
};

/**
 * Image revealed via a clip-path mask wipe + soft scale on viewport entry.
 *
 * The mask is on a wrapper div over the <img>, not the <img> itself, so the
 * browser still loads the asset eagerly even while the wrapper is clipped.
 * (We also intentionally skip `loading="lazy"` here — clipped images never
 * trigger their lazy fetch and stay broken until the mask animates open.)
 */
export function ImageReveal({
  src,
  alt,
  aspect = 'aspect-[4/5]',
  from = 'bottom',
  delay = 0,
  rounded = 'rounded-3xl',
  className = '',
  imgClassName = '',
  ...rest
}: Props) {
  const initial: Record<string, string> = {
    bottom: 'inset(100% 0% 0% 0%)',
    top: 'inset(0% 0% 100% 0%)',
    left: 'inset(0% 100% 0% 0%)',
    right: 'inset(0% 0% 0% 100%)',
  };

  return (
    <div
      {...rest}
      className={`relative overflow-hidden ${aspect} ${rounded} ${className}`}
    >
      {/* Eager-loaded image at the back, kept always rendered to avoid the
          lazy-load + clipPath deadlock. */}
      <motion.img
        initial={{ scale: 1.18 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1], delay }}
        src={src}
        alt={alt}
        className={`absolute inset-0 h-full w-full object-cover ${imgClassName}`}
      />
      {/* Sliding emerald mask that animates open */}
      <motion.span
        aria-hidden="true"
        initial={{ clipPath: 'inset(0% 0% 0% 0%)' }}
        whileInView={{ clipPath: initial[from] }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay }}
        className="absolute inset-0 bg-emerald-950"
      />
    </div>
  );
}
