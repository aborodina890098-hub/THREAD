
import React from 'react';
import { HelpCircle, MessageCircle, Sparkles, ShieldCheck, Truck, CreditCard, RotateCcw } from 'lucide-react';
import { siteData } from '../content/siteData';

const FAQSection: React.FC = () => {
  const icons = [
    <Sparkles className="text-cyan-400" size={32} />,
    <Truck className="text-purple-400" size={32} />,
    <ShieldCheck className="text-cyan-400" size={32} />,
    <RotateCcw className="text-purple-400" size={32} />,
    <CreditCard className="text-cyan-400" size={32} />,
    <HelpCircle className="text-purple-400" size={32} />
  ];

  return (
    <section className="py-32 px-4 max-w-7xl mx-auto space-y-24">
      <div className="text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-sm font-black tracking-widest uppercase">
          <HelpCircle size={16} />
          Customer Support Center
        </div>
        <h2 className="text-6xl lg:text-8xl font-black text-white tracking-tighter uppercase italic leading-none">
          إجابات تهمك <span className="text-cyan-500">؟</span>
        </h2>
        <p className="text-slate-400 text-xl max-w-2xl mx-auto font-medium">كل ما يدور في ذهنك حول تجربتك مع THREAD.. وضوح تام من البداية.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {siteData.faqs.map((faq, i) => (
          <div key={i} className="glass p-10 rounded-[3rem] border-white/5 hover:border-cyan-500/30 transition-all group relative overflow-hidden flex flex-col justify-between hover:-translate-y-2 duration-500">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 blur-3xl group-hover:bg-cyan-500/10 transition-all"></div>
            <div className="space-y-6">
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                {icons[i % icons.length]}
              </div>
              <h3 className="text-2xl font-black text-white leading-tight">{faq.question}</h3>
              <p className="text-slate-400 leading-relaxed font-medium">{faq.answer}</p>
            </div>
            <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between opacity-50 group-hover:opacity-100 transition-opacity">
               <span className="text-xs font-black text-cyan-400 uppercase tracking-widest">Read More</span>
               <span className="text-xl">←</span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-cyan-500/20 p-[1px] rounded-[4rem] group overflow-hidden">
        <div className="bg-slate-950 p-12 md:p-20 rounded-[4rem] text-center space-y-10 relative overflow-hidden">
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-cyan-500/20 blur-[100px] animate-pulse"></div>
          <div className="space-y-4 relative z-10">
            <h3 className="text-4xl md:text-5xl font-black text-white leading-tight">سؤالك مش موجود هنا؟</h3>
            <p className="text-xl text-slate-400 font-medium">لا تقلق، فريقنا متواجد للرد عليك في أي وقت.</p>
          </div>
          <a 
            href="https://wa.me/201000000000" 
            target="_blank" 
            className="inline-flex items-center gap-6 px-16 py-8 bg-white text-slate-950 font-black rounded-[2.5rem] hover:bg-cyan-500 transition-all text-2xl shadow-2xl relative z-10 group/btn"
          >
            <MessageCircle size={32} className="group-hover/btn:scale-125 transition-transform" fill="currentColor" />
            كلمنا على واتساب
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
