import React, { useState } from 'react';
import { Search, UserCircle } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useCurrentUser } from '../api/userApi';
import { Link } from 'react-router-dom';

const Header = ({ onSearch, onLoginClick, onSignupClick, onProfileClick }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const { data: currentUser } = useCurrentUser();

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <header className="bg-gray-900 text-white py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link to="/" className="text-2xl font-bold text-primary dark:text-primary-foreground">m4vie</Link>
          <form onSubmit={handleSearch} className="relative">
            <Input
              type="text"
              placeholder="Tìm kiếm Anime"
              className="w-64 bg-gray-800 text-white placeholder-gray-400 border-none rounded-full pl-10 pr-4 py-2"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button type="submit" className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-transparent hover:bg-gray-700 p-1 rounded-full">
              <Search className="text-gray-400 h-5 w-5" />
            </Button>
          </form>
        </div>
        <nav>
          <ul className="flex space-x-6 items-center">
            <li><Link to="/" className="hover:text-gray-300">Trang chủ</Link></li>
            <li><Link to="/collections" className="hover:text-gray-300">Bộ sưu tập</Link></li>
            <li><a href="#" className="hover:text-gray-300">Diễn đàn</a></li>
            <li><a href="#" className="hover:text-gray-300">Trợ giúp</a></li>
            {currentUser ? (
              <li>
                <Button onClick={onProfileClick} className="flex items-center">
                  <UserCircle className="mr-2" />
                  {currentUser.username}
                </Button>
              </li>
            ) : (
              <>
                <li><Button onClick={onLoginClick}>Đăng nhập</Button></li>
                <li><Button onClick={onSignupClick}>Đăng ký</Button></li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
