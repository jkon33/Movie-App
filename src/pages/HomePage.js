import React, { useState } from 'react';
import MovieList from '../components/MovieList';
import Filter from '../components/Filter';
import AddMovie from '../components/AddMovie';
import './HomePage.css';

const HomePage = ({ movies, addMovie }) => {
  const [filterTitle, setFilterTitle] = useState('');
  const [filterRating, setFilterRating] = useState('');

  // Filter movies based on title and rating
  const filteredMovies = movies.filter(movie => {
    const matchesTitle = movie.title.toLowerCase().includes(filterTitle.toLowerCase());
    const matchesRating = filterRating === '' || movie.rating >= parseInt(filterRating);
    return matchesTitle && matchesRating;
  });

  return (
    <div className="homepage">
      <header className="homepage-header">
        <h1>🎬 Movie App</h1>
        <p>Discover and explore your favorite movies</p>
      </header>
      
      <Filter 
        setFilterTitle={setFilterTitle}
        setFilterRating={setFilterRating}
      />
      
      <AddMovie addMovie={addMovie} />
      
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default HomePage;