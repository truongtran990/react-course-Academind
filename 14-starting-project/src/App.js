import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);

  const url = "https://swapi.dev/api/films/";
  const fetchMoviesHandler = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      const transformedData = data.results.map(movieData => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          releaseDate: movieData.release_date,
          openingText: movieData.opening_crawl,
        }
      });
      setMovies(transformedData);
    } catch (error) {
      console.log('Error when fetching data from server ', url);
      console.log('Error: ', error);
    }
  }
  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
