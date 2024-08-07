import React, { useState } from 'react';
import './App.css';
import { categories, books } from './data/data';
import CategoryList from './componets/CategoryList';
import BookList from './componets/BookList';
import Cart from './componets/Cart';

interface Book {
  id: number;
  categoryId: number;
  title: string;
  description: string;
  image: string;
}

interface CartItem {
  id: number;
  title: string;
}

const App: React.FC = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);

  const handleSelectCategory = (categoryId: number) => {
    setSelectedCategoryId(categoryId);
  };

  const handleAddToCart = (bookId: number) => {
    const book = books.find(book => book.id === bookId);
    if (book) {
      setCart([...cart, { id: book.id, title: book.title }]);
    }
  };

  const handleRemoveFromCart = (bookId: number) => {
    setCart(cart.filter(item => item.id !== bookId));
  };

  const filteredBooks = selectedCategoryId
    ? books.filter(book => book.categoryId === selectedCategoryId)
    : [];

  return (
    <div className="app">
      <header>
        Academic Books Shopping
      </header>
      <div className="pane">
        <h2>Types of Books For You</h2>
        <p>Choose what you want</p>
        <CategoryList categories={categories} onSelectCategory={handleSelectCategory} />
      </div>
      <div className="pane">
        <h2>Books in this category</h2>
        <p>Choose what you want</p>
        <BookList books={filteredBooks} onAddToCart={handleAddToCart} />
      </div>
      <div className="pane">
        <h2>Books you have choosen</h2>
        <Cart cart={cart} onRemoveFromCart={handleRemoveFromCart} />
      </div>
      <footer>
        &copy; 2024 Academic Books Shopping Website. All rights reserved.
      </footer>
    </div>
  );
};

export default App;