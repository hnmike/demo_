import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const MyList = ({ list, onRemoveFromList }) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-white mb-4">Danh sách của tôi</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {list.map((anime) => (
          <Card key={anime.id} className="overflow-hidden">
            <img src={anime.image} alt={anime.title} className="w-full h-48 object-cover" />
            <CardContent className="p-4">
              <h3 className="font-semibold text-lg mb-2">{anime.title}</h3>
              <p className="text-sm text-gray-600 mb-2">Xếp hạng: {anime.rating}</p>
              <Button onClick={() => onRemoveFromList(anime.id)} className="w-full">
                Xóa khỏi danh sách
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MyList;