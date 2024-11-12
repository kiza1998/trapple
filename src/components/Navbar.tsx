import React, { useState } from 'react';
import { Menu, X, ShoppingCart, Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed w-full transition-colors duration-300 dark:bg-black/90 bg-white/90 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 dark:text-white text-gray-900 font-serif text-2xl">
            Трапл
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#" className="dark:text-gray-300 text-gray-600 hover:text-purple-600 transition-colors">Коллекция</a>
              <a href="#" className="dark:text-gray-300 text-gray-600 hover:text-purple-600 transition-colors">О нас</a>
              <a href="#" className="dark:text-gray-300 text-gray-600 hover:text-purple-600 transition-colors">Контакты</a>
              <button 
                onClick={toggleTheme}
                className="dark:text-white text-gray-900 hover:text-purple-600 transition-colors"
              >
                {theme === 'dark' ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
              </button>
              <button className="dark:text-white text-gray-900 hover:text-purple-600 transition-colors">
                <ShoppingCart className="w-6 h-6" />
              </button>
            </div>
          </div>
          
          <div className="md:hidden flex items-center space-x-4">
            <button 
              onClick={toggleTheme}
              className="dark:text-white text-gray-900 hover:text-purple-600"
            >
              {theme === 'dark' ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="dark:text-gray-300 text-gray-600 hover:text-purple-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 dark:bg-black/90 bg-white/90">
            <a href="#" className="block px-3 py-2 dark:text-gray-300 text-gray-600 hover:text-purple-600">Коллекция</a>
            <a href="#" className="block px-3 py-2 dark:text-gray-300 text-gray-600 hover:text-purple-600">О нас</a>
            <a href="#" className="block px-3 py-2 dark:text-gray-300 text-gray-600 hover:text-purple-600">Контакты</a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;