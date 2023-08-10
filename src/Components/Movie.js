import React from "react";
const IMG_URL = "https://image.tmdb.org/t/p/w500";

function getColor(vote) {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 5) {
    return "orange";
  } else {
    return "red";
  }
}

const Movies = ({ title, poster_path, vote_average, overview }) => {
  return (
    <>
      <div className="movie">
        <img
          src={
            poster_path
              ? IMG_URL + poster_path
              : "https://bcccurrent.com/wp-content/uploads/2022/05/films.jpg"
          }
          alt={title}
        />
        <div className="movie-info">
          <h3>{title}</h3>
          <span className={getColor(vote_average)}>{vote_average}</span>
        </div>
        <div className="movie-overview">
          <h2>Overview</h2>
          <p>{overview}</p>
        </div>
      </div>
    </>
  );
};
export { Movies };
