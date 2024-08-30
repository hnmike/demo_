import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

// Mock data (replace with actual API calls in a real application)
const mockAnimes = [
  { 
    id: 1, 
    title: 'Attack on Titan', 
    rating: 9,
    image: 'https://cdn.myanimelist.net/images/anime/10/47347.jpg',
    genre: 'Action, Dark Fantasy, Post-apocalyptic',
    episodes: 75,
    status: 'Finished Airing',
    description: 'Humanity lives inside cities surrounded by enormous walls due to the Titans, gigantic humanoid creatures who devour humans seemingly without reason.'
  },
  { 
    id: 2, 
    title: 'Death Note', 
    rating: 8,
    image: 'https://cdn.myanimelist.net/images/anime/9/9453.jpg',
    genre: 'Mystery, Psychological Thriller, Supernatural',
    episodes: 37,
    status: 'Finished Airing',
    description: 'A high school student discovers a mysterious notebook that allows him to kill anyone by writing the victim\'s name in it.'
  },
  {
    id: 3,
    title: 'Fullmetal Alchemist: Brotherhood',
    rating: 9,
    image: 'https://cdn.myanimelist.net/images/anime/1223/96541.jpg',
    genre: 'Adventure, Dark Fantasy, Steampunk',
    episodes: 64,
    status: 'Finished Airing',
    description: 'Two brothers search for a Philosopher\'s Stone after an attempt to revive their deceased mother goes awry and leaves them in damaged physical forms.'
  },
  {
    id: 4,
    title: 'My Hero Academia',
    rating: 8,
    image: 'https://cdn.myanimelist.net/images/anime/10/78745.jpg',
    genre: 'Superhero, Comedy',
    episodes: 113,
    status: 'Currently Airing',
    description: 'A superhero-loving boy without any powers is determined to enroll in a prestigious hero academy and learn what it really means to be a hero.'
  },
  {
    id: 5,
    title: 'Demon Slayer',
    rating: 9,
    image: 'https://cdn.myanimelist.net/images/anime/1286/99889.jpg',
    genre: 'Adventure, Dark Fantasy, Martial Arts',
    episodes: 26,
    status: 'Finished Airing',
    description: 'A young man becomes a demon slayer after his family is slaughtered and his sister is turned into a demon.'
  },
  {
    id: 6,
    title: 'Steins;Gate',
    rating: 9,
    image: 'https://cdn.myanimelist.net/images/anime/5/73199.jpg',
    genre: 'Science Fiction, Thriller',
    episodes: 24,
    status: 'Finished Airing',
    description: 'A group of friends create a device that can send messages to the past, altering the flow of history.'
  }
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
