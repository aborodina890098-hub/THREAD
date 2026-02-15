
import React, { useState } from 'react';
import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import ProductGrid from '../components/Products';
import FAQSection from '../components/FAQ';
import { Product } from '../types';
import { stores } from '../content/siteData';
import { MapPin, Zap, ShieldCheck, Phone, MessageCircle, Instagram, Facebook, Mail, Plus, X, Smartphone, ShoppingBag, Sparkles } from 'lucide-react';

const Home: React.FC<{ onQuickView: (p: Product) => void }> = ({ onQuickView }) => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <main className="bg-brand-black relative">
      {/* Background Brand Watermarks */}
      <div className="absolute top-[150vh] left-[-10vw] text-[20vw] font-black text-white/[0.02] select-none pointer-events-none rotate-90 leading-none font-outfit">
        THREAD
      </div>
      <div className="absolute top-[350vh] right-[-10vw] text-[20vw] font-black text-white/[0.02] select-none pointer-events-none -rotate-90 leading-none font-outfit uppercase">
        STREETWEAR
      </div>
      <div className="absolute top-[500vh] left-[-5vw] text-[15vw] font-black text-white/[0.01] select-none pointer-events-none leading-none font-outfit italic">
        ORIGINAL
      </div>

      <div id="hero">
        <Hero />
      </div>

      <TrustBar />
      
      {/* Distinction Section - ما يميزنا */}
      <section id="distinction" className="py-32 px-4 max-w-7xl mx-auto scroll-mt-20 relative">
        <div className="text-center mb-20 space-y-6">
          <div className="inline-block px-6 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-black tracking-widest uppercase">
            WHY THREAD?
          </div>
          <h2 className="text-6xl lg:text-8xl font-black text-white tracking-tighter italic leading-tight">ستايلك اللي <br/> <span className="text-cyan-400">بيميزك</span> عن الكل ✨</h2>
          <p className="text-slate-400 text-2xl max-w-3xl mx-auto font-medium leading-relaxed">
            إحنا مش مجرد براند، إحنا ثقافة ستريت وير جديدة في مصر. خامات فخمة وتصاميم بتخطف العين بخصم <span className="text-white font-black underline decoration-cyan-500 underline-offset-4">50%</span> النهاردة.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 relative z-10">
          <div className="glass p-12 rounded-[3.5rem] border-white/5 space-y-8 hover:border-cyan-500/30 transition-all group relative overflow-hidden bg-slate-900/40">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="w-20 h-20 bg-cyan-500/10 rounded-3xl flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:rotate-12 transition-transform">
              <Sparkles size={40} fill="currentColor" />
            </div>
            <div className="space-y-4">
              <h3 className="text-3xl font-black text-white tracking-tight">تصاميم Thread</h3>
              <p className="text-slate-400 text-xl leading-relaxed">كل قطعة بتطلع من THREAD هي لوحة فنية. بنهتم بكل تفصيلة وكل غرزة عشان نضمنلك ستايل ملوش مثيل.</p>
            </div>
          </div>

          <div className="glass p-12 rounded-[3.5rem] border-white/5 space-y-8 hover:border-purple-500/30 transition-all group relative overflow-hidden bg-slate-900/40">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="w-20 h-20 bg-purple-500/10 rounded-3xl flex items-center justify-center text-purple-400 group-hover:scale-110 group-hover:-rotate-12 transition-transform">
              <ShieldCheck size={40} fill="currentColor" />
            </div>
            <div className="space-y-4">
              <h3 className="text-3xl font-black text-white">ضمان الجودة</h3>
              <p className="text-slate-400 text-xl leading-relaxed">بنستخدم أنضف قطن مصري في السوق. لو القطعة مش زي ما توقعت، تقدر ترجعها وتاخد فلوسك في 14 يوم.</p>
            </div>
          </div>

          <div className="glass p-12 rounded-[3.5rem] border-white/5 space-y-8 hover:border-cyan-500/30 transition-all group relative overflow-hidden bg-slate-900/40">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="w-20 h-20 bg-cyan-500/10 rounded-3xl flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:rotate-12 transition-transform">
              <ShoppingBag size={40} fill="currentColor" />
            </div>
            <div className="space-y-4">
              <h3 className="text-3xl font-black text-white">توصيل THREAD</h3>
              <p className="text-slate-400 text-xl leading-relaxed">شحن سريع لأي مكان في مصر. بنوصلك شياكة THREAD لحد باب بيتك في وقت قياسي.</p>
            </div>
          </div>
        </div>
      </section>

      <div id="products-container" className="bg-thread-pattern pb-20">
        <ProductGrid onQuickView={onQuickView} />
      </div>

      {/* Redesigned App Section - High Fashion Branding */}
      <section className="py-40 px-4 overflow-hidden relative">
        <div className="max-w-7xl mx-auto glass rounded-[6rem] p-10 lg:p-24 flex flex-col lg:flex-row items-center gap-16 border-white/10 relative overflow-hidden bg-slate-950/80">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-cyan-500/10 blur-[150px] -z-10"></div>
          
          <div className="flex-1 space-y-12 text-center lg:text-right relative z-10">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-cyan-500/20 text-cyan-400 font-black text-xs uppercase tracking-widest">
              Join the THREAD Community
            </div>
            <h2 className="text-6xl lg:text-[7rem] font-black text-white leading-[0.9] italic uppercase tracking-tighter">
              خلي دولابك <br/> <span className="text-cyan-400">THREAD!</span> 🛒
            </h2>
            <p className="text-2xl text-slate-300 leading-relaxed font-medium">
              نزل تطبيق THREAD الرسمي واستمتع بتجربة تسوق أسرع وخصومات بتوصل لـ <span className="text-white font-black underline decoration-cyan-500">50%</span>. تابع أحدث الـ Drops والقطع الليمتد قبل الكل.
            </p>
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
               <button className="bg-white text-slate-950 px-12 py-6 rounded-[2.5rem] font-black text-2xl shadow-2xl hover:scale-105 hover:bg-cyan-400 transition-all flex items-center gap-4">
                 App Store
               </button>
               <button className="bg-cyan-500 text-slate-950 px-12 py-6 rounded-[2.5rem] font-black text-2xl shadow-2xl hover:scale-105 hover:bg-white transition-all flex items-center gap-4">
                 Google Play
               </button>
            </div>
          </div>

          <div className="flex-1 relative">
             {/* New Fashion-Focused Phone Mockup */}
             <div className="w-[320px] sm:w-[380px] h-[680px] sm:h-[750px] border-[14px] border-slate-900 rounded-[4.5rem] overflow-hidden shadow-[0_0_150px_rgba(34,211,238,0.25)] relative z-10 group transform rotate-2 hover:rotate-0 transition-all duration-700">
                <div className="absolute top-0 inset-x-0 h-6 bg-slate-900 flex justify-center items-center z-20">
                   <div className="w-24 h-4 bg-black rounded-full"></div>
                </div>
                {/* Image updated to look like a clothing brand app */}
                <img src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=800&q=80" alt="Thread Fashion App" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-10 text-white text-right">
                   <p className="text-5xl font-black font-outfit tracking-tighter italic">THREAD</p>
                   <p className="text-xl font-bold text-cyan-400">Exclusive Drop: -50% OFF</p>
                   <div className="w-full h-2 bg-white/20 mt-4 rounded-full overflow-hidden">
                      <div className="w-2/3 h-full bg-cyan-500"></div>
                   </div>
                   <p className="text-[10px] mt-2 opacity-50 uppercase tracking-widest font-black">Shop the collection in-app</p>
                </div>
             </div>
             
             {/* Brand Tag Floating */}
             <div className="absolute -top-10 -right-20 glass p-8 rounded-[3rem] animate-float z-20 border-white/20 shadow-2xl backdrop-blur-3xl">
                <p className="text-sm font-black text-cyan-400 uppercase tracking-widest mb-1">Authentic</p>
                <p className="text-4xl font-black text-white font-outfit">THREAD</p>
             </div>

             <div className="absolute bottom-20 -left-16 glass p-8 rounded-[3rem] animate-float z-20 border-purple-500/40 shadow-2xl" style={{ animationDelay: '3s' }}>
                <p className="text-3xl font-black text-white leading-none">Best <br/> Choice</p>
                <div className="flex gap-1 text-cyan-400 mt-2">
                  {[...Array(5)].map((_, i) => <Zap key={i} size={14} fill="currentColor" />)}
                </div>
             </div>
          </div>
        </div>
      </section>

      <div id="faq" className="scroll-mt-24 bg-thread-pattern py-20">
        <FAQSection />
      </div>

      {/* Floating Hub */}
      <div className="fixed bottom-10 right-10 z-[200] flex flex-col items-end gap-6">
        <div className={`flex flex-col gap-5 transition-all duration-500 origin-bottom ${isContactOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-50 translate-y-10 pointer-events-none'}`}>
          <a href="https://wa.me/201000000000" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
            <span className="glass px-6 py-2 rounded-2xl text-white font-black text-sm opacity-0 group-hover:opacity-100 transition-opacity shadow-2xl">واتساب</span>
            <div className="w-16 h-16 bg-[#25D366] text-white rounded-[1.8rem] flex items-center justify-center shadow-2xl hover:scale-110 transition-transform border border-white/20">
              <MessageCircle size={32} fill="currentColor" />
            </div>
          </a>
          <a href="#" className="flex items-center gap-3 group">
            <span className="glass px-6 py-2 rounded-2xl text-white font-black text-sm opacity-0 group-hover:opacity-100 transition-opacity shadow-2xl">فيسبوك</span>
            <div className="w-16 h-16 bg-[#1877F2] text-white rounded-[1.8rem] flex items-center justify-center shadow-2xl hover:scale-110 transition-transform border border-white/20">
              <Facebook size={32} fill="currentColor" />
            </div>
          </a>
          <a href="#" className="flex items-center gap-3 group">
            <span className="glass px-6 py-2 rounded-2xl text-white font-black text-sm opacity-0 group-hover:opacity-100 transition-opacity shadow-2xl">انستجرام</span>
            <div className="w-16 h-16 bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white rounded-[1.8rem] flex items-center justify-center shadow-2xl hover:scale-110 transition-transform border border-white/20">
              <Instagram size={32} />
            </div>
          </a>
          <a href="mailto:support@thread.com" className="flex items-center gap-3 group">
            <span className="glass px-6 py-2 rounded-2xl text-white font-black text-sm opacity-0 group-hover:opacity-100 transition-opacity shadow-2xl">الايميل</span>
            <div className="w-16 h-16 bg-white/10 text-white rounded-[1.8rem] flex items-center justify-center shadow-2xl hover:scale-110 transition-transform border border-white/20">
              <Mail size={32} />
            </div>
          </a>
        </div>

        <div className="flex items-center gap-4">
          <span className={`text-white font-black text-xl transition-all duration-500 drop-shadow-lg ${isContactOpen ? 'opacity-0 -translate-x-5' : 'opacity-100 translate-x-0'}`}>تواصل معنا</span>
          <button 
            onClick={() => setIsContactOpen(!isContactOpen)}
            className={`w-20 h-20 rounded-[2.2rem] flex items-center justify-center shadow-2xl transition-all duration-500 border border-white/20 ${isContactOpen ? 'bg-white text-slate-900 rotate-90 scale-90' : 'bg-cyan-500 text-slate-900 hover:scale-110'}`}
          >
            {isContactOpen ? <X size={40} strokeWidth={3} /> : <MessageCircle size={40} strokeWidth={3} />}
          </button>
        </div>
      </div>

      {/* Final CTA - "THREAD" Branding Overload */}
      <section className="relative py-52 px-4 text-center overflow-hidden bg-slate-950">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1920&q=80" 
            className="w-full h-full object-cover opacity-5" 
            alt="Clothing Pattern"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-black via-brand-black/90 to-cyan-500/10"></div>
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto space-y-16">
          <div className="space-y-8">
             <div className="flex justify-center gap-4 text-outline font-outfit text-4xl sm:text-7xl font-black select-none tracking-[0.4em] opacity-40">
               THREAD THREAD THREAD
             </div>
            <h2 className="text-7xl md:text-[10rem] font-black text-white tracking-tighter uppercase italic leading-none animate-pulse">
              جاهز تتشيك <span className="text-cyan-500">؟</span>
            </h2>
            <p className="text-2xl md:text-4xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-black uppercase italic tracking-[0.1em]">
               الخصم لسه شغال.. <span className="text-white border-b-4 border-cyan-500 pb-2">50% OFF</span> على كل القطع!
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-10">
            <button 
              onClick={() => document.getElementById('men-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="group px-24 py-12 bg-white hover:bg-cyan-500 text-slate-950 font-black text-4xl rounded-[3.5rem] shadow-[0_30px_100px_rgba(255,255,255,0.15)] transition-all transform hover:scale-110 active:scale-95 flex items-center gap-6"
            >
              اطلب بخصم 50%
              <span className="group-hover:translate-x-4 transition-transform">←</span>
            </button>
          </div>
          
          <div className="flex justify-center flex-wrap gap-12 pt-20 border-t border-white/5 grayscale opacity-20">
             <span className="text-2xl font-black font-outfit italic tracking-tighter">THREAD ORIGINAL</span>
             <span className="text-2xl font-black font-outfit italic tracking-tighter">QUALITY CONTROL</span>
             <span className="text-2xl font-black font-outfit italic tracking-tighter">EGYPT STREETWEAR</span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
