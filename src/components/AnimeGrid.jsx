import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import AnimeInfoModal from './AnimeInfoModal';
import { Star } from 'lucide-react';

const AnimeCard = ({ anime, onRate, onAddToList }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRate = (rating) => {
    onRate(anime.id, rating);
  };

  return (
    <>
      <Card className="overflow-hidden">
        <img src={anime.image} alt={anime.title} className="w-full h-48 object-cover" />
        <CardContent className="p-4">
          <h3 className="font-semibold text-lg mb-2">{anime.title}</h3>
          <p className="text-sm text-gray-600 mb-1">Thể loại: {anime.genre}</p>
          <p className="text-sm text-gray-600 mb-1">Số tập: {anime.episodes}</p>
          <p className="text-sm text-gray-600 mb-1">Trạng thái: {anime.status}</p>
          <div className="flex items-center mb-2">
            <p className="text-sm text-gray-600 mr-2">Xếp hạng:</p>
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`h-4 w-4 cursor-pointer ${star <= anime.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                onClick={() => handleRate(star)}
              />
            ))}
          </div>
          <Button onClick={() => setIsModalOpen(true)} className="w-full mb-2">
            Xem chi tiết
          </Button>
          <Button onClick={() => onAddToList(anime)} className="w-full">
            Thêm vào danh sách
          </Button>
        </CardContent>
      </Card>
      <AnimeInfoModal
        anime={anime}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

const AnimeGrid = ({ animes, title, onRate, onAddToList }) => {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-white">{title}</h2>
        <a href="#" className="text-gray-400 hover:text-white">Xem tất cả</a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {animes.map((anime) => (
          <AnimeCard key={anime.id} anime={anime} onRate={onRate} onAddToList={onAddToList} />
        ))}
      </div>
    </div>
  );
};

export default AnimeGrid;
