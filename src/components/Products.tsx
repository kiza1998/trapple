import React, { useState } from 'react';

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
    composition: "Сливки, маскарпоне, печенье Орео, темный шоколад, какао"
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
    composition: "Рисовая мука, матча, сливки, сахар, кукурузный крахмал"
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
    composition: "Бельгийский шоколад, маршмеллоу, какао-порошок"
  }
];

export function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <section className="py-12 bg-[#AA9FCD]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-serif text-center mb-8 text-white">
          Хит продаж
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div 
              key={product.id}
              className="group relative overflow-hidden cursor-pointer rounded-lg shadow-lg bg-white transform hover:scale-105 transition-all duration-300"
              onClick={() => {
                setSelectedProduct(product);
                setCurrentImageIndex(0);
              }}
            >
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="h-56 w-full object-cover object-center"
                />
              </div>
              <div className="p-3">
                <h3 className="text-lg font-medium text-[#AA9FCD]">
                  {product.name}
                </h3>
                <p className="mt-1 text-base font-light text-[#AA9FCD]/80">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProduct && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full overflow-hidden">
            <div className="relative">
              <img
                src={selectedProduct.images[currentImageIndex]}
                alt={selectedProduct.name}
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-4 right-4 flex space-x-2">
                {selectedProduct.images.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full ${
                      currentImageIndex === index ? 'bg-white' : 'bg-white/50'
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
              <h3 className="text-2xl font-medium text-gray-900 mb-2">
                {selectedProduct.name}
              </h3>
              <p className="text-gray-600 mb-4">{selectedProduct.description}</p>
              <h4 className="font-medium text-gray-900 mb-2">Состав:</h4>
              <p className="text-gray-600 mb-4">{selectedProduct.composition}</p>
              <div className="flex justify-between items-center">
                <span className="text-xl font-medium text-gray-900">
                  {selectedProduct.price}
                </span>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="bg-[#AA9FCD] text-white px-6 py-2 rounded-lg hover:bg-[#9A8FBD] transition-colors"
                >
                  Закрыть
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Products;