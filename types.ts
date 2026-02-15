
export interface Product {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
  category: 'men' | 'women';
  colors: string[];
  sizes: string[];
  rating: number;
  reviews: number;
  description: string;
  badge?: string;
  tags?: string[];
}

export interface CartItem extends Product {
  selectedSize: string;
  selectedColor: string;
  quantity: number;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface SiteData {
  brand: {
    name: string;
    taglineAr: string;
    taglineEn: string;
  };
  products: Product[];
  faqs: FAQ[];
}
