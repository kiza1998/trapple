import React from 'react';
import { Cake, Cookie, IceCream, Croissant, Candy, Heart, Coffee, Snowflake, CupSoda, Dessert, Sparkles, Star } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative min-h-[60vh] md:min-h-[70vh] bg-white overflow-hidden pt-16 md:pt-20">
      {/* Dynamic background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#AA9FCD]/20 via-white to-[#FFD6E8]/20"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M0%200h20L10%2010zm10%2010L20%2020V10H10zM10%2010L0%2020V10h10zM10%2010L0%200v10h10z%22%20fill%3D%22%23AA9FCD%22%20fill-opacity%3D%220.05%22%2F%3E%3C%2Fsvg%3E')] opacity-30"></div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 hidden md:block">
        {[Cake, Cookie, IceCream, Croissant, Candy, Heart, Coffee, Snowflake, CupSoda, Dessert, Sparkles, Star].map((Icon, index) => (
          <div
            key={index}
            className="absolute animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${index * 0.3}s`,
              color: index % 2 ? '#FFD6E8' : '#AA9FCD',
              opacity: 0.15,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          >
            <Icon className={`w-${Math.floor(Math.random() * 4 + 8)} h-${Math.floor(Math.random() * 4 + 8)}`} />
          </div>
        ))}
      </div>

      {/* Decorative circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-[#FFD6E8] to-[#AA9FCD] rounded-full opacity-20 animate-float"></div>
        <div className="absolute top-40 -left-10 w-32 h-32 bg-gradient-to-tl from-[#AA9FCD] to-[#FFD6E8] rounded-full opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-tr from-[#FFD6E8] to-[#AA9FCD] rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="relative h-full flex items-center justify-center text-center py-8 md:py-12">
        <div className="max-w-xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center">
            <div className="relative">
              <h1 className="text-4xl md:text-8xl font-['Raleway'] text-[#AA9FCD] opacity-0 animate-fade-in tracking-wide font-light">
                aveilarusha
              </h1>
              <p className="text-xs md:text-base text-[#B8A5E3] opacity-0 animate-fade-in animation-delay-300 font-['Raleway'] tracking-[0.3em] uppercase absolute right-0 -bottom-4 md:-bottom-6">
                desserts
              </p>
            </div>
            <p className="text-base md:text-xl text-[#B8A5E3] mt-8 md:mt-10 opacity-0 animate-fade-in animation-delay-300 font-['Playfair_Display'] italic">
              Тепло севера в каждом кусочке
            </p>
            <div className="mt-8 opacity-0 animate-fade-in animation-delay-600">
              <a 
                href="#menu"
                className="inline-block bg-gradient-to-r from-[#AA9FCD] to-[#B8A5E3] text-white px-8 md:px-10 py-3 md:py-4 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-medium text-sm md:text-base hover:brightness-110"
              >
                Перейти в меню
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}