import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ShoppingCart } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

// ... rest of the imports and product data ...

export function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [hoveredId, setHoveredId] = useState(null);
  const { addItem, setIsOpen: setCartOpen } = useCart();

  const handleAddToCart = (e, product) => {
    e.stopPropagation();
    addItem(product);
    setCartOpen(true);
  };

  // ... rest of the component implementation with the updated handleAddToCart ...
}