
import { MenuItem, BusinessInfo } from './types';

export const BUSINESS_INFO: BusinessInfo = {
  name: "Sanger Country Cafe",
  address: "1839 Academy Ave, Sanger, CA 93657",
  phone: "+1 (559) 399-3226",
  email: "contact@sangercountrycafe.com",
  website: "https://sangercountrycafe.com/",
  hours: {
    sun_thu: "7:00 AM – 8:00 PM",
    fri_sat: "7:00 AM – 9:00 PM"
  },
  amenities: {
    accessibility: ["Wheelchair accessible entrance", "Wheelchair accessible parking lot"],
    serviceOptions: ["Dine-in"],
    popularFor: ["Solo dining"],
    offerings: ["Comfort food"],
    amenities: ["Restroom", "Clean environment", "Hazelnut creamer available", "Sports & News TVs", "Morgan Wallen Playlist"],
    atmosphere: ["Casual", "Cozy", "Classic hometown diner feel"],
    crowd: ["Groups", "Tourists", "Families"],
    payments: ["Credit cards", "Debit cards"],
    children: ["Good for kids", "Kids menu available"],
    parking: ["Free parking lot", "Free street parking"]
  }
};

export const MENU_ITEMS: MenuItem[] = [
  // A LA CARTE & GRIDDLE
  { id: 'ag1', name: "Belgian Waffle", category: "A LA CARTE & GRIDDLE", price: "$12.99", description: "Light and crispy golden waffle.", image: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&q=80&w=600" },
  { id: 'ag2', name: "Biscuits & Gravy", category: "A LA CARTE & GRIDDLE", price: "$11.69", description: "Fluffy biscuits topped with house-made white gravy.", image: "https://images.unsplash.com/photo-1626203063934-22b078028f80?auto=format&fit=crop&q=80&w=600" },
  { id: 'ag3', name: "French Toast", category: "A LA CARTE & GRIDDLE", price: "$12.99", description: "Thick slices of brioche dipped in cinnamon batter.", image: "https://images.unsplash.com/photo-1484723088339-fe28219ffad9?auto=format&fit=crop&q=80&w=600" },
  { id: 'ag4', name: "Stack of Pancake", category: "A LA CARTE & GRIDDLE", price: "$13.39", description: "A towering stack of fluffy pancakes.", image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&q=80&w=600" },
  { id: 'ag5', name: "Strawberry Waffle", category: "A LA CARTE & GRIDDLE", price: "$13.99", description: "Golden waffle topped with fresh strawberries.", image: "https://images.unsplash.com/photo-1459789034005-ba29c5783491?auto=format&fit=crop&q=80&w=600" },
  { id: 'ag6', name: "The Griddle Pick", category: "A LA CARTE & GRIDDLE", price: "$17.99", description: "Your choice of griddle favorites served with eggs.", image: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&q=80&w=600" },
  { id: 'ag7', name: "Breakfast Buffet", category: "A LA CARTE & GRIDDLE", price: "$24.99", description: "Our famous all-you-can-eat morning feast.", image: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&q=80&w=600" },

  // APPETIZERS
  { id: 'ap1', name: "Asada Fries", category: "APPETIZERS", price: "$18.29", description: "Fries topped with marinated steak, cheese, and guacamole.", image: "https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&q=80&w=600" },
  { id: 'ap2', name: "Asada Nachos", category: "APPETIZERS", price: "$18.39", description: "Crispy nachos loaded with asada and toppings.", image: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?auto=format&fit=crop&q=80&w=600" },
  { id: 'ap3', name: "Breaded Zucchini", category: "APPETIZERS", price: "$13.99", description: "Crispy fried breaded zucchini sticks.", image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80&w=600" },
  { id: 'ap4', name: "Buffalo Wings", category: "APPETIZERS", price: "$14.99", description: "Spicy and crispy chicken wings.", image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&q=80&w=600" },
  { id: 'ap5', name: "Chicken Strips", category: "APPETIZERS", price: "$14.49", description: "Classic breaded chicken strips.", image: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&q=80&w=600" },
  { id: 'ap10', name: "Farmer Onion Rings", category: "APPETIZERS", price: "$13.69", description: "Hand-battered and fried until perfectly golden.", image: "https://images.unsplash.com/photo-1639024471283-03518883512d?auto=format&fit=crop&q=80&w=600" },

  // BEER, WINE, COCKTAILS
  { id: 'bwc1', name: "Jamaica Margarita", category: "BEER, WINE, COCKTAILS", price: "$7.50", description: "Hibiscus-infused margarita with a tropical twist.", image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=600" },
  { id: 'bwc3', name: "Bloody Mary", category: "BEER, WINE, COCKTAILS", price: "$7.50", description: "Our spicy house Bloody Mary blend.", image: "https://images.unsplash.com/photo-1541546339599-ecdb5ca973bc?auto=format&fit=crop&q=80&w=600" },

  // BURGERS & SANDWICHES
  { id: 'bs2', name: "Bacon Cheese Burger 1/2 Lb.", category: "BURGERS & SANDWICHES", price: "$17.89", description: "Thick-cut bacon and melted cheese on a juicy patty.", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=600" },
  { id: 'bs11', name: "Country Club Sandwich", category: "BURGERS & SANDWICHES", price: "$18.19", description: "Classic triple-decker with all the fixings.", image: "https://images.unsplash.com/photo-1524391144364-77292275e7a9?auto=format&fit=crop&q=80&w=600" },
  { id: 'bs13', name: "Deluxe Tri-Tip Sandwich", category: "BURGERS & SANDWICHES", price: "$18.89", description: "Tender tri-tip on a fresh roll.", image: "https://images.unsplash.com/photo-1550507992-0402633096e4?auto=format&fit=crop&q=80&w=600" },

  // DINNER ENTREES
  { id: 'de1', name: "12oz Country Fried Steak", category: "DINNER ENTREES", price: "$20.89", description: "Tender steak fried golden and smothered in gravy.", image: "https://images.unsplash.com/photo-1603048297172-c92544798d5e?auto=format&fit=crop&q=80&w=600" },
  { id: 'de9', name: "New York Steak 8oz", category: "DINNER ENTREES", price: "$22.49", description: "Grilled NY steak served with seasonal sides.", image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&q=80&w=600" },

  // FIESTA/TRAD. BREAKFAST
  { id: 'fb1', name: "12oz. Rib Eye Steak & Eggs", category: "FIESTA/TRAD. BREAKFAST", price: "$26.99", description: "Hearty rib eye steak with eggs your style.", image: "https://images.unsplash.com/photo-1626203063934-22b078028f80?auto=format&fit=crop&q=80&w=600" },
  { id: 'fb6', name: "Chile Verde & Eggs", category: "FIESTA/TRAD. BREAKFAST", price: "$18.29", description: "Authentic pork chile verde with eggs.", image: "https://images.unsplash.com/photo-1510693206972-df098062cb71?auto=format&fit=crop&q=80&w=600" },

  // KIDS MENU
  { id: 'km17', name: "Kids Buffet", category: "KIDS MENU", price: "$13.99", description: "Special buffet pricing for the little ones.", image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=600" },
  
  // OMELLETES & BENEDICTS
  { id: 'ob1', name: "California Omelette", category: "OMELLETES & BENEDICTS", price: "$18.49", description: "Avocado, bacon, and cheese omelette.", image: "https://images.unsplash.com/photo-1510693206972-df098062cb71?auto=format&fit=crop&q=80&w=600" },

  // SPECIALS
  { id: 'bs_cfs', name: "CFS & Eggs Special", category: "BREAKFAST SPECIALS", price: "$11.49", description: "A local morning favorite.", image: "https://images.unsplash.com/photo-1510693206972-df098062cb71?auto=format&fit=crop&q=80&w=600" }
];
