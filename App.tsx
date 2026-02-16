
import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import PolicyPage from './pages/PolicyPage';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import QuickViewModal from './components/QuickViewModal';
import { Product } from './types';
import { Toaster } from 'react-hot-toast';

const App: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartInitialStep, setCartInitialStep] = useState<'cart' | 'checkout'>('cart');
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const handleOpenCart = (step: 'cart' | 'checkout' = 'cart') => {
    setCartInitialStep(step);
    setIsCartOpen(true);
  };

  return (
    <CartProvider>
      <div className="min-h-screen font-sans selection:bg-cyan-500 selection:text-white transition-colors">
        <Toaster position="top-center" />
        <Navbar onCartOpen={() => handleOpenCart('cart')} />
        
        <Routes>
          <Route path="/" element={<Home onQuickView={setQuickViewProduct} onQuickOrder={() => handleOpenCart('checkout')} />} />
          <Route path="/privacy" element={<PolicyPage title="سياسة الخصوصية" titleEn="Privacy Policy" />} />
          <Route path="/terms" element={<PolicyPage title="الشروط والأحكام" titleEn="Terms & Conditions" />} />
          <Route path="/cookies" element={<PolicyPage title="سياسة الكوكيز" titleEn="Cookie Policy" />} />
          <Route path="/guarantee" element={<PolicyPage title="ضمان الجودة" titleEn="Quality Guarantee" />} />
          <Route path="/shipping" element={<PolicyPage title="الشحن والتوصيل" titleEn="Shipping & Delivery" />} />
          <Route path="/returns" element={<PolicyPage title="الإرجاع والاستبدال" titleEn="Returns & Exchange" />} />
        </Routes>

        <Footer />
        
        {isCartOpen && (
          <CartDrawer 
            onClose={() => setIsCartOpen(false)} 
            initialStep={cartInitialStep}
          />
        )}
        {quickViewProduct && (
          <QuickViewModal 
            product={quickViewProduct} 
            onClose={() => setQuickViewProduct(null)} 
          />
        )}
      </div>
    </CartProvider>
  );
};

export default App;
