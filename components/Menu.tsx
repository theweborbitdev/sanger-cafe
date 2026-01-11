
import React, { useState, useMemo } from 'react';
import { MENU_ITEMS } from '../constants';
import { ChefHat, UtensilsCrossed, ChevronDown, Sparkles, Filter, ChevronRight } from 'lucide-react';

const MENU_GROUPS = [
  {
    label: "Breakfast Traditions",
    categories: ["FIESTA/TRAD. BREAKFAST", "A LA CARTE & GRIDDLE", "OMELLETES & BENEDICTS", "SENIOR BREAKFAST", "BREAKFAST SPECIALS"]
  },
  {
    label: "Lunch & Dinner",
    categories: ["BURGERS & SANDWICHES", "DINNER ENTREES", "SR. LUNCH & DINNER", "LUNCH SPECIALS", "DINNER SPECIALS"]
  },
  {
    label: "Starters & Sides",
    categories: ["APPETIZERS", "SOUPS & SALADS", "SIDE ORDERS"]
  },
  {
    label: "Refreshments",
    categories: ["BEER, WINE, COCKTAILS", "BEVERAGES & DESSERT"]
  },
  {
    label: "Family",
    categories: ["KIDS MENU"]
  }
];

const Menu: React.FC = () => {
  const [activeGroup, setActiveGroup] = useState<string>(MENU_GROUPS[0].label);
  const [activeCategory, setActiveCategory] = useState<string>(MENU_GROUPS[0].categories[0]);
  const [isGroupOpen, setIsGroupOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter(item => item.category === activeCategory);
  }, [activeCategory]);

  const handleGroupSelect = (groupLabel: string) => {
    const group = MENU_GROUPS.find(g => g.label === groupLabel);
    if (group) {
      setActiveGroup(groupLabel);
      setActiveCategory(group.categories[0]);
      setIsGroupOpen(false);
    }
  };

  const handleScrollToBooking = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="py-24 bg-white overflow-visible relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-700 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-4">
            <Sparkles size={12} /> Menu Excellence
          </div>
          <h2 className="text-5xl font-bold text-stone-900 mb-4 font-serif">Sanger Country Menu</h2>
          <p className="text-stone-500 max-w-xl mx-auto font-light leading-relaxed">
            Experience the finest local ingredients prepared with traditional country recipes.
          </p>
        </div>

        {/* Nested Dropdown System */}
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-20 z-40 relative">
          {/* Main Group Selector */}
          <div className="relative w-full max-w-xs">
            <p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-2 ml-4">Select Group</p>
            <button
              onClick={() => { setIsGroupOpen(!isGroupOpen); setIsCategoryOpen(false); }}
              className="w-full flex items-center justify-between px-6 py-4 bg-stone-50 border border-stone-200 rounded-2xl font-bold text-stone-800 hover:border-orange-200 transition-all active:scale-[0.98]"
            >
              <span className="truncate">{activeGroup}</span>
              <Filter size={16} className="text-orange-700/50" />
            </button>
            {isGroupOpen && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-stone-100 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                {MENU_GROUPS.map((group) => (
                  <button
                    key={group.label}
                    onClick={() => handleGroupSelect(group.label)}
                    className={`w-full text-left px-6 py-4 text-sm font-bold transition-all ${
                      activeGroup === group.label ? 'bg-orange-700 text-white' : 'text-stone-600 hover:bg-stone-50'
                    }`}
                  >
                    {group.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="hidden md:block text-stone-300">
            <ChevronRight size={20} />
          </div>

          {/* Sub-Category Selector */}
          <div className="relative w-full max-w-xs">
            <p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-2 ml-4">Select Category</p>
            <button
              onClick={() => { setIsCategoryOpen(!isCategoryOpen); setIsGroupOpen(false); }}
              className="w-full flex items-center justify-between px-6 py-4 bg-stone-50 border border-stone-200 rounded-2xl font-bold text-orange-800 hover:border-orange-200 transition-all active:scale-[0.98]"
            >
              <span className="truncate">{activeCategory}</span>
              <ChevronDown size={18} className={`transition-transform duration-300 ${isCategoryOpen ? 'rotate-180' : ''}`} />
            </button>
            {isCategoryOpen && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-stone-100 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                {MENU_GROUPS.find(g => g.label === activeGroup)?.categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => { setActiveCategory(cat); setIsCategoryOpen(false); }}
                    className={`w-full text-left px-6 py-4 text-sm font-bold transition-all ${
                      activeCategory === cat ? 'bg-stone-900 text-white' : 'text-stone-600 hover:bg-stone-50'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.length > 0 ? filteredItems.map((item) => (
            <div key={item.id} className="bg-stone-50 rounded-[2rem] overflow-hidden border border-stone-100 flex flex-col group hover:shadow-xl transition-all duration-500">
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 backdrop-blur-md text-stone-900 px-4 py-1.5 rounded-full text-sm font-black shadow-sm">
                    {item.price}
                  </span>
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-stone-900 mb-2 font-serif group-hover:text-orange-700 transition-colors">{item.name}</h3>
                <p className="text-stone-500 text-xs leading-relaxed mb-6 flex-grow font-light italic">
                  "{item.description}"
                </p>
                <button 
                  onClick={handleScrollToBooking}
                  className="w-full py-4 bg-white text-stone-800 rounded-xl font-bold text-xs hover:bg-orange-700 hover:text-white transition-all border border-stone-200 hover:border-transparent flex items-center justify-center gap-2 active:scale-95"
                >
                  <UtensilsCrossed size={14} /> Book a Table
                </button>
              </div>
            </div>
          )) : (
            <div className="col-span-full py-20 text-center bg-stone-50 rounded-[2rem] border-2 border-dashed border-stone-100">
              <ChefHat size={40} className="mx-auto text-stone-200 mb-3" />
              <p className="text-stone-400 font-light">Explore other categories for our full selection.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
