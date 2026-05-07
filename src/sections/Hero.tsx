import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { MagneticButton } from '@/components/MagneticButton';
import { BanyanIcon } from '@/components/BanyanIcon';
import { ArrowRight, ArrowUpRight, Star } from '@/components/Icons';
import { useUIStore } from '@/store/useUIStore';
import { IMG } from '@/data/images';
import { Link } from 'react-router';

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const dishY = useTransform(scrollYProgress, [0, 1], [0, -160]);
  const sotoY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const treeScale = useTransform(scrollYProgress, [0, 1], [1, 1.18]);

  const openReservation = useUIStore((s) => s.openReservation);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative isolate min-h-[100svh] overflow-hidden bg-emerald-950"
    >
      {/* Layered atmospheric background */}
      <motion.div
        style={{ scale: treeScale }}
        className="absolute inset-0 -z-10"
      >
        {/* radial spotlight */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(60% 50% at 50% 30%, rgba(232,197,71,0.16) 0%, rgba(232,197,71,0.05) 35%, transparent 70%)',
          }}
        />
        {/* warm vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(120% 90% at 50% 110%, rgba(13,58,45,0.0) 30%, rgba(6,26,18,0.95) 75%)',
          }}
        />

        {/* Massive ghost banyan in the center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <BanyanIcon className="h-[110vh] w-[110vh] text-gold-500/[0.045]" />
        </div>

        {/* Floating ambient orbs */}
        <div className="absolute left-[8%] top-[18%] h-72 w-72 rounded-full bg-gold-500/10 blur-3xl animate-drift" />
        <div className="absolute right-[6%] top-[55%] h-96 w-96 rounded-full bg-emerald-500/12 blur-3xl animate-drift" style={{ animationDelay: '-6s' }} />
        <div className="absolute left-[40%] bottom-[8%] h-64 w-64 rounded-full bg-gold-400/[0.08] blur-3xl animate-drift" style={{ animationDelay: '-12s' }} />

        {/* faint horizontal light bar */}
        <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />

        <div className="bg-noise-overlay absolute inset-0" />
      </motion.div>

      {/* Side micro-text rails */}
      <div className="pointer-events-none absolute inset-y-0 left-4 hidden flex-col items-center justify-between py-14 text-[10px] tracking-[0.42em] uppercase text-cream-200/45 lg:flex">
        <span className="rotate-180 [writing-mode:vertical-rl]">Est · 2025</span>
        <span className="rotate-180 [writing-mode:vertical-rl]">Saint Petersburg · RU</span>
      </div>
      <div className="pointer-events-none absolute inset-y-0 right-4 hidden flex-col items-center justify-between py-14 text-[10px] tracking-[0.42em] uppercase text-cream-200/45 lg:flex">
        <span className="[writing-mode:vertical-rl]">Cultural · Indonesia</span>
        <span className="[writing-mode:vertical-rl]">Liteyny pr. · 43</span>
      </div>

      {/* Main content */}
      <motion.div
        style={{ opacity: heroOpacity, y: heroY }}
        className="relative mx-auto flex min-h-[100svh] max-w-[1400px] flex-col justify-center px-6 pb-24 pt-32 lg:px-16 lg:pt-40"
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 1.0 }}
          className="flex items-center gap-3 text-cream-200/85"
        >
          <span className="h-px w-10 bg-gold-500/70" />
          <span className="eyebrow">First Indonesian café · Saint Petersburg</span>
        </motion.div>

        <h1 className="relative mt-8">
          <span className="sr-only">Kalpataru — Cultural Ambiance Blend with Indonesia</span>
          <motion.span
            aria-hidden="true"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 1.15 }}
            className="block"
          >
            <span className="block font-display text-[clamp(2.4rem,6vw,5rem)] font-light italic tracking-[0.02em] text-cream-100/75">
              A taste of
            </span>
            <span
              className="block font-display font-light tracking-[-0.04em] text-[clamp(4rem,16vw,13rem)] leading-[0.85] text-gradient-gold animate-shimmer"
              style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 50" }}
            >
              Kalpataru
            </span>
            <span className="mt-3 block font-script text-[clamp(1.5rem,3vw,2.4rem)] leading-tight text-gold-400">
              — pohon kehidupan, the wishing tree of Indonesia
            </span>
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: 'easeOut', delay: 1.5 }}
          className="mt-10 max-w-xl text-base leading-relaxed text-cream-200/80 sm:text-lg"
        >
          Heritage recipes carried four thousand kilometers from Java, Bali, and Sumatra —
          slow-cooked, hand-spiced, served beneath the silent gaze of wayang shadows.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: 'easeOut', delay: 1.7 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <MagneticButton
            variant="primary"
            size="lg"
            onClick={openReservation}
            iconRight={<ArrowUpRight className="h-4 w-4" />}
          >
            Reserve a Table
          </MagneticButton>
          <Link to="/menu">
            <MagneticButton
              variant="ghost"
              size="lg"
              iconRight={<ArrowRight className="h-4 w-4" />}
            >
              Explore the Menu
            </MagneticButton>
          </Link>
        </motion.div>

        {/* Stats / proof rail */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 1.9 }}
          className="mt-16 grid max-w-2xl grid-cols-3 gap-6 border-t border-cream-200/10 pt-8 lg:gap-10"
        >
          <Stat heading="5.0" sub="Yandex rating" icon={<Star className="h-3 w-3" />} />
          <Stat heading="14+" sub="Heritage recipes" />
          <Stat heading="2025" sub="First in Russia" />
        </motion.div>
      </motion.div>

      {/* Floating signature dish (parallax) */}
      <motion.div
        style={{ y: dishY }}
        initial={{ opacity: 0, scale: 0.9, rotate: -8 }}
        animate={{ opacity: 1, scale: 1, rotate: -6 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 1.4 }}
        className="pointer-events-none absolute right-[-8%] top-[10%] hidden h-[460px] w-[460px] xl:block"
      >
        <div className="absolute inset-0 rounded-full bg-gold-400/15 blur-3xl" />
        <img
          src={IMG.dishNasiGoreng}
          alt=""
          className="relative h-full w-full rounded-full object-cover ring-1 ring-gold-500/40 shadow-[0_60px_120px_-30px_rgba(0,0,0,0.7)] animate-float-slow"
        />
        <div className="absolute -left-6 top-10 rotate-[-8deg] rounded-full bg-emerald-950/85 px-4 py-2 text-[10px] tracking-[0.32em] uppercase text-gold-300 ring-1 ring-gold-500/40 backdrop-blur">
          Nasi Goreng · 469 ₽
        </div>
      </motion.div>

      <motion.div
        style={{ y: sotoY }}
        initial={{ opacity: 0, scale: 0.85, rotate: 9 }}
        animate={{ opacity: 1, scale: 1, rotate: 7 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 1.55 }}
        className="pointer-events-none absolute right-[24%] bottom-[8%] hidden h-[260px] w-[260px] xl:block"
      >
        <div className="absolute inset-0 rounded-full bg-emerald-500/15 blur-3xl" />
        <img
          src={IMG.dishSoto}
          alt=""
          className="relative h-full w-full rounded-full object-cover ring-1 ring-gold-500/30 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.7)] animate-float"
          style={{ animationDelay: '-2s' }}
        />
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.2 }}
        className="absolute inset-x-0 bottom-6 mx-auto flex flex-col items-center gap-2 text-cream-200/55"
      >
        <span className="text-[10px] tracking-[0.5em] uppercase">Scroll · Pelan-Pelan</span>
        <span className="relative h-12 w-px overflow-hidden">
          <motion.span
            className="absolute inset-x-0 top-0 block h-1/2 bg-gold-400/80"
            animate={{ y: ['-100%', '200%'] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </span>
      </motion.div>
    </section>
  );
}

function Stat({
  heading,
  sub,
  icon,
}: {
  heading: string;
  sub: string;
  icon?: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-baseline gap-1.5">
        <span className="font-display text-3xl text-cream-50 sm:text-4xl">{heading}</span>
        {icon && <span className="text-gold-400">{icon}</span>}
      </div>
      <div className="mt-1 text-[10px] tracking-[0.3em] uppercase text-cream-200/55">{sub}</div>
    </div>
  );
}
