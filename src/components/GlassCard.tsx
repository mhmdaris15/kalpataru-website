import { type HTMLAttributes, type ReactNode } from 'react';

type Props = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  warm?: boolean;
};

export function GlassCard({ children, warm, className = '', ...rest }: Props) {
  return (
    <div
      {...rest}
      className={
        `relative overflow-hidden rounded-3xl ` +
        (warm ? 'glass-card-warm ' : 'glass-card ') +
        className
      }
    >
      <div className="bg-noise-overlay" />
      {children}
    </div>
  );
}
