import React from 'react';
import { 
  Cake, Cookie, Coffee, 
  Sparkles, Utensils, ChefHat
} from 'lucide-react';

const decorativeIcons = [
  Cake, Cookie, Coffee,
  Sparkles, Utensils, ChefHat
];

export function DecorativeIcons() {
  return (
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
  );
}