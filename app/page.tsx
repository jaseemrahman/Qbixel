'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import SolutionsPreview from '@/components/SolutionsPreview';
import ValuePropositions from '@/components/ValuePropositions';
import TestimonialsSection from '@/components/TestimonialsSection';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <SolutionsPreview />
        <ValuePropositions />
        <TestimonialsSection />
      </main>
      <Footer />
    </>
  );
}