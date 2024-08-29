import React from 'react';
import Header from '../components/Header';
import FeaturedAnime from '../components/FeaturedAnime';
import AnimeGrid from '../components/AnimeGrid';

const featuredAnime = {
  id: 1,
  title: 'ONE PIECE',
  image: 'https://cdn.myanimelist.net/images/anime/1208/94745l.jpg',
};

const popularAnimes = [
  { 
    id: 1, 
    title: 'Attack on Titan', 
    image: 'https://cdn.myanimelist.net/images/anime/10/47347l.jpg',
    genre: 'Action, Dark Fantasy, Post-apocalyptic',
    episodes: 75,
    status: 'Finished Airing',
    rating: 8.53
  },
  { 
    id: 2, 
    title: 'Demon Slayer: Kimetsu no Yaiba', 
    image: 'https://cdn.myanimelist.net/images/anime/1286/99889l.jpg',
    genre: 'Action, Dark Fantasy, Adventure',
    episodes: 26,
    status: 'Finished Airing',
    rating: 8.52
  },
  { 
    id: 3, 
    title: 'Death Note', 
    image: 'https://cdn.myanimelist.net/images/anime/9/9453l.jpg',
    genre: 'Mystery, Psychological Thriller, Supernatural',
    episodes: 37,
    status: 'Finished Airing',
    rating: 8.62
  },
  { 
    id: 4, 
    title: 'My Hero Academia', 
    image: 'https://cdn.myanimelist.net/images/anime/10/78745l.jpg',
    genre: 'Superhero, Comedy',
    episodes: 113,
    status: 'Ongoing',
    rating: 7.92
  },
  { 
    id: 5, 
    title: 'Hunter x Hunter (2011)', 
    image: 'https://cdn.myanimelist.net/images/anime/11/33657l.jpg',
    genre: 'Adventure, Fantasy',
    episodes: 148,
    status: 'Finished Airing',
    rating: 9.04
  },
  { 
    id: 6, 
    title: 'JUJUTSU KAISEN', 
    image: 'https://cdn.myanimelist.net/images/anime/1171/109222l.jpg',
    genre: 'Dark Fantasy, Supernatural',
    episodes: 24,
    status: 'Ongoing',
    rating: 8.68
  },
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-white mb-4">Recommended to you</h2>
        <FeaturedAnime anime={featuredAnime} />
        <AnimeGrid animes={popularAnimes} title="All Time Popular" />
      </main>
    </div>
  );
};

export default Index;
