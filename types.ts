
export interface Product {
  id: number;
  name: string;
  nameEn: string;
  price: number;
  oldPrice?: number;
  image: string;
  category: 'men' | 'women' | 'kids';
  colors: string[];
  sizes: string[];
  rating: number;
  reviews: number;
  description: string;
  descriptionEn: string;
  badge?: string;
  badgeEn?: string;
  tags?: string[];
}

export interface CartItem extends Product {
  selectedSize: string;
  selectedColor: string;
  quantity: number;
}

export interface FAQ {
  question: string;
  questionEn: string;
  answer: string;
  answerEn: string;
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
