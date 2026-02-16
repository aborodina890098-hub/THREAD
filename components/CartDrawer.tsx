
import React, { useState, useEffect } from 'react';
import { X, Minus, Plus, Trash2, ShoppingBag, Truck, CheckCircle2, CreditCard, MapPin, User, Phone, Sparkles, MessageSquare } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAppContext } from '../context/AppContext';
import { toast } from 'react-hot-toast';

const CartDrawer: React.FC<{ onClose: () => void, initialStep?: 'cart' | 'checkout' }> = ({ onClose, initialStep = 'cart' }) => {
  const { cart, removeFromCart, updateQuantity, subtotal, shipping, total, cartCount, clearCart } = useCart();
  const { language } = useAppContext();
  const isAr = language === 'ar';
  
  const [step, setStep] = useState<'cart' | 'checkout' | 'success'>(initialStep);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    notes: ''
  });

  // Update step if initialStep changes while open
  useEffect(() => {
    setStep(initialStep);
  }, [initialStep]);

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.address) {
      toast.error(isAr ? 'برجاء إكمال جميع البيانات الأساسية' : 'Please complete all essential fields');
      return;
    }
    setStep('success');
    clearCart();
    toast.success(isAr ? 'تم تسجيل طلبك بنجاح!' : 'Order placed successfully!');
  };

  if (step === 'success') {
    return (
      <div className="fixed inset-0 z-[60] flex justify-end">
        <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm" onClick={onClose}></div>
        <div className="relative w-full max-w-md bg-slate-950 border-r border-white/10 h-full flex flex-col items-center justify-center p-8 shadow-2xl animate-slide-left text-center overflow-hidden">
          
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
            <div className="absolute top-10 left-10 animate-bounce"><Sparkles className="text-cyan-400" /></div>
            <div className="absolute bottom-20 right-10 animate-pulse"><Sparkles className="text-purple-500" /></div>
          </div>

          <div className="w-24 h-24 bg-cyan-500/20 rounded-full flex items-center justify-center mb-6 animate-bounce">
            <CheckCircle2 size={60} className="text-cyan-500" />
          </div>
          
          <h2 className="text-3xl font-black text-white mb-4">
            {isAr ? 'شكراً لطلبك! 🎉' : 'Thanks for your order! 🎉'}
          </h2>
          
          <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 p-6 rounded-3xl border border-white/10 mb-8 relative w-full">
            <div className="absolute -top-3 -right-3 bg-yellow-400 text-slate-950 text-[10px] font-black px-2 py-1 rounded-lg animate-pulse shadow-lg">
              {isAr ? 'هدية فورية' : 'INSTANT GIFT'}
            </div>
            <p className="text-slate-300 text-sm mb-2">
              {isAr ? 'مبروك! طلبك القادم بخصم إضافي' : 'Congrats! Your next order has an extra'}
            </p>
            <div className="text-5xl font-black text-cyan-400 mb-2">10% OFF</div>
            <div className="flex justify-center gap-4 text-xs font-bold mb-4">
               <span className="text-slate-500 line-through">1000 {isAr ? 'ج.م' : 'EGP'}</span>
               <span className="text-white">900 {isAr ? 'ج.م' : 'EGP'}</span>
            </div>
            <p className="text-[10px] text-slate-400 uppercase tracking-widest">
              {isAr ? 'استخدم كود: THREAD10' : 'Use code: THREAD10'}
            </p>
          </div>

          <p className="text-slate-400 mb-8 text-sm leading-relaxed">
            {isAr 
              ? 'تم استلام بياناتك بنجاح. سنقوم بمراجعة طلبك والتواصل معك عبر الهاتف لتأكيد التفاصيل وموعد التوصيل.' 
              : 'Your data has been received successfully. We will review your order and contact you by phone to confirm details and delivery time.'}
          </p>
          
          <button onClick={onClose} className="w-full py-4 bg-white text-slate-950 font-black rounded-2xl hover:bg-cyan-500 transition-colors shadow-xl">
            {isAr ? 'العودة للمتجر' : 'Back to Store'}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[60] flex justify-end">
      <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className="relative w-full max-w-md bg-slate-950 border-r border-white/10 h-full flex flex-col shadow-2xl animate-slide-left transition-colors">
        {/* Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ShoppingBag className="text-cyan-400" />
            <h2 className="text-xl font-bold text-white">
              {step === 'cart' 
                ? (isAr ? `سلة التسوق (${cartCount})` : `Shopping Cart (${cartCount})`)
                : (isAr ? 'بيانات العميل' : 'Customer Info')}
            </h2>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-full transition-colors text-slate-400">
            <X size={24} />
          </button>
        </div>

        {step === 'cart' ? (
          <>
            {/* Shipping Banner */}
            <div className="bg-cyan-500/10 p-4 border-b border-cyan-500/20">
              <div className="flex items-center gap-3 text-cyan-400">
                <Truck size={20} />
                <span className="text-sm font-medium">
                  {shipping === 0 && subtotal > 0
                    ? (isAr ? 'مبروك! شحن مجاني مفعل 🚀' : 'Congrats! Free shipping active 🚀')
                    : (isAr ? `أضف ${500 - subtotal} ج.م للشحن المجاني` : `Add ${500 - subtotal} EGP for free shipping`)}
                </span>
              </div>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-24 h-24 rounded-full bg-white/5 flex items-center justify-center animate-pulse">
                    <ShoppingBag size={48} className="text-slate-600" />
                  </div>
                  <p className="text-slate-400 font-bold">{isAr ? 'سلتك خالية حالياً' : 'Your cart is empty'}</p>
                  <p className="text-xs text-slate-500 px-6">
                    {isAr ? 'تقدر تسجل طلبك هنا بكتابة بياناتك والمنتج اللي عاوزه مباشرة' : 'You can place a quick order by entering your details and the product you want directly'}
                  </p>
                  <button 
                    onClick={() => setStep('checkout')} 
                    className="px-10 py-4 bg-cyan-500 text-slate-950 font-black rounded-2xl hover:scale-105 transition-all shadow-lg shadow-cyan-500/20"
                  >
                    {isAr ? 'ابدأ الطلب السريع' : 'Start Quick Order'}
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={`${item.id}-${item.selectedSize}-${item.selectedColor}`} className="flex gap-4 group">
                    <div className="w-20 h-24 rounded-xl overflow-hidden bg-white/5 flex-shrink-0">
                      <img src={item.image} alt={isAr ? item.name : item.nameEn} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <h4 className="font-bold text-white text-sm line-clamp-1">{isAr ? item.name : item.nameEn}</h4>
                      <p className="text-[10px] text-slate-500 uppercase font-black">
                        {isAr ? `مقاس: ${item.selectedSize} | لون: ${item.selectedColor}` : `Size: ${item.selectedSize} | Color: ${item.selectedColor}`}
                      </p>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center gap-2 glass px-2 py-1 rounded-lg">
                          <button onClick={() => updateQuantity(item.id, item.selectedSize, item.selectedColor, -1)} className="text-slate-400"><Minus size={12} /></button>
                          <span className="text-xs font-bold text-white w-4 text-center">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, item.selectedSize, item.selectedColor, 1)} className="text-slate-400"><Plus size={12} /></button>
                        </div>
                        <div className="text-right">
                          <div className="text-xs font-black text-cyan-400">{(item.price * item.quantity)} {isAr ? 'ج.م' : 'EGP'}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="p-6 border-t border-white/10 space-y-4 bg-slate-950/50 backdrop-blur-md">
                <div className="space-y-2">
                  <div className="flex justify-between text-slate-400 text-xs">
                    <span>{isAr ? 'المجموع' : 'Subtotal'}</span>
                    <span>{subtotal} {isAr ? 'ج.م' : 'EGP'}</span>
                  </div>
                  <div className="flex justify-between text-slate-400 text-xs">
                    <span>{isAr ? 'الشحن' : 'Shipping'}</span>
                    <span>{shipping === 0 ? (isAr ? 'مجاني' : 'Free') : `${shipping} ${isAr ? 'ج.م' : 'EGP'}`}</span>
                  </div>
                  <div className="flex justify-between text-xl font-black text-white pt-2 border-t border-white/5">
                    <span>{isAr ? 'الإجمالي' : 'Total'}</span>
                    <span className="text-cyan-400">{total} {isAr ? 'ج.م' : 'EGP'}</span>
                  </div>
                </div>
                <button onClick={() => setStep('checkout')} className="w-full py-4 bg-cyan-500 text-slate-950 font-black rounded-2xl shadow-xl hover:bg-cyan-400 transition-all">
                  {isAr ? 'تأكيد البيانات والتوصيل' : 'Confirm Data & Delivery'}
                </button>
              </div>
            )}
          </>
        ) : (
          /* Checkout Form */
          <form onSubmit={handleCheckout} className="flex-1 p-6 space-y-6 flex flex-col justify-between overflow-y-auto">
            <div className="space-y-5">
              <div className="space-y-1.5">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest flex items-center gap-2">
                  <User size={12} /> {isAr ? 'الاسم بالكامل' : 'Full Name'}
                </label>
                <input 
                  type="text" 
                  required
                  placeholder={isAr ? "مثال: أحمد محمد" : "e.g. John Doe"}
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className={`w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-cyan-500 transition-all outline-none ${isAr ? 'text-right' : 'text-left'}`}
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest flex items-center gap-2">
                  <Phone size={12} /> {isAr ? 'رقم الهاتف' : 'Phone Number'}
                </label>
                <input 
                  type="tel" 
                  required
                  placeholder="010XXXXXXXX"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className={`w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-cyan-500 transition-all outline-none ${isAr ? 'text-right' : 'text-left'}`}
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest flex items-center gap-2">
                  <MapPin size={12} /> {isAr ? 'عنوان التوصيل' : 'Delivery Address'}
                </label>
                <textarea 
                  required
                  rows={2}
                  placeholder={isAr ? "المدينة، الحي، اسم الشارع، رقم المنزل" : "City, District, Street, House number"}
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                  className={`w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-cyan-500 transition-all outline-none resize-none ${isAr ? 'text-right' : 'text-left'}`}
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest flex items-center gap-2">
                  <MessageSquare size={12} /> {isAr ? 'ماذا تريد أن تشتري؟' : 'What do you want to buy?'}
                </label>
                <textarea 
                  rows={3}
                  placeholder={isAr ? "مثال: تيشيرت أوفرسايز أسود مقاس XL" : "e.g. Oversized black tee size XL"}
                  value={formData.notes}
                  onChange={(e) => setFormData({...formData, notes: e.target.value})}
                  className={`w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-cyan-500 transition-all outline-none resize-none ${isAr ? 'text-right' : 'text-left'}`}
                />
              </div>

              <div className="p-4 glass rounded-2xl border-cyan-500/20 bg-cyan-500/5">
                <div className="flex items-center gap-3 text-white font-bold mb-1 text-sm">
                  <CreditCard size={16} className="text-cyan-400" />
                  {isAr ? 'الدفع' : 'Payment'}
                </div>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-tighter">{isAr ? 'عند الاستلام (كاش)' : 'Cash on Delivery'}</p>
              </div>
            </div>

            <div className="pt-6 border-t border-white/5 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">{isAr ? 'الإجمالي' : 'Total'}</span>
                <span className="text-2xl font-black text-cyan-400">{total} {isAr ? 'ج.م' : 'EGP'}</span>
              </div>
              <div className="flex gap-3">
                <button type="button" onClick={() => setStep('cart')} className="flex-1 py-4 glass text-white font-bold rounded-2xl hover:bg-white/5 transition-all text-sm">
                  {isAr ? 'رجوع' : 'Back'}
                </button>
                <button type="submit" className="flex-[2.5] py-4 bg-cyan-500 text-slate-950 font-black rounded-2xl shadow-xl hover:bg-cyan-400 transition-all text-sm">
                  {isAr ? 'تأكيد وإتمام الطلب' : 'Confirm Order'}
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;
