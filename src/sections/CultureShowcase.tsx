import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { SectionHeading } from '@/components/SectionHeading';
import { CULTURE_CARDS, type CultureCard } from '@/data/culture';
import { GlassCard } from '@/components/GlassCard';

export function CultureShowcase() {
  return (
    <section
      id="culture"
      className="relative overflow-hidden bg-gradient-to-b from-emerald-950 via-emerald-900 to-emerald-950 text-cream-100"
    >
      <div className="bg-noise-overlay" />

      <div className="relative mx-auto max-w-[1400px] px-6 py-[var(--spacing-section)] lg:px-16">
        <SectionHeading
          eyebrow="Indonesian Culture"
          scriptLabel="warisan budaya"
          title={
            <>
              Wayang shadows, Bali offerings,
              <span className="block">
                Java's <span className="italic text-cream-100/85">slow fire.</span>
              </span>
            </>
          }
          subtitle="The dishes are only one chapter. Behind every plate, an island, a ritual, a thousand-year story."
        />

        <div className="mt-20 grid gap-8 lg:grid-cols-2 lg:gap-10">
          {CULTURE_CARDS.map((card, i) => (
            <CultureBlock key={card.id} card={card} reverse={i % 2 === 1} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CultureBlock({
  card,
  reverse,
  index,
}: {
  card: CultureCard;
  reverse: boolean;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1], delay: (index % 2) * 0.1 }}
      className={
        'group relative grid overflow-hidden rounded-[28px] bg-emerald-950/55 ring-1 ring-cream-200/8 ' +
        (reverse ? 'lg:grid-cols-[1.15fr_1fr]' : 'lg:grid-cols-[1fr_1.15fr]')
      }
    >
      {/* image with parallax */}
      <div
        className={
          'relative aspect-[5/6] overflow-hidden lg:aspect-auto lg:min-h-[460px] ' +
          (reverse ? 'lg:order-2' : '')
        }
      >
        <motion.img
          style={{ y: imgY }}
          src={card.image}
          alt={card.title}
          loading="lazy"
          className="absolute inset-0 h-[120%] w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-950/85 via-emerald-950/30 to-transparent" />
        <div className="absolute left-6 top-6 max-w-[80%]">
          <GlassCard warm className="px-4 py-3">
            <p className="text-[10px] tracking-[0.32em] uppercase text-cream-200/65">word</p>
            <p className="font-display text-2xl text-gold-300">{card.word}</p>
            <p className="mt-1 text-xs italic text-cream-200/70">{card.meaning}</p>
          </GlassCard>
        </div>
      </div>

      {/* text */}
      <div className="flex flex-col justify-center px-7 py-8 lg:px-10 lg:py-12">
        <p className="eyebrow">{card.subtitle}</p>
        <h3 className="mt-3 font-display text-4xl tracking-tight text-cream-50 lg:text-5xl">
          {card.title}
        </h3>
        <p className="mt-5 text-[15px] leading-relaxed text-cream-200/80">{card.body}</p>
        <span className="mt-6 inline-flex w-fit items-center gap-2 text-[10px] tracking-[0.32em] uppercase text-gold-400">
          <span className="h-px w-6 bg-gold-500/70" />
          {String(index + 1).padStart(2, '0')} · {card.title}
        </span>
      </div>
    </motion.div>
  );
}
