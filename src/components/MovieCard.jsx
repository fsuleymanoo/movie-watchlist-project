import { FaTrashCan } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";

function MovieCard({ movie, editMovie, removeMovie }) {
  return (
    <div className="col-6">
      <div className="card bg-bone-white text-dark position-relative">
        <span className="position-absolute translate-middle badge bg-success custom-badge-position">
          {movie.rate}
        </span>

        <div className="card-body d-flex justify-content-between">
          <h3 className="card-title m-0">{movie.title}</h3>
          <div>
            <button
              className="text-danger btn"
              onClick={() => editMovie(movie)}
            >
              <FaEdit size={"1.1rem"} />
            </button>
            <button
              onClick={() => removeMovie(movie.id)}
              className="text-danger btn"
            >
              <FaTrashCan />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
