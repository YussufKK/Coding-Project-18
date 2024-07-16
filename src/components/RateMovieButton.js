import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './RateMovieButton.css';

const RateMovieButton = ({ movie }) => {
  const [rating, setRating] = useState(null);
  const [feedback, setFeedback] = useState('');

  const handleRating = (rate) => {
    setRating(rate);
    setFeedback(`You rated ${movie} ${rate} stars!`);
  };

  return (
    <div className="rate-movie-button">
      <h3>Rate {movie}</h3>
      <div className="stars">
        {[1, 2, 3, 4, 5].map((star) => (
          <FontAwesomeIcon
            key={star}
            icon={faStar}
            className={star <= rating ? 'star selected' : 'star'}
            onClick={() => handleRating(star)}
          />
        ))}
      </div>
      {feedback && <p className="feedback">{feedback}</p>}
    </div>
  );
};

export default RateMovieButton;
