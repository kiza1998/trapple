import React from 'react';

export default function Hero() {
  return (
    <div className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="relative h-full flex items-center justify-center text-center">
        <div className="max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-6xl font-serif text-white mb-8 opacity-0 animate-fade-in">
            Exceptional Truffles
          </h1>
          <p className="text-xl text-gray-200 mb-12 opacity-0 animate-fade-in animation-delay-300">
            Experience the finest selection of rare and exquisite truffles, 
            carefully sourced from the most prestigious regions.
          </p>
          <button className="bg-white text-black px-8 py-3 rounded-none hover:bg-black hover:text-white transition-all duration-300 opacity-0 animate-fade-in animation-delay-600">
            Explore Collection
          </button>
        </div>
      </div>
    </div>
  );
}