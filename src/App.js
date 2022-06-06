import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Discription from "./components/Discription";
import MoviesList from "./components/MoviesList";
import SearchMovies from "./components/SearchMovies";
import { moviesData } from "./Data";

function App() {
  const [movies, setMovies] = useState(moviesData);
  const [searchRating, setSearchRating] = useState(1);
  const [searchValue, setSearchValue] = useState("");

  const handleAdd = (newMovie) => setMovies([...movies, newMovie]);
  const handleRating = (newRate) => setSearchRating(newRate);
  const handleSearch = (e) => setSearchValue(e.target.value);

  return (
    <div>
      <BrowserRouter>
      <SearchMovies
        searchRating={searchRating}
        searchValue={searchValue}
        handleRating={handleRating}
        handleSearch={handleSearch}
        handleAdd={handleAdd}
      />
      <Routes>
        <Route path="/" element={ <MoviesList
          movies={movies.filter(
            (movie) =>
              movie.name
                .toLowerCase()
                .includes(searchValue.toLocaleLowerCase().trim()) &&
              movie.rating >= searchRating
          )}
        />} />
        <Route path="/discription/:id" element={<Discription movies={movies} />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
