
import React from 'react';
import { ShoppingCart, ArrowLeft, Zap, ShieldCheck } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToProducts = () => {
    document.getElementById('products-container')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-24 px-4 bg-brand-black">
      {/* Background Brand Watermark - More prominent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[35vw] font-black text-white/[0.04] select-none pointer-events-none font-outfit tracking-tighter uppercase italic">
        THREAD
      </div>

      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-[180px]"></div>
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-[180px]"></div>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">
        {/* Text Content */}
        <div className="text-right space-y-12 order-2 lg:order-1">
          <div className="inline-flex items-center gap-3 px-8 py-3 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 text-sm font-black tracking-widest uppercase animate-fade-in shadow-[0_0_20px_rgba(34,211,238,0.2)]">
            <Zap size={18} fill="currentColor" />
            THREAD ORIGINAL DROPS • SEASON 24
          </div>
          
          <div className="space-y-6">
            <h1 className="text-7xl lg:text-[11rem] font-black leading-[0.8] text-white tracking-tighter uppercase font-outfit italic">
              THRE<span className="text-cyan-500/40 text-outline">AD</span>
            </h1>
            <p className="text-3xl lg:text-5xl font-black text-white leading-tight">
              ألبس اللي <br/> <span className="text-transparent bg-clip-text bg-gradient-to-l from-cyan-400 to-purple-500 underline decoration-white/20 underline-offset-8">بيحكي قصتك.</span>
            </p>
            <p className="text-xl lg:text-2xl text-slate-400 font-medium max-w-xl">
               أكبر براند ستريت وير في مصر. خامات فخمة وتصاميم حصرية بخصومات تصل لـ <span className="text-white font-black px-2 bg-cyan-500/40 rounded">50%</span> لفترة محدودة.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-start">
            <button 
              onClick={scrollToProducts}
              className="px-16 py-8 bg-cyan-500 hover:bg-white text-slate-950 font-black text-2xl rounded-3xl flex items-center justify-center gap-6 transition-all transform hover:scale-105 active:scale-95 shadow-[0_30px_60px_rgba(34,211,238,0.4)] group"
            >
              استعرض الخصومات
              <ArrowLeft size={32} className="group-hover:translate-x-[-10px] transition-transform" />
            </button>
            <button 
              onClick={() => document.getElementById('distinction')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-16 py-8 glass border border-white/20 text-white font-black text-2xl rounded-3xl hover:bg-white/5 transition-all"
            >
              ليه THREAD؟
            </button>
          </div>

          <div className="flex items-center gap-12 pt-14 border-t border-white/10">
            <div className="space-y-2">
              <p className="text-5xl font-black text-white">+50k</p>
              <p className="text-xs text-slate-500 uppercase tracking-widest font-black">Happy Customers</p>
            </div>
            <div className="space-y-2">
              <p className="text-5xl font-black text-white">4.9</p>
              <p className="text-xs text-slate-500 uppercase tracking-widest font-black">Store Rating</p>
            </div>
            <div className="flex-1 text-left hidden sm:block">
               <span className="text-[10vw] font-black text-white/[0.05] italic uppercase tracking-tighter font-outfit leading-none">THREAD</span>
            </div>
          </div>
        </div>

        {/* Visual Centerpiece */}
        <div className="order-1 lg:order-2 relative perspective-1000 group">
          <div className="relative w-full aspect-[4/5] max-w-md mx-auto">
            {/* Brand Logo Floating */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10rem] font-black text-white/5 italic font-outfit select-none pointer-events-none z-10 rotate-[-15deg]">
              THREAD
            </div>
            
            <div className="absolute inset-0 rounded-[5rem] overflow-hidden border border-white/20 shadow-2xl transform rotate-x-10 rotate-y--10 group-hover:rotate-0 transition-all duration-1000 ease-out z-20">
              <img 
                src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1200&q=80" 
                alt="Thread Clothing Collection" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-brand-black/20"></div>
            </div>

            {/* Price Badge - Updated */}
            <div className="absolute -top-12 -right-12 w-44 h-44 glass border-cyan-500/50 rounded-full flex flex-col items-center justify-center shadow-2xl animate-float z-30 transform rotate-12 backdrop-blur-2xl">
              <span className="text-sm font-black text-cyan-400">SALE</span>
              <span className="text-6xl font-black text-white">50%</span>
              <span className="text-xs font-black text-slate-400 uppercase tracking-tighter">خصومات حصرية</span>
            </div>

            {/* Quality Tag */}
            <div className="absolute -bottom-10 -left-16 glass border-purple-500/40 p-10 rounded-[4rem] shadow-2xl animate-float z-30 backdrop-blur-3xl" style={{ animationDelay: '2s' }}>
               <div className="flex items-center gap-6">
                 <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-3xl flex items-center justify-center text-white shadow-xl">
                    <Zap size={40} fill="currentColor" />
                 </div>
                 <div>
                   <p className="text-xs text-slate-500 uppercase tracking-widest font-black">Egyptian Fabric</p>
                   <p className="text-3xl font-black text-white">قطن 100%</p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
