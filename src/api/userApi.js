import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

// Mock user data
let mockUsers = [
  {
    id: 1,
    username: 'anime_fan_1',
    email: 'fan1@example.com',
    password: 'password123',
    wishlist: [1, 3],
    ratings: { 1: 4, 2: 5, 3: 3 }
  },
  {
    id: 2,
    username: 'otaku_lover',
    email: 'otaku@example.com',
    password: 'password456',
    wishlist: [2, 4],
    ratings: { 1: 5, 4: 4, 5: 5 }
  }
];

let currentUser = null;

// Simulated API calls
const fetchCurrentUser = async () => {
  await new Promise(resolve => setTimeout(resolve, 500));
  return currentUser;
};

const login = async ({ username, password }) => {
  await new Promise(resolve => setTimeout(resolve, 500));
  const user = mockUsers.find(u => u.username === username && u.password === password);
  if (user) {
    currentUser = { ...user, password: undefined };
    return currentUser;
  }
  throw new Error('Invalid credentials');
};

const signup = async ({ username, email, password }) => {
  await new Promise(resolve => setTimeout(resolve, 500));
  if (mockUsers.some(u => u.username === username || u.email === email)) {
    throw new Error('Username or email already exists');
  }
  const newUser = {
    id: mockUsers.length + 1,
    username,
    email,
    password,
    wishlist: [],
    ratings: {}
  };
  mockUsers.push(newUser);
  currentUser = { ...newUser, password: undefined };
  return currentUser;
};

const logout = async () => {
  await new Promise(resolve => setTimeout(resolve, 500));
  currentUser = null;
};

const updateUserProfile = async ({ username, email }) => {
  await new Promise(resolve => setTimeout(resolve, 500));
  if (!currentUser) throw new Error('Not logged in');
  const user = mockUsers.find(u => u.id === currentUser.id);
  if (user) {
    user.username = username;
    user.email = email;
    currentUser = { ...user, password: undefined };
  }
  return currentUser;
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

export const useLogin = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      queryClient.setQueryData(['currentUser'], data);
    },
  });
};

export const useSignup = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: signup,
    onSuccess: (data) => {
      queryClient.setQueryData(['currentUser'], data);
    },
  });
};

export const useLogout = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: logout,
    onSuccess: () => {
      queryClient.setQueryData(['currentUser'], null);
    },
  });
};

export const useUpdateProfile = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateUserProfile,
    onSuccess: (data) => {
      queryClient.setQueryData(['currentUser'], data);
    },
  });
};

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
