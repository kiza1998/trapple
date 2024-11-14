import React, { useState } from 'react';
import { Sparkles, ShoppingCart } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Трайфл Орео",
    price: "450 ₽",
    images: [
      "https://images.unsplash.com/photo-1586917049334-0f493841870c?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586916916021-a011e9e6aa44?auto=format&fit=crop&q=80"
    ],
    description: "Нежный сливочный крем, прослойка из печенья Орео, шоколадный ганаш",
    composition: "Сливки, маскарпоне, печенье Орео, темный шоколад, какао",
    rating: 4.9
  },
  {
    id: 2,
    name: "Моти Матча",
    price: "280 ₽",
    images: [
      "https://images.unsplash.com/photo-1582716401301-b2407dc7563d?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1582716401524-7ded7080d2d4?auto=format&fit=crop&q=80"
    ],
    description: "Японский десерт с начинкой из зеленого чая",
    composition: "Рисовая мука, матча, сливки, сахар, кукурузный крахмал",
    rating: 4.8
  },
  {
    id: 3,
    name: "Шоколадные бомбочки",
    price: "350 ₽",
    images: [
      "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1606312618685-b196cf5cd09c?auto=format&fit=crop&q=80"
    ],
    description: "Горячий шоколад с сюрпризом внутри",
    composition: "Бельгийский шоколад, маршмеллоу, какао-порошок",
    rating: 5.0
  }
];

export function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [hoveredId, setHoveredId] = useState(null);

  const handleAddToCart = (e, productId) => {
    e.stopPropagation();
    window.open('https://wa.me/79129040081?text=' + encodeURIComponent(`Здравствуйте! Хочу заказать ${products.find(p => p.id === productId).name}`), '_blank');
  };

  return (
    <section className="py-8 md:py-12 bg-gradient-to-br from-[#AA9FCD] via-[#B8A5E3] to-[#AA9FCD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-serif text-white text-shadow relative inline-block">
            Хит продаж
            <Sparkles className="absolute -top-4 -right-6 w-6 h-6 text-white/50 animate-sparkle" />
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product) => (
            <div 
              key={product.id}
              className="group relative overflow-hidden cursor-pointer rounded-2xl shadow-lg bg-white/90 backdrop-blur-sm transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => {
                setSelectedProduct(product);
                setCurrentImageIndex(0);
              }}
            >
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden relative">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="h-48 md:h-56 w-full object-cover object-center transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Sparkles 
                  className={`absolute top-4 right-4 w-6 h-6 ${
                    hoveredId === product.id ? 'text-white' : 'text-white/50'
                  } transition-all duration-300 animate-sparkle`}
                />
              </div>
              <div className="p-4 md:p-5">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg md:text-xl font-medium text-[#AA9FCD]">
                    {product.name}
                  </h3>
                  <div className="flex items-center">
                    <span className="text-sm text-[#AA9FCD]/70">{product.rating}</span>
                  </div>
                </div>
                <p className="text-base md:text-lg font-medium text-[#AA9FCD]">
                  {product.price}
                </p>
                <div className="mt-2 text-sm text-gray-500 line-clamp-2">
                  {product.description}
                </div>
                <button
                  onClick={(e) => handleAddToCart(e, product.id)}
                  className="mt-4 w-full bg-gradient-to-r from-[#AA9FCD] to-[#B8A5E3] text-white px-4 py-2 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <ShoppingCart className="w-4 h-4" />
                  <span>Добавить в корзину</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProduct && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
          <div className="bg-white rounded-2xl w-full max-w-md md:max-w-2xl overflow-hidden shadow-2xl transform transition-all duration-300">
            <div className="relative">
              <img
                src={selectedProduct.images[currentImageIndex]}
                alt={selectedProduct.name}
                className="w-full h-48 md:h-64 object-cover"
              />
              <div className="absolute bottom-4 right-4 flex space-x-2">
                {selectedProduct.images.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      currentImageIndex === index ? 'bg-white w-4' : 'bg-white/50'
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex(index);
                    }}
                  />
                ))}
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-medium text-[#AA9FCD]">
                  {selectedProduct.name}
                </h3>
                <div className="flex items-center">
                  <span className="text-lg font-medium text-[#AA9FCD]/70">{selectedProduct.rating}</span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">{selectedProduct.description}</p>
              <h4 className="font-medium text-[#AA9FCD] mb-2">Состав:</h4>
              <p className="text-gray-600 mb-6">{selectedProduct.composition}</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-medium text-[#AA9FCD]">
                  {selectedProduct.price}
                </span>
                <div className="flex space-x-3">
                  <button
                    onClick={(e) => handleAddToCart(e, selectedProduct.id)}
                    className="bg-gradient-to-r from-[#AA9FCD] to-[#B8A5E3] text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    <span>В корзину</span>
                  </button>
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="px-6 py-2 border border-[#AA9FCD] text-[#AA9FCD] rounded-full hover:bg-[#AA9FCD]/5 transition-all duration-300"
                  >
                    Закрыть
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}