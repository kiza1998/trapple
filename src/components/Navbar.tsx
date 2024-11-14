import React, { useState } from 'react';
import { Menu, X, ShoppingCart, MessageCircle, Heart, Info, Phone, Truck, ChevronDown, ChevronUp } from 'lucide-react';

const menuCategories = [
  { name: 'Моти', href: '#mochi' },
  { name: 'Торты', href: '#cakes' },
  { name: 'Трайфлы', href: '#trifles' },
  { name: 'Фрукты в шоколаде', href: '#chocolate-fruits' },
  { name: 'Шоколадные бомбочки', href: '#chocolate-bombs' },
];

const mobileNavItems = [
  { name: 'О нас', href: '#about', icon: Info },
  { name: 'Контакты', href: '#contacts', icon: MessageCircle },
  { name: 'Доставка', href: '#delivery', icon: Truck },
  { name: 'Корзина', href: 'https://wa.me/79129040081', icon: ShoppingCart },
];

const desktopNavItems = [
  { name: 'О нас', href: '#about', icon: Info },
  { name: 'Контакты', href: '#contacts', icon: MessageCircle },
  { name: 'Доставка', href: '#delivery', icon: Truck },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white shadow-lg z-50 border-b-2 border-[#AA9FCD]/20">
      {/* Desktop Navigation */}
      <div className="hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8 flex-1">
              <a
                href="tel:+79129040081"
                className="text-[#AA9FCD] hover:text-[#B8A5E3] transition-all duration-300 group flex items-center space-x-1"
              >
                <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>+7(912)904-00-81</span>
              </a>
              {desktopNavItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-[#AA9FCD] hover:text-[#B8A5E3] transition-all duration-300 group flex items-center space-x-1"
                >
                  <item.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span className="relative">
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FFD6E8] transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </a>
              ))}
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="relative">
                <button 
                  className="bg-gradient-to-r from-[#AA9FCD] to-[#B8A5E3] text-white px-4 py-2 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  <Menu className="w-4 h-4" />
                  <span>Меню</span>
                </button>
                
                {isMenuOpen && (
                  <div 
                    className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-2 z-50 border border-[#AA9FCD]/10"
                    onMouseLeave={() => setIsMenuOpen(false)}
                  >
                    {menuCategories.map((category) => (
                      <a
                        key={category.name}
                        href={category.href}
                        className="block px-4 py-2 text-[#AA9FCD] hover:bg-[#AA9FCD]/10 transition-colors"
                      >
                        {category.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
              <a 
                href="https://wa.me/79129040081"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-[#FFD6E8] to-[#E2C6FF] text-white px-4 py-2 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
              >
                <ShoppingCart className="w-4 h-4" />
                <span>Корзина</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex items-center justify-between h-16 px-4">
        <a
          href="tel:+79129040081"
          className="text-[#AA9FCD] text-base font-medium flex items-center space-x-1"
        >
          <Phone className="w-4 h-4" />
          <span>+7(912)904-00-81</span>
        </a>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-[#AA9FCD] hover:text-[#B8A5E3] transition-all duration-300"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-white z-50">
          <div className="px-4 pt-2 pb-3 space-y-2">
            <div 
              className="py-3 px-4 flex justify-between items-center border-b border-[#AA9FCD]/10 cursor-pointer bg-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="text-lg font-medium text-[#AA9FCD]">Меню</span>
              {isMobileMenuOpen ? (
                <ChevronUp className="w-5 h-5 text-[#AA9FCD]" />
              ) : (
                <ChevronDown className="w-5 h-5 text-[#AA9FCD]" />
              )}
            </div>
            
            {isMobileMenuOpen && (
              <div className="pl-4 py-2 space-y-2 bg-white">
                {menuCategories.map((category) => (
                  <a
                    key={category.name}
                    href={category.href}
                    className="block py-2 px-4 text-[#AA9FCD] hover:text-[#B8A5E3] transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {category.name}
                  </a>
                ))}
              </div>
            )}

            {mobileNavItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center space-x-3 py-3 px-4 text-[#AA9FCD] hover:text-[#B8A5E3] transition-colors border-b border-[#AA9FCD]/10 bg-white"
                onClick={() => setIsOpen(false)}
              >
                <item.icon className="w-5 h-5" />
                <span className="text-lg">{item.name}</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}