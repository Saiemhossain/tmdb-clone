/* eslint-disable react/jsx-key */
// /* eslint-disable react/jsx-key */
// /* eslint-disable no-unused-vars */

import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import bg from '../assets/bg.jpg'


const API = `https://api.themoviedb.org/3/search/multi`;
 
 const KEY = `&api_key=46085444a3007d79e64cab4b056cbe8c`;

export default function Home() {

  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  const searchAll = async (title="batman") => {
    const res = await fetch(`${API}?query=${title}${KEY}`);
    const data = await res.json();
    console.log(data.results);
    setMovies(data.results);
  }

  useEffect(() => {
    searchAll();
  },[])
  return (
    <>
      <div>
        <div
          className="hero-sec"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '80vh',
            width: '100%',
          }}
        >
          <h1>Welcome</h1>
          <h2>
            Millions of movies, TV shows and people to discover. Explore now.
          </h2>
          <div className="search-input">
            <input
              className="input-sec"
              type="text"
              placeholder="Search for movie,tv show.."
              onChange={e => setSearch(e.target.value)}
            />
            <div className="btn-hero">
              <button onClick={() => searchAll(search)}>Search</button>
            </div>
          </div>
        </div>
      </div>
      <div>
        {movies.length > 0 ? (
          <div className="movie-list">
            {' '}
            {movies.map(movie => (
              <MovieCard key={movie.id} movie={movie} />
            ))}{' '}
          </div>
        ) : (
          <h2>no data found</h2>
        )}
      </div>
    </>
  );
}



