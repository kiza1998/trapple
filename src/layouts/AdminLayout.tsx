import React from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, Package, ShoppingBag, 
  Star, Truck, LogOut
} from 'lucide-react';
import { supabase } from '../lib/supabase';
import toast from 'react-hot-toast';

const menuItems = [
  { path: '/admin/dashboard', icon: LayoutDashboard, label: 'Панель управления' },
  { path: '/admin/products', icon: Package, label: 'Товары' },
  { path: '/admin/orders', icon: ShoppingBag, label: 'Заказы' },
  { path: '/admin/reviews', icon: Star, label: 'Отзывы' },
  { path: '/admin/delivery', icon: Truck, label: 'Доставка' },
];

export function AdminLayout() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await supabase.auth.signOut();
      navigate('/admin/login');
      toast.success('Вы успешно вышли из системы');
    } catch (error) {
      toast.error('Ошибка при выходе из системы');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Static Sidebar */}
      <aside className="w-64 bg-white shadow-lg">
        <div className="h-full flex flex-col">
          <div className="p-4 border-b">
            <h1 className="text-2xl font-serif text-[#AA9FCD]">Админ панель</h1>
          </div>

          <nav className="flex-1 p-4">
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`flex items-center space-x-3 px-4 py-2.5 rounded-lg transition-colors ${
                      location.pathname === item.path
                        ? 'bg-[#AA9FCD] text-white'
                        : 'text-gray-600 hover:bg-[#AA9FCD]/10'
                    }`}
                  >
                    <item.icon size={20} />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="p-4 border-t">
            <button
              onClick={handleSignOut}
              className="flex items-center space-x-3 px-4 py-2.5 w-full rounded-lg text-gray-600 hover:bg-red-50 hover:text-red-500 transition-colors"
            >
              <LogOut size={20} />
              <span>Выйти</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <Outlet />
      </main>
    </div>
  );
}