import React from 'react';
import { Cake, Cookie, IceCream, Croissant, Candy, Utensils, Heart, Coffee, Snowflake, CupSoda, Dessert, Soup } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative min-h-[70vh] bg-[#AA9FCD] overflow-hidden">
      {/* Kawaii background patterns */}
      <div className="absolute inset-0 bg-pattern opacity-10"></div>
      <div className="absolute inset-0">
        <div className="absolute top-[15%] left-[10%] text-white/10 animate-float" style={{ animationDelay: '0s' }}>
          <Cake className="w-14 h-14" />
        </div>
        <div className="absolute top-[25%] right-[15%] text-white/10 animate-float" style={{ animationDelay: '2s' }}>
          <Cookie className="w-10 h-10" />
        </div>
        <div className="absolute top-[45%] left-[20%] text-white/10 animate-float" style={{ animationDelay: '4s' }}>
          <IceCream className="w-12 h-12" />
        </div>
        <div className="absolute top-[35%] right-[25%] text-white/10 animate-float" style={{ animationDelay: '1s' }}>
          <Croissant className="w-10 h-10" />
        </div>
        <div className="absolute bottom-[25%] left-[15%] text-white/10 animate-float" style={{ animationDelay: '3s' }}>
          <Candy className="w-8 h-8" />
        </div>
        <div className="absolute bottom-[15%] right-[20%] text-white/10 animate-float" style={{ animationDelay: '2.5s' }}>
          <Utensils className="w-10 h-10" />
        </div>
        <div className="absolute top-[55%] right-[10%] text-white/10 animate-float" style={{ animationDelay: '3.5s' }}>
          <Heart className="w-8 h-8" />
        </div>
        <div className="absolute top-[10%] right-[30%] text-white/10 animate-float" style={{ animationDelay: '1.5s' }}>
          <Coffee className="w-10 h-10" />
        </div>
        <div className="absolute bottom-[35%] right-[35%] text-white/10 animate-float" style={{ animationDelay: '4.5s' }}>
          <Snowflake className="w-12 h-12" />
        </div>
        <div className="absolute top-[30%] left-[35%] text-white/10 animate-float" style={{ animationDelay: '2.8s' }}>
          <CupSoda className="w-10 h-10" />
        </div>
        <div className="absolute bottom-[20%] left-[30%] text-white/10 animate-float" style={{ animationDelay: '1.8s' }}>
          <Heart className="w-6 h-6" />
        </div>
        <div className="absolute top-[20%] left-[25%] text-white/10 animate-float" style={{ animationDelay: '3.2s' }}>
          <Dessert className="w-12 h-12" />
        </div>
        <div className="absolute bottom-[40%] right-[15%] text-white/10 animate-float" style={{ animationDelay: '2.2s' }}>
          <Soup className="w-10 h-10" />
        </div>
      </div>
      
      <div className="relative h-full flex items-center justify-center text-center pt-32 pb-12">
        <div className="max-w-2xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-6xl font-['Playfair_Display'] text-white mb-3 opacity-0 animate-fade-in italic">
            aveilarusha desserts
          </h1>
          <p className="text-lg sm:text-xl text-white/90 mb-6 opacity-0 animate-fade-in animation-delay-300 font-['Playfair_Display'] italic">
            Тепло севера в каждом кусочке
          </p>
          <div className="space-y-4 opacity-0 animate-fade-in animation-delay-600">
            <a 
              href="#menu"
              className="inline-block bg-white text-[#AA9FCD] px-6 py-2 rounded-lg hover:bg-white/90 transition-all duration-300 font-medium mx-2"
            >
              Перейти в меню
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;