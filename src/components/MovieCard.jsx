/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function MovieCard({
  movie: { id,title, original_title, poster_path, media_type,overview },
}) {
  const IMG = `https://image.tmdb.org/t/p/original/`;
  return (
    <div className="movie-card">
      {poster_path ? (
        <img src={IMG + poster_path} alt={title} />
      ) : (
        <img src="https://placehold.co/400" />
      )}
      <h2>{media_type}</h2>
      <h1> {original_title} </h1>
      <p>
        {' '}
        {overview ? (
          <p>{overview.slice(0,140)}</p>
        ) : (
          <p>No overview is available</p>
        )}
        ...{' '}
      </p>
      <Link className="link-anchor" to={`/movie/${id}`}>
        {' '}
        Show More{' '}
      </Link>
    </div>
  );
}
