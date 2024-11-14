import React from 'react';
import { 
  Cake, Cookie, Coffee, IceCream,
  Candy, Cherry, Croissant, Heart,
  CakeSlice, Dessert
} from 'lucide-react';

const pastryIcons = [
  Cake, Cookie, Coffee, IceCream,
  Candy, Cherry, Croissant, Heart,
  CakeSlice, Dessert
];

export function FallingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {[...Array(40)].map((_, index) => {
        const Icon = pastryIcons[Math.floor(Math.random() * pastryIcons.length)];
        const size = Math.random() * 16 + 16;
        const left = Math.random() * 100;
        const delay = Math.random() * 8;
        const duration = Math.random() * 5 + 8;

        return (
          <div
            key={index}
            className="absolute animate-fall"
            style={{
              left: `${left}%`,
              top: '-20px',
              width: `${size}px`,
              height: `${size}px`,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
            }}
          >
            <Icon
              className="w-full h-full"
              style={{
                color: '#AA9FCD',
                opacity: 0.15,
                filter: 'drop-shadow(0 0 3px rgba(170, 159, 205, 0.4))'
              }}
            />
          </div>
        );
      })}
    </div>
  );
}