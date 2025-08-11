'use client';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Sethuraj Savera',
      role: 'CEO, Savera Footwears',
      content:
        'Qubixel transformed our vision into a stunning mobile app that exceeded all expectations. Their AI integration capabilities are truly remarkable.',
      rating: 5,
    },
    {
      name: 'Sanjo Babu',
      role: 'CEO, Winheels',
      content:
        'The ERP system they built for us streamlined our entire operation. Outstanding technical expertise and project management.',
      rating: 5,
    },
    {
      name: 'Meenambika.V',
      role: 'CEO, M.krishna Foods',
      content:
        'Their SaaS platform development was flawless. The team understood our needs perfectly and delivered beyond our expectations.',
      rating: 5,
    },
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
                  <div
                    key={i}
                    className="w-5 h-5 flex items-center justify-center text-black"
                  >
                    <i className="ri-star-fill"></i>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              <div>
                <h4 className="font-semibold text-black">{testimonial.name}</h4>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
