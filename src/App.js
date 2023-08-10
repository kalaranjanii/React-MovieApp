import React, { useEffect, useState } from "react";
import { Movies } from "./Components/Movie";

const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=de2662acad323f82d52481b3961e00ea";

const searchURL =
  "https://api.themoviedb.org/3/search/movie?api_key=de2662acad323f82d52481b3961e00ea&query=";

function App() {
  const [Movie, setMovie] = useState([]);
  const [searchTerm, setsearchTerm] = useState("");
  useEffect(() => {
    getMovies(API_URL);
  }, []);
  const getMovies = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovie(data.results);
      });
  };
  const handleSubmit = (e) => {
    console.log(e);
    e.preventDefault();
    getMovies(searchURL + searchTerm);

    setsearchTerm("");
  };

  const handleChange = (e) => {
    setsearchTerm(e.target.value);
  };
  return (
    <>
      <header>
        <form onSubmit={handleSubmit}>
          <h1>Movie App</h1>
          <input
            className="search"
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleChange}
          />
        </form>
      </header>
      <div className="movie-container">
        {Movie.map((movie) => (
          <Movies key={movie.id} {...movie} />
        ))}
      </div>
    </>
  );
}
export default App;
