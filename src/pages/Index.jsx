import React, { useState } from 'react';
import Header from '../components/Header';
import FeaturedAnime from '../components/FeaturedAnime';
import AnimeGrid from '../components/AnimeGrid';
import AnimeSearch from '../components/AnimeSearch';
import MyList from '../components/MyList';
import { Button } from '@/components/ui/button';
import { useAnimes, useSearchAnimes, useRateAnime } from '../api/animeApi';

const featuredAnime = {
  id: 1,
  title: 'ONE PIECE',
  image: 'https://cdn.myanimelist.net/images/anime/1208/94745l.jpg',
};

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [myList, setMyList] = useState([]);
  const [showMyList, setShowMyList] = useState(false);

  const { data: animes, isLoading: animesLoading } = useAnimes();
  const { data: searchResults, isLoading: searchLoading } = useSearchAnimes(searchTerm);
  const rateAnimeMutation = useRateAnime();

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleRate = (id, rating) => {
    rateAnimeMutation.mutate({ id, rating });
  };

  const handleAddToList = (anime) => {
    if (!myList.find(item => item.id === anime.id)) {
      setMyList([...myList, anime]);
    }
  };

  const handleRemoveFromList = (id) => {
    setMyList(myList.filter(anime => anime.id !== id));
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-900">
      <Header onSearch={handleSearch} />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-white mb-4">Đề xuất cho bạn</h2>
        <FeaturedAnime anime={featuredAnime} />
        {searchTerm ? (
          <AnimeSearch results={searchResults || []} onAddToList={handleAddToList} isLoading={searchLoading} />
        ) : (
          <AnimeGrid animes={animes || []} title="Phổ biến mọi thời đại" onRate={handleRate} onAddToList={handleAddToList} isLoading={animesLoading} />
        )}
        <Button onClick={() => setShowMyList(!showMyList)} className="mt-4">
          {showMyList ? 'Ẩn danh sách của tôi' : 'Hiển thị danh sách của tôi'}
        </Button>
        {showMyList && <MyList list={myList} onRemoveFromList={handleRemoveFromList} />}
      </main>
    </div>
  );
};

export default Index;
