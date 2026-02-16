
import React from 'react';
import { ArrowLeft, ArrowRight, Zap } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const Hero: React.FC<{ onQuickOrder: () => void }> = ({ onQuickOrder }) => {
  const { language } = useAppContext();
  const isAr = language === 'ar';

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-24 px-4 dark:bg-brand-black bg-slate-50">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[35vw] font-black dark:text-white/[0.04] text-black/[0.02] select-none pointer-events-none font-outfit tracking-tighter uppercase italic">
        THREAD
      </div>

      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-[180px]"></div>
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-[180px]"></div>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">
        <div className={`space-y-12 order-2 lg:order-1 ${isAr ? 'text-right' : 'text-left'}`}>
          <div className="inline-flex items-center gap-3 px-8 py-3 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-500 text-sm font-black tracking-widest uppercase animate-fade-in shadow-[0_0_20px_rgba(34,211,238,0.2)]">
            < Zap size={18} fill="currentColor" />
            {isAr ? 'خصومات حصرية • موسم 2024' : 'EXCLUSIVE OFFERS • SEASON 2024'}
          </div>
          
          <div className="space-y-6">
            <h1 className="text-7xl lg:text-[11rem] font-black leading-[0.8] dark:text-white text-slate-900 tracking-tighter uppercase font-outfit italic">
              THRE<span className="text-cyan-500/40 text-outline">AD</span>
            </h1>
            <p className="text-3xl lg:text-5xl font-black dark:text-white text-slate-900 leading-tight">
              {isAr ? (
                <>ألبس اللي <br/> <span className="text-transparent bg-clip-text bg-gradient-to-l from-cyan-400 to-purple-500 underline decoration-cyan-500/20 underline-offset-8">بيحكي قصتك.</span></>
              ) : (
                <>Wear What <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 underline decoration-cyan-500/20 underline-offset-8">Tells Your Story.</span></>
              )}
            </p>
            <p className="text-xl lg:text-2xl dark:text-slate-400 text-slate-600 font-medium max-w-xl">
               {isAr 
                ? 'أكبر براند ستريت وير في مصر. خامات فخمة وتصاميم حصرية بخصومات تصل لـ '
                : 'The biggest streetwear brand in Egypt. Premium fabrics and exclusive designs with discounts up to '}
               <span className="dark:text-white text-slate-900 font-black px-2 bg-cyan-500/40 rounded">50%</span> 
               {isAr ? ' لفترة محدودة.' : ' for a limited time.'}
            </p>
          </div>
          
          <div className={`flex flex-col sm:flex-row gap-6 ${isAr ? 'justify-start' : 'justify-start'}`}>
            <button 
              onClick={onQuickOrder}
              className="px-12 py-6 bg-cyan-500 hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-950 text-slate-950 font-black text-xl rounded-2xl flex items-center justify-center gap-4 transition-all transform hover:scale-105 active:scale-95 shadow-[0_20px_40px_rgba(34,211,238,0.3)] group"
            >
              {isAr ? 'اطلب معنا' : 'Order with Us'}
              {isAr ? <ArrowLeft size={24} className="group-hover:translate-x-[-8px] transition-transform" /> : <ArrowRight size={24} className="group-hover:translate-x-[8px] transition-transform" />}
            </button>
          </div>
        </div>

        <div className="order-1 lg:order-2 relative perspective-1000 group">
          <div className="relative w-full aspect-[4/5] max-w-md mx-auto">
            <div className="absolute inset-0 rounded-[4rem] overflow-hidden border border-white/20 shadow-2xl transform rotate-x-10 rotate-y--10 group-hover:rotate-0 transition-all duration-1000 ease-out z-20">
              <img 
                src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1200&q=80" 
                alt="Thread Collection" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute -top-10 -right-10 w-36 h-36 glass border-cyan-500/50 rounded-full flex flex-col items-center justify-center shadow-2xl animate-float z-30 transform rotate-12 backdrop-blur-2xl">
              <span className="text-xs font-black text-cyan-500">SALE</span>
              <span className="text-5xl font-black dark:text-white text-slate-900">50%</span>
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-tighter">{isAr ? 'خصم حصري' : 'Exclusive'}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
