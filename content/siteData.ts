
import { SiteData } from '../types';

export const siteData: SiteData = {
  brand: {
    name: "THREAD",
    taglineAr: "ستايلك، قصتك",
    taglineEn: "Your Style, Your Story"
  },
  products: [
    // --- رجالي (Men) ---
    {
      id: 1,
      name: "Oversized Hoodie - Midnight Black",
      price: 399,
      oldPrice: 499,
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80",
      category: 'men',
      colors: ["أسود", "رمادي"],
      sizes: ["S", "M", "L", "XL"],
      rating: 4.8,
      reviews: 312,
      description: "هودي قطن مصري 100% معالج ضد الانكماش.",
      badge: "الأكثر مبيعاً"
    },
    {
      id: 2,
      name: "Urban Cargo Pants - Khaki",
      price: 379,
      image: "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?auto=format&fit=crop&w=800&q=80",
      category: 'men',
      colors: ["خاكي", "أسود"],
      sizes: ["30", "32", "34"],
      rating: 4.7,
      reviews: 156,
      description: "بنطلون كارغو عصري بجيوب جانبية واسعة."
    },
    {
      id: 3,
      name: "Streetwear Graphic Tee",
      price: 199,
      image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80",
      category: 'men',
      colors: ["أبيض", "أسود"],
      sizes: ["M", "L", "XL"],
      rating: 4.9,
      reviews: 210,
      description: "تيشيرت قطن مطبوع بتصميم جرافيك فريد."
    },
    {
      id: 4,
      name: "Denim Jacket - Vintage Blue",
      price: 549,
      image: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?auto=format&fit=crop&w=800&q=80",
      category: 'men',
      colors: ["أزرق"],
      sizes: ["L", "XL"],
      rating: 4.6,
      reviews: 88,
      description: "جاكيت جينز كلاسيكي بلمسة عصرية."
    },

    // --- نسائي (Women) ---
    {
      id: 5,
      name: "Premium Oversized Sweater",
      price: 349,
      image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80",
      category: 'women',
      colors: ["بيج", "كاشمير"],
      sizes: ["S", "M", "L"],
      rating: 4.8,
      reviews: 215,
      description: "سويتر ناعم جداً بخامات فاخرة.",
      badge: "Trending"
    },
    {
      id: 6,
      name: "High-Waist Mom Jeans",
      price: 429,
      image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80",
      category: 'women',
      colors: ["أزرق فاتح"],
      sizes: ["28", "30", "32"],
      rating: 4.7,
      reviews: 189,
      description: "جينز مريح وعصري بخصر مرتفع."
    },
    {
      id: 7,
      name: "Cropped Street Hoodie",
      price: 329,
      image: "https://images.unsplash.com/photo-1509942704409-328688869850?auto=format&fit=crop&w=800&q=80",
      category: 'women',
      colors: ["وردي", "أسود"],
      sizes: ["XS", "S", "M"],
      rating: 4.6,
      reviews: 142,
      description: "تصميم عصري لمحبي الستريت وير."
    },
    {
      id: 8,
      name: "Summer Maxi Dress",
      price: 499,
      image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80",
      category: 'women',
      colors: ["أزرق مطفي"],
      sizes: ["S", "M", "L"],
      rating: 4.9,
      reviews: 120,
      description: "فستان صيفي خفيف وأنيق.",
      badge: "New Arrival"
    },

    // --- أطفالي (Kids) ---
    {
      id: 9,
      name: "Kids Streetwear Set",
      price: 299,
      image: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=800&q=80",
      category: 'kids' as any,
      colors: ["أصفر", "رمادي"],
      sizes: ["4-6", "8-10"],
      rating: 4.9,
      reviews: 54,
      description: "طقم أطفال كامل بستايل الستريت وير.",
      badge: "طقم كامل"
    },
    {
      id: 10,
      name: "Mini Hero Hoodie",
      price: 249,
      image: "https://images.unsplash.com/photo-1519457431-7571b029fe3c?auto=format&fit=crop&w=800&q=80",
      category: 'kids' as any,
      colors: ["أحمر", "كحلي"],
      sizes: ["6", "8", "12"],
      rating: 4.7,
      reviews: 42,
      description: "هودي أطفالي ثقيل للشتاء."
    },
    {
      id: 11,
      name: "Cool Kids Denim",
      price: 319,
      image: "https://images.unsplash.com/photo-1519278406113-5a02479f6ca4?auto=format&fit=crop&w=800&q=80",
      category: 'kids' as any,
      colors: ["أزرق جينز"],
      sizes: ["4", "6", "8"],
      rating: 4.8,
      reviews: 35,
      description: "جينز أطفال مريح وعملي جداً."
    },
    {
      id: 12,
      name: "Sporty Kids Tracksuit",
      price: 389,
      image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=800&q=80",
      category: 'kids' as any,
      colors: ["أخضر", "أسود"],
      sizes: ["6", "10", "14"],
      rating: 4.9,
      reviews: 29,
      description: "بدلة رياضية مريحة للتمارين والحركة."
    }
  ],
  faqs: [
    {
      question: "كيف أطلب من متجركم؟",
      answer: "ببساطة، اختر الموديل والمقاس، أضفه للسلة، وأدخل بيانات التوصيل. فريقنا سيتواصل معك فوراً لتأكيد الطلب."
    },
    {
      question: "ما هي مدة التوصيل؟",
      answer: "داخل القاهرة والجيزة من يومين لـ 3 أيام. المحافظات من 4 لـ 5 أيام عمل. متاح شحن سريع في نفس اليوم للقاهرة."
    },
    {
      question: "هل يمكنني معاينة المنتج؟",
      answer: "نعم، يمكنك معاينة المنتج عند الاستلام. وإذا لم يكن كما توقعت، يمكنك رفض الاستلام ودفع رسوم الشحن فقط."
    },
    {
      question: "ماذا لو كان المقاس غير مناسب؟",
      answer: "نوفر خدمة الاستبدال المجاني خلال 14 يوماً من تاريخ الاستلام، بشرط بقاء المنتج في حالته الأصلية."
    },
    {
      question: "هل توفرون خدمة التقسيط؟",
      answer: "نعم، ندعم التقسيط عبر (فالو، تمارا، سهل) وشركات التقسيط الرائدة في مصر."
    },
    {
      question: "أين تقع فروعكم؟",
      answer: "نتواجد في التجمع الخامس، الزمالك، وسيتي سنتر الإسكندرية. تفضل بزيارتنا لتجربة الكوليكشن بالكامل."
    }
  ]
};

export const stores = [
  { name: "فرع القاهرة - التجمع", location: "مول كايرو فيستيفال - الدور الثاني", hours: "10 ص - 11 م" },
  { name: "فرع القاهرة - الزمالك", location: "شارع 26 يوليو - بجوار ساقية الصاوي", hours: "11 ص - 10 م" },
  { name: "فرع الإسكندرية", location: "سيتي سنتر - بوابة 4", hours: "10 ص - 11 م" }
];
