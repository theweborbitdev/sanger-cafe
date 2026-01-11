
import React from 'react';
import { Phone, Mail, MapPin, Clock, ExternalLink } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl font-bold text-stone-900 mb-8">Visit Us Today</h2>
            <p className="text-lg text-stone-600 mb-10 leading-relaxed">
              We're conveniently located in the heart of Sanger, CA. Whether you're coming in for a quick bite or a family gathering, we look forward to serving you!
            </p>

            <div className="space-y-8">
              <div className="flex gap-5 items-start">
                <div className="p-3 bg-orange-100 rounded-lg text-orange-700">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 text-lg mb-1 text-serif">Address</h4>
                  <p className="text-stone-600">{BUSINESS_INFO.address}</p>
                  <a 
                    href="https://www.mapquest.com/us/california/sanger-country-cafe-796643169" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-orange-700 hover:text-orange-800 text-sm font-bold flex items-center gap-1 mt-2"
                  >
                    Get Directions <ExternalLink size={14} />
                  </a>
                </div>
              </div>

              <div className="flex gap-5 items-start">
                <div className="p-3 bg-orange-100 rounded-lg text-orange-700">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 text-lg mb-1 text-serif">Phone</h4>
                  <p className="text-stone-600">{BUSINESS_INFO.phone}</p>
                </div>
              </div>

              <div className="flex gap-5 items-start">
                <div className="p-3 bg-orange-100 rounded-lg text-orange-700">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 text-lg mb-1 text-serif">Email</h4>
                  <p className="text-stone-600">{BUSINESS_INFO.email}</p>
                </div>
              </div>

              <div className="flex gap-5 items-start">
                <div className="p-3 bg-orange-100 rounded-lg text-orange-700">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 text-lg mb-1 text-serif">Opening Hours</h4>
                  <ul className="text-stone-600 space-y-1">
                    <li className="flex justify-between w-64">
                      <span>Sunday – Thursday</span>
                      <span className="font-semibold">{BUSINESS_INFO.hours.sun_thu}</span>
                    </li>
                    <li className="flex justify-between w-64">
                      <span>Friday – Saturday</span>
                      <span className="font-semibold">{BUSINESS_INFO.hours.fri_sat}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form / Reservation */}
          <div className="bg-white p-10 rounded-3xl shadow-xl border border-stone-100">
            <h3 className="text-2xl font-bold text-stone-900 mb-6">Table Reservation</h3>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-stone-700 mb-1.5">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-stone-700 mb-1.5">Phone Number</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all" placeholder="(555) 000-0000" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-stone-700 mb-1.5">Date</label>
                  <input type="date" className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-stone-700 mb-1.5">Guests</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all">
                    <option>1 Person</option>
                    <option>2 People</option>
                    <option>3 People</option>
                    <option>4+ People</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-stone-700 mb-1.5">Special Requests</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all" placeholder="Any dietary preferences or table requests?"></textarea>
              </div>
              <button className="w-full bg-orange-700 hover:bg-orange-800 text-white py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-orange-900/20">
                Book Reservation
              </button>
              <p className="text-xs text-center text-stone-400 mt-4">
                Alternatively, call us at <a href={`tel:${BUSINESS_INFO.phone}`} className="underline font-bold text-stone-600">{BUSINESS_INFO.phone}</a> for immediate assistance.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
