import React, { useState } from 'react';
import { Menu, X, ShoppingCart, ChevronDown, MessageCircle } from 'lucide-react';

const menuItems = [
  { name: 'Трайфлы', href: '#' },
  { name: 'Моти', href: '#' },
  { name: 'Фрукты в шоколаде', href: '#' },
  { name: 'Шоколадные бомбочки', href: '#' },
  { name: 'Торты', href: '#' }
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-[#AA9FCD]/90 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="flex items-center space-x-1 text-white hover:text-purple-200 transition-colors"
              >
                <Menu className="w-6 h-6" />
                <span>Меню</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isMenuOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isMenuOpen && (
                <div className="absolute top-full left-0 w-64 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg py-2 mt-2 transform origin-top-left transition-all duration-300">
                  {menuItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-2 text-gray-700 hover:bg-purple-100 transition-colors"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8 text-white">
            <a href="tel:+79129040081" className="hover:text-purple-200 transition-colors">+7(912)904-00-81</a>
            <a href="#" className="hover:text-purple-200 transition-colors">О нас</a>
            <a href="#" className="hover:text-purple-200 transition-colors">Контакты</a>
            <a href="#" className="hover:text-purple-200 transition-colors">Отзывы</a>
            <a href="#" className="hover:text-purple-200 transition-colors">Доставка</a>
            <a 
              href="https://wa.me/79129040081" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-purple-200 transition-colors"
            >
              <MessageCircle className="w-6 h-6" />
            </a>
            <button className="hover:text-purple-200 transition-colors">
              <ShoppingCart className="w-6 h-6" />
            </button>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-purple-200 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute w-full bg-[#AA9FCD]/95 backdrop-blur-sm">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="tel:+79129040081" className="block px-3 py-2 text-white hover:text-purple-200 transition-colors">+7(912)904-00-81</a>
            <a href="#" className="block px-3 py-2 text-white hover:text-purple-200 transition-colors">О нас</a>
            <a href="#" className="block px-3 py-2 text-white hover:text-purple-200 transition-colors">Контакты</a>
            <a href="#" className="block px-3 py-2 text-white hover:text-purple-200 transition-colors">Отзывы</a>
            <a href="#" className="block px-3 py-2 text-white hover:text-purple-200 transition-colors">Доставка</a>
            <a href="#" className="block px-3 py-2 text-white hover:text-purple-200 transition-colors">Корзина</a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;