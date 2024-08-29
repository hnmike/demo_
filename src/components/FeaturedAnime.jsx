import React from 'react';
import { Button } from '@/components/ui/button';

const FeaturedAnime = ({ anime }) => {
  return (
    <div className="relative h-96 rounded-lg overflow-hidden mb-8">
      <img src={anime.image} alt={anime.title} className="w-full h-full object-cover" />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
        <h2 className="text-4xl font-bold text-white mb-2">{anime.title}</h2>
        <Button variant="secondary" className="bg-white text-black hover:bg-gray-200">
          Watch Now
        </Button>
      </div>
    </div>
  );
};

export default FeaturedAnime;