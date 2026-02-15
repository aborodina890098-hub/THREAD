
import React from 'react';
import { Instagram, Twitter, Facebook, ArrowLeft, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-white/10 pt-20 pb-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
        {/* Brand Info */}
        <div className="space-y-6">
          <Link to="/" className="text-4xl font-black text-white">THREAD</Link>
          <p className="text-slate-400 text-sm leading-relaxed">
            أول براند Streetwear في مصر بيجمع بين التصميم العصري والجودة العالية. بنصمم قطع فريدة بتعبر عن ستايلك الحقيقي.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 glass flex items-center justify-center rounded-xl text-slate-400 hover:text-cyan-400 hover:scale-110 transition-all"><Instagram size={20} /></a>
            <a href="#" className="w-10 h-10 glass flex items-center justify-center rounded-xl text-slate-400 hover:text-cyan-400 hover:scale-110 transition-all"><Twitter size={20} /></a>
            <a href="#" className="w-10 h-10 glass flex items-center justify-center rounded-xl text-slate-400 hover:text-cyan-400 hover:scale-110 transition-all"><Facebook size={20} /></a>
          </div>
        </div>

        {/* Links 1 */}
        <div className="space-y-6">
          <h4 className="text-white font-bold text-lg">روابط سريعة</h4>
          <ul className="space-y-4">
            <li><Link to="/shipping" className="text-slate-400 hover:text-cyan-400 transition-colors">الشحن والتوصيل</Link></li>
            <li><Link to="/returns" className="text-slate-400 hover:text-cyan-400 transition-colors">الإرجاع والاستبدال</Link></li>
            <li><Link to="/guarantee" className="text-slate-400 hover:text-cyan-400 transition-colors">ضمان الجودة</Link></li>
            <li><Link to="/terms" className="text-slate-400 hover:text-cyan-400 transition-colors">الشروط والأحكام</Link></li>
          </ul>
        </div>

        {/* Links 2 */}
        <div className="space-y-6">
          <h4 className="text-white font-bold text-lg">المساعدة</h4>
          <ul className="space-y-4">
            <li><Link to="/privacy" className="text-slate-400 hover:text-cyan-400 transition-colors">سياسة الخصوصية</Link></li>
            <li><Link to="/cookies" className="text-slate-400 hover:text-cyan-400 transition-colors">سياسة الكوكيز</Link></li>
            <li><a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">تتبع طلبك</a></li>
            <li><a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">تواصل معنا</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="space-y-6">
          <h4 className="text-white font-bold text-lg">خليك متابعنا</h4>
          <p className="text-slate-400 text-sm">اشترك في النشرة البريدية وخد خصم 10% على طلبك الجاي!</p>
          <div className="relative">
            <input 
              type="email" 
              placeholder="بريدك الإلكتروني" 
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-500 transition-all text-right" 
            />
            <button className="absolute left-2 top-2 p-1.5 bg-cyan-500 text-slate-950 rounded-lg hover:bg-cyan-400 transition-colors">
              <Mail size={18} />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-slate-600">
        <p>© 2024 THREAD Streetwear. جميع الحقوق محفوظة.</p>
        <p className="italic font-mono">Your Style, Your Story</p>
        <div className="flex gap-4">
          <img src="https://img.icons8.com/color/48/visa.png" className="h-6 grayscale opacity-50" />
          <img src="https://img.icons8.com/color/48/mastercard.png" className="h-6 grayscale opacity-50" />
          <img src="https://img.icons8.com/color/48/fawry.png" className="h-6 grayscale opacity-50" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
