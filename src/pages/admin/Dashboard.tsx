import React, { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import { Link } from 'react-router-dom';
import { Package, ShoppingBag, Truck, Star, AlertCircle } from 'lucide-react';
import toast from 'react-hot-toast';

export function Dashboard() {
  const [stats, setStats] = useState({
    totalOrders: 0,
    pendingOrders: 0,
    totalProducts: 0,
    totalReviews: 0
  });

  useEffect(() => {
    fetchStats();
  }, []);

  async function fetchStats() {
    try {
      const [orders, products, reviews] = await Promise.all([
        supabase.from('orders').select('*', { count: 'exact' }),
        supabase.from('products').select('*', { count: 'exact' }),
        supabase.from('reviews').select('*', { count: 'exact' })
      ]);

      const pendingOrders = await supabase
        .from('orders')
        .select('*', { count: 'exact' })
        .eq('status', 'pending');

      setStats({
        totalOrders: orders.count || 0,
        pendingOrders: pendingOrders.count || 0,
        totalProducts: products.count || 0,
        totalReviews: reviews.count || 0
      });
    } catch (error) {
      toast.error('Ошибка при загрузке статистики');
    }
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-serif text-[#AA9FCD] mb-6">Панель управления</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Всего заказов</p>
              <p className="text-2xl font-semibold text-[#AA9FCD]">{stats.totalOrders}</p>
            </div>
            <ShoppingBag className="w-8 h-8 text-[#AA9FCD]" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Ожидают обработки</p>
              <p className="text-2xl font-semibold text-[#FFD6E8]">{stats.pendingOrders}</p>
            </div>
            <AlertCircle className="w-8 h-8 text-[#FFD6E8]" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Товаров</p>
              <p className="text-2xl font-semibold text-[#AA9FCD]">{stats.totalProducts}</p>
            </div>
            <Package className="w-8 h-8 text-[#AA9FCD]" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Отзывов</p>
              <p className="text-2xl font-semibold text-[#AA9FCD]">{stats.totalReviews}</p>
            </div>
            <Star className="w-8 h-8 text-[#AA9FCD]" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-medium text-[#AA9FCD] mb-4">Быстрые действия</h2>
          <div className="grid grid-cols-2 gap-4">
            <Link
              to="/admin/orders"
              className="flex items-center justify-center p-4 bg-[#AA9FCD]/10 rounded-lg hover:bg-[#AA9FCD]/20 transition-colors"
            >
              <ShoppingBag className="w-5 h-5 text-[#AA9FCD] mr-2" />
              <span className="text-[#AA9FCD]">Заказы</span>
            </Link>
            <Link
              to="/admin/products"
              className="flex items-center justify-center p-4 bg-[#AA9FCD]/10 rounded-lg hover:bg-[#AA9FCD]/20 transition-colors"
            >
              <Package className="w-5 h-5 text-[#AA9FCD] mr-2" />
              <span className="text-[#AA9FCD]">Товары</span>
            </Link>
            <Link
              to="/admin/delivery"
              className="flex items-center justify-center p-4 bg-[#AA9FCD]/10 rounded-lg hover:bg-[#AA9FCD]/20 transition-colors"
            >
              <Truck className="w-5 h-5 text-[#AA9FCD] mr-2" />
              <span className="text-[#AA9FCD]">Доставка</span>
            </Link>
            <Link
              to="/admin/reviews"
              className="flex items-center justify-center p-4 bg-[#AA9FCD]/10 rounded-lg hover:bg-[#AA9FCD]/20 transition-colors"
            >
              <Star className="w-5 h-5 text-[#AA9FCD] mr-2" />
              <span className="text-[#AA9FCD]">Отзывы</span>
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-medium text-[#AA9FCD] mb-4">Последние заказы</h2>
          {/* Recent orders will be displayed here */}
        </div>
      </div>
    </div>
  );
}