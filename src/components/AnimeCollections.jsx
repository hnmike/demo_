import React, { useState } from 'react';
import { useAnimes } from '../api/animeApi';
import { useCurrentUser, useUpdateUserRating, useUpdateUserWishlist } from '../api/userApi';
import AnimeGrid from './AnimeGrid';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const RatingDistribution = ({ ratings }) => {
  const data = [
    { name: '5 Stars', value: ratings['5'] || 0 },
    { name: '4 Stars', value: ratings['4'] || 0 },
    { name: '3 Stars', value: ratings['3'] || 0 },
    { name: '2 Stars', value: ratings['2'] || 0 },
    { name: '1 Star', value: ratings['1'] || 0 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF0000'];

  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

const AnimeCollections = () => {
  const { data: animes, isLoading: animesLoading } = useAnimes();
  const { data: currentUser } = useCurrentUser();
  const updateRatingMutation = useUpdateUserRating();
  const updateWishlistMutation = useUpdateUserWishlist();
  const [activeTab, setActiveTab] = useState("rated");

  const userRatedAnimes = animes?.filter(anime => currentUser?.ratings && currentUser.ratings[anime.id]) || [];
  const userWishlistAnimes = animes?.filter(anime => currentUser?.wishlist && currentUser.wishlist.includes(anime.id)) || [];

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

  const getRatingDistribution = () => {
    const distribution = { '1': 0, '2': 0, '3': 0, '4': 0, '5': 0 };
    Object.values(currentUser?.ratings || {}).forEach(rating => {
      distribution[rating.toString()] += 1;
    });
    return distribution;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-white mb-8">My Anime Collections</h1>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="rated">Rated Animes</TabsTrigger>
          <TabsTrigger value="wishlist">Wishlist</TabsTrigger>
        </TabsList>
        <TabsContent value="rated">
          <h2 className="text-2xl font-bold text-white mb-4">My Rated Animes</h2>
          <RatingDistribution ratings={getRatingDistribution()} />
          <AnimeGrid 
            animes={userRatedAnimes}
            isLoading={animesLoading}
            userRatings={currentUser?.ratings}
            userWishlist={currentUser?.wishlist}
            onRate={handleRate}
            onAddToWishlist={handleAddToWishlist}
          />
        </TabsContent>
        <TabsContent value="wishlist">
          <h2 className="text-2xl font-bold text-white mb-4">My Wishlist</h2>
          <AnimeGrid 
            animes={userWishlistAnimes}
            isLoading={animesLoading}
            userRatings={currentUser?.ratings}
            userWishlist={currentUser?.wishlist}
            onRate={handleRate}
            onAddToWishlist={handleRemoveFromWishlist}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AnimeCollections;
