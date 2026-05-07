import type { SVGProps } from 'react';

/**
 * Stylized Kalpataru / Banyan tree-of-life motif.
 * Inherits stroke color from `currentColor` so it can be tinted by parents.
 */
export function BanyanIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {/* canopy halo */}
      <circle cx="32" cy="24" r="20" strokeWidth="0.8" strokeDasharray="1 3" opacity="0.35" />
      {/* main branches */}
      <g strokeWidth="1.3">
        <path d="M32 44 V8" />
        <path d="M32 16 L20 6" />
        <path d="M32 16 L44 6" />
        <path d="M32 22 L14 13" />
        <path d="M32 22 L50 13" />
        <path d="M32 28 L10 24" />
        <path d="M32 28 L54 24" />
        <path d="M32 34 L14 34" />
        <path d="M32 34 L50 34" />
        <path d="M32 38 L20 42" />
        <path d="M32 38 L44 42" />
      </g>
      {/* leaf dots at branch tips */}
      <g fill="currentColor" stroke="none">
        <circle cx="20" cy="6" r="1.3" />
        <circle cx="44" cy="6" r="1.3" />
        <circle cx="14" cy="13" r="1.1" />
        <circle cx="50" cy="13" r="1.1" />
        <circle cx="10" cy="24" r="1" />
        <circle cx="54" cy="24" r="1" />
        <circle cx="14" cy="34" r="1" />
        <circle cx="50" cy="34" r="1" />
        <circle cx="20" cy="42" r="0.9" />
        <circle cx="44" cy="42" r="0.9" />
        <circle cx="32" cy="8" r="1.4" />
      </g>
      {/* trunk (thicker) */}
      <g strokeWidth="2.6">
        <path d="M28 44 Q28 52 24 58" />
        <path d="M36 44 Q36 52 40 58" />
        <path d="M32 44 V58" />
      </g>
      {/* root flare */}
      <path d="M22 58 H42" strokeWidth="1.3" opacity="0.7" />
    </svg>
  );
}
