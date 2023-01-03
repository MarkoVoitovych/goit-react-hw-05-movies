import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'utils/themoviedbAPI';

function Cast() {
  const { movieId } = useParams();
  const [credits, setCredits] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const { cast } = await getMovieCredits(movieId);
        setCredits(cast);
      } catch (error) {
        alert(error.message);
      }
    })();
  }, [movieId]);

  return (
    <ul>
      {credits &&
        credits.map(({ id, original_name, character, profile_path }) => {
          return (
            <li key={id}>
              <img
                src={`https://image.tmdb.org/t/p/w300${profile_path}`}
                alt={original_name}
                height="100"
              />
              <p>{original_name}</p>
              <p>Character: {character}</p>
            </li>
          );
        })}
    </ul>
  );
}

export default Cast;
