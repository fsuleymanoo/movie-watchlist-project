import { useEffect, useState } from "react";
import { isValidTitle, isValidRate } from "../utils.js";

function MovieForm({ addMovie, editingMovie, updateMovie }) {
  const [title, setTitle] = useState("");
  const [rate, setRate] = useState("");

  const [validTitle, setValidTitle] = useState(true);
  const [validRate, setValidRate] = useState(true);

  useEffect(() => {
    if (editingMovie) {
      setTitle(editingMovie.title);
      setRate(editingMovie.rate);
      setValidTitle(true);
      setValidRate(true);
    }
  }, [editingMovie]);

  const handleTitleInput = (e) => {
    const value = e.target.value;
    setTitle(value);
    setValidTitle(isValidTitle(value));
  };

  const handleRateInput = (e) => {
    const value = e.target.value;
    setRate(value);
    setValidRate(isValidRate(value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValidRate(rate) || !isValidTitle(title)) {
      return;
    }

    const movieData = {
      id: editingMovie ? editingMovie.id : Date.now(),
      title: title,
      rate: rate,
    };
    if (editingMovie) {
      updateMovie(movieData);
    } else {
      addMovie(movieData);
    }

    console.log("New Movie Captured: ", movieData);

    // Reset the state
    setTitle("");
    setRate("");
    setValidRate(false);
    setValidTitle(false);
  };

  const isFormValid = validTitle && validRate;

  return (
    <form
      onSubmit={handleSubmit}
      className="z-1 p-3 mt-5 border border-2 rounded-2 d-xl-flex gap-1 col-lg-4 col-md-6 col-11 neon-shadow"
    >
      <div className="col-xl-7 col-12 mb-1">
        <div className="form-floating">
          <input
            onChange={handleTitleInput}
            type="text"
            className={`form-control ${validTitle ? "" : "is-invalid"}`}
            id="movie-title"
            placeholder="Movie Title"
            value={title}
          />
          <label htmlFor="movie-title">Movie Title</label>
        </div>
      </div>
      <div className="col-xl-3 col-12 mb-1">
        <div className="form-floating">
          <input
            onChange={handleRateInput}
            type="number"
            className={`form-control ${validRate ? "" : "is-invalid"}`}
            id="movie-rate"
            placeholder="Movie Title"
            value={rate}
          />
          <label htmlFor="movie-rate">Rate(1-10)</label>
        </div>
      </div>
      <button
        id="submit-btn"
        type="submit"
        className="btn btn-warning btn-sm col-xl-2 col-12"
        disabled={!isFormValid}
      >
        {editingMovie ? "Update" : "Add"}
      </button>
    </form>
  );
}

export default MovieForm;
