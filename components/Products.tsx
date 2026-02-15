
import React, { useState } from 'react';
import { ShoppingCart, Eye, Star } from 'lucide-react';
import { Product } from '../types';
import { siteData } from '../content/siteData';
import { useCart } from '../context/CartContext';
import { toast } from 'react-hot-toast';

const ProductCard: React.FC<{ product: Product; onQuickView: (p: Product) => void }> = ({ product, onQuickView }) => {
  const { addToCart } = useCart();
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <div className="group relative glass rounded-[2rem] border border-white/5 overflow-hidden transition-all hover:border-cyan-500/50 hover:shadow-[0_0_40px_rgba(34,211,238,0.1)] flex flex-col h-full bg-slate-900/40">
      <div className="relative aspect-[4/5] overflow-hidden bg-slate-950">
        {!imgLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 border-4 border-cyan-500/20 border-t-cyan-500 rounded-full animate-spin"></div>
          </div>
        )}
        <img 
          src={product.image} 
          alt={product.name} 
          onLoad={() => setImgLoaded(true)}
          className={`w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
          loading="lazy" 
        />
        
        {product.badge && (
          <div className="absolute top-4 right-4 bg-white text-slate-950 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter z-10 shadow-xl">
            {product.badge}
          </div>
        )}

        <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-end gap-3 p-4 backdrop-blur-[2px]">
          <button 
            onClick={() => onQuickView(product)}
            className="w-full py-3 glass text-white rounded-xl flex items-center justify-center gap-2 hover:bg-white/10 transition-all font-bold text-sm"
          >
            <Eye size={18} />
            معاينة
          </button>
          <button 
            onClick={() => {
              addToCart(product, product.sizes[0], product.colors[0]);
              toast.success(`تمت إضافة ${product.name} لسلة`);
            }}
            className="w-full py-3 bg-cyan-500 text-slate-950 rounded-xl flex items-center justify-center gap-2 hover:bg-cyan-400 transition-all font-black text-sm"
          >
            <ShoppingCart size={18} />
            أضف للسلة
          </button>
        </div>
      </div>

      <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
        <div className="space-y-1">
          <div className="flex items-center gap-1 text-yellow-400 text-[10px] font-bold">
            <Star size={12} fill="currentColor" />
            <span>{product.rating}</span>
            <span className="text-slate-500 font-medium">({product.reviews})</span>
          </div>
          <h3 className="font-bold text-lg text-white group-hover:text-cyan-400 transition-colors line-clamp-1">{product.name}</h3>
        </div>
        
        <div className="flex items-center gap-2">
          <span className="text-xl font-black text-white">{product.price} ج.م</span>
          {product.oldPrice && (
            <span className="text-xs text-slate-500 line-through">{product.oldPrice} ج.م</span>
          )}
        </div>
      </div>
    </div>
  );
};

interface SectionProps {
  title: string;
  id: string;
  category: string;
  onQuickView: (p: Product) => void;
}

const ProductSection: React.FC<SectionProps> = ({ title, id, category, onQuickView }) => {
  const filteredProducts = siteData.products.filter(p => p.category === category);

  return (
    <section id={id} className="py-20 px-4 max-w-7xl mx-auto scroll-mt-24">
      <div className="flex items-center justify-between mb-12 border-b border-white/5 pb-6">
        <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase italic">{title}</h2>
        <button className="text-cyan-400 font-bold hover:underline">عرض الكل</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} onQuickView={onQuickView} />
        ))}
      </div>
    </section>
  );
};

const ProductGrid: React.FC<{ onQuickView: (p: Product) => void }> = ({ onQuickView }) => {
  return (
    <div id="products">
      <div className="text-center py-16 px-4 bg-gradient-to-b from-brand-black to-slate-900/20">
        <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-4">أحدث إصدارات الموضة ✨</h2>
        <p className="text-slate-400 text-xl max-w-2xl mx-auto italic font-medium">كوليكشن 2024 لكل العيلة.. اختار ستايلك اللي بيعبر عنك.</p>
      </div>
      
      <ProductSection title="القسم الرجالي" id="men-section" category="men" onQuickView={onQuickView} />
      <ProductSection title="القسم النسائي" id="women-section" category="women" onQuickView={onQuickView} />
      <ProductSection title="قسم الأطفال" id="kids-section" category="kids" onQuickView={onQuickView} />
    </div>
  );
};

export default ProductGrid;
