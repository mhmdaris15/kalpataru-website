import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { SectionHeading } from '@/components/SectionHeading';
import { TESTIMONIALS } from '@/data/testimonials';
import { ArrowLeft, ArrowRight, Star } from '@/components/Icons';
import { GlassCard } from '@/components/GlassCard';

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  // auto-advance every 6.5s, pause if user has interacted recently
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setDirection(1);
      setIndex((i) => (i + 1) % TESTIMONIALS.length);
    }, 6500);
    return () => clearInterval(id);
  }, [paused]);

  const go = (dir: number) => {
    setDirection(dir);
    setPaused(true);
    setIndex((i) => (i + dir + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const t = TESTIMONIALS[index];

  return (
    <section
      id="voices"
      className="relative overflow-hidden bg-emerald-900 text-cream-100"
    >
      <div className="bg-noise-overlay" />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-500/[0.06] blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1400px] px-6 py-[var(--spacing-section)] lg:px-16">
        <SectionHeading
          eyebrow="Voices · Suara Tamu"
          scriptLabel="dari hati ke hati"
          title={
            <>
              From the people who came{' '}
              <span className="italic text-gold-300">looking for home.</span>
            </>
          }
        />

        <div className="relative mx-auto mt-20 max-w-3xl">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={t.id}
              custom={direction}
              initial={{ opacity: 0, x: direction * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -40 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <GlassCard warm className="px-8 py-12 sm:px-14 sm:py-16">
                <div className="flex items-center gap-1 text-gold-400">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5" />
                  ))}
                </div>
                <blockquote className="relative mt-8 font-display text-2xl leading-relaxed text-cream-50 sm:text-3xl">
                  <span
                    aria-hidden="true"
                    className="absolute -left-3 -top-7 font-display text-[5rem] leading-none text-gold-500/40"
                  >
                    “
                  </span>
                  {t.quote}
                </blockquote>
                <figcaption className="mt-10 flex items-center justify-between border-t border-cream-200/10 pt-6">
                  <div>
                    <p className="font-display text-lg text-cream-50">{t.name}</p>
                    <p className="text-[10px] tracking-[0.32em] uppercase text-cream-200/60">
                      {t.role} · {t.city}
                    </p>
                  </div>
                  <p className="script-accent text-2xl text-gold-400">terima kasih</p>
                </figcaption>
              </GlassCard>
            </motion.div>
          </AnimatePresence>

          <div className="mt-10 flex items-center justify-between">
            <button
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              className="grid h-12 w-12 place-items-center rounded-full text-cream-100 ring-1 ring-cream-200/15 transition hover:bg-gold-500 hover:text-emerald-950 hover:ring-gold-500"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > index ? 1 : -1);
                    setIndex(i);
                    setPaused(true);
                  }}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    i === index
                      ? 'w-10 bg-gold-400'
                      : 'w-2 bg-cream-200/25 hover:bg-cream-200/50'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => go(1)}
              aria-label="Next testimonial"
              className="grid h-12 w-12 place-items-center rounded-full text-cream-100 ring-1 ring-cream-200/15 transition hover:bg-gold-500 hover:text-emerald-950 hover:ring-gold-500"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
