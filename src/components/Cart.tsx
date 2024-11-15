import React from 'react';
import { ShoppingCart as CartIcon, X, Plus, Minus } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

export function Cart() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity } = useCart();

  const total = items.reduce((sum, item) => {
    const price = parseInt(item.price.replace(/[^\d]/g, ''));
    return sum + price * item.quantity;
  }, 0);

  const handleCheckout = () => {
    const message = `Здравствуйте! Хочу сделать заказ:\n\n${items.map(item => 
      `${item.name} - ${item.quantity} шт.`
    ).join('\n')}\n\nИтого: ${total} ₽`;
    
    window.open(`https://wa.me/79129040081?text=${encodeURIComponent(message)}`, '_blank');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed right-0 top-0 h-full w-full md:w-96 bg-white shadow-xl z-50 transform transition-transform duration-300">
      <div className="p-4 bg-gradient-to-r from-[#AA9FCD] to-[#B8A5E3] text-white flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <CartIcon className="w-5 h-5" />
          <span className="font-medium">Корзина</span>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="p-1 hover:bg-white/20 rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="p-4 flex-1 overflow-auto">
        {items.length === 0 ? (
          <p className="text-center text-gray-500 mt-4">Корзина пуста</p>
        ) : (
          <div className="space-y-4">
            {items.map(item => (
              <div key={item.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <h3 className="font-medium text-[#AA9FCD]">{item.name}</h3>
                  <p className="text-sm text-gray-500">{item.price}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                    className="p-1 hover:bg-gray-200 rounded-full transition-colors"
                  >
                    <Minus className="w-4 h-4 text-[#AA9FCD]" />
                  </button>
                  <span className="w-8 text-center">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="p-1 hover:bg-gray-200 rounded-full transition-colors"
                  >
                    <Plus className="w-4 h-4 text-[#AA9FCD]" />
                  </button>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="p-1 hover:bg-gray-200 rounded-full transition-colors ml-2"
                  >
                    <X className="w-4 h-4 text-red-500" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {items.length > 0 && (
        <div className="p-4 border-t border-gray-200">
          <div className="flex justify-between items-center mb-4">
            <span className="font-medium">Итого:</span>
            <span className="font-medium text-[#AA9FCD]">{total} ₽</span>
          </div>
          <button
            onClick={handleCheckout}
            className="w-full bg-gradient-to-r from-[#AA9FCD] to-[#B8A5E3] text-white py-2 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Оформить заказ
          </button>
        </div>
      )}
    </div>
  );
}