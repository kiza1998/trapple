import React from 'react';

export function HeroContent() {
  return (
    <div className="relative h-full flex items-center justify-center text-center py-8 md:py-12">
      <div className="max-w-xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center">
          <div className="relative mb-6">
            <h1 className="text-4xl md:text-8xl font-['Raleway'] text-[#AA9FCD] opacity-0 animate-fade-in tracking-wide font-light text-shadow">
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
              className="inline-block bg-gradient-to-r from-[#AA9FCD] to-[#B8A5E3] text-white px-8 md:px-10 py-3 md:py-4 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-medium text-sm md:text-base hover:brightness-110 relative overflow-hidden group"
            >
              <span className="relative z-10">Перейти в меню</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#FFD6E8]/50 to-[#AA9FCD]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}