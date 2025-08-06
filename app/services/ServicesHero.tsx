'use client';

export default function ServicesHero() {
  return (
    <section 
      className="relative min-h-screen bg-black flex items-center justify-center"
      style={{
        backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20technology%20services%20showcase%20with%20multiple%20digital%20solutions%20including%20mobile%20apps%2C%20AI%20systems%2C%20cloud%20platforms%2C%20and%20enterprise%20software%2C%20comprehensive%20tech%20services%20visualization%2C%20professional%20technology%20infrastructure%2C%20sophisticated%20black%20and%20white%20design%20aesthetic&width=1920&height=1080&seq=services-hero&orientation=landscape')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-black/70"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="w-20 h-1 bg-white mx-auto mb-8"></div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight font-poppins">
          Comprehensive<br />
          Tech Solutions
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed">
          From mobile applications to enterprise systems, we deliver cutting-edge technology solutions that drive business transformation.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mt-16">
          <div className="text-center">
            <div className="w-12 h-12 flex items-center justify-center bg-white text-black mx-auto mb-3">
              <i className="ri-smartphone-line text-xl"></i>
            </div>
            <div className="text-white font-semibold">Mobile Apps</div>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 flex items-center justify-center bg-white text-black mx-auto mb-3">
              <i className="ri-brain-line text-xl"></i>
            </div>
            <div className="text-white font-semibold">AI/ML</div>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 flex items-center justify-center bg-white text-black mx-auto mb-3">
              <i className="ri-cloud-line text-xl"></i>
            </div>
            <div className="text-white font-semibold">SaaS</div>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 flex items-center justify-center bg-white text-black mx-auto mb-3">
              <i className="ri-building-line text-xl"></i>
            </div>
            <div className="text-white font-semibold">ERP</div>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 flex items-center justify-center bg-white text-black mx-auto mb-3">
              <i className="ri-code-line text-xl"></i>
            </div>
            <div className="text-white font-semibold">Web Dev</div>
          </div>
        </div>
      </div>
    </section>
  );
}