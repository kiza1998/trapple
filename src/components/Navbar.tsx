import React, { useState } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-black/90 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 text-white font-serif text-2xl">
            Maison de Truffe
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Collection</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">About</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a>
              <button className="text-white">
                <ShoppingCart className="w-6 h-6" />
              </button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/90">
            <a href="#" className="block px-3 py-2 text-gray-300 hover:text-white">Collection</a>
            <a href="#" className="block px-3 py-2 text-gray-300 hover:text-white">About</a>
            <a href="#" className="block px-3 py-2 text-gray-300 hover:text-white">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}