
import React from 'react';
import { Truck, ShieldCheck, RefreshCcw, Star } from 'lucide-react';

const TrustBar: React.FC = () => {
  const items = [
    { icon: <Truck className="text-cyan-400" />, title: "توصيل سريع", desc: "2-3 أيام عمل" },
    { icon: <ShieldCheck className="text-purple-400" />, title: "دفع آمن", desc: "متعدد الطرق" },
    { icon: <RefreshCcw className="text-cyan-400" />, title: "إرجاع مجاني", desc: "خلال 14 يوم" },
    { icon: <Star className="text-yellow-400 fill-yellow-400" />, title: "+50,000 عميل", desc: "تقييمات ممتازة" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 -mt-10 relative z-20">
      <div className="glass rounded-3xl border border-white/10 p-8 grid grid-cols-2 lg:grid-cols-4 gap-8">
        {items.map((item, i) => (
          <div key={i} className="flex flex-col md:flex-row items-center gap-4 text-center md:text-right group">
            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
              {item.icon}
            </div>
            <div>
              <h4 className="font-bold text-white">{item.title}</h4>
              <p className="text-sm text-slate-400">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustBar;
