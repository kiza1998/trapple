import React from 'react';

export function GradientBlobs() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-[#FFD6E8]/30 to-[#AA9FCD]/30 rounded-full blur-lg animate-float"></div>
      <div className="absolute top-40 -left-10 w-32 h-32 bg-gradient-to-tl from-[#AA9FCD]/30 to-[#FFD6E8]/30 rounded-full blur-lg animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-tr from-[#FFD6E8]/30 to-[#AA9FCD]/30 rounded-full blur-lg animate-float" style={{ animationDelay: '2s' }}></div>
    </div>
  );
}