import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import BookCard from '../components/BookCard';
import { useSelector } from 'react-redux';

const Home = () => {
  const books = useSelector(state => state.books.books);
  const popularBooks = [...books].sort((a, b) => b.rating - a.rating).slice(0, 3);
  const categories = [...new Set(books.map(book => book.category))].slice(0, 5);

  return (
    <motion.div
      className="home-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ background: 'linear-gradient(135deg, #e0e7ff 0%, #fff 100%)', minHeight: '100vh', padding: 0 }}
    >
      <section className="hero-section" style={{ padding: '3rem 0 2rem 0', textAlign: 'center', background: 'linear-gradient(135deg, #6366f1 0%, #a5b4fc 100%)', color: '#fff' }}>
        <motion.div
          className="hero-content"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem', letterSpacing: '-1px' }}>Discover Your Next Favorite Book</h1>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>Explore our vast collection of books across all genres</p>
          <Link to="/browse" className="explore-btn" style={{ background: '#fff', color: '#3730a3', padding: '0.7rem 2rem', borderRadius: '8px', fontWeight: 600, fontSize: '1.1rem', textDecoration: 'none', boxShadow: '0 2px 8px rgba(60,60,120,0.08)' }}>
            Browse Collection
          </Link>
        </motion.div>
      </section>

      <section className="categories-section" style={{ padding: '2.5rem 0 1.5rem 0', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 600, marginBottom: '1.5rem', color: '#3730a3' }}>Popular Categories</h2>
        <div className="category-list" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.2rem' }}>
          {categories.map((category, index) => (
            <motion.div
              key={category}
              className="category-card"
              whileHover={{ scale: 1.07, boxShadow: '0 4px 16px rgba(60,60,120,0.10)' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              style={{ background: '#fff', borderRadius: '12px', padding: '1.2rem 2.2rem', minWidth: 180, boxShadow: '0 2px 8px rgba(60,60,120,0.07)', color: '#3730a3', fontWeight: 500 }}
            >
              <Link to={`/browse/${category.toLowerCase()}`} style={{ color: '#3730a3', textDecoration: 'none' }}>
                <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 600 }}>{category}</h3>
                <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.95rem', color: '#6366f1' }}>{books.filter(b => b.category === category).length} books</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="featured-books" style={{ padding: '2.5rem 0', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 600, marginBottom: '1.5rem', color: '#3730a3' }}>Popular Reads</h2>
        <div className="book-grid" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem' }}>
          {popularBooks.map((book, index) => (
            <BookCard key={book.id} book={book} index={index} />
          ))}
        </div>
        <Link to="/browse" className="view-all-btn" style={{ display: 'inline-block', marginTop: '2rem', background: '#3730a3', color: '#fff', padding: '0.7rem 2rem', borderRadius: '8px', fontWeight: 600, fontSize: '1.1rem', textDecoration: 'none', boxShadow: '0 2px 8px rgba(60,60,120,0.08)' }}>
          View All Books
        </Link>
      </section>
    </motion.div>
  );
};

export default Home;