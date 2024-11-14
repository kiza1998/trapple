import React from 'react';
import { 
  Cake, Cookie, Coffee, IceCream, Candy, Cherry, 
  Croissant, CakeSlice, Dessert, UtensilsCrossed, 
  ChefHat, Scale, Timer, Thermometer, Flame, 
  Soup, Milk, Egg
} from 'lucide-react';

const decorativeIcons = [
  Cake, Cookie, Coffee, IceCream, Candy, Cherry, 
  Croissant, CakeSlice, Dessert, UtensilsCrossed, 
  ChefHat, Scale, Timer, Thermometer, Flame, 
  Soup, Milk, Egg
];

export function BackgroundDecoration() {
  return (
    <div className="fixed inset-0 pointer-events-none">
      <div className="absolute inset-0 bg-[#FFF]/95" />
      <div className="absolute inset-0">
        {decorativeIcons.map((Icon, index) => {
          const gridSize = 6;
          const row = Math.floor(index / gridSize);
          const col = index % gridSize;
          const xPos = (col / gridSize) * 100;
          const yPos = (row / Math.ceil(decorativeIcons.length / gridSize)) * 100;
          
          return (
            <div
              key={index}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
              style={{
                left: `${xPos}%`,
                top: `${yPos}%`,
              }}
            >
              <div className="relative">
                {/* Decorative background circle */}
                <div 
                  className="absolute inset-0 rounded-full bg-gradient-to-br animate-pulse"
                  style={{
                    background: index % 2 === 0 
                      ? 'linear-gradient(135deg, rgba(170, 159, 205, 0.1), rgba(255, 214, 232, 0.1))'
                      : 'linear-gradient(135deg, rgba(255, 214, 232, 0.1), rgba(170, 159, 205, 0.1))',
                    transform: 'scale(1.2)',
                  }}
                />
                {/* Icon with subtle shadow */}
                <Icon 
                  className={`w-12 h-12 md:w-16 md:h-16 transform transition-transform duration-1000 hover:scale-110 ${
                    index % 3 === 0 ? 'animate-float' :
                    index % 3 === 1 ? 'animate-spin-slow' : 'animate-pulse'
                  }`}
                  style={{
                    color: index % 2 === 0 ? '#AA9FCD' : '#FFD6E8',
                    opacity: 0.15,
                    filter: 'drop-shadow(0 2px 4px rgba(170, 159, 205, 0.3))',
                    transform: `rotate(${Math.random() * 360}deg)`,
                    animationDelay: `${index * 0.2}s`,
                    animationDuration: '3s',
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}