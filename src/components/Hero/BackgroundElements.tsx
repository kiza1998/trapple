import React from 'react';

export function BackgroundElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-white/30 to-white/20" />
    </div>
  );
}