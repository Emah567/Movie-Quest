
import  { useState, useEffect } from "react";
import MovieCard from "./movieCard";
import SearchIcon from "./search.svg";
import "./movie.css";

const API_KEY = 'aadd9a7f'; 
const API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}`;

const Movie = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies("avengers");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  return (
  
    <div className="moviebody">
    <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies" />
        <div className="btn">
          <img
            src={SearchIcon}
            alt="search"
            onClick={() => searchMovies(searchTerm)} />
        </div>
      </div>
      
      <div className="app">

        {movies?.length > 0 ? (
          <div className="container">
            {movies.map((movie) => (
              <MovieCard key={movie.imdbID} movie={movie} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No movies found</h2>
          </div>
        )}

      </div>

    </div>
      
  
  );
};

export default Movie;
