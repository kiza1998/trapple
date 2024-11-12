import React from 'react';

export function Footer() {
  return (
    <footer className="transition-colors duration-300 dark:bg-black bg-white dark:text-gray-400 text-gray-600 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="transition-colors duration-300 dark:text-white text-gray-900 font-serif text-lg mb-4">О нас</h3>
            <p className="text-sm">
              Трапл - ваш надёжный поставщик элитных трюфелей с 1970 года.
              Мы гарантируем высочайшее качество и подлинность каждого трюфеля.
            </p>
          </div>
          <div>
            <h3 className="transition-colors duration-300 dark:text-white text-gray-900 font-serif text-lg mb-4">Контакты</h3>
            <p className="text-sm">Телефон: +7 (999) 123-45-67</p>
            <p className="text-sm">Email: info@trapl.ru</p>
            <p className="text-sm">Адрес: Москва, ул. Трюфельная, 1</p>
          </div>
          <div>
            <h3 className="transition-colors duration-300 dark:text-white text-gray-900 font-serif text-lg mb-4">Рассылка</h3>
            <p className="text-sm mb-4">Подпишитесь на новости и специальные предложения</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Ваш email"
                className="bg-gray-100 dark:bg-zinc-800 text-gray-900 dark:text-white px-4 py-2 flex-grow rounded-l-lg"
              />
              <button className="bg-purple-600 text-white px-4 py-2 rounded-r-lg hover:bg-purple-700 transition-colors">
                Подписаться
              </button>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t dark:border-zinc-800 border-gray-200 text-center text-sm">
          <p>© 2024 Трапл. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;