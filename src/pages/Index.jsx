import React, { useState } from 'react';
import Header from '../components/Header';
import FeaturedAnime from '../components/FeaturedAnime';
import AnimeGrid from '../components/AnimeGrid';
import AnimeSearch from '../components/AnimeSearch';
import MyList from '../components/MyList';
import { Button } from '@/components/ui/button';

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
    genre: 'Hành động, Kỳ ảo đen tối, Hậu tận thế',
    episodes: 75,
    status: 'Đã hoàn thành',
    rating: 8.53,
    description: 'Nhân loại sống trong các thành phố được bao quanh bởi những bức tường khổng lồ do Titans, những sinh vật khổng lồ hình người nuốt chửng con người mà dường như không có lý do.'
  },
  { 
    id: 2, 
    title: 'Demon Slayer: Kimetsu no Yaiba', 
    image: 'https://cdn.myanimelist.net/images/anime/1286/99889l.jpg',
    genre: 'Hành động, Kỳ ảo đen tối, Phiêu lưu',
    episodes: 26,
    status: 'Đã hoàn thành',
    rating: 8.52,
    description: 'Một cậu bé được cha nuôi dạy để săn quỷ tìm kiếm sự trả thù sau khi toàn bộ gia đình bị tàn sát bởi một cuộc tấn công của quỷ.'
  },
  { 
    id: 3, 
    title: 'Death Note', 
    image: 'https://cdn.myanimelist.net/images/anime/9/9453l.jpg',
    genre: 'Bí ẩn, Thriller tâm lý, Siêu nhiên',
    episodes: 37,
    status: 'Đã hoàn thành',
    rating: 8.62,
    description: 'Một học sinh trung học phát hiện ra một cuốn sổ bí ẩn cho phép anh ta giết bất kỳ ai bằng cách viết tên của họ vào đó.'
  },
  { 
    id: 4, 
    title: 'My Hero Academia', 
    image: 'https://cdn.myanimelist.net/images/anime/10/78745l.jpg',
    genre: 'Siêu anh hùng, Hài hước',
    episodes: 113,
    status: 'Đang tiếp diễn',
    rating: 7.92,
    description: 'Trong một thế giới nơi những người có siêu năng lực là bình thường, một cậu bé không có chúng mơ ước trở thành một siêu anh hùng.'
  },
  { 
    id: 5, 
    title: 'Hunter x Hunter (2011)', 
    image: 'https://cdn.myanimelist.net/images/anime/11/33657l.jpg',
    genre: 'Phiêu lưu, Kỳ ảo',
    episodes: 148,
    status: 'Đã hoàn thành',
    rating: 9.04,
    description: 'Một cậu bé bắt đầu cuộc hành trình để trở thành một Hunter, một con người ưu tú theo dõi kho báu, quái vật ma thuật, và thậm chí cả những người khác.'
  },
  { 
    id: 6, 
    title: 'JUJUTSU KAISEN', 
    image: 'https://cdn.myanimelist.net/images/anime/1171/109222l.jpg',
    genre: 'Kỳ ảo đen tối, Siêu nhiên',
    episodes: 24,
    status: 'Đang tiếp diễn',
    rating: 8.68,
    description: "Một cậu bé nuốt một bùa chú bị nguyền rủa - ngón tay của một con quỷ - và trở nên bị nguyền rủa. Cậu vào một trường pháp sư để có thể tìm ra các bộ phận cơ thể khác của con quỷ và do đó trừ tà cho chính mình."
  },
];

const Index = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [myList, setMyList] = useState([]);
  const [showMyList, setShowMyList] = useState(false);

  const handleSearch = (searchTerm) => {
    const results = popularAnimes.filter(anime => 
      anime.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  const handleRate = (id, rating) => {
    const updatedAnimes = popularAnimes.map(anime => 
      anime.id === id ? { ...anime, rating } : anime
    );
    // In a real application, you would update the state or make an API call here
    console.log('Updated animes:', updatedAnimes);
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
        {searchResults.length > 0 ? (
          <AnimeSearch results={searchResults} onAddToList={handleAddToList} />
        ) : (
          <AnimeGrid animes={popularAnimes} title="Phổ biến mọi thời đại" onRate={handleRate} onAddToList={handleAddToList} />
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
