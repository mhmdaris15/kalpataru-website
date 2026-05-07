import { motion } from 'framer-motion';
import { OrnamentDivider } from '@/components/OrnamentDivider';
import { Reservation } from '@/sections/Reservation';
import { INFO } from '@/data/info';
import { GlassCard } from '@/components/GlassCard';
import { Instagram, MapPin, Phone } from '@/components/Icons';
import { BanyanIcon } from '@/components/BanyanIcon';

export default function ContactPage() {
  return (
    <main className="bg-emerald-950 text-cream-100">
      <section className="relative isolate overflow-hidden pb-16 pt-32 lg:pt-44">
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              'radial-gradient(60% 50% at 50% 30%, rgba(232,197,71,0.10), transparent 70%)',
          }}
        />
        <div className="absolute inset-0 -z-10 flex items-start justify-center pt-20 text-gold-500/[0.04]">
          <BanyanIcon className="h-[600px] w-[600px]" />
        </div>
        <div className="bg-noise-overlay -z-10" />

        <div className="mx-auto max-w-[1280px] px-6 text-center lg:px-16">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
            <p className="eyebrow">Visit · Contact</p>
            <OrnamentDivider label="silahkan datang" className="mt-3" />
            <h1 className="mt-6 display-xl">
              <span className="italic font-light text-cream-100/85">Find your way</span>{' '}
              <span className="text-gradient-gold animate-shimmer">to Kalpataru.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-6 py-12 lg:px-16 lg:py-20">
        <div className="grid gap-6 sm:grid-cols-3">
          <GlassCard warm className="p-7">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-gold-500/15 text-gold-300">
              <MapPin className="h-4 w-4" />
            </span>
            <p className="mt-5 text-[10px] tracking-[0.32em] uppercase text-cream-200/55">Address</p>
            <p className="mt-2 font-display text-xl text-cream-50">{INFO.address}</p>
          </GlassCard>
          <GlassCard warm className="p-7">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-gold-500/15 text-gold-300">
              <Phone className="h-4 w-4" />
            </span>
            <p className="mt-5 text-[10px] tracking-[0.32em] uppercase text-cream-200/55">Phone</p>
            <a href={`tel:${INFO.phone.replace(/[^+\d]/g, '')}`} className="mt-2 block font-display text-xl text-cream-50 hover:text-gold-300">
              {INFO.phone}
            </a>
          </GlassCard>
          <GlassCard warm className="p-7">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-gold-500/15 text-gold-300">
              <Instagram className="h-4 w-4" />
            </span>
            <p className="mt-5 text-[10px] tracking-[0.32em] uppercase text-cream-200/55">Instagram</p>
            <a
              href={`https://instagram.com/${INFO.instagram.replace('@', '')}`}
              target="_blank"
              rel="noreferrer"
              className="mt-2 block font-display text-xl text-cream-50 hover:text-gold-300"
            >
              {INFO.instagram}
            </a>
          </GlassCard>
        </div>

        <div className="mt-10 overflow-hidden rounded-[28px] ring-1 ring-cream-200/10">
          <iframe
            title="Kalpataru on the map"
            src="https://yandex.com/map-widget/v1/?ll=30.348%2C59.939&z=16&pt=30.348%2C59.939%2Cpm2gnl&l=map"
            className="h-[480px] w-full bg-emerald-900"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      <Reservation />
    </main>
  );
}
