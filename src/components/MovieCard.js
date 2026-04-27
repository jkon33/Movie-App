import React, { useState } from 'react';
import './MovieCard.css';

const MovieCard = ({ movie }) => {
  const [showDescription, setShowDescription] = useState(false);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={`star ${i <= rating ? 'filled' : ''}`}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="movie-card">
      <img src={movie.posterURL} alt={movie.title} className="movie-poster" />
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <div className="movie-rating">
          {renderStars(movie.rating)}
        </div>
        <button 
          className="description-btn"
          onClick={() => setShowDescription(!showDescription)}
        >
          {showDescription ? 'Hide Description' : 'Show Description'}
        </button>
        {showDescription && (
          <p className="movie-description">{movie.description}</p>
        )}
      </div>
    </div>
  );
};

export default MovieCard;