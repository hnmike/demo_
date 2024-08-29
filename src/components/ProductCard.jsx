import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ProductCard = ({ product }) => {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
          <p className="text-gray-600 mb-2">{product.description}</p>
          <div className="flex items-center justify-between">
            <span className="font-bold text-lg">{product.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</span>
            {product.oldPrice && (
              <span className="text-gray-500 line-through">{product.oldPrice.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</span>
            )}
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Thêm vào giỏ hàng</Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
