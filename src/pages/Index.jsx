import React from 'react';
import Header from '../components/Header';
import ProductList from '../components/ProductList';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row">
          <Sidebar />
          <div className="flex-grow">
            <nav className="text-sm breadcrumbs mb-4">
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">Best category</a></li>
                <li>Great articles</li>
              </ul>
            </nav>
            <h1 className="text-3xl font-bold mb-6">Category products</h1>
            <ProductList />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
