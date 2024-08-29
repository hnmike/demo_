import React from 'react';

const AnimeCard = ({ anime }) => (
  <div className="relative group">
    <img src={anime.image} alt={anime.title} className="w-full h-64 object-cover rounded-lg" />
    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
      <h3 className="text-white text-center font-semibold px-2">{anime.title}</h3>
    </div>
  </div>
);

const AnimeGrid = ({ animes, title }) => {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-white">{title}</h2>
        <a href="#" className="text-gray-400 hover:text-white">View All</a>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {animes.map((anime) => (
          <AnimeCard key={anime.id} anime={anime} />
        ))}
      </div>
    </div>
  );
};

export default AnimeGrid;
