import { useEffect, useState } from 'react';
import { NavLink, useSearchParams } from 'react-router-dom';
import { getMoviesByQuery } from 'utils/themoviedbAPI';

function Movies() {
  const [searchQuery, setSearchQuery] = useSearchParams({ query: '' });
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (searchQuery.get('query') === '') return;
    (async () => {
      try {
        const { results } = await getMoviesByQuery(searchQuery.get('query'));
        setMovies(results);
      } catch (error) {
        alert(error.message);
      }
    })();
  }, [searchQuery]);

  const handleQuerySubmit = e => {
    e.preventDefault();
    if (e.target.elements.query.value.trim() === '') {
      e.target.reset();
      return;
    }
    setSearchQuery({ query: e.target.elements.query.value.trim() });
    e.target.reset();
  };
  return (
    <>
      <form onSubmit={handleQuerySubmit}>
        <input type="text" name="query" />
        <button type="submit">Search</button>
      </form>
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
}

export default Movies;
