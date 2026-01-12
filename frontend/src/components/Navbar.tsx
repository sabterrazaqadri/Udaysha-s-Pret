'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { navigationLinks } from '../../constants/nav-links';
import { BrandInfo } from '../../types/nav-types';

const brandInfo: BrandInfo = {
  name: "Udaysha's Pret",
  tagline: "Contemporary fashion essentials"
};

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-white py-4'}`}>
      <div className="container mx-auto px-4">
        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-black">Udaysha's Pret</Link>
          <nav>
            <ul className="flex space-x-8">
              {navigationLinks.map((link) => (
                <li key={link.id}>
                  <Link 
                    href={link.href} 
                    className="text-black hover:text-gray-600 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden justify-between items-center">
          <Link href="/" className="text-xl font-bold text-black">Udaysha's Pret</Link>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-black focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 bg-white z-40 pt-16 overflow-y-auto">
            <div className="container mx-auto px-4 py-6">
              <nav>
                <ul className="space-y-6">
                  {navigationLinks.map((link) => (
                    <li key={link.id}>
                      <Link 
                        href={link.href} 
                        className="block text-xl text-black py-3 border-b border-gray-200"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;