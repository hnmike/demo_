import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const products = [
  { id: 1, name: 'Product 1', price: 19.99, image: '/placeholder.svg' },
  { id: 2, name: 'Product 2', price: 29.99, image: '/placeholder.svg' },
  { id: 3, name: 'Product 3', price: 39.99, image: '/placeholder.svg' },
  { id: 4, name: 'Product 4', price: 49.99, image: '/placeholder.svg' },
];

const ProductList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <Card key={product.id}>
          <CardHeader>
            <CardTitle>{product.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4" />
            <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Add to Cart</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default ProductList;