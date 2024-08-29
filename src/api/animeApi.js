import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

// Mock data (replace with actual API calls in a real application)
const mockAnimes = [
  { id: 1, title: 'Attack on Titan', rating: 9 },
  { id: 2, title: 'Death Note', rating: 8 },
  // Add more mock data here
];

// API functions
const fetchAnimes = async () => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000));
  return mockAnimes;
};

const searchAnimes = async (searchTerm) => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000));
  return mockAnimes.filter(anime => anime.title.toLowerCase().includes(searchTerm.toLowerCase()));
};

const rateAnime = async ({ id, rating }) => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000));
  const updatedAnime = mockAnimes.find(anime => anime.id === id);
  if (updatedAnime) {
    updatedAnime.rating = rating;
  }
  return updatedAnime;
};

// React Query hooks
export const useAnimes = () => useQuery({ queryKey: ['animes'], queryFn: fetchAnimes });

export const useSearchAnimes = (searchTerm) => useQuery({
  queryKey: ['animes', 'search', searchTerm],
  queryFn: () => searchAnimes(searchTerm),
  enabled: !!searchTerm,
});

export const useRateAnime = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: rateAnime,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['animes'] });
    },
  });
};