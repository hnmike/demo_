import React from 'react';
import Header from '../components/Header';
import FeaturedAnime from '../components/FeaturedAnime';
import AnimeGrid from '../components/AnimeGrid';

const featuredAnime = {
  id: 1,
  title: 'ONE PIECE',
  image: 'https://example.com/one-piece-banner.jpg',
};

const popularAnimes = [
  { id: 1, title: 'Attack on Titan', image: 'https://example.com/attack-on-titan.jpg' },
  { id: 2, title: 'Demon Slayer: Kimetsu no Yaiba', image: 'https://example.com/demon-slayer.jpg' },
  { id: 3, title: 'Death Note', image: 'https://example.com/death-note.jpg' },
  { id: 4, title: 'My Hero Academia', image: 'https://example.com/my-hero-academia.jpg' },
  { id: 5, title: 'Hunter x Hunter (2011)', image: 'https://example.com/hunter-x-hunter.jpg' },
  { id: 6, title: 'JUJUTSU KAISEN', image: 'https://example.com/jujutsu-kaisen.jpg' },
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
