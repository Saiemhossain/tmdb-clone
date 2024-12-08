/* eslint-disable react/jsx-key */
/* eslint-disable no-undef */
import { useEffect, useState } from "react"
import MovieCard from "./MovieCard";

export default function Movies() {
  const [movies, setMovies] = useState([]);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NjA4NTQ0NGEzMDA3ZDc5ZTY0Y2FiNGIwNTZjYmU4YyIsIm5iZiI6MTcyNDc2NTM5NC4zNDIwMDAyLCJzdWIiOiI2NmNkZDRkMmQzYjVmYWU0ZDA4YmYwY2UiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.QNTphTEnxKGbw_0GvIHEu6gsLwxUzQPB08sYiJsW_Ik',
    },
  };

  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/trending/all/day?language=en-US',
      options
    )
      .then(res => res.json())
      .then(res => {
        console.log(res.results)
        setMovies(res.results)
      })
      .catch(err => console.error(err));
  },[])
  return (
    <div>
      {
        movies.length > 0 ? <div className="movie-list"> { movies.map((movie) => <MovieCard key={movie.id} movie={movie} />  ) }  </div> : <h1>no data found</h1>
      }
    </div>
  )
}
