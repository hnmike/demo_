import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const AnimeCard = ({ anime }) => (
  <Card className="overflow-hidden">
    <img src={anime.image} alt={anime.title} className="w-full h-48 object-cover" />
    <CardContent className="p-4">
      <h3 className="font-semibold text-lg mb-2">{anime.title}</h3>
      <p className="text-sm text-gray-600 mb-1">Genre: {anime.genre}</p>
      <p className="text-sm text-gray-600 mb-1">Episodes: {anime.episodes}</p>
      <p className="text-sm text-gray-600 mb-1">Status: {anime.status}</p>
      <p className="text-sm text-gray-600">Rating: {anime.rating}</p>
    </CardContent>
  </Card>
);

const AnimeGrid = ({ animes, title }) => {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-white">{title}</h2>
        <a href="#" className="text-gray-400 hover:text-white">View All</a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {animes.map((anime) => (
          <AnimeCard key={anime.id} anime={anime} />
        ))}
      </div>
    </div>
  );
};

export default AnimeGrid;
