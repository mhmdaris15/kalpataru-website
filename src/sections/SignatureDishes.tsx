import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { SectionHeading } from '@/components/SectionHeading';
import { SIGNATURE_DISHES, type Dish } from '@/data/dishes';
import { ArrowUpRight, FlameIcon } from '@/components/Icons';
import { Link } from 'react-router';
import { MagneticButton } from '@/components/MagneticButton';

export function SignatureDishes() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const orbY = useTransform(scrollYProgress, [0, 1], [-80, 80]);

  return (
    <section
      ref={ref}
      id="signature"
      className="relative overflow-hidden bg-emerald-950"
    >
      <motion.div
        style={{ y: orbY }}
        className="pointer-events-none absolute right-[-10%] top-1/3 h-[500px] w-[500px] rounded-full bg-gold-500/[0.06] blur-3xl"
        aria-hidden="true"
      />
      <div className="bg-noise-overlay" />

      <div className="relative mx-auto max-w-[1400px] px-6 py-[var(--spacing-section)] lg:px-16">
        <SectionHeading
          eyebrow="Signature Dishes"
          scriptLabel="hidangan istimewa"
          title={
            <>
              Six recipes that
              <span className="block">
                <span className="italic text-cream-100/85">trace</span>{' '}
                <span className="text-gradient-gold animate-shimmer">an archipelago.</span>
              </span>
            </>
          }
          subtitle="From Sumatra's slow-fired rendang to Java's golden soto — the dishes that have shaped Indonesian cuisine for centuries, served as our grandmothers intended."
        />

        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {SIGNATURE_DISHES.map((dish, i) => (
            <DishCard key={dish.id} dish={dish} index={i} />
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Link to="/menu">
            <MagneticButton variant="gold" size="lg" iconRight={<ArrowUpRight className="h-4 w-4" />}>
              See the full menu
            </MagneticButton>
          </Link>
        </div>
      </div>
    </section>
  );
}

function DishCard({ dish, index }: { dish: Dish; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
        delay: (index % 3) * 0.1,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative overflow-hidden rounded-3xl bg-emerald-900/55 ring-1 ring-cream-200/8 transition-all duration-700 ease-out hover:ring-gold-500/40"
    >
      {/* Image */}
      <div className="relative aspect-[5/6] overflow-hidden">
        <motion.img
          src={dish.image}
          alt={dish.name}
          loading="lazy"
          animate={{ scale: hovered ? 1.06 : 1 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/30 to-transparent" />

        {/* floating chip — origin */}
        <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-emerald-950/65 px-3 py-1.5 text-[10px] tracking-[0.32em] uppercase text-gold-300 ring-1 ring-gold-500/30 backdrop-blur">
          {dish.region}
        </div>

        {/* spice */}
        {dish.spice > 0 && (
          <div className="absolute right-5 top-5 flex items-center gap-1 rounded-full bg-emerald-950/65 px-3 py-1.5 text-[10px] tracking-[0.2em] uppercase text-spice-500 ring-1 ring-spice-500/30 backdrop-blur">
            {Array.from({ length: dish.spice }).map((_, i) => (
              <FlameIcon key={i} className="h-3 w-3" />
            ))}
          </div>
        )}
      </div>

      {/* Body */}
      <div className="relative -mt-20 px-6 pb-7 lg:px-7">
        <p className="script-accent text-xl">{dish.origin}</p>
        <h3 className="mt-1 font-display text-3xl tracking-tight text-cream-50">{dish.name}</h3>
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-cream-200/75">
          {dish.description}
        </p>

        {/* Story strip — slides in on hover */}
        <div className="mt-5 overflow-hidden">
          <motion.div
            animate={{
              height: hovered ? 'auto' : 0,
              opacity: hovered ? 1 : 0,
            }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="border-t border-cream-200/10 pt-4 text-xs leading-relaxed italic text-gold-200/85">
              {dish.story}
            </p>
          </motion.div>
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-cream-200/10 pt-5">
          <span className="font-display text-2xl text-gold-300">
            {dish.price.toLocaleString('ru-RU')} ₽
          </span>
          <Link
            to="/menu"
            className="group/link inline-flex items-center gap-2 text-[10px] tracking-[0.32em] uppercase text-cream-200/85 transition hover:text-gold-300"
          >
            Discover
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
          </Link>
        </div>
      </div>

      {/* Animated gold border on hover */}
      <span className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-gold-500/0 transition-all duration-700 group-hover:ring-gold-500/40 group-hover:[box-shadow:0_30px_80px_-40px_rgba(232,197,71,0.35)]" />
    </motion.article>
  );
}
