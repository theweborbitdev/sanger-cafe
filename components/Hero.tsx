
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center pt-20">
      {/* Background with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')` }}
      >
        <div className="absolute inset-0 bg-stone-900/40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl text-white">
          <span className="inline-block bg-orange-700/90 text-sm font-bold tracking-widest uppercase px-3 py-1 rounded mb-6">
            Sanger's Favorite Spot
          </span>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Authentic Country Comfort in the Heart of Sanger
          </h1>
          <p className="text-xl md:text-2xl text-stone-100 mb-10 leading-relaxed font-light">
            Hearty breakfast, satisfying lunch, and cozy dinner. Traditional, homemade-style dishes that make you feel right at home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#menu" 
              className="bg-orange-700 hover:bg-orange-800 text-white px-8 py-4 rounded-lg text-lg font-semibold flex items-center justify-center gap-2 transition-all shadow-xl shadow-orange-900/20"
            >
              Explore Menu <ChevronRight size={20} />
            </a>
            <a 
              href="#contact" 
              className="bg-white hover:bg-stone-100 text-stone-900 px-8 py-4 rounded-lg text-lg font-semibold flex items-center justify-center transition-all border border-transparent shadow-xl"
            >
              Visit Us Today
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
