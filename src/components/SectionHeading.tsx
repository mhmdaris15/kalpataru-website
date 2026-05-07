import { motion } from 'framer-motion';
import { type ReactNode } from 'react';
import { OrnamentDivider } from './OrnamentDivider';

type Props = {
  eyebrow?: string;
  scriptLabel?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: 'left' | 'center';
  className?: string;
};

export function SectionHeading({
  eyebrow,
  scriptLabel,
  title,
  subtitle,
  align = 'center',
  className = '',
}: Props) {
  const alignment =
    align === 'center'
      ? 'items-center text-center'
      : 'items-start text-left';

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className={`flex flex-col gap-5 ${alignment} ${className}`}
    >
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      {scriptLabel && align === 'center' && <OrnamentDivider label={scriptLabel} />}
      {scriptLabel && align === 'left' && (
        <p className="script-accent text-2xl">{scriptLabel}</p>
      )}
      <h2 className="display-lg max-w-4xl text-balance text-cream-50">{title}</h2>
      {subtitle && (
        <p className="max-w-2xl text-base leading-relaxed text-cream-200/75 sm:text-lg">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
