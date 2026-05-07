import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ImageReveal } from '@/components/ImageReveal';
import { RevealText } from '@/components/RevealText';
import { OrnamentDivider } from '@/components/OrnamentDivider';
import { IMG } from '@/data/images';
import { Link } from 'react-router';
import { MagneticButton } from '@/components/MagneticButton';
import { ArrowRight } from '@/components/Icons';
import { BanyanIcon } from '@/components/BanyanIcon';

export function About() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const accentY = useTransform(scrollYProgress, [0, 1], [120, -120]);

  return (
    <section
      ref={ref}
      id="about"
      className="relative overflow-hidden bg-emerald-900 text-cream-100"
    >
      <div className="bg-noise-overlay" />

      {/* Subtle light leak */}
      <motion.div
        style={{ y: accentY }}
        className="pointer-events-none absolute -left-32 top-32 h-[520px] w-[520px] rounded-full bg-gold-500/[0.07] blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-[1400px] gap-12 px-6 py-[var(--spacing-section)] lg:grid-cols-12 lg:gap-20 lg:px-16">
        {/* Image column */}
        <div className="relative lg:col-span-6">
          <motion.div style={{ y: imageY }} className="relative">
            <ImageReveal
              src={IMG.interiorWindow}
              alt="The interior of Kalpataru — emerald walls, festive banners, and natural light"
              aspect="aspect-[4/5]"
              from="bottom"
              rounded="rounded-[28px]"
              className="ring-1 ring-gold-500/15 shadow-[0_50px_120px_-40px_rgba(0,0,0,0.7)]"
            />
            <div className="gold-frame-inner rounded-[24px]" />
            {/* small offset photo */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
              className="absolute -bottom-12 -right-6 hidden w-56 sm:block lg:-right-14 lg:w-64"
            >
              <ImageReveal
                src={IMG.guests}
                alt="Guests sharing a meal at Kalpataru"
                aspect="aspect-[3/4]"
                rounded="rounded-2xl"
                from="right"
                className="ring-1 ring-gold-500/30 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)]"
              />
            </motion.div>
            {/* glass quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
              className="absolute -left-4 top-12 hidden max-w-[200px] rounded-2xl glass-card-warm px-5 py-4 sm:block"
            >
              <BanyanIcon className="h-5 w-5 text-gold-400" />
              <p className="mt-2 script-accent text-xl text-gold-300 leading-tight">
                rumah jauh dari rumah
              </p>
              <p className="text-[10px] tracking-[0.28em] uppercase text-cream-200/55">
                A home away from home
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Text column */}
        <div className="relative flex flex-col justify-center lg:col-span-6">
          <p className="eyebrow">Our Story</p>
          <OrnamentDivider label="cerita kami" className="mt-3 justify-start" />
          <RevealText
            as="h2"
            text="An Indonesian table, planted in the heart of Saint Petersburg."
            className="mt-6 display-lg max-w-xl text-balance"
          />
          <div className="mt-8 space-y-5 text-base leading-relaxed text-cream-200/80 sm:text-[1.05rem]">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            >
              Kalpataru opened its doors on <span className="text-gold-300">7 June 2025</span>{' '}
              as the first Indonesian café in Russia — born from a longing to share the
              tastes, scents, and silences of an island home.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
            >
              We named ourselves after the <em className="text-cream-50 not-italic">Kalpataru</em>,
              the wish-fulfilling tree carved into ancient Javanese temples — a symbol of
              abundance, of giving, of roots that reach across oceans. Each dish is the
              fulfillment of a small wish: that you feel the warmth of Indonesia at this table.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
            >
              Recipes passed from grandmothers in Yogyakarta, Bandung, and Denpasar are
              re-prepared here by hand — no shortcuts, no compromises. The sambal is
              pounded. The kecap is reduced for hours. The rendang waits its turn.
            </motion.p>
          </div>

          <motion.dl
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
            className="mt-10 grid grid-cols-3 gap-4 border-t border-cream-200/10 pt-6 sm:gap-8"
          >
            {[
              ['17,000+', 'islands of inspiration'],
              ['1', 'café in all of Russia'],
              ['∞', 'wishes fulfilled'],
            ].map(([n, l]) => (
              <div key={l}>
                <dt className="font-display text-3xl text-gold-300">{n}</dt>
                <dd className="mt-1 text-[10px] tracking-[0.3em] uppercase text-cream-200/55">
                  {l}
                </dd>
              </div>
            ))}
          </motion.dl>

          <div className="mt-10">
            <Link to="/about">
              <MagneticButton variant="gold" iconRight={<ArrowRight className="h-3.5 w-3.5" />}>
                Read our full story
              </MagneticButton>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
