
import React from 'react';
import { Truck, ShieldCheck, RefreshCcw, Star } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const TrustBar: React.FC = () => {
  const { language } = useAppContext();
  const isAr = language === 'ar';

  const items = [
    { 
      icon: <Truck className="text-cyan-400" />, 
      title: isAr ? "توصيل سريع" : "Fast Delivery", 
      desc: isAr ? "2-3 أيام عمل" : "2-3 Business Days" 
    },
    { 
      icon: <ShieldCheck className="text-purple-400" />, 
      title: isAr ? "دفع آمن" : "Secure Payment", 
      desc: isAr ? "متعدد الطرق" : "Multiple Methods" 
    },
    { 
      icon: <RefreshCcw className="text-cyan-400" />, 
      title: isAr ? "إرجاع مجاني" : "Free Returns", 
      desc: isAr ? "خلال 14 يوم" : "Within 14 Days" 
    },
    { 
      icon: <Star className="text-yellow-400 fill-yellow-400" />, 
      title: isAr ? "+50,000 عميل" : "+50,000 Customers", 
      desc: isAr ? "تقييمات ممتازة" : "Excellent Ratings" 
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 -mt-10 relative z-20">
      <div className="glass rounded-3xl border border-white/10 p-8 grid grid-cols-2 lg:grid-cols-4 gap-8">
        {items.map((item, i) => (
          <div key={i} className={`flex flex-col md:flex-row items-center gap-4 text-center ${isAr ? 'md:text-right' : 'md:text-left'} group`}>
            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
              {item.icon}
            </div>
            <div>
              <h4 className="font-bold dark:text-white text-slate-900">{item.title}</h4>
              <p className="text-sm text-slate-400">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustBar;
