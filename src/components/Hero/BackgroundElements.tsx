import React from 'react';

export function BackgroundElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/90 to-white/85" />
    </div>
  );
}