import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import AnimeInfoModal from './AnimeInfoModal';
import { Star, Heart } from 'lucide-react';

const AnimeCard = ({ anime, onRate, onAddToWishlist, userRating, isInWishlist }) => {
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
                className={`h-4 w-4 cursor-pointer ${star <= (userRating || anime.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                onClick={() => handleRate(star)}
              />
            ))}
          </div>
          <Button onClick={() => setIsModalOpen(true)} className="w-full mb-2">
            Xem chi tiết
          </Button>
          <Button 
            onClick={() => onAddToWishlist(anime.id)} 
            className={`w-full ${isInWishlist ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-500 hover:bg-blue-600'}`}
          >
            <Heart className={`mr-2 h-4 w-4 ${isInWishlist ? 'fill-current' : ''}`} />
            {isInWishlist ? 'Xóa khỏi danh sách' : 'Thêm vào danh sách'}
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

const AnimeGrid = ({ animes, title, onRate, onAddToWishlist, isLoading, userRatings, userWishlist }) => {
  if (isLoading) {
    return <div className="text-white">Đang tải...</div>;
  }

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-white">{title}</h2>
        <a href="#" className="text-gray-400 hover:text-white">Xem tất cả</a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {animes.map((anime) => (
          <AnimeCard 
            key={anime.id} 
            anime={anime} 
            onRate={onRate} 
            onAddToWishlist={onAddToWishlist}
            userRating={userRatings?.[anime.id]}
            isInWishlist={userWishlist?.includes(anime.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default AnimeGrid;
