import React from 'react';

const products = [
  {
    id: 1,
    name: "Чёрный Зимний Трюфель",
    price: "15 000 ₽",
    image: "https://images.unsplash.com/photo-1632914146197-a21766479828?auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    name: "Белый Трюфель Альба",
    price: "28 000 ₽",
    image: "https://images.unsplash.com/photo-1600803907087-f56d462fd26b?auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    name: "Летний Трюфель",
    price: "12 000 ₽",
    image: "https://images.unsplash.com/photo-1631373153310-4f4b048b3c3c?auto=format&fit=crop&q=80"
  }
];

export function Products() {
  return (
    <section className="py-24 transition-colors duration-300 dark:bg-zinc-800 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-serif text-center mb-16 transition-colors duration-300 dark:text-white text-gray-900">
          Избранная Коллекция
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {products.map((product) => (
            <div 
              key={product.id}
              className="group relative overflow-hidden cursor-pointer rounded-lg shadow-lg"
            >
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-medium transition-colors duration-300 dark:text-white text-gray-900">
                  {product.name}
                </h3>
                <p className="mt-1 text-lg font-light transition-colors duration-300 dark:text-gray-300 text-gray-600">
                  {product.price}
                </p>
              </div>
              <div className="absolute inset-0 bg-purple-600/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="bg-white text-gray-900 px-6 py-2 rounded-lg transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300 hover:bg-purple-100">
                  В корзину
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;