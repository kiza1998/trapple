import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ShoppingCart, AlertCircle } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { supabase } from '../lib/supabase';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image_url: string;
  ingredients: string;
  is_available: boolean;
}

export function MenuCategory() {
  const { category } = useParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [categoryName, setCategoryName] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { addItem, setIsOpen } = useCart();

  useEffect(() => {
    if (category) {
      fetchProducts();
    }
  }, [category]);

  async function fetchProducts() {
    try {
      setLoading(true);
      setError(null);

      // Convert URL parameter to proper category name format
      const formattedCategory = category!.replace(/_/g, ' ');

      const { data: categoryData, error: categoryError } = await supabase
        .from('categories')
        .select('id, name')
        .ilike('name', formattedCategory)
        .limit(1);

      if (categoryError) throw categoryError;
      
      if (categoryData && categoryData.length > 0) {
        setCategoryName(categoryData[0].name);
        
        const { data: productsData, error: productsError } = await supabase
          .from('products')
          .select('*')
          .eq('category_id', categoryData[0].id)
          .eq('is_available', true)
          .order('name');

        if (productsError) throw productsError;
        setProducts(productsData || []);
      } else {
        setError('Категория не найдена');
      }
    } catch (error) {
      console.error('Error fetching products:', error);
      setError('Не удалось загрузить товары. Пожалуйста, попробуйте позже.');
    } finally {
      setLoading(false);
    }
  }

  const handleAddToCart = (product: Product) => {
    addItem({
      id: product.id,
      name: product.name,
      price: `${product.price} ₽`,
      quantity: 1
    });
    setIsOpen(true);
  };

  if (!category) {
    return (
      <div className="pt-24 pb-12 text-center text-gray-500">
        Категория не найдена
      </div>
    );
  }

  if (loading) {
    return (
      <div className="pt-24 pb-12 flex justify-center items-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#AA9FCD]"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="pt-24 pb-12 flex justify-center items-center">
        <div className="bg-red-50 text-red-500 px-4 py-3 rounded-lg flex items-center">
          <AlertCircle className="w-5 h-5 mr-2" />
          <span>{error}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-serif text-[#AA9FCD] text-center mb-8 dark:text-[#B8A5E3]">
          {categoryName}
        </h1>

        {products.length === 0 ? (
          <p className="text-center text-gray-500">В данной категории пока нет товаров</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white dark:bg-dark-card rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <div className="relative aspect-w-16 aspect-h-9">
                  <img
                    src={product.image_url || 'https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?auto=format&fit=crop&q=80'}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                    onError={(e) => {
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?auto=format&fit=crop&q=80';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-medium text-[#AA9FCD] dark:text-[#B8A5E3]">{product.name}</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm">{product.description}</p>
                  {product.ingredients && (
                    <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">Состав: {product.ingredients}</p>
                  )}
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-lg font-medium text-[#AA9FCD] dark:text-[#B8A5E3]">{product.price} ₽</span>
                    <button
                      onClick={() => handleAddToCart(product)}
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
        )}
      </div>
    </div>
  );
}