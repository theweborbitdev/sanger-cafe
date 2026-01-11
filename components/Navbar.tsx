
import React, { useState } from 'react';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-stone-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center space-x-2">
            <span className="text-2xl font-bold text-orange-800 tracking-tight font-serif">
              Sanger Country Cafe
            </span>
          </div>

          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="text-stone-600 hover:text-orange-700 font-medium transition-colors text-sm uppercase tracking-wider"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, '#contact')}
              className="bg-orange-700 text-white px-6 py-2.5 rounded-full hover:bg-orange-800 transition-all flex items-center gap-2 text-sm font-bold shadow-lg shadow-orange-900/10"
            >
              <Calendar size={16} /> Book a Table
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-stone-600 hover:text-orange-700"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-stone-100 py-6 px-4 space-y-4 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="block text-stone-700 hover:text-orange-700 text-lg font-bold"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-stone-100">
            <a
              href={`tel:${BUSINESS_INFO.phone.replace(/\D/g, '')}`}
              className="flex items-center gap-3 text-orange-700 font-black text-xl"
            >
              <Phone size={22} /> {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
