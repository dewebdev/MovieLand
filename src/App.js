import React, { useEffect, useState } from "react";
import "./App.css";
import searchIcon from "./icons/search.svg";
import MovieCard from "./MovieCard";

const API__KEY = process.env.REACT_APP_MOVIELAND_KEY;
const API__URL = "http://www.omdbapi.com/?apikey=" + API__KEY;

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  async function searchMovies(searchTerm) {
    const response = await fetch(`${API__URL}&s=${searchTerm}`);
    const data = await response.json();
    setMovies(data.Search);
  }
  useEffect(() => {
    searchMovies("batman");
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
        <img
          src={searchIcon}
          alt="SearchIcon"
          onClick={() => {
            if (searchTerm !== "") {
              searchMovies(searchTerm);
            }
          }}
        />
      </div>
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
  );
};

export default App;
