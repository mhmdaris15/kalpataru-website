import { motion, type HTMLMotionProps } from 'framer-motion';
import { wordReveal } from '@/animations/variants';

type Props = HTMLMotionProps<'span'> & {
  text: string;
  /** Element used to wrap the whole thing (default: span). */
  as?: 'span' | 'h1' | 'h2' | 'h3';
  /** Stagger delay between words */
  delay?: number;
  className?: string;
  wordClassName?: string;
};

/**
 * Splits `text` into words and reveals each from below with a staggered mask.
 * Triggers on viewport intersection (one-shot).
 */
export function RevealText({
  text,
  as = 'span',
  delay = 0,
  className = '',
  wordClassName = '',
  ...rest
}: Props) {
  const Tag: any = motion[as as keyof typeof motion];
  const words = text.split(' ');

  return (
    <Tag
      {...rest}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className={className}
      aria-label={text}
    >
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className={`inline-block overflow-hidden align-bottom pb-[0.12em] ${wordClassName}`}
          aria-hidden="true"
        >
          <motion.span
            custom={i + delay}
            variants={wordReveal}
            className="inline-block will-change-transform"
          >
            {word}
            {i < words.length - 1 ? ' ' : ''}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
