import { motion } from 'framer-motion';
import { OrnamentDivider } from '@/components/OrnamentDivider';
import { ImageReveal } from '@/components/ImageReveal';
import { BanyanIcon } from '@/components/BanyanIcon';
import { IMG } from '@/data/images';
import { CultureShowcase } from '@/sections/CultureShowcase';
import { Testimonials } from '@/sections/Testimonials';
import { Reservation } from '@/sections/Reservation';

const VALUES = [
  {
    title: 'Slow fire, slow rasa.',
    body:
      'We refuse the shortcut. Sambals pounded by hand, kecap reduced for hours, rendang waiting its turn. Time is a spice we will not skip.',
  },
  {
    title: 'A table without borders.',
    body:
      'Russian, Indonesian, traveling, returning. Everyone arrives differently — everyone leaves having shared the same plate.',
  },
  {
    title: 'Food as a small wish.',
    body:
      'The Kalpataru is the wish-fulfilling tree. Each dish is a quiet wish made for the person who orders it.',
  },
];

export default function AboutPage() {
  return (
    <main className="bg-emerald-950 text-cream-100">
      {/* Header */}
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

        <div className="mx-auto max-w-[1400px] px-6 text-center lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <p className="eyebrow">Our Story</p>
            <OrnamentDivider label="cerita kami" className="mt-3" />
            <h1 className="mt-6 display-xl">
              <span className="italic font-light text-cream-100/85">A small tree,</span>{' '}
              <span className="text-gradient-gold animate-shimmer">long roots.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-cream-200/75 sm:text-lg">
              Kalpataru is the first Indonesian café in Russia — opened on{' '}
              <span className="text-gold-300">7 June 2025</span> on Liteyny prospekt — to share
              the cuisine, the language, the warmth of an archipelago we carry close.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Long story with imagery */}
      <section className="relative mx-auto max-w-[1280px] px-6 py-24 lg:px-16 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-7">
            <article className="prose-kalpataru space-y-6 text-base leading-relaxed text-cream-200/85 sm:text-[1.05rem]">
              <p>
                The word <em className="text-cream-50 not-italic">Kalpataru</em> appears in
                the stone reliefs of Borobudur and Prambanan — the wishing tree, the
                divine grove, where every honest desire is granted. It is one of the oldest
                symbols in Indonesian culture, carved before borders, before currencies,
                before the names of cities.
              </p>
              <p>
                We took that name as a vow. To carry the warmth of an Indonesian table
                across thousands of kilometers, to a city of canals and snow. To prepare
                each dish the way our mothers, aunts, and grandmothers prepared it — with
                the same patience, with the same spice ratios, with the same songs running
                in the background.
              </p>
              <p>
                Our kitchen is small. The recipes are big. The sambal terasi is pounded by
                hand on a stone <em className="text-cream-50 not-italic">cobek</em>. The
                rendang turns slowly for hours until the spice paste crystallizes into
                that famous near-black gloss. The kopi tubruk is boiled with palm sugar
                the old way — no machine, only attention.
              </p>
              <p className="script-accent text-2xl text-gold-400">
                — Selamat datang di Kalpataru.
              </p>
            </article>
          </div>

          <div className="relative lg:col-span-5">
            <ImageReveal
              src={IMG.wayang}
              alt="Wayang puppets on the wall of Kalpataru"
              aspect="aspect-[4/5]"
              rounded="rounded-[28px]"
              className="ring-1 ring-cream-200/10"
            />
            <div className="absolute -bottom-8 -left-8 hidden w-44 sm:block">
              <ImageReveal
                src={IMG.windowTree}
                alt="The Kalpataru window with Indonesian books"
                aspect="aspect-[3/4]"
                rounded="rounded-2xl"
                from="left"
                className="ring-1 ring-gold-500/40"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative bg-emerald-900 py-24 lg:py-32">
        <div className="bg-noise-overlay" />
        <div className="relative mx-auto max-w-[1280px] px-6 lg:px-16">
          <p className="eyebrow text-center">Our Values</p>
          <h2 className="mt-4 text-center display-lg">
            Three quiet principles, <span className="italic text-gold-300">held close.</span>
          </h2>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {VALUES.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-3xl bg-emerald-950/55 p-8 ring-1 ring-cream-200/10"
              >
                <span className="font-display text-5xl text-gold-300/70">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-6 font-display text-2xl text-cream-50">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-cream-200/75">{v.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CultureShowcase />
      <Testimonials />
      <Reservation />
    </main>
  );
}
