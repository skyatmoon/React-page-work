import React from 'react';

interface BookListProps {
  books: { id: number, title: string, description: string, image: string }[];
  onAddToCart: (bookId: number) => void;
}

const BookList: React.FC<BookListProps> = ({ books, onAddToCart }) => {
  return (
    <div>
      <h2>Books</h2>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            <img src={book.image} alt={book.title} />
            <h3>{book.title}</h3>
            <p>{book.description}</p>
            <button onClick={() => onAddToCart(book.id)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;