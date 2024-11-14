import React from 'react';
import { 
  Cake, Cookie, Coffee, 
  Utensils, ChefHat, Croissant,
  Heart, Star, Sparkles, 
  Candy, Cherry, IceCream,
  Soup, Sandwich, Pizza,
  Beef, Apple, Banana
} from 'lucide-react';

const leftDecorativeElements = [
  { Icon: Utensils, count: 4, label: 'венчик' },
  { Icon: Cake, count: 5, label: 'тортик' },
  { Icon: Coffee, count: 4, label: 'кекс' },
  { Icon: ChefHat, count: 5, label: 'шапка кондитера' },
  { Icon: Heart, count: 6, label: 'сердце' },
  { Icon: Star, count: 7, label: 'звезда' },
  { Icon: Sparkles, count: 5, label: 'искры' },
  { Icon: Soup, count: 3, label: 'миска' },
  { Icon: Apple, count: 4, label: 'яблоко' },
  { Icon: Banana, count: 3, label: 'банан' }
];

const rightDecorativeElements = [
  { Icon: Utensils, count: 2, label: 'венчик' },
  { Icon: Cake, count: 3, label: 'тортик' },
  { Icon: Coffee, count: 2, label: 'кекс' },
  { Icon: ChefHat, count: 3, label: 'шапка кондитера' },
  { Icon: Croissant, count: 1, label: 'пончик' },
  { Icon: Cookie, count: 2, label: 'кукис' },
  { Icon: Heart, count: 4, label: 'сердце' },
  { Icon: Star, count: 5, label: 'звезда' },
  { Icon: Sparkles, count: 3, label: 'искры' },
  { Icon: Candy, count: 3, label: 'конфета' },
  { Icon: Cherry, count: 2, label: 'вишня' },
  { Icon: IceCream, count: 2, label: 'мороженое' }
];

export function DecorativeIcons() {
  const leftIcons = leftDecorativeElements.flatMap(({ Icon, count, label }) =>
    Array(count).fill({ Icon, label, side: 'left' })
  );

  const rightIcons = rightDecorativeElements.flatMap(({ Icon, count, label }) =>
    Array(count).fill({ Icon, label, side: 'right' })
  );

  const allIcons = [...leftIcons, ...rightIcons];

  return (
    <div className="absolute inset-0 hidden md:block pointer-events-none">
      {allIcons.map((item, index) => {
        const { Icon, label, side } = item;
        const scale = 0.6 + Math.random() * 0.4;
        const rotation = Math.random() * 360;
        const top = Math.random() * 100;
        const left = side === 'left' 
          ? Math.random() * 45 
          : 50 + Math.random() * 50;
        const isSpecialIcon = ['сердце', 'звезда', 'искры'].includes(label);
        const isPastryIcon = ['тортик', 'кекс', 'пончик', 'кукис', 'конфета', 'мороженое'].includes(label);
        
        const baseColor = isPastryIcon 
          ? index % 2 ? '#FFE6F3' : '#E8D6FF'
          : index % 2 ? '#FFE6F3' : '#BFB5E0';
        
        return (
          <div
            key={`${label}-${index}-${side}`}
            className={`absolute animate-float hover-lift ${
              isSpecialIcon ? 'animate-sparkle' : ''
            }`}
            style={{
              top: `${top}%`,
              left: `${left}%`,
              animationDelay: `${index * 0.15}s`,
              color: baseColor,
              opacity: isSpecialIcon ? 0.35 : isPastryIcon ? 0.3 : 0.25,
              transform: `rotate(${rotation}deg) scale(${scale})`,
              zIndex: isSpecialIcon ? 1 : 0,
              filter: isPastryIcon ? 'drop-shadow(0 0 2px currentColor)' : 'none',
            }}
          >
            <Icon 
              className={`w-6 h-6 md:w-8 md:h-8 ${
                isSpecialIcon ? 'animate-pulse' : isPastryIcon ? 'animate-bounce-slow' : 'animate-wiggle'
              }`}
              style={{ 
                animationDelay: `${index * 0.25}s`,
                filter: isSpecialIcon || isPastryIcon ? 'drop-shadow(0 0 3px currentColor)' : 'none'
              }}
            />
          </div>
        );
      })}
    </div>
  );
}