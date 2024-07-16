import React, { useState } from 'react';
import RateMovieButton from './RateMovieButton';
import MovieSelector from './MovieSelector';
import UploadButton from './UploadButton';
import './Toolbar.css';

const Toolbar = () => {
  const movies = ['The Godfather', 'The Dark Knight', 'The Lord of the Rings: The Return of the King','Forrest Gump','The Matrix'];
  const [selectedMovie, setSelectedMovie] = useState(movies[0]);

  return (
    <div className="toolbar">
      <MovieSelector
        movies={movies}
        selectedMovie={selectedMovie}
        setSelectedMovie={setSelectedMovie}
      />
      <RateMovieButton movie={selectedMovie} />
      <UploadButton />
    </div>
  );
};

export default Toolbar;
