'use client';

import Link from 'next/link';

export default function SolutionsPreview() {
  const solutions = [
    {
      title: 'Mobile Apps',
      description: 'Custom iOS & Android applications with native performance and cross-platform compatibility.',
      icon: 'ri-smartphone-line',
      image: 'https://readdy.ai/api/search-image?query=Modern%20smartphone%20displaying%20sleek%20mobile%20application%20interface%20with%20clean%20design%20elements%2C%20minimalist%20UI%20screens%2C%20professional%20mobile%20development%20concept%2C%20black%20and%20white%20color%20scheme%2C%20high-tech%20atmosphere&width=400&height=300&seq=mobile-apps&orientation=landscape'
    },
    {
      title: 'AI/ML Solutions',
      description: 'Intelligent systems with predictive analytics, automation, and machine learning capabilities.',
      icon: 'ri-brain-line',
      image: 'https://readdy.ai/api/search-image?query=Artificial%20intelligence%20and%20machine%20learning%20visualization%20with%20neural%20networks%2C%20data%20processing%20algorithms%2C%20futuristic%20AI%20technology%20concept%2C%20minimalist%20design%2C%20black%20and%20white%20aesthetic&width=400&height=300&seq=ai-ml&orientation=landscape'
    },
    {
      title: 'SaaS Platforms',
      description: 'Cloud-native software platforms with scalable architecture and subscription models.',
      icon: 'ri-cloud-line',
      image: 'https://readdy.ai/api/search-image?query=Cloud%20computing%20infrastructure%20with%20servers%20and%20data%20centers%2C%20SaaS%20platform%20visualization%2C%20modern%20technology%20architecture%2C%20professional%20cloud%20services%2C%20minimalist%20black%20and%20white%20design&width=400&height=300&seq=saas&orientation=landscape'
    },
    {
      title: 'ERP Systems',
      description: 'Comprehensive business management solutions for finance, HR, and supply chain.',
      icon: 'ri-building-line',
      image: 'https://readdy.ai/api/search-image?query=Enterprise%20resource%20planning%20system%20dashboard%20with%20business%20analytics%20charts%20and%20data%20visualization%2C%20corporate%20management%20interface%2C%20professional%20business%20software%2C%20clean%20monochrome%20design&width=400&height=300&seq=erp&orientation=landscape'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 font-poppins">
            Our Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to transform your business and drive digital innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-white p-8 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
              <div className="mb-6">
                <img 
                  src={solution.image} 
                  alt={solution.title}
                  className="w-full h-48 object-cover object-top mb-4"
                />
                <div className="w-12 h-12 flex items-center justify-center bg-black text-white group-hover:bg-white group-hover:text-black border-2 border-black transition-all duration-300">
                  <i className={`${solution.icon} text-xl`}></i>
                </div>
              </div>
              <h3 className="text-xl font-bold text-black mb-4">{solution.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{solution.description}</p>
              <Link href="/services" className="inline-flex items-center text-black font-semibold hover:text-gray-600 transition-smooth whitespace-nowrap cursor-pointer">
                Learn More
                <div className="w-4 h-4 flex items-center justify-center ml-2">
                  <i className="ri-arrow-right-line"></i>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}