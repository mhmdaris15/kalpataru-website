import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { SectionHeading } from '@/components/SectionHeading';
import { ImageReveal } from '@/components/ImageReveal';
import { IMG } from '@/data/images';
import { BanyanIcon } from '@/components/BanyanIcon';

const STORY_CHAPTERS = [
  {
    no: '01',
    title: 'A doorway to Java',
    body:
      'Step inside, and the city outside softens. Emerald walls, mustard light, the perfume of lemongrass and clove — the room itself becomes a small archipelago.',
    image: IMG.interiorBlue,
  },
  {
    no: '02',
    title: 'The wayang watches',
    body:
      'Above the bar, leather puppets cast still shadows — Bima and Arjuna, characters from the Mahabharata, witnesses to a thousand quiet conversations.',
    image: IMG.wayang,
  },
  {
    no: '03',
    title: 'The window remembers',
    body:
      'Through it, Liteyny prospekt drifts past. Inside, books from Bali and Java rest beside the Kalpataru tree decal — small altars of memory.',
    image: IMG.windowTree,
  },
  {
    no: '04',
    title: 'The table gathers',
    body:
      'Strangers become a community over plates of soto and sate. Russian, Bahasa, Javanese — all softened into the same vocabulary of pleasure.',
    image: IMG.guests,
  },
];

export function DiscoverIndonesia() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const treeY = useTransform(scrollYProgress, [0, 1], [-200, 200]);
  const treeRotate = useTransform(scrollYProgress, [0, 1], [-3, 3]);

  return (
    <section
      ref={ref}
      id="discover"
      className="relative overflow-hidden bg-emerald-950 text-cream-100"
    >
      <div className="bg-noise-overlay" />

      {/* Floating banyan silhouette behind */}
      <motion.div
        style={{ y: treeY, rotate: treeRotate }}
        className="pointer-events-none absolute right-[-12%] top-[18%] text-gold-500/[0.05]"
        aria-hidden="true"
      >
        <BanyanIcon className="h-[700px] w-[700px]" />
      </motion.div>

      <div className="relative mx-auto max-w-[1400px] px-6 py-[var(--spacing-section)] lg:px-16">
        <SectionHeading
          eyebrow="Discover Indonesia · Through Food"
          scriptLabel="lewat rasa, kita pulang"
          title={
            <>
              <span className="text-gradient-gold animate-shimmer">Four chapters</span>{' '}
              of an evening at Kalpataru.
            </>
          }
          subtitle="A small room. A long table. A country folded into the steam rising from a bowl."
        />

        {/* Storytelling chapters — alternating offset layout */}
        <div className="mt-20 space-y-32 lg:space-y-44">
          {STORY_CHAPTERS.map((chapter, i) => (
            <Chapter key={chapter.no} chapter={chapter} reverse={i % 2 === 1} />
          ))}
        </div>

        {/* Closing emotional callout */}
        <motion.figure
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
          className="mt-32 mx-auto max-w-3xl text-center"
        >
          <BanyanIcon className="mx-auto h-10 w-10 text-gold-400" />
          <blockquote className="mt-6 font-display text-2xl leading-snug text-cream-50 italic sm:text-3xl">
            “Food is how we cross water without leaving the table.
            Kalpataru is the boat we built.”
          </blockquote>
          <figcaption className="mt-5 text-[10px] tracking-[0.4em] uppercase text-gold-400">
            — From the founders
          </figcaption>
        </motion.figure>
      </div>
    </section>
  );
}

function Chapter({
  chapter,
  reverse,
}: {
  chapter: (typeof STORY_CHAPTERS)[number];
  reverse: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const textY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <div
      ref={ref}
      className={
        'grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ' +
        (reverse ? 'lg:[&>:first-child]:order-2' : '')
      }
    >
      {/* image */}
      <motion.div style={{ y: imgY }} className="relative">
        <ImageReveal
          src={chapter.image}
          alt={chapter.title}
          aspect="aspect-[4/5]"
          rounded="rounded-[28px]"
          from="bottom"
          className="ring-1 ring-cream-200/10 shadow-[0_50px_120px_-30px_rgba(0,0,0,0.7)]"
        />
        <span className="absolute -top-5 -left-3 font-display text-[7rem] leading-none text-gold-500/30 lg:text-[9rem]">
          {chapter.no}
        </span>
      </motion.div>

      {/* text */}
      <motion.div style={{ y: textY }} className="max-w-lg">
        <p className="eyebrow">Chapter {chapter.no}</p>
        <h3 className="mt-4 font-display text-4xl tracking-tight text-cream-50 lg:text-5xl">
          {chapter.title}
        </h3>
        <p className="mt-5 text-base leading-relaxed text-cream-200/80 sm:text-lg">
          {chapter.body}
        </p>
      </motion.div>
    </div>
  );
}
