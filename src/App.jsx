import MovieForm from './components/MovieForm';
import Navbar from './components/Navbar';
import { useState } from 'react';
import MovieList from './components/Movielist';

function App() {
  const [movies, setMovies] = useState([

  ]);

  const addMovie = (newMovie) => {
    console.log('Adding the new movie.', newMovie);
    setMovies((prev) => [...prev, newMovie]);
  };

  const removeMovie = (id) => {
    // we are accessing movies directly
    // const filteredArray = movies.filter((movie) => {movie.id !== id});
    setMovies((prev) => prev.filter((movie) => movie.id !== id));
  };

  return (
    <>
      <Navbar />
      <div className="d-flex justify-content-center">
        <MovieForm addMovie={addMovie} />
      </div>
      <MovieList movies={movies} removeMovie={removeMovie} />
    </>
  );
}

export default App;