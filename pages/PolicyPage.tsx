
import React from 'react';
import { useAppContext } from '../context/AppContext';

const PolicyPage: React.FC<{ title: string; titleEn: string }> = ({ title, titleEn }) => {
  const { language } = useAppContext();
  const isAr = language === 'ar';

  const content = isAr ? {
    intro: 'هذا النص هو مثال للسياسة. نحن في THREAD نلتزم بأعلى معايير الشفافية مع عملائنا لضمان تجربة تسوق آمنة ومميزة.',
    secTitle1: '1. مقدمة',
    secTitle2: '2. البنود الأساسية',
    secBody2: 'تخضع جميع التعاملات على متجرنا لهذه السياسة. نحن نحرص على تقديم معلومات دقيقة وتحديث سياساتنا باستمرار لمواكبة التطورات وتوفير أفضل حماية لك.',
    list: ['الالتزام التام بالقوانين المحلية.', 'حماية بيانات العميل هي أولويتنا القصوى.', 'التعامل بوضوح فيما يخص الأسعار والرسوم.'],
    secTitle3: '3. اتصل بنا',
    secBody3: 'إذا كان لديك أي استفسار، لا تتردد في التواصل معنا عبر قنوات الدعم المتاحة.'
  } : {
    intro: 'This is a sample policy text. At THREAD, we are committed to the highest standards of transparency to ensure a secure and distinctive shopping experience.',
    secTitle1: '1. Introduction',
    secTitle2: '2. Key Terms',
    secBody2: 'All transactions on our store are subject to this policy. We strive to provide accurate information and continuously update our policies to keep pace with developments.',
    list: ['Full compliance with local laws.', 'Customer data protection is our top priority.', 'Transparency regarding prices and fees.'],
    secTitle3: '3. Contact Us',
    secBody3: 'If you have any questions, feel free to reach out to us through our support channels.'
  };

  return (
    <div className={`pt-32 pb-24 px-4 max-w-4xl mx-auto ${isAr ? 'text-right' : 'text-left'}`}>
      <h1 className="text-4xl font-black dark:text-white text-slate-900 mb-12 transition-colors">{isAr ? title : titleEn}</h1>
      <div className="glass p-8 lg:p-12 rounded-3xl border border-white/5 space-y-8 text-slate-500 leading-relaxed dark:bg-slate-900/40 bg-white/50 transition-colors">
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-cyan-500">{content.secTitle1}</h2>
          <p>{content.intro}</p>
        </section>
        
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-cyan-500">{content.secTitle2}</h2>
          <p>{content.secBody2}</p>
          <ul className={`list-disc ${isAr ? 'pr-6' : 'pl-6'} space-y-2`}>
            {content.list.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-cyan-500">{content.secTitle3}</h2>
          <p>{content.secBody3}</p>
        </section>
      </div>
    </div>
  );
};

export default PolicyPage;
