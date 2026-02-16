
import { SiteData } from '../types';

export const siteData: SiteData = {
  brand: {
    name: "THREAD",
    taglineAr: "ستايلك، قصتك",
    taglineEn: "Your Style, Your Story"
  },
  products: [
    // --- قسم الرجال ---
    {
      id: 101,
      name: "أوفرسايز تيشيرت - أبيض",
      nameEn: "Oversized Summer Tee - White",
      price: 349,
      oldPrice: 449,
      image: "https://images.pexels.com/photos/1018911/pexels-photo-1018911.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: 'men',
      colors: ["أبيض", "رمادي", "أسود"],
      sizes: ["S", "M", "L", "XL", "XXL"],
      rating: 4.8,
      reviews: 312,
      description: "تيشيرت صيفي خفيف قطن 100% بستايل أوفرسايز عصري، مثالي للأجواء الحارة ومعالج ضد الانكماش.",
      descriptionEn: "Lightweight 100% cotton summer tee with a modern oversized fit, perfect for hot weather and treated against shrinkage.",
      badge: "الأكثر مبيعاً",
      badgeEn: "Best Seller"
    },
    {
      id: 102,
      name: "قميص كتان بريميوم - أبيض",
      nameEn: "Premium Urban Linen Shirt - White",
      price: 449,
      oldPrice: 549,
      image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: 'men',
      colors: ["أبيض", "بيج", "أزرق فاتح"],
      sizes: ["S", "M", "L", "XL"],
      rating: 4.9,
      reviews: 215,
      description: "قميص كتان فاخر بتصميم عصري وأنيق، قماش خفيف يسمح بالتنفس، مثالي للصيف.",
      descriptionEn: "Luxury linen shirt with modern elegant design, breathable fabric perfect for summer events.",
      badge: "جديد وجذاب",
      badgeEn: "New & Attractive"
    },
    {
      id: 103,
      name: "هودي بريميوم - زيتوني",
      nameEn: "Premium Hoodie - Olive Green",
      price: 499,
      oldPrice: 650,
      image: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: 'men',
      colors: ["زيتوني", "أسود", "كحلي"],
      sizes: ["M", "L", "XL", "XXL"],
      rating: 4.7,
      reviews: 180,
      description: "هودي ثقيل ببطانة ناعمة، تصميم ستريت وير أصلي يوفر الراحة والأناقة في نفس الوقت.",
      descriptionEn: "Heavyweight hoodie with soft lining, authentic streetwear design providing both comfort and style.",
      badge: "شتاء 2024",
      badgeEn: "Winter 24"
    },
    {
      id: 104,
      name: "جاكيت دينيم عصري - كحلي",
      nameEn: "Urban Denim Jacket - Navy",
      price: 799,
      oldPrice: 1100,
      image: "https://images.pexels.com/photos/157675/fashion-men-s-individuality-black-and-white-157675.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: 'men',
      colors: ["كحلي", "أزرق فاتح"],
      sizes: ["S", "M", "L", "XL"],
      rating: 5.0,
      reviews: 95,
      description: "جاكيت جينز عالي الجودة بتصميم كلاسيكي متطور، قطعة أساسية في دولابك لا غنى عنها.",
      descriptionEn: "High-quality denim jacket with a sophisticated classic design, an essential piece for your wardrobe.",
      badge: "قطعة فاخرة",
      badgeEn: "Luxury Piece"
    },

    // --- قسم النساء ---
    {
      id: 201,
      name: "هودي ستريت كروب - وردي",
      nameEn: "Cropped Street Hoodie - Pastel Pink",
      price: 329,
      oldPrice: 399,
      image: "https://images.pexels.com/photos/3758105/pexels-photo-3758105.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: 'women',
      colors: ["وردي", "لافندر", "أسود"],
      sizes: ["XS", "S", "M", "L"],
      rating: 4.8,
      reviews: 245,
      description: "هودي قصير عصري بخامات قطنية ناعمة، مثالي للتنسيق مع الجينز الهاي ويست.",
      descriptionEn: "Modern cropped hoodie with soft cotton fabrics, perfect for pairing with high-waist jeans.",
      badge: "تريندينج",
      badgeEn: "Trending"
    },
    {
      id: 202,
      name: "فستان صيفي منقوش",
      nameEn: "Floral Summer Dress",
      price: 599,
      oldPrice: 749,
      image: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: 'women',
      colors: ["أزرق", "أحمر"],
      sizes: ["S", "M", "L"],
      rating: 4.7,
      reviews: 128,
      description: "فستان صيفي مريح بنقوش زهور جذابة، مثالي للخروجات النهارية.",
      descriptionEn: "Comfortable summer dress with attractive floral prints, perfect for daytime outings.",
      badge: "وصل حديثاً",
      badgeEn: "New Arrival"
    },
    {
      id: 203,
      name: "جاكيت جينز نسائي عصري",
      nameEn: "Urban Female Denim Jacket",
      price: 699,
      oldPrice: 850,
      image: "https://images.pexels.com/photos/1346187/pexels-photo-1346187.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: 'women',
      colors: ["أزرق فاتح", "أبيض"],
      sizes: ["S", "M", "L"],
      rating: 4.9,
      reviews: 89,
      description: "جاكيت جينز مريح بتصميم عصري يناسب إطلالتك اليومية، جودة تدوم طويلاً.",
      descriptionEn: "Comfortable denim jacket with a modern design for your daily look, long-lasting quality.",
      badge: "أناقة",
      badgeEn: "Elegance"
    },
    {
      id: 204,
      name: "فستان صيفي شيك",
      nameEn: "Chic Summer Dress",
      price: 299,
      oldPrice: 399,
      image: "https://images.pexels.com/photos/2065195/pexels-photo-2065195.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: 'women',
      colors: ["أبيض", "بيج"],
      sizes: ["S", "M", "L", "XL"],
      rating: 4.8,
      reviews: 167,
      description: "فستان صيفي أنيق وخفيف، مثالي للأجواء المشمسة والمناسبات الصيفية.",
      descriptionEn: "Elegant and lightweight summer dress, perfect for sunny weather and summer occasions.",
      badge: "أكثر طلباً",
      badgeEn: "Most Wanted"
    },

    // --- قسم الأطفال ---
    {
      id: 301,
      name: "تيشيرت أطفال قطن - أصفر",
      nameEn: "Kids Cotton Tee - Yellow",
      price: 199,
      oldPrice: 249,
      image: "https://images.pexels.com/photos/1104007/pexels-photo-1104007.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: 'kids',
      colors: ["أصفر", "أخضر"],
      sizes: ["2Y", "4Y", "6Y", "8Y"],
      rating: 4.9,
      reviews: 85,
      description: "تيشيرت أطفال قطني ناعم جداً على البشرة بتصميم مرح.",
      descriptionEn: "Very soft kids cotton tee, gentle on skin with a fun design.",
      badge: "للصغار",
      badgeEn: "For Kids"
    },
    {
      id: 302,
      name: "طقم أطفال كاجوال كامل",
      nameEn: "Kids Full Casual Set",
      price: 399,
      oldPrice: 499,
      image: "https://images.pexels.com/photos/1493108/pexels-photo-1493108.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: 'kids',
      colors: ["متعدد الألوان"],
      sizes: ["4Y", "6Y", "8Y", "10Y"],
      rating: 4.8,
      reviews: 156,
      description: "طقم كاجوال مريح للأطفال، متين ويتحمل الحركة الكثيرة واللعب.",
      descriptionEn: "Comfortable kids casual set, durable and built for active play.",
      badge: "توفير",
      badgeEn: "Saving"
    },
    {
      id: 303,
      name: "سويت شيرت أطفال شتوي",
      nameEn: "Kids Winter Sweatshirt",
      price: 279,
      oldPrice: 350,
      image: "https://images.pexels.com/photos/1620760/pexels-photo-1620760.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: 'kids',
      colors: ["أحمر", "كحلي"],
      sizes: ["4Y", "6Y", "8Y", "12Y"],
      rating: 4.7,
      reviews: 42,
      description: "سويت شيرت ثقيل ومبطن لتدفئة مثالية للأطفال في الشتاء.",
      descriptionEn: "Heavy and lined sweatshirt for perfect warmth for kids during winter.",
      badge: "شتاء دافئ",
      badgeEn: "Warm Winter"
    },
    {
      id: 304,
      name: "بنطلون رياضي للأطفال",
      nameEn: "Kids Sporty Joggers",
      price: 249,
      oldPrice: 299,
      image: "https://images.pexels.com/photos/1619697/pexels-photo-1619697.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: 'kids',
      colors: ["رمادي", "أسود"],
      sizes: ["6Y", "8Y", "10Y", "12Y"],
      rating: 4.8,
      reviews: 58,
      description: "بنطلون رياضي مريح جداً للتمارين واللعب اليومي، خامة عالية الجودة.",
      descriptionEn: "Very comfortable joggers for exercise and daily play, high-quality material.",
      badge: "نشاط",
      badgeEn: "Active"
    }
  ],
  faqs: [
    {
      question: "كيف أطلب من متجركم؟",
      questionEn: "How do I order from your store?",
      answer: "ببساطة، اختر الموديل والمقاس، أضفه للسلة، وأدخل بيانات التوصيل في صفحة 'اطلب معنا'.",
      answerEn: "Simply choose the model and size, add to cart, and enter your delivery details on the 'Order with Us' page."
    },
    {
      question: "ما هي جودة الخامات المستخدمة؟",
      questionEn: "What is the quality of the fabrics used?",
      answer: "نستخدم أفضل أنواع القطن المصري الممتاز 100% المعالج ضد الانكماش والوبر لضمان أقصى درجات الراحة والمتانة.",
      answerEn: "We use the finest 100% premium Egyptian cotton, treated against shrinkage and pilling to ensure maximum comfort and durability."
    },
    {
      question: "كيف يمكنني تتبع طلبي؟",
      questionEn: "How can I track my order?",
      answer: "بمجرد شحن طلبك، ستصلك رسالة عبر واتساب برابط مباشر لتتبع حالة الشحنة مع شركة الشحن.",
      answerEn: "Once your order is shipped, you will receive a WhatsApp message with a direct link to track your shipment status."
    },
    {
      question: "ما هي سياسة الإرجاع؟",
      questionEn: "What is the return policy?",
      answer: "نقدم خدمة الإرجاع المجاني خلال 14 يوماً من الاستلام في حالة وجود عيوب صناعة، مع إمكانية المعاينة عند الاستلام.",
      answerEn: "We offer free returns within 14 days of delivery for manufacturing defects, with the option to inspect the items upon delivery."
    },
    {
      question: "هل المقاسات دقيقة؟",
      questionEn: "Are the sizes accurate?",
      answer: "نعم، مقاساتنا عالمية دقيقة. وننصح بمراجعة جدول المقاسات في صفحة المنتج أو التواصل معنا عبر واتساب للمساعدة.",
      answerEn: "Yes, our sizes follow accurate international standards. We recommend checking the size guide on the product page or contacting us on WhatsApp for help."
    },
    {
      question: "ما هي مدة التوصيل؟",
      questionEn: "How long is delivery?",
      answer: "داخل القاهرة والجيزة من يومين لـ 3 أيام عمل. باقي المحافظات من 4 لـ 5 أيام عمل.",
      answerEn: "Within Cairo and Giza 2-3 business days. Other governorates 4-5 business days."
    }
  ]
};
