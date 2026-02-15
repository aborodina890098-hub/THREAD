
import React from 'react';
import { X, Minus, Plus, Trash2, ShoppingBag, Truck } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartDrawer: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const { cart, removeFromCart, updateQuantity, subtotal, shipping, total, cartCount } = useCart();

  return (
    <div className="fixed inset-0 z-[60] flex justify-end">
      <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className="relative w-full max-w-md bg-slate-950 border-r border-white/10 h-full flex flex-col shadow-2xl animate-slide-left">
        {/* Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ShoppingBag className="text-cyan-400" />
            <h2 className="text-xl font-bold text-white">سلة التسوق ({cartCount})</h2>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-full transition-colors text-slate-400">
            <X size={24} />
          </button>
        </div>

        {/* Shipping Banner */}
        <div className="bg-cyan-500/10 p-4 border-b border-cyan-500/20">
          <div className="flex items-center gap-3 text-cyan-400">
            <Truck size={20} />
            <span className="text-sm font-medium">
              {shipping === 0 
                ? 'مبروك! طلبك مؤهل للشحن المجاني 🚀' 
                : `باقيلك ${500 - subtotal} ج.م على الشحن المجاني!`}
            </span>
          </div>
          {shipping > 0 && (
            <div className="mt-2 h-1 w-full bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full bg-cyan-500 transition-all duration-500" style={{ width: `${(subtotal/500)*100}%` }}></div>
            </div>
          )}
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
              <div className="w-24 h-24 rounded-full bg-white/5 flex items-center justify-center">
                <ShoppingBag size={48} className="text-slate-600" />
              </div>
              <p className="text-slate-400 font-medium">سلتك فاضية حالياً...</p>
              <button onClick={onClose} className="px-8 py-3 bg-cyan-500 text-slate-950 font-bold rounded-xl">
                ابدأ التسوق
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div key={`${item.id}-${item.selectedSize}-${item.selectedColor}`} className="flex gap-4 group">
                <div className="w-24 h-32 rounded-xl overflow-hidden bg-white/5 flex-shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 space-y-1">
                  <h4 className="font-bold text-white line-clamp-1">{item.name}</h4>
                  <p className="text-xs text-slate-400">المقاس: {item.selectedSize} | اللون: {item.selectedColor}</p>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-3 glass px-3 py-1 rounded-lg border-white/5">
                      <button onClick={() => updateQuantity(item.id, item.selectedSize, item.selectedColor, -1)} className="text-slate-400 hover:text-white transition-colors">
                        <Minus size={14} />
                      </button>
                      <span className="text-sm font-bold w-4 text-center text-white">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.selectedSize, item.selectedColor, 1)} className="text-slate-400 hover:text-white transition-colors">
                        <Plus size={14} />
                      </button>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-cyan-400">{item.price * item.quantity} ج.م</span>
                      <button onClick={() => removeFromCart(item.id, item.selectedSize, item.selectedColor)} className="text-slate-600 hover:text-red-400 transition-colors">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="p-6 border-t border-white/10 space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-slate-400">
                <span>المجموع الفرعي</span>
                <span>{subtotal} ج.م</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>مصاريف الشحن</span>
                <span>{shipping === 0 ? 'مجاني' : `${shipping} ج.م`}</span>
              </div>
              <div className="flex justify-between text-xl font-black text-white pt-2 border-t border-white/5">
                <span>الإجمالي</span>
                <span className="text-cyan-400">{total} ج.م</span>
              </div>
            </div>
            <button className="w-full py-4 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black rounded-2xl shadow-lg shadow-cyan-500/20 transition-all">
              إتمام الطلب
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;
