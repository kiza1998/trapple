import React from 'react';

export function BackgroundElements() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-sparkle"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: '3px',
            height: '3px',
            background: i % 2 ? '#FFD6E8' : '#AA9FCD',
            borderRadius: '50%',
            opacity: 0.3,
            animationDelay: `${i * 0.1}s`,
          }}
        />
      ))}
    </div>
  );
}