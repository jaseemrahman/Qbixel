'use client';

import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import SolutionsPreview from '@/components/SolutionsPreview';
import ValuePropositions from '@/components/ValuePropositions';
import TestimonialsSection from '@/components/TestimonialsSection';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        {/* Meta Title */}
        <title>
          Qbixel | AI, SaaS, ERP & Mobile App Development Company in Kerala,
          India
        </title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Qbixel is a leading software development company in Calicut, Kerala, delivering AI-powered SaaS platforms, ERP systems, and mobile app solutions. We help businesses scale with future-ready technology."
        />

        {/* Open Graph for Social Media */}
        <meta
          property="og:title"
          content="Qbixel | AI, SaaS, ERP & Mobile App Development Company in Kerala, India"
        />
        <meta
          property="og:description"
          content="Qbixel delivers AI-powered SaaS platforms, ERP systems, and mobile apps to help businesses scale with future-ready technology."
        />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <HeroSection />

        {/* SEO-Optimized Content */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            AI, SaaS, ERP & Mobile App Development Company in Kerala — Qbixel
          </h1>
          <p className="text-lg text-gray-700 mb-12">
            At Qbixel, we transform ideas into intelligent, future-ready
            software. From AI-powered ERP systems to scalable SaaS platforms and
            high-performance mobile apps, our team in Calicut, Kerala builds
            solutions that help businesses grow faster and smarter. Our focus is
            precision, agility, and innovation — ensuring your technology works
            seamlessly today and scales effortlessly tomorrow.
          </p>

          {/* Our Services */}
          <h2 className="text-2xl font-bold mb-6">
            Our Core Software Development Services
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold">
                Custom Mobile App Development
              </h3>
              <p>
                We design and develop native and cross-platform mobile apps for
                iOS and Android, focusing on user experience, performance, and
                scalability. Whether you're a startup or an enterprise, our apps
                are built to engage and retain users.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                AI & Machine Learning Solutions
              </h3>
              <p>
                From predictive analytics to automation, we integrate machine
                learning and artificial intelligence into business workflows,
                helping you make smarter decisions and reduce operational costs.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                SaaS Platform Development
              </h3>
              <p>
                We build cloud-native SaaS products with secure architecture,
                subscription models, and robust APIs, enabling your business to
                deliver services at scale to global audiences.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                ERP Software for Business Automation
              </h3>
              <p>
                Our ERP systems streamline operations across finance, HR,
                inventory, and supply chain, tailored to your business needs and
                powered by cutting-edge technology.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Website Design & Development
              </h3>
              <p>
                We create fast, SEO-friendly websites with responsive design and
                optimized performance to represent your brand and convert
                visitors into customers.
              </p>
            </div>
          </div>

          {/* Why Choose Qbixel */}
          <h2 className="text-2xl font-bold mt-12 mb-6">
            Why Businesses Choose Qbixel
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Pixel-Perfect Precision:</strong> We obsess over details,
              from design to deployment.
            </li>
            <li>
              <strong>AI-Driven Intelligence:</strong> Our solutions are
              smarter, faster, and future-ready.
            </li>
            <li>
              <strong>Agile Delivery:</strong> We ship products quickly, refine
              through feedback, and improve continuously.
            </li>
            <li>
              <strong>Future-Ready Architecture:</strong> We design systems that
              grow as your business scales.
            </li>
          </ul>

          {/* Call to Action */}
          <div className="mt-12 p-6 bg-gray-100 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4">
              Start Your Project with Qbixel
            </h2>
            <p className="mb-6">
              Ready to transform your ideas into intelligent software? Let’s
              build your next mobile app, SaaS platform, or ERP system together.
            </p>
            <Link
              href="/contact"
              className="bg-black text-white px-8 py-4 font-semibold text-lg rounded hover:bg-gray-800 transition-colors"
            >
              Get a Free Consultation
            </Link>
          </div>
        </section>

        <SolutionsPreview />
        <ValuePropositions />
        <TestimonialsSection />
      </main>
      <Footer />
    </>
  );
}
