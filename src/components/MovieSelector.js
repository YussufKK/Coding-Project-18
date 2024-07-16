import React from 'react';
import './MovieSelector.css';

const MovieSelector = ({ movies, selectedMovie, setSelectedMovie }) => {
  return (
    <div className="movie-selector">
      <select
        value={selectedMovie}
        onChange={(e) => setSelectedMovie(e.target.value)}
      >
        {movies.map((movie) => (
          <option key={movie} value={movie}>
            {movie}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MovieSelector;
