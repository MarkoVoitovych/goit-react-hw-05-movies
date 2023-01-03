import { useEffect, useState } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import { getMovieById } from 'utils/themoviedbAPI';

function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  const posterPath = `https://image.tmdb.org/t/p/w300${movie?.poster_path}`;
  const genres = movie?.genres.map(genre => genre.name).join(' ');
  const userScore = Math.round(movie?.vote_average * 10);

  useEffect(() => {
    (async () => {
      try {
        const data = await getMovieById(movieId);
        setMovie(data);
      } catch (error) {
        alert(error.message);
      }
    })();
  }, [movieId]);

  return (
    <>
      <button>Go back</button>
      {movie && (
        <div>
          <img src={posterPath} alt={movie.title} height="300" />
          <div>
            <h3>{movie.title}</h3>
            <p>User Score: {userScore}%</p>
            <p>Overview</p>
            <p>{movie.overview}</p>
            <p>Genges</p>
            <p>{genres}</p>
          </div>
        </div>
      )}
      <p>Additional information</p>
      <ul>
        <li>
          <NavLink to="cast">Cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </ul>
      <Outlet />
    </>
  );
}

export default MovieDetails;
