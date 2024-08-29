import React from 'react';
import ProductCard from './ProductCard';

const products = [
  { id: 1, name: 'Great item name goes here', price: 1280, oldPrice: 1980, image: '/placeholder.svg', description: 'Product description' },
  { id: 2, name: 'Product name goes here just for demo item', price: 1280, image: '/placeholder.svg', description: 'Product description' },
  { id: 3, name: 'Product name goes here just for demo item', price: 1280, image: '/placeholder.svg', description: 'Product description' },
];

const ProductList = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <p>32 Items found</p>
        <select className="border p-2 rounded">
          <option>Latest items</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
