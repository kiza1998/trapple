import React from 'react';
import { BackgroundElements } from './Hero/BackgroundElements';
import { HeroContent } from './Hero/HeroContent';

export function Hero() {
  return (
    <div className="relative min-h-[60vh] md:min-h-[70vh] bg-gradient-to-br from-pink-50 via-white to-purple-50 overflow-hidden pt-16 md:pt-20">
      <BackgroundElements />
      <HeroContent />
    </div>
  );
}