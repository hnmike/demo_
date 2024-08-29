import React from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <h1 className="text-2xl font-bold">見ろ</h1>
          <div className="relative">
            <Input
              type="text"
              placeholder="Search Anime"
              className="w-64 bg-gray-800 text-white placeholder-gray-400 border-none rounded-full pl-10 pr-4 py-2"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          </div>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#" className="hover:text-gray-300">Popular</a></li>
            <li><a href="#" className="hover:text-gray-300">Forum</a></li>
            <li><a href="#" className="hover:text-gray-300">Help</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
