import { BanyanIcon } from './BanyanIcon';

type Props = {
  label?: string;
  className?: string;
};

export function OrnamentDivider({ label, className = '' }: Props) {
  return (
    <div
      className={`flex items-center justify-center gap-4 text-gold-400 ${className}`}
      role="presentation"
    >
      <span className="h-px w-16 bg-gradient-to-r from-transparent to-gold-500/60 sm:w-24" />
      <BanyanIcon className="h-5 w-5 shrink-0" />
      {label && (
        <span className="script-accent text-lg whitespace-nowrap">{label}</span>
      )}
      <BanyanIcon className="h-5 w-5 shrink-0" />
      <span className="h-px w-16 bg-gradient-to-l from-transparent to-gold-500/60 sm:w-24" />
    </div>
  );
}
