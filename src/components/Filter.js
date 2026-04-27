import React from 'react';
import './Filter.css';

const Filter = ({ setFilterTitle, setFilterRating }) => {
  const handleTitleChange = (e) => {
    setFilterTitle(e.target.value);
  };

  const handleRatingChange = (e) => {
    setFilterRating(e.target.value);
  };

  return (
    <div className="filter-container">
      <div className="filter-group">
        <label>Filter by Title:</label>
        <input
          type="text"
          placeholder="Search by movie title..."
          onChange={handleTitleChange}
          className="filter-input"
        />
      </div>
      
      <div className="filter-group">
        <label>Filter by Rating:</label>
        <select onChange={handleRatingChange} className="filter-select">
          <option value="">All Ratings</option>
          <option value="1">★ and above</option>
          <option value="2">★★ and above</option>
          <option value="3">★★★ and above</option>
          <option value="4">★★★★ and above</option>
          <option value="5">★★★★★ only</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;