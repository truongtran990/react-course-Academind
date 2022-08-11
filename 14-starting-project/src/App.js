import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const url = "https://swapi.dev/api/films/";
  const fetchMoviesHandler = async () => {
    setIsLoading(true);
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
    setIsLoading(false);
  }
  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && <h4>No movies was found to display</h4>}
        {isLoading && <h4>Loading ...</h4>}
      </section>
    </React.Fragment>
  );
}

export default App;
