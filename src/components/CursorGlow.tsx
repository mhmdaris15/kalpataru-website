import { useEffect, useRef } from 'react';

/**
 * A soft golden glow that follows the cursor on devices with hover.
 * Honors prefers-reduced-motion and skips touch devices.
 */
export function CursorGlow() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(hover: none)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let raf = 0;
    let tx = window.innerWidth / 2, ty = window.innerHeight / 2;
    let cx = tx, cy = ty;

    const onMove = (e: PointerEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      if (!raf) raf = requestAnimationFrame(loop);
    };
    const loop = () => {
      cx += (tx - cx) * 0.12;
      cy += (ty - cy) * 0.12;
      el.style.transform = `translate3d(${cx - 200}px, ${cy - 200}px, 0)`;
      if (Math.hypot(tx - cx, ty - cy) > 0.3) {
        raf = requestAnimationFrame(loop);
      } else {
        raf = 0;
      }
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    return () => {
      window.removeEventListener('pointermove', onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[55] h-[400px] w-[400px] rounded-full mix-blend-screen will-change-transform"
      style={{
        background:
          'radial-gradient(closest-side, rgba(232,197,71,0.18), rgba(232,197,71,0.05) 45%, transparent 70%)',
      }}
    />
  );
}
