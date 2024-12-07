import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from './ProductCard';
import { selectAllProducts } from '../../store/slices/productsSlice';

export default function ProductGrid() {
  const products = useSelector(selectAllProducts);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-serif text-center mb-8">Featured Collections</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}