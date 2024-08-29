import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const AnimeSearch = ({ results, onAddToList }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {results.map((anime) => (
        <Card key={anime.id} className="overflow-hidden">
          <img src={anime.image} alt={anime.title} className="w-full h-48 object-cover" />
          <CardContent className="p-4">
            <h3 className="font-semibold text-lg mb-2">{anime.title}</h3>
            <p className="text-sm text-gray-600 mb-2">Xếp hạng: {anime.rating}</p>
            <Button onClick={() => onAddToList(anime)} className="w-full">
              Thêm vào danh sách
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default AnimeSearch;