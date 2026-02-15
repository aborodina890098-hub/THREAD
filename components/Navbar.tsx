
import React, { useState } from 'react';
import { ShoppingBag, Search, User, Menu, X, ChevronDown } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Navbar: React.FC<{ onCartOpen: () => void }> = ({ onCartOpen }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartCount } = useCart();

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Account for sticky nav
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const categories = [
    { name: 'رجالي', id: 'men-section' },
    { name: 'نسائي', id: 'women-section' },
    { name: 'أطفالي', id: 'kids-section' },
    { name: 'الأسئلة الشائعة', id: 'faq' }
  ];

  return (
    <nav className="sticky top-0 z-50 glass border-b border-white/10 w-full transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 h-20 flex items-center justify-between">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden text-slate-200 p-2">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-3xl font-bold tracking-tighter text-white group flex items-center gap-1">
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent uppercase font-outfit">THREAD</span>
          <div className="w-2 h-2 rounded-full bg-cyan-400 group-hover:animate-ping"></div>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {categories.map((cat) => (
            <button 
              key={cat.id} 
              onClick={() => scrollToSection(cat.id)}
              className="text-slate-300 hover:text-cyan-400 font-bold py-2 transition-colors relative group"
            >
              {cat.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-500 transition-all group-hover:w-full"></span>
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4 lg:gap-6">
          <button className="text-slate-200 hover:text-cyan-400 transition-colors hidden sm:block p-2">
            <Search size={22} />
          </button>
          <button className="text-slate-200 hover:text-cyan-400 transition-colors p-2">
            <User size={22} />
          </button>
          <button onClick={onCartOpen} className="relative text-slate-200 hover:text-cyan-400 transition-colors p-2">
            <ShoppingBag size={22} />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-cyan-500 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full animate-pulse border-2 border-brand-black">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 top-20 bg-brand-black/95 backdrop-blur-xl z-40 transition-transform duration-500 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-8 flex flex-col gap-6 text-right">
          {categories.map(cat => (
            <button 
              key={cat.id} 
              onClick={() => scrollToSection(cat.id)}
              className="text-2xl font-black text-white hover:text-cyan-400 transition-colors border-b border-white/5 pb-4"
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
