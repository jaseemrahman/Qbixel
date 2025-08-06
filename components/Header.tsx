
'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <nav className="px-6 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <Link href="/" className="font-bold text-2xl text-black" style={{ fontFamily: 'Times New Roman, serif' }}>
            Qbixel
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-black hover:text-gray-600 font-medium transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-black hover:text-gray-600 font-medium transition-colors">
              About
            </Link>
            <Link href="/services" className="text-black hover:text-gray-600 font-medium transition-colors">
              Services
            </Link>
            <Link href="/contact" className="text-black hover:text-gray-600 font-medium transition-colors">
              Contact
            </Link>
            <Link href="/contact" className="bg-black text-white px-6 py-2 font-medium transition-all duration-300 hover:bg-white hover:text-black border-2 border-black whitespace-nowrap cursor-pointer">
              Start Project
            </Link>
          </div>

          <button 
            className="md:hidden w-6 h-6 flex items-center justify-center cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-xl`}></i>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <Link href="/" className="block text-black font-medium py-2">Home</Link>
            <Link href="/about" className="block text-black font-medium py-2">About</Link>
            <Link href="/services" className="block text-black font-medium py-2">Services</Link>
            <Link href="/contact" className="block text-black font-medium py-2">Contact</Link>
            <Link href="/contact" className="block bg-black text-white px-6 py-2 font-medium text-center mt-4 whitespace-nowrap">
              Start Project
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
