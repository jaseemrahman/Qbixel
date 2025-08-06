'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AboutHero from './AboutHero';
import MissionSection from './MissionSection';
import ValuesSection from './ValuesSection';
import WhyChooseUs from './WhyChooseUs';
import AboutCTA from './AboutCTA';

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <AboutHero />
        <MissionSection />
        <ValuesSection />
        <WhyChooseUs />
        <AboutCTA />
      </main>
      <Footer />
    </>
  );
}