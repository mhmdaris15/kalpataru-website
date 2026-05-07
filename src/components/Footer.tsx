import { type ReactNode } from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';
import { BanyanIcon } from './BanyanIcon';
import { Instagram, Facebook, MapPin, Phone, Clock } from './Icons';
import { INFO, NAV_LINKS } from '@/data/info';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-emerald-950 text-cream-200/80">
      <div className="bg-noise-overlay" />

      {/* Giant decorative banyan tree behind footer */}
      <div
        className="pointer-events-none absolute inset-x-0 -top-16 flex justify-center text-gold-500/[0.05]"
        aria-hidden="true"
      >
        <BanyanIcon className="h-[480px] w-[480px]" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 py-20 lg:px-10 lg:py-28">
        {/* Top callout */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Selamat Datang · Welcome</p>
          <h2 className="mt-5 display-lg text-cream-50">
            <span className="text-gradient-gold animate-shimmer">Pulang ke rumah.</span>
            <span className="block text-cream-100/90 italic font-light">
              Come home to Indonesia.
            </span>
          </h2>
          <p className="script-accent mt-4 text-2xl">— Liteyny prospekt 43, Saint Petersburg</p>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          <FooterCol
            heading="Kalpataru"
            body={
              <>
                <p>{INFO.shortLine}.</p>
                <p className="mt-3 text-cream-200/55">{INFO.established} · Founded with love</p>
              </>
            }
          />

          <FooterCol heading="Visit">
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                <span>{INFO.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                <a href={`tel:${INFO.phone.replace(/[^+\d]/g, '')}`} className="hover:text-gold-300">
                  {INFO.phone}
                </a>
              </li>
            </ul>
          </FooterCol>

          <FooterCol heading="Hours">
            <ul className="space-y-2">
              {INFO.hours.map((row) => (
                <li key={row.day} className="flex items-center justify-between gap-3">
                  <span className="flex items-center gap-2 text-cream-200/70">
                    <Clock className="h-4 w-4 text-gold-400/70" />
                    {row.day}
                  </span>
                  <span className="font-mono text-sm text-cream-100">{row.time}</span>
                </li>
              ))}
            </ul>
          </FooterCol>

          <FooterCol heading="Wander">
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="group inline-flex items-center gap-2 text-cream-200/85 hover:text-gold-300 transition"
                  >
                    <span className="h-px w-3 bg-gold-500/60 transition-all group-hover:w-6" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex items-center gap-3">
              <SocialLink href={`https://instagram.com/${INFO.instagram.replace('@', '')}`} label="Instagram">
                <Instagram className="h-4 w-4" />
              </SocialLink>
              <SocialLink href="#" label="Facebook">
                <Facebook className="h-4 w-4" />
              </SocialLink>
            </div>
          </FooterCol>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-cream-200/10 pt-8 sm:flex-row"
        >
          <p className="text-xs tracking-[0.2em] uppercase text-cream-200/45">
            © {year} {INFO.brand} · Saint Petersburg
          </p>
          <p className="script-accent text-base text-gold-400/80">terima kasih</p>
          <p className="text-xs tracking-[0.2em] uppercase text-cream-200/45">
            crafted with rasa
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

function FooterCol({
  heading,
  children,
  body,
}: {
  heading: string;
  children?: ReactNode;
  body?: ReactNode;
}) {
  return (
    <div>
      <h4 className="text-[11px] tracking-[0.36em] uppercase text-gold-400">{heading}</h4>
      <div className="mt-5 text-sm leading-relaxed text-cream-200/85">{children ?? body}</div>
    </div>
  );
}

function SocialLink({ href, label, children }: { href: string; label: string; children: ReactNode }) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noreferrer"
      className="grid h-9 w-9 place-items-center rounded-full ring-1 ring-cream-200/15 text-cream-100 transition hover:bg-gold-500 hover:text-emerald-950 hover:ring-gold-500"
    >
      {children}
    </a>
  );
}
