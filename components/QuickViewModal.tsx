
import React, { useState } from 'react';
import { X, ShoppingCart, Star, Ruler } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { toast } from 'react-hot-toast';

const QuickViewModal: React.FC<{ product: Product; onClose: () => void }> = ({ product, onClose }) => {
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-md" onClick={onClose}></div>
      
      <div className="relative w-full max-w-4xl glass rounded-[2.5rem] border border-white/10 overflow-hidden shadow-2xl flex flex-col md:flex-row animate-scale-up">
        <button onClick={onClose} className="absolute top-6 right-6 z-10 p-2 glass text-white rounded-full hover:bg-white/10 transition-colors">
          <X size={24} />
        </button>

        {/* Image Section */}
        <div className="md:w-1/2 aspect-[4/5] overflow-hidden">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        </div>

        {/* Content Section */}
        <div className="md:w-1/2 p-8 lg:p-12 space-y-6 flex flex-col justify-center">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-yellow-400">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'} className={i < Math.floor(product.rating) ? '' : 'text-slate-600'} />
                ))}
              </div>
              <span className="text-xs font-bold text-slate-400">{product.rating} ({product.reviews} تقييم)</span>
            </div>
            <h2 className="text-3xl font-black text-white">{product.name}</h2>
            <div className="flex items-center gap-4">
              <span className="text-2xl font-black text-cyan-400">{product.price} ج.م</span>
              {product.oldPrice && <span className="text-lg text-slate-500 line-through">{product.oldPrice} ج.م</span>}
            </div>
          </div>

          <p className="text-slate-400 text-sm leading-relaxed">{product.description}</p>

          <div className="space-y-4">
            {/* Color Select */}
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-500">اختر اللون</label>
              <div className="flex flex-wrap gap-2">
                {product.colors.map(color => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 rounded-xl text-sm font-bold border transition-all ${selectedColor === color ? 'border-cyan-500 bg-cyan-500/10 text-cyan-400' : 'border-white/5 text-slate-400 hover:border-white/20'}`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Select */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500">اختر المقاس</label>
                <button className="flex items-center gap-1 text-xs text-cyan-400 hover:underline">
                  <Ruler size={12} />
                  دليل المقاسات
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 rounded-xl text-sm font-black border flex items-center justify-center transition-all ${selectedSize === size ? 'border-cyan-500 bg-cyan-500/10 text-cyan-400' : 'border-white/5 text-slate-400 hover:border-white/20'}`}
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
              toast.success(`تمت إضافة ${product.name} للسلة`);
            }}
            className="w-full py-5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black rounded-2xl flex items-center justify-center gap-3 transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-xl shadow-cyan-500/20"
          >
            <ShoppingCart size={22} />
            أضف إلى السلة
          </button>
          
          <p className="text-center text-[10px] text-slate-600">توصيل سريع خلال 2-3 أيام عمل لجميع أنحاء مصر</p>
        </div>
      </div>
    </div>
  );
};

export default QuickViewModal;
