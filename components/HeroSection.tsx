'use client';

import Link from 'next/link';

export default function HeroSection() {
  return (
    <section 
      className="relative min-h-screen bg-black flex items-center justify-center"
      style={{
        backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20minimalist%20tech%20workspace%20with%20sleek%20computers%20and%20digital%20interfaces%20in%20a%20dark%20sophisticated%20environment%20with%20subtle%20lighting%20effects%2C%20professional%20technology%20setup%2C%20black%20and%20white%20color%20scheme%2C%20high%20contrast%20lighting%2C%20premium%20tech%20atmosphere%2C%20clean%20geometric%20shapes&width=1920&height=1080&seq=hero-tech&orientation=landscape')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-black/70"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="w-20 h-1 bg-white mx-auto mb-8"></div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight font-poppins">
          Ideas Electrified.<br />
          Solutions Perfected.
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed">
          Next-gen software solutions—from AI-powered apps to SaaS & ERP—crafted with precision.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link href="/contact" className="bg-white text-black px-8 py-4 font-semibold text-lg transition-all duration-300 hover:bg-black hover:text-white border-2 border-white whitespace-nowrap cursor-pointer">
            Start Project
          </Link>
          <Link href="/contact" className="bg-transparent text-white px-8 py-4 font-semibold text-lg transition-all duration-300 hover:bg-white hover:text-black border-2 border-white whitespace-nowrap cursor-pointer">
            Schedule Demo
          </Link>
        </div>
        
        {/* <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-white mb-2">100+</div>
            <div className="text-gray-300">Projects Delivered</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white mb-2">50+</div>
            <div className="text-gray-300">Happy Clients</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white mb-2">5+</div>
            <div className="text-gray-300">Years Experience</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white mb-2">24/7</div>
            <div className="text-gray-300">Support</div>
          </div>
        </div> */}
      </div>
    </section>
  );
}