'use client';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      content: 'Qubixel transformed our vision into a stunning mobile app that exceeded all expectations. Their AI integration capabilities are truly remarkable.',
      rating: 5,
      image: 'https://readdy.ai/api/search-image?query=Professional%20business%20woman%20CEO%20in%20modern%20office%20environment%2C%20confident%20executive%20portrait%2C%20minimalist%20professional%20headshot%2C%20black%20and%20white%20corporate%20photography%20style&width=80&height=80&seq=testimonial-1&orientation=squarish'
    },
    {
      name: 'Michael Chen',
      role: 'CTO, DataFlow Solutions',
      content: 'The ERP system they built for us streamlined our entire operation. Outstanding technical expertise and project management.',
      rating: 5,
      image: 'https://readdy.ai/api/search-image?query=Professional%20technology%20executive%20in%20contemporary%20workspace%2C%20confident%20CTO%20portrait%2C%20modern%20business%20leader%20headshot%2C%20monochrome%20professional%20photography&width=80&height=80&seq=testimonial-2&orientation=squarish'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Founder, CloudVision',
      content: 'Their SaaS platform development was flawless. The team understood our needs perfectly and delivered beyond our expectations.',
      rating: 5,
      image: 'https://readdy.ai/api/search-image?query=Professional%20female%20founder%20in%20modern%20tech%20environment%2C%20successful%20entrepreneur%20portrait%2C%20contemporary%20business%20leader%20headshot%2C%20clean%20black%20and%20white%20aesthetic&width=80&height=80&seq=testimonial-3&orientation=squarish'
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-poppins">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Trusted by innovative companies worldwide to deliver exceptional digital solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 shadow-lg">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <div key={i} className="w-5 h-5 flex items-center justify-center text-black">
                    <i className="ri-star-fill"></i>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover object-top mr-4"
                />
                <div>
                  <h4 className="font-semibold text-black">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}