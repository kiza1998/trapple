import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const reviews = [
  {
    id: 1,
    name: "Анна",
    rating: 5,
    text: "Заказывала торт на день рождения дочери. Все были в восторге! Особенно понравилось оформление и натуральный вкус.",
    date: "15.02.2024"
  },
  {
    id: 2,
    name: "Михаил",
    rating: 5,
    text: "Моти с матча - это что-то невероятное! Теперь это мой любимый десерт. Спасибо за качество и прекрасный сервис!",
    date: "20.02.2024"
  },
  {
    id: 3,
    name: "Елена",
    rating: 5,
    text: "Шоколадные бомбочки - просто бомба! Дети были в восторге от горячего шоколада внутри. Обязательно закажем еще!",
    date: "01.03.2024"
  }
];

export function About() {
  return (
    <div className="pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-serif text-[#AA9FCD] text-center mb-8">О нас</h1>
        
        <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
          <p>
            Добро пожаловать в aveilarusha desserts — домашнюю кондитерскую, созданную Кизилгюль Ашуралиевой в 2022 году. Мы занимаемся изготовлением десертов с душой и вниманием к каждой детали. В нашей работе мы стремимся к идеалу, используя только самые качественные и натуральные ингредиенты, чтобы каждый кусочек приносил истинное наслаждение.
          </p>

          <h2 className="text-2xl font-serif text-[#AA9FCD] mt-8">Натуральные ингредиенты — основа наших десертов</h2>
          <p>
            В нашей кондитерской мы не идем на компромиссы в вопросах качества. Мы используем только свежие фрукты, натуральные масла, мед и отборный шоколад — без искусственных добавок, красителей или консервантов. Вкус каждого десерта мы формируем, основываясь на лучших традициях кондитерского искусства, и уверены, что каждый продукт, созданный в aveilarusha desserts, — это настоящее произведение искусства.
          </p>

          <h2 className="text-2xl font-serif text-[#AA9FCD] mt-8">Традиции и профессионализм</h2>
          <p>
            В своей работе мы строго придерживаемся всех норм и техник кондитерского мастерства. Благодаря этому, наши десерты всегда получаются не только вкусными, но и эстетически красивыми. Мы уделяем внимание каждому этапу приготовления, чтобы каждая деталь была безупречной.
          </p>

          <h2 className="text-2xl font-serif text-[#AA9FCD] mt-8">Наша философия</h2>
          <p>
            В aveilarusha desserts мы уверены, что хороший десерт способен подарить незабываемые моменты радости и уюта. Именно поэтому мы вкладываем в каждое наше творение частичку души и вдохновения, чтобы каждый клиент мог насладиться не только вкусом, но и атмосферой счастья, которую мы создаем с помощью сладостей.
          </p>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-serif text-[#AA9FCD] text-center mb-8">Отзывы наших клиентов</h2>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            className="mySwiper"
          >
            {reviews.map(review => (
              <SwiperSlide key={review.id}>
                <div className="bg-white p-6 rounded-lg shadow-lg mb-12">
                  <div className="flex items-center mb-4">
                    <div className="flex-1">
                      <h3 className="font-medium text-[#AA9FCD]">{review.name}</h3>
                      <div className="flex items-center">
                        {[...Array(review.rating)].map((_, i) => (
                          <span key={i} className="text-yellow-400">★</span>
                        ))}
                      </div>
                    </div>
                    <span className="text-sm text-gray-500">{review.date}</span>
                  </div>
                  <p className="text-gray-600">{review.text}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}