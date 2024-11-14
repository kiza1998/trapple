import React from 'react';
import { BackgroundElements } from './BackgroundElements';
import { DecorativeIcons } from './DecorativeIcons';
import { GradientBlobs } from './GradientBlobs';
import { HeroContent } from './HeroContent';

export function Hero() {
  return (
    <div className="relative min-h-[60vh] md:min-h-[70vh] bg-gradient-to-br from-pink-50 via-white to-purple-50 overflow-hidden pt-16 md:pt-20">
      <BackgroundElements />
      <DecorativeIcons />
      <GradientBlobs />
      <HeroContent />
    </div>
  );
}