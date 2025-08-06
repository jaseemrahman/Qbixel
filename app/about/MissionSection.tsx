
'use client';

export default function MissionSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-8 font-poppins">
              Our Mission
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                At Qbixel, we believe in the transformative power of technology. Our mission is to empower businesses with next-generation digital solutions that drive innovation, efficiency, and growth.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                With extensive experience across diverse industries, we have established ourselves as a trusted partner for companies seeking to digitalize their operations and stay ahead of the competition.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                From AI-powered mobile applications to comprehensive ERP systems and website development, we craft solutions that are not just functional, but exceptional in every aspect of design and performance.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://readdy.ai/api/search-image?query=Professional%20technology%20team%20working%20collaboratively%20on%20innovative%20digital%20solutions%2C%20modern%20office%20environment%20with%20developers%20and%20designers%2C%20contemporary%20workspace%20with%20multiple%20screens%20and%20tech%20equipment%2C%20clean%20minimalist%20aesthetic%2C%20black%20and%20white%20corporate%20photography&width=600&height=500&seq=mission-image&orientation=landscape"
              alt="Our Mission" 
              className="w-full h-96 object-cover object-top shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
