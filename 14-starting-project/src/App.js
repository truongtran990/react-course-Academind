import React, { useState, useEffect, useCallback } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const url = "https://swapi.dev/api/films/";
  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      console.log('Fetching data from server...');
      const response = await fetch(url);
      if (!response.ok) {
        throw Error('Something went wrong!');
      }
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
      setError(error)
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler])
  

  let contents = <p>No movies was found to display</p>;
  if (error) {
    contents = <p>Something went wrong!</p>
  }
  if (isLoading) {
    contents = <h4>Loading ...</h4>
  }
  if (movies.length > 0) {
    contents = <MoviesList movies={movies} />;
  }
  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {contents}
      </section>
    </React.Fragment>
  );
}

export default App;
