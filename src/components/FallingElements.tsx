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
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {[...Array(40)].map((_, index) => {
        const Icon = pastryIcons[Math.floor(Math.random() * pastryIcons.length)];
        const size = Math.random() * 16 + 16; // Random size between 16px and 32px
        const left = Math.random() * 100; // Random position across width
        const delay = Math.random() * 8; // Random delay up to 8s
        const duration = Math.random() * 5 + 8; // Random duration between 8-13s

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
                color: index % 2 === 0 ? '#AA9FCD' : '#FFD6E8',
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