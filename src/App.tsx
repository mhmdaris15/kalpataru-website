import { lazy, Suspense } from 'react';
import { Route, Routes, useLocation } from 'react-router';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ScrollProgress } from '@/components/ScrollProgress';
import { CursorGlow } from '@/components/CursorGlow';
import { LoadingScreen } from '@/components/LoadingScreen';
import { ReservationModal } from '@/components/ReservationModal';
import { PageTransition } from '@/components/PageTransition';

const Home = lazy(() => import('@/pages/Home'));
const MenuPage = lazy(() => import('@/pages/MenuPage'));
const AboutPage = lazy(() => import('@/pages/AboutPage'));
const ContactPage = lazy(() => import('@/pages/ContactPage'));

function PageFallback() {
  return (
    <div className="grid min-h-[80svh] place-items-center bg-emerald-950 text-cream-100">
      <div className="h-px w-32 origin-left animate-pulse-glow bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
    </div>
  );
}

function AppRoutes() {
  const location = useLocation();
  return (
    <PageTransition>
      <Suspense fallback={<PageFallback />}>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
    </PageTransition>
  );
}

export default function App() {
  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      <AppRoutes />
      <Footer />
      <ReservationModal />
    </>
  );
}
