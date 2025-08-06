'use client';

export default function ContactHero() {
  return (
    <section className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="w-20 h-1 bg-white mx-auto mb-8"></div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight font-poppins">
          Let's Build Something<br />
          Amazing Together
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed">
          Ready to transform your business with cutting-edge technology? Get in touch with our team of experts.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 flex items-center justify-center bg-white text-black mx-auto mb-4">
              <i className="ri-time-line text-2xl"></i>
            </div>
            <h3 className="text-white font-semibold mb-2">Quick Response</h3>
            <p className="text-gray-300">24-hour response time</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 flex items-center justify-center bg-white text-black mx-auto mb-4">
              <i className="ri-user-line text-2xl"></i>
            </div>
            <h3 className="text-white font-semibold mb-2">Expert Consultation</h3>
            <p className="text-gray-300">Free initial consultation</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 flex items-center justify-center bg-white text-black mx-auto mb-4">
              <i className="ri-shield-check-line text-2xl"></i>
            </div>
            <h3 className="text-white font-semibold mb-2">Confidential</h3>
            <p className="text-gray-300">Your ideas are safe with us</p>
          </div>
        </div>
      </div>
    </section>
  );
}