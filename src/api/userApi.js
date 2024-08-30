import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

// Mock user data
const mockUsers = [
  {
    id: 1,
    username: 'anime_fan_1',
    email: 'fan1@example.com',
    wishlist: [1, 3],
    ratings: { 1: 4, 2: 5, 3: 3 }
  },
  {
    id: 2,
    username: 'otaku_lover',
    email: 'otaku@example.com',
    wishlist: [2, 4],
    ratings: { 1: 5, 4: 4, 5: 5 }
  }
];

// Simulated API calls
const fetchCurrentUser = async () => {
  // For demo purposes, we'll always return the first user
  await new Promise(resolve => setTimeout(resolve, 500));
  return mockUsers[0];
};

const updateUserRating = async ({ userId, animeId, rating }) => {
  await new Promise(resolve => setTimeout(resolve, 500));
  const user = mockUsers.find(u => u.id === userId);
  if (user) {
    user.ratings[animeId] = rating;
  }
  return user;
};

const updateUserWishlist = async ({ userId, animeId, addToWishlist }) => {
  await new Promise(resolve => setTimeout(resolve, 500));
  const user = mockUsers.find(u => u.id === userId);
  if (user) {
    if (addToWishlist) {
      if (!user.wishlist.includes(animeId)) {
        user.wishlist.push(animeId);
      }
    } else {
      user.wishlist = user.wishlist.filter(id => id !== animeId);
    }
  }
  return user;
};

// React Query hooks
export const useCurrentUser = () => useQuery({ 
  queryKey: ['currentUser'], 
  queryFn: fetchCurrentUser 
});

export const useUpdateUserRating = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateUserRating,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['currentUser'] });
    },
  });
};

export const useUpdateUserWishlist = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateUserWishlist,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['currentUser'] });
    },
  });
};