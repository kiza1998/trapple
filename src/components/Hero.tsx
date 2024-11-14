import React from 'react';
import { 
  Cake, Cookie, Coffee, CupSoda,
  Sparkles, Utensils, ChefHat
} from 'lucide-react';

const decorativeIcons = [
  Cake, Cookie, Coffee, CupSoda,
  Sparkles, Utensils, ChefHat
];

export function Hero() {
  return (
    <div className="relative min-h-[60vh] md:min-h-[70vh] bg-gradient-to-br from-pink-50 via-white to-purple-50 overflow-hidden pt-16 md:pt-20">
      {/* Background sparkles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-sparkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: '3px',
              height: '3px',
              background: i % 2 ? '#FFD6E8' : '#AA9FCD',
              borderRadius: '50%',
              opacity: 0.3,
              animationDelay: `${i * 0.1}s`,
            }}
          />
        ))}
      </div>

      {/* Decorative icons */}
      <div className="absolute inset-0 hidden md:block">
        {decorativeIcons.map((Icon, index) => (
          <div
            key={index}
            className="absolute animate-float hover-lift"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${index * 0.2}s`,
              color: index % 2 ? '#FFD6E8' : '#AA9FCD',
              opacity: 0.15,
              transform: `rotate(${Math.random() * 360}deg) scale(${0.8 + Math.random() * 0.4})`,
            }}
          >
            <Icon className={`w-${Math.floor(Math.random() * 4 + 8)} h-${Math.floor(Math.random() * 4 + 8)} animate-wiggle`} />
          </div>
        ))}
      </div>

      {/* Gradient blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-[#FFD6E8]/30 to-[#AA9FCD]/30 rounded-full blur-lg animate-float"></div>
        <div className="absolute top-40 -left-10 w-32 h-32 bg-gradient-to-tl from-[#AA9FCD]/30 to-[#FFD6E8]/30 rounded-full blur-lg animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-tr from-[#FFD6E8]/30 to-[#AA9FCD]/30 rounded-full blur-lg animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      {/* Main content */}
      <div className="relative h-full flex items-center justify-center text-center py-8 md:py-12">
        <div className="max-w-xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center">
            <div className="relative mb-6">
              <Cake className="w-12 h-12 text-[#AA9FCD]/30 absolute -top-16 left-1/2 transform -translate-x-1/2 animate-float" />
              <h1 className="text-4xl md:text-8xl font-['Raleway'] text-[#AA9FCD] opacity-0 animate-fade-in tracking-wide font-light text-shadow">
                aveilarusha
              </h1>
              <p className="text-xs md:text-base text-[#B8A5E3] opacity-0 animate-fade-in animation-delay-300 font-['Raleway'] tracking-[0.3em] uppercase absolute right-0 -bottom-4 md:-bottom-6">
                desserts
              </p>
              <div className="absolute -right-12 top-0 animate-float">
                <Cookie className="w-8 h-8 text-[#AA9FCD]/30" />
              </div>
            </div>
            <p className="text-base md:text-xl text-[#B8A5E3] mt-8 md:mt-10 opacity-0 animate-fade-in animation-delay-300 font-['Playfair_Display'] italic">
              Тепло севера в каждом кусочке
            </p>
            <div className="mt-8 opacity-0 animate-fade-in animation-delay-600">
              <a 
                href="#menu"
                className="inline-block bg-gradient-to-r from-[#AA9FCD] to-[#B8A5E3] text-white px-8 md:px-10 py-3 md:py-4 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-medium text-sm md:text-base hover:brightness-110 relative overflow-hidden group"
              >
                <span className="relative z-10">Перейти в меню</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#FFD6E8]/50 to-[#AA9FCD]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}