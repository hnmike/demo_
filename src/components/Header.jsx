import React from 'react';
import { ShoppingCart, Menu, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Button variant="ghost" size="icon" className="mr-2 lg:hidden">
            <Menu className="h-6 w-6" />
          </Button>
          <h1 className="text-2xl font-bold text-blue-600">Company Name</h1>
        </div>
        <div className="flex-grow mx-4 max-w-xl">
          <div className="relative">
            <Input type="text" placeholder="Search" className="w-full pr-10" />
            <Button size="sm" className="absolute right-0 top-0 h-full">
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost">
            Welcome!
          </Button>
          <Button variant="ghost">
            Sign in | Register
          </Button>
          <Button variant="outline" size="icon" className="relative">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              0
            </span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
