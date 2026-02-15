
import { SiteData } from '../types';

export const siteData: SiteData = {
  brand: {
    name: "THREAD",
    taglineAr: "ستايلك، قصتك",
    taglineEn: "Your Style, Your Story"
  },
  products: [
    // --- القسم الرجالي (MEN'S STREETWEAR) ---
    {
      id: 101,
      name: "Oversized Summer Tee - Midnight Black",
      price: 349,
      oldPrice: 449,
      image: "https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: 'men',
      colors: ["أسود", "رمادي", "أبيض"],
      sizes: ["S", "M", "L", "XL", "XXL"],
      rating: 4.8,
      reviews: 312,
      description: "تيشيرت صيفي خفيف قطن 100% بستايل أوفرسايز عصري، مثالي للأجواء الحارة ومعالج ضد الانكماش.",
      badge: "الأكثر مبيعاً"
    },
    {
      id: 102,
      name: "Premium Urban Linen Shirt - White",
      price: 449,
      oldPrice: 549,
      image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: 'men',
      colors: ["أبيض", "بيج", "أزرق فاتح"],
      sizes: ["S", "M", "L", "XL"],
      rating: 4.9,
      reviews: 215,
      description: "قميص كتان فاخر بتصميم عصري وأنيق، قماش خفيف يسمح بالتنفس، مثالي للصيف والمناسبات الرسمية البسيطة.",
      badge: "جديد وجذاب"
    },
    {
      id: 103,
      name: "Urban Signature Oversized Hoodie",
      price: 399,
      oldPrice: 499,
      // صورة شاب 25 سنة يرتدي هودي أوفر سايز مميز (تغيير صورة الفتاة بنظارات)
      image: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: 'men',
      colors: ["كحلي", "أسود", "زيتوني"],
      sizes: ["S", "M", "L", "XL", "XXL"],
      rating: 4.9,
      reviews: 420,
      description: "هودي أوفر سايز بتصميم ستريت وير حصري، خامات ثقيلة وفخمة تناسب جميع الأوقات وتمنحك الستايل الذي تستحقه.",
      badge: "TREND"
    },
    {
      id: 104,
      name: "Vintage Denim Jacket - Distressed",
      price: 549,
      image: "https://images.pexels.com/photos/1232459/pexels-photo-1232459.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: 'men',
      colors: ["أزرق باهت", "رمادي"],
      sizes: ["M", "L", "XL"],
      rating: 4.7,
      reviews: 156,
      description: "جاكيت جينز كلاسيكي بتفاصيل مهترئة يدوياً لستايل فنتج فريد."
    },

    // --- القسم النسائي (WOMEN'S STREETWEAR) ---
    {
      id: 201,
      name: "Cropped Street Hoodie - Pastel Pink",
      price: 329,
      image: "https://images.pexels.com/photos/3758105/pexels-photo-3758105.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: 'women',
      colors: ["وردي", "لافندر", "أسود"],
      sizes: ["XS", "S", "M", "L"],
      rating: 4.8,
      reviews: 245,
      description: "هودي قصير (كروب) عصري بخامات قطنية ناعمة، مثالي للتنسيق مع الجينز الهاي ويست.",
      badge: "Trending"
    },
    {
      id: 202,
      name: "High-Waist Mom Jeans - Retro Blue",
      price: 429,
      image: "https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: 'women',
      colors: ["أزرق فاتح", "أزرق كلاسيك"],
      sizes: ["26", "28", "30", "32", "34"],
      rating: 4.7,
      reviews: 310,
      description: "بنطلون جينز بخصر مرتفع وتصميم مريح يبرز أناقتك بأسلوب كلاسيكي متجدد."
    },
    {
      id: 203,
      name: "Oversized Knit Sweater - Cozy Beige",
      price: 349,
      image: "https://images.pexels.com/photos/6347546/pexels-photo-6347546.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: 'women',
      colors: ["بيج", "كاشمير", "أبيض"],
      sizes: ["S", "M", "L", "XL"],
      rating: 4.9,
      reviews: 287,
      description: "سويتر صوف ناعم بتصميم واسع يمنحك الدفء والأناقة في وقت واحد."
    },
    {
      id: 204,
      name: "Floral Maxi Street Dress",
      price: 499,
      image: "https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: 'women',
      colors: ["نقشة زهور", "أزرق"],
      sizes: ["S", "M", "L"],
      rating: 4.9,
      reviews: 134,
      description: "فستان طويل خفيف وأنيق بنقشات مبهجة، مثالي للخروجات الصيفية والمناسبات البسيطة.",
      badge: "New Collection"
    },

    // --- قسم الأطفال (KIDS' COLLECTION) ---
    {
      id: 301,
      name: "Mini Hero Hoodie - Power Red",
      price: 249,
      image: "https://images.pexels.com/photos/1620760/pexels-photo-1620760.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: 'kids',
      colors: ["أحمر", "كحلي", "رمادي"],
      sizes: ["4", "6", "8", "10", "12"],
      rating: 4.9,
      reviews: 88,
      description: "هودي أطفالي مريح جداً بتصميم يحبه الأطفال وخامات تحميهم من البرد.",
      badge: "أفضل قيمة"
    },
    {
      id: 302,
      name: "Junior Street Jogger Set",
      price: 389,
      image: "https://images.pexels.com/photos/1619801/pexels-photo-1619801.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: 'kids',
      colors: ["رمادي/أصفر", "أسود/برتقالي"],
      sizes: ["6", "8", "10", "14"],
      rating: 4.8,
      reviews: 65,
      description: "طقم كامل (سويت شيرت وبنطلون) بستايل الستريت وير للأطفال النشيطين.",
      badge: "طقم كامل"
    },
    {
      id: 303,
      name: "Cool Kids Denim Jacket",
      price: 349,
      image: "https://images.pexels.com/photos/1104007/pexels-photo-1104007.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: 'kids',
      colors: ["أزرق جينز"],
      sizes: ["4", "6", "8", "12"],
      rating: 4.7,
      reviews: 42,
      description: "جاكيت جينز أطفالي بلمسة عصرية، سهل التنسيق مع أي طقم."
    },
    {
      id: 304,
      name: "Sporty Junior Tracksuit - Lime",
      price: 399,
      image: "https://images.pexels.com/photos/1648377/pexels-photo-1648377.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: 'kids',
      colors: ["أخضر فوسفوري", "كحلي"],
      sizes: ["6", "10", "14"],
      rating: 4.9,
      reviews: 37,
      description: "تريننج أطفالي رياضي بخامات تسمح بالتنفس، مثالي للتمارين والنادي."
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
