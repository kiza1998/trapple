import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingCart, MessageCircle, Heart, Info, Home, Truck, ChevronDown, ChevronUp, Cookie, Cake, Moon, Sun } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { useTheme } from '../contexts/ThemeContext';

const menuCategories = [
  { name: 'Моти', href: '/menu/mochi' },
  { name: 'Торты', href: '/menu/cakes' },
  { name: 'Трайфлы', href: '/menu/trifles' },
  { name: 'Фрукты в шоколаде', href: '/menu/chocolate_fruits' },
  { name: 'Шоколадные бомбочки', href: '/menu/chocolate_bombs' },
];

const mobileNavItems = [
  { name: 'О нас', href: '/about', icon: Info },
  { name: 'Контакты', href: '/contacts', icon: MessageCircle },
  { name: 'Доставка', href: '/delivery', icon: Truck },
  { name: 'Корзина', href: '#', icon: ShoppingCart },
];

const desktopNavItems = [
  { name: 'О нас', href: '/about', icon: Info },
  { name: 'Контакты', href: '/contacts', icon: MessageCircle },
  { name: 'Доставка', href: '/delivery', icon: Truck },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { setIsOpen: setCartOpen } = useCart();
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed w-full z-50">
      {/* Desktop Navigation */}
      <div className="hidden md:block relative bg-transparent backdrop-blur-sm border-b border-[#AA9FCD]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center space-x-8 flex-1">
              <Link
                to="/"
                className="text-[#AA9FCD] hover:text-[#B8A5E3] transition-all duration-300 group flex items-center space-x-1 text-sm"
              >
                <Home className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                <span>Главная</span>
              </Link>
              {desktopNavItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-[#AA9FCD] hover:text-[#B8A5E3] transition-all duration-300 group flex items-center space-x-1 text-sm"
                >
                  <item.icon className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                  <span className="relative">
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FFD6E8] transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </Link>
              ))}
            </div>
            
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-[#AA9FCD]/10 transition-colors group relative"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4 text-[#AA9FCD] dark:text-[#B8A5E3] group-hover:scale-110 transition-transform" />
                ) : (
                  <Moon className="w-4 h-4 text-[#AA9FCD] dark:text-[#B8A5E3] group-hover:scale-110 transition-transform" />
                )}
              </button>
              <div className="relative">
                <button 
                  className="bg-gradient-to-r from-[#AA9FCD] to-[#B8A5E3] text-white px-3 py-1.5 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-1.5 text-sm"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  <Menu className="w-3.5 h-3.5" />
                  <span>Меню</span>
                </button>
                
                {isMenuOpen && (
                  <div 
                    className="absolute right-0 mt-2 w-48 bg-white/95 dark:bg-dark-card backdrop-blur-sm rounded-lg shadow-xl py-2 z-50 border border-[#AA9FCD]/10"
                    onMouseLeave={() => setIsMenuOpen(false)}
                  >
                    {menuCategories.map((category) => (
                      <Link
                        key={category.name}
                        to={category.href}
                        className="block px-4 py-2 text-[#AA9FCD] dark:text-[#B8A5E3] hover:bg-[#AA9FCD]/5 transition-colors text-sm"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <button 
                onClick={() => setCartOpen(true)}
                className="bg-gradient-to-r from-[#FFD6E8] to-[#E2C6FF] text-white px-3 py-1.5 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-1.5 text-sm"
              >
                <ShoppingCart className="w-3.5 h-3.5" />
                <span>Корзина</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex items-center justify-between h-12 px-4 relative bg-transparent backdrop-blur-sm">
        <Link
          to="/"
          className="text-[#AA9FCD] dark:text-[#B8A5E3] text-sm font-medium flex items-center space-x-1"
        >
          <Home className="w-3.5 h-3.5" />
          <span>Главная</span>
        </Link>
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="p-1.5 rounded-full hover:bg-[#AA9FCD]/10 transition-colors group"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-[#AA9FCD] dark:text-[#B8A5E3] group-hover:scale-110 transition-transform" />
            ) : (
              <Moon className="w-4 h-4 text-[#AA9FCD] dark:text-[#B8A5E3] group-hover:scale-110 transition-transform" />
            )}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#AA9FCD] dark:text-[#B8A5E3] hover:text-[#B8A5E3] transition-all duration-300"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-12 bg-white dark:bg-dark-bg z-50">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <div 
              className="py-2.5 px-4 flex justify-between items-center border-b border-[#AA9FCD]/10 cursor-pointer bg-white dark:bg-dark-card relative"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="text-base font-medium text-[#AA9FCD] dark:text-[#B8A5E3]">Меню</span>
              {isMobileMenuOpen ? (
                <ChevronUp className="w-4 h-4 text-[#AA9FCD] dark:text-[#B8A5E3]" />
              ) : (
                <ChevronDown className="w-4 h-4 text-[#AA9FCD] dark:text-[#B8A5E3]" />
              )}
            </div>
            
            {isMobileMenuOpen && (
              <div className="pl-4 py-1 space-y-1 bg-white dark:bg-dark-card">
                {menuCategories.map((category) => (
                  <Link
                    key={category.name}
                    to={category.href}
                    className="block py-2 px-4 text-[#AA9FCD] dark:text-[#B8A5E3] hover:text-[#B8A5E3] transition-colors text-sm"
                    onClick={() => {
                      setIsOpen(false);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            )}

            {mobileNavItems.map((item) => (
              item.name === 'Корзина' ? (
                <button
                  key={item.name}
                  onClick={() => {
                    setCartOpen(true);
                    setIsOpen(false);
                  }}
                  className="flex items-center space-x-3 py-2.5 px-4 text-[#AA9FCD] dark:text-[#B8A5E3] hover:text-[#B8A5E3] transition-colors border-b border-[#AA9FCD]/10 bg-white dark:bg-dark-card relative w-full text-left"
                >
                  <item.icon className="w-4 h-4" />
                  <span className="text-sm">{item.name}</span>
                </button>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className="flex items-center space-x-3 py-2.5 px-4 text-[#AA9FCD] dark:text-[#B8A5E3] hover:text-[#B8A5E3] transition-colors border-b border-[#AA9FCD]/10 bg-white dark:bg-dark-card relative"
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className="w-4 h-4" />
                  <span className="text-sm">{item.name}</span>
                </Link>
              )
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}