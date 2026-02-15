
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
import { Toaster, toast } from 'react-hot-toast';

const App: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <CartProvider>
      <div className="min-h-screen font-sans selection:bg-cyan-500 selection:text-white">
        <Toaster position="top-center" />
        <Navbar onCartOpen={() => setIsCartOpen(true)} />
        
        <Routes>
          <Route path="/" element={<Home onQuickView={setQuickViewProduct} />} />
          <Route path="/privacy" element={<PolicyPage title="سياسة الخصوصية" />} />
          <Route path="/terms" element={<PolicyPage title="الشروط والأحكام" />} />
          <Route path="/cookies" element={<PolicyPage title="سياسة الكوكيز" />} />
          <Route path="/guarantee" element={<PolicyPage title="ضمان الجودة" />} />
          <Route path="/shipping" element={<PolicyPage title="الشحن والتوصيل" />} />
          <Route path="/returns" element={<PolicyPage title="الإرجاع والاستبدال" />} />
        </Routes>

        <Footer />
        
        {isCartOpen && <CartDrawer onClose={() => setIsCartOpen(false)} />}
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
