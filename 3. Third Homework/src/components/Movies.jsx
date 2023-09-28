import PropTypes, { object } from "prop-types";
import "./movies.css";

export function Movies({ movies }) {
  console.log(movies);
  return (
    <div>
      <h2>My Top 5 Movies</h2>
      <table style={{}} className="movies">
        <thead>
          <tr>
            <th>Name</th>
            <th>Date</th>
            <th>Genre</th>
            <th>Plot</th>
            <th>Url Link</th>
            <th>Image Link</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie, index) => {
            return (
              <tr key={index}>
                <td>{movie.name}</td>
                <td>{movie.date}</td>
                <td>{movie.genre}</td>
                <td>{movie.plot}</td>
                <td>
                  <a href={movie.imdbLink}>Link to the movie {movie.name}</a>
                </td>
                <td>
                  <img
                    src={movie.imgUrl}
                    alt="image"
                    style={{ width: "80px", height: "80px" }}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

Movies.propTypes = {
  movies: PropTypes.arrayOf(object),
};
