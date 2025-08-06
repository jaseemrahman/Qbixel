'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServicesHero from './ServicesHero';
import ServicesList from './ServicesList';

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <ServicesHero />
        <ServicesList />
      </main>
      <Footer />
    </>
  );
}