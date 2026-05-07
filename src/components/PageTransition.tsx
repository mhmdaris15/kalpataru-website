import { AnimatePresence, motion } from 'framer-motion';
import { useLocation } from 'react-router';
import { type ReactNode, useEffect } from 'react';

type Props = { children: ReactNode };

export function PageTransition({ children }: Props) {
  const location = useLocation();

  // Reset scroll on route change.
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
