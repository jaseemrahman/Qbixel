'use client';

export default function ValuePropositions() {
  const values = [
    {
      title: 'Pixel-Perfect',
      description: 'Every design element crafted with meticulous attention to detail and precision.',
      icon: 'ri-focus-3-line',
      image: 'https://readdy.ai/api/search-image?query=Precision%20design%20tools%20and%20pixel-perfect%20digital%20interface%20elements%2C%20detailed%20craftsmanship%20in%20technology%20design%2C%20professional%20design%20workflow%2C%20minimalist%20black%20and%20white%20aesthetic%2C%20high-quality%20visual%20precision&width=300&height=200&seq=pixel-perfect&orientation=landscape'
    },
    {
      title: 'AI Intelligence',
      description: 'Advanced artificial intelligence integrated into every solution for smarter outcomes.',
      icon: 'ri-robot-line',
      image: 'https://readdy.ai/api/search-image?query=Artificial%20intelligence%20brain%20network%20with%20neural%20connections%2C%20smart%20technology%20integration%2C%20futuristic%20AI%20concepts%2C%20intelligent%20automation%20systems%2C%20clean%20monochrome%20design%20aesthetic&width=300&height=200&seq=ai-intelligence&orientation=landscape'
    },
    {
      title: 'Agile Delivery',
      description: 'Rapid development cycles with continuous feedback and iterative improvements.',
      icon: 'ri-rocket-line',
      image: 'https://readdy.ai/api/search-image?query=Agile%20development%20workflow%20with%20sprint%20boards%20and%20rapid%20delivery%20cycles%2C%20modern%20project%20management%20visualization%2C%20efficient%20development%20process%2C%20professional%20workspace%2C%20black%20and%20white%20color%20scheme&width=300&height=200&seq=agile-delivery&orientation=landscape'
    },
    {
      title: 'Future-Ready',
      description: 'Scalable architecture built to adapt and grow with emerging technologies.',
      icon: 'ri-flashlight-line',
      image: 'https://readdy.ai/api/search-image?query=Futuristic%20technology%20architecture%20with%20scalable%20systems%20and%20emerging%20tech%20concepts%2C%20next-generation%20digital%20infrastructure%2C%20innovative%20technology%20solutions%2C%20modern%20minimalist%20design&width=300&height=200&seq=future-ready&orientation=landscape'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 font-poppins">
            Why Choose Qubixel
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We deliver exceptional results through innovative technology, proven expertise, and unwavering commitment to excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center group">
              <div className="mb-6">
                <img 
                  src={value.image} 
                  alt={value.title}
                  className="w-full h-40 object-cover object-top mb-6 grayscale group-hover:grayscale-0 transition-all duration-300"
                />
                <div className="w-16 h-16 flex items-center justify-center bg-black text-white mx-auto group-hover:bg-white group-hover:text-black border-2 border-black transition-all duration-300">
                  <i className={`${value.icon} text-2xl`}></i>
                </div>
              </div>
              <h3 className="text-xl font-bold text-black mb-4">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}