
import React from 'react';
import { Heart, Users, Utensils, Award, Accessibility, Car, CreditCard, Baby, Coffee, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const About: React.FC = () => {
  const mainFeatures = [
    {
      icon: <Utensils className="text-orange-700" size={32} />,
      title: "Authentic Comfort Food",
      description: "Meals inspired by classic country cuisine with a fresh, homemade feel and generous portions."
    },
    {
      icon: <Users className="text-orange-700" size={32} />,
      title: "Friendly Service",
      description: "A warm and welcoming environment where guests are treated like family from the moment they walk in."
    },
    {
      icon: <Heart className="text-orange-700" size={32} />,
      title: "Great for All Occasions",
      description: "Ideal for family meals, casual dining, or catching up with friends over breakfast or dinner."
    },
    {
      icon: <Award className="text-orange-700" size={32} />,
      title: "Local Favorite",
      description: "Situated in a central spot in Sanger, making us the go-to neighborhood cafe for locals and visitors alike."
    }
  ];

  const amenityIcons: Record<string, React.ReactNode> = {
    accessibility: <Accessibility className="text-orange-600" size={20} />,
    parking: <Car className="text-orange-600" size={20} />,
    payments: <CreditCard className="text-orange-600" size={20} />,
    children: <Baby className="text-orange-600" size={20} />,
    atmosphere: <Coffee className="text-orange-600" size={20} />,
    crowd: <Users className="text-orange-600" size={20} />,
    location: <MapPin className="text-orange-600" size={20} />
  };

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h2 className="text-4xl font-bold text-stone-900 mb-6 leading-tight">
              A Warm, Family-Owned Traditions in Sanger, CA
            </h2>
            <div className="space-y-4 text-lg text-stone-600 leading-relaxed">
              <p>
                Sanger Country Cafe is a warm, family-owned restaurant that serves classic American comfort food with a country twist. Located in the heart of Sanger, CA, this café has quickly become a favorite among locals for its welcoming atmosphere and generous portions.
              </p>
              <p>
                Whether you’re stopping by for a hearty breakfast, a satisfying lunch, or a cozy dinner, the café delivers traditional, homemade-style dishes that make guests feel right at home.
              </p>
            </div>
            <div className="mt-8">
              <div className="p-6 bg-orange-50 rounded-xl border-l-4 border-orange-700 italic text-orange-900">
                "Our mission is simple: to provide fresh, delicious, and heartwarming meals that bring the community together."
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Cozy Cafe Interior" 
              className="rounded-2xl shadow-2xl relative z-10"
            />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-orange-100 rounded-full -z-0"></div>
          </div>
        </div>

        {/* Main Highlights Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-24">
          {mainFeatures.map((feature, idx) => (
            <div key={idx} className="p-8 bg-stone-50 rounded-2xl hover:bg-stone-100 transition-colors group">
              <div className="mb-6 transform transition-transform group-hover:scale-110 duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">{feature.title}</h3>
              <p className="text-stone-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* New Amenities & Services Section */}
        <div className="bg-stone-50 rounded-3xl p-8 md:p-12 border border-stone-100">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-stone-900 mb-4">Amenities & Services</h3>
            <p className="text-stone-600">Everything you need for a comfortable dining experience.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3 font-bold text-stone-800">
                {amenityIcons.accessibility} <span>Accessibility</span>
              </div>
              <ul className="pl-8 space-y-2 text-stone-600 text-sm">
                {BUSINESS_INFO.amenities.accessibility.map((a, i) => <li key={i} className="list-disc">{a}</li>)}
              </ul>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 font-bold text-stone-800">
                {amenityIcons.parking} <span>Parking</span>
              </div>
              <ul className="pl-8 space-y-2 text-stone-600 text-sm">
                {BUSINESS_INFO.amenities.parking.map((a, i) => <li key={i} className="list-disc">{a}</li>)}
              </ul>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 font-bold text-stone-800">
                {amenityIcons.payments} <span>Payments Accepted</span>
              </div>
              <ul className="pl-8 space-y-2 text-stone-600 text-sm">
                {BUSINESS_INFO.amenities.payments.map((a, i) => <li key={i} className="list-disc">{a}</li>)}
              </ul>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 font-bold text-stone-800">
                {amenityIcons.children} <span>Family Friendly</span>
              </div>
              <ul className="pl-8 space-y-2 text-stone-600 text-sm">
                {BUSINESS_INFO.amenities.children.map((a, i) => <li key={i} className="list-disc">{a}</li>)}
              </ul>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 font-bold text-stone-800">
                {amenityIcons.atmosphere} <span>Atmosphere</span>
              </div>
              <ul className="pl-8 space-y-2 text-stone-600 text-sm">
                {BUSINESS_INFO.amenities.atmosphere.map((a, i) => <li key={i} className="list-disc">{a}</li>)}
              </ul>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 font-bold text-stone-800">
                {amenityIcons.crowd} <span>Perfect For</span>
              </div>
              <ul className="pl-8 space-y-2 text-stone-600 text-sm">
                {BUSINESS_INFO.amenities.crowd.map((a, i) => <li key={i} className="list-disc">{a}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
