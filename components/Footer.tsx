
'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <Link href="/" className="font-[\'Pacifico\'] text-2xl text-white">
              Qbixel
            </Link>
            <p className="mt-4 text-gray-300 leading-relaxed">
              Next-gen software solutions crafted with precision. Empowering businesses with innovative digital transformation.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <div className="space-y-3">
              <Link href="/services" className="block text-gray-300 hover:text-white transition-smooth">Mobile Apps</Link>
              <Link href="/services" className="block text-gray-300 hover:text-white transition-smooth">AI/ML Solutions</Link>
              <Link href="/services" className="block text-gray-300 hover:text-white transition-smooth">SaaS Platforms</Link>
              <Link href="/services" className="block text-gray-300 hover:text-white transition-smooth">ERP Systems</Link>
              <Link href="/services" className="block text-gray-300 hover:text-white transition-smooth">Website Development</Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <div className="space-y-3">
              <Link href="/about" className="block text-gray-300 hover:text-white transition-smooth">About Us</Link>
              <Link href="/contact" className="block text-gray-300 hover:text-white transition-smooth">Contact</Link>
              <a href="#" className="block text-gray-300 hover:text-white transition-smooth">Privacy Policy</a>
              <a href="#" className="block text-gray-300 hover:text-white transition-smooth">Terms of Service</a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="w-5 h-5 flex items-center justify-center mr-3">
                  <i className="ri-mail-line text-gray-300"></i>
                </div>
                <span className="text-gray-300">qbixel@gmail.com</span>
              </div>
              <div className="flex items-center">
                <div className="w-5 h-5 flex items-center justify-center mr-3">
                  <i className="ri-phone-line text-gray-300"></i>
                </div>
                <span className="text-gray-300">+91 8592883364</span>
              </div>
              <div className="flex items-center">
                <div className="w-5 h-5 flex items-center justify-center mr-3">
                  <i className="ri-map-pin-line text-gray-300"></i>
                </div>
                <span className="text-gray-300">Mankavu, Near lulu mall, calicut 673007</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Qbixel. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white transition-smooth cursor-pointer">
              <i className="ri-linkedin-fill"></i>
            </a>
            <a href="#" className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white transition-smooth cursor-pointer">
              <i className="ri-twitter-fill"></i>
            </a>
            <a href="#" className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white transition-smooth cursor-pointer">
              <i className="ri-github-fill"></i>
            </a>
            <a href="#" className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white transition-smooth cursor-pointer">
              <i className="ri-dribbble-fill"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
