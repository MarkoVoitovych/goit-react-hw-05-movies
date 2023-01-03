import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { getMoviesByQuery } from 'utils/themoviedbAPI';

function Movies() {
  const [searchQuery, setSearchQuery] = useSearchParams({ query: '' });
  const query = searchQuery.get('query');
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    if (query === '') return;
    (async () => {
      try {
        const { results } = await getMoviesByQuery(query);
        setMovies(results);
      } catch (error) {
        alert(error.message);
      }
    })();
  }, [query]);

  const handleQuerySubmit = e => {
    e.preventDefault();
    const searchQuery = e.target.elements.query.value.trim();
    if (searchQuery === '') {
      e.target.reset();
      return;
    }
    setSearchQuery({ query: searchQuery });
    e.target.reset();
  };
  return (
    <>
      <form onSubmit={handleQuerySubmit}>
        <input type="text" name="query" autoFocus />
        <button type="submit">Search</button>
      </form>
      {query && (
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
      )}
    </>
  );
}

export default Movies;
