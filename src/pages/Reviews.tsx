import React from 'react';
import { Star, ThumbsUp, Heart } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: "Анна Петрова",
    rating: 5,
    date: "15.03.2024",
    text: "Заказывала торт на день рождения дочери. Все гости были в восторге! Особенно понравилось оформление и натуральный вкус ягод.",
    likes: 24,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    name: "Михаил Иванов",
    rating: 5,
    date: "12.03.2024",
    text: "Моти с матча - это что-то невероятное! Теперь это мой любимый десерт. Спасибо за качество и прекрасный сервис!",
    likes: 18
  },
  {
    id: 3,
    name: "Елена Сидорова",
    rating: 5,
    date: "10.03.2024",
    text: "Шоколадные бомбочки просто восхитительные! Дети были в восторге от горячего шоколада внутри.",
    likes: 15,
    image: "https://images.unsplash.com/photo-1631207241077-49b7c0168d5c?auto=format&fit=crop&q=80"
  },
  {
    id: 4,
    name: "Дмитрий Козлов",
    rating: 5,
    date: "08.03.2024",
    text: "Трайфлы превзошли все ожидания! Каждый слой - это отдельное произведение искусства.",
    likes: 21
  },
  {
    id: 5,
    name: "Ольга Морозова",
    rating: 5,
    date: "05.03.2024",
    text: "Клубника в шоколаде - идеальный подарок! Красиво упаковано, вкусно и свежо.",
    likes: 19,
    image: "https://images.unsplash.com/photo-1572982669996-98720f6625c7?auto=format&fit=crop&q=80"
  },
  {
    id: 6,
    name: "Сергей Николаев",
    rating: 5,
    date: "03.03.2024",
    text: "Заказывал набор моти на корпоратив. Коллеги были в восторге! Особенно понравился вкус манго.",
    likes: 16
  },
  {
    id: 7,
    name: "Татьяна Белова",
    rating: 5,
    date: "01.03.2024",
    text: "Морковный торт просто тает во рту! Очень нежный и в меру сладкий.",
    likes: 23,
    image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&q=80"
  },
  {
    id: 8,
    name: "Андрей Соколов",
    rating: 5,
    date: "28.02.2024",
    text: "Регулярно заказываю десерты для семейных праздников. Всегда идеальное качество и вкус!",
    likes: 17
  },
  {
    id: 9,
    name: "Мария Волкова",
    rating: 5,
    date: "25.02.2024",
    text: "Спасибо за чудесные капкейки! Оформление просто волшебное!",
    likes: 20
  },
  {
    id: 10,
    name: "Игорь Медведев",
    rating: 5,
    date: "22.02.2024",
    text: "Заказывал торт на свадьбу. Все гости были в восторге от дизайна и вкуса!",
    likes: 28,
    image: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&q=80"
  },
  {
    id: 11,
    name: "Наталья Кузнецова",
    rating: 5,
    date: "20.02.2024",
    text: "Трайфл с карамелью - это просто восторг! Обязательно закажу еще!",
    likes: 22
  },
  {
    id: 12,
    name: "Павел Орлов",
    rating: 5,
    date: "18.02.2024",
    text: "Очень понравились шоколадные конфеты ручной работы. Отличный подарок!",
    likes: 14
  },
  {
    id: 13,
    name: "Евгения Попова",
    rating: 5,
    date: "15.02.2024",
    text: "Макаруны просто тают во рту! Идеальное сочетание хрустящего и нежного.",
    likes: 19
  },
  {
    id: 14,
    name: "Артем Лебедев",
    rating: 5,
    date: "12.02.2024",
    text: "Заказывал набор десертов на день рождения. Все было просто превосходно!",
    likes: 21
  },
  {
    id: 15,
    name: "Ксения Новикова",
    rating: 5,
    date: "10.02.2024",
    text: "Торт 'Красный бархат' превзошел все ожидания! Очень нежный и вкусный.",
    likes: 25,
    image: "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?auto=format&fit=crop&q=80"
  },
  {
    id: 16,
    name: "Виктор Смирнов",
    rating: 5,
    date: "08.02.2024",
    text: "Регулярно заказываю моти для семьи. Всегда свежие и вкусные!",
    likes: 16
  },
  {
    id: 17,
    name: "Алина Федорова",
    rating: 5,
    date: "05.02.2024",
    text: "Потрясающие эклеры! Крем просто восхитительный!",
    likes: 18
  },
  {
    id: 18,
    name: "Роман Захаров",
    rating: 5,
    date: "03.02.2024",
    text: "Заказывал торт на юбилей мамы. Все были в восторге от оформления и вкуса!",
    likes: 23
  },
  {
    id: 19,
    name: "Светлана Григорьева",
    rating: 5,
    date: "01.02.2024",
    text: "Чизкейк просто тает во рту! Идеальный десерт для любого случая.",
    likes: 20
  },
  {
    id: 20,
    name: "Денис Максимов",
    rating: 5,
    date: "29.01.2024",
    text: "Заказывал набор пирожных на корпоратив. Коллеги были в восторге!",
    likes: 17
  }
];

export function Reviews() {
  return (
    <div className="pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-serif text-[#AA9FCD] text-center mb-8">Отзывы наших клиентов</h1>
        
        <div className="grid gap-6">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white dark:bg-dark-card rounded-lg shadow-md p-6 transform hover:scale-[1.02] transition-transform duration-300">
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium text-[#AA9FCD]">{review.name}</h3>
                    <span className="text-sm text-gray-500">{review.date}</span>
                  </div>
                  
                  <div className="flex items-center mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{review.text}</p>
                  
                  {review.image && (
                    <div className="mb-4">
                      <img 
                        src={review.image} 
                        alt="Фото десерта" 
                        className="rounded-lg w-full h-48 object-cover"
                      />
                    </div>
                  )}
                  
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <ThumbsUp className="w-4 h-4" />
                      <span>{review.likes}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Heart className="w-4 h-4" />
                      <span>Рекомендует</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}