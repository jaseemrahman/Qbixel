
'use client';

export default function ContactInfo() {
  const contactMethods = [
    {
      icon: 'ri-mail-line',
      title: 'Email Us',
      content: 'qbixel@gmail.com',
      description: 'Send us an email anytime'
    },
    {
      icon: 'ri-phone-line',
      title: 'Call Us',
      content: '+91 XXXXX XXXXX',
      description: 'Mon-Fri from 9am to 6pm IST'
    },
    {
      icon: 'ri-map-pin-line',
      title: 'Visit Us',
      content: 'India',
      description: 'Our development center'
    }
  ];

  return (
    <section 
      className="bg-black py-20 relative"
      style={{
        backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20professional%20office%20building%20with%20contemporary%20architecture%2C%20sleek%20corporate%20headquarters%2C%20minimalist%20business%20facility%20exterior%2C%20sophisticated%20black%20and%20white%20architectural%20photography%2C%20professional%20business%20environment&width=800&height=600&seq=contact-office&orientation=landscape')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-black/80"></div>
      
      <div className="relative z-10 max-w-2xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-poppins">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-300">
            Ready to discuss your project? Reach out to us through any of these channels.
          </p>
        </div>

        <div className="space-y-8">
          {contactMethods.map((method, index) => (
            <div key={index} className="flex items-start space-x-4 bg-white/10 p-6 backdrop-blur-sm">
              <div className="w-12 h-12 flex items-center justify-center bg-white text-black flex-shrink-0">
                <i className={`${method.icon} text-xl`}></i>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">{method.title}</h3>
                <p className="text-lg text-gray-200 mb-1">{method.content}</p>
                <p className="text-gray-400">{method.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white/10 p-8 backdrop-blur-sm">
          <h3 className="text-2xl font-bold text-white mb-4">Office Hours</h3>
          <div className="space-y-2 text-gray-300">
            <div className="flex justify-between">
              <span>Monday - Friday:</span>
              <span>9:00 AM - 6:00 PM IST</span>
            </div>
            <div className="flex justify-between">
              <span>Saturday:</span>
              <span>10:00 AM - 4:00 PM IST</span>
            </div>
            <div className="flex justify-between">
              <span>Sunday:</span>
              <span>Closed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
