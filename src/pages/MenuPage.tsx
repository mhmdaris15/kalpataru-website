import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useMemo } from 'react';
import { useLocation } from 'react-router';
import { MENU, type MenuItem } from '@/data/menu';
import { OrnamentDivider } from '@/components/OrnamentDivider';
import { BanyanIcon } from '@/components/BanyanIcon';
import { FlameIcon, LeafIcon, Star, ArrowUpRight } from '@/components/Icons';
import { MagneticButton } from '@/components/MagneticButton';
import { useUIStore } from '@/store/useUIStore';

export default function MenuPage() {
  const activeCategory = useUIStore((s) => s.activeCategory);
  const setActiveCategory = useUIStore((s) => s.setActiveCategory);
  const openReservation = useUIStore((s) => s.openReservation);
  const location = useLocation();

  // Honor URL hash to deep-link to a category (e.g. /menu#sweets)
  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash && MENU.some((c) => c.id === hash)) {
      setActiveCategory(hash);
      // small delay so the user sees the page enter first
      const id = setTimeout(() => {
        document.getElementById('menu-grid')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 600);
      return () => clearTimeout(id);
    }
  }, [location.hash, setActiveCategory]);

  const category = useMemo(
    () => MENU.find((c) => c.id === activeCategory) ?? MENU[0],
    [activeCategory],
  );

  return (
    <main className="relative bg-emerald-950 text-cream-100">
      {/* Hero header */}
      <header className="relative isolate overflow-hidden pb-16 pt-32 lg:pt-44">
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              'radial-gradient(70% 50% at 50% 30%, rgba(232,197,71,0.12), transparent 70%)',
          }}
        />
        <div className="absolute inset-0 -z-10 flex items-start justify-center pt-20 text-gold-500/[0.04]">
          <BanyanIcon className="h-[600px] w-[600px]" />
        </div>
        <div className="bg-noise-overlay -z-10" />

        <div className="mx-auto max-w-[1400px] px-6 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            <p className="eyebrow">The Menu</p>
            <OrnamentDivider label="daftar menu" className="mt-3" />
            <h1 className="mt-6 display-xl text-cream-50">
              <span className="italic font-light text-cream-100/85">A taste of</span>{' '}
              <span className="text-gradient-gold animate-shimmer">Indonesia</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-cream-200/75 sm:text-lg">
              Heritage recipes, hand-pounded sambals, slow-fired classics. Prices in ₽.
              All dishes prepared to order.
            </p>
          </motion.div>
        </div>
      </header>

      {/* Sticky category tabs */}
      <div className="sticky top-[64px] z-30 border-y border-cream-200/10 bg-emerald-950/80 backdrop-blur-xl lg:top-[80px]">
        <div className="mx-auto max-w-[1400px] px-2 lg:px-12">
          <div className="flex gap-1 overflow-x-auto py-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {MENU.map((cat) => {
              const active = cat.id === activeCategory;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`relative shrink-0 rounded-full px-5 py-3 text-[11px] tracking-[0.3em] uppercase transition-colors ${
                    active ? 'text-emerald-950' : 'text-cream-100/80 hover:text-cream-50'
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="cat-pill"
                      transition={{ type: 'spring', stiffness: 320, damping: 32 }}
                      className="absolute inset-0 rounded-full bg-gold-400 shadow-[0_8px_30px_-8px_rgba(232,197,71,0.6)]"
                    />
                  )}
                  <span className="relative">
                    {cat.title}
                    <span className="ml-2 hidden text-[9px] tracking-[0.2em] opacity-70 sm:inline">
                      · {cat.subtitle}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Active category */}
      <section
        id="menu-grid"
        className="relative mx-auto max-w-[1400px] px-6 py-16 lg:px-16 lg:py-24"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Category header */}
            <div className="mb-12 grid gap-4 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="script-accent text-2xl">{category.title}</p>
                <h2 className="mt-2 display-lg text-cream-50">{category.subtitle}</h2>
                <p className="mt-3 max-w-xl text-base leading-relaxed text-cream-200/75">
                  {category.caption}
                </p>
              </div>
              <p className="hidden text-[10px] tracking-[0.36em] uppercase text-cream-200/45 lg:block">
                {category.items.length.toString().padStart(2, '0')} dishes ·{' '}
                section {String(MENU.findIndex((c) => c.id === category.id) + 1).padStart(2, '0')} / 04
              </p>
            </div>

            {/* Items grid */}
            <motion.ul
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
              }}
              className="grid gap-x-10 gap-y-6 sm:grid-cols-2 lg:gap-x-16 lg:gap-y-8"
            >
              {category.items.map((item) => (
                <MenuRow key={item.id} item={item} />
              ))}
            </motion.ul>

            <div className="mt-16 flex flex-wrap items-center justify-between gap-6 border-t border-cream-200/10 pt-8">
              <p className="max-w-md text-xs leading-relaxed text-cream-200/55">
                <span className="text-gold-400">Note · </span>
                Some dishes contain peanuts, shellfish, or coconut. Please tell us about
                allergies — we will adjust with care.
              </p>
              <MagneticButton
                variant="gold"
                onClick={openReservation}
                iconRight={<ArrowUpRight className="h-3.5 w-3.5" />}
              >
                Reserve a Table
              </MagneticButton>
            </div>
          </motion.div>
        </AnimatePresence>
      </section>
    </main>
  );
}

function MenuRow({ item }: { item: MenuItem }) {
  return (
    <motion.li
      variants={{
        hidden: { opacity: 0, y: 16 },
        show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
      }}
      whileHover={{ x: 4 }}
      className="group relative grid grid-cols-[auto_1fr_auto] items-baseline gap-x-5 border-b border-cream-200/10 py-5 transition-colors hover:border-gold-500/30"
    >
      {/* Optional image thumb */}
      {item.image ? (
        <div className="row-span-2 mt-1 hidden h-16 w-16 overflow-hidden rounded-2xl ring-1 ring-cream-200/15 sm:block">
          <img src={item.image} alt="" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
        </div>
      ) : (
        <span aria-hidden="true" className="row-span-2 hidden h-16 w-16 sm:block" />
      )}

      <div>
        <div className="flex flex-wrap items-baseline gap-3">
          <h3 className="font-display text-2xl text-cream-50">
            {item.name}
            {item.signature && (
              <span className="ml-2 inline-flex items-center gap-1 align-middle text-[10px] tracking-[0.3em] uppercase text-gold-400">
                <Star className="h-3 w-3" />
                signature
              </span>
            )}
          </h3>
          <div className="flex items-center gap-1 text-spice-500/85">
            {item.spice && item.spice > 0
              ? Array.from({ length: item.spice }).map((_, i) => (
                  <FlameIcon key={i} className="h-3 w-3" />
                ))
              : null}
          </div>
          {item.vegetarian && (
            <span className="inline-flex items-center gap-1 text-[10px] tracking-[0.3em] uppercase text-emerald-500">
              <LeafIcon className="h-3 w-3" />
              veg
            </span>
          )}
        </div>
        <p className="mt-2 max-w-md text-sm leading-relaxed text-cream-200/70">
          {item.description}
        </p>
      </div>

      <span className="self-center font-display text-2xl tracking-tight text-gold-300 transition-colors group-hover:text-gold-200">
        {item.price.toLocaleString('ru-RU')} ₽
      </span>

      {/* Decorative dotted line between name and price (desktop) */}
      <span
        className="pointer-events-none col-start-2 row-start-1 mt-3 hidden h-px w-full self-end bg-gradient-to-r from-cream-200/20 via-cream-200/15 to-cream-200/0 lg:block"
        aria-hidden="true"
      />
    </motion.li>
  );
}
