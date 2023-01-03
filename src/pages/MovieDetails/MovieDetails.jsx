import { useEffect, useState, useRef, Suspense } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieById } from 'utils/themoviedbAPI';

function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/movies');

  const posterPath = `https://image.tmdb.org/t/p/w300${movie?.poster_path}`;
  const genres = movie?.genres.map(genre => genre.name).join(' ');
  const userScore = Math.round(movie?.vote_average * 10);
  const releaseYear =
    new Date(Date.parse(movie?.release_date)).getFullYear() || '';

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
      <Link to={backLink.current}>Go back</Link>
      {movie && (
        <div>
          <img src={posterPath} alt={movie.title} height="300" />
          <div>
            <h3>
              {movie.title} ({releaseYear})
            </h3>
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
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
}

export default MovieDetails;
