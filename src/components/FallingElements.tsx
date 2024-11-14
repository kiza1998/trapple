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
      {[...Array(30)].map((_, index) => {
        const Icon = pastryIcons[Math.floor(Math.random() * pastryIcons.length)];
        const size = Math.random() * 12 + 12; // Random size between 12px and 24px
        const left = Math.random() * 100; // Random position across width
        const delay = Math.random() * 5; // Random delay up to 5s
        const duration = Math.random() * 3 + 5; // Random duration between 5-8s

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
                opacity: 0.2,
                filter: 'drop-shadow(0 0 2px rgba(170, 159, 205, 0.3))'
              }}
            />
          </div>
        );
      })}
    </div>
  );
}