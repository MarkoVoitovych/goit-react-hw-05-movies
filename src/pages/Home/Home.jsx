import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { getPopularMovies } from '../../utils/themoviedbAPI';

const Home = () => {
  const [movies, setMovies] = useState([]);

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
              <NavLink to={`/movies/${movie.id}`}>{movie.title}</NavLink>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Home;
