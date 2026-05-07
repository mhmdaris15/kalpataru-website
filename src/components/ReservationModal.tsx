import { AnimatePresence, motion } from 'framer-motion';
import { type InputHTMLAttributes, useEffect, useState } from 'react';
import { useUIStore } from '@/store/useUIStore';
import { Close } from './Icons';
import { MagneticButton } from './MagneticButton';
import { BanyanIcon } from './BanyanIcon';

export function ReservationModal() {
  const isOpen = useUIStore((s) => s.isReservationOpen);
  const close = useUIStore((s) => s.closeReservation);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && close();
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKey);
    };
  }, [isOpen, close]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[80] grid place-items-center px-4"
        >
          <div
            className="absolute inset-0 bg-emerald-950/85 backdrop-blur-md"
            onClick={close}
            aria-hidden="true"
          />
          <motion.div
            initial={{ y: 40, opacity: 0, scale: 0.96 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 20, opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-emerald-900 ring-1 ring-gold-500/20 shadow-[0_40px_120px_-40px_rgba(0,0,0,0.8)]"
            role="dialog"
            aria-modal="true"
            aria-label="Reserve a table"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gold-500/[0.07] to-transparent" />
            <div
              className="pointer-events-none absolute -right-12 -top-12 text-gold-500/[0.05]"
              aria-hidden="true"
            >
              <BanyanIcon className="h-72 w-72" />
            </div>

            <button
              onClick={close}
              aria-label="Close reservation"
              className="absolute right-5 top-5 z-10 grid h-10 w-10 place-items-center rounded-full text-cream-100 ring-1 ring-cream-200/15 transition hover:bg-cream-200/10"
            >
              <Close className="h-4 w-4" />
            </button>

            <div className="relative p-8 sm:p-12">
              {!submitted ? (
                <>
                  <p className="eyebrow">Reservation</p>
                  <h3 className="mt-3 display-md text-cream-50">Reserve your table.</h3>
                  <p className="mt-3 text-sm text-cream-200/70">
                    Tell us when, and we will set the wayang to watch over you.
                  </p>

                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSubmitted(true);
                    }}
                    className="mt-8 space-y-4"
                  >
                    <Field label="Name" name="name" required />
                    <div className="grid grid-cols-2 gap-3">
                      <Field label="Date" name="date" type="date" required />
                      <Field label="Time" name="time" type="time" required />
                    </div>
                    <Field label="Guests" name="guests" type="number" min={1} max={12} defaultValue={2} required />
                    <Field label="Phone" name="phone" type="tel" required />

                    <MagneticButton type="submit" variant="primary" size="lg" className="w-full">
                      Reserve a Table
                    </MagneticButton>
                  </form>
                </>
              ) : (
                <div className="py-6 text-center">
                  <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-gold-500/15 text-gold-300">
                    <BanyanIcon className="h-9 w-9" />
                  </div>
                  <h3 className="mt-6 display-md text-cream-50">Terima kasih.</h3>
                  <p className="mt-3 text-sm text-cream-200/75">
                    Your request is received — we will confirm shortly. Sampai jumpa.
                  </p>
                  <div className="mt-8">
                    <MagneticButton variant="gold" onClick={close}>
                      Close
                    </MagneticButton>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Field({
  label,
  name,
  type = 'text',
  ...rest
}: InputHTMLAttributes<HTMLInputElement> & { label: string; name: string }) {
  return (
    <label className="block">
      <span className="block text-[10px] tracking-[0.32em] uppercase text-gold-400/85">
        {label}
      </span>
      <input
        name={name}
        type={type}
        {...rest}
        className="mt-2 w-full bg-transparent border-b border-cream-200/15 py-3 text-cream-50 placeholder-cream-200/30 outline-none transition focus:border-gold-400"
      />
    </label>
  );
}
