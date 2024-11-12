import React, { useState } from 'react';
import { Menu, X, ShoppingCart, MessageCircle, Heart, Info, Phone, Star, Truck } from 'lucide-react';

const navItems = [
  { name: '+7(912)904-00-81', href: 'tel:+79129040081', icon: Phone },
  { name: 'О нас', href: '#about', icon: Info },
  { name: 'Контакты', href: '#contacts', icon: MessageCircle },
  { name: 'Отзывы', href: '#reviews', icon: Star },
  { name: 'Доставка', href: '#delivery', icon: Truck },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-md shadow-lg z-50 border-b-2 border-[#AA9FCD]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 flex-1">
            {navItems.map((item) => (
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
          
          <div className="hidden md:flex items-center space-x-6">
            <button className="bg-gradient-to-r from-[#AA9FCD] to-[#B8A5E3] text-white px-4 py-2 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
              <Menu className="w-4 h-4" />
              <span>Меню</span>
            </button>
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
          
          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center justify-between w-full">
            <a href="tel:+79129040081" className="text-[#AA9FCD] flex items-center space-x-1">
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
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute w-full bg-white/95 backdrop-blur-md shadow-lg border-t border-[#AA9FCD]/10">
          <div className="px-4 pt-2 pb-3 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center space-x-2 py-2 text-[#AA9FCD] hover:text-[#B8A5E3] transition-colors"
              >
                <item.icon className="w-4 h-4" />
                <span>{item.name}</span>
              </a>
            ))}
            <div className="pt-4 space-y-2">
              <button className="w-full bg-gradient-to-r from-[#AA9FCD] to-[#B8A5E3] text-white px-4 py-2 rounded-full hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2">
                <Menu className="w-4 h-4" />
                <span>Меню</span>
              </button>
              <a 
                href="https://wa.me/79129040081"
                className="w-full bg-gradient-to-r from-[#FFD6E8] to-[#E2C6FF] text-white px-4 py-2 rounded-full hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <ShoppingCart className="w-4 h-4" />
                <span>Корзина</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;