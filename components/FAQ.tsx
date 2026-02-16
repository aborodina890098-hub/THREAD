
import React from 'react';
import { HelpCircle, MessageCircle, Sparkles, ShieldCheck, Truck, CreditCard, RotateCcw, Info } from 'lucide-react';
import { siteData } from '../content/siteData';
import { useAppContext } from '../context/AppContext';

const FAQSection: React.FC = () => {
  const { language } = useAppContext();
  const isAr = language === 'ar';

  const icons = [
    <Sparkles className="text-cyan-400" size={32} />,
    <Info className="text-purple-400" size={32} />,
    <Truck className="text-cyan-400" size={32} />,
    <ShieldCheck className="text-purple-400" size={32} />,
    <RotateCcw className="text-cyan-400" size={32} />,
    <HelpCircle className="text-purple-400" size={32} />
  ];

  return (
    <section className="py-32 px-4 max-w-7xl mx-auto space-y-24 transition-colors relative">
      {/* Decorative 3D Elements for FAQ Section */}
      <div className="absolute -top-10 -right-20 w-40 h-40 floating-glass-sphere opacity-20 blur-md animate-float"></div>
      <div className="absolute bottom-20 -left-10 w-24 h-24 floating-glass-sphere opacity-30 animate-float-reverse"></div>

      <div className="text-center space-y-6 relative z-10">
        <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-black tracking-widest uppercase">
          <HelpCircle size={16} />
          {isAr ? 'مركز دعم العملاء' : 'Customer Support Center'}
        </div>
        <h2 className="text-6xl lg:text-8xl font-black dark:text-white text-slate-900 tracking-tighter uppercase italic leading-none transition-colors drop-shadow-2xl">
          {isAr ? 'إجابات تهمك' : 'Got Questions?'} <span className="text-cyan-500">{isAr ? '؟' : '?'}</span>
        </h2>
        <p className="text-slate-400 text-xl max-w-2xl mx-auto font-medium">
          {isAr 
            ? 'كل ما يدور في ذهنك حول تجربتك مع THREAD.. وضوح تام من البداية لتسوق بدون قلق.' 
            : 'Everything you need to know about your THREAD experience.. full clarity from the start for worry-free shopping.'}
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {siteData.faqs.map((faq, i) => (
          <div key={i} className="glass p-10 rounded-[3rem] border-white/5 card-3d-hover hover:border-cyan-500/30 transition-all group relative overflow-hidden flex flex-col justify-between duration-500 dark:bg-slate-900/40 bg-white/60">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 blur-3xl group-hover:bg-cyan-500/10 transition-all"></div>
            <div className="space-y-6">
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:scale-110 group-hover:rotate-3 transition-transform shadow-lg">
                {icons[i % icons.length]}
              </div>
              <h3 className="text-2xl font-black dark:text-white text-slate-900 leading-tight transition-colors">
                {isAr ? faq.question : faq.questionEn}
              </h3>
              <p className="text-slate-400 leading-relaxed font-medium">
                {isAr ? faq.answer : faq.answerEn}
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between opacity-50 group-hover:opacity-100 transition-opacity">
               <span className="text-xs font-black text-cyan-400 uppercase tracking-widest">{isAr ? 'اقرأ المزيد' : 'Read More'}</span>
               <span className={`text-xl ${isAr ? '' : 'rotate-180'}`}>←</span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-cyan-500/20 p-[1px] rounded-[4rem] group overflow-hidden relative z-10">
        <div className="dark:bg-slate-950 bg-white p-12 md:p-20 rounded-[4rem] text-center space-y-10 relative overflow-hidden transition-colors">
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-cyan-500/20 blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-[-10%] right-[-5%] w-32 h-32 floating-glass-sphere opacity-40 animate-float"></div>
          
          <div className="space-y-4 relative z-10">
            <h3 className="text-4xl md:text-5xl font-black dark:text-white text-slate-900 leading-tight transition-colors">
              {isAr ? 'سؤالك لسه محتاج إجابة؟' : 'Question still needs an answer?'}
            </h3>
            <p className="text-xl text-slate-400 font-medium">
              {isAr ? 'فريقنا جاهز يساعدك فوراً. تواصل معنا عبر الواتساب واعرف كل اللي عاوزه.' : "Our team is ready to help you instantly. Contact us on WhatsApp and ask away."}
            </p>
          </div>
          <a 
            href="https://wa.me/201021466271" 
            target="_blank" 
            className="inline-flex items-center gap-6 px-16 py-8 dark:bg-white dark:text-slate-950 bg-slate-950 text-white hover:bg-cyan-500 hover:text-slate-950 transition-all text-2xl shadow-[0_20px_50px_rgba(34,211,238,0.2)] relative z-10 group/btn rounded-[2.5rem] font-black uppercase tracking-tight"
          >
            <MessageCircle size={32} className="group-hover/btn:scale-125 transition-transform" fill="currentColor" />
            {isAr ? 'كلمنا على واتساب' : 'Chat on WhatsApp'}
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
