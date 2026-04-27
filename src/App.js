import React, { useState } from 'react';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import AddMovie from './components/AddMovie';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Inception",
      description: "A thief who steals corporate secrets through dream-sharing technology.",
      posterURL: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
      rating: 5
    },
    {
      id: 2,
      title: "The Dark Knight",
      description: "Batman faces the Joker, a criminal mastermind who wants to create chaos.",
      posterURL: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
      rating: 5
    },
    {
      id: 3,
      title: "Stranger Things",
      description: "A group of kids uncover supernatural mysteries in their small town.",
      posterURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXiiIBUHWMCiD_oNAIutvj12l9bcRYKMcU2A&s",
      rating: 4
    },
    {
      id: 4,
      title: "The Matrix",
      description: "A computer hacker learns the reality is a simulation controlled by machines.",
      posterURL: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
      rating: 5
    }
  ]);

  const [filterTitle, setFilterTitle] = useState('');
  const [filterRating, setFilterRating] = useState('');

  const addMovie = (newMovie) => {
    setMovies([...movies, { ...newMovie, id: movies.length + 1 }]);
  };

  // Filter movies based on title and rating
  const filteredMovies = movies.filter(movie => {
    const matchesTitle = movie.title.toLowerCase().includes(filterTitle.toLowerCase());
    const matchesRating = filterRating === '' || movie.rating >= parseInt(filterRating);
    return matchesTitle && matchesRating;
  });

  return (
    <div className="app">
      <h1>🎬 Movie App</h1>
      <Filter 
        setFilterTitle={setFilterTitle}
        setFilterRating={setFilterRating}
      />
      <AddMovie addMovie={addMovie} />
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;