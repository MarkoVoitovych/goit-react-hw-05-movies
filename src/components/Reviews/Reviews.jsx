import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'utils/themoviedbAPI';

function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const { results } = await getMovieReviews(movieId);
        setReviews(results);
      } catch (error) {
        alert(error.message);
      }
    })();
  }, [movieId]);
  return (
    <ul>
      {reviews &&
        reviews.map(({ author, content, id }) => {
          return (
            <li key={id}>
              <p>Author: {author}</p>
              <p>{content}</p>
            </li>
          );
        })}
    </ul>
  );
}

export default Reviews;
