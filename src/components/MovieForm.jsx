import { useState } from 'react';

function MovieForm({addMovie}) {
  const [title, setTitle] = useState('');
  const [rate, setRate] = useState('');

  const handleTitleInput = (e) => {
    setTitle(e.target.value);
  };

  const handleRateInput = (e) => {
    setRate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newMovie = {
        id: Date.now(),
        title: title,
        rate: rate
    }

    addMovie(newMovie);


    console.log('New Movie Captured: ', newMovie);

    // Reset the state
    setTitle('');
    setRate('');
  }

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
            className="form-control"
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
            className="form-control"
            id="movie-rate"
            placeholder="Movie Title"
            value={rate}
          />
          <label htmlFor="movie-rate">Rate(1-10)</label>
        </div>
      </div>
      <button type="submit" className="btn btn-warning btn-sm col-xl-2 col-12">
        Add
      </button>
    </form>
  );
}

export default MovieForm;
