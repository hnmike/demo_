import React from 'react';
import { useAnimes } from '../api/animeApi';
import { useCurrentUser } from '../api/userApi';
import AnimeGrid from './AnimeGrid';

const AnimeCollections = () => {
  const { data: animes, isLoading: animesLoading } = useAnimes();
  const { data: currentUser } = useCurrentUser();

  const userRatedAnimes = animes?.filter(anime => currentUser?.ratings && currentUser.ratings[anime.id]) || [];
  const userWishlistAnimes = animes?.filter(anime => currentUser?.wishlist && currentUser.wishlist.includes(anime.id)) || [];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-white mb-8">My Anime Collections</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">My Rated Animes</h2>
        <AnimeGrid 
          animes={userRatedAnimes}
          isLoading={animesLoading}
          userRatings={currentUser?.ratings}
          userWishlist={currentUser?.wishlist}
        />
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">My Wishlist</h2>
        <AnimeGrid 
          animes={userWishlistAnimes}
          isLoading={animesLoading}
          userRatings={currentUser?.ratings}
          userWishlist={currentUser?.wishlist}
        />
      </section>
    </div>
  );
};

export default AnimeCollections;