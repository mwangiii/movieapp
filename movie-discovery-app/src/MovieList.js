import React, { useState, useEffect } from 'react';
import { fetchTopMovies } from './api';
import MovieList from './MovieList';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getTopMovies = async () => {
      try {
        const topMovies = await fetchTopMovies();
        setMovies(topMovies);
      } catch (error) {
        console.error('Error fetching top movies:', error);
      }
    };

    getTopMovies();
  }, []);

  return (
    <div className="home">
      <h1>Top 10 Movies</h1>
      {movies.length > 0 ? <MovieList movies={movies} /> : <p>Loading...</p>}
    </div>
  );
};

export default Home;
