import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';
import { useUIStore } from '@/store/useUIStore';
import { BanyanIcon } from './BanyanIcon';

export function LoadingScreen() {
  const hasLoaded = useUIStore((s) => s.hasLoaded);
  const markLoaded = useUIStore((s) => s.markLoaded);

  useEffect(() => {
    if (hasLoaded) return;
    const id = window.setTimeout(markLoaded, 1700);
    return () => window.clearTimeout(id);
  }, [hasLoaded, markLoaded]);

  return (
    <AnimatePresence>
      {!hasLoaded && (
        <motion.div
          key="loading"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }}
          className="fixed inset-0 z-[100] grid place-items-center bg-emerald-950"
          aria-hidden="true"
        >
          {/* Rising tree mark */}
          <motion.div
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } }}
            exit={{ y: -16, opacity: 0, transition: { duration: 0.5 } }}
            className="flex flex-col items-center gap-6"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative text-gold-400"
            >
              <BanyanIcon className="h-20 w-20" />
              <motion.span
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    'radial-gradient(closest-side, rgba(232,197,71,0.35), transparent 70%)',
                }}
                animate={{ scale: [0.9, 1.15, 0.9] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              />
            </motion.div>
            <motion.div
              className="overflow-hidden"
              initial={{ width: 0 }}
              animate={{ width: 220 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            >
              <div className="text-center">
                <div className="font-display text-2xl tracking-[0.4em] text-cream-100 uppercase">
                  Kalpataru
                </div>
                <div className="mt-2 text-[10px] tracking-[0.5em] uppercase text-gold-400/70">
                  Selamat Datang
                </div>
              </div>
            </motion.div>
            <motion.div
              className="h-px w-40 origin-left bg-gradient-to-r from-transparent via-gold-500/70 to-transparent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.4, ease: 'easeInOut' }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
