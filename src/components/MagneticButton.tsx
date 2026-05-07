import { type ButtonHTMLAttributes, type ReactNode, forwardRef } from 'react';
import { useMagnetic } from '@/hooks/useMagnetic';

type Variant = 'primary' | 'ghost' | 'gold';
type Size = 'md' | 'lg';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
  icon?: ReactNode;
  iconRight?: ReactNode;
  asLink?: boolean;
  href?: string;
};

const baseClasses =
  'group relative inline-flex select-none items-center justify-center gap-3 ' +
  'whitespace-nowrap font-sans font-medium tracking-[0.18em] uppercase ' +
  'transition-[color,box-shadow,background] duration-500 ease-out ' +
  'focus-visible:outline-2 focus-visible:outline-gold-400';

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-gold-500 text-emerald-950 hover:bg-gold-400 ' +
    'shadow-[0_10px_40px_-12px_rgba(212,160,23,0.6)] ' +
    'hover:shadow-[0_18px_60px_-10px_rgba(232,197,71,0.55)]',
  gold:
    'bg-transparent text-gold-300 ring-1 ring-inset ring-gold-500/50 ' +
    'hover:text-emerald-950 hover:bg-gold-400 hover:ring-gold-400',
  ghost:
    'bg-transparent text-cream-100 ring-1 ring-inset ring-cream-200/20 ' +
    'hover:ring-cream-200/60 hover:text-cream-50',
};

const sizeClasses: Record<Size, string> = {
  md: 'text-[11px] px-6 py-3 rounded-full',
  lg: 'text-xs px-8 py-4 rounded-full',
};

export const MagneticButton = forwardRef<HTMLButtonElement, Props>(function MagneticButton(
  { variant = 'primary', size = 'md', icon, iconRight, children, className = '', ...rest },
  _ref,
) {
  const magneticRef = useMagnetic<HTMLSpanElement>(0.25, 60);

  return (
    <span ref={magneticRef} className="inline-flex will-change-transform">
      <button
        {...rest}
        className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      >
        {icon && (
          <span className="transition-transform duration-500 group-hover:-translate-x-0.5">
            {icon}
          </span>
        )}
        <span className="relative">
          {children}
          <span className="pointer-events-none absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-current transition-transform duration-700 group-hover:scale-x-100" />
        </span>
        {iconRight && (
          <span className="transition-transform duration-500 group-hover:translate-x-0.5">
            {iconRight}
          </span>
        )}
      </button>
    </span>
  );
});
