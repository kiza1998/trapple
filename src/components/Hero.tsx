import React from 'react';
import { Cake, Cookie, IceCream } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative h-screen bg-[#AA9FCD] overflow-hidden">
      {/* Kawaii background patterns */}
      <div className="absolute inset-0 bg-pattern opacity-10"></div>
      <div className="absolute inset-0">
        <div className="absolute top-20 left-[10%] text-white/5 animate-float" style={{ animationDelay: '0s' }}>
          <Cake className="w-24 h-24" />
        </div>
        <div className="absolute top-40 right-[15%] text-white/5 animate-float" style={{ animationDelay: '2s' }}>
          <Cookie className="w-16 h-16" />
        </div>
        <div className="absolute bottom-[20%] left-[20%] text-white/5 animate-float" style={{ animationDelay: '4s' }}>
          <IceCream className="w-20 h-20" />
        </div>
        <div className="absolute bottom-[30%] right-[25%] text-white/5 animate-float" style={{ animationDelay: '1s' }}>
          <Cake className="w-16 h-16" />
        </div>
      </div>
      
      <div className="relative h-full flex items-center justify-center text-center">
        <div className="max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-6xl font-['Raleway'] text-white mb-4 opacity-0 animate-fade-in">
            Десерты с любовью
          </h1>
          <p className="text-xl text-white/90 mb-8 opacity-0 animate-fade-in animation-delay-300 font-['Noto_Sans']">
            Каждый кусочек - это праздник!
          </p>
          <div className="space-y-4 opacity-0 animate-fade-in animation-delay-600">
            <a 
              href="#menu"
              className="inline-block bg-white text-[#AA9FCD] px-8 py-3 rounded-lg hover:bg-white/90 transition-all duration-300 font-medium mx-2"
            >
              Перейти в меню
            </a>
            <a 
              href="https://wa.me/89129040091"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-lg hover:bg-white/30 transition-all duration-300 mx-2"
            >
              Заказать в WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;