'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (formData.message.length > 500) {
      setSubmitStatus('Message must be 500 characters or less');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('https://formspree.io/f/mkgzyjqz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitStatus('Thank you! Your message has been sent successfully.');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setSubmitStatus('Sorry, there was an error sending your message. Please try again.');
      }
    } catch (error) {
      setSubmitStatus('Sorry, there was an error sending your message. Please try again.');
    }

    setIsSubmitting(false);
  };

  return (
    <section className="bg-white py-20">
      <div className="max-w-2xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 font-poppins">
            Send Us a Message
          </h2>
          <p className="text-lg text-gray-600">
            Tell us about your project and we'll get back to you within 24 hours.
          </p>
        </div>

        <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-black mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border-2 border-gray-300 focus:border-black focus:outline-none transition-all duration-300 text-sm"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-black mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border-2 border-gray-300 focus:border-black focus:outline-none transition-all duration-300 text-sm"
              placeholder="Enter your email address"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-black mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-gray-300 focus:border-black focus:outline-none transition-all duration-300 text-sm"
              placeholder="Enter your phone number"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-black mb-2">
              Project Details *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              maxLength={500}
              rows={6}
              className="w-full px-4 py-3 border-2 border-gray-300 focus:border-black focus:outline-none transition-all duration-300 resize-none text-sm"
              placeholder="Tell us about your project requirements, timeline, and budget..."
            ></textarea>
            <div className="text-right text-xs text-gray-500 mt-1">
              {formData.message.length}/500 characters
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-black text-white py-4 font-semibold text-lg transition-all duration-300 hover:bg-white hover:text-black border-2 border-black disabled:opacity-50 whitespace-nowrap cursor-pointer"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>

          {submitStatus && (
            <div
              className={`mt-4 p-4 text-center ${
                submitStatus.includes('Thank you')
                  ? 'bg-green-50 text-green-800'
                  : 'bg-red-50 text-red-800'
              }`}
            >
              {submitStatus}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
