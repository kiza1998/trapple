import React from 'react';

export function Hero() {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/80 to-purple-900/80 dark:from-purple-900/90 dark:to-black mix-blend-multiply transition-colors duration-300" />
        <div className="absolute inset-0">
          <div className="h-full w-full flex overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="h-full w-1/10 bg-gradient-to-b from-transparent via-purple-500/10 to-transparent"
                style={{
                  transform: `skewX(-45deg) translateX(${i * 100}px)`,
                  animation: `fuzz ${2 + Math.random() * 4}s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 2}s`,
                  opacity: 0.1
                }}
              />
            ))}
          </div>
        </div>
      </div>
      
      <div className="relative h-full flex items-center justify-center text-center">
        <div className="max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-6xl font-serif text-white mb-8 opacity-0 animate-fade-in">
            Трапл
          </h1>
          <p className="text-xl text-gray-100 mb-12 opacity-0 animate-fade-in animation-delay-300">
            Погрузитесь в мир изысканных трюфелей, 
            бережно отобранных из самых престижных регионов мира.
          </p>
          <button className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-all duration-300 opacity-0 animate-fade-in animation-delay-600">
            Исследовать Коллекцию
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;