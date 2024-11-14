import React from 'react';
import { 
  Cake, Cookie, Coffee, IceCream,
  Candy, Cherry, Croissant, Heart,
  Star, Sparkles, ChefHat, Utensils
} from 'lucide-react';

const backgroundElements = [
  { Icon: Cookie, frequency: 8, size: '12px', label: 'cookie', color: '#FFD6E8' },
  { Icon: Cake, frequency: 6, size: '14px', label: 'cake', color: '#E2C6FF' },
  { Icon: IceCream, frequency: 7, size: '13px', label: 'icecream', color: '#FFD6E8' },
  { Icon: Candy, frequency: 10, size: '10px', label: 'candy', color: '#E2C6FF' },
  { Icon: Cherry, frequency: 8, size: '11px', label: 'cherry', color: '#FFD6E8' },
  { Icon: Croissant, frequency: 6, size: '13px', label: 'croissant', color: '#E2C6FF' },
  { Icon: Heart, frequency: 12, size: '10px', label: 'heart', color: '#FFD6E8' },
  { Icon: Star, frequency: 10, size: '11px', label: 'star', color: '#E2C6FF' },
  { Icon: Sparkles, frequency: 8, size: '12px', label: 'sparkles', color: '#FFD6E8' },
  { Icon: ChefHat, frequency: 5, size: '14px', label: 'chef-hat', color: '#E2C6FF' },
  { Icon: Utensils, frequency: 6, size: '13px', label: 'utensils', color: '#FFD6E8' },
  { Icon: Coffee, frequency: 7, size: '12px', label: 'coffee', color: '#E2C6FF' }
];

export function BackgroundElements() {
  const generateGridElements = () => {
    const elements = [];
    const rows = 12;
    const cols = 24;

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const randomElement = backgroundElements[Math.floor(Math.random() * backgroundElements.length)];
        const offsetX = (Math.random() - 0.5) * 20;
        const offsetY = (Math.random() - 0.5) * 20;
        const rotation = Math.random() * 360;
        const delay = Math.random() * 5;
        const scale = 0.8 + Math.random() * 0.4;

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
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Semi-transparent overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/98 to-white/95" />

      {/* Background pattern */}
      {gridElements.map((element) => {
        const { Icon, id, x, y, rotation, delay, scale, size, color, label } = element;
        const isPastryItem = ['cake', 'cookie', 'icecream', 'candy', 'croissant'].includes(label);
        
        return (
          <div
            key={id}
            className={`absolute ${isPastryItem ? 'animate-bounce-slow' : 'animate-float'}`}
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
              className={`w-full h-full ${isPastryItem ? 'animate-pulse' : 'animate-float'}`}
              style={{
                color: color,
                opacity: isPastryItem ? 0.15 : 0.1,
                animationDuration: '3s',
                animationDelay: `${delay}s`,
                filter: isPastryItem ? 'drop-shadow(0 0 1px currentColor)' : 'none'
              }}
            />
          </div>
        );
      })}

      {/* Enhanced sparkle effects */}
      {[...Array(30)].map((_, i) => (
        <div
          key={`sparkle-${i}`}
          className="absolute animate-sparkle"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: i % 3 === 0 ? '4px' : '3px',
            height: i % 3 === 0 ? '4px' : '3px',
            background: i % 2 ? '#FFD6E8' : '#E2C6FF',
            borderRadius: '50%',
            opacity: 0.2,
            animationDelay: `${i * 0.2}s`,
            filter: 'blur(1px)',
            boxShadow: `0 0 2px ${i % 2 ? '#FFD6E8' : '#E2C6FF'}`
          }}
        />
      ))}
    </div>
  );
}