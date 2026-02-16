
import React, { useState } from 'react';
import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import ProductGrid from '../components/Products';
import FAQSection from '../components/FAQ';
import { Product } from '../types';
import { useAppContext } from '../context/AppContext';
import { Zap, ShieldCheck, MessageCircle, Instagram, Facebook, Mail, X, ShoppingBag, Sparkles } from 'lucide-react';

const Home: React.FC<{ onQuickView: (p: Product) => void, onQuickOrder: () => void }> = ({ onQuickView, onQuickOrder }) => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const { language } = useAppContext();
  const isAr = language === 'ar';

  return (
    <main className="dark:bg-brand-black bg-slate-50 relative transition-colors">
      {/* 3D Decorative Blobs for Home Page Depth */}
      <div className="absolute top-[80vh] right-[10%] w-72 h-72 floating-glass-sphere opacity-20 blur-xl animate-float-reverse z-0"></div>
      <div className="absolute top-[250vh] left-[5%] w-96 h-96 floating-glass-sphere opacity-10 blur-2xl animate-float z-0"></div>
      <div className="absolute bottom-[100vh] right-[5%] w-64 h-64 floating-glass-sphere opacity-15 blur-lg animate-spin-slow z-0"></div>

      {/* Background Brand Watermarks */}
      <div className="absolute top-[150vh] left-[-10vw] text-[20vw] font-black dark:text-white/[0.02] text-black/[0.01] select-none pointer-events-none rotate-90 leading-none font-outfit z-0">
        THREAD
      </div>
      <div className="absolute top-[350vh] right-[-10vw] text-[20vw] font-black dark:text-white/[0.02] text-black/[0.01] select-none pointer-events-none -rotate-90 leading-none font-outfit uppercase z-0">
        STREETWEAR
      </div>

      <div id="hero" className="relative z-10">
        <Hero onQuickOrder={onQuickOrder} />
      </div>

      <div className="relative z-10">
        <TrustBar />
      </div>
      
      {/* Distinction Section */}
      <section id="distinction" className="py-32 px-4 max-w-7xl mx-auto scroll-mt-20 relative z-10">
        <div className="text-center mb-20 space-y-6">
          <div className="inline-block px-6 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-500 text-sm font-black tracking-widest uppercase">
            {isAr ? 'ليه تختار ثريد؟' : 'WHY THREAD?'}
          </div>
          <h2 className="text-6xl lg:text-8xl font-black dark:text-white text-slate-900 tracking-tighter italic leading-tight">
            {isAr ? (
              <>ستايلك اللي <br/> <span className="text-cyan-500">بيميزك</span> عن الكل ✨</>
            ) : (
              <>Your style that <br/> <span className="text-cyan-500">sets you apart</span> ✨</>
            )}
          </h2>
          <p className="text-slate-400 text-2xl max-w-3xl mx-auto font-medium leading-relaxed">
            {isAr 
              ? 'إحنا مش مجرد براند، إحنا ثقافة ستريت وير جديدة في مصر. خامات فخمة وتصاميم بتخطف العين بخصم ' 
              : 'We are not just a brand, we are a new streetwear culture in Egypt. Premium fabrics and eye-catching designs at '}
            <span className="dark:text-white text-slate-900 font-black underline decoration-cyan-500 underline-offset-4">50%</span> 
            {isAr ? ' النهاردة.' : ' discount today.'}
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 relative z-10">
          <div className="glass p-12 rounded-[3.5rem] border-white/5 space-y-8 hover:border-cyan-500/30 transition-all group relative overflow-hidden dark:bg-slate-900/40 bg-white/50 card-3d-hover">
            <div className="w-20 h-20 bg-cyan-500/10 rounded-3xl flex items-center justify-center text-cyan-500 group-hover:scale-110 group-hover:rotate-12 transition-transform shadow-xl">
              <Sparkles size={40} fill="currentColor" />
            </div>
            <div className="space-y-4">
              <h3 className="text-3xl font-black dark:text-white text-slate-900 tracking-tight">{isAr ? 'تصاميم Thread' : 'Thread Designs'}</h3>
              <p className="text-slate-400 text-xl leading-relaxed">
                {isAr 
                  ? 'كل قطعة بتطلع من THREAD هي لوحة فنية. بنهتم بكل تفصيلة وكل غرزة عشان نضمنلك ستايل ملوش مثيل.' 
                  : 'Every piece from THREAD is a masterpiece. We care about every detail and stitch to guarantee you a unique style.'}
              </p>
            </div>
          </div>

          <div className="glass p-12 rounded-[3.5rem] border-white/5 space-y-8 hover:border-purple-500/30 transition-all group relative overflow-hidden dark:bg-slate-900/40 bg-white/50 card-3d-hover">
            <div className="w-20 h-20 bg-purple-500/10 rounded-3xl flex items-center justify-center text-purple-400 group-hover:scale-110 group-hover:-rotate-12 transition-transform shadow-xl">
              <ShieldCheck size={40} fill="currentColor" />
            </div>
            <div className="space-y-4">
              <h3 className="text-3xl font-black dark:text-white text-slate-900">{isAr ? 'ضمان الجودة' : 'Quality Guarantee'}</h3>
              <p className="text-slate-400 text-xl leading-relaxed">
                {isAr 
                  ? 'بنستخدم أنضف قطن مصري في السوق. لو القطعة مش زي ما توقعت، تقدر ترجعها وتاخد فلوسك في 14 يوم.' 
                  : 'We use the finest Egyptian cotton. If the piece is not as expected, you can return it and get a refund within 14 days.'}
              </p>
            </div>
          </div>

          <div className="glass p-12 rounded-[3.5rem] border-white/5 space-y-8 hover:border-cyan-500/30 transition-all group relative overflow-hidden dark:bg-slate-900/40 bg-white/50 card-3d-hover">
            <div className="w-20 h-20 bg-cyan-500/10 rounded-3xl flex items-center justify-center text-cyan-500 group-hover:scale-110 group-hover:rotate-12 transition-transform shadow-xl">
              <ShoppingBag size={40} fill="currentColor" />
            </div>
            <div className="space-y-4">
              <h3 className="text-3xl font-black dark:text-white text-slate-900">{isAr ? 'توصيل THREAD' : 'THREAD Delivery'}</h3>
              <p className="text-slate-400 text-xl leading-relaxed">
                {isAr 
                  ? 'شحن سريع لأي مكان في مصر. بنوصلك شياكة THREAD لحد باب بيتك في وقت قياسي.' 
                  : 'Fast shipping to anywhere in Egypt. We bring THREAD elegance to your doorstep in record time.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      <div id="products-container" className="bg-thread-pattern pb-20 relative z-10">
        <ProductGrid onQuickView={onQuickView} />
      </div>

      {/* App Section */}
      <section className="py-40 px-4 overflow-hidden relative z-10">
        <div className="max-w-7xl mx-auto glass rounded-[6rem] p-10 lg:p-24 flex flex-col lg:flex-row items-center gap-16 border-white/10 relative overflow-hidden dark:bg-slate-950/80 bg-white/90">
          <div className="flex-1 space-y-12 text-center lg:text-right relative z-10">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-cyan-500/20 text-cyan-500 font-black text-xs uppercase tracking-widest">
              {isAr ? 'انضم لمجتمع ثريد' : 'Join the THREAD Community'}
            </div>
            <h2 className={`text-6xl lg:text-[7rem] font-black dark:text-white text-slate-900 leading-[0.9] italic uppercase tracking-tighter ${isAr ? '' : 'lg:text-left'}`}>
              {isAr ? <>خلي دولابك <br/> <span className="text-cyan-500">THREAD!</span> 🛒</> : <>Make your closet <br/> <span className="text-cyan-500">THREAD!</span> 🛒</>}
            </h2>
            <p className={`text-2xl text-slate-500 leading-relaxed font-medium ${isAr ? '' : 'lg:text-left'}`}>
              {isAr 
                ? 'نزل تطبيق THREAD الرسمي واستمتع بتجربة تسوق أسرع وخصومات بتوصل لـ 50%. تابع أحدث الـ Drops قبل الكل.' 
                : 'Download the official THREAD app for a faster shopping experience and up to 50% discounts. Follow the latest drops first.'}
            </p>
            <div className={`flex flex-wrap gap-6 justify-center ${isAr ? 'lg:justify-start' : 'lg:justify-start'}`}>
               <button className="bg-slate-950 text-white dark:bg-white dark:text-slate-950 px-12 py-6 rounded-[2.5rem] font-black text-2xl shadow-2xl hover:scale-105 hover:bg-cyan-500 transition-all flex items-center gap-4 border border-white/10">
                 App Store
               </button>
               <button className="bg-cyan-500 text-slate-950 px-12 py-6 rounded-[2.5rem] font-black text-2xl shadow-2xl hover:scale-105 hover:bg-white transition-all flex items-center gap-4">
                 Google Play
               </button>
            </div>
          </div>

          <div className="flex-1 relative perspective-2000">
             <div className="w-[320px] sm:w-[380px] h-[680px] sm:h-[750px] border-[14px] border-slate-900 rounded-[4.5rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.5)] relative z-10 group transform rotate-y-10 hover:rotate-y-0 transition-all duration-700">
                <img src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=800&q=80" alt="Thread App" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms]" />
                <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-10 text-white ${isAr ? 'text-right' : 'text-left'}`}>
                   <p className="text-5xl font-black font-outfit tracking-tighter italic">THREAD</p>
                   <p className="text-xl font-bold text-cyan-500">{isAr ? 'خصومات حصرية: -50%' : 'Exclusive Drop: -50%'}</p>
                </div>
             </div>
             {/* 3D Decorative Floating Icon behind Phone */}
             <div className="absolute -bottom-10 -right-10 w-48 h-48 floating-glass-sphere z-0 animate-float opacity-40 blur-sm"></div>
          </div>
        </div>
      </section>

      <div id="faq" className="scroll-mt-24 bg-thread-pattern py-20 relative z-10">
        <FAQSection />
      </div>

      {/* Floating Hub */}
      <div className={`fixed bottom-10 ${isAr ? 'right-10' : 'left-10'} z-[200] flex flex-col items-end gap-6`}>
        <div className={`flex flex-col gap-5 transition-all duration-500 origin-bottom ${isContactOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-50 translate-y-10 pointer-events-none'}`}>
          <a href="https://wa.me/201021466271" target="_blank" className={`flex items-center gap-3 group ${isAr ? '' : 'flex-row-reverse'}`}>
            <span className="glass px-6 py-2 rounded-2xl dark:text-white text-slate-900 font-black text-sm opacity-0 group-hover:opacity-100 transition-opacity shadow-2xl">{isAr ? 'واتساب' : 'WhatsApp'}</span>
            <div className="w-16 h-16 bg-[#25D366] text-white rounded-[1.8rem] flex items-center justify-center shadow-2xl hover:scale-110 transition-transform border border-white/20">
              <MessageCircle size={32} fill="currentColor" />
            </div>
          </a>
          <a href="#" className={`flex items-center gap-3 group ${isAr ? '' : 'flex-row-reverse'}`}>
            <span className="glass px-6 py-2 rounded-2xl dark:text-white text-slate-900 font-black text-sm opacity-0 group-hover:opacity-100 transition-opacity shadow-2xl">{isAr ? 'انستجرام' : 'Instagram'}</span>
            <div className="w-16 h-16 bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white rounded-[1.8rem] flex items-center justify-center shadow-2xl hover:scale-110 transition-transform border border-white/20">
              <Instagram size={32} />
            </div>
          </a>
          <a href="mailto:support@thread.com" className={`flex items-center gap-3 group ${isAr ? '' : 'flex-row-reverse'}`}>
            <span className="glass px-6 py-2 rounded-2xl dark:text-white text-slate-900 font-black text-sm opacity-0 group-hover:opacity-100 transition-opacity shadow-2xl">{isAr ? 'الايميل' : 'Email'}</span>
            <div className="w-16 h-16 bg-slate-900 text-white rounded-[1.8rem] flex items-center justify-center shadow-2xl hover:scale-110 transition-transform border border-white/20">
              <Mail size={32} />
            </div>
          </a>
        </div>

        <div className={`flex items-center gap-4 ${isAr ? '' : 'flex-row-reverse'}`}>
          <span className={`dark:text-white text-slate-900 font-black text-xl transition-all duration-500 drop-shadow-lg ${isContactOpen ? 'opacity-0' : 'opacity-100'}`}>
            {isAr ? 'تواصل معنا' : 'Contact Us'}
          </span>
          <button 
            onClick={() => setIsContactOpen(!isContactOpen)}
            className={`w-20 h-20 rounded-[2.2rem] flex items-center justify-center shadow-2xl transition-all duration-500 border border-white/20 ${isContactOpen ? 'bg-white text-slate-900 rotate-90 scale-90' : 'bg-cyan-500 text-slate-900 hover:scale-110'}`}
          >
            {isContactOpen ? <X size={40} strokeWidth={3} /> : <MessageCircle size={40} strokeWidth={3} />}
          </button>
        </div>
      </div>

      {/* Final CTA */}
      <section className="relative py-52 px-4 text-center overflow-hidden dark:bg-slate-950 bg-slate-200 transition-colors z-10">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 floating-glass-sphere opacity-20 blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 floating-glass-sphere opacity-20 blur-3xl animate-float-reverse"></div>
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto space-y-16">
          <div className="space-y-8">
            <h2 className="text-7xl md:text-[10rem] font-black dark:text-white text-slate-900 tracking-tighter uppercase italic leading-none drop-shadow-2xl">
              {isAr ? <>جاهز تتشيك <span className="text-cyan-500">؟</span></> : <>Ready to Flex <span className="text-cyan-500">?</span></>}
            </h2>
            <p className="text-2xl md:text-4xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-black uppercase italic tracking-[0.1em]">
               {isAr ? 'الخصم لسه شغال..' : 'Discount still active..'} <span className="dark:text-white text-slate-900 border-b-4 border-cyan-500 pb-2 shadow-cyan-500/20">50% OFF</span> {isAr ? 'على كل القطع!' : 'on all items!'}
            </p>
          </div>
          
          <button 
            onClick={() => document.getElementById('men-section')?.scrollIntoView({ behavior: 'smooth' })}
            className="group px-24 py-12 dark:bg-white dark:text-slate-950 bg-slate-950 text-white hover:bg-cyan-500 dark:hover:bg-cyan-500 font-black text-4xl rounded-[3.5rem] shadow-[0_30px_60px_rgba(0,0,0,0.3)] transition-all transform hover:scale-110 active:scale-95 flex items-center gap-6 mx-auto border border-white/5"
          >
            {isAr ? 'أضف ما يعجبك إلى السلة' : 'Add your favorites to cart'}
            <span className={`${isAr ? 'group-hover:translate-x-4' : 'group-hover:translate-x-4 rotate-180'} transition-transform`}>←</span>
          </button>
        </div>
      </section>
    </main>
  );
};

export default Home;
