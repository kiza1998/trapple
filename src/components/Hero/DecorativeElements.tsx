import React from 'react';
import { 
  Cake, Cookie, Coffee, IceCream, Candy, Cherry, 
  Croissant, CakeSlice, Dessert
} from 'lucide-react';

const decorativeIcons = [
  Cake, Cookie, Coffee, IceCream, Candy, Cherry, 
  Croissant, CakeSlice, Dessert
];

export function DecorativeElements() {
  return (
    <div className="absolute inset-0 pointer-events-none z-20">
      {decorativeIcons.map((Icon, index) => {
        const randomX = Math.random() * 100;
        const randomY = Math.random() * 100;
        const randomRotation = Math.random() * 360;
        const randomScale = 0.8 + Math.random() * 0.4;
        const randomDelay = Math.random() * 5;

        return (
          <div
            key={index}
            className="absolute"
            style={{
              left: `${randomX}%`,
              top: `${randomY}%`,
              transform: `rotate(${randomRotation}deg) scale(${randomScale})`,
            }}
          >
            <Icon
              className={`w-8 h-8 md:w-12 md:h-12 ${
                index % 3 === 0 ? 'animate-float' :
                index % 3 === 1 ? 'animate-spin-slow' : 'animate-pulse'
              }`}
              style={{
                color: '#AA9FCD',
                opacity: 0.3,
                filter: 'drop-shadow(0 2px 4px rgba(170, 159, 205, 0.3))',
                animationDelay: `${randomDelay}s`,
              }}
            />
          </div>
        );
      })}
    </div>
  );
}