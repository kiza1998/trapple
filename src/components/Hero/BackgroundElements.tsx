import React from 'react';
import { 
  Cake, Cookie, Coffee, IceCream,
  Candy, Cherry, Croissant, Heart,
  Star, Sparkles, ChefHat, Utensils
} from 'lucide-react';

const backgroundElements = [
  { Icon: Cookie, frequency: 8, size: '12px', label: 'cookie' },
  { Icon: Cake, frequency: 6, size: '14px', label: 'cake' },
  { Icon: IceCream, frequency: 7, size: '13px', label: 'icecream' },
  { Icon: Candy, frequency: 10, size: '10px', label: 'candy' },
  { Icon: Cherry, frequency: 8, size: '11px', label: 'cherry' },
  { Icon: Croissant, frequency: 6, size: '13px', label: 'croissant' },
  { Icon: Heart, frequency: 12, size: '10px', label: 'heart' },
  { Icon: Star, frequency: 10, size: '11px', label: 'star' },
  { Icon: Sparkles, frequency: 8, size: '12px', label: 'sparkles' },
  { Icon: ChefHat, frequency: 5, size: '14px', label: 'chef-hat' },
  { Icon: Utensils, frequency: 6, size: '13px', label: 'utensils' },
  { Icon: Coffee, frequency: 7, size: '12px', label: 'coffee' }
];

export function BackgroundElements() {
  const generateGridElements = () => {
    const elements = [];
    const rows = 12;
    const cols = 24;

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const randomElement = backgroundElements[Math.floor(Math.random() * backgroundElements.length)];
        const offsetX = (Math.random() - 0.5) * 20; // Random X offset ±10px
        const offsetY = (Math.random() - 0.5) * 20; // Random Y offset ±10px
        const rotation = Math.random() * 360; // Random rotation
        const delay = Math.random() * 5; // Random animation delay
        const scale = 0.8 + Math.random() * 0.4; // Random scale between 0.8 and 1.2

        elements.push({
          ...randomElement,
          id: `${row}-${col}-${randomElement.label}`,
          x: (100 * col) / cols + offsetX,
          y: (100 * row) / rows + offsetY,
          rotation,
          delay,
          scale
        });
      }
    }

    return elements;
  };

  const gridElements = React.useMemo(generateGridElements, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/95 to-white/90" />

      {/* Background pattern */}
      {gridElements.map((element) => {
        const { Icon, id, x, y, rotation, delay, scale, size } = element;
        
        return (
          <div
            key={id}
            className="absolute animate-float"
            style={{
              top: `${y}%`,
              left: `${x}%`,
              transform: `rotate(${rotation}deg) scale(${scale})`,
              animationDelay: `${delay}s`,
              width: size,
              height: size
            }}
          >
            <Icon
              className="w-full h-full animate-pulse"
              style={{
                color: Math.random() > 0.5 ? '#FFD6E8' : '#AA9FCD',
                opacity: 0.1,
                animationDuration: '3s',
                animationDelay: `${delay}s`
              }}
            />
          </div>
        );
      })}

      {/* Sparkle effects */}
      {[...Array(20)].map((_, i) => (
        <div
          key={`sparkle-${i}`}
          className="absolute animate-sparkle"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: '3px',
            height: '3px',
            background: i % 2 ? '#FFD6E8' : '#AA9FCD',
            borderRadius: '50%',
            opacity: 0.15,
            animationDelay: `${i * 0.2}s`,
            filter: 'blur(1px)'
          }}
        />
      ))}
    </div>
  );
}