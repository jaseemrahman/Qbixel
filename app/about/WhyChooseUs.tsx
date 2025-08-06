'use client';

export default function WhyChooseUs() {
  const features = [
    {
      title: 'Security First',
      description: 'Enterprise-grade security protocols and data protection measures in every solution we build.',
      icon: 'ri-shield-check-line',
      image: 'https://readdy.ai/api/search-image?query=Cybersecurity%20and%20data%20protection%20concept%20with%20shield%20symbols%20and%20secure%20technology%20infrastructure%2C%20enterprise%20security%20visualization%2C%20digital%20protection%20systems%2C%20professional%20black%20and%20white%20security%20aesthetic&width=400&height=250&seq=security-first&orientation=landscape'
    },
    {
      title: 'Agile Process',
      description: 'Flexible development methodology with regular updates and continuous client collaboration.',
      icon: 'ri-refresh-line',
      image: 'https://readdy.ai/api/search-image?query=Agile%20development%20workflow%20with%20iterative%20cycles%20and%20continuous%20improvement%20processes%2C%20modern%20project%20management%20visualization%2C%20efficient%20development%20methodology%2C%20clean%20minimalist%20design&width=400&height=250&seq=agile-process&orientation=landscape'
    },
    {
      title: 'End-to-End Support',
      description: 'Comprehensive support from initial consultation through deployment and ongoing maintenance.',
      icon: 'ri-24-hours-line',
      image: 'https://readdy.ai/api/search-image?query=Professional%20customer%20support%20and%20technical%20assistance%20concept%2C%20comprehensive%20service%20delivery%20visualization%2C%2024%2F7%20support%20systems%2C%20modern%20business%20support%20infrastructure%2C%20monochrome%20professional%20aesthetic&width=400&height=250&seq=end-to-end-support&orientation=landscape'
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
            We deliver exceptional results through proven methodologies, cutting-edge technology, and unwavering commitment to client success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="mb-6">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-48 object-cover object-top mb-6"
                />
                <div className="w-16 h-16 flex items-center justify-center bg-black text-white group-hover:bg-white group-hover:text-black border-2 border-black transition-all duration-300">
                  <i className={`${feature.icon} text-2xl`}></i>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}