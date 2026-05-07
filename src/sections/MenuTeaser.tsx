import { motion } from 'framer-motion';
import { Link } from 'react-router';
import { SectionHeading } from '@/components/SectionHeading';
import { MENU } from '@/data/menu';
import { ArrowUpRight } from '@/components/Icons';
import { MagneticButton } from '@/components/MagneticButton';

export function MenuTeaser() {
  return (
    <section
      id="menu-teaser"
      className="relative overflow-hidden bg-emerald-950 text-cream-100"
    >
      <div className="bg-noise-overlay" />

      {/* Marquee strip */}
      <div className="relative border-y border-cream-200/10 py-6 overflow-hidden">
        <div className="flex w-max animate-marquee gap-12 whitespace-nowrap">
          {[...Array(2)].map((_, dup) => (
            <div key={dup} className="flex items-center gap-12">
              {[
                'Nasi Goreng',
                'Soto Ayam',
                'Sate · Peanut Glaze',
                'Rendang Pedang',
                'Klepon',
                'Es Cendol',
                'Kopi Tubruk',
                'Mie Goreng',
                'Gado Gado',
                'Wedang Jahe',
              ].map((label) => (
                <span
                  key={`${dup}-${label}`}
                  className="font-display text-3xl tracking-tight text-cream-100/80 lg:text-5xl"
                >
                  <span className="text-gold-400">✦</span>{' '}
                  <span className="italic font-light">{label}</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 py-[var(--spacing-section)] lg:px-16">
        <SectionHeading
          eyebrow="The Menu"
          scriptLabel="daftar menu"
          title={
            <>
              Four chapters,
              <span className="block">
                <span className="italic text-cream-100/85">forty-three</span>{' '}
                <span className="text-gradient-gold animate-shimmer">small wishes.</span>
              </span>
            </>
          }
          subtitle="Mains, small plates, sweets, and drinks — woven together as a single Indonesian table."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {MENU.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
            >
              <Link
                to={`/menu#${cat.id}`}
                className="group block h-full rounded-3xl bg-emerald-900/55 p-6 ring-1 ring-cream-200/8 transition-all duration-700 hover:bg-emerald-900/85 hover:ring-gold-500/40"
              >
                <div className="flex items-start justify-between">
                  <span className="font-display text-5xl text-gold-300/70">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-cream-200/40 transition-all duration-500 group-hover:text-gold-400 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
                <h3 className="mt-10 font-display text-2xl text-cream-50">
                  {cat.title}
                </h3>
                <p className="mt-1 text-[10px] tracking-[0.32em] uppercase text-gold-400">
                  {cat.subtitle}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-cream-200/70">
                  {cat.caption}
                </p>
                <p className="mt-6 text-[10px] tracking-[0.32em] uppercase text-cream-200/45">
                  {cat.items.length} dishes
                </p>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Link to="/menu">
            <MagneticButton
              variant="primary"
              size="lg"
              iconRight={<ArrowUpRight className="h-4 w-4" />}
            >
              Open the full menu
            </MagneticButton>
          </Link>
        </div>
      </div>
    </section>
  );
}
