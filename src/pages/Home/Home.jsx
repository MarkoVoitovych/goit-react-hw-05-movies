import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getPopularMovies } from '../../utils/themoviedbAPI';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    (async () => {
      try {
        const { results } = await getPopularMovies();
        setMovies(results);
      } catch (error) {
        alert(error.message);
      }
    })();
  }, []);

  return (
    <>
      <h2>Trending today</h2>
      <ul>
        {movies.map(movie => {
          return (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Home;
