import React from 'react';

export function TopBar() {
  return (
    <div className="w-full bg-transparent backdrop-blur-sm py-0.5 fixed top-0 z-50 hidden md:block border-b border-[#AA9FCD]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs text-[#AA9FCD]">
          Работаем каждый день с 9:00 до 21:00
        </p>
      </div>
    </div>
  );
}