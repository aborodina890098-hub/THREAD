
import React from 'react';

const PolicyPage: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className="pt-32 pb-24 px-4 max-w-4xl mx-auto">
      <h1 className="text-4xl font-black text-white mb-12">{title}</h1>
      <div className="glass p-8 lg:p-12 rounded-3xl border border-white/5 space-y-8 text-slate-300 leading-relaxed">
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-cyan-400">1. مقدمة</h2>
          <p>هذا النص هو مثال لسياسة {title}. نحن في THREAD نلتزم بأعلى معايير الشفافية مع عملائنا لضمان تجربة تسوق آمنة ومميزة.</p>
        </section>
        
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-cyan-400">2. البنود الأساسية</h2>
          <p>تخضع جميع التعاملات على متجرنا لهذه السياسة. نحن نحرص على تقديم معلومات دقيقة وتحديث سياساتنا باستمرار لمواكبة التطورات وتوفير أفضل حماية لك.</p>
          <ul className="list-disc pr-6 space-y-2">
            <li>الالتزام التام بالقوانين المحلية.</li>
            <li>حماية بيانات العميل هي أولويتنا القصوى.</li>
            <li>التعامل بوضوح فيما يخص الأسعار والرسوم.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-cyan-400">3. اتصل بنا</h2>
          <p>إذا كان لديك أي استفسار بخصوص {title}، لا تتردد في التواصل معنا عبر قنوات الدعم المتاحة.</p>
        </section>
      </div>
    </div>
  );
};

export default PolicyPage;
