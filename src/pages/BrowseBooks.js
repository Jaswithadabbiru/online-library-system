import { useState } from 'react';
import { useSelector } from 'react-redux';
import BookCard from '../components/BookCard';
import SearchBar from '../components/SearchBar';

const BrowseBooks = () => {
  const books = useSelector(state => state.books.books);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredBooks = books.filter(book => 
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="browse-page">
      <SearchBar onSearch={setSearchTerm} />
      <div className="books-grid">
        {filteredBooks.map(book => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default BrowseBooks;