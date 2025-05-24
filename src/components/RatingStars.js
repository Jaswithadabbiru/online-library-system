import { useState } from 'react';
import { motion } from 'framer-motion';

const RatingStars = ({ rating, interactive = false, onRate }) => {
  const [hoverRating, setHoverRating] = useState(0);
  
  return (
    <div className="rating-stars">
      {[1, 2, 3, 4, 5].map((star) => (
        <motion.span
          key={star}
          className={`star ${(hoverRating || rating) >= star ? 'filled' : ''}`}
          onMouseEnter={() => interactive && setHoverRating(star)}
          onMouseLeave={() => interactive && setHoverRating(0)}
          onClick={() => interactive && onRate(star)}
          whileHover={interactive ? { scale: 1.2 } : {}}
          whileTap={interactive ? { scale: 0.9 } : {}}
        >
          ★
        </motion.span>
      ))}
    </div>
  );
};

export default RatingStars;