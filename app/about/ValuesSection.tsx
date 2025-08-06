'use client';

export default function ValuesSection() {
  const values = [
    {
      title: 'Innovation',
      description: 'We constantly push boundaries and embrace cutting-edge technologies to deliver solutions that set new industry standards.',
      icon: 'ri-lightbulb-line',
      image: 'https://readdy.ai/api/search-image?query=Innovation%20concept%20with%20lightbulb%20and%20creative%20technology%20elements%2C%20modern%20innovation%20visualization%2C%20breakthrough%20ideas%20and%20creative%20solutions%2C%20minimalist%20black%20and%20white%20design%20aesthetic&width=300&height=200&seq=innovation-value&orientation=landscape'
    },
    {
      title: 'Transparency',
      description: 'Open communication and honest relationships with our clients form the foundation of every successful project partnership.',
      icon: 'ri-eye-line',
      image: 'https://readdy.ai/api/search-image?query=Transparency%20and%20clarity%20concept%20with%20clear%20glass%20elements%20and%20open%20communication%20symbols%2C%20professional%20business%20transparency%20visualization%2C%20honest%20partnership%20representation%2C%20clean%20monochrome%20aesthetic&width=300&height=200&seq=transparency-value&orientation=landscape'
    },
    {
      title: 'Customer Focus',
      description: 'Our clients success is our success. Every decision we make is driven by delivering exceptional value and results.',
      icon: 'ri-customer-service-line',
      image: 'https://readdy.ai/api/search-image?query=Customer%20focus%20and%20client%20satisfaction%20concept%20with%20service%20excellence%20symbols%2C%20professional%20customer%20support%20visualization%2C%20client-centered%20business%20approach%2C%20sophisticated%20black%20and%20white%20design&width=300&height=200&seq=customer-focus-value&orientation=landscape'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 font-poppins">
            Our Core Values
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The principles that guide every decision we make and every solution we deliver.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {values.map((value, index) => (
            <div key={index} className="text-center bg-white p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="mb-6">
                <img 
                  src={value.image} 
                  alt={value.title}
                  className="w-full h-40 object-cover object-top mb-6"
                />
                <div className="w-16 h-16 flex items-center justify-center bg-black text-white mx-auto">
                  <i className={`${value.icon} text-2xl`}></i>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}