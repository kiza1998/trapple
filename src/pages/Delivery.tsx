import React from 'react';
import { Truck, MapPin, Clock } from 'lucide-react';

export function Delivery() {
  return (
    <div className="pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-serif text-[#AA9FCD] text-center mb-8">Доставка</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="w-12 h-12 bg-[#AA9FCD]/10 rounded-full flex items-center justify-center mb-4">
              <Truck className="w-6 h-6 text-[#AA9FCD]" />
            </div>
            <h3 className="text-lg font-medium text-[#AA9FCD] mb-2">Бесплатная доставка</h3>
            <p className="text-gray-600">При заказе от 1500 ₽</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="w-12 h-12 bg-[#AA9FCD]/10 rounded-full flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6 text-[#AA9FCD]" />
            </div>
            <h3 className="text-lg font-medium text-[#AA9FCD] mb-2">Стоимость доставки</h3>
            <ul className="text-gray-600 space-y-2">
              <li>По городу - 100 ₽</li>
              <li>За город - 300 ₽</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="w-12 h-12 bg-[#AA9FCD]/10 rounded-full flex items-center justify-center mb-4">
              <Clock className="w-6 h-6 text-[#AA9FCD]" />
            </div>
            <h3 className="text-lg font-medium text-[#AA9FCD] mb-2">Самовывоз</h3>
            <p className="text-gray-600">Возможен самовывоз по адресу: г. Радужный ХМАО, ул. Ягельная, дом 9</p>
          </div>
        </div>

        <div className="mt-12 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-medium text-[#AA9FCD] mb-4">Условия доставки</h2>
          <ul className="text-gray-600 space-y-3">
            <li className="flex items-start space-x-2">
              <span className="text-[#AA9FCD]">•</span>
              <span>Доставка осуществляется ежедневно с 9:00 до 21:00</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-[#AA9FCD]">•</span>
              <span>Время доставки согласовывается с менеджером при оформлении заказа</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-[#AA9FCD]">•</span>
              <span>При заказе от 1500 ₽ доставка бесплатная в пределах города</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-[#AA9FCD]">•</span>
              <span>Оплата производится при получении заказа</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}