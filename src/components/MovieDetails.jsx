/* eslint-disable no-undef */
import { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router';

export default function MovieDetails() {
  const { id } = useParams();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const media_type = queryParams.get('media_type'); // movie or tv

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      const endpoint =
        media_type === 'tv'
          ? `https://api.themoviedb.org/3/tv/${id}`
          : `https://api.themoviedb.org/3/movie/${id}`;

      try {
        const response = await fetch(
          `${endpoint}?api_key=46085444a3007d79e64cab4b056cbe8c`
        );
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchDetails();
  }, [id, media_type]);

  const IMG = 'https://image.tmdb.org/t/p/original/';

  return (
    <div>
      {movie ? (
        <div className='movie-detail'>
          <img
            src={movie.poster_path ? IMG + movie.poster_path : 'https://placehold.co/400'}
            alt={movie.title || movie.name}
            style={{ width: '350px', height: 'auto' }}
          />
          <h1>{movie.title || movie.name}</h1>
          <p>{movie.overview}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
