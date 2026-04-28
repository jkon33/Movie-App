import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
      <Link to={`/movie/${movie.id}`} className="movie-link">
        <img src={movie.posterURL} alt={movie.title} className="movie-poster" />
        <div className="movie-info">
          <h3>{movie.title}</h3>
          <div className="movie-rating">
            {renderStars(movie.rating)}
          </div>
        </div>
      </Link>
      <button 
        className="description-btn"
        onClick={(e) => {
          e.preventDefault();
          setShowDescription(!showDescription);
        }}
      >
        {showDescription ? 'Hide Description' : 'Show Description'}
      </button>
      {showDescription && (
        <p className="movie-description">{movie.description.substring(0, 100)}...</p>
      )}
    </div>
  );
};

export default MovieCard;