import React from 'react';
import ProductCard from './ProductCard';

const products = [
  { id: 1, name: 'Tên sản phẩm tuyệt vời ở đây', price: 1280000, oldPrice: 1980000, image: '/placeholder.svg', description: 'Mô tả sản phẩm' },
  { id: 2, name: 'Tên sản phẩm ở đây chỉ để demo', price: 1280000, image: '/placeholder.svg', description: 'Mô tả sản phẩm' },
  { id: 3, name: 'Tên sản phẩm ở đây chỉ để demo', price: 1280000, image: '/placeholder.svg', description: 'Mô tả sản phẩm' },
];

const ProductList = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <p>Tìm thấy 32 sản phẩm</p>
        <select className="border p-2 rounded">
          <option>Sản phẩm mới nhất</option>
          <option>Giá: Thấp đến Cao</option>
          <option>Giá: Cao đến Thấp</option>
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
