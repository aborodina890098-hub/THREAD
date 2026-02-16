
import React from 'react';
import { Instagram, Facebook, Mail, MessageCircle, Phone, ArrowRight, ArrowLeft, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

const Footer: React.FC = () => {
  const { language } = useAppContext();
  const isAr = language === 'ar';

  const socialLinks = [
    { icon: <Facebook size={20} />, href: "https://facebook.com", label: "Facebook", color: "hover:bg-blue-600" },
    { icon: <Instagram size={20} />, href: "https://instagram.com", label: "Instagram", color: "hover:bg-pink-600" },
    { icon: <MessageCircle size={20} />, href: "https://wa.me/201021466271", label: "WhatsApp", color: "hover:bg-green-600" },
    { icon: <Mail size={20} />, href: "mailto:info@thread-eg.com", label: "Email", color: "hover:bg-cyan-600" },
  ];

  return (
    <footer className="relative dark:bg-slate-950 bg-slate-50 border-t border-white/5 pt-24 pb-12 overflow-hidden transition-colors">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-20">
          
          {/* Brand Identity Section */}
          <div className="lg:col-span-4 space-y-8">
            <div className="space-y-4">
              <Link to="/" className="text-5xl font-black tracking-tighter dark:text-white text-slate-900 font-outfit uppercase inline-block italic">
                THRE<span className="text-cyan-500">AD</span>
              </Link>
              <p className="text-slate-400 text-lg leading-relaxed max-w-sm font-medium">
                {isAr 
                  ? 'أول براند Streetwear في مصر بيجمع بين التصميم العصري والجودة العالية. بنصمم قطع فريدة بتعبر عن ستايلك الحقيقي.' 
                  : 'The first Streetwear brand in Egypt combining modern design with high quality. We design unique pieces that reflect your true style.'}
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-xs font-black text-slate-500 uppercase tracking-[0.3em]">
                {isAr ? 'تواصل معنا مباشرة' : 'Direct Contact'}
              </h4>
              <div className="flex flex-col gap-3">
                <a href="tel:01021466271" className="flex items-center gap-3 text-cyan-400 hover:text-white transition-colors group">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone size={18} />
                  </div>
                  <span className="font-black text-lg font-outfit tracking-wider">01021466271</span>
                </a>
              </div>
            </div>

            <div className="flex gap-3">
              {socialLinks.map((social, idx) => (
                <a 
                  key={idx}
                  href={social.href} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 glass flex items-center justify-center rounded-2xl text-slate-400 hover:text-white transition-all duration-300 ${social.color} shadow-lg`}
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Group */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8">
            <div className="space-y-8">
              <h4 className="dark:text-white text-slate-900 font-black text-sm uppercase tracking-widest border-b border-cyan-500/30 pb-2 inline-block">
                {isAr ? 'روابط سريعة' : 'Quick Links'}
              </h4>
              <ul className="space-y-4">
                {['shipping', 'returns', 'guarantee', 'terms'].map((path) => (
                  <li key={path}>
                    <Link to={`/${path}`} className="text-slate-400 hover:text-cyan-400 hover:translate-x-1 transition-all flex items-center gap-2 group font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-800 group-hover:bg-cyan-500 transition-colors"></span>
                      {isAr ? 
                        (path === 'shipping' ? 'الشحن والتوصيل' : path === 'returns' ? 'الإرجاع والاستبدال' : path === 'guarantee' ? 'ضمان الجودة' : 'الشروط والأحكام') :
                        (path === 'shipping' ? 'Shipping' : path === 'returns' ? 'Returns' : path === 'guarantee' ? 'Quality' : 'Terms')}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-8">
              <h4 className="dark:text-white text-slate-900 font-black text-sm uppercase tracking-widest border-b border-purple-500/30 pb-2 inline-block">
                {isAr ? 'الدعم' : 'Support'}
              </h4>
              <ul className="space-y-4">
                {['privacy', 'cookies', 'faq'].map((path) => (
                  <li key={path}>
                    <Link to={`/${path === 'faq' ? '' : path}`} onClick={() => path === 'faq' && document.getElementById('faq')?.scrollIntoView({behavior: 'smooth'})} className="text-slate-400 hover:text-purple-400 hover:translate-x-1 transition-all flex items-center gap-2 group font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-800 group-hover:bg-purple-500 transition-colors"></span>
                      {isAr ? 
                        (path === 'privacy' ? 'الخصوصية' : path === 'cookies' ? 'الكوكيز' : 'الأسئلة الشائعة') :
                        (path === 'privacy' ? 'Privacy' : path === 'cookies' ? 'Cookies' : 'FAQs')}
                    </Link>
                  </li>
                ))}
                <li>
                  <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="text-slate-400 hover:text-purple-400 transition-all flex items-center gap-2 group font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-800 group-hover:bg-purple-500 transition-colors"></span>
                    {isAr ? 'تتبع الطلب' : 'Track Order'}
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="lg:col-span-4 space-y-8">
            <div className="glass p-8 rounded-[2.5rem] border-white/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 blur-2xl group-hover:bg-cyan-500/10 transition-all"></div>
              <h4 className="dark:text-white text-slate-900 font-black text-xl mb-3">
                {isAr ? 'انضم لنشرة الخصومات' : 'Join Our Newsletter'}
              </h4>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                {isAr 
                  ? 'اشترك وخليك أول واحد يعرف الـ Drops الجديدة وخد خصم 10% فوري!' 
                  : 'Subscribe and be the first to know about new drops and get an instant 10% off!'}
              </p>
              
              <form className="relative space-y-3" onSubmit={(e) => e.preventDefault()}>
                <div className="relative">
                  <input 
                    type="email" 
                    placeholder={isAr ? "بريدك الإلكتروني" : "Your email address"}
                    className={`w-full dark:bg-black/40 bg-white/50 border border-white/10 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:border-cyan-500/50 transition-all dark:text-white text-slate-900 ${isAr ? 'text-right' : 'text-left'}`} 
                  />
                  <button className={`absolute ${isAr ? 'left-2' : 'right-2'} top-2 p-2 bg-cyan-500 text-slate-950 rounded-xl hover:bg-white transition-all shadow-lg active:scale-95 group/btn`}>
                    <Send size={18} className={`${isAr ? 'rotate-[-45deg]' : ''} group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform`} />
                  </button>
                </div>
                <p className="text-[10px] text-slate-500 text-center uppercase tracking-widest font-black">
                  {isAr ? 'لا نرسل رسائل مزعجة، نعدك.' : 'No spam, we promise.'}
                </p>
              </form>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col lg:flex-row items-center justify-between gap-8 text-xs font-bold uppercase tracking-widest">
          <div className="flex items-center gap-6 text-slate-500">
            <p className="hover:text-cyan-400 transition-colors cursor-default">
              {isAr ? '© 2024 ثريد ستريت وير' : '© 2024 THREAD STREETWEAR'}
            </p>
            <span className="hidden md:block w-1 h-1 rounded-full bg-slate-800"></span>
            <p className="italic text-cyan-500/50">Your Style, Your Story</p>
          </div>

          <div className="flex items-center gap-8">
            <div className="flex gap-4 opacity-40 hover:opacity-100 transition-opacity">
              <img src="https://img.icons8.com/color/48/visa.png" className="h-5" alt="Visa" />
              <img src="https://img.icons8.com/color/48/mastercard.png" className="h-5" alt="Mastercard" />
              <img src="https://img.icons8.com/color/48/fawry.png" className="h-5" alt="Fawry" />
            </div>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-10 h-10 glass rounded-full flex items-center justify-center text-slate-500 hover:text-cyan-400 hover:border-cyan-500/30 transition-all"
            >
              {isAr ? <ArrowLeft size={16} className="rotate-90" /> : <ArrowRight size={16} className="-rotate-90" />}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
