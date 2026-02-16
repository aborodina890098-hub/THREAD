
import React, { useState, useEffect } from 'react';
import { ShoppingBag, Search, User, Menu, X, Sun, Moon, Languages, LogIn, UserPlus } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAppContext } from '../context/AppContext';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const Navbar: React.FC<{ onCartOpen: () => void }> = ({ onCartOpen }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { cartCount } = useCart();
  const { theme, language, toggleTheme, toggleLanguage } = useAppContext();

  const isAr = language === 'ar';

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const categories = [
    { name: isAr ? 'رجالي' : 'Men', id: 'men-section' },
    { name: isAr ? 'نسائي' : 'Women', id: 'women-section' },
    { name: isAr ? 'أطفالي' : 'Kids', id: 'kids-section' },
    { name: isAr ? 'الأسئلة' : 'FAQ', id: 'faq' }
  ];

  return (
    <nav className="sticky top-0 z-50 glass border-b border-white/10 w-full transition-all duration-300 dark:bg-brand-black/80 bg-white/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Left Side */}
        <div className="flex items-center gap-2 lg:gap-4">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden dark:text-slate-200 text-slate-800 p-2">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          <div className="flex items-center gap-1">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-xl dark:bg-white/5 bg-black/5 dark:text-cyan-400 text-purple-600 hover:scale-110 transition-all"
              title={isAr ? "تبديل الوضع" : "Toggle Theme"}
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button 
              onClick={toggleLanguage}
              className="p-2 rounded-xl dark:bg-white/5 bg-black/5 dark:text-slate-200 text-slate-800 hover:text-cyan-500 transition-all flex items-center gap-1"
            >
              <Languages size={20} />
              <span className="text-xs font-bold uppercase hidden sm:block">{isAr ? 'EN' : 'عربي'}</span>
            </button>
          </div>
        </div>

        {/* Center */}
        <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-3xl font-bold tracking-tighter group flex items-center gap-1">
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent uppercase font-outfit">THREAD</span>
          <div className="w-2 h-2 rounded-full bg-cyan-400 group-hover:animate-ping"></div>
        </Link>

        {/* Desktop Categories */}
        <div className="hidden lg:flex items-center gap-6">
          {categories.map((cat) => (
            <button 
              key={cat.id} 
              onClick={() => scrollToSection(cat.id)}
              className="dark:text-slate-300 text-slate-600 hover:text-cyan-500 font-bold py-2 transition-colors relative group text-sm"
            >
              {cat.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-500 transition-all group-hover:w-full"></span>
            </button>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-2 lg:gap-4">
          <div className="relative flex items-center">
            <div className={`overflow-hidden transition-all duration-300 ease-in-out flex items-center ${isSearchOpen ? 'w-40 sm:w-64 opacity-100 px-2' : 'w-0 opacity-0'}`}>
              <input 
                type="text" 
                placeholder={isAr ? "بحث عن منتج..." : "Search products..."}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-black/5 dark:bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-xs focus:outline-none focus:border-cyan-500 dark:text-white text-slate-900"
              />
            </div>
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className={`p-2 transition-colors ${isSearchOpen ? 'text-cyan-500' : 'dark:text-slate-200 text-slate-800 hover:text-cyan-500'}`}
            >
              <Search size={22} />
            </button>
          </div>

          <div className="relative">
            <button 
              onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
              className={`p-2 transition-colors ${isUserMenuOpen ? 'text-cyan-500' : 'dark:text-slate-200 text-slate-800 hover:text-cyan-500'}`}
            >
              <User size={22} />
            </button>
            {isUserMenuOpen && (
              <div className={`absolute top-full ${isAr ? 'left-0' : 'right-0'} mt-4 w-56 glass border border-white/10 rounded-2xl p-4 shadow-2xl animate-scale-up z-[100]`}>
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4">{isAr ? 'حسابي' : 'My Account'}</p>
                <div className="space-y-1">
                  <button onClick={() => { setIsUserMenuOpen(false); toast(isAr ? 'قريباً...' : 'Coming soon...'); }} className="w-full flex items-center gap-3 p-3 hover:bg-white/5 rounded-xl text-xs font-bold text-white transition-all">
                    <LogIn size={16} className="text-cyan-500" /> {isAr ? 'تسجيل الدخول' : 'Login'}
                  </button>
                  <button onClick={() => { setIsUserMenuOpen(false); toast(isAr ? 'قريباً...' : 'Coming soon...'); }} className="w-full flex items-center gap-3 p-3 hover:bg-white/5 rounded-xl text-xs font-bold text-white transition-all">
                    <UserPlus size={16} className="text-purple-500" /> {isAr ? 'إنشاء حساب' : 'Sign Up'}
                  </button>
                </div>
              </div>
            )}
          </div>
          
          <button onClick={onCartOpen} className="relative dark:text-slate-200 text-slate-800 hover:text-cyan-500 transition-colors p-2">
            <ShoppingBag size={22} />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-cyan-500 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full animate-pulse border-2 dark:border-brand-black border-white">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 top-20 bg-white dark:bg-brand-black/95 backdrop-blur-xl z-40 transition-transform duration-500 ${isMenuOpen ? 'translate-x-0' : (isAr ? 'translate-x-full' : '-translate-x-full')}`}>
        <div className="p-8 flex flex-col gap-6 text-center">
          {categories.map(cat => (
            <button 
              key={cat.id} 
              onClick={() => scrollToSection(cat.id)}
              className="text-2xl font-black dark:text-white text-slate-900 hover:text-cyan-500 transition-colors border-b border-black/5 dark:border-white/5 pb-4"
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
