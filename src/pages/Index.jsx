import React, { useState } from 'react';
import Header from '../components/Header';
import FeaturedAnime from '../components/FeaturedAnime';
import AnimeGrid from '../components/AnimeGrid';
import AnimeSearch from '../components/AnimeSearch';
import MyList from '../components/MyList';
import { Button } from '@/components/ui/button';
import { useAnimes, useSearchAnimes } from '../api/animeApi';
import { useCurrentUser, useUpdateUserRating, useUpdateUserWishlist } from '../api/userApi';

const featuredAnime = {
  id: 1,
  title: 'ONE PIECE',
  image: 'https://cdn.myanimelist.net/images/anime/1208/94745l.jpg',
};

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showMyList, setShowMyList] = useState(false);

  const { data: animes, isLoading: animesLoading } = useAnimes();
  const { data: searchResults, isLoading: searchLoading } = useSearchAnimes(searchTerm);
  const { data: currentUser, isLoading: userLoading } = useCurrentUser();
  const updateRatingMutation = useUpdateUserRating();
  const updateWishlistMutation = useUpdateUserWishlist();

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleRate = (animeId, rating) => {
    if (currentUser) {
      updateRatingMutation.mutate({ userId: currentUser.id, animeId, rating });
    }
  };

  const handleAddToWishlist = (animeId) => {
    if (currentUser) {
      updateWishlistMutation.mutate({ userId: currentUser.id, animeId, addToWishlist: true });
    }
  };

  const handleRemoveFromWishlist = (animeId) => {
    if (currentUser) {
      updateWishlistMutation.mutate({ userId: currentUser.id, animeId, addToWishlist: false });
    }
  };

  const userWishlist = currentUser ? animes?.filter(anime => currentUser.wishlist.includes(anime.id)) : [];

  return (
    <div className="min-h-screen flex flex-col bg-gray-900">
      <Header onSearch={handleSearch} />
      <main className="flex-grow container mx-auto px-4 py-8">
        {!userLoading && currentUser && (
          <div className="text-white mb-4">
            <h2 className="text-2xl font-bold">Welcome, {currentUser.username}!</h2>
            <p>Email: {currentUser.email}</p>
          </div>
        )}
        <h2 className="text-2xl font-bold text-white mb-4">Đề xuất cho bạn</h2>
        <FeaturedAnime anime={featuredAnime} />
        {searchTerm ? (
          <AnimeSearch 
            results={searchResults || []} 
            onAddToWishlist={handleAddToWishlist} 
            isLoading={searchLoading} 
            userRatings={currentUser?.ratings}
          />
        ) : (
          <AnimeGrid 
            animes={animes || []} 
            title="Phổ biến mọi thời đại" 
            onRate={handleRate} 
            onAddToWishlist={handleAddToWishlist} 
            isLoading={animesLoading} 
            userRatings={currentUser?.ratings}
            userWishlist={currentUser?.wishlist}
          />
        )}
        <Button onClick={() => setShowMyList(!showMyList)} className="mt-4">
          {showMyList ? 'Ẩn danh sách của tôi' : 'Hiển thị danh sách của tôi'}
        </Button>
        {showMyList && userWishlist && (
          <MyList 
            list={userWishlist} 
            onRemoveFromList={handleRemoveFromWishlist} 
            userRatings={currentUser?.ratings}
          />
        )}
      </main>
    </div>
  );
};

export default Index;
