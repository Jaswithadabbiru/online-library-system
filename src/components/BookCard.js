import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import RatingStars from './RatingStars';

const BookCard = ({ book, index }) => {
  return (
    <motion.div
      className="book-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index ? index * 0.1 : 0, duration: 0.5 }}
      whileHover={{ scale: 1.05, boxShadow: '0 8px 32px rgba(60,60,120,0.15)' }}
      style={{
        background: '#fff',
        borderRadius: '16px',
        boxShadow: '0 4px 16px rgba(60,60,120,0.08)',
        overflow: 'hidden',
        margin: '1rem',
        minWidth: 250,
        maxWidth: 320,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <div className="book-cover" style={{height: 180, background: '#f4f4f4', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <img 
          src={book.image || '/book-placeholder.jpg'} 
          alt={book.title}
          style={{maxHeight: '100%', maxWidth: '100%', objectFit: 'contain'}}
          onError={(e) => {
            e.target.src = '/book-placeholder.jpg';
          }}
        />
      </div>
      <div className="book-details" style={{padding: '1rem'}}>
        <h3 style={{margin: '0 0 0.5rem 0', fontSize: '1.2rem', color: '#2d2d2d'}}>{book.title}</h3>
        <p className="author" style={{margin: 0, color: '#666', fontSize: '1rem'}}>by {book.author}</p>
        <RatingStars rating={book.rating} />
        <div className="book-meta" style={{margin: '0.5rem 0'}}>
          <span className="genre" style={{background: '#e0e7ff', color: '#3730a3', borderRadius: '8px', padding: '0.2rem 0.7rem', fontSize: '0.9rem'}}>{book.category}</span>
        </div>
        <Link to={`/book/${book.id}`} className="view-details-btn" style={{display: 'inline-block', marginTop: '0.7rem', background: '#3730a3', color: '#fff', padding: '0.5rem 1.2rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 500, transition: 'background 0.2s'}}>
          View Details
        </Link>
      </div>
    </motion.div>
  );
};

export default BookCard;