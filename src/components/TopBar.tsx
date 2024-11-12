import React from 'react';

export function TopBar() {
  return (
    <div className="w-full bg-white py-1 fixed top-0 z-50 hidden md:block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs md:text-sm text-[#AA9FCD]">
          Работаем каждый день с 9:00 до 21:00
        </p>
      </div>
    </div>
  );
}