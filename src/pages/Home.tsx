import { Hero } from '@/sections/Hero';
import { About } from '@/sections/About';
import { SignatureDishes } from '@/sections/SignatureDishes';
import { CultureShowcase } from '@/sections/CultureShowcase';
import { DiscoverIndonesia } from '@/sections/DiscoverIndonesia';
import { Testimonials } from '@/sections/Testimonials';
import { MenuTeaser } from '@/sections/MenuTeaser';
import { Reservation } from '@/sections/Reservation';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <SignatureDishes />
      <CultureShowcase />
      <DiscoverIndonesia />
      <Testimonials />
      <MenuTeaser />
      <Reservation />
    </main>
  );
}
