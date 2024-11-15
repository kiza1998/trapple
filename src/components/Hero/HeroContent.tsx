import React from 'react';
import { DecorativeElements } from './DecorativeElements';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';

const hitProducts = [
  {
    id: 1,
    name: "Моти Матча",
    price: "280 ₽",
    description: "Японский десерт с начинкой из зеленого чая матча",
    image: "https://images.unsplash.com/photo-1582716401301-b2407dc7563d?auto=format&fit=crop&q=80"
  },
  {
    id: 8,
    name: "Клубника в шоколаде",
    price: "150 ₽/шт",
    description: "Свежая клубника в бельгийском шоколаде с декором",
    image: "https://images.unsplash.com/photo-1572982669996-98720f6625c7?auto=format&fit=crop&q=80"
  },
  {
    id: 11,
    name: "Классическая бомбочка",
    price: "350 ₽",
    description: "Шоколадная сфера с какао и маршмеллоу внутри",
    image: "https://images.unsplash.com/photo-1631207211500-af5d1fd11df5?auto=format&fit=crop&q=80"
  },
  {
    id: 5,
    name: "Трайфл Ягодный",
    price: "450 ₽",
    description: "Нежный десерт из слоев бисквита, свежих ягод и крема",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80"
  }
];

export function HeroContent() {
  const { addItem, setIsOpen } = useCart();

  const handleAddToCart = (product) => {
    addItem(product);
    setIsOpen(true);
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-start text-center py-8 md:py-12">
      <DecorativeElements />
      <div className="max-w-xl px-4 sm:px-6 lg:px-8 relative z-30">
        <div className="flex flex-col items-center justify-center">
          <div className="relative mb-6">
            <h1 className="text-4xl md:text-8xl font-['Raleway'] text-[#AA9FCD] opacity-0 animate-fade-in tracking-wide font-light drop-shadow-lg backdrop-blur-none">
              aveilarusha
            </h1>
            <p className="text-xs md:text-base text-[#B8A5E3] opacity-0 animate-fade-in animation-delay-300 font-['Raleway'] tracking-[0.3em] uppercase absolute right-0 -bottom-4 md:-bottom-6 drop-shadow-lg">
              desserts
            </p>
          </div>
          <p className="text-base md:text-xl text-[#B8A5E3] mt-8 md:mt-10 opacity-0 animate-fade-in animation-delay-300 font-['Playfair_Display'] italic drop-shadow-lg">
            Тепло севера в каждом кусочке
          </p>
          <div className="mt-8 opacity-0 animate-fade-in animation-delay-600">
            <a 
              href="#menu"
              className="inline-block bg-gradient-to-r from-[#AA9FCD] to-[#B8A5E3] text-white px-8 md:px-10 py-3 md:py-4 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-medium text-sm md:text-base hover:brightness-110 relative overflow-hidden group"
            >
              <span className="relative z-10">Перейти в меню</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#FFD6E8]/50 to-[#AA9FCD]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>
        </div>
      </div>

      <div className="w-full max-w-5xl px-4 sm:px-6 lg:px-8 mt-16">
        <h2 className="text-2xl md:text-3xl font-serif text-[#AA9FCD] mb-6">Хит продаж</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {hitProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <div className="relative aspect-w-1 aspect-h-1">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-cover"
                />
              </div>
              <div className="p-3">
                <h3 className="text-base font-medium text-[#AA9FCD] mb-1">{product.name}</h3>
                <p className="text-xs text-gray-600 mb-2 line-clamp-2">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-[#AA9FCD]">{product.price}</span>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="flex items-center space-x-1 bg-gradient-to-r from-[#AA9FCD] to-[#B8A5E3] text-white px-2 py-1 rounded-full hover:shadow-lg transition-all duration-300 group text-xs"
                  >
                    <ShoppingCart className="w-3 h-3 group-hover:scale-110 transition-transform" />
                    <span>В корзину</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}