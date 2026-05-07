import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router';
import { AnimatePresence, motion } from 'framer-motion';
import { Logo } from './Logo';
import { MagneticButton } from './MagneticButton';
import { Menu as MenuIcon, Close, ArrowUpRight } from './Icons';
import { NAV_LINKS } from '@/data/info';
import { useUIStore } from '@/store/useUIStore';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const isNavOpen = useUIStore((s) => s.isNavOpen);
  const toggleNav = useUIStore((s) => s.toggleNav);
  const closeNav = useUIStore((s) => s.closeNav);
  const openReservation = useUIStore((s) => s.openReservation);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close drawer on route change
  useEffect(() => {
    closeNav();
  }, [location.pathname, closeNav]);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
        className={
          'fixed inset-x-0 top-0 z-50 transition-all duration-700 ' +
          (scrolled
            ? 'bg-emerald-950/65 backdrop-blur-xl ring-1 ring-cream-200/5'
            : 'bg-transparent')
        }
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-4 lg:px-10 lg:py-5">
          <Logo />

          <nav className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `group relative px-4 py-2 text-[11px] tracking-[0.32em] uppercase transition-colors ${
                    isActive ? 'text-gold-400' : 'text-cream-100/80 hover:text-cream-50'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{link.label}</span>
                    <span
                      className={`pointer-events-none absolute inset-x-3 bottom-1 h-px origin-left bg-gold-400 transition-transform duration-500 ease-out ${
                        isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden lg:block">
              <MagneticButton
                variant="primary"
                size="md"
                onClick={openReservation}
                iconRight={<ArrowUpRight className="h-3.5 w-3.5" />}
              >
                Reserve
              </MagneticButton>
            </div>
            <button
              onClick={toggleNav}
              aria-label={isNavOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isNavOpen}
              className="grid h-11 w-11 place-items-center rounded-full ring-1 ring-cream-200/15 text-cream-100 hover:ring-gold-400/50 transition lg:hidden"
            >
              {isNavOpen ? <Close className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>{isNavOpen && <MobileDrawer />}</AnimatePresence>
    </>
  );
}

function MobileDrawer() {
  const closeNav = useUIStore((s) => s.closeNav);
  const openReservation = useUIStore((s) => s.openReservation);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="fixed inset-0 z-40 bg-emerald-950/95 backdrop-blur-2xl lg:hidden"
    >
      <div className="bg-noise-overlay" />
      <motion.nav
        initial="hidden"
        animate="show"
        exit="hidden"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
        }}
        className="relative flex h-full flex-col items-start justify-center gap-2 px-8"
      >
        {NAV_LINKS.map((link) => (
          <motion.div
            key={link.to}
            variants={{
              hidden: { y: 30, opacity: 0 },
              show: {
                y: 0,
                opacity: 1,
                transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          >
            <NavLink
              to={link.to}
              end={link.to === '/'}
              onClick={closeNav}
              className={({ isActive }) =>
                `block py-2 font-display text-5xl tracking-tight transition ${
                  isActive ? 'text-gold-400' : 'text-cream-50'
                }`
              }
            >
              {link.label}
            </NavLink>
          </motion.div>
        ))}
        <motion.div
          variants={{
            hidden: { y: 20, opacity: 0 },
            show: { y: 0, opacity: 1, transition: { duration: 0.7, delay: 0.2 } },
          }}
          className="mt-8"
        >
          <MagneticButton
            variant="gold"
            size="lg"
            onClick={() => {
              closeNav();
              openReservation();
            }}
            iconRight={<ArrowUpRight className="h-4 w-4" />}
          >
            Reserve a Table
          </MagneticButton>
        </motion.div>
        <motion.p
          variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { delay: 0.5 } } }}
          className="mt-12 max-w-xs text-sm leading-relaxed text-cream-200/60"
        >
          Liteyny prospekt 43 · Saint Petersburg ·
          <span className="script-accent text-base"> selamat datang</span>
        </motion.p>
      </motion.nav>
    </motion.div>
  );
}
