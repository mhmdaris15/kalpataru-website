import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/SectionHeading';
import { MagneticButton } from '@/components/MagneticButton';
import { useUIStore } from '@/store/useUIStore';
import { INFO } from '@/data/info';
import { ArrowUpRight, Clock, MapPin, Phone } from '@/components/Icons';
import { GlassCard } from '@/components/GlassCard';
import { ImageReveal } from '@/components/ImageReveal';
import { IMG } from '@/data/images';

export function Reservation() {
  const open = useUIStore((s) => s.openReservation);

  return (
    <section
      id="visit"
      className="relative overflow-hidden bg-gradient-to-b from-emerald-950 to-emerald-900"
    >
      <div className="bg-noise-overlay" />

      <div className="relative mx-auto max-w-[1400px] px-6 py-[var(--spacing-section)] lg:px-16">
        <SectionHeading
          eyebrow="Visit · Reservation"
          scriptLabel="kami menunggu"
          title={
            <>
              Come, we have set
              <span className="block">
                <span className="text-gradient-gold animate-shimmer">a place for you.</span>
              </span>
            </>
          }
          subtitle="Reservations honored across the seven days of the week. Walk-ins welcomed beneath the wayang."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Big interior photo */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <ImageReveal
              src={IMG.interiorBlue}
              alt="Quiet corner of Kalpataru, ready for guests"
              aspect="aspect-[5/4]"
              from="bottom"
              rounded="rounded-[28px]"
              className="ring-1 ring-cream-200/10 shadow-[0_50px_120px_-30px_rgba(0,0,0,0.7)]"
            />
          </motion.div>

          {/* Visit details */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            <GlassCard warm className="p-7 lg:p-8">
              <p className="eyebrow">Where</p>
              <p className="mt-3 font-display text-2xl text-cream-50">
                Liteyny prospekt, 43
              </p>
              <p className="text-cream-200/75">Saint Petersburg, Russia</p>
              <a
                href="https://yandex.com/maps/?text=Liteyny+prospekt+43+Saint+Petersburg"
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-[11px] tracking-[0.3em] uppercase text-gold-300 transition hover:text-gold-200"
              >
                <MapPin className="h-3.5 w-3.5" />
                Open in maps
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </GlassCard>

            <GlassCard warm className="p-7 lg:p-8">
              <p className="eyebrow">When</p>
              <ul className="mt-4 space-y-2.5">
                {INFO.hours.map((row) => (
                  <li
                    key={row.day}
                    className="flex items-center justify-between gap-4 border-b border-cream-200/10 pb-2.5 last:border-0 last:pb-0"
                  >
                    <span className="flex items-center gap-2 text-cream-200/85">
                      <Clock className="h-3.5 w-3.5 text-gold-400" />
                      {row.day}
                    </span>
                    <span className="font-mono text-sm text-cream-50">{row.time}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>

            <GlassCard warm className="flex items-center justify-between gap-4 p-5 lg:p-6">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-gold-500/15 text-gold-300">
                  <Phone className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-[10px] tracking-[0.32em] uppercase text-cream-200/55">
                    Reserve by phone
                  </p>
                  <a
                    href={`tel:${INFO.phone.replace(/[^+\d]/g, '')}`}
                    className="font-display text-lg text-cream-50 hover:text-gold-300"
                  >
                    {INFO.phone}
                  </a>
                </div>
              </div>
            </GlassCard>

            <MagneticButton
              variant="primary"
              size="lg"
              className="w-full"
              onClick={open}
              iconRight={<ArrowUpRight className="h-4 w-4" />}
            >
              Reserve a Table Online
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
}
