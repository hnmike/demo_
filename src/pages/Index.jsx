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
    rating: 8.53,
    description: 'Humanity lives inside cities surrounded by enormous walls due to the Titans, gigantic humanoid creatures who devour humans seemingly without reason.'
  },
  { 
    id: 2, 
    title: 'Demon Slayer: Kimetsu no Yaiba', 
    image: 'https://cdn.myanimelist.net/images/anime/1286/99889l.jpg',
    genre: 'Action, Dark Fantasy, Adventure',
    episodes: 26,
    status: 'Finished Airing',
    rating: 8.52,
    description: 'A boy raised by his father to hunt demons seeks revenge after his entire family is slaughtered by a demon attack.'
  },
  { 
    id: 3, 
    title: 'Death Note', 
    image: 'https://cdn.myanimelist.net/images/anime/9/9453l.jpg',
    genre: 'Mystery, Psychological Thriller, Supernatural',
    episodes: 37,
    status: 'Finished Airing',
    rating: 8.62,
    description: 'A high school student discovers a mysterious notebook that allows him to kill anyone by writing their name in it.'
  },
  { 
    id: 4, 
    title: 'My Hero Academia', 
    image: 'https://cdn.myanimelist.net/images/anime/10/78745l.jpg',
    genre: 'Superhero, Comedy',
    episodes: 113,
    status: 'Ongoing',
    rating: 7.92,
    description: 'In a world where people with superpowers are the norm, a boy without them dreams of becoming a superhero himself.'
  },
  { 
    id: 5, 
    title: 'Hunter x Hunter (2011)', 
    image: 'https://cdn.myanimelist.net/images/anime/11/33657l.jpg',
    genre: 'Adventure, Fantasy',
    episodes: 148,
    status: 'Finished Airing',
    rating: 9.04,
    description: 'A young boy sets out on a journey to become a Hunter, an elite human who tracks down treasures, magical beasts, and even other people.'
  },
  { 
    id: 6, 
    title: 'JUJUTSU KAISEN', 
    image: 'https://cdn.myanimelist.net/images/anime/1171/109222l.jpg',
    genre: 'Dark Fantasy, Supernatural',
    episodes: 24,
    status: 'Ongoing',
    rating: 8.68,
    description: 'A boy swallows a cursed talisman - the finger of a demon - and becomes cursed himself. He enters a shaman's school to be able to locate the demon's other body parts and thus exorcise himself.'
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
