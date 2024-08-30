import React, { useState } from 'react';
import Header from '../components/Header';
import FeaturedAnime from '../components/FeaturedAnime';
import AnimeGrid from '../components/AnimeGrid';
import AnimeSearch from '../components/AnimeSearch';
import MyList from '../components/MyList';
import Login from '../components/Login';
import Signup from '../components/Signup';
import UserProfile from '../components/UserProfile';
import { Button } from '@/components/ui/button';
import { useAnimes, useSearchAnimes } from '../api/animeApi';
import { useCurrentUser, useUpdateUserRating, useUpdateUserWishlist, useLogout } from '../api/userApi';

const featuredAnime = {
  id: 1,
  title: 'ONE PIECE',
  image: 'https://cdn.myanimelist.net/images/anime/1208/94745l.jpg',
};

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showMyList, setShowMyList] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const { data: animes, isLoading: animesLoading } = useAnimes();
  const { data: searchResults, isLoading: searchLoading } = useSearchAnimes(searchTerm);
  const { data: currentUser, isLoading: userLoading } = useCurrentUser();
  const updateRatingMutation = useUpdateUserRating();
  const updateWishlistMutation = useUpdateUserWishlist();
  const logout = useLogout();

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

  const handleLogout = async () => {
    await logout.mutateAsync();
    setShowProfile(false);
  };

  const userWishlist = currentUser ? animes?.filter(anime => currentUser.wishlist.includes(anime.id)) : [];

  return (
    <div className="min-h-screen flex flex-col bg-gray-900">
      <Header 
        onSearch={handleSearch} 
        onLoginClick={() => setShowLogin(true)}
        onSignupClick={() => setShowSignup(true)}
        onProfileClick={() => setShowProfile(true)}
      />
      <main className="flex-grow container mx-auto px-4 py-8">
        {showLogin && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Login</h2>
              <Login onSuccess={() => setShowLogin(false)} />
              <Button onClick={() => setShowLogin(false)} className="mt-4">Close</Button>
            </div>
          </div>
        )}
        {showSignup && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
              <Signup onSuccess={() => setShowSignup(false)} />
              <Button onClick={() => setShowSignup(false)} className="mt-4">Close</Button>
            </div>
          </div>
        )}
        {showProfile && currentUser && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">User Profile</h2>
              <UserProfile />
              <Button onClick={handleLogout} className="mt-4 mr-4">Logout</Button>
              <Button onClick={() => setShowProfile(false)} className="mt-4">Close</Button>
            </div>
          </div>
        )}
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
        {currentUser && (
          <Button onClick={() => setShowMyList(!showMyList)} className="mt-4">
            {showMyList ? 'Ẩn danh sách của tôi' : 'Hiển thị danh sách của tôi'}
          </Button>
        )}
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
