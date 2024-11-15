import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { AlertCircle } from 'lucide-react';

interface Category {
  id: string;
  name: string;
  description: string;
  image_url: string;
}

export function Products() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchCategories();
  }, []);

  async function fetchCategories() {
    try {
      setLoading(true);
      setError(null);
      
      const { data, error } = await supabase
        .from('categories')
        .select('*')
        .order('name');

      if (error) throw error;
      setCategories(data || []);
    } catch (error) {
      console.error('Error fetching categories:', error);
      setError('Не удалось загрузить категории. Пожалуйста, попробуйте позже.');
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="py-12 flex justify-center items-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#AA9FCD]"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-12 flex justify-center items-center">
        <div className="bg-red-50 text-red-500 px-4 py-3 rounded-lg flex items-center">
          <AlertCircle className="w-5 h-5 mr-2" />
          <span>{error}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12" id="menu">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-serif text-[#AA9FCD] text-center mb-12">Наше меню</h2>
        
        {categories.length === 0 ? (
          <p className="text-center text-gray-500">Категории пока не добавлены</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/menu/${category.name.toLowerCase().replace(/\s+/g, '_')}`}
                className="group relative overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={category.image_url || 'https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?auto=format&fit=crop&q=80'}
                    alt={category.name}
                    className="w-full h-32 object-cover"
                    onError={(e) => {
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?auto=format&fit=crop&q=80';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="text-xl font-medium mb-1">{category.name}</h3>
                  <p className="text-sm text-white/80 line-clamp-2">{category.description}</p>
                </div>
                <div className="absolute inset-0 bg-[#AA9FCD]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}