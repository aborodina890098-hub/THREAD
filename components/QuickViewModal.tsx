
import React, { useState } from 'react';
import { X, ShoppingCart, Star, Ruler } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { useAppContext } from '../context/AppContext';
import { toast } from 'react-hot-toast';

const QuickViewModal: React.FC<{ product: Product; onClose: () => void }> = ({ product, onClose }) => {
  const { addToCart } = useCart();
  const { language } = useAppContext();
  const isAr = language === 'ar';
  
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-md" onClick={onClose}></div>
      
      <div className={`relative w-full max-w-4xl glass rounded-[2.5rem] border border-white/10 overflow-hidden shadow-2xl flex flex-col md:flex-row animate-scale-up dark:bg-slate-900 bg-white transition-colors ${isAr ? 'text-right' : 'text-left'}`}>
        <button onClick={onClose} className={`absolute top-6 ${isAr ? 'right-6' : 'left-6'} z-10 p-2 glass dark:text-white text-slate-900 rounded-full hover:bg-black/10 transition-colors`}>
          <X size={24} />
        </button>

        {/* Image Section */}
        <div className="md:w-1/2 aspect-[4/5] overflow-hidden">
          <img src={product.image} alt={isAr ? product.name : product.nameEn} className="w-full h-full object-cover" />
        </div>

        {/* Content Section */}
        <div className="md:w-1/2 p-8 lg:p-12 space-y-6 flex flex-col justify-center">
          <div className="space-y-2">
            <div className={`flex items-center gap-2 text-yellow-400 ${isAr ? '' : 'flex-row-reverse justify-end'}`}>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'} className={i < Math.floor(product.rating) ? '' : 'text-slate-600'} />
                ))}
              </div>
              <span className="text-xs font-bold text-slate-500">{product.rating} ({product.reviews} {isAr ? 'تقييم' : 'Reviews'})</span>
            </div>
            <h2 className="text-3xl font-black dark:text-white text-slate-900 transition-colors">{isAr ? product.name : product.nameEn}</h2>
            <div className={`flex items-center gap-4 ${isAr ? '' : 'flex-row-reverse justify-end'}`}>
              <span className="text-2xl font-black text-cyan-500">{product.price} {isAr ? 'ج.م' : 'EGP'}</span>
              {product.oldPrice && <span className="text-lg text-slate-400 line-through">{product.oldPrice} {isAr ? 'ج.م' : 'EGP'}</span>}
            </div>
          </div>

          <p className="text-slate-500 text-sm leading-relaxed">{isAr ? product.description : product.descriptionEn}</p>

          <div className="space-y-4">
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-400">{isAr ? 'اختر اللون' : 'Select Color'}</label>
              <div className={`flex flex-wrap gap-2 ${isAr ? '' : 'flex-row-reverse justify-end'}`}>
                {product.colors.map(color => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 rounded-xl text-sm font-bold border transition-all ${selectedColor === color ? 'border-cyan-500 bg-cyan-500/10 text-cyan-500' : 'border-black/5 dark:border-white/5 text-slate-500 hover:border-cyan-500/50'}`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <div className={`flex items-center justify-between ${isAr ? '' : 'flex-row-reverse'}`}>
                <label className="text-xs font-bold uppercase tracking-widest text-slate-400">{isAr ? 'اختر المقاس' : 'Select Size'}</label>
                <button className="flex items-center gap-1 text-xs text-cyan-500 hover:underline">
                  <Ruler size={12} />
                  {isAr ? 'دليل المقاسات' : 'Size Guide'}
                </button>
              </div>
              <div className={`flex flex-wrap gap-2 ${isAr ? '' : 'flex-row-reverse justify-end'}`}>
                {product.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 rounded-xl text-sm font-black border flex items-center justify-center transition-all ${selectedSize === size ? 'border-cyan-500 bg-cyan-500/10 text-cyan-500' : 'border-black/5 dark:border-white/5 text-slate-500 hover:border-cyan-500/50'}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <button 
            onClick={() => {
              addToCart(product, selectedSize, selectedColor);
              toast.success(isAr ? `تمت إضافة ${product.name} للسلة` : `Added ${product.nameEn} to cart`);
            }}
            className="w-full py-5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black rounded-2xl flex items-center justify-center gap-3 transition-all shadow-xl shadow-cyan-500/20"
          >
            <ShoppingCart size={22} />
            {isAr ? 'أضف إلى السلة' : 'Add to Cart'}
          </button>
          
          <p className="text-center text-[10px] text-slate-500">
            {isAr ? 'توصيل سريع خلال 2-3 أيام عمل لجميع أنحاء مصر' : 'Fast delivery within 2-3 business days across Egypt'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuickViewModal;
