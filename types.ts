
export interface MenuItem {
  id: string;
  name: string;
  category: string;
  description: string;
  price: string;
  image: string;
}

export interface BusinessInfo {
  name: string;
  address: string;
  phone: string;
  email: string;
  website: string;
  hours: {
    sun_thu: string;
    fri_sat: string;
  };
  amenities: {
    accessibility: string[];
    serviceOptions: string[];
    popularFor: string[];
    offerings: string[];
    amenities: string[];
    atmosphere: string[];
    crowd: string[];
    payments: string[];
    children: string[];
    parking: string[];
  };
}
