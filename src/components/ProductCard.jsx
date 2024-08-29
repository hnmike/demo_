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
            <span className="font-bold text-lg">${product.price.toFixed(2)}</span>
            {product.oldPrice && (
              <span className="text-gray-500 line-through">${product.oldPrice.toFixed(2)}</span>
            )}
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Add to cart</Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;