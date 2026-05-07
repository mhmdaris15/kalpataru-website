import { useEffect, useRef } from 'react';

/**
 * Magnetic hover effect for buttons/icons.
 * The element subtly translates toward the cursor when it enters the
 * surrounding "magnetic field" radius, easing back when it leaves.
 */
export function useMagnetic<T extends HTMLElement>(strength = 0.35, radius = 80) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (window.matchMedia('(hover: none)').matches) return;

    let raf = 0;
    let tx = 0, ty = 0;
    let cx = 0, cy = 0;

    const animate = () => {
      cx += (tx - cx) * 0.18;
      cy += (ty - cy) * 0.18;
      el.style.transform = `translate(${cx.toFixed(2)}px, ${cy.toFixed(2)}px)`;
      if (Math.abs(tx - cx) > 0.05 || Math.abs(ty - cy) > 0.05) {
        raf = requestAnimationFrame(animate);
      } else {
        raf = 0;
      }
    };

    const onMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const mx = e.clientX - (rect.left + rect.width / 2);
      const my = e.clientY - (rect.top + rect.height / 2);
      const dist = Math.hypot(mx, my);
      const max = Math.max(rect.width, rect.height) / 2 + radius;
      if (dist < max) {
        tx = mx * strength;
        ty = my * strength;
      } else {
        tx = 0; ty = 0;
      }
      if (!raf) raf = requestAnimationFrame(animate);
    };

    const onLeave = () => {
      tx = 0; ty = 0;
      if (!raf) raf = requestAnimationFrame(animate);
    };

    window.addEventListener('pointermove', onMove);
    el.addEventListener('pointerleave', onLeave);
    return () => {
      window.removeEventListener('pointermove', onMove);
      el.removeEventListener('pointerleave', onLeave);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [strength, radius]);

  return ref;
}
