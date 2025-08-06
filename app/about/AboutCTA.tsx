
'use client';

import Link from 'next/link';

export default function AboutCTA() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-poppins">
          Ready to Transform Your Business?
        </h2>
        <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
          Let's discuss how Qbixel can help you achieve your digital transformation goals with innovative, scalable solutions.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link href="/contact" className="bg-white text-black px-8 py-4 font-semibold text-lg transition-all duration-300 hover:bg-black hover:text-white border-2 border-white whitespace-nowrap cursor-pointer">
            Contact Us
          </Link>
          <Link href="/services" className="bg-transparent text-white px-8 py-4 font-semibold text-lg transition-all duration-300 hover:bg-white hover:text-black border-2 border-white whitespace-nowrap cursor-pointer">
            View Services
          </Link>
        </div>
      </div>
    </section>
  );
}
