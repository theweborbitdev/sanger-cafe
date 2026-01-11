
import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-300 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-white mb-6">Sanger Country Cafe</h2>
            <p className="text-lg mb-8 max-w-md leading-relaxed">
              Authentic American comfort food served with love and tradition since day one. Experience the best breakfast, lunch, and dinner in Sanger, CA.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-3 bg-stone-800 rounded-full hover:bg-orange-700 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-3 bg-stone-800 rounded-full hover:bg-orange-700 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-3 bg-stone-800 rounded-full hover:bg-orange-700 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="hover:text-orange-500 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-orange-500 transition-colors">About Us</a></li>
              <li><a href="#menu" className="hover:text-orange-500 transition-colors">Menu</a></li>
              <li><a href="#contact" className="hover:text-orange-500 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Visit Us</h4>
            <div className="space-y-4 text-sm leading-relaxed">
              <p>{BUSINESS_INFO.address}</p>
              <p>Phone: {BUSINESS_INFO.phone}</p>
              <p>Email: {BUSINESS_INFO.email}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-800 mt-20 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
          <p>&copy; {new Date().getFullYear()} Sanger Country Cafe. All rights reserved.</p>
          <div className="flex gap-8">
            <p>Designed for Excellence</p>
            <a href={BUSINESS_INFO.website} target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:underline">Official Website</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
