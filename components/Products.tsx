
import React, { useState } from 'react';
import { ShoppingCart, Eye, Star, ShoppingBag, Percent } from 'lucide-react';
import { Product } from '../types';
import { siteData } from '../content/siteData';
import { useCart } from '../context/CartContext';
import { useAppContext } from '../context/AppContext';
import { toast } from 'react-hot-toast';

const ProductCard: React.FC<{ product: Product; onQuickView: (p: Product) => void }> = ({ product, onQuickView }) => {
  const { addToCart } = useCart();
  const { language } = useAppContext();
  const isAr = language === 'ar';
  const [imgLoaded, setImgLoaded] = useState(false);

  const discountPercent = product.oldPrice 
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100) 
    : 0;

  return (
    <div className="group relative glass rounded-[2rem] border border-white/5 overflow-hidden transition-all hover:border-cyan-500/50 hover:shadow-[0_0_40px_rgba(34,211,238,0.1)] flex flex-col h-full bg-slate-900/40">
      <div className="relative aspect-[4/5] overflow-hidden bg-slate-950">
        
        {/* Placeholder */}
        <div className={`absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-cyan-500/10 flex flex-col items-center justify-center transition-opacity duration-500 ${imgLoaded ? 'opacity-0' : 'opacity-100'}`}>
          <ShoppingBag size={48} className="text-white/10 mb-2" />
          <span className="text-[10px] font-black text-white/5 uppercase tracking-[0.3em]">THREAD COLLECTION</span>
        </div>

        {/* Product Image */}
        <img 
          src={product.image} 
          alt={isAr ? product.name : product.nameEn} 
          onLoad={() => setImgLoaded(true)}
          className={`w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 ${imgLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
          loading="eager"
        />

        {/* Quick Actions */}
        <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-end gap-3 p-4 backdrop-blur-[2px] z-30">
          <button 
            onClick={() => onQuickView(product)}
            className="w-full py-3 glass text-white rounded-xl flex items-center justify-center gap-2 hover:bg-white/10 transition-all font-bold text-sm"
          >
            <Eye size={18} />
            {isAr ? 'معاينة' : 'Quick View'}
          </button>
          <button 
            onClick={() => {
              addToCart(product, product.sizes[0], product.colors[0]);
              toast.success(isAr ? `تمت إضافة ${product.name} لسلة` : `Added ${product.nameEn} to cart`);
            }}
            className="w-full py-3 bg-cyan-500 text-slate-950 rounded-xl flex items-center justify-center gap-2 hover:bg-cyan-400 transition-all font-black text-sm"
          >
            <ShoppingCart size={18} />
            {isAr ? 'أضف للسلة' : 'Add to Cart'}
          </button>
        </div>

        {/* Discount Badge */}
        {discountPercent > 0 && (
          <div className="absolute top-4 left-4 bg-cyan-500 text-slate-950 text-[10px] font-black px-3 py-1 rounded-full flex items-center gap-1 z-20 shadow-xl">
            <Percent size={10} strokeWidth={4} />
            {discountPercent}% {isAr ? 'خصم' : 'OFF'}
          </div>
        )}

        {/* Status Badge */}
        {(isAr ? product.badge : product.badgeEn) && (
          <div className="absolute top-4 right-4 bg-white text-slate-950 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter z-20 shadow-xl">
            {isAr ? product.badge : product.badgeEn}
          </div>
        )}
      </div>

      {/* Details */}
      <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
        <div className="space-y-1">
          <div className="flex items-center gap-1 text-yellow-400 text-[10px] font-bold">
            <Star size={12} fill="currentColor" />
            <span>{product.rating}</span>
            <span className="text-slate-500 font-medium">({product.reviews})</span>
          </div>
          <h3 className="font-bold text-lg text-white group-hover:text-cyan-400 transition-colors line-clamp-1">
            {isAr ? product.name : product.nameEn}
          </h3>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="flex flex-col">
            {product.oldPrice && (
              <span className="text-xs text-slate-500 line-through leading-none mb-1">
                {product.oldPrice} {isAr ? 'ج.م' : 'EGP'}
              </span>
            )}
            <span className="text-xl font-black text-white leading-none">
              {product.price} {isAr ? 'ج.م' : 'EGP'}
            </span>
          </div>
          {discountPercent > 0 && (
            <div className="text-[10px] font-black text-cyan-400 uppercase tracking-widest border border-cyan-500/30 px-2 py-0.5 rounded">
              {isAr ? 'توفير كبير' : 'BIG SAVING'}
            </div>
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
  const { language } = useAppContext();
  const isAr = language === 'ar';

  return (
    <section id={id} className="py-20 px-4 max-w-7xl mx-auto scroll-mt-24">
      <div className="flex items-center justify-between mb-12 border-b border-white/5 pb-6">
        <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase italic">{title}</h2>
        <button className="text-cyan-400 font-bold hover:underline">{isAr ? 'عرض الكل' : 'View All'}</button>
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
  const { language } = useAppContext();
  const isAr = language === 'ar';

  return (
    <div id="products">
      <div className="text-center py-16 px-4 bg-gradient-to-b from-brand-black to-slate-900/20">
        <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-4">
          {isAr ? 'أحدث إصدارات الموضة ✨' : 'Latest Fashion Drops ✨'}
        </h2>
        <p className="text-slate-400 text-xl max-w-2xl mx-auto italic font-medium">
          {isAr ? 'كوليكشن 2024 لكل العيلة.. اختار ستايلك اللي بيعبر عنك.' : '2024 Collection for everyone.. choose the style that defines you.'}
        </p>
      </div>
      
      <ProductSection title={isAr ? 'القسم الرجالي' : 'Men\'s Collection'} id="men-section" category="men" onQuickView={onQuickView} />
      <ProductSection title={isAr ? 'القسم النسائي' : 'Women\'s Collection'} id="women-section" category="women" onQuickView={onQuickView} />
      <ProductSection title={isAr ? 'قسم الأطفال' : 'Kids\' Collection'} id="kids-section" category="kids" onQuickView={onQuickView} />
    </div>
  );
};

export default ProductGrid;
