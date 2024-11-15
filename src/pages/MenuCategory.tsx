import React from 'react';
import { useParams } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

const menuItems = {
  mochi: [
    {
      id: 1,
      name: "Моти Матча",
      price: "280 ₽",
      description: "Японский десерт с начинкой из зеленого чая",
      image: "https://images.unsplash.com/photo-1582716401301-b2407dc7563d?auto=format&fit=crop&q=80"
    },
    {
      id: 2,
      name: "Моти Манго",
      price: "280 ₽",
      description: "Сочная начинка из спелого манго",
      image: "https://images.unsplash.com/photo-1582716401524-7ded7080d2d4?auto=format&fit=crop&q=80"
    }
  ],
  cakes: [
    {
      id: 3,
      name: "Торт Красный бархат",
      price: "2500 ₽",
      description: "Классический красный бархат с кремом из маскарпоне",
      image: "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?auto=format&fit=crop&q=80"
    },
    {
      id: 4,
      name: "Торт Морковный",
      price: "2200 ₽",
      description: "Нежный морковный торт с грецкими орехами",
      image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&q=80"
    }
  ],
  trifles: [
    {
      id: 5,
      name: "Трайфл Орео",
      price: "450 ₽",
      description: "Слои шоколадного бисквита с кремом и печеньем Орео",
      image: "https://images.unsplash.com/photo-1586917049334-0f493841870c?auto=format&fit=crop&q=80"
    }
  ],
  chocolate_fruits: [
    {
      id: 6,
      name: "Клубника в шоколаде",
      price: "150 ₽",
      description: "Свежая клубника в бельгийском шоколаде",
      image: "https://images.unsplash.com/photo-1582716401301-b2407dc7563d?auto=format&fit=crop&q=80"
    }
  ],
  chocolate_bombs: [
    {
      id: 7,
      name: "Шоколадная бомбочка",
      price: "350 ₽",
      description: "Горячий шоколад с маршмеллоу внутри",
      image: "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?auto=format&fit=crop&q=80"
    }
  ]
};

const categoryTitles = {
  mochi: "Моти",
  cakes: "Торты",
  trifles: "Трайфлы",
  chocolate_fruits: "Фрукты в шоколаде",
  chocolate_bombs: "Шоколадные бомбочки"
};

export function MenuCategory() {
  const { category } = useParams();
  const { addItem } = useCart();

  if (!category || !menuItems[category]) {
    return <div>Категория не найдена</div>;
  }

  return (
    <div className="pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-serif text-[#AA9FCD] text-center mb-8">
          {categoryTitles[category]}
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {menuItems[category].map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium text-[#AA9FCD]">{item.name}</h3>
                <p className="mt-1 text-gray-600">{item.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-lg font-medium text-[#AA9FCD]">{item.price}</span>
                  <button
                    onClick={() => addItem(item)}
                    className="flex items-center space-x-2 bg-gradient-to-r from-[#AA9FCD] to-[#B8A5E3] text-white px-4 py-2 rounded-full hover:shadow-lg transition-all duration-300"
                  >
                    <ShoppingCart className="w-4 h-4" />
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