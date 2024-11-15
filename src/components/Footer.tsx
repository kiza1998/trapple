import React from 'react';
import { Phone, Instagram, Send, MessageCircle, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-[#AA9FCD]/80 backdrop-blur-sm text-white py-6 md:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
          <div className="md:col-span-2">
            <h3 className="font-['Raleway'] text-base md:text-lg mb-3 md:mb-4">О нас</h3>
            <p className="text-sm leading-relaxed">
              Добро пожаловать в aveilarusha desserts! Мы — домашняя кондитерская, основанная Кизилгюль Ашуралиевой, в которой каждый десерт приготовлен с любовью и вниманием к деталям.
            </p>
          </div>
          <div>
            <h3 className="font-['Raleway'] text-base md:text-lg mb-3 md:mb-4">Контакты</h3>
            <div className="space-y-2 md:space-y-3">
              <a 
                href="tel:+79129040081" 
                className="flex items-center space-x-2 hover:text-purple-200 transition-colors text-sm md:text-base"
              >
                <Phone className="w-4 h-4" />
                <span>+7(912)904-00-81</span>
              </a>
              <a 
                href="https://instagram.com/aveilarusha_desserts" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center space-x-2 hover:text-purple-200 transition-colors text-sm md:text-base"
              >
                <Instagram className="w-4 h-4" />
                <span>aveilarusha_desserts</span>
              </a>
              <a 
                href="https://t.me/aveilarusha" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center space-x-2 hover:text-purple-200 transition-colors text-sm md:text-base"
              >
                <Send className="w-4 h-4" />
                <span>aveilarusha</span>
              </a>
              <a 
                href="https://wa.me/79129040081" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center space-x-2 hover:text-purple-200 transition-colors text-sm md:text-base"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-['Raleway'] text-base md:text-lg mb-3 md:mb-4">Отзывы</h3>
            <div className="flex items-center space-x-2 mb-2">
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
            </div>
            <p className="text-sm mb-4">Более 1000 довольных клиентов</p>
            <Link 
              to="/reviews"
              className="inline-block bg-white/20 backdrop-blur-sm px-4 md:px-6 py-2 rounded-lg hover:bg-white/30 transition-all duration-300 text-sm md:text-base"
            >
              Читать отзывы
            </Link>
          </div>
        </div>
        <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-white/20 text-center">
          <p className="text-white/80 text-xs md:text-sm">Каждый десерт — это результат нашего творческого подхода, любви к кондитерскому искусству и стремления приносить радость каждому клиенту. Спасибо, что выбираете aveilarusha desserts!</p>
        </div>
      </div>
    </footer>
  );
}