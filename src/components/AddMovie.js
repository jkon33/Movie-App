import React, { useState } from 'react';
import './AddMovie.css';

const AddMovie = ({ addMovie }) => {
  const [showForm, setShowForm] = useState(false);
  const [newMovie, setNewMovie] = useState({
    title: '',
    description: '',
    posterURL: '',
    rating: 1,
    trailerLink: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewMovie({
      ...newMovie,
      [name]: name === 'rating' ? parseInt(value) : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newMovie.title && newMovie.description && newMovie.posterURL && newMovie.trailerLink) {
      addMovie(newMovie);
      setNewMovie({
        title: '',
        description: '',
        posterURL: '',
        rating: 1,
        trailerLink: ''
      });
      setShowForm(false);
    } else {
      alert('Please fill in all fields including trailer link!');
    }
  };

  return (
    <div className="add-movie">
      <button 
        className="add-movie-btn"
        onClick={() => setShowForm(!showForm)}
      >
        {showForm ? 'Cancel' : '+ Add New Movie'}
      </button>

      {showForm && (
        <form className="movie-form" onSubmit={handleSubmit}>
          <h3>Add New Movie</h3>
          <input
            type="text"
            name="title"
            placeholder="Movie Title"
            value={newMovie.title}
            onChange={handleChange}
            required
          />
          <textarea
            name="description"
            placeholder="Movie Description"
            value={newMovie.description}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="posterURL"
            placeholder="Poster URL"
            value={newMovie.posterURL}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="trailerLink"
            placeholder="YouTube Embed Link (e.g., https://www.youtube.com/embed/VIDEO_ID)"
            value={newMovie.trailerLink}
            onChange={handleChange}
            required
          />
          <select
            name="rating"
            value={newMovie.rating}
            onChange={handleChange}
          >
            <option value="1">★</option>
            <option value="2">★★</option>
            <option value="3">★★★</option>
            <option value="4">★★★★</option>
            <option value="5">★★★★★</option>
          </select>
          <button type="submit">Add Movie</button>
        </form>
      )}
    </div>
  );
};

export default AddMovie;