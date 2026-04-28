import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Inception",
      description: "A thief who steals corporate secrets through dream-sharing technology. Dom Cobb (Leonardo DiCaprio) is a skilled thief, the absolute best in the dangerous art of extraction, stealing valuable secrets from deep within the subconscious during the dream state. His ability has made him a wanted player in corporate espionage, but it has also cost him everything he loves. Cobb gets a chance at redemption when he is offered a seemingly impossible task: Plant an idea in someone's mind. If he succeeds, it will be the perfect crime, but a dangerous enemy anticipates his every move.",
      posterURL: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
      rating: 5,
      trailerLink: "https://www.youtube.com/embed/YoHD9XEInc0"
    },
    {
      id: 2,
      title: "The Dark Knight",
      description: "Batman faces the Joker, a criminal mastermind who wants to create chaos in Gotham City. With the help of Lieutenant Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the city streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known as the Joker.",
      posterURL: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
      rating: 5,
      trailerLink: "https://www.youtube.com/embed/EXeTwQWrcwY"
    },
    {
      id: 3,
      title: "Stranger Things",
      description: "A group of kids uncover supernatural mysteries in their small town of Hawkins, Indiana. When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl. The series is set in the 1980s and pays homage to pop culture of that era, including films like E.T., The Goonies, and Poltergeist.",
      posterURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXiiIBUHWMCiD_oNAIutvj12l9bcRYKMcU2A&s",
      rating: 4,
      trailerLink: "https://www.youtube.com/embed/b9EkMc79ZSU"
    },
    {
      id: 4,
      title: "The Matrix",
      description: "A computer hacker learns the reality is a simulation controlled by machines. Neo, a computer hacker, has always felt something is wrong with the world. He discovers the truth: humans live in a simulated reality called the Matrix, created by machines to control humanity while using their bodies as an energy source. Morpheus, a legendary hacker, offers Neo the chance to learn the truth and fight against the machines.",
      posterURL: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
      rating: 5,
      trailerLink: "https://www.youtube.com/embed/vKQi3bBA1y8"
    }
  ]);

  const addMovie = (newMovie) => {
    setMovies([...movies, { ...newMovie, id: movies.length + 1 }]);
  };

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage movies={movies} addMovie={addMovie} />} />
          <Route path="/movie/:id" element={<MovieDetailsPage movies={movies} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;