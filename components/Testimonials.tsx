
import React, { useState, useEffect, useCallback } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, User } from 'lucide-react';

const reviews = [
  {
    name: 'Ren Shannon',
    role: 'Local Guide',
    content:
      'This place is classic! Feels like a hometown diner should. The NY steak was cooked to a perfect medium rare as ordered and was exceptional in tenderness and flavor.',
    rating: 5,
    date: 'A week ago',
  },
  {
    name: 'Ansel Hendrickson',
    role: 'Local Guide',
    content:
      'The food is great, delicious. The service is excellent and the staff super nice and very accommodating. The ambiance is perfect and comfortable.',
    rating: 5,
    date: 'A week ago',
  },
  {
    name: 'Jerry McBride',
    role: 'Verified Local',
    content:
      'Great service, clean environment including restrooms. Huge portions of fresh food. I had the seafood platter... cod, salmon, scampi, and shrimp.',
    rating: 5,
    date: '3 weeks ago',
  },
  {
    name: 'Pablo Ramirez',
    role: 'Verified Guest',
    content:
      'Excellent customer service. They have hazelnut creamer!! Buffet is a great value and serve yourself as soon as you enter.',
    rating: 5,
    date: '3 weeks ago',
  },
];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleSlideChange = useCallback(
    (direction: 'next' | 'prev') => {
      if (isAnimating) return;

      setIsAnimating(true);
      setActiveIndex((prev) =>
        direction === 'next'
          ? (prev + 1) % reviews.length
          : (prev - 1 + reviews.length) % reviews.length
      );

      setTimeout(() => setIsAnimating(false), 600);
    },
    [isAnimating]
  );

  useEffect(() => {
    const interval = setInterval(() => handleSlideChange('next'), 8000);
    return () => clearInterval(interval);
  }, [handleSlideChange]);

  return (
    <section className="relative overflow-hidden bg-stone-50 py-24 md:py-32 border-y border-stone-100">
      {/* Subtle Background Accent */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 bg-orange-100/30 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-96 h-96 bg-stone-200/50 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
             <div className="w-8 h-[1px] bg-orange-700/30"></div>
             <span className="text-[11px] font-black uppercase tracking-[0.4em] text-orange-700">
               Guest Stories
             </span>
             <div className="w-8 h-[1px] bg-orange-700/30"></div>
          </div>

          <h2 className="mb-4 text-4xl md:text-5xl font-bold font-serif text-stone-900 tracking-tight">
            Loved by the Community
          </h2>
          
          <div className="flex justify-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={14}
                className="text-orange-400 fill-orange-400"
              />
            ))}
          </div>
        </div>

        {/* Slider Container */}
        <div className="relative max-w-4xl mx-auto">
          <div className="min-h-[300px] flex items-center overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-4 md:px-12"
                >
                  <div className="relative flex flex-col items-center text-center">
                    <Quote
                      size={48}
                      className="text-orange-100/80 mb-8"
                      strokeWidth={1.5}
                    />

                    <p className="mb-12 text-xl md:text-3xl font-serif italic font-medium leading-relaxed text-stone-800">
                      “{review.content}”
                    </p>

                    <div className="flex flex-col items-center">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white border border-stone-100 text-orange-700 shadow-sm">
                        <User size={20} />
                      </div>

                      <h4 className="text-lg font-black text-stone-900 tracking-tight">
                        {review.name}
                      </h4>

                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-orange-700/70">
                          {review.role}
                        </span>
                        <span className="w-1 h-1 bg-stone-300 rounded-full"></span>
                        <span className="text-[10px] text-stone-400 font-medium">
                          {review.date}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls - Minimalist Placement */}
          <div className="absolute inset-y-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none px-0 md:-mx-20">
            <button
              onClick={() => handleSlideChange('prev')}
              className="pointer-events-auto flex items-center justify-center h-14 w-14 rounded-full bg-white border border-stone-100 shadow-xl shadow-stone-200/40 text-stone-400 transition-all hover:text-orange-700 hover:shadow-orange-700/10 active:scale-90"
              aria-label="Previous Review"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={() => handleSlideChange('next')}
              className="pointer-events-auto flex items-center justify-center h-14 w-14 rounded-full bg-white border border-stone-100 shadow-xl shadow-stone-200/40 text-stone-400 transition-all hover:text-orange-700 hover:shadow-orange-700/10 active:scale-90"
              aria-label="Next Review"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Pagination Indicators - Minimalist Dots */}
          <div className="mt-16 flex justify-center items-center gap-4">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                aria-label={`Go to review ${i + 1}`}
                className={`transition-all duration-500 rounded-full ${
                  activeIndex === i
                    ? 'h-2 w-10 bg-orange-700'
                    : 'h-2 w-2 bg-stone-200 hover:bg-stone-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
