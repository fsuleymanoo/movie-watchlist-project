import MovieForm from "./components/MovieForm";
import Navbar from "./components/Navbar";
import { useState } from "react";
import MovieList from "./components/Movielist";
import Themetoggler from "./components/Themetoggler";

function App() {
  const [movies, setMovies] = useState([]);

  const [editingMovie, setEditingMovie] = useState(null);

  const addMovie = (newMovie) => {
    console.log("Adding the new movie.", newMovie);
    setMovies((prev) => [...prev, newMovie]);
  };

  const removeMovie = (id) => {
    // we are accessing movies directly
    // const filteredArray = movies.filter((movie) => {movie.id !== id});
    setMovies((prev) => prev.filter((movie) => movie.id !== id));
  };

  const editMovie = (movieToEdit) => {
    setEditingMovie(movieToEdit);
  };

  const updateMovie = (updatedMovie) => {
    setMovies((prev) =>
      prev.map((movie) => (movie.id === updatedMovie.id ? updatedMovie : movie))
    );
    setEditingMovie(null);
  };

  return (
    <>
      <Navbar>
        <Themetoggler />
      </Navbar>
      <div className="d-flex justify-content-center">
        <MovieForm
          addMovie={addMovie}
          editingMovie={editingMovie}
          updateMovie={updateMovie}
        />
      </div>
      <MovieList
        movies={movies}
        editMovie={editMovie}
        removeMovie={removeMovie}
      />
    </>
  );
}

export default App;
