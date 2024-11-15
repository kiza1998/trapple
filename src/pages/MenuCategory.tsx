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
      description: "Японский десерт с начинкой из зеленого чая матча. Нежное рисовое тесто скрывает в себе начинку с насыщенным вкусом зеленого чая.",
      image: "https://images.unsplash.com/photo-1582716401301-b2407dc7563d?auto=format&fit=crop&q=80",
      details: "Состав: рисовая мука, матча, сливки, сахар, кукурузный крахмал"
    },
    {
      id: 2,
      name: "Моти Манго",
      price: "280 ₽",
      description: "Тропический вкус манго в традиционной японской оболочке. Сочная начинка из спелого манго создает неповторимое сочетание вкусов.",
      image: "https://images.unsplash.com/photo-1582716401524-7ded7080d2d4?auto=format&fit=crop&q=80",
      details: "Состав: рисовая мука, пюре манго, сливки, сахар, кукурузный крахмал"
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
      name: "Трайфл Ягодный",
      price: "450 ₽",
      description: "Нежный десерт из слоев бисквита, свежих ягод, крема и ягодного желе",
      image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80",
      details: "Состав: ванильный бисквит, малина, голубика, крем-чиз, сливки, ягодное желе"
    },
    {
      id: 6,
      name: "Трайфл Шоколадный",
      price: "450 ₽",
      description: "Шоколадный бисквит с кремом и шоколадной крошкой",
      image: "https://images.unsplash.com/photo-1508737027454-e6454ef45afd?auto=format&fit=crop&q=80",
      details: "Состав: шоколадный бисквит, шоколадный крем, ганаш, какао"
    },
    {
      id: 7,
      name: "Трайфл Карамельный",
      price: "450 ₽",
      description: "Карамельный трайфл с соленой карамелью и орехами",
      image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&q=80",
      details: "Состав: карамельный бисквит, соленая карамель, сливочный крем, орехи"
    }
  ],
  chocolate_fruits: [
    {
      id: 8,
      name: "Клубника в шоколаде",
      price: "150 ₽/шт",
      description: "Свежая клубника в бельгийском шоколаде с декором",
      image: "https://images.unsplash.com/photo-1572982669996-98720f6625c7?auto=format&fit=crop&q=80",
      details: "Состав: клубника, бельгийский шоколад, кондитерский декор"
    },
    {
      id: 9,
      name: "Малина в шоколаде",
      price: "120 ₽/шт",
      description: "Сочная малина в белом шоколаде",
      image: "https://images.unsplash.com/photo-1481391319762-47dff72954d9?auto=format&fit=crop&q=80",
      details: "Состав: малина, белый шоколад, кондитерский декор"
    },
    {
      id: 10,
      name: "Ассорти фруктов",
      price: "800 ₽/набор",
      description: "Набор из разных фруктов в трех видах шоколада",
      image: "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?auto=format&fit=crop&q=80",
      details: "Состав: клубника, малина, виноград в молочном, белом и темном шоколаде"
    }
  ],
  chocolate_bombs: [
    {
      id: 11,
      name: "Классическая бомбочка",
      price: "350 ₽",
      description: "Шоколадная сфера с какао и маршмеллоу внутри",
      image: "https://images.unsplash.com/photo-1631207211500-af5d1fd11df5?auto=format&fit=crop&q=80",
      details: "Состав: бельгийский шоколад, какао-порошок, маршмеллоу, декор"
    },
    {
      id: 12,
      name: "Карамельная бомбочка",
      price: "380 ₽",
      description: "Молочный шоколад с карамельным какао внутри",
      image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&q=80",
      details: "Состав: молочный шоколад, карамельный соус, какао, маршмеллоу"
    },
    {
      id: 13,
      name: "Малиновая бомбочка",
      price: "380 ₽",
      description: "Белый шоколад с малиновым какао и сублимированной малиной",
      image: "https://images.unsplash.com/photo-1481391243133-f96216dcb5d2?auto=format&fit=crop&q=80",
      details: "Состав: белый шоколад, малиновый порошок, какао, маршмеллоу, сублимированная малина"
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
  const { addItem, setIsOpen } = useCart();

  if (!category || !menuItems[category]) {
    return <div>Категория не найдена</div>;
  }

  const handleAddToCart = (item) => {
    addItem(item);
    setIsOpen(true);
  };

  return (
    <div className="pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-serif text-[#AA9FCD] text-center mb-8">
          {categoryTitles[category]}
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {menuItems[category].map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <div className="relative aspect-w-16 aspect-h-9">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium text-[#AA9FCD]">{item.name}</h3>
                <p className="mt-2 text-gray-600 text-sm">{item.description}</p>
                {item.details && (
                  <p className="mt-2 text-xs text-gray-500">{item.details}</p>
                )}
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-lg font-medium text-[#AA9FCD]">{item.price}</span>
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="flex items-center space-x-2 bg-gradient-to-r from-[#AA9FCD] to-[#B8A5E3] text-white px-4 py-2 rounded-full hover:shadow-lg transition-all duration-300 group"
                  >
                    <ShoppingCart className="w-4 h-4 group-hover:scale-110 transition-transform" />
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