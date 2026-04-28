import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './MovieDetailsPage.css';

const MovieDetailsPage = ({ movies }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const movie = movies.find(m => m.id === parseInt(id));

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={`detail-star ${i <= rating ? 'filled' : ''}`}>
          ★
        </span>
      );
    }
    return stars;
  };

  if (!movie) {
    return (
      <div className="error-container">
        <h2>Movie not found!</h2>
        <button onClick={() => navigate('/')} className="back-button">
          ← Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="movie-details">
      <button onClick={() => navigate('/')} className="back-button">
        ← Back to Home
      </button>
      
      <div className="details-container">
        <div className="details-poster">
          <img src={movie.posterURL} alt={movie.title} />
        </div>
        
        <div className="details-info">
          <h1>{movie.title}</h1>
          
          <div className="details-rating">
            <strong>Rating:</strong> {renderStars(movie.rating)}
            <span className="rating-number">({movie.rating}/5)</span>
          </div>
          
          <div className="details-description">
            <strong>Synopsis:</strong>
            <p>{movie.description}</p>
          </div>
          
          <div className="details-trailer">
            <strong>Watch Trailer:</strong>
            <div className="trailer-container">
              <iframe
                width="100%"
                height="400"
                src={movie.trailerLink}
                title={`${movie.title} Trailer`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsPage;