
'use client';

import Link from 'next/link';

export default function ServicesList() {
  const services = [
    {
      title: 'Mobile App Development',
      description: 'Custom iOS and Android applications with native performance and cross-platform compatibility. From concept to deployment, we create mobile experiences that engage users and drive business growth.',
      features: ['Native iOS & Android', 'Cross-platform solutions', 'UI/UX Design', 'App Store optimization', 'Performance monitoring'],
      icon: 'ri-smartphone-fill',
      image: 'https://readdy.ai/api/search-image?query=Mobile%20app%20development%20with%20smartphones%20showing%20custom%20application%20interfaces%2C%20iOS%20and%20Android%20development%20environment%2C%20native%20and%20cross-platform%20mobile%20solutions%2C%20modern%20app%20design%20screens%2C%20professional%20mobile%20development%20workspace&width=600&height=400&seq=mobile-dev-service&orientation=landscape'
    },
    {
      title: 'AI/ML Solutions',
      description: 'Intelligent systems powered by machine learning, predictive analytics, chatbots, and automation. Transform your data into actionable insights and automate complex business processes.',
      features: ['Predictive Analytics', 'Intelligent Chatbots', 'Process Automation', 'Computer Vision', 'Natural Language Processing'],
      icon: 'ri-brain-fill',
      image: 'https://readdy.ai/api/search-image?query=Artificial%20intelligence%20and%20machine%20learning%20systems%20with%20neural%20networks%2C%20data%20analytics%20dashboards%2C%20AI%20algorithms%20visualization%2C%20intelligent%20automation%20processes%2C%20futuristic%20AI%20technology%20interface%2C%20sophisticated%20black%20and%20white%20design&width=600&height=400&seq=ai-ml-service&orientation=landscape'
    },
    {
      title: 'SaaS Platform Development',
      description: 'Cloud-native software platforms with scalable architecture, subscription models, and multi-tenant capabilities. Build sustainable recurring revenue with robust SaaS solutions.',
      features: ['Cloud-native Architecture', 'Subscription Models', 'Multi-tenant Systems', 'API Integration', 'Real-time Analytics'],
      icon: 'ri-cloud-fill',
      image: 'https://readdy.ai/api/search-image?query=Software%20as%20a%20Service%20platform%20with%20cloud%20infrastructure%2C%20scalable%20SaaS%20architecture%2C%20subscription-based%20software%20systems%2C%20cloud%20computing%20dashboard%2C%20modern%20SaaS%20platform%20interface%2C%20professional%20cloud%20technology%20visualization&width=600&height=400&seq=saas-service&orientation=landscape'
    },
    {
      title: 'ERP Systems',
      description: 'Comprehensive enterprise resource planning solutions for finance, HR, supply chain, and operations management. Streamline your business processes with integrated ERP systems.',
      features: ['Financial Management', 'HR & Payroll', 'Supply Chain', 'Inventory Management', 'Business Intelligence'],
      icon: 'ri-building-fill',
      image: 'https://readdy.ai/api/search-image?query=Enterprise%20resource%20planning%20system%20with%20business%20management%20dashboards%2C%20ERP%20modules%20for%20finance%20and%20HR%2C%20comprehensive%20business%20software%20interface%2C%20corporate%20management%20systems%2C%20professional%20enterprise%20software%20visualization&width=600&height=400&seq=erp-service&orientation=landscape'
    },
    {
      title: 'Website Development',
      description: 'Pixel-perfect, responsive websites built with Next.js, React, and modern web technologies. SEO-optimized sites that deliver exceptional user experiences and drive conversions.',
      features: ['Next.js & React', 'Responsive Design', 'SEO Optimization', 'Performance Optimization', 'E-commerce Solutions'],
      icon: 'ri-code-fill',
      image: 'https://readdy.ai/api/search-image?query=Modern%20web%20development%20with%20responsive%20website%20design%2C%20Next.js%20and%20React%20development%20environment%2C%20pixel-perfect%20web%20interfaces%2C%20professional%20web%20development%20workspace%2C%20contemporary%20website%20layouts%2C%20clean%20minimalist%20web%20design&width=600&height=400&seq=web-dev-service&orientation=landscape'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 font-poppins">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            End-to-end technology solutions designed to accelerate your digital transformation and drive business success.
          </p>
        </div>

        <div className="space-y-20">
          {services.map((service, index) => (
            <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="mb-6">
                  <div className="w-16 h-16 flex items-center justify-center bg-black text-white mb-6">
                    <i className={`${service.icon} text-2xl`}></i>
                  </div>
                  <h3 className="text-3xl font-bold text-black mb-4 font-poppins">{service.title}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">{service.description}</p>
                </div>
                
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-black mb-4">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <div className="w-4 h-4 flex items-center justify-center mr-3">
                          <i className="ri-check-line text-black"></i>
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link href="/contact" className="inline-flex items-center bg-black text-white px-6 py-3 font-semibold transition-all duration-300 hover:bg-white hover:text-black border-2 border-black whitespace-nowrap cursor-pointer">
                  Learn More
                  <div className="w-4 h-4 flex items-center justify-center ml-2">
                    <i className="ri-arrow-right-line"></i>
                  </div>
                </Link>
              </div>
              
              <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-80 object-cover object-top shadow-lg"
                />
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center bg-gray-50 p-12">
          <h3 className="text-3xl font-bold text-black mb-6 font-poppins">
            Need a Custom Solution?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Every business is unique. Let's discuss how we can create a tailored technology solution that perfectly fits your specific requirements and goals.
          </p>
          <Link href="/contact" className="bg-black text-white px-8 py-4 font-semibold text-lg transition-all duration-300 hover:bg-white hover:text-black border-2 border-black whitespace-nowrap cursor-pointer">
            Get Custom Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
