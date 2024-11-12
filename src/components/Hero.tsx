import React from 'react';
import { Cake, Cookie, IceCream, Croissant, Candy, Utensils, Heart, Coffee, Snowflake, CupSoda, Dessert, Soup } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative min-h-[70vh] bg-white overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#AA9FCD]/10 via-white to-[#FFD6E8]/10"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M0%200h20L10%2010zm10%2010L20%2020V10H10zM10%2010L0%2020V10h10zM10%2010L0%200v10h10z%22%20fill%3D%22%23AA9FCD%22%20fill-opacity%3D%220.05%22%2F%3E%3C%2Fsvg%3E')] opacity-30"></div>
      </div>

      {/* Floating icons */}
      <div className="absolute inset-0">
        {[Cake, Cookie, IceCream, Croissant, Candy, Heart, Coffee, Snowflake, CupSoda, Dessert].map((Icon, index) => (
          <div
            key={index}
            className="absolute animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${index * 0.5}s`,
              color: index % 2 ? '#FFD6E8' : '#AA9FCD',
              opacity: 0.1,
            }}
          >
            <Icon className={`w-${Math.floor(Math.random() * 4 + 8)} h-${Math.floor(Math.random() * 4 + 8)}`} />
          </div>
        ))}
      </div>
      
      <div className="relative h-full flex items-center justify-center text-center pt-32 pb-12">
        <div className="max-w-2xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-[#AA9FCD]/10">
            <h1 className="text-4xl sm:text-6xl font-['Playfair_Display'] text-[#AA9FCD] mb-3 opacity-0 animate-fade-in italic drop-shadow-sm">
              aveilarusha desserts
            </h1>
            <p className="text-lg sm:text-xl text-[#B8A5E3] mb-8 opacity-0 animate-fade-in animation-delay-300 font-['Playfair_Display'] italic">
              Тепло севера в каждом кусочке
            </p>
            <div className="space-y-4 opacity-0 animate-fade-in animation-delay-600">
              <a 
                href="#menu"
                className="inline-block bg-gradient-to-r from-[#AA9FCD] to-[#B8A5E3] text-white px-8 py-3 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-medium mx-2"
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

export default Hero;