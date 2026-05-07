import { Link } from 'react-router';
import { BanyanIcon } from './BanyanIcon';

type LogoProps = {
  variant?: 'horizontal' | 'mark' | 'stacked';
  className?: string;
};

export function Logo({ variant = 'horizontal', className = '' }: LogoProps) {
  if (variant === 'mark') {
    return (
      <Link to="/" aria-label="Kalpataru — home" className={`inline-flex text-gold-400 ${className}`}>
        <BanyanIcon className="h-9 w-9" />
      </Link>
    );
  }

  if (variant === 'stacked') {
    return (
      <Link to="/" aria-label="Kalpataru — home" className={`inline-flex flex-col items-center gap-2 text-cream-100 ${className}`}>
        <BanyanIcon className="h-12 w-12 text-gold-400" />
        <span className="font-display text-2xl tracking-[0.32em] uppercase">Kalpataru</span>
      </Link>
    );
  }

  return (
    <Link
      to="/"
      aria-label="Kalpataru — home"
      className={`group inline-flex items-center gap-3 text-cream-100 ${className}`}
    >
      <span className="relative grid h-10 w-10 place-items-center rounded-full bg-emerald-900/60 ring-1 ring-gold-500/30 transition group-hover:ring-gold-400/70">
        <BanyanIcon className="h-7 w-7 text-gold-400" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-xl tracking-[0.28em] uppercase">Kalpataru</span>
        <span className="mt-1 text-[10px] tracking-[0.36em] uppercase text-cream-300/70">
          Cultural · Indonesia
        </span>
      </span>
    </Link>
  );
}
