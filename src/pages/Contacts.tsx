import React, { useRef } from 'react';
import { Phone, Instagram, Send, MessageCircle, MapPin } from 'lucide-react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import emailjs from '@emailjs/browser';

const mapContainerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 62.1368,
  lng: 77.4598
};

export function Contacts() {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formRef.current) {
      emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formRef.current, 'YOUR_PUBLIC_KEY')
        .then(() => {
          alert('Сообщение отправлено!');
        }, () => {
          alert('Произошла ошибка. Попробуйте позже.');
        });
    }
  };

  return (
    <div className="pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-serif text-[#AA9FCD] text-center mb-8">Контакты</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-xl font-medium text-[#AA9FCD] mb-4">Как с нами связаться</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-[#AA9FCD]/10 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 text-[#AA9FCD]" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Телефон</p>
                  <a href="tel:+79129040081" className="text-[#AA9FCD] hover:text-[#B8A5E3]">
                    +7 (912) 904-00-81
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-[#AA9FCD]/10 rounded-full flex items-center justify-center">
                  <Instagram className="w-5 h-5 text-[#AA9FCD]" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Instagram*</p>
                  <a href="https://instagram.com/aveilarusha_desserts" target="_blank" rel="noopener noreferrer" className="text-[#AA9FCD] hover:text-[#B8A5E3]">
                    @aveilarusha_desserts
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-[#AA9FCD]/10 rounded-full flex items-center justify-center">
                  <Send className="w-5 h-5 text-[#AA9FCD]" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Telegram</p>
                  <a href="https://t.me/aveilarusha" target="_blank" rel="noopener noreferrer" className="text-[#AA9FCD] hover:text-[#B8A5E3]">
                    @aveilarusha
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-[#AA9FCD]/10 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-[#AA9FCD]" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">WhatsApp</p>
                  <a href="https://wa.me/79129040081" target="_blank" rel="noopener noreferrer" className="text-[#AA9FCD] hover:text-[#B8A5E3]">
                    +7 (912) 904-00-81
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-[#AA9FCD]/10 rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-[#AA9FCD]" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Адрес</p>
                  <p className="text-[#AA9FCD]">г. Радужный ХМАО, ул. Ягельная, дом 9</p>
                </div>
              </div>
            </div>

            <p className="text-xs text-gray-500 mt-4">*Instagram запрещен на территории РФ</p>
          </div>

          <div>
            <h2 className="text-xl font-medium text-[#AA9FCD] mb-4">Напишите нам</h2>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">Ваше имя</label>
                <input
                  type="text"
                  name="user_name"
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-[#AA9FCD] focus:ring focus:ring-[#AA9FCD]/20 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Email</label>
                <input
                  type="email"
                  name="user_email"
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-[#AA9FCD] focus:ring focus:ring-[#AA9FCD]/20 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Сообщение</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-[#AA9FCD] focus:ring focus:ring-[#AA9FCD]/20 transition-colors"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#AA9FCD] to-[#B8A5E3] text-white py-2 rounded-full hover:shadow-lg transition-all duration-300"
              >
                Отправить
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-xl font-medium text-[#AA9FCD] mb-4">Мы на карте</h2>
          <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              center={center}
              zoom={15}
            >
              <Marker position={center} />
            </GoogleMap>
          </LoadScript>
        </div>
      </div>
    </div>
  );
}