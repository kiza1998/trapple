import React from 'react';
import { Phone, Instagram, Send, MessageCircle } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#AA9FCD]/80 backdrop-blur-sm text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-['Raleway'] text-lg mb-4">О нас</h3>
            <p className="text-sm leading-relaxed">
              Добро пожаловать в Aveilarusha Desserts! Мы — домашняя кондитерская, основанная Кизилгюль Ашуралиевой, в которой каждый десерт приготовлен с любовью и вниманием к деталям. Наши изделия — это не просто сладости, это настоящий праздник вкуса, который мы создаем, используя только натуральные ингредиенты.
            </p>
          </div>
          <div>
            <h3 className="font-['Raleway'] text-lg mb-4">Контакты</h3>
            <div className="space-y-3">
              <a 
                href="tel:89129040081" 
                className="flex items-center space-x-2 hover:text-purple-200 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>89129040081</span>
              </a>
              <a 
                href="https://instagram.com/aveilarusha_desserts" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center space-x-2 hover:text-purple-200 transition-colors"
              >
                <Instagram className="w-4 h-4" />
                <span>aveilarusha_desserts</span>
              </a>
              <a 
                href="https://t.me/aveilarusha" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center space-x-2 hover:text-purple-200 transition-colors"
              >
                <Send className="w-4 h-4" />
                <span>aveilarusha</span>
              </a>
              <a 
                href="https://wa.me/89129040091" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center space-x-2 hover:text-purple-200 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-['Raleway'] text-lg mb-4">Заказ через WhatsApp</h3>
            <p className="text-sm mb-4">Для быстрого оформления заказа напишите нам в WhatsApp</p>
            <a 
              href="https://wa.me/89129040091" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-lg hover:bg-white/30 transition-all duration-300"
            >
              Заказать
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/20 text-center text-sm">
          <p className="text-white/80">Каждый десерт — это результат нашего творческого подхода, любви к кондитерскому искусству и стремления приносить радость каждому клиенту. Спасибо, что выбираете Aveilarusha Desserts!</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;