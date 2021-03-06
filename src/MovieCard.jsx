import React from "react";
import "./App.css";

function MovieCard(props) {
  return (
    <div className="movie">
      <div>
        <p>{props.movie.Year}</p>
      </div>

      <div>
        <img
          src={
            props.movie.Poster !== "N/A"
              ? props.movie.Poster
              : "https://via.placeholder.com/400x400.png?text=Poster+Not+Available"
          }
          alt={props.movie.Title}
        />
      </div>

      <div>
        <span>{props.movie.Type}</span>
        <h3>{props.movie.Title}</h3>
      </div>
    </div>
  );
}
export default MovieCard;
